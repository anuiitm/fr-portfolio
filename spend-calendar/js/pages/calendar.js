// Calendar tab: summary, month grid, day panel and month navigation.

/* ---------------- render ---------------- */
function render() {
  $('mtitle').innerHTML = `${MONTHS[view.m]} <span class="yr">${view.y}</span>`;
  renderSummary(); renderGrid(); renderPanel(); renderDatalists(); renderBills(); renderEmis(); renderPayHistory(); renderUnpaid(); renderCards();
  $('clear-filter').hidden = !filter;
}

function renderSummary() {
  const totals = CARDS.map(c => ({ c, t: totalFor(c.id) }));
  const grand = totals.reduce((a, b) => a + b.t, 0);
  $('grandtotal').textContent = money(grand);
  $('grandcap').textContent = settings.mode === 'cycle'
    ? 'across statements closing this month'
    : `spent in ${MONTHS[view.m]}`;
  $('propbar').innerHTML = grand === 0 ? ''
    : totals.filter(x => x.t > 0).map(x =>
      `<i data-tip="${esc(x.c.name)}: ${money(x.t)}" title="${esc(x.c.name)}: ${money(x.t)}" aria-label="${esc(x.c.name)}: ${money(x.t)}" style="width:${(x.t / grand * 100).toFixed(2)}%;background:${x.c.color}"></i>`).join('');
  const propbar = $('propbar'), barTip = $('bar-tip');
  propbar.onmousemove = e => {
    const segment = e.target.closest('i');
    if (!segment || segment.parentElement !== propbar) { barTip.classList.remove('on'); return; }
    const rect = segment.getBoundingClientRect();
    barTip.textContent = segment.dataset.tip;
    barTip.style.left = `${Math.max(8, Math.min(window.innerWidth - 8, rect.left + rect.width / 2))}px`;
    barTip.style.top = `${rect.bottom + 8}px`;
    barTip.classList.add('on');
  };
  propbar.onmouseleave = () => barTip.classList.remove('on');
  $('legend').innerHTML = totals.map(({ c, t }) => `
<button class="lg ${t === 0 ? 'zero' : ''}" data-card="${c.id}" aria-pressed="${filter === c.id}">
  <span class="sw" style="background:${c.color}"></span>
  <span class="nm">${esc(c.name)}${rangeLabel(c.id) ? `<span class="cyc">${rangeLabel(c.id)}</span>` : ''}</span>
  <span class="amt">${money(t)}</span>
</button>`).join('');
  const dueCards = CARDS.filter(c => settings.due?.[c.id]?.mode);
  $('due-legend').innerHTML = dueCards.length
    ? `<span class="label">Bill status:</span>
       <span class="due-key"><s class="sq paid"></s>paid</span>
       <span class="due-key"><s class="sq part"></s>part paid</span>
       <span class="due-key"><s class="sq due"></s>pending</span>
       <span class="due-key"><s class="sq nil"></s>nothing billed</span>`
    : '';
  $('legend').querySelectorAll('.lg').forEach(b => b.onclick = () => {
    filter = filter === b.dataset.card ? null : b.dataset.card;
    render();
  });
}

