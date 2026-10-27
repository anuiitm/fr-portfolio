// Bills and payments: what each statement holds, what is paid, per-charge ticks.

/* ---------------- bills ---------------- */
const round2 = n => Math.round(n * 100) / 100;
const isoDate = iso => new Date(Number(iso.slice(0, 4)), Number(iso.slice(5, 7)) - 1, Number(iso.slice(8, 10)));
const payKey = (card, sk) => card + ':' + sk;
const payLog = (card, sk) => payments[payKey(card, sk)] || [];
const paidOn = (card, sk) => payLog(card, sk).reduce((a, b) => a + (Number(b.amt) || 0), 0);

function addPayment(card, sk, amt, on) {
  const k = payKey(card, sk);
  (payments[k] = payments[k] || []).push({ id: uid(), amt: round2(amt), on: on || todayKey() });
  savePayments();
  syncBill(card, sk);
}
function dropPayment(card, sk, id) {
  const k = payKey(card, sk);
  payments[k] = payLog(card, sk).filter(p => p.id !== id);
  if (!payments[k].length) delete payments[k];
  savePayments();
  syncBill(card, sk);
}
function clearPayments(card, sk) {
  delete payments[payKey(card, sk)]; savePayments();
  syncBill(card, sk);
}

// Per-transaction paid status lives on the expense as
// `paid: { on, via }` — via 'tx' when its own payments cover it, 'bill'
// when a bill payment settled the whole statement. Money put towards a
// single charge is booked on its bill as a payment tagged
// `tx: <expense id>`, so a charge can be paid off in parts and the bill's
// figures move with it.
const stmtCharges = (card, sk) =>
  allExpenses().filter(x => countable(x) && x.card === card && stmtKey(card, x.d) === sk);
function txPays(id) {
  const out = [];
  for (const k in payments) for (const p of payments[k]) if (p.tx === id) out.push(p);
  return out.sort((a, b) => a.on.localeCompare(b.on) || a.id.localeCompare(b.id));
}
const txOwn = id => round2(txPays(id).reduce((a, p) => a + (Number(p.amt) || 0), 0));
// What the charge has had paid towards it, and its paid / part / due state.
function txState(x) {
  const own = txOwn(x.id);
  const paid = x.paid ? Math.max(own, x.amt) : own;
  const left = round2(Math.max(0, x.amt - paid));
  return { own, paid: round2(paid), left, status: x.paid ? 'paid' : own > 0 ? 'part' : 'due' };
}

// Runs whenever a bill's payments change: a charge whose own payments
// cover it is paid; otherwise a settled bill ticks it, and a bill that is
// no longer settled un-ticks the charges it ticked.
function syncBill(card, sk) {
  const xs = stmtCharges(card, sk);
  const amount = round2(xs.reduce((a, b) => a + b.amt, 0));
  const log = payLog(card, sk);
  const settled = amount > 0 && amount - paidOn(card, sk) <= 1;
  const on = log.reduce((a, p) => p.on > a ? p.on : a, '') || todayKey();
  const touched = new Set();
  for (const x of xs) {
    const was = JSON.stringify(x.paid || null);
    const own = txPays(x.id);
    const full = own.length && round2(x.amt - own.reduce((a, p) => a + (Number(p.amt) || 0), 0)) <= 0;
    if (full) x.paid = { on: own[own.length - 1].on, via: 'tx' };
    else {
      if (x.paid && x.paid.via === 'tx') delete x.paid;
      if (settled && !x.paid) x.paid = { on, via: 'bill' };
      else if (!settled && x.paid && x.paid.via === 'bill') delete x.paid;
    }
    if (JSON.stringify(x.paid || null) !== was) touched.add(x.d.slice(0, 7));
  }
  touched.forEach(saveMonth);
}
function syncAllBills() {
  for (const k in payments) {
    const i = k.indexOf(':');
    syncBill(k.slice(0, i), k.slice(i + 1));
  }
}
function addTxPayment(x, amt, on) {
  const sk = stmtKey(x.card, x.d), k = payKey(x.card, sk);
  (payments[k] = payments[k] || []).push({ id: uid(), amt: round2(amt), on: on || todayKey(), tx: x.id });
  savePayments();
  syncBill(x.card, sk);
}
// Re-files a charge's payments under its current bill (after its card
// changed, or onto a rebuilt EMI instalment), keeping amounts and dates.
function moveTxPayments(oldId, x) {
  const moved = [], hit = [];
  for (const k in payments) {
    const kept = payments[k].filter(p => p.tx !== oldId || !moved.push(p));
    if (kept.length === payments[k].length) continue;
    if (kept.length) payments[k] = kept; else delete payments[k];
    hit.push(k);
  }
  if (!moved.length) return;
  const sk = stmtKey(x.card, x.d), nk = payKey(x.card, sk);
  payments[nk] = (payments[nk] || []).concat(moved.map(p => Object.assign({}, p, { tx: x.id })));
  savePayments();
  hit.forEach(k => { const i = k.indexOf(':'); syncBill(k.slice(0, i), k.slice(i + 1)); });
  syncBill(x.card, sk);
}
// Drops the payments booked by these expenses and re-checks their bills.
function unlinkTxPayments(ids) {
  if (!ids.length) return;
  const set = new Set(ids), hit = [];
  for (const k in payments) {
    const kept = payments[k].filter(p => !set.has(p.tx));
    if (kept.length === payments[k].length) continue;
    if (kept.length) payments[k] = kept; else delete payments[k];
    hit.push(k);
  }
  if (!hit.length) return;
  savePayments();
  hit.forEach(k => { const i = k.indexOf(':'); syncBill(k.slice(0, i), k.slice(i + 1)); });
}
// The tick: pays whatever is left on a charge, or undoes it entirely.
function setPaid(id, on) {
  const x = findExpense(id);
  if (!x || !countable(x)) return;
  if (on && !x.paid) {
    const left = txState(x).left;
    addTxPayment(x, left);
    toast(`${money2(left)} paid — ${xName(x) || "charge"} is cleared`);
  } else if (!on && x.paid) {
    const own = txPays(x.id).length;
    delete x.paid;
    saveMonth(x.d.slice(0, 7));
    if (own) unlinkTxPayments([x.id]);
    toast(own ? `Marked unpaid — ${own} payment${own === 1 ? '' : 's'} removed` : 'Marked unpaid');
  }
}

