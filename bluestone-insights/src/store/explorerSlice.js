import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import insights from '../data/insights.json';

const defaultRules = Object.fromEntries(Object.entries(insights.themes).map(([k, t]) => [k, t.pattern]));

// The ~1.9k low-rated reviews with text are a separate file, fetched only when the
// complaints section is opened. Rows: [storeId, rating, 'YYYY-MM', text].
export const loadReviews = createAsyncThunk(
  'explorer/load',
  async () => {
    const res = await fetch(`${import.meta.env.BASE_URL}data/negative-reviews.json`);
    if (!res.ok) throw new Error(`Could not load reviews (HTTP ${res.status})`);
    const rows = await res.json();
    return rows.map(([store, rating, month, text], i) => ({ id: i, store, rating, month, text }));
  },
  { condition: (_, { getState }) => ['idle', 'error'].includes(getState().explorer.status) },
);

const explorerSlice = createSlice({
  name: 'explorer',
  initialState: {
    status: 'idle',
    error: null,
    reviews: [],
    rules: defaultRules,
    theme: 'all',
    query: '',
    storeOnly: null,
    limit: 12,
  },
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
      state.limit = 12;
    },
    setExplorerQuery(state, { payload }) {
      state.query = payload;
      state.limit = 12;
    },
    setRule(state, { payload: { key, pattern } }) {
      state.rules[key] = pattern;
    },
    resetRules(state) {
      state.rules = defaultRules;
    },
    focusStore(state, { payload }) {
      state.storeOnly = payload;
      state.theme = 'all';
      state.limit = 12;
    },
    showMore(state) {
      state.limit += 24;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadReviews.fulfilled, (state, { payload }) => {
        state.status = 'ready';
        state.reviews = payload;
      })
      .addCase(loadReviews.rejected, (state, { error }) => {
        state.status = 'error';
        state.error = error.message;
      });
  },
});

export const { setTheme, setExplorerQuery, setRule, resetRules, focusStore, showMore } = explorerSlice.actions;
export default explorerSlice.reducer;
