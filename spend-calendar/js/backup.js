// Save and restore backup files. Everything else stays in localStorage.

/* ---------------- backup ---------------- */
function download(name, text, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
// v5: expenses may carry `paid: { on, via }`; payments may carry `tx`
// (the expense they went towards — several per charge when paid in parts).
// v6: expenses carry `shop` and `desc` in place of `where`.
function backupPayload() {
  const clean = {};
  for (const k in months) if ((months[k] || []).length) clean[k] = months[k];
  return { format: 'spendcal', version: 6, savedAt: new Date().toISOString(), settings, months: clean, payments };
}
$('backup').onclick = () => {
  const payload = backupPayload();
  download(`backup-${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}.json`, JSON.stringify(payload, null, 2), 'application/json');
  toast('Backup saved');
};
$('restore').onclick = () => $('restore-file').click();
$('restore-file').onchange = e => {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    let data;
    try { data = JSON.parse(r.result); } catch (err) { toast('That file is not a valid backup.'); return; }
    if (!data || data.format !== 'spendcal' || typeof data.months !== 'object') { toast('That file is not a spend backup.'); return; }
    const count = Object.values(data.months).reduce((a, b) => a + b.length, 0);
    if (!confirm(`Restore ${count} entries? This replaces everything currently in the tracker.`)) return;
    storedMonthKeys().forEach(k => localStorage.removeItem(NS + 'exp:' + k));
    months = {};
    for (const k in data.months) { months[k] = data.months[k]; splitWhere(months[k]); saveMonth(k); }
    if (data.settings) {
      // Backups from before the Cards tab carry no card list: keep the current one.
      const keep = settings.cards;
      settings = Object.assign({ cycle: {}, mode: 'month' }, data.settings); settings.mode = 'month';
      if (!Array.isArray(settings.cards) || !settings.cards.length) settings.cards = keep;
      saveSettings();
    }
    payments = (data.payments && typeof data.payments === 'object') ? data.payments : {};
    savePayments();
    applyCards();
    // Older backups predate per-charge ticks: mark charges on settled bills.
    if (!(data.version >= 4)) syncAllBills();
    billOpen.clear(); billTxOpen = null;
    loadWindow(); render(); toast(`Restored ${count} entries`);
  };
  r.readAsText(file);
  e.target.value = '';
};

// Wipes this browser's copy and reloads, which seeds the demo data again.
$('reset-demo').onclick = () => {
  if (!confirm('Replace everything with fresh demo data?')) return;
  Object.keys(localStorage).filter(k => k.startsWith(NS)).forEach(k => localStorage.removeItem(k));
  location.reload();
};
