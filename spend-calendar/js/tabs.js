// Switching tabs and repainting everything.

/* ---------------- tabs ---------------- */
let tab = 'cal';
function showTab(t) {
  tab = t;
  document.body.dataset.tab = t;
  $('view-calendar').hidden = t !== 'cal';
  $('view-bills').hidden = t !== 'bills';
  $('view-emis').hidden = t !== 'emi';
  $('view-pay').hidden = t !== 'pay';
  $('view-unpaid').hidden = t !== 'unpaid';
  $('view-cards').hidden = t !== 'cards';
  $('tab-cal').setAttribute('aria-pressed', t === 'cal');
  $('tab-bills').setAttribute('aria-pressed', t === 'bills');
  $('tab-emi').setAttribute('aria-pressed', t === 'emi');
  $('tab-pay').setAttribute('aria-pressed', t === 'pay');
  $('tab-unpaid').setAttribute('aria-pressed', t === 'unpaid');
  $('tab-cards').setAttribute('aria-pressed', t === 'cards');
}
$('tab-cal').onclick = () => showTab('cal');
$('tab-bills').onclick = () => { showTab('bills'); renderBills(); };
$('tab-emi').onclick = () => { showTab('emi'); renderEmis(); };
$('tab-pay').onclick = () => { showTab('pay'); renderPayHistory(); };
$('tab-unpaid').onclick = () => { showTab('unpaid'); renderUnpaid(); };
$('tab-cards').onclick = () => { showTab('cards'); renderCards(); };
$('theme-toggle').onclick = toggleTheme;
