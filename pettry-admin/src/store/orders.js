import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';

export const ordersAdapter = createEntityAdapter({ sortComparer: (a, b) => b.placedAt.localeCompare(a.placedAt) });

// Which status an order may move to next. The UI only offers these, and the
// reducers ignore anything else, so a stale click can't skip a step.
export const NEXT_STATUS = {
  processing: ['shipped', 'cancelled'],
  shipped: ['delivered', 'cancelled'],
  delivered: [],
  cancelled: [],
};

export const STATUS_LABEL = { processing: 'Processing', shipped: 'Shipped', delivered: 'Delivered', cancelled: 'Cancelled' };

const now = () => new Date().toISOString();

const ordersSlice = createSlice({
  name: 'orders',
  initialState: ordersAdapter.getInitialState(),
  reducers: {
    shipmentAdded: {
      reducer(state, { payload: { orderId, shipment } }) {
        const o = state.entities[orderId];
        if (!o || !NEXT_STATUS[o.status].includes('shipped')) return;
        o.shipments.push(shipment);
        o.status = 'shipped';
        o.history.push({ at: shipment.shippedAt, status: 'shipped', note: `Shipped with ${shipment.carrier} (${shipment.tracking})` });
      },
      prepare({ orderId, carrier, tracking }) {
        return { payload: { orderId, shipment: { id: nanoid(6), carrier, tracking, shippedAt: now(), deliveredAt: null } } };
      },
    },
    orderDelivered: {
      reducer(state, { payload: { orderId, at } }) {
        const o = state.entities[orderId];
        if (!o || o.status !== 'shipped') return;
        for (const s of o.shipments) s.deliveredAt ??= at;
        o.status = 'delivered';
        o.history.push({ at, status: 'delivered', note: 'Marked delivered' });
      },
      prepare(orderId) {
        return { payload: { orderId, at: now() } };
      },
    },
    orderCancelled: {
      reducer(state, { payload: { id, reason, at } }) {
        const o = state.entities[id];
        if (!o || !NEXT_STATUS[o.status].includes('cancelled')) return;
        o.status = 'cancelled';
        o.cancelReason = reason;
        if (o.payment === 'paid') o.payment = 'refunded';
        o.history.push({ at, status: 'cancelled', note: reason });
      },
      // The items ride along so the products slice can restock them.
      prepare({ id, reason, items }) {
        return { payload: { id, reason, items, at: now() } };
      },
    },
    paymentReceived(state, { payload: id }) {
      const o = state.entities[id];
      if (o?.payment === 'pending') {
        o.payment = 'paid';
        o.history.push({ at: now(), status: o.status, note: 'Payment received' });
      }
    },
  },
});

export const { shipmentAdded, orderDelivered, orderCancelled, paymentReceived } = ordersSlice.actions;
export const orders = ordersSlice.reducer;

// Thunk so the caller only passes the id; the items come from the store.
export const cancelOrder = (id, reason) => (dispatch, getState) => {
  const o = getState().orders.entities[id];
  if (o) dispatch(orderCancelled({ id, reason, items: o.items }));
};
