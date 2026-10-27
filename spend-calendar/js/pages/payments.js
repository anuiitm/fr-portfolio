// Payments tab.

/* ---------------- payment history ---------------- */
let payKind = 'all', payCard = '', payQ = null;

// A payment matches on its amount (or the charge's), date, card, and what
// it paid for: the charge's shop, items, for whom, or "bill".
function matchPayment(r, q) {
  const c = CARD[r.card] || {}, x = r.x;
  const what = !r.p.tx ? 'bill' : x ? `${x.shop || ''} ${x.desc || ''} ${x.who || 'self'}${x.emi ? ' emi' : ''}` : 'deleted charge';
  const text = `${c.name || r.card} ${what}`.toLowerCase();
  return q.every(t => termHit(t, text, x ? [Number(r.p.amt) || 0, x.amt] : [Number(r.p.amt) || 0], r.p.on));
}

// Every payment ever recorded, newest first, with what it paid for.
function paymentHistory() {
  const out = [];
  for (const k in payments) {
    const i = k.indexOf(':'), card = k.slice(0, i), sk = k.slice(i + 1);
    for (const p of payments[k]) out.push({ p, card, sk, x: p.tx ? findExpense(p.tx) : null });
  }
  return out.sort((a, b) => b.p.on.localeCompare(a.p.on) || b.p.id.localeCompare(a.p.id));
}

function renderPayHistory() {
  $('pay-card').innerHTML = `<option value="">All cards</option>` +
    CARDS.map(c => `<option value="${c.id}"${payCard === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
  $('pay-kind').querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === payKind));

  const rows = paymentHistory().filter(r =>
    (!payCard || r.card === payCard) && (payKind === 'all' || (payKind === 'tx') === !!r.p.tx) && (!payQ || matchPayment(r, payQ)));
  const text = s => payQ ? hl(s, payQ) : esc(s);
  const sum = rs => round2(rs.reduce((a, r) => a + (Number(r.p.amt) || 0), 0));
  const thisMonth = ymKey(now.getFullYear(), now.getMonth());
  $('pay-stats').innerHTML = [
    [money(sum(rows.filter(r => r.p.on.slice(0, 7) === thisMonth))), `paid in ${MONTHS[now.getMonth()]}`],
    [money(sum(rows)), 'paid in total'],
    [String(rows.length), rows.length === 1 ? 'payment' : 'payments'],
    [money(sum(rows.filter(r => r.p.tx))), 'towards single charges']
  ].map(([v, k]) => `<div class="stat"><div class="v">${v}</div><div class="k">${k}</div></div>`).join('');

  if (!rows.length) {
    $('pay-list').innerHTML = `<div class="none">${paymentHistory().length ? (payQ ? 'No payments match this search.' : 'No payments match this filter.') : 'No payments yet. Pay a bill from the Bills tab, or tick a charge in the calendar.'}</div>`;
    return;
  }

  const groups = [];
  for (const r of rows) {
    const m = r.p.on.slice(0, 7);
    if (!groups.length || groups[groups.length - 1].m !== m) groups.push({ m, rows: [] });
    groups[groups.length - 1].rows.push(r);
  }
  $('pay-list').innerHTML = groups.map(g => {
    const [Y, M] = g.m.split('-').map(Number);
    return `<div class="hist-mh"><span>${MONTHS[M - 1]} ${Y}</span><span><b>${money2(sum(g.rows))}</b>, ${g.rows.length} payment${g.rows.length === 1 ? '' : 's'}</span></div>` +
      g.rows.map(r => {
        const c = CARD[r.card] || { name: r.card, color: 'var(--nil)' };
        const on = isoDate(r.p.on);
        const [sy, sm] = r.sk.split('-').map(Number);
        const cl = billClose(r.card, sy, sm - 1);
        const stmt = `${MONTHS[sm - 1].slice(0, 3)} ${sy} statement`;
        let nm, tag = '', sub;
        if (r.p.tx) {
          const x = r.x;
          if (x) {
            const log = txPays(x.id), i = log.findIndex(p => p.id === r.p.id);
            nm = text(xName(x) || c.name) + (x.emi ? `, EMI ${x.emi.i}/${x.emi.n}` : '');
            tag = log.length > 1 ? `part ${i + 1} of ${log.length}` : (r.p.amt >= x.amt ? 'full' : 'part');
            sub = `${text(c.name)}, charge of ${money2(x.amt)} on ${fmtShort(isoDate(x.d))}, ${text(x.who || 'Self')}, ${stmt}`;
          } else {
            nm = 'Deleted charge';
            sub = `${text(c.name)}, ${stmt}`;
          }
        } else {
          const du = dueDate(r.card, cl);
          nm = `${text(c.name)} bill`;
          sub = `Statement ${billPeriod(r.card, cl)}${du ? `, due ${fmtShort(du)}` : ''}`;
        }
        return `<div class="hist">
      <div class="hd"><b>${on.getDate()}</b><span>${MONTHS[on.getMonth()].slice(0, 3)}</span></div>
      <span class="bar" style="background:${c.color}"></span>
      <button class="hw" type="button" data-pid="${r.p.id}" title="${r.p.tx ? 'Open this charge' : 'Open this bill'}">
        <span class="h1"><span class="nm">${nm}</span>${tag ? `<span class="tag">${tag}</span>` : ''}</span>
        <span class="h2">${sub}</span>
      </button>
      <b class="ha">${money2(r.p.amt)}</b>
      <button class="x" type="button" data-hdrop="${r.p.id}" title="Remove this payment" aria-label="Remove this payment">×</button>
    </div>`;
      }).join('');
  }).join('');

  const byId = Object.fromEntries(rows.map(r => [r.p.id, r]));
  $('pay-list').querySelectorAll('[data-pid]').forEach(b => b.onclick = () => {
    const r = byId[b.dataset.pid];
    if (r.x) {
      const [Y, M] = r.x.d.split('-').map(Number);
      view = { y: Y, m: M - 1 }; selected = r.x.d; filter = null;
      showTab('cal'); loadWindow(); startEdit(r.x.id);
      document.querySelector('.panel').scrollIntoView({ block: 'nearest' });
    } else if (!r.p.tx) {
      const [sy, sm] = r.sk.split('-').map(Number);
      const du = dueDate(r.card, billClose(r.card, sy, sm - 1));
      if (!du) { toast('Set a due date for this card to see its bill.'); return; }
      view = { y: du.getFullYear(), m: du.getMonth() }; billOpen.add(payKey(r.card, r.sk)); billTxOpen = null;
      showTab('bills'); loadWindow(); render();
    }
  });
  $('pay-list').querySelectorAll('[data-hdrop]').forEach(b => b.onclick = () => {
    const r = byId[b.dataset.hdrop];
    if (!confirm(`Remove the ${money2(r.p.amt)} payment made on ${fmtShort(isoDate(r.p.on))}?`)) return;
    dropPayment(r.card, r.sk, r.p.id); toast('Payment removed'); render();
  });
}
$('pay-kind').querySelectorAll('button').forEach(b => b.onclick = () => { payKind = b.dataset.k; renderPayHistory(); });
$('pay-card').onchange = e => { payCard = e.target.value; renderPayHistory(); };