function renderGrid() {
  const { y, m } = view;
  const marks = dueMarks();
  const first = new Date(y, m, 1).getDay();
  const dim = daysIn(y, m);
  const todayKey = dKey(now.getFullYear(), now.getMonth(), now.getDate());
  // Only this month's days; the leading/trailing slots stay empty.
  const cells = [];
  for (let i = 0; i < first; i++) cells.push({ d: null });
  for (let d = 1; d <= dim; d++) cells.push({ d: dKey(y, m, d) });
  while (cells.length % 7) cells.push({ d: null });

  $('grid').innerHTML = cells.map(({ d }) => {
    if (!d) return '<div class="cell blank" aria-hidden="true"></div>';
    // While searching, a day's matches go first so "+N more" never hides them.
    const items = searchQ ? byDate(d).sort((a, b) => matchExpense(b, searchQ) - matchExpense(a, searchQ)) : byDate(d);
    const shown = items.slice(0, 3);
    const dayTot = items.filter(countable).reduce((a, b) => a + b.amt, 0);
    return `<button class="cell ${d === todayKey ? 'today' : ''} ${d === selected ? 'sel' : ''}" data-date="${d}">
  <span class="row1">
    <span class="dnum">${Number(d.slice(8))}</span>
    ${dayTot ? `<span class="dtot">${money(dayTot)}</span>` : ''}
  </span>
  <span class="chips">
    ${shown.map(x => {
      const c = CARD[x.card] || CARDS[0];
      const mk = x.marker;
      return `<span class="chip ${mk ? 'mk' : ''} ${(filter && x.card !== filter) || (searchQ && !matchExpense(x, searchQ)) ? 'dim' : ''}" style="${mk ? `border-color:${c.color}55;color:${c.color}` : `background:${c.color}14;color:${c.color}`}">
        <s style="background:${c.color}"></s>${x.paid ? '<i class="ck" title="Paid">✓</i>' : ''}<b>${money(x.amt)}</b>${mk ? '<em>EMI</em>' : (x.emi ? `<em>${x.emi.i}/${x.emi.n}</em>` : '')}<span class="cw">${esc(x.shop || descShort(x))}</span>
      </span>`;
    }).join('')}
    ${items.length > 3 ? `<span class="more">+${items.length - 3} more</span>` : ''}
  </span>
  ${marks[d] ? `<span class="dues">${marks[d].map(b =>
      `<span class="due-tag" title="${esc(b.card.name)} bill ${money2(b.amount)}, ${b.status === 'nil' ? 'nothing billed' : b.left > 0 ? money2(b.left) + ' left' : 'paid'}"><b style="color:${b.card.color}">${esc(b.card.name)}</b><s class="sq ${b.status}"></s></span>`).join('')}</span>` : ''}
</button>`;
  }).join('');

  $('grid').querySelectorAll('.cell[data-date]').forEach(b => b.onclick = () => {
    const d = b.dataset.date, k = d.slice(0, 7);
    if (k !== ymKey(view.y, view.m)) {
      const [Y, M] = k.split('-').map(Number);
      view = { y: Y, m: M - 1 };
      selected = d; resetForm(); loadWindow(); render(); return;
    }
    selected = d; resetForm(); render();
  });
}

