import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategorySales, selectMonthly, selectProductSales, selectStatusCounts } from '../store/selectors';
import { STATUS_LABEL } from '../store/orders';
import { money, moneyCompact } from '../lib/format';
import { PageHeader } from '../components/ui';
import { BarChart, HBars } from '../components/charts';

export default function Analytics() {
  const monthly = useSelector(selectMonthly);
  const products = useSelector(selectProductSales);
  const categories = useSelector(selectCategorySales);
  const status = useSelector(selectStatusCounts);
  const [metric, setMetric] = useState('revenue');
  const [by, setBy] = useState('revenue');

  const total = monthly.reduce((a, m) => a + m.revenue, 0);
  const orders = monthly.reduce((a, m) => a + m.orders, 0);
  const cancelled = monthly.reduce((a, m) => a + m.cancelled, 0);
  const ranked = [...products].sort((a, b) => b[by] - a[by]).slice(0, 10);

  return (
    <>
      <PageHeader title="Analytics" sub="The last twelve months. Cancelled orders are excluded from revenue." />

      <section className="stats">
        <div className="stat">
          <span className="stat-label">Revenue, 12 months</span>
          <span className="stat-value">{money(total)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Orders</span>
          <span className="stat-value">{orders}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Average order</span>
          <span className="stat-value">{money(orders ? total / orders : 0)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Cancellation rate</span>
          <span className="stat-value">{((cancelled / Math.max(1, orders + cancelled)) * 100).toFixed(1)}%</span>
        </div>
      </section>

      <section className="card">
        <div className="card-title">
          <h2>By month</h2>
          <div className="seg" role="group" aria-label="Metric">
            {['revenue', 'orders'].map((m) => (
              <button key={m} type="button" aria-pressed={metric === m} onClick={() => setMetric(m)}>
                {m === 'revenue' ? 'Revenue' : 'Orders'}
              </button>
            ))}
          </div>
        </div>
        <BarChart data={monthly} value={(m) => m[metric]} label={(m) => `${m.label} ${m.year}`} format={metric === 'revenue' ? moneyCompact : (v) => `${v} orders`} />
      </section>

      <div className="grid-2">
        <section className="card">
          <div className="card-title">
            <h2>Top products</h2>
            <div className="seg" role="group" aria-label="Rank by">
              {['revenue', 'units'].map((m) => (
                <button key={m} type="button" aria-pressed={by === m} onClick={() => setBy(m)}>
                  {m === 'revenue' ? 'Revenue' : 'Units'}
                </button>
              ))}
            </div>
          </div>
          <HBars rows={ranked.map((p) => ({ label: p.name, value: p[by] }))} format={by === 'revenue' ? moneyCompact : (v) => `${v}`} />
        </section>
        <section className="card">
          <h2 className="card-title">Revenue by category</h2>
          <HBars rows={categories.map((c) => ({ label: c.category, value: c.revenue }))} format={moneyCompact} />
          <h2 className="card-title card-title-gap">Orders by status</h2>
          <HBars rows={['processing', 'shipped', 'delivered', 'cancelled'].map((s) => ({ label: STATUS_LABEL[s], value: status[s] }))} format={(v) => v} />
        </section>
      </div>
    </>
  );
}
