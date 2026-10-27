// The complete collection stays available if JavaScript is disabled.
const buttons = [...document.querySelectorAll('.filters button')];
const cards = [...document.querySelectorAll('.project')];
const status = document.getElementById('filter-status');
const search = document.getElementById('project-search');
const emptyState = document.getElementById('empty-state');
const root = document.documentElement;
const themeButton = document.getElementById('theme');
const colorPreference = matchMedia('(prefers-color-scheme: dark)');
const searchText = new Map(cards.map((card) => [card, `${card.textContent} ${card.dataset.tags}`.toLocaleLowerCase()]));
let filter = 'all';

function updateProjects() {
  const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  let shown = 0;
  cards.forEach((card) => {
    const matchesFilter = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
    const matchesSearch = words.every((word) => searchText.get(card).includes(word));
    card.hidden = !(matchesFilter && matchesSearch);
    if (!card.hidden) shown += 1;
  });
  buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.f === filter)));
  emptyState.hidden = shown !== 0;
  status.textContent = shown === cards.length ? `Showing all ${cards.length} projects` : `Showing ${shown} of ${cards.length} projects`;
}

buttons.forEach((button) => button.addEventListener('click', () => {
  filter = button.dataset.f;
  updateProjects();
}));
search.addEventListener('input', updateProjects);
search.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    search.value = '';
    updateProjects();
  }
});
document.getElementById('reset-filters').addEventListener('click', () => {
  filter = 'all';
  search.value = '';
  updateProjects();
  search.focus();
});
document.getElementById('browse-controls').hidden = false;
document.getElementById('search-control').hidden = false;
updateProjects();

// Direct project links remain reachable after filtering.
function revealLinkedProject() {
  const target = cards.find((card) => `#${card.id}` === location.hash);
  if (target?.hidden) {
    filter = 'all';
    search.value = '';
    updateProjects();
    target.scrollIntoView({ block: 'start' });
  }
}
window.addEventListener('hashchange', revealLinkedProject);
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (link && cards.some((card) => `#${card.id}` === link.hash && card.hidden)) {
    filter = 'all';
    search.value = '';
    updateProjects();
  }
});
revealLinkedProject();

function isDark() {
  return root.dataset.theme ? root.dataset.theme === 'dark' : colorPreference.matches;
}
function updateThemeLabel() {
  const label = `Switch to ${isDark() ? 'light' : 'dark'} theme`;
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  themeButton.setAttribute('aria-pressed', String(isDark()));
  document.getElementById('theme-label').textContent = isDark() ? 'Light mode' : 'Dark mode';
  document.querySelector('meta[name="theme-color"]').content = isDark() ? '#1c1d20' : '#faf9f6';
}
themeButton.addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('fp-theme', root.dataset.theme); } catch { /* Keep the choice for this visit. */ }
  updateThemeLabel();
});
colorPreference.addEventListener('change', updateThemeLabel);
updateThemeLabel();
themeButton.hidden = false;

// Raw local previews have no repository URL; the build resolves these links.
document.querySelectorAll('[data-source][href="#"]').forEach((link) => {
  const placeholder = document.createElement('span');
  placeholder.className = `${link.className} is-disabled`;
  placeholder.setAttribute('aria-disabled', 'true');
  placeholder.title = 'Source links are available when built with a GitHub repository URL.';
  placeholder.innerHTML = link.innerHTML;
  link.replaceWith(placeholder);
});
