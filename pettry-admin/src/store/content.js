import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';

/* ---------- customers ---------- */
export const customersAdapter = createEntityAdapter({ sortComparer: (a, b) => a.name.localeCompare(b.name) });

const customersSlice = createSlice({
  name: 'customers',
  initialState: customersAdapter.getInitialState(),
  reducers: {
    customerToggled(state, { payload: id }) {
      const c = state.entities[id];
      if (c) c.active = !c.active;
    },
  },
});
export const { customerToggled } = customersSlice.actions;
export const customers = customersSlice.reducer;

/* ---------- promo codes ---------- */
export const promosAdapter = createEntityAdapter({ sortComparer: (a, b) => b.startsAt.localeCompare(a.startsAt) });

const promosSlice = createSlice({
  name: 'promos',
  initialState: promosAdapter.getInitialState(),
  reducers: {
    promoSaved: {
      reducer: promosAdapter.upsertOne,
      prepare: (p) => ({ payload: p.id ? p : { ...p, id: nanoid(6), used: 0, paused: false } }),
    },
    promoPauseToggled(state, { payload: id }) {
      const p = state.entities[id];
      if (p) p.paused = !p.paused;
    },
    promoDeleted: promosAdapter.removeOne,
  },
});
export const { promoSaved, promoPauseToggled, promoDeleted } = promosSlice.actions;
export const promos = promosSlice.reducer;

export function promoStatus(p, now = Date.now()) {
  if (p.paused) return 'paused';
  if (new Date(p.startsAt).getTime() > now) return 'scheduled';
  if (p.endsAt && new Date(p.endsAt).getTime() < now) return 'expired';
  if (p.limit != null && p.used >= p.limit) return 'used up';
  return 'active';
}

/* ---------- FAQ ---------- */
// Order matters on the storefront, so FAQs keep insertion order (no sortComparer).
export const faqsAdapter = createEntityAdapter();

const faqsSlice = createSlice({
  name: 'faqs',
  initialState: faqsAdapter.getInitialState(),
  reducers: {
    faqSaved: {
      reducer: faqsAdapter.upsertOne,
      prepare: (f) => ({ payload: f.id ? f : { ...f, id: nanoid(6) } }),
    },
    faqDeleted: faqsAdapter.removeOne,
    faqToggled(state, { payload: id }) {
      state.entities[id].published = !state.entities[id].published;
    },
    faqMoved(state, { payload: { id, by } }) {
      const i = state.ids.indexOf(id);
      const j = i + by;
      if (i < 0 || j < 0 || j >= state.ids.length) return;
      [state.ids[i], state.ids[j]] = [state.ids[j], state.ids[i]];
    },
  },
});
export const { faqSaved, faqDeleted, faqToggled, faqMoved } = faqsSlice.actions;
export const faqs = faqsSlice.reducer;

/* ---------- settings ---------- */
export const defaultSettings = {
  storeName: 'Pettry',
  supportEmail: 'help@pettry.example',
  lowStock: 10,
  freeShippingOver: 999,
  taxRate: 5,
  theme: 'system',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: defaultSettings,
  reducers: {
    settingsSaved: (state, { payload }) => ({ ...state, ...payload }),
    themeChanged(state, { payload }) {
      state.theme = payload;
    },
  },
});
export const { settingsSaved, themeChanged } = settingsSlice.actions;
export const settings = settingsSlice.reducer;

/* ---------- session & toasts ---------- */
const sessionSlice = createSlice({
  name: 'session',
  initialState: { user: null },
  reducers: {
    signedIn(state, { payload }) {
      state.user = payload;
    },
    signedOut(state) {
      state.user = null;
    },
  },
});
export const { signedIn, signedOut } = sessionSlice.actions;
export const session = sessionSlice.reducer;

const toastsSlice = createSlice({
  name: 'toasts',
  initialState: [],
  reducers: {
    toastShown: {
      reducer: (state, { payload }) => [...state.slice(-2), payload],
      prepare: (text, tone = 'ok') => ({ payload: { id: nanoid(4), text, tone } }),
    },
    toastDismissed: (state, { payload }) => state.filter((t) => t.id !== payload),
  },
});
export const { toastShown, toastDismissed } = toastsSlice.actions;
export const toasts = toastsSlice.reducer;
