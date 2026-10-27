// Cards tab.

/* ---------------- cards ---------------- */
// Which card's form is open: a card id, 'new' for the add form, or null.
let cardEdit = null;
const ord = n => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th');
const PALETTE = ['#E8590C', '#0B7FD4', '#9b7cf1', '#D6206E', '#0E9384', '#B3261E', '#C07000', '#2F6FEB', '#5B8C00', '#8E44AD'];

function cardDatesText(id) {
  const st = settings.cycle[id], d = (settings.due || {})[id];
  const a = st ? `Statement closes on the ${ord(st)}` : 'Calendar-month statement';
  const b = !d || !d.mode ? 'no due date' : d.mode === 'fixed' ? `due on the ${ord(d.v)}` : `due ${d.v} day${d.v === 1 ? '' : 's'} after`;
  return `${a}, ${b}`;
}
// What is recorded against a card: charges, money still owed, payments.
function cardUsage(id) {
  const xs = allExpenses().filter(x => x.card === id);
  const live = xs.filter(countable);
  let pays = 0;
  for (const k in payments) if (k.slice(0, k.indexOf(':')) === id) pays += payments[k].length;
  return {
    entries: xs.length, charges: live.length, pays,
    spent: round2(live.reduce((a, b) => a + b.amt, 0)),
    left: round2(live.filter(x => !x.paid).reduce((a, x) => a + txState(x).left, 0))
  };
}

function cardFormHTML(c) {
  const id = c ? c.id : 'new', d = (c && (settings.due || {})[c.id]) || {};
  const color = c ? c.color : PALETTE[CARDS.length % PALETTE.length];
  return `<div class="card-form" data-form="${id}">
    <div class="cf-grid">
      <div class="cf-name"><label for="cf-name-${id}">Card name</label>
        <input id="cf-name-${id}" data-f="name" type="text" maxlength="40" value="${esc(c ? c.name : '')}" placeholder="HDFC Millennia" autocomplete="off"></div>
      <div><label for="cf-color-${id}">Colour</label>
        <input id="cf-color-${id}" data-f="color" type="color" value="${esc(color)}"></div>
      <div><label for="cf-stmt-${id}">Statement day</label>
        <input id="cf-stmt-${id}" data-f="stmt" type="number" min="1" max="28" step="1" value="${c && settings.cycle[c.id] || ''}" placeholder="—"></div>
      <div><label for="cf-dmode-${id}">Payment due</label>
        <select id="cf-dmode-${id}" data-f="dmode">
          <option value=""${!d.mode ? ' selected' : ''}>No due date</option>
          <option value="fixed"${d.mode === 'fixed' ? ' selected' : ''}>On day of month</option>
          <option value="days"${d.mode === 'days' ? ' selected' : ''}>Days after statement</option>
        </select></div>
      <div><label for="cf-dval-${id}">Day / days</label>
        <input id="cf-dval-${id}" data-f="dval" type="number" min="1" max="60" step="1" value="${d.v || ''}" placeholder="—"></div>
    </div>
    <div class="cf-err" role="alert" hidden></div>
    <div class="bill-actions">
      <button class="btn-s primary" type="button" data-cact="save">${c ? 'Save card' : 'Add card'}</button>
      <button class="btn-s quiet" type="button" data-cact="cancel">Cancel</button>
    </div>
  </div>`;
}

function renderCards() {
  $('cards-count').textContent = CARDS.length || '';
  const usage = Object.fromEntries(CARDS.map(c => [c.id, cardUsage(c.id)]));
  const withStmt = CARDS.filter(c => settings.cycle[c.id]).length;
  const withDue = CARDS.filter(c => settings.due?.[c.id]?.mode).length;
  const left = round2(CARDS.reduce((a, c) => a + usage[c.id].left, 0));
  $('cards-stats').innerHTML = [
    [String(CARDS.length), CARDS.length === 1 ? 'card' : 'cards', ''],
    [`${withStmt}/${CARDS.length}`, 'with a statement day', ''],
    [`${withDue}/${CARDS.length}`, 'with a due date', ''],
    [money(left), 'unsettled across cards', Math.round(left) > 0 ? 'left' : '']
  ].map(([v, k, c]) => `<div class="stat"><div class="v ${c}">${v}</div><div class="k">${k}</div></div>`).join('');

  const rows = CARDS.map(c => {
    const u = usage[c.id], open = cardEdit === c.id;
    const used = u.entries + u.pays > 0, last = CARDS.length === 1;
    const delTip = last ? 'You need at least one card' : used ? `Has ${u.entries} entr${u.entries === 1 ? 'y' : 'ies'}${u.pays ? ` and ${u.pays} payment${u.pays === 1 ? '' : 's'}` : ''} — delete those first` : 'Delete this card';
    return `<div class="crow" data-card="${c.id}">
      <div class="crow-main">
        <span class="bar" style="background:${c.color}"></span>
        <span class="cw">
          <span class="c1">${esc(c.name)}</span>
          <span class="c2">${cardDatesText(c.id)}</span>
        </span>
        <span class="cfig"><b>${money(u.spent)}</b>${u.charges} charge${u.charges === 1 ? '' : 's'}${Math.round(u.left) > 0 ? `, ${money(u.left)} unsettled` : ''}</span>
        <span class="cact">
          <button class="btn-s" type="button" data-cact="edit" aria-expanded="${open}">${open ? 'Close' : 'Edit'}</button>
          <button class="btn-s quiet danger" type="button" data-cact="delete" title="${delTip}" aria-disabled="${used || last}">Delete</button>
        </span>
      </div>
      ${open ? cardFormHTML(c) : ''}
    </div>`;
  });
  if (cardEdit === 'new') rows.unshift(`<div class="crow" data-card="new">${cardFormHTML(null)}</div>`);
  $('cards-list').innerHTML = rows.join('');

  $('cards-list').querySelectorAll('.crow').forEach(row => {
    const id = row.dataset.card;
    row.querySelectorAll('[data-cact]').forEach(b => b.onclick = () => {
      const act = b.dataset.cact;
      if (act === 'edit') { cardEdit = cardEdit === id ? null : id; renderCards(); focusCardForm(); }
      else if (act === 'cancel') { cardEdit = null; renderCards(); }
      else if (act === 'save') saveCard(id, row.querySelector('.card-form'));
      else if (act === 'delete') deleteCard(id);
    });
    row.querySelectorAll('.card-form input').forEach(i => i.onkeydown = e => {
      if (e.key === 'Enter') { e.preventDefault(); saveCard(id, row.querySelector('.card-form')); }
      else if (e.key === 'Escape') { e.preventDefault(); cardEdit = null; renderCards(); }
    });
  });
}
function focusCardForm() {
  const el = $('cards-list').querySelector('.card-form [data-f="name"]');
  if (el) { el.focus(); el.select(); }
}

