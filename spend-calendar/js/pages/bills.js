// Bills tab.

/* ---------------- bills view ---------------- */
const STATUS_TEXT = { paid: 'Paid', part: 'Part paid', due: 'Pending', nil: 'No charges', open: 'Not due yet' };

function renderHeadBills(bills, tot) {
  $('head-billed').textContent = money(tot.billed);
  $('head-billed-cap').textContent = `due in ${MONTHS[view.m]}`;
  const el = $('head-left');
  el.textContent = money(tot.left);
  // Colour follows what is actually shown, so "₹0" is never red.
  el.className = 'big ' + (Math.round(tot.left) > 0 ? 'left' : 'clear');
}

// Which bills are expanded (by `card:YYYY-MM`) and which charge inside one
// has its payment box open.
const billOpen = new Set();
let billTxOpen = null, billQ = null;

// A charge row: the same tick as the calendar, plus its payment box when
// open. `openId` is the charge whose box is open, `q` the search to mark.
function txRowHTML(x, openId, q) {
  const c = CARD[x.card] || CARDS[0], st = txState(x);
  const open = openId === x.id, hit = q && matchExpense(x, q);
  const text = s => hit ? hl(s, q) : esc(s);
  const tipT = x.paid ? 'Mark unpaid' : st.own > 0 ? `Pay the remaining ${money2(st.left)}` : 'Mark paid';
  const state = x.paid ? `, <span class="pd">paid ${fmtShort(isoDate(x.paid.on))}${x.paid.via === 'bill' ? ' with bill' : ''}</span>`
    : st.own > 0 ? `, <span class="pp">${money2(st.own)} paid, ${money2(st.left)} left</span>` : '';
  return `<div class="txr ${hit ? 'hit' : ''}" data-txrow="${x.id}">
  <div class="item ${open ? 'editing' : ''} ${x.paid ? 'is-paid' : ''}">
    <button class="tick ${st.status === 'part' ? 'part' : ''}" type="button" data-tick="${x.id}" aria-pressed="${x.paid ? 'true' : st.own > 0 ? 'mixed' : 'false'}" title="${tipT}" aria-label="${tipT}"${st.status === 'part' ? ` style="--p:${Math.round(st.own / x.amt * 100)}"` : ''}>✓</button>
    <button class="item-main" type="button" data-txopen="${x.id}" aria-expanded="${open}" title="${open ? 'Hide payments' : 'Pay or part-pay this charge'}">
      <span class="dt">${fmtShort(isoDate(x.d))}</span>
      <s style="background:${c.color}"></s>
      <span class="w">
        <span class="where">${text(xName(x) || c.name)}${x.emi ? ` <span class="tag">EMI ${x.emi.i}/${x.emi.n}</span>` : ''}</span>
        <span class="who">${text(x.who || 'Self')}${state}</span>
      </span>
      <span class="amt">${money2(x.amt)}</span>
    </button>
  </div>
  ${open ? `<div class="paybill txbox" data-txbox="${x.id}">${txPayHTML(x, 'b' + x.id)}</div>` : ''}
</div>`;
}

