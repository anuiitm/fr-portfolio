import { createSelector } from '@reduxjs/toolkit';
import { productsAdapter } from './catalog';
import { ordersAdapter } from './orders';
import { customersAdapter, faqsAdapter, promosAdapter } from './content';

export const productsSel = productsAdapter.getSelectors((s) => s.products);
export const ordersSel = ordersAdapter.getSelectors((s) => s.orders);
export const customersSel = customersAdapter.getSelectors((s) => s.customers);
export const promosSel = promosAdapter.getSelectors((s) => s.promos);
export const faqsSel = faqsAdapter.getSelectors((s) => s.faqs);

const DAY = 86400000;
const counts = (o) => o.status !== 'cancelled';

export const selectCustomerStats = createSelector([ordersSel.selectAll], (orders) => {
  const out = {};
  for (const o of orders) {
    const c = (out[o.customerId] ??= { orders: 0, spend: 0, last: null });
    c.orders += 1;
    if (counts(o)) c.spend += o.total;
    if (!c.last || o.placedAt > c.last) c.last = o.placedAt;
  }
  return out;
});

export const selectLowStock = createSelector([productsSel.selectAll, (s) => s.settings.lowStock], (products, threshold) =>
  products.filter((p) => p.active && p.stock <= threshold).sort((a, b) => a.stock - b.stock),
);

export const selectDashboard = createSelector([ordersSel.selectAll, selectLowStock], (orders, lowStock) => {
  const now = Date.now();
  const window = (fromDays, toDays) =>
    orders.filter((o) => {
      const age = (now - new Date(o.placedAt).getTime()) / DAY;
      return age >= fromDays && age < toDays && counts(o);
    });
  const current = window(0, 30);
  const previous = window(30, 60);
  const sum = (list) => list.reduce((a, o) => a + o.total, 0);
  const revenue = sum(current);
  const prevRevenue = sum(previous);
  return {
    revenue,
    revenueDelta: prevRevenue ? revenue / prevRevenue - 1 : null,
    orders: current.length,
    ordersDelta: previous.length ? current.length / previous.length - 1 : null,
    aov: current.length ? revenue / current.length : 0,
    lowStock: lowStock.length,
    needsAction: orders.filter(
      (o) => (o.status === 'processing' && now - new Date(o.placedAt).getTime() > 2 * DAY) || (o.payment === 'pending' && o.status !== 'cancelled'),
    ),
  };
});

export const selectMonthly = createSelector([ordersSel.selectAll], (orders) => {
  const now = new Date();
  const months = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 11 + i, 1);
    return { key: `${d.getFullYear()}-${d.getMonth()}`, label: d.toLocaleString('en-IN', { month: 'short' }), year: d.getFullYear(), revenue: 0, orders: 0, cancelled: 0 };
  });
  const index = Object.fromEntries(months.map((m, i) => [m.key, i]));
  for (const o of orders) {
    const d = new Date(o.placedAt);
    const i = index[`${d.getFullYear()}-${d.getMonth()}`];
    if (i === undefined) continue;
    if (counts(o)) {
      months[i].revenue += o.total;
      months[i].orders += 1;
    } else months[i].cancelled += 1;
  }
  return months;
});

export const selectProductSales = createSelector([ordersSel.selectAll, productsSel.selectEntities], (orders, products) => {
  const by = {};
  for (const o of orders) {
    if (!counts(o)) continue;
    for (const it of o.items) {
      const row = (by[it.productId] ??= { id: it.productId, name: it.name, units: 0, revenue: 0, category: products[it.productId]?.category ?? 'Other' });
      row.units += it.qty;
      row.revenue += it.qty * it.price;
    }
  }
  return Object.values(by).sort((a, b) => b.revenue - a.revenue);
});

export const selectCategorySales = createSelector([selectProductSales], (rows) => {
  const by = {};
  for (const r of rows) by[r.category] = (by[r.category] ?? 0) + r.revenue;
  return Object.entries(by)
    .map(([category, revenue]) => ({ category, revenue }))
    .sort((a, b) => b.revenue - a.revenue);
});

export const selectStatusCounts = createSelector([ordersSel.selectAll], (orders) => {
  const c = { all: orders.length, processing: 0, shipped: 0, delivered: 0, cancelled: 0 };
  for (const o of orders) c[o.status] += 1;
  return c;
});