function renderPanel() {
  const [Y, M, D] = selected.split('-').map(Number);
  const dt = new Date(Y, M - 1, D);
  const wd = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dt.getDay()];
  $('p-date').textContent = `${wd}, ${D} ${MONTHS[M - 1]}`;

  const items = byDate(selected);
  const tot = items.filter(countable).reduce((a, b) => a + b.amt, 0);
  const paidTot = items.filter(countable).reduce((a, x) => a + txState(x).paid, 0);
  $('p-sub').textContent = items.length
    ? `${items.length} entr${items.length > 1 ? 'ies' : 'y'}, ${money2(tot)} billed${paidTot ? `, ${money2(paidTot)} paid` : ''}`
    : 'Nothing recorded yet';
  const due = dueMarks()[selected] || [];
  $('p-due').hidden = !due.length;
  $('p-due').innerHTML = due.length
    ? `<b>Bill due:</b> ${due.map(b => `<span class="due-inline"><span style="color:${b.card.color}">${esc(b.card.name)}</span><s class="sq ${b.status}" title="${b.status === 'nil' ? 'nothing billed' : b.left > 0 ? money2(b.left) + ' left' : 'paid'}"></s></span>`).join('')}`
    : '';

  $('p-list').innerHTML = items.map(x => {
    const c = CARD[x.card] || CARDS[0];
    const sub = x.marker
      ? `${esc(x.who || 'Self')}, ${esc(c.name)}, split into ${x.emi.n} instalments`
      : `${esc(x.who || 'Self')}, ${esc(c.name)}${x.emi ? `, EMI ${x.emi.i}/${x.emi.n} of ${money(x.emi.total)}` : ''}`;
    const st = x.marker ? null : txState(x);
    const paidTxt = !st ? ''
      : x.paid ? `, <span class="pd">paid ${fmtShort(isoDate(x.paid.on))}${x.paid.via === 'bill' ? ' with bill' : ''}</span>`
        : st.own > 0 ? `, <span class="pp">${money2(st.own)} paid, ${money2(st.left)} left</span>` : '';
    const tipT = !st ? '' : x.paid ? 'Mark unpaid' : st.own > 0 ? `Pay the remaining ${money2(st.left)}` : 'Mark paid';
    const tick = x.marker ? '<span class="tick-gap"></span>'
      : `<button class="tick ${st.status === 'part' ? 'part' : ''}" type="button" data-tick="${x.id}" aria-pressed="${x.paid ? 'true' : st.own > 0 ? 'mixed' : 'false'}" title="${tipT}" aria-label="${tipT}"${st.status === 'part' ? ` style="--p:${Math.round(st.own / x.amt * 100)}"` : ''}>✓</button>`;
    return `<div class="item ${editingId === x.id ? 'editing' : ''} ${x.marker ? 'mk' : ''} ${x.paid ? 'is-paid' : ''}">
  ${tick}
  <button class="item-main" data-id="${x.id}" type="button">
    <s style="background:${c.color}"></s>
    <span class="w">
      <span class="where">${esc(xName(x) || c.name)}</span>
      <span class="who">${sub}${paidTxt}</span>
    </span>
    <span class="amt">${money2(x.amt)}</span>
  </button>
</div>`;
  }).join('');
  $('p-list').querySelectorAll('.item-main').forEach(b => b.onclick = () => startEdit(b.dataset.id));
  $('p-list').querySelectorAll('[data-tick]').forEach(b => b.onclick = () => {
    setPaid(b.dataset.tick, b.getAttribute('aria-pressed') !== 'true');
    render();
  });
  renderTxPay();

  $('pills').innerHTML = CARDS.map(c => `
<button type="button" class="pill" data-card="${c.id}" aria-pressed="${pickedCard === c.id}"
  style="${pickedCard === c.id ? `background:${c.color}` : ''}">
  <s style="background:${c.color}"></s>${esc(c.name)}
</button>`).join('');
  $('pills').querySelectorAll('.pill').forEach(b => b.onclick = () => {
    pickedCard = b.dataset.card;
    if (!editingId) recallEmi(pickedCard);
    renderPanel(); updateEmiPreview();
  });
}

