import { combineReducers, configureStore, createAction, createListenerMiddleware } from '@reduxjs/toolkit';
import { buildSeed } from '../data/seed';
import { movements, products, productsAdapter } from './catalog';
import { orders, ordersAdapter } from './orders';
import { customers, customersAdapter, faqs, faqsAdapter, promos, promosAdapter, session, settings, toastDismissed, toastShown, toasts } from './content';

const KEY = 'pettry-admin:v2';
const PERSISTED = ['session', 'products', 'orders', 'customers', 'promos', 'faqs', 'movements', 'settings'];

export const demoReset = createAction('app/demoReset');

function seededState() {
  const seed = buildSeed();
  return {
    products: productsAdapter.setAll(productsAdapter.getInitialState(), seed.products),
    orders: ordersAdapter.setAll(ordersAdapter.getInitialState(), seed.orders),
    customers: customersAdapter.setAll(customersAdapter.getInitialState(), seed.customers),
    promos: promosAdapter.setAll(promosAdapter.getInitialState(), seed.promos),
    faqs: faqsAdapter.setAll(faqsAdapter.getInitialState(), seed.faqs),
    movements: seed.movements,
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved?.products) return saved;
  } catch {
    /* storage blocked or corrupt: fall back to fresh demo data */
  }
  return seededState();
}

const appReducer = combineReducers({ session, products, orders, customers, promos, faqs, movements, settings, toasts });

// "Reset demo data" swaps the data slices for a fresh seed but keeps the
// signed-in user and their settings.
const rootReducer = (state, action) =>
  demoReset.match(action) ? appReducer({ ...state, ...seededState() }, action) : appReducer(state, action);

const listener = createListenerMiddleware();

// Toasts dismiss themselves.
listener.startListening({
  actionCreator: toastShown,
  effect: async ({ payload }, api) => {
    await api.delay(3500);
    api.dispatch(toastDismissed(payload.id));
  },
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: (getDefault) => getDefault().prepend(listener.middleware),
});

let timer;
store.subscribe(() => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const state = store.getState();
    try {
      localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(PERSISTED.map((k) => [k, state[k]]))));
    } catch {
      /* quota or private mode: the demo still works, it just won't persist */
    }
  }, 300);
});
