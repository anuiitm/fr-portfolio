// Reading and writing localStorage: expenses by month, settings, payments.

/* ---------------- storage ---------------- */
const NS = 'spendcal:';
function storedMonthKeys() {
  const out = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(NS + 'exp:')) out.push(k.slice((NS + 'exp:').length));
  }
  return out.sort();
}
function loadAll() {
  months = {};
  for (const key of storedMonthKeys()) {
    try { months[key] = JSON.parse(localStorage.getItem(NS + 'exp:' + key)) || []; }
    catch (e) { months[key] = []; }
    if (splitWhere(months[key])) saveMonth(key);
  }
}
// Charges used to carry one `where`; it is now `shop` (shop / website) and
// `desc` (what was bought). Old entries get the same text in both.
function splitWhere(list) {
  let changed = false;
  for (const x of list) {
    if (!('where' in x)) continue;
    if (!('shop' in x)) x.shop = x.where || '';
    if (!('desc' in x)) x.desc = x.where || '';
    delete x.where; changed = true;
  }
  return changed;
}
function saveMonth(key) {
  try { localStorage.setItem(NS + 'exp:' + key, JSON.stringify(months[key] || [])); }
  catch (e) { toast('Save failed — browser storage is full or blocked.'); }
}
function loadSettings() {
  try { const raw = localStorage.getItem(NS + 'settings'); if (raw) settings = Object.assign(settings, JSON.parse(raw)); }
  catch (e) { }
  // The billing-cycle view is gone; the Bills tab is the statement-accurate one now.
  settings.mode = 'month';
}
function saveSettings() {
  try { localStorage.setItem(NS + 'settings', JSON.stringify(settings)); } catch (e) { }
}
// Makes settings.cards usable: seeds the defaults the first time, and gives
// any card id still used by a charge or payment a placeholder entry so its
// data never goes missing. Rebuilds the CARDS / CARD lookups.
function applyCards() {
  let changed = false;
  if (!Array.isArray(settings.cards) || !settings.cards.length) {
    settings.cards = DEFAULT_CARDS.map(c => Object.assign({}, c)); changed = true;
  }
  const known = new Set(settings.cards.map(c => c.id));
  const used = new Set(allExpenses().map(x => x.card));
  for (const k in payments) used.add(k.slice(0, k.indexOf(':')));
  for (const id of used) if (id && !known.has(id)) {
    settings.cards.push({ id, name: id.toUpperCase(), color: '#7A8699' }); known.add(id); changed = true;
  }
  CARDS = settings.cards;
  CARD = Object.fromEntries(CARDS.map(c => [c.id, c]));
  if (!CARD[pickedCard]) pickedCard = CARDS[0].id;
  if (filter && !CARD[filter]) filter = null;
  if (changed) saveSettings();
}
// Bill payments: keyed `card:YYYY-MM` (the month the statement closes),
// each holding a list of part-payments so a bill can be chipped away at.
function loadPayments() {
  try { payments = JSON.parse(localStorage.getItem(NS + 'pay')) || {}; }
  catch (e) { payments = {}; }
}
function savePayments() {
  try { localStorage.setItem(NS + 'pay', JSON.stringify(payments)); }
  catch (e) { toast('Save failed — browser storage is full or blocked.'); }
}
function loadWindow() {
  const c = new Date(view.y, view.m, 1);
  [-1, 0, 1].forEach(o => {
    const d = new Date(c.getFullYear(), c.getMonth() + o, 1);
    const k = ymKey(d.getFullYear(), d.getMonth());
    if (!months[k]) months[k] = [];
  });
}
