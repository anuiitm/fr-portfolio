import { menuData, commonItems } from './menu-data.js';

// Mess → menu keys. A mess with one entry has no diet choice.
const MESSES = [
  { id: 'temp', label: 'Temporary', menus: { any: 'TempMenu' } },
  { id: 'jain', label: 'Pure veg (Jain)', menus: { any: 'jain' } },
  { id: 'north', label: 'North Indian', menus: { veg: 'northVeg', nonveg: 'northNonVeg' } },
  { id: 'south', label: 'South Indian', menus: { veg: 'southVeg', nonveg: 'southNonVeg' } },
  { id: 'unified', label: 'Unified', menus: { veg: 'unifiedVeg', nonveg: 'unifiedNonVeg' } },
  { id: 'protein', label: 'Protein', menus: { veg: 'proteinMessVeg', nonveg: 'proteinMessNonVeg' } },
];
const DIETS = { veg: 'Veg', nonveg: 'Non-veg' };

// Windows (minutes since midnight) used only to decide which meal is "now".
// Same boundaries as the original app; not official serving times.
const MEALS = {
  Breakfast: [7 * 60, 10 * 60],
  Lunch: [10 * 60, 15 * 60],
  Snacks: [15 * 60, 18 * 60],
  Dinner: [18 * 60, 22 * 60],
};

const ROTATION_START = new Date(2024, 6, 28); // a Sunday, start of week A
const DAY_MS = 86400000;
const KEY = 'instimess:v2';
const $ = (id) => document.getElementById(id);

const saved = readSaved();
const state = {
  mess: MESSES.some((m) => m.id === saved.mess) ? saved.mess : 'unified',
  diet: saved.diet in DIETS ? saved.diet : 'veg',
  date: startOfDay(new Date()),
};

/* ---------- date helpers ---------- */
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function weekLetter(date) {
  // Math.round absorbs the hour lost or gained if a DST change sits in between.
  const days = Math.round((startOfDay(date) - ROTATION_START) / DAY_MS);
  return 'ABCD'[(((Math.floor(days / 7) % 4) + 4) % 4)];
}
const dayName = (d) => d.toLocaleDateString('en-US', { weekday: 'long' });
const toInput = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const isToday = (d) => startOfDay(new Date()).getTime() === d.getTime();

// The meal being served now, or else the next one today.
function mealStatus(now = new Date()) {
  const m = now.getHours() * 60 + now.getMinutes();
  for (const [meal, [from, to]] of Object.entries(MEALS)) {
    if (m >= from && m < to) return { meal, live: true };
    if (m < from) return { meal, live: false };
  }
  return null;
}

/* ---------- storage ---------- */
function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify({ mess: state.mess, diet: state.diet }));
  } catch {
    /* private mode: the choice lasts for this visit */
  }
}

/* ---------- rendering ---------- */
function renderChips(container, options, current, onPick) {
  container.replaceChildren(
    ...options.map(([value, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.setAttribute('aria-pressed', String(value === current));
      b.addEventListener('click', () => onPick(value));
      return b;
    }),
  );
}

function render() {
  const mess = MESSES.find((m) => m.id === state.mess);
  const hasDiet = !('any' in mess.menus);
  const menuKey = hasDiet ? mess.menus[state.diet] : mess.menus.any;
  const menu = menuData[menuKey];

  renderChips($('mess'), MESSES.map((m) => [m.id, m.label]), state.mess, (v) => update({ mess: v }));
  $('diet-wrap').hidden = !hasDiet;
  if (hasDiet) renderChips($('diet'), Object.entries(DIETS), state.diet, (v) => update({ diet: v }));

  const week = weekLetter(state.date);
  const day = dayName(state.date);
  $('date').value = toInput(state.date);
  $('date-text').textContent = state.date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
  $('today').hidden = isToday(state.date);
  $('context').textContent = `${menu.name}, week ${week}, ${day}`;

  const dayMenu = menu.weeks[week]?.[day];
  const meals = $('meals');
  if (!dayMenu) {
    const p = document.createElement('p');
    p.className = 'empty';
    p.textContent = `The ${menu.name.toLowerCase()} has no menu for week ${week}. Try another mess or day.`;
    meals.replaceChildren(p);
    return;
  }

  const status = isToday(state.date) ? mealStatus() : null;
  const tpl = $('meal-tpl');
  meals.replaceChildren(
    ...Object.entries(dayMenu).map(([meal, dishes]) => {
      const node = tpl.content.firstElementChild.cloneNode(true);
      node.querySelector('h2').textContent = meal;
      node.querySelector('.dishes').replaceChildren(...dishes.map((d) => Object.assign(document.createElement('li'), { textContent: d })));
      const common = commonItems[meal];
      if (common) node.querySelector('.common ul').replaceChildren(...common.map((d) => Object.assign(document.createElement('li'), { textContent: d })));
      else node.querySelector('.common').remove();
      if (status?.meal === meal) {
        node.classList.add(status.live ? 'is-live' : 'is-next');
        const tag = document.createElement('span');
        tag.className = 'meal-tag';
        tag.textContent = status.live ? 'Serving now' : 'Up next';
        node.querySelector('.meal-head').append(tag);
      }
      return node;
    }),
  );
}

function update(patch) {
  Object.assign(state, patch);
  save();
  render();
}

function shiftDay(by) {
  update({ date: new Date(state.date.getFullYear(), state.date.getMonth(), state.date.getDate() + by) });
}

/* ---------- theme ---------- */
function paintThemeButton() {
  const dark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  $('theme').textContent = dark ? '☀' : '☾';
  $('theme').setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  return dark;
}

/* ---------- wiring (once) ---------- */
$('prev').addEventListener('click', () => shiftDay(-1));
$('next').addEventListener('click', () => shiftDay(1));
$('today').addEventListener('click', () => update({ date: startOfDay(new Date()) }));
$('date').addEventListener('change', (e) => {
  if (!e.target.value) return;
  const [y, m, d] = e.target.value.split('-').map(Number);
  update({ date: new Date(y, m - 1, d) });
});
document.addEventListener('keydown', (e) => {
  if (e.target.closest('input, select, textarea') || e.altKey || e.metaKey || e.ctrlKey) return;
  if (e.key === 'ArrowLeft') shiftDay(-1);
  if (e.key === 'ArrowRight') shiftDay(1);
});
$('theme').addEventListener('click', () => {
  const next = paintThemeButton() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('instimess:theme', next);
  } catch {
    /* ignore */
  }
  paintThemeButton();
});

// Re-check "serving now" every minute while the page is open.
setInterval(() => isToday(state.date) && render(), 60000);

paintThemeButton();
render();
