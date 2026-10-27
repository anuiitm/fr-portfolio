import { useSelector } from 'react-redux';
import { customersSel, ordersSel, selectDashboard, selectLowStock, selectMonthly, selectProductSales } from '../store/selectors';
import { STATUS_LABEL } from '../store/orders';
import { ago, delta, money, moneyCompact } from '../lib/format';
import { Badge, Empty, PageHeader, STATUS_TONE } from '../components/ui';
import { BarChart, HBars } from '../components/charts';

export default function Dashboard() {
  const d = useSelector(selectDashboard);
  const monthly = useSelector(selectMonthly);
  const recent = useSelector(ordersSel.selectAll).slice(0, 6);
  const customers = useSelector(customersSel.selectEntities);
  const top = useSelector(selectProductSales).slice(0, 5);
  const low = useSelector(selectLowStock).slice(0, 5);
  const user = useSelector((s) => s.session.user);

  return (
    <>
      <PageHeader title={`Good ${greeting()}, ${user.name}`} sub="Here is how the shop did over the last 30 days." />

      <section className="stats" aria-label="Last 30 days">
        <Stat label="Revenue" value={money(d.revenue)} change={d.revenueDelta} />
        <Stat label="Orders" value={d.orders} change={d.ordersDelta} />
        <Stat label="Average order" value={money(d.aov)} />
        <Stat label="Low on stock" value={d.lowStock} href="#/inventory" tone={d.lowStock ? 'warn' : undefined} />
      </section>

      <div className="grid-2">
        <section className="card">
          <h2 className="card-title">Revenue by month</h2>
          <BarChart data={monthly} value={(m) => m.revenue} label={(m) => `${m.label} ${m.year}`} format={moneyCompact} />
        </section>

        <section className="card">
          <h2 className="card-title">
            Needs attention <span className="count">{d.needsAction.length}</span>
          </h2>
          {d.needsAction.length === 0 ? (
            <Empty title="Nothing waiting">Every order is moving.</Empty>
          ) : (
            <ul className="list">
              {d.needsAction.slice(0, 5).map((o) => (
                <li key={o.id}>
                  <a href={`#/orders/${o.id}`} className="list-main">
                    <b>{o.id}</b>
                    <span className="muted">{o.payment === 'pending' ? 'Payment pending' : `Not shipped, placed ${ago(o.placedAt)}`}</span>
                  </a>
                  <Badge tone={STATUS_TONE[o.status]}>{STATUS_LABEL[o.status]}</Badge>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="grid-3">
        <section className="card span-2">
          <h2 className="card-title">
            Recent orders <a href="#/orders">View all</a>
          </h2>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Placed</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="num">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {recent.map((o) => (
                  <tr key={o.id}>
                    <th scope="row">
                      <a href={`#/orders/${o.id}`}>{o.id}</a>
                    </th>
                    <td>{customers[o.customerId]?.name}</td>
                    <td className="muted">{ago(o.placedAt)}</td>
                    <td>
                      <Badge tone={STATUS_TONE[o.status]}>{STATUS_LABEL[o.status]}</Badge>
                    </td>
                    <td className="num">{money(o.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card">
          <h2 className="card-title">Top sellers</h2>
          <HBars rows={top.map((p) => ({ label: p.name, value: p.revenue }))} format={moneyCompact} />
          <h2 className="card-title card-title-gap">
            Running low <a href="#/inventory">Restock</a>
          </h2>
          <ul className="list list-tight">
            {low.map((p) => (
              <li key={p.id}>
                <a href={`#/products/${p.id}`} className="list-main">
                  {p.name}
                </a>
                <Badge tone={p.stock === 0 ? 'bad' : 'warn'}>{p.stock === 0 ? 'Sold out' : `${p.stock} left`}</Badge>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

function Stat({ label, value, change, href, tone }) {
  const d = delta(change);
  const body = (
    <>
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      {d && (
        <span className={`stat-delta ${change >= 0 ? 'up' : 'down'}`}>
          {d} <span className="muted">vs previous 30 days</span>
        </span>
      )}
    </>
  );
  return href ? (
    <a className={`stat${tone ? ` stat-${tone}` : ''}`} href={href}>
      {body}
    </a>
  ) : (
    <div className="stat">{body}</div>
  );
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
}
