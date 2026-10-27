// The add / edit expense form in the calendar's day panel.

/* ---------------- Yes / No toggles ---------------- */
function bindYN(el, get, set) {
  el.querySelectorAll('button').forEach(b => {
    b.onclick = () => { set(b.dataset.v === '1'); paintYN(el, get()); updateEmiPreview(); };
  });
}
function paintYN(el, val) {
  el.querySelectorAll('button').forEach(b =>
    b.setAttribute('aria-pressed', (b.dataset.v === '1') === val));
}
bindYN($('emi-yn'), () => emiOn, v => {
  emiOn = v; $('emi-box').hidden = !v;
  $('amt-label').textContent = v ? 'Purchase amount' : 'Amount';
  if (v) refreshStartOptions(0);
});
bindYN($('nc-yn'), () => noCost, v => { noCost = v; });

/* ---------------- form ---------------- */
function readEmiInputs() {
  return {
    total: parseFloat($('amt').value),
    n: Math.max(2, Math.min(36, parseInt($('tenure').value, 10) || 3)),
    rate: Math.max(0, parseFloat($('rate').value) || 0),
    fee: Math.max(0, parseFloat($('fee').value) || 0),
    noCost
  };
}
function refreshStartOptions(keep) {
  const sel = $('startsel');
  const n = Math.max(2, Math.min(36, parseInt($('tenure').value, 10) || 3));
  if (!settings.cycle[pickedCard]) {
    sel.innerHTML = `<option value="0">Same day each month — set a statement date to bill-align</option>`;
    sel.disabled = true; return;
  }
  sel.disabled = false;
  const opts = [0, 1, 2].map(off => {
    const d = emiDates(pickedCard, selected, n, off)[0];
    return `<option value="${off}">${fmtLong(new Date(d.y, d.m, Number(d.d.slice(8))))}</option>`;
  });
  sel.innerHTML = opts.join('');
  sel.value = String(keep ?? 0);
}
function updateEmiPreview() {
  if (!emiOn) { $('emi-preview').hidden = true; return; }
  const o = readEmiInputs();
  if (!(o.total > 0)) { $('emi-preview').hidden = true; return; }
  const s = buildSchedule(o);
  const dates = emiDates(pickedCard, selected, s.n, parseInt($('startsel').value, 10) || 0);
  const first = s.rows[0].amt, last = s.rows[s.rows.length - 1].amt;
  const mid = s.rows.length > 2 ? s.rows[1].amt : null;
  const total = s.rows.reduce((a, b) => a + b.amt, 0);
  const dFirst = new Date(dates[0].y, dates[0].m, Number(dates[0].d.slice(8)));
  const dLast = new Date(dates[dates.length - 1].y, dates[dates.length - 1].m, Number(dates[dates.length - 1].d.slice(8)));
  const duFirst = dueDate(pickedCard, closeDate(pickedCard, dFirst.getFullYear(), dFirst.getMonth()));
  const spanTxt = `Posts ${fmtShort(dFirst)} → ${fmtLong(dLast)}`;
  const lines = [];
  if (s.discount > 0) lines.push(['Upfront discount', '− ' + money2(s.discount.toFixed(2))]);
  lines.push(['Financed principal', money2(s.principal.toFixed(2))]);
  lines.push(['Base instalment', money2(s.emi.toFixed(2)) + ' × ' + s.n]);
  lines.push(['Interest', money2(s.interestTotal.toFixed(2))]);
  lines.push(['GST on interest', money2(s.gstTotal.toFixed(2))]);
  if (s.feeGross > 0) lines.push(['Fee + GST (month 1)', money2(s.feeGross.toFixed(2))]);
  lines.push(['Charged', `${money(first)}${mid !== null ? ' → ' + money(mid) : ''} → ${money(last)}`]);
  $('emi-preview').hidden = false;
  $('emi-preview').innerHTML =
    lines.map(([k, v]) => `<div><span class="k">${k}</span><span>${v}</span></div>`).join('') +
    `<div class="tot"><span>Total over ${s.n} months</span><span>${money(total)}</span></div>` +
    `<div><span class="k">${spanTxt}</span><span class="k">${duFirst ? 'first payment due ' + fmtShort(duFirst) : ''}</span></div>`;
}
['amt', 'tenure', 'rate', 'fee'].forEach(id => $(id).addEventListener('input', () => {
  refreshStartOptions($('startsel').value); updateEmiPreview();
}));
$('startsel').addEventListener('change', updateEmiPreview);

