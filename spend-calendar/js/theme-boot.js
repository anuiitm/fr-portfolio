// Runs in <head> before the page paints, so a saved dark theme never flashes light.

(function () {
  const saved = localStorage.getItem('spendcal:theme');
  document.documentElement.dataset.theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();
