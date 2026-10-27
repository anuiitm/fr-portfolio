// Starts the app; loaded last, once every other file has defined its parts.

(function init() {
  loadTheme();
  loadSettings(); loadAll(); loadPayments(); applyCards();
  // One-time: data saved before per-charge ticks gets its settled bills' charges marked.
  if (!localStorage.getItem(NS + 'paidv')) {
    syncAllBills();
    try { localStorage.setItem(NS + 'paidv', '1'); } catch (e) { }
  }
  loadWindow(); resetForm(); showTab('cal'); render();
})();
