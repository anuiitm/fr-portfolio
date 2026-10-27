import { combineReducers, configureStore, createAction, createListenerMiddleware, createSelector } from '@reduxjs/toolkit';
import { buildSeed } from '../data/seed';
import products, { productsAdapter } from './products';
import { audit, session, settings, toastDismissed, toastShown, toasts, users, usersAdapter } from './people';

const KEY = 'veridoc-admin:v2';
const PERSISTED = ['products', 'users', 'audit', 'session', 'settings'];

export const demoReset = createAction('app/demoReset');

function seeded() {
  const s = buildSeed();
  return {
    products: productsAdapter.setAll(productsAdapter.getInitialState(), s.products),
    users: usersAdapter.setAll(usersAdapter.getInitialState(), s.users),
    audit: s.audit,
  };
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved?.products) return saved;
  } catch {
    /* fall through to fresh data */
  }
  return seeded();
}

const app = combineReducers({ products, users, audit, session, settings, toasts });
const root = (state, action) => (demoReset.match(action) ? app({ ...state, ...seeded() }, action) : app(state, action));

const listener = createListenerMiddleware();
listener.startListening({
  actionCreator: toastShown,
  effect: async ({ payload }, api) => {
    await api.delay(3500);
    api.dispatch(toastDismissed(payload.id));
  },
});

export const store = configureStore({
  reducer: root,
  preloadedState: load(),
  middleware: (g) => g().prepend(listener.middleware),
});

let t;
store.subscribe(() => {
  clearTimeout(t);
  t = setTimeout(() => {
    const s = store.getState();
    try {
      localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(PERSISTED.map((k) => [k, s[k]]))));
    } catch {
      /* private mode */
    }
  }, 300);
});

/* ---------- selectors ---------- */
export const productsSel = productsAdapter.getSelectors((s) => s.products);
export const usersSel = usersAdapter.getSelectors((s) => s.users);
export const selectMe = (s) => s.users.entities[s.session.userId];

// The checklist the current screen should show: the draft if there is one.
export const selectWorking = createSelector([(s, id) => s.products.entities[id]], (p) => (p ? p.draft?.sections ?? p.sections : null));
