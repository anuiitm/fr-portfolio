import { createSelector } from '@reduxjs/toolkit';
import insights from '../data/insights.json';
import { ratio, sumYears, wilson } from '../lib/stats';

export const data = insights;
export const storeById = Object.fromEntries(insights.stores.map((s) => [s.id, s]));
export const THEME_KEYS = Object.keys(insights.themes);

const selectFilters = (state) => state.filters;
const selectRange = createSelector([selectFilters], (f) => [f.from, f.to]);

// Every store, with its numbers recomputed for the selected years.
export const selectStoreStats = createSelector([selectRange], ([from, to]) =>
  insights.stores.map((s) => {
    const r = sumYears(s.years, from, to);
    const negShare = ratio(r.neg, r.n);
    return {
      ...s,
      r: {
        n: r.n,
        avg: ratio(r.stars, r.n),
        neg: r.neg,
        negShare,
        // Lower bound of the 95% interval: "at least this share is unhappy".
        adjusted: wilson(r.neg, r.n).low,
        fastShare: ratio(r.fast, r.n),
      },
    };
  }),
);

const selectInCity = createSelector([selectStoreStats, (s) => s.filters.city], (stores, city) =>
  city === 'all' ? stores : stores.filter((s) => s.city === city),
);

export const selectKpis = createSelector([selectInCity], totals);
export const selectNetworkKpis = createSelector([selectStoreStats], totals);

function totals(stores) {
  let n = 0, stars = 0, neg = 0, fast = 0, active = 0;
  for (const s of stores) {
    if (!s.r.n) continue;
    active += 1;
    n += s.r.n;
    stars += s.r.avg * s.r.n;
    neg += s.r.neg;
    fast += s.r.fastShare * s.r.n;
  }
  return { stores: active, n, avg: ratio(stars, n), negShare: ratio(neg, n), fastShare: ratio(fast, n) };
}

const SORTERS = {
  name: (s) => `${s.city} ${s.area}`.toLowerCase(),
  n: (s) => s.r.n,
  avg: (s) => s.r.avg,
  negShare: (s) => s.r.negShare,
  adjusted: (s) => s.r.adjusted,
  fastShare: (s) => s.r.fastShare,
};

export const selectTableRows = createSelector(
  [selectInCity, selectFilters],
  (stores, { minReviews, query, sortKey, sortDesc }) => {
    const q = query.trim().toLowerCase();
    const get = SORTERS[sortKey];
    return stores
      .filter((s) => s.r.n >= minReviews && (!q || `${s.area} ${s.city}`.toLowerCase().includes(q)))
      .sort((a, b) => {
        const x = get(a), y = get(b);
        const cmp = typeof x === 'string' ? x.localeCompare(y) : x - y;
        return sortDesc ? -cmp : cmp;
      });
  },
);

export const selectCities = createSelector([selectStoreStats], (stores) => {
  const byCity = new Map();
  for (const s of stores) {
    if (!s.r.n) continue;
    const c = byCity.get(s.city) ?? { city: s.city, stores: 0, n: 0, neg: 0, stars: 0 };
    c.stores += 1;
    c.n += s.r.n;
    c.neg += s.r.neg;
    c.stars += s.r.avg * s.r.n;
    byCity.set(s.city, c);
  }
  return [...byCity.values()]
    .map((c) => ({ ...c, avg: c.stars / c.n, negShare: c.neg / c.n }))
    .sort((a, b) => a.city.localeCompare(b.city));
});

export const selectYears = createSelector([selectRange], ([from, to]) =>
  insights.years.filter((y) => y.y >= from && y.y <= to),
);

export const selectMonthly = createSelector([selectRange], ([from, to]) =>
  insights.monthly.filter((m) => {
    const y = Number(m.m.slice(0, 4));
    return y >= from && y <= to;
  }),
);

export const selectSelectedStore = createSelector(
  [selectStoreStats, (s) => s.filters.selectedStore],
  (stores, id) => (id ? stores.find((s) => s.id === id) ?? null : null),
);

/* ---------- complaints explorer ---------- */

const selectExplorer = (state) => state.explorer;

// Compile each editable rule once; a bad pattern is reported, not thrown.
export const selectCompiledRules = createSelector([(s) => s.explorer.rules], (rules) => {
  const compiled = {};
  const errors = {};
  for (const [key, pattern] of Object.entries(rules)) {
    try {
      compiled[key] = pattern.trim() ? new RegExp(pattern, 'i') : null;
    } catch (e) {
      compiled[key] = null;
      errors[key] = e.message.replace(/^Invalid regular expression: /, '');
    }
  }
  return { compiled, errors };
});

// Reviews in the current scope (years, city, optional single store), each tagged.
export const selectTaggedReviews = createSelector(
  [(s) => s.explorer.reviews, selectRange, (s) => s.filters.city, (s) => s.explorer.storeOnly, selectCompiledRules],
  (reviews, [from, to], city, storeOnly, { compiled }) =>
    reviews
      .filter((r) => {
        const y = Number(r.month.slice(0, 4));
        if (y < from || y > to) return false;
        if (storeOnly) return r.store === storeOnly;
        return city === 'all' || storeById[r.store]?.city === city;
      })
      .map((r) => ({
        ...r,
        themes: THEME_KEYS.filter((k) => compiled[k]?.test(r.text)),
      })),
);

export const selectThemeCounts = createSelector([selectTaggedReviews], (reviews) => {
  const counts = Object.fromEntries(THEME_KEYS.map((k) => [k, 0]));
  let untagged = 0;
  for (const r of reviews) {
    if (!r.themes.length) untagged += 1;
    for (const t of r.themes) counts[t] += 1;
  }
  return { counts, untagged, total: reviews.length };
});

export const selectVisibleReviews = createSelector([selectTaggedReviews, selectExplorer], (reviews, ex) => {
  const q = ex.query.trim().toLowerCase();
  const matches = reviews.filter((r) => {
    if (ex.theme === 'untagged' ? r.themes.length : ex.theme !== 'all' && !r.themes.includes(ex.theme)) return false;
    return !q || r.text.toLowerCase().includes(q);
  });
  return { total: matches.length, items: matches.slice(0, ex.limit) };
});
