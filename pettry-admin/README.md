# Pettry admin

Admin panel for Pettry, an online pet-supplies store: dashboard, orders, products, inventory, promo codes, customers, analytics, FAQ and settings. It runs entirely in the browser on mock data that persists in `localStorage`.

Pettry began as a team project for a university software-engineering course, with a Vue 3 admin, a Flask API and a Node assistant proxy. This is a front-end-only rewrite of the admin panel in React and Redux Toolkit.

```bash
npm install
npm run dev     # sign-in details are pre-filled
npm run build
```

## Notable parts

- **Entity adapters** for products, orders, customers, promo codes and FAQs. Memoised selectors drive the dashboard, analytics and customer totals.
- **Order state machine.** `NEXT_STATUS` defines which status an order can move to. The UI only offers those moves and the reducers ignore anything else. Cancelling is a thunk that carries the order's items, so the products slice restocks them and the stock-log slice records why, from a single action.
- **Inventory log.** Manual adjustments need a reason. A "back in stock" notice appears for products that customers were waiting on.
- **Global search** is an ARIA combobox over orders, products and customers, with arrow keys and Enter.
- **Listener middleware** auto-dismisses toasts. A debounced store subscription persists the data. "Reset demo data" swaps in a fresh seed through a root reducer.
- Hash routing (works on any static host), native `<dialog>` for modals and drawers, an inline SVG icon set instead of an icon font, and hand-drawn charts.

## Compared with the Vue version

| Vue version | This version |
|---|---|
| Auth check copied into the router guard, Sidebar and every view, each with `alert()` | One gate in `App` |
| Sidebar and Navbar repeated in every view | One `Shell` layout |
| Login used a hard-coded `127.0.0.1:5000` and ignored `VITE_API_BASE_URL` | No backend: seeded data in Redux |
| "Top products" sorted by a `sold` field that was never mapped, so the sort did nothing | Ranked by revenue from order items |
| Font Awesome via a CSS `@import` from a CDN; Chart.js for four charts | 20 inline SVG icons; SVG bar charts |
| Header and tables overflowed at phone width | Responsive layout with an off-canvas sidebar |