// Payments against one charge: log, part-payment, pay the rest. Used by the
// calendar's side panel and by the charge rows in the Bills list.
function txPayHTML(x, idp) {
  const c = CARD[x.card] || CARDS[0];
  const st = txState(x), log = txPays(x.id);
  const pct = Math.min(100, Math.round(st.paid / x.amt * 100));
  const sk = stmtKey(x.card, x.d);
  const label = x.emi ? `EMI ${x.emi.i}/${x.emi.n}, posts ${fmtShort(isoDate(x.d))}` : `${esc(xName(x) || c.name)}, ${fmtShort(isoDate(x.d))}`;
  return `
  <div class="pb-top">
    <span class="nm"><s class="sq ${st.status}"></s>Pay this charge</span>
    <span class="when">${st.status === 'paid' ? 'Paid' : st.status === 'part' ? 'Part paid' : 'Unpaid'}</span>
  </div>
  <div class="cyc2">${label}, on the ${MONTHS[Number(sk.slice(5, 7)) - 1]} ${esc(c.name)} statement</div>
  <span class="prog2"><i style="width:${pct}%;background:${st.status === 'paid' ? 'var(--ok)' : c.color}"></i></span>
  <div class="pan-figs">
    <div><div class="pv">${money2(x.amt)}</div><div class="pk">charge</div></div>
    <div><div class="pv">${money2(st.paid)}</div><div class="pk">paid</div></div>
    <div><div class="pv ${st.left > 0 ? 'owing' : 'settled'}">${money2(st.left)}</div><div class="pk">left</div></div>
  </div>
  ${x.paid && x.paid.via === 'bill' && st.own < x.amt ? `<div class="pan-note">Covered by the ${esc(c.name)} bill payment on ${fmtShort(isoDate(x.paid.on))}.</div>` : ''}
  ${st.own > x.amt ? `<div class="pan-note">${money2(st.own - x.amt)} paid over the charge.</div>` : ''}
  ${log.length ? `<div class="paylog">${log.map((p, i) =>
    `<div class="p"><span class="pv">${money2(p.amt)}</span><span>paid ${fmtShort(isoDate(p.on))}, ${i + 1} of ${log.length}</span><button class="x" type="button" data-txdrop="${p.id}" title="Remove this payment" aria-label="Remove this payment">×</button></div>`).join('')}</div>` : ''}
  ${st.left > 0 ? `<div class="f-row" style="margin-top:10px">
    <div style="flex:1">
      <label for="${idp}-amt">Amount paid</label>
      <input id="${idp}-amt" data-txamt type="number" inputmode="decimal" step="0.01" min="0" placeholder="${round2(st.left)}">
    </div>
    <div style="flex:1">
      <label for="${idp}-on">On</label>
      <input id="${idp}-on" data-txon type="date" value="${todayKey()}">
    </div>
  </div>
  <div class="bill-actions">
    <button class="btn-s" data-txact="part" type="button">Add payment</button>
    <button class="btn-s primary" data-txact="full" type="button">Pay the rest (${money2(st.left)})</button>
  </div>` : ''}`;
}
function bindTxPay(box, x) {
  const st = txState(x);
  const amtEl = box.querySelector('[data-txamt]'), onEl = box.querySelector('[data-txon]');
  const record = amt => {
    addTxPayment(x, amt, (onEl && onEl.value) || todayKey());
    const now2 = txState(findExpense(x.id) || x);
    toast(now2.left > 0 ? `${money2(amt)} paid, ${money2(now2.left)} left` : `${money2(amt)} paid — charge cleared`);
    render();
  };
  box.querySelectorAll('[data-txact]').forEach(btn => btn.onclick = () => {
    if (btn.dataset.txact === 'full') return record(st.left);
    const v = parseFloat(amtEl.value);
    if (!(v > 0)) { amtEl.focus(); toast('Enter an amount above zero.'); return; }
    record(v);
  });
  if (amtEl) amtEl.onkeydown = e => {
    if (e.key === 'Enter') { e.preventDefault(); box.querySelector('[data-txact="part"]').click(); }
  };
  box.querySelectorAll('[data-txdrop]').forEach(btn => btn.onclick = () => {
    // a payment may be filed under an older statement key — find it wherever it is
    for (const k in payments) if (payments[k].some(p => p.id === btn.dataset.txdrop)) {
      const i = k.indexOf(':'); dropPayment(k.slice(0, i), k.slice(i + 1), btn.dataset.txdrop); break;
    }
    toast('Payment removed'); render();
  });
}
function renderTxPay() {
  const box = $('tx-pay');
  const x = editingId && findExpense(editingId);
  if (!x || !countable(x)) { box.hidden = true; box.innerHTML = ''; return; }
  box.hidden = false;
  box.innerHTML = txPayHTML(x, 'tx');
  bindTxPay(box, x);
}


/* ---------------- nav ---------------- */
function go(delta) {
  const d = new Date(view.y, view.m + delta, 1);
  view = { y: d.getFullYear(), m: d.getMonth() };
  selected = dKey(view.y, view.m, Math.min(Number(selected.slice(8)), daysIn(view.y, view.m)));
  resetForm(); loadWindow(); render();
}
function goToday() {
  view = { y: now.getFullYear(), m: now.getMonth() };
  selected = dKey(now.getFullYear(), now.getMonth(), now.getDate());
  resetForm(); loadWindow(); render();
}
$('prev').onclick = () => go(-1);
$('next').onclick = () => go(1);
$('today').onclick = goToday;
$('b-prev').onclick = () => go(-1);
$('b-next').onclick = () => go(1);
$('b-today').onclick = goToday;
document.addEventListener('keydown', e => {
  if (e.target.matches('input, select, textarea')) return;
  const box = { cal: 'q', bills: 'bq', pay: 'pq', unpaid: 'uq' }[tab];
  if (e.key === '/' && box) { e.preventDefault(); $(box).focus(); return; }
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'ArrowRight') go(1);
});

$('clear-filter').onclick = () => { filter = null; render(); };