// The bill's own payments: figures, log, part / full payment.
function billPayHTML(b) {
  const c = b.card, key = payKey(c.id, b.sk);
  const log = payLog(c.id, b.sk).slice().sort((p, q) => p.on.localeCompare(q.on) || p.id.localeCompare(q.id));
  const owing = Math.round(b.left) > 0;
  const txLabel = p => { const x = p.tx && findExpense(p.tx); return x ? `, ${esc(x.shop || descShort(x) || x.who || 'charge')}` : ''; };
  return `<div class="paybill bpay" data-key="${key}">
  <div class="pan-figs">
    <div><div class="pv">${money2(b.amount)}</div><div class="pk">bill</div></div>
    <div><div class="pv">${money2(b.paid)}</div><div class="pk">paid</div></div>
    <div><div class="pv ${owing ? 'owing' : 'settled'}">${money2(b.left)}</div><div class="pk">left</div></div>
  </div>
  ${b.credit > 0 ? `<div class="pan-note">${money2(b.credit)} paid over the bill amount.</div>` : ''}
  ${log.length ? `<div class="paylog">${log.map(p =>
    `<div class="p"><span class="pv">${money2(p.amt)}</span><span>paid ${fmtShort(isoDate(p.on))}${txLabel(p)}</span><button class="x" type="button" data-drop="${p.id}" title="${p.tx ? 'Remove this payment and un-mark the charge' : 'Remove this payment'}" aria-label="Remove this payment">×</button></div>`).join('')}</div>` : ''}
  <div class="f-row" style="margin-top:10px">
    <div style="flex:1">
      <label for="pa-${key}">Amount paid</label>
      <input id="pa-${key}" data-amt type="number" inputmode="decimal" step="0.01" min="0" placeholder="0">
    </div>
    <div style="flex:1">
      <label for="pd-${key}">On</label>
      <input id="pd-${key}" data-on type="date" value="${todayKey()}">
    </div>
  </div>
  <div class="bill-actions">
    <button class="btn-s" data-act="part" type="button">Add partial</button>
    ${owing ? `<button class="btn-s primary" data-act="full" type="button">Pay in full (${money2(b.left)})</button>` : ''}
    ${b.paid > 0 ? `<button class="btn-s quiet" data-act="clear" type="button">Clear all</button>` : ''}
    <button class="btn-s quiet" data-act="view" type="button">Open in calendar</button>
  </div>
</div>`;
}

function billRowHTML(b) {
  const c = b.card, key = payKey(c.id, b.sk), open = billOpen.has(key);
  const charges = stmtCharges(c.id, b.sk).sort((p, q) => p.d.localeCompare(q.d) || q.amt - p.amt);
  const ticked = charges.filter(x => x.paid).length;
  const hits = billQ ? charges.filter(x => matchExpense(x, billQ)).length : 0;
  const owing = Math.round(b.left) > 0;
  const pct = b.amount > 0 ? Math.min(100, Math.round(b.paid / b.amount * 100)) : (b.paid > 0 ? 100 : 0);
  return `<div class="brow ${open ? 'open' : ''} ${billQ && !hits ? 'dim' : ''}" data-key="${key}">
  <button class="bhead" type="button" data-toggle aria-expanded="${open}">
    <span class="bar" style="background:${c.color}"></span>
    <span class="bw">
      <span class="t1">
        <span class="nm">${esc(c.name)}</span>
        <span class="bstat ${b.overdue ? 'late' : ''}"><s class="sq ${b.status}"></s>${b.overdue ? 'Overdue' : STATUS_TEXT[b.status]}</span>
        ${hits ? `<span class="tag">${hits} match${hits === 1 ? '' : 'es'}</span>` : ''}
      </span>
      <span class="t2">Statement ${billPeriod(c.id, b.cl)}, due ${fmtLong(b.du)}, ${charges.length} charge${charges.length === 1 ? '' : 's'}${charges.length ? `, ${ticked} paid` : ''}</span>
      <span class="prog2"><i style="width:${pct}%;background:${b.status === 'paid' ? 'var(--ok)' : c.color}"></i></span>
    </span>
    <span class="bfig"><b>${money2(b.amount)}</b><span class="${owing ? 'owing' : 'settled'}">${owing ? money2(b.left) + ' left' : b.status === 'nil' ? 'nothing billed' : 'settled'}</span></span>
    <span class="chev" aria-hidden="true">›</span>
  </button>
  ${open ? `<div class="bbody">
    <div>
      <div class="pan-h">Charges this cycle</div>
      <div class="txlist">${charges.length ? charges.map(x => txRowHTML(x, billTxOpen, billQ)).join('') : '<div class="none" style="padding:6px 0">No charges on this statement.</div>'}</div>
    </div>
    ${billPayHTML(b)}
  </div>` : ''}
</div>`;
}

