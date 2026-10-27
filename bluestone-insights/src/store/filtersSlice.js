import { createSlice } from '@reduxjs/toolkit';

export const YEAR_MIN = 2019;
export const YEAR_MAX = 2025;

export const defaultFilters = {
  from: 2021,
  to: 2025,
  city: 'all',
  minReviews: 200,
  query: '',
  sortKey: 'adjusted',
  sortDesc: true,
  selectedStore: null,
};

// Filters live in the URL so a view can be shared ("look at Patna in 2023").
const URL_KEYS = { from: Number, to: Number, city: String, min: Number, store: String };

export function filtersFromUrl(search) {
  const params = new URLSearchParams(search);
  const out = { ...defaultFilters };
  for (const [key, cast] of Object.entries(URL_KEYS)) {
    if (!params.has(key)) continue;
    const value = cast(params.get(key));
    if (key === 'min') out.minReviews = value;
    else if (key === 'store') out.selectedStore = value;
    else out[key] = value;
  }
  out.from = clampYear(out.from);
  out.to = Math.max(out.from, clampYear(out.to));
  if (!Number.isFinite(out.minReviews)) out.minReviews = defaultFilters.minReviews;
  return out;
}

export function filtersToUrl(f) {
  const params = new URLSearchParams();
  if (f.from !== defaultFilters.from) params.set('from', f.from);
  if (f.to !== defaultFilters.to) params.set('to', f.to);
  if (f.city !== 'all') params.set('city', f.city);
  if (f.minReviews !== defaultFilters.minReviews) params.set('min', f.minReviews);
  if (f.selectedStore) params.set('store', f.selectedStore);
  const s = params.toString();
  return s ? `?${s}` : location.pathname;
}

function clampYear(y) {
  return Number.isFinite(y) ? Math.min(YEAR_MAX, Math.max(YEAR_MIN, y)) : defaultFilters.from;
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: defaultFilters,
  reducers: {
    setYears(state, { payload: [from, to] }) {
      state.from = Math.min(from, to);
      state.to = Math.max(from, to);
    },
    setCity(state, { payload }) {
      state.city = payload;
    },
    setMinReviews(state, { payload }) {
      state.minReviews = payload;
    },
    setQuery(state, { payload }) {
      state.query = payload;
    },
    sortBy(state, { payload }) {
      if (state.sortKey === payload) state.sortDesc = !state.sortDesc;
      else {
        state.sortKey = payload;
        // Text columns read naturally A→Z, numbers high→low.
        state.sortDesc = payload !== 'name';
      }
    },
    selectStore(state, { payload }) {
      state.selectedStore = payload;
    },
    resetFilters() {
      return defaultFilters;
    },
  },
});

export const { setYears, setCity, setMinReviews, setQuery, sortBy, selectStore, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
