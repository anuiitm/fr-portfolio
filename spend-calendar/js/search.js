// Search boxes: query parsing, matching, ranking and the result dropdown.

/* ---------------- search ---------------- */
// Every word must match. A number matches the amount (₹ and commas ignored,
// "764" finds ₹764 and ₹7,640, exact amounts listed first); ">5000" or
// "<= 200" bound it; a month ("oct", "october") or a year matches the date;
// anything else matches shop, items, for whom ("self" when blank), the card or "emi".
let searchQ = null;
function parseQuery(raw) {
  const words = raw.toLowerCase().replace(/₹/g, ' ').replace(/([<>]=?)\s+/g, '$1').split(/\s+/).filter(Boolean);
  return words.length ? words.map(w => {
    const cmp = /^([<>]=?)([\d,]*\.?\d+)$/.exec(w);
    if (cmp) return { w, cmp: cmp[1], v: parseFloat(cmp[2].replace(/,/g, '')) };
    const n = /^[\d,]*\.?\d+$/.test(w) ? w.replace(/,/g, '') : null;
    const mon = n === null && w.length >= 3 ? MONTHS.findIndex(M => M.toLowerCase().startsWith(w)) : -1;
    return { w, n, mon };
  }) : null;
}
const amtForms = a => [String(a), String(Math.round(a)), Number(a).toFixed(2)];
// One query word against a record: its lower-cased `text`, its amounts
// (the first is the one ">"/"<" compare) and its ISO date.
function termHit(t, text, amts, d) {
  if (t.cmp) {
    const a = amts[0];
    return t.cmp === '>' ? a > t.v : t.cmp === '>=' ? a >= t.v : t.cmp === '<' ? a < t.v : a <= t.v;
  }
  if (t.n !== null) {
    if (amts.some(a => amtForms(a).some(f => f.startsWith(t.n)))) return true;
    if (t.n.length === 4 && d && d.startsWith(t.n)) return true;
  }
  if (t.mon >= 0 && d && Number(d.slice(5, 7)) - 1 === t.mon) return true;
  return text.includes(t.w);
}
const expText = x => `${x.shop || ''} ${x.desc || ''} ${x.who || 'self'} ${(CARD[x.card] || {}).name || ''}${x.emi ? ' emi' : ''}`.toLowerCase();
function matchExpense(x, q) {
  const text = expText(x);
  return q.every(t => termHit(t, text, [x.amt], x.d));
}
// Ranks a match: an exact amount beats a prefix, and a word that starts
// with the query beats one that merely contains it.
function matchScore(x, q) {
  const words = expText(x).split(/\s+/);
  let s = 0;
  for (const t of q) {
    if (t.n !== null && round2(x.amt) === Number(t.n)) s += 3;
    else if (!t.cmp && words.some(w => w.startsWith(t.w))) s += 2;
  }
  return s;
}
// Escapes `str`, wrapping every place a query word occurs in <mark>.
function hl(str, q) {
  str = String(str ?? '');
  const low = str.toLowerCase(), on = new Array(str.length).fill(false);
  for (const t of q || []) {
    if (t.cmp) continue;
    for (let i = low.indexOf(t.w); i >= 0; i = low.indexOf(t.w, i + 1))
      for (let j = i; j < i + t.w.length; j++) on[j] = true;
  }
  let out = '', open = false;
  for (let i = 0; i < str.length; i++) {
    if (on[i] !== open) { out += open ? '</mark>' : '<mark>'; open = on[i]; }
    out += esc(str[i]);
  }
  return out + (open ? '</mark>' : '');
}
// Results for a dropdown: what's already happened first (best match, then
// newest), then future-dated charges such as EMI instalments, soonest first.
function rankMatches(q) {
  const t = todayKey(), past = [], later = [];
  for (const x of allExpenses()) if (matchExpense(x, q)) (x.d > t ? later : past).push({ x, s: matchScore(x, q) });
  past.sort((a, b) => b.s - a.s || b.x.d.localeCompare(a.x.d) || b.x.amt - a.x.amt);
  later.sort((a, b) => b.s - a.s || a.x.d.localeCompare(b.x.d) || b.x.amt - a.x.amt);
  return { past: past.map(r => r.x), later: later.map(r => r.x) };
}
// One search box: `<id>` input, `<id>-clear`, `<id>-results`. `onChange`
// gets the parsed query as it's typed; `onOpen` the picked expense id.
// Escape closes the list first and clears the box on a second press.
function makeSearch(id, onChange, onOpen) {
  const input = $(id), clear = $(id + '-clear'), box = $(id + '-results');
  let q = null, sel = 0, shut = false;
  function row(x, i) {
    const c = CARD[x.card] || CARDS[0], dt = isoDate(x.d);
    const st = countable(x) ? txState(x).status : null;
    const kind = x.marker ? `, EMI purchase, ${x.emi.n} instalments` : x.emi ? `, EMI ${x.emi.i}/${x.emi.n}` : '';
    return `<button class="sr ${i === sel ? 'on' : ''}" type="button" data-sid="${x.id}">
      <span class="sd">${dt.getDate()} ${MONTHS[dt.getMonth()].slice(0, 3)}<br>${dt.getFullYear()}</span>
      <span class="bar" style="background:${c.color}"></span>
      <span class="sw">
        <span class="s1">${hl(xName(x) || c.name, q)}</span>
        <span class="s2">${hl(x.who || 'Self', q)}, ${hl(c.name, q)}${kind}</span>
      </span>
      <span class="sa">${money2(x.amt)}${st ? `<s class="sq ${st === 'paid' ? 'paid' : st === 'part' ? 'part' : 'open'}" title="${st === 'paid' ? 'Paid' : st === 'part' ? 'Part paid' : 'Unpaid'}"></s>` : ''}</span>
    </button>`;
  }
  function paint() {
    clear.hidden = !q;
    if (!q || shut || document.activeElement !== input) { box.hidden = true; return; }
    const { past, later } = rankMatches(q);
    const total = past.length + later.length;
    const shownPast = past.slice(0, 60), shownLater = later.slice(0, Math.max(0, 60 - shownPast.length));
    const shown = shownPast.length + shownLater.length;
    sel = Math.min(sel, Math.max(0, shown - 1));
    box.hidden = false;
    if (!total) { box.innerHTML = '<div class="none">No transactions match.</div>'; return; }
    const sum = past.concat(later).filter(countable).reduce((a, b) => a + b.amt, 0);
    box.innerHTML = `<div class="shead">${total} match${total === 1 ? '' : 'es'}, ${money2(sum)}${total > shown ? `, showing ${shown}` : ''}</div>` +
      shownPast.map(row).join('') +
      (shownLater.length ? `<div class="sgroup">Upcoming (${later.length})</div>` + shownLater.map((x, i) => row(x, shownPast.length + i)).join('') : '');
    box.querySelectorAll('[data-sid]').forEach(b => b.onmousedown = e => { e.preventDefault(); pick(b.dataset.sid); });
  }
  function pick(sid) { input.blur(); box.hidden = true; onOpen(sid); }
  function set(v) { q = parseQuery(v); sel = 0; shut = false; onChange(q); paint(); }
  // Clicks inside the list (header, scrollbar) must not steal focus and close it.
  box.addEventListener('mousedown', e => e.preventDefault());
  input.addEventListener('input', e => set(e.target.value));
  input.addEventListener('focus', () => { shut = false; paint(); });
  input.addEventListener('click', () => { if (shut) { shut = false; paint(); } });
  input.addEventListener('blur', () => setTimeout(paint, 0));
  input.addEventListener('keydown', e => {
    const rows = box.querySelectorAll('[data-sid]');
    if (e.key === 'Escape') {
      e.preventDefault();
      if (!box.hidden) { shut = true; paint(); } else { input.value = ''; set(''); input.blur(); }
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (box.hidden && q) { shut = false; paint(); return; }
      if (!rows.length) return;
      e.preventDefault();
      sel = (sel + (e.key === 'ArrowDown' ? 1 : rows.length - 1)) % rows.length;
      paint();
      box.querySelector('.sr.on')?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && !box.hidden && rows[sel]) { e.preventDefault(); pick(rows[sel].dataset.sid); }
  });
  clear.onclick = () => { input.value = ''; set(''); input.focus(); };
}
// A search box that filters the list below it as you type, no dropdown.
function makeFilter(id, onChange) {
  const input = $(id), clear = $(id + '-clear');
  const set = v => { clear.hidden = !v.trim(); onChange(parseQuery(v)); };
  input.addEventListener('input', e => set(e.target.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); input.value = ''; set(''); input.blur(); }
  });
  clear.onclick = () => { input.value = ''; set(''); input.focus(); };
}
function openResult(id) {
  const x = findExpense(id);
  if (!x) return;
  const [Y, M] = x.d.split('-').map(Number);
  view = { y: Y, m: M - 1 }; selected = x.d;
  showTab('cal'); loadWindow(); startEdit(id);
  document.querySelector('.panel').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
makeSearch('q', q => { searchQ = q; renderGrid(); }, openResult);
makeSearch('bq', q => { billQ = q; renderBillList(); }, openInBills);
makeFilter('pq', q => { payQ = q; renderPayHistory(); });
makeFilter('uq', q => { unpaidQ = q; renderUnpaid(); });
