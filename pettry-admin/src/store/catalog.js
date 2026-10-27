import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';
import { orderCancelled } from './orders';

export const productsAdapter = createEntityAdapter({ sortComparer: (a, b) => a.sku.localeCompare(b.sku) });

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(),
  reducers: {
    productSaved: {
      reducer(state, { payload }) {
        productsAdapter.upsertOne(state, payload);
      },
      prepare(product) {
        return { payload: product.id ? product : { ...product, id: nanoid(8), subscribers: 0, createdAt: new Date().toISOString() } };
      },
    },
    productToggled(state, { payload: id }) {
      const p = state.entities[id];
      if (p) p.active = !p.active;
    },
    stockAdjusted: {
      reducer(state, { payload: { productId, delta } }) {
        const p = state.entities[productId];
        if (p) p.stock = Math.max(0, p.stock + delta);
      },
      prepare({ productId, delta, reason }) {
        return { payload: { productId, delta, reason, id: nanoid(8), at: new Date().toISOString() } };
      },
    },
    subscribersNotified(state, { payload: id }) {
      const p = state.entities[id];
      if (p) p.subscribers = 0;
    },
  },
  extraReducers: (builder) => {
    // A cancelled order's items go back on the shelf.
    builder.addCase(orderCancelled, (state, { payload }) => {
      for (const it of payload.items) {
        const p = state.entities[it.productId];
        if (p) p.stock += it.qty;
      }
    });
  },
});

export const { productSaved, productToggled, stockAdjusted, subscribersNotified } = productsSlice.actions;
export const products = productsSlice.reducer;

// Append-only stock log, fed by manual adjustments and cancellations.
const movementsSlice = createSlice({
  name: 'movements',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(stockAdjusted, (state, { payload }) => {
        state.unshift({ id: payload.id, productId: payload.productId, delta: payload.delta, reason: payload.reason, at: payload.at });
      })
      .addCase(orderCancelled, (state, { payload }) => {
        for (const it of payload.items) {
          state.unshift({ id: nanoid(8), productId: it.productId, delta: it.qty, reason: `Restocked from cancelled ${payload.id}`, at: payload.at });
        }
      });
  },
});

export const movements = movementsSlice.reducer;