// Cards with no statement day fall back to a plain calendar month, which is
// exactly what stmtKey() already assumes for them.
function billClose(cardId, y, m) {
  return closeDate(cardId, y, m) || new Date(y, m, daysIn(y, m));
}
function billPeriod(cardId, cl) {
  const y = cl.getFullYear(), m = cl.getMonth();
  const prev = billClose(cardId, m === 0 ? y - 1 : y, (m + 11) % 12);
  const s = new Date(prev); s.setDate(s.getDate() + 1);
  return `${fmtShort(s)} – ${fmtShort(cl)}`;
}
// Every bill whose payment-due date lands inside the displayed month.
function billsFor(y, m) {
  const exp = allExpenses().filter(countable);
  const t = todayKey();
  const out = [];
  for (const c of CARDS) {
    const cfg = (settings.due || {})[c.id];
    if (!cfg || !cfg.mode || !(cfg.v > 0)) continue;
    for (let o = -3; o <= 1; o++) {
      const dt = new Date(y, m + o, 1);
      const cl = billClose(c.id, dt.getFullYear(), dt.getMonth());
      const du = dueDate(c.id, cl);
      if (!du || du.getFullYear() !== y || du.getMonth() !== m) continue;
      const sk = ymKey(cl.getFullYear(), cl.getMonth());
      const amount = round2(exp
        .filter(x => x.card === c.id && stmtKey(c.id, x.d) === sk)
        .reduce((a, b) => a + b.amt, 0));
      const paid = round2(paidOn(c.id, sk));
      const left = round2(Math.max(0, amount - paid));
      const status = amount <= 0 && paid <= 0 ? 'nil'
        : left <= 1 ? 'paid'
          : paid > 0 ? 'part' : 'due';
      out.push({
        card: c, sk, cl, du, dueKey: toKey(du), amount, paid, left, status,
        credit: round2(Math.max(0, paid - amount)),
        overdue: (status === 'due' || status === 'part') && toKey(du) < t
      });
    }
  }
  return out.sort((a, b) => a.dueKey.localeCompare(b.dueKey) || a.card.name.localeCompare(b.card.name));
}

function billTotals(bills) {
  const billed = round2(bills.reduce((a, b) => a + b.amount, 0));
  // A bill settled under the ≤₹1 tolerance contributes nothing outstanding,
  // otherwise a stray 40 paise renders as "₹0" but still reads as unpaid.
  const left = round2(bills.reduce((a, b) => a + (b.status === 'paid' ? 0 : b.left), 0));
  return { billed, left, paid: round2(billed - left), open: bills.filter(b => b.status === 'due' || b.status === 'part').length, late: bills.filter(b => b.overdue).length };
}
// Keyed by due date, for the calendar grid and the day panel.
function dueMarks() {
  const marks = {};
  for (const b of billsFor(view.y, view.m)) (marks[b.dueKey] = marks[b.dueKey] || []).push(b);
  return marks;
}
// Posting dates for an EMI: aligned to the card's statement if one is set,
// otherwise the same calendar day each month. `offset` shifts the start by
// whole cycles, for banks that begin billing a month later.
function emiDates(cardId, startISO, n, offset) {
  const D = settings.cycle[cardId];
  if (!D) return scheduleDates(startISO, n);
  const [Y, M, Dd] = startISO.split('-').map(Number);
  const purchase = new Date(Y, M - 1, Dd);
  let y = Y, m = M - 1;
  for (let g = 0; g < 26; g++) {
    if (postDate(cardId, y, m) >= purchase) break;
    m++; if (m > 11) { m = 0; y++; }
  }
  m += (offset || 0);
  const out = [];
  for (let k = 0; k < n; k++) {
    const dt = new Date(y, m + k, 1);
    const p = postDate(cardId, dt.getFullYear(), dt.getMonth());
    out.push({ y: p.getFullYear(), m: p.getMonth(), d: toKey(p) });
  }
  return out;
}