function saveCard(id, form) {
  const f = k => form.querySelector(`[data-f="${k}"]`);
  const name = f('name').value.trim().replace(/\s+/g, ' ');
  const color = /^#[0-9a-f]{6}$/i.test(f('color').value) ? f('color').value : '#7A8699';
  const stmtRaw = f('stmt').value.trim(), stmt = parseInt(stmtRaw, 10);
  const dmode = f('dmode').value, dvRaw = f('dval').value.trim(), dv = parseInt(dvRaw, 10);
  // Shown in place, so nothing typed so far is lost.
  const fail = (msg, k) => {
    const el = form.querySelector('.cf-err');
    el.textContent = msg; el.hidden = false; f(k).focus();
  };
  if (!name) return fail('Give the card a name.', 'name');
  if (CARDS.some(c => c.id !== id && c.name.toLowerCase() === name.toLowerCase())) return fail(`There is already a card called ${name}.`, 'name');
  if (stmtRaw && !(stmt >= 1 && stmt <= 28)) return fail('Statement day must be between 1 and 28, or blank.', 'stmt');
  if (dmode === 'fixed' && !(dv >= 1 && dv <= 31)) return fail('Due day must be between 1 and 31.', 'dval');
  if (dmode === 'days' && !(dv >= 1 && dv <= 60)) return fail('Days after statement must be between 1 and 60.', 'dval');

  let c = CARD[id];
  const isNew = !c;
  if (isNew) {
    // ids key payments as `card:YYYY-MM`, so keep them to plain letters and digits
    const base = name.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 16) || 'card';
    let nid = base;
    while (CARD[nid]) nid = base + Math.random().toString(36).slice(2, 5);
    c = { id: nid, name, color };
    settings.cards.push(c);
  } else Object.assign(c, { name, color });
  // Changing a statement day moves which bill a charge lands on; the
  // per-charge ticks follow it the same way they do after a restore.
  const cycleChanged = (settings.cycle[c.id] || null) !== (stmtRaw ? stmt : null);
  if (stmtRaw) settings.cycle[c.id] = stmt; else delete settings.cycle[c.id];
  settings.due = settings.due || {};
  if (dmode) settings.due[c.id] = { mode: dmode, v: dv }; else delete settings.due[c.id];
  saveSettings(); applyCards();
  if (cycleChanged) syncAllBills();
  cardEdit = null;
  render();
  toast(isNew ? `${name} added` : `${name} saved`);
}

function deleteCard(id) {
  const c = CARD[id];
  if (!c) return;
  const u = cardUsage(id);
  if (CARDS.length === 1) { toast('You need at least one card.'); return; }
  if (u.entries + u.pays > 0) {
    toast(`${c.name} has ${u.entries} entr${u.entries === 1 ? 'y' : 'ies'}${u.pays ? ` and ${u.pays} payment${u.pays === 1 ? '' : 's'}` : ''} — delete or move those first.`);
    return;
  }
  if (!confirm(`Delete ${c.name}? Its statement and due dates go with it.`)) return;
  settings.cards = settings.cards.filter(x => x.id !== id);
  delete settings.cycle[id];
  if (settings.due) delete settings.due[id];
  if (settings.lastEmi) delete settings.lastEmi[id];
  if (payCard === id) payCard = '';
  if (unpaidCard === id) unpaidCard = '';
  if (cardEdit === id) cardEdit = null;
  saveSettings(); applyCards();
  render();
  toast(`${c.name} deleted`);
}
$('card-add').onclick = () => { cardEdit = 'new'; renderCards(); focusCardForm(); };
