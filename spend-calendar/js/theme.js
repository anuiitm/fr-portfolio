// Light / dark mode.

/* ---------------- appearance ---------------- */
function applyTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  const toggle = $('theme-toggle');
  if (!toggle) return;
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  toggle.querySelector('.icon').textContent = dark ? '☀' : '☾';
  toggle.querySelector('.theme-label').textContent = dark ? 'Light mode' : 'Dark mode';
}
function loadTheme() {
  const saved = localStorage.getItem(NS + 'theme');
  applyTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
}
function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(NS + 'theme', next);
  applyTheme(next);
}
if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem(NS + 'theme')) applyTheme(e.matches ? 'dark' : 'light');
});
