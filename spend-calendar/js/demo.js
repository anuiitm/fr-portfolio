// Seeds about ten weeks of believable spending the first time the page opens,
// so the calendar, bills, EMIs and payments all have something to show.
// Runs before main.js, writes through the same storage helpers the app uses,
// and does nothing once this browser has any data of its own.

(function seedDemo() {
  if (localStorage.getItem(NS + 'settings') || storedMonthKeys().length) return;

  settings = {
    mode: 'month',
    cards: DEFAULT_CARDS.map(c => Object.assign({}, c)),
    cycle: { icici: 1, yes: 15, slice: 24, au: 17, sbi: 8, idfc: 17 },
    due: { icici: { mode: 'fixed', v: 20 }, yes: { mode: 'days', v: 20 }, slice: { mode: 'fixed', v: 9 }, au: { mode: 'days', v: 20 }, sbi: { mode: 'fixed', v: 28 }, idfc: { mode: 'fixed', v: 1 } },
  };
  months = {};
  payments = {};

  // [days ago, amount, shop, items, card, for whom]
  const SPEND = [
    [2, 1249, 'Swiggy Instamart', 'Groceries', 'slice', ''],
    [3, 649, 'BookMyShow', 'Movie tickets', 'icici', 'Riya'],
    [5, 3899, 'Decathlon', 'Running shoes', 'sbi', ''],
    [6, 449, 'Zomato', 'Dinner', 'slice', ''],
    [8, 2150, 'HP Petrol', 'Fuel', 'idfc', ''],
    [9, 15999, 'Croma', 'Noise-cancelling headphones', 'icici', ''],
    [11, 799, 'Airtel', 'Postpaid bill', 'au', ''],
    [13, 1899, 'Amazon', 'Desk lamp\nHDMI cable', 'yes', ''],
    [15, 3200, 'Apollo Pharmacy', 'Medicines', 'sbi', 'Mom'],
    [17, 520, 'Uber', 'Airport ride', 'slice', ''],
    [19, 2799, 'Myntra', 'Kurta', 'au', 'Dad'],
    [22, 1340, 'BigBasket', 'Groceries', 'slice', ''],
    [24, 2150, 'HP Petrol', 'Fuel', 'idfc', ''],
    [27, 4599, 'IndiGo', 'Flight to Pune', 'icici', ''],
    [29, 999, 'Netflix', 'Annual plan, first month', 'yes', ''],
    [33, 1675, 'Swiggy Instamart', 'Groceries', 'slice', ''],
    [36, 2499, 'Nykaa', 'Gift', 'au', 'Riya'],
    [39, 799, 'Airtel', 'Postpaid bill', 'au', ''],
    [41, 1990, 'Amazon', 'Books (3)', 'yes', ''],
    [44, 2150, 'HP Petrol', 'Fuel', 'idfc', ''],
    [47, 3499, 'Decathlon', 'Yoga mat\nDumbbells', 'sbi', ''],
    [52, 1189, 'BigBasket', 'Groceries', 'slice', ''],
    [55, 6200, 'Taj Coromandel', 'Anniversary dinner', 'icici', ''],
    [58, 450, 'Rapido', 'Office commute', 'slice', ''],
    [63, 2150, 'HP Petrol', 'Fuel', 'idfc', ''],
    [66, 1450, 'Amazon', 'Phone case', 'yes', ''],
    [70, 899, 'Spotify', 'Family plan', 'au', ''],
  ];

  const today = new Date();
  const isoAgo = days => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
    return dKey(d.getFullYear(), d.getMonth(), d.getDate());
  };
  const put = x => (months[x.d.slice(0, 7)] = months[x.d.slice(0, 7)] || []).push(x);

  for (const [ago, amt, shop, desc, card, who] of SPEND) put({ id: uid(), d: isoAgo(ago), amt, who, shop, desc, card });

  // One EMI purchase, built with the same schedule maths as the form.
  const start = isoAgo(48);
  const o = { total: 32999, n: 6, rate: 15.99, fee: 199, noCost: false };
  const s = buildSchedule(o);
  const meta = { gid: uid(), n: s.n, total: o.total, rate: o.rate, fee: o.fee, noCost: o.noCost, start, off: 0 };
  put({ id: uid(), d: start, amt: o.total, who: '', shop: 'Reliance Digital', desc: 'Washing machine', card: 'icici', marker: true, emi: Object.assign({ i: 0 }, meta) });
  emiDates('icici', start, s.n, 0).forEach((dt, k) =>
    put({ id: uid(), d: dt.d, amt: s.rows[k].amt, who: '', shop: 'Reliance Digital', desc: 'Washing machine', card: 'icici', emi: Object.assign({ i: k + 1 }, meta) }));

  for (const k in months) saveMonth(k);
  saveSettings();

  // Last month's statements: two paid in full, one part-paid, the rest open.
  const last = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastKey = ymKey(last.getFullYear(), last.getMonth());
  const billTotal = card => allExpenses().filter(x => countable(x) && x.card === card && stmtKey(card, x.d) === lastKey).reduce((a, x) => a + x.amt, 0);
  const paidDay = dKey(today.getFullYear(), today.getMonth(), Math.max(1, Math.min(today.getDate() - 1, 5)));
  for (const [card, share] of [['slice', 1], ['idfc', 1], ['au', 0.5]]) {
    const amt = Math.round(billTotal(card) * share);
    if (amt > 0) (payments[payKey(card, lastKey)] = []).push({ id: uid(), amt, on: paidDay });
  }
  savePayments();
  // main.js ticks the charges covered by these payments on start-up.
})();
