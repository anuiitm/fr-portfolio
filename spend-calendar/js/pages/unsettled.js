// Unsettled tab.

/* ---------------- unsettled charges ---------------- */
let unpaidScope = 'now', unpaidCard = '', unpaidQ = null, unpaidOpen = null;

// Every charge not yet fully paid, with the bill it lands on. `upcoming`
// ones are dated after today (mostly EMI instalments still to post).
function unsettledCharges() {
  const t = todayKey();
  return allExpenses().filter(x => countable(x) && !x.paid).map(x => {
    const sk = stmtKey(x.card, x.d), [sy, sm] = sk.split('-').map(Number);
    const cl = billClose(x.card, sy, sm - 1), du = dueDate(x.card, cl);
    return { x, sk, cl, du, left: txState(x).left, upcoming: x.d > t, overdue: !!du && toKey(du) < t };
  });
}

function renderUnpaid() {
  const all = unsettledCharges();
  const dueNow = all.filter(r => !r.upcoming).length;
  $('unpaid-count').textContent = dueNow || '';
  $('unpaid-card').innerHTML = `<option value="">All cards</option>` +
    CARDS.map(c => `<option value="${c.id}"${unpaidCard === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
  $('unpaid-scope').querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === unpaidScope));

  const rows = all.filter(r =>
    (unpaidScope === 'all' || (unpaidScope === 'later') === r.upcoming) &&
    (!unpaidCard || r.x.card === unpaidCard) && (!unpaidQ || matchExpense(r.x, unpaidQ)));
  const sum = rs => round2(rs.reduce((a, r) => a + r.left, 0));
  const late = sum(rows.filter(r => r.overdue));
  $('unpaid-stats').innerHTML = [
    [money(sum(rows)), 'left to pay', ''],
    [String(rows.length), `unsettled charge${rows.length === 1 ? '' : 's'}`, ''],
    [money(late), 'overdue', Math.round(late) > 0 ? 'left' : ''],
    [String(rows.filter(r => r.left < r.x.amt).length), 'part paid', '']
  ].map(([v, k, c]) => `<div class="stat"><div class="v ${c}">${v}</div><div class="k">${k}</div></div>`).join('');

  const list = $('unpaid-list');
  if (!rows.length) {
    list.innerHTML = `<div class="none">${unpaidQ ? 'No unsettled charges match this search.'
      : all.length ? (unpaidScope === 'later' ? 'Nothing upcoming is unpaid.' : 'Nothing unsettled for this filter.')
        : 'Every charge is settled.'}</div>`;
    return;
  }

  // One group per bill, the one due soonest (or longest overdue) first.
  const groups = {};
  for (const r of rows) (groups[payKey(r.x.card, r.sk)] = groups[payKey(r.x.card, r.sk)] || { key: payKey(r.x.card, r.sk), r, rows: [] }).rows.push(r);
  const order = Object.values(groups).sort((a, b) =>
    toKey(a.r.du || a.r.cl).localeCompare(toKey(b.r.du || b.r.cl)) || a.r.x.card.localeCompare(b.r.x.card));
  list.innerHTML = order.map(g => {
    const { x, sk, du, overdue } = g.r, c = CARD[x.card] || CARDS[0];
    const [sy, sm] = sk.split('-').map(Number);
    const when = !du ? 'no due date set' : overdue ? `<span class="late">overdue since ${fmtShort(du)}</span>` : `due ${fmtLong(du)}`;
    const n = g.rows.length;
    return `<div class="hist-mh">
      <span class="gname"><b style="color:${c.color}">${esc(c.name)}</b>, ${MONTHS[sm - 1].slice(0, 3)} ${sy} statement, ${when}</span>
      <span><b>${money2(sum(g.rows))}</b> left, ${n} charge${n === 1 ? '' : 's'}${du ? `<button class="link" type="button" data-ubill="${g.key}">Open bill</button>` : ''}</span>
    </div>
    <div class="ulist">${g.rows.sort((a, b) => a.x.d.localeCompare(b.x.d) || b.x.amt - a.x.amt).map(r => txRowHTML(r.x, unpaidOpen, unpaidQ)).join('')}</div>`;
  }).join('');

  list.querySelectorAll('[data-tick]').forEach(b => b.onclick = () => {
    setPaid(b.dataset.tick, b.getAttribute('aria-pressed') !== 'true');
    render();
  });
  list.querySelectorAll('[data-txopen]').forEach(b => b.onclick = () => {
    unpaidOpen = unpaidOpen === b.dataset.txopen ? null : b.dataset.txopen;
    renderUnpaid();
  });
  list.querySelectorAll('[data-txbox]').forEach(tb => {
    const x = findExpense(tb.dataset.txbox);
    if (x) bindTxPay(tb, x);
  });
  list.querySelectorAll('[data-ubill]').forEach(b => b.onclick = () => {
    const g = groups[b.dataset.ubill];
    view = { y: g.r.du.getFullYear(), m: g.r.du.getMonth() };
    billOpen.add(g.key); billTxOpen = null;
    showTab('bills'); loadWindow(); render();
  });
}
$('unpaid-scope').querySelectorAll('button').forEach(b => b.onclick = () => { unpaidScope = b.dataset.k; renderUnpaid(); });
$('unpaid-card').onchange = e => { unpaidCard = e.target.value; renderUnpaid(); };
