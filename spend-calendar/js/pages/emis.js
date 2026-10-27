// EMIs tab.

/* ---------------- EMI overview ---------------- */
const todayKey = () => dKey(now.getFullYear(), now.getMonth(), now.getDate());

function emiSeries() {
  const map = {};
  for (const x of allExpenses()) {
    if (!x.emi) continue;
    if (!map[x.emi.gid]) map[x.emi.gid] = { gid: x.emi.gid, meta: x.emi, card: x.card, name: xName(x), who: x.who, items: [], marker: null };
    const g = map[x.emi.gid];
    if (x.marker) g.marker = x; else { g.items.push(x); g.meta = x.emi; }
  }
  const t = todayKey();
  const last = a => a.length ? a[a.length - 1].d : '';
  return Object.values(map).map(g => {
    g.items.sort((a, b) => a.d.localeCompare(b.d));
    g.purchase = (g.marker && g.marker.d) || g.meta.start || (g.items[0] || {}).d;
    g.charged = g.items.reduce((a, b) => a + b.amt, 0);
    const past = g.items.filter(x => x.d <= t);
    g.paid = past.reduce((a, b) => a + b.amt, 0);
    g.paidCount = past.length;
    g.left = g.charged - g.paid;
    g.next = g.items.find(x => x.d > t) || null;
    g.done = !g.next;
    return g;
  }).filter(g => g.items.length).sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    if (a.done) return last(b.items).localeCompare(last(a.items));
    return a.next.d.localeCompare(b.next.d);
  });
}

function renderEmis() {
  const series = emiSeries();
  const live = series.filter(s => !s.done);
  $('emi-count').textContent = live.length ? live.length : '';

  const t = todayKey(), thisStmt = ymKey(now.getFullYear(), now.getMonth());
  const instalments = allExpenses().filter(x => x.emi && countable(x));
  const dueThisMonth = instalments.filter(x => stmtKey(x.card, x.d) === thisStmt)
    .reduce((a, b) => a + b.amt, 0);
  const outstanding = live.reduce((a, b) => a + b.left, 0);
  const financed = live.reduce((a, b) => a + (b.meta.total || 0), 0);

  $('emi-stats').innerHTML = [
    [money(dueThisMonth), `on ${MONTHS[now.getMonth()]} statements`],
    [money(outstanding), 'left to pay'],
    [String(live.length), live.length === 1 ? 'running plan' : 'running plans'],
    [money(financed), 'purchases on EMI']
  ].map(([v, k]) => `<div class="stat"><div class="v">${v}</div><div class="k">${k}</div></div>`).join('');

  if (!series.length) {
    $('emi-plans').innerHTML = '<div class="none">No EMIs yet. Mark an expense as EMI and it shows up here.</div>';
    $('emi-forward').innerHTML = '<div class="none" style="padding:8px 0">Nothing scheduled.</div>';
    return;
  }

  $('emi-plans').innerHTML = series.map(g => {
    const c = CARD[g.card] || CARDS[0];
    const m = g.meta;
    const pct = Math.round(g.paidCount / m.n * 100);
    const terms = [`${m.n} months`];
    if (m.rate) terms.push(`${m.rate}% p.a.`);
    if (m.fee) terms.push(`fee ${money(m.fee)}`);
    let nextTxt = '';
    if (g.next) {
      const sk = stmtKey(g.card, g.next.d);
      const du = dueDate(g.card, closeDate(g.card, Number(sk.slice(0, 4)), Number(sk.slice(5, 7)) - 1));
      nextTxt = `Next ${money(g.next.amt)} on the ${MONTHS[Number(sk.slice(5, 7)) - 1].slice(0, 3)} bill` +
        (du ? `, pay by ${fmtShort(du)}` : '');
    }
    return `<button class="plan ${g.done ? 'done' : ''}" type="button" data-id="${g.items[0].id}">
  <span class="bar" style="background:${c.color}"></span>
  <span class="pw">
    <span class="t1">
      <span class="nm">${esc(g.name || c.name)}${m.noCost ? '<span class="tag">no-cost</span>' : ''}</span>
      <b>${money(m.total)}</b>
    </span>
    <span class="t2">${esc(c.name)}, ${terms.join(', ')}, ${esc(g.who || 'Self')}, bought ${g.purchase ? fmtShort(new Date(g.purchase.slice(0, 4), Number(g.purchase.slice(5, 7)) - 1, Number(g.purchase.slice(8)))) : '—'}</span>
    <span class="prog"><i style="width:${pct}%;background:${c.color}"></i></span>
    <span class="t3">
      <span>${g.paidCount}/${m.n} paid, ${money(g.paid)}</span>
      <span>${g.done ? 'Closed' : `${money(g.left)} left`}</span>
      <span class="next">${nextTxt}</span>
    </span>
  </span>
</button>`;
  }).join('');

  $('emi-plans').querySelectorAll('.plan').forEach(b => b.onclick = () => {
    showTab('cal');
    startEdit(b.dataset.id);
    document.querySelector('.panel').scrollIntoView({ block: 'nearest' });
  });

  // next 12 statement months of committed instalments, stacked by card
  const bucket = {};
  for (const x of instalments) {
    const k = stmtKey(x.card, x.d);
    (bucket[k] = bucket[k] || []).push(x);
  }
  const rows = [];
  for (let k = 0; k < 12; k++) {
    const dt = new Date(now.getFullYear(), now.getMonth() + k, 1);
    const key = ymKey(dt.getFullYear(), dt.getMonth());
    const due = bucket[key] || [];
    const byCard = CARDS.map(c => ({ c, v: due.filter(x => x.card === c.id).reduce((a, b) => a + b.amt, 0) }));
    rows.push({ key, y: dt.getFullYear(), m: dt.getMonth(), total: byCard.reduce((a, b) => a + b.v, 0), byCard });
  }
  const trimmed = rows.filter((r, i) => i === 0 || rows.slice(i).some(x => x.total > 0));
  const max = Math.max(1, ...trimmed.map(r => r.total));
  $('emi-forward').innerHTML = trimmed.map((r, i) => `
<div class="mrow ${i === 0 ? 'now' : ''}">
  <span class="mm">${MONTHS[r.m].slice(0, 3)} ${String(r.y).slice(2)}</span>
  <span class="mbar">${r.byCard.filter(x => x.v > 0).map(x =>
    `<i style="width:${x.v / max * 100}%;background:${x.c.color}"></i>`).join('')}</span>
  <span class="mv">${r.total ? money(r.total) : '—'}</span>
</div>`).join('');
}