function setEmi(on, off) { emiOn = on; $('emi-box').hidden = !on; paintYN($('emi-yn'), on); $('amt-label').textContent = on ? 'Purchase amount' : 'Amount'; refreshStartOptions(off || 0); }
function setNoCost(on) { noCost = on; paintYN($('nc-yn'), on); }

function recallEmi(card) {
  const r = (settings.lastEmi || {})[card];
  $('tenure').value = r && r.n ? r.n : 3;
  $('rate').value = r && r.rate ? r.rate : '';
  $('fee').value = r && r.fee ? r.fee : '';
  $('nc-yn') && setNoCost(!!(r && r.noCost));
}
function rememberEmi(card, o) {
  settings.lastEmi = settings.lastEmi || {};
  settings.lastEmi[card] = { n: o.n, rate: o.rate, fee: o.fee, noCost: o.noCost };
  saveSettings();
}
function resetForm() {
  editingId = null;
  $('f').reset();
  setEmi(false); setNoCost(false);
  recallEmi(pickedCard);
  $('savebtn').textContent = 'Add expense';
  $('del').hidden = true; $('cancel').hidden = true; $('emi-note').hidden = true;
  fitDesc();
  updateEmiPreview();
}

// Description box: a numbered list. Enter starts the next item and
// Ctrl/⌘ + Enter saves the expense.
const numberList = items => items.map((t, i) => `${i + 1}. ${t}`).join('\n');
const fitDesc = () => { const el = $('desc'); el.rows = Math.max(2, el.value.split('\n').length); };
// The caret never sits inside an item's "1. ": a click there lands after it.
function skipNumber(el) {
  if (el.selectionStart !== el.selectionEnd) return;
  const at = el.selectionStart, lineStart = el.value.lastIndexOf('\n', at - 1) + 1;
  const m = /^\s*\d+[.)]\s*/.exec(el.value.slice(lineStart));
  if (m && at < lineStart + m[0].length) el.setSelectionRange(lineStart + m[0].length, lineStart + m[0].length);
}
$('desc').addEventListener('focus', e => {
  if (!e.target.value.trim()) { e.target.value = '1. '; fitDesc(); }
  // A click places the caret after focus fires, so check again once it has.
  setTimeout(() => skipNumber(e.target));
});
$('desc').addEventListener('mouseup', e => skipNumber(e.target));
$('desc').addEventListener('blur', e => { e.target.value = numberList(descItems(e.target.value)); fitDesc(); });
$('desc').addEventListener('input', fitDesc);
$('desc').addEventListener('keydown', e => {
  if (e.key !== 'Enter' || e.isComposing) return;
  e.preventDefault();
  if (e.ctrlKey || e.metaKey) { $('f').requestSubmit(); return; }
  const el = e.target, before = el.value.slice(0, el.selectionStart), after = el.value.slice(el.selectionEnd);
  // An empty item stays the last one rather than piling up blanks.
  if (/^\s*\d+[.)]\s*$/.test(before.split('\n').pop()) && !after.trim()) return;
  const lines = (before + '\n' + after).split('\n').map((l, i) => `${i + 1}. ${l.replace(/^\s*\d+[.)]\s*/, '')}`);
  const at = before.split('\n').length; // index of the new line
  el.value = lines.join('\n');
  const caret = lines.slice(0, at).reduce((a, l) => a + l.length + 1, 0) + `${at + 1}. `.length;
  el.setSelectionRange(caret, caret);
  fitDesc();
});

function startEdit(id) {
  const x = findExpense(id);
  if (!x) return;
  editingId = id;
  $('shop').value = x.shop || ''; $('desc').value = numberList(descItems(x.desc)); $('who').value = x.who || ''; fitDesc();
  pickedCard = x.card;
  $('savebtn').textContent = 'Save changes';
  $('cancel').hidden = false; $('del').hidden = false;

  if (x.emi) {
    const e = x.emi;
    selected = e.start || x.d;
    $('amt').value = e.total;
    $('tenure').value = e.n;
    $('rate').value = e.rate ?? 0;
    $('fee').value = e.fee ?? 0;
    setEmi(true, e.off || 0); setNoCost(!!e.noCost);
    $('del').textContent = 'Delete series';
    $('emi-note').hidden = false;
    $('emi-note').textContent =
      `Editing the whole ${e.n}-month plan booked on ${Number(selected.slice(8))} ${MONTHS[Number(selected.slice(5, 7)) - 1]}. Saving rebuilds every instalment.`;
    const k = selected.slice(0, 7), [Y, M] = k.split('-').map(Number);
    if (Y !== view.y || M - 1 !== view.m) { view = { y: Y, m: M - 1 }; loadWindow(); }
  } else {
    $('amt').value = x.amt;
    setEmi(false); setNoCost(false);
    $('del').textContent = 'Delete';
    $('emi-note').hidden = true;
  }
  render();
  updateEmiPreview();
  $('amt').focus();
}

