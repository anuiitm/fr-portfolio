// Looking up and naming charges, and statement / due date maths.

/* ---------------- data helpers ---------------- */
const countable = x => !x.marker;
// A description is a list, one item per line (numbers optional); older
// one-line descriptions are split on commas instead.
function descItems(s) {
  const lines = String(s || '').split('\n').map(l => l.replace(/^\s*\d+[.)]\s*/, '').trim()).filter(Boolean);
  return lines.length > 1 ? lines : (lines[0] || '').split(',').map(t => t.trim()).filter(Boolean);
}
const descShort = x => descItems(x.desc).slice(0, 2).join(', ');
// What a charge is called: its shop, plus its first two items when that adds something.
const xName = x => {
  const d = descShort(x);
  return x.shop && d && d.toLowerCase() !== x.shop.toLowerCase() ? `${x.shop}, ${d}` : x.shop || d;
};
// Which statement a charge lands in: the first cycle closing on or after it.
function stmtKey(cardId, iso) {
  const D = settings.cycle[cardId];
  if (!D) return iso.slice(0, 7);
  const [Y, M, Dd] = iso.split('-').map(Number);
  let y = Y, m = M - 1;
  const dt = new Date(Y, M - 1, Dd);
  if (closeDate(cardId, y, m) < dt) { m++; if (m > 11) { m = 0; y++; } }
  return ymKey(y, m);
}
function allExpenses() {
  const out = [];
  for (const k in months) for (const x of months[k]) out.push(x);
  return out;
}
function byDate(d) {
  const k = d.slice(0, 7);
  return (months[k] || []).filter(x => x.d === d).sort((a, b) => b.amt - a.amt);
}
function findExpense(id) {
  for (const k in months) { const x = (months[k] || []).find(e => e.id === id); if (x) return x; }
  return null;
}
function removeExpense(id) {
  for (const k in months) {
    const before = months[k].length;
    months[k] = months[k].filter(e => e.id !== id);
    if (months[k].length !== before) { saveMonth(k); unlinkTxPayments([id]); return; }
  }
}
// `keepPays` leaves the instalments' payments in place for the caller to
// re-file; it gets back the removed instalments.
function removeSeries(gid, keepPays) {
  const gone = [], items = [];
  for (const k in months) {
    const before = months[k].length;
    months[k] = months[k].filter(e => {
      const hit = e.emi && e.emi.gid === gid;
      if (hit) { gone.push(e.id); items.push(e); }
      return !hit;
    });
    if (months[k].length !== before) saveMonth(k);
  }
  if (!keepPays) unlinkTxPayments(gone);
  return items;
}
function cycleRange(cardId) {
  const close = settings.cycle[cardId];
  const { y, m } = view;
  if (settings.mode !== 'cycle' || !close) return [dKey(y, m, 1), dKey(y, m, daysIn(y, m))];
  const p = new Date(y, m - 1, 1), py = p.getFullYear(), pm = p.getMonth(), pd = daysIn(py, pm);
  const startDay = Math.min(close, pd) + 1;
  const start = startDay > pd ? dKey(y, m, 1) : dKey(py, pm, startDay);
  return [start, dKey(y, m, Math.min(close, daysIn(y, m)))];
}
function totalFor(cardId) {
  const [s, e] = cycleRange(cardId);
  let t = 0;
  for (const x of allExpenses()) if (countable(x) && x.card === cardId && x.d >= s && x.d <= e) t += x.amt;
  return t;
}
function rangeLabel(cardId) {
  const close = settings.cycle[cardId];
  if (settings.mode !== 'cycle' || !close) return '';
  const [s, e] = cycleRange(cardId);
  const f = d => { const [Y, M, D] = d.split('-').map(Number); return `${D} ${MONTHS[M - 1].slice(0, 3)}`; };
  const du = dueDate(cardId, closeDate(cardId, view.y, view.m));
  return `${f(s)} – ${f(e)}${du ? `, due ${fmtShort(du)}` : ''}`;
}

/* ---------------- statement & due dates ---------------- */
const fmtShort = dt => `${dt.getDate()} ${MONTHS[dt.getMonth()].slice(0, 3)}`;
const fmtLong = dt => `${dt.getDate()} ${MONTHS[dt.getMonth()].slice(0, 3)} ${dt.getFullYear()}`;
const toKey = dt => dKey(dt.getFullYear(), dt.getMonth(), dt.getDate());

// The day a card's statement closes in a given month.
function closeDate(cardId, y, m) {
  const D = settings.cycle[cardId];
  if (!D) return null;
  return new Date(y, m, Math.min(D, daysIn(y, m)));
}
// Charges post the day before close so they land on that statement.
function postDate(cardId, y, m) {
  const cl = closeDate(cardId, y, m);
  if (!cl) return null;
  const p = new Date(cl); p.setDate(p.getDate() - 1);
  return p;
}
// Payment due date for the statement closing on `cl`.
function dueDate(cardId, cl) {
  const cfg = (settings.due || {})[cardId];
  if (!cfg || !cl || !cfg.mode || !(cfg.v > 0)) return null;
  if (cfg.mode === 'days') { const d = new Date(cl); d.setDate(d.getDate() + cfg.v); return d; }
  let y = cl.getFullYear(), m = cl.getMonth();
  let cand = new Date(y, m, Math.min(cfg.v, daysIn(y, m)));
  if (cand <= cl) { m++; if (m > 11) { m = 0; y++; } cand = new Date(y, m, Math.min(cfg.v, daysIn(y, m))); }
  return cand;
}