function renderBillList(bills) {
  bills = bills || billsFor(view.y, view.m);
  const list = $('bill-list');
  if (!bills.length) {
    const anyDue = CARDS.some(c => settings.due?.[c.id]?.mode);
    list.innerHTML = `<div class="none">${anyDue ? `No bills fall due in ${MONTHS[view.m]} ${view.y}.` : 'No due dates set yet — add them on the Cards tab to see bills here.'}</div>`;
    return;
  }
  list.innerHTML = bills.map(billRowHTML).join('');

  list.querySelectorAll('.brow').forEach(row => {
    const key = row.dataset.key;
    const cardId = key.slice(0, key.indexOf(':')), sk = key.slice(key.indexOf(':') + 1);
    const bill = bills.find(b => payKey(b.card.id, b.sk) === key);
    row.querySelector('[data-toggle]').onclick = () => {
      if (billOpen.has(key)) billOpen.delete(key); else billOpen.add(key);
      renderBillList();
    };
    const box = row.querySelector('.bpay');
    if (!box) return;
    const amtEl = box.querySelector('[data-amt]'), onEl = box.querySelector('[data-on]');
    const record = amt => {
      addPayment(cardId, sk, amt, onEl.value || todayKey());
      toast(`${money2(amt)} recorded against the ${bill.card.name} bill`);
      render();
    };
    box.querySelectorAll('[data-act]').forEach(btn => btn.onclick = () => {
      const act = btn.dataset.act;
      if (act === 'part') {
        const v = parseFloat(amtEl.value);
        if (!(v > 0)) { amtEl.focus(); toast('Enter an amount above zero.'); return; }
        record(v);
      } else if (act === 'full') {
        record(bill.left);
      } else if (act === 'clear') {
        if (!confirm(`Remove every payment recorded against the ${bill.card.name} bill? Its charges will be marked unpaid.`)) return;
        clearPayments(cardId, sk); toast('Payments cleared'); render();
      } else if (act === 'view') {
        const [Y, M] = sk.split('-').map(Number);
        view = { y: Y, m: M - 1 };
        filter = cardId;
        selected = dKey(Y, M - 1, Math.min(Number(toKey(bill.cl).slice(8)), daysIn(Y, M - 1)));
        showTab('cal'); resetForm(); loadWindow(); render();
      }
    });
    box.querySelectorAll('[data-drop]').forEach(btn => btn.onclick = () => {
      dropPayment(cardId, sk, btn.dataset.drop); toast('Payment removed'); render();
    });
    amtEl.onkeydown = e => {
      if (e.key === 'Enter') { e.preventDefault(); box.querySelector('[data-act="part"]').click(); }
    };
    row.querySelectorAll('[data-tick]').forEach(b => b.onclick = () => {
      setPaid(b.dataset.tick, b.getAttribute('aria-pressed') !== 'true');
      render();
    });
    row.querySelectorAll('[data-txopen]').forEach(b => b.onclick = () => {
      billTxOpen = billTxOpen === b.dataset.txopen ? null : b.dataset.txopen;
      renderBillList();
    });
    row.querySelectorAll('[data-txbox]').forEach(tb => {
      const x = findExpense(tb.dataset.txbox);
      if (x) bindTxPay(tb, x);
    });
  });
}

function renderBills() {
  const bills = billsFor(view.y, view.m);
  const tot = billTotals(bills);
  renderHeadBills(bills, tot);
  $('bill-count').textContent = tot.open ? tot.open : '';

  const openLeft = Math.round(tot.left) > 0;
  $('bill-stats').innerHTML = [
    [money(tot.billed), `total due in ${MONTHS[view.m]}`, ''],
    [money(tot.paid), 'paid so far', ''],
    [money(tot.left), 'remaining to pay', openLeft ? 'left' : 'clear'],
    [`${tot.open}/${bills.length}`, tot.late ? `still open, ${tot.late} overdue` : (tot.open ? 'still open' : 'all settled'), '']
  ].map(([v, k, c]) => `<div class="stat"><div class="v ${c}">${v}</div><div class="k">${k}</div></div>`).join('');

  renderBillList(bills);
}

// Opens the bill a charge sits on, with that charge's payments showing.
function openInBills(id) {
  const x = findExpense(id);
  if (!x) return;
  if (!countable(x)) return openResult(id);
  const sk = stmtKey(x.card, x.d), [sy, sm] = sk.split('-').map(Number);
  const du = dueDate(x.card, billClose(x.card, sy, sm - 1));
  if (!du) { toast(`${(CARD[x.card] || {}).name || 'This card'} has no due date set — opened in the calendar`); return openResult(id); }
  view = { y: du.getFullYear(), m: du.getMonth() };
  billOpen.add(payKey(x.card, sk)); billTxOpen = id;
  showTab('bills'); loadWindow(); render();
  document.querySelector(`[data-txrow="${id}"]`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