$('f').addEventListener('submit', e => {
  e.preventDefault();
  const amt = parseFloat($('amt').value);
  if (!(amt > 0)) { $('amt').focus(); toast('Enter an amount above zero.'); return; }
  const who = $('who').value.trim(), shop = $('shop').value.trim(), desc = descItems($('desc').value).join('\n'), card = pickedCard;
  const editing = editingId ? findExpense(editingId) : null;

  if (emiOn) {
    const o = readEmiInputs();
    const s = buildSchedule(o);
    const off = parseInt($('startsel').value, 10) || 0;
    const dates = emiDates(card, selected, s.n, off);
    const old = editing ? (editing.emi ? removeSeries(editing.emi.gid, true) : (removeExpense(editingId), [])) : [];
    const gid = uid(), touched = new Set(), fresh = [];
    const meta = { gid, n: s.n, total: o.total, rate: o.rate, fee: o.fee, noCost: o.noCost, start: selected, off };
    // purchase marker: sits on the day it happened, never counted in totals
    const pk = selected.slice(0, 7);
    months[pk] = months[pk] || [];
    months[pk].push({
      id: uid(), d: selected, amt: o.total, who, shop, desc, card,
      marker: true, emi: Object.assign({ i: 0 }, meta)
    });
    touched.add(pk);
    dates.forEach((dt, k) => {
      const key = ymKey(dt.y, dt.m);
      months[key] = months[key] || [];
      const x = {
        id: uid(), d: dt.d, amt: s.rows[k].amt, who, shop, desc, card,
        emi: Object.assign({ i: k + 1 }, meta)
      };
      months[key].push(x); fresh.push(x);
      touched.add(key);
    });
    touched.forEach(saveMonth);
    // Payments made on the old instalments follow them to the rebuilt ones.
    const orphans = [];
    for (const o of old) {
      if (o.marker) continue;
      const nx = fresh.find(x => x.emi.i === o.emi.i);
      if (nx) moveTxPayments(o.id, nx); else orphans.push(o.id);
    }
    unlinkTxPayments(orphans);
    rememberEmi(card, o);
    toast(`${s.n} instalments booked`);
  } else if (editing && editing.emi) {
    // EMI switched back off — collapse the series into one purchase-date entry
    const start = editing.emi.start || editing.d;
    removeSeries(editing.emi.gid);
    const key = start.slice(0, 7);
    months[key] = months[key] || [];
    months[key].push({ id: uid(), d: start, amt, who, shop, desc, card });
    saveMonth(key);
    selected = start;
    toast('EMI removed');
  } else if (editing) {
    const oldCard = editing.card;
    editing.amt = amt; editing.shop = shop; editing.desc = desc; editing.who = who; editing.card = card;
    saveMonth(editing.d.slice(0, 7));
    // Payments stay with the charge; its paid state follows the new amount.
    if (oldCard !== card) moveTxPayments(editing.id, editing);
    else if (txPays(editing.id).length) syncBill(card, stmtKey(card, editing.d));
    toast('Expense updated');
  } else {
    const key = selected.slice(0, 7);
    months[key] = months[key] || [];
    months[key].push({ id: uid(), d: selected, amt, who, shop, desc, card });
    saveMonth(key);
    toast('Expense added');
  }
  resetForm(); render(); $('amt').focus();
});

$('del').onclick = () => {
  const x = findExpense(editingId);
  if (!x) return;
  if (x.emi) { removeSeries(x.emi.gid); toast(`All ${x.emi.n} instalments deleted`); }
  else { removeExpense(editingId); toast('Expense deleted'); }
  resetForm(); render();
};
$('cancel').onclick = () => { resetForm(); renderPanel(); };


function renderDatalists() {
  // Newest first, so a name typed once is offered from then on.
  const all = allExpenses().sort((a, b) => b.d.localeCompare(a.d));
  const uniq = k => {
    const seen = new Map();
    for (const x of all) { const v = (x[k] || '').trim(); if (v && !seen.has(v.toLowerCase())) seen.set(v.toLowerCase(), v); }
    return [...seen.values()];
  };
  const opts = k => uniq(k).map(v => `<option value="${esc(v)}">`).join('');
  $('shops').innerHTML = opts('shop');
  $('whos').innerHTML = opts('who');
}
