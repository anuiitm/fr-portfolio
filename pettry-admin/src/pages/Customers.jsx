import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useRoute } from '../lib/router';
import { customerToggled, toastShown } from '../store/content';
import { STATUS_LABEL } from '../store/orders';
import { customersSel, ordersSel, selectCustomerStats } from '../store/selectors';
import { ago, fmtDate, money } from '../lib/format';
import { Badge, Empty, Modal, PageHeader, STATUS_TONE } from '../components/ui';

const SORTS = {
  name: (a, b) => a.name.localeCompare(b.name),
  spend: (a, b, s) => (s[b.id]?.spend ?? 0) - (s[a.id]?.spend ?? 0),
  recent: (a, b, s) => (s[b.id]?.last ?? '').localeCompare(s[a.id]?.last ?? ''),
};

export default function Customers() {
  const { id } = useRoute();
  const customers = useSelector(customersSel.selectAll);
  const stats = useSelector(selectCustomerStats);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('spend');

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    return customers
      .filter((c) => !term || c.name.toLowerCase().includes(term) || c.email.includes(term) || c.city.toLowerCase().includes(term))
      .sort((a, b) => SORTS[sort](a, b, stats));
  }, [customers, stats, q, sort]);

  return (
    <>
      <PageHeader title="Customers" sub={`${customers.length} accounts. Blocking an account stops sign-in but keeps its order history.`} />
      <div className="toolbar">
        <input className="search-input" type="search" placeholder="Name, email or city" aria-label="Search customers" value={q} onChange={(e) => setQ(e.target.value)} />
        <label className="inline-label">
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="spend">Highest spend</option>
            <option value="recent">Most recent order</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      <div className="card card-flush">
        {rows.length === 0 ? (
          <Empty title="No customers match" />
        ) : (
          <div className="table-wrap">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Customer</th>
                  <th scope="col">City</th>
                  <th scope="col" className="num">
                    Orders
                  </th>
                  <th scope="col" className="num">
                    Spent
                  </th>
                  <th scope="col">Last order</th>
                  <th scope="col">Account</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.id} onClick={() => navigate(`/customers/${c.id}`)}>
                    <th scope="row">
                      <a href={`#/customers/${c.id}`} onClick={(e) => e.stopPropagation()}>
                        {c.name}
                      </a>
                      <br />
                      <small className="muted">{c.email}</small>
                    </th>
                    <td>{c.city}</td>
                    <td className="num">{stats[c.id]?.orders ?? 0}</td>
                    <td className="num">{money(stats[c.id]?.spend ?? 0)}</td>
                    <td className="muted">{stats[c.id]?.last ? ago(stats[c.id].last) : 'Never'}</td>
                    <td>
                      <Badge tone={c.active ? 'ok' : 'bad'}>{c.active ? 'Active' : 'Blocked'}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <CustomerDrawer id={id} />
    </>
  );
}

function CustomerDrawer({ id }) {
  const dispatch = useDispatch();
  const c = useSelector((s) => (id ? customersSel.selectById(s, id) : null));
  const stats = useSelector(selectCustomerStats)[id];
  const allOrders = useSelector(ordersSel.selectAll);
  const orders = useMemo(() => allOrders.filter((o) => o.customerId === id), [allOrders, id]);

  return (
    <Modal open={Boolean(c)} title={c?.name} onClose={() => navigate('/customers')} side>
      {c && (
        <>
          <p className="muted">
            {c.email}, {c.phone}, {c.city}
            <br />
            Customer since {fmtDate(c.joinedAt)}
          </p>
          <dl className="mini-stats">
            <div>
              <dt>Orders</dt>
              <dd>{stats?.orders ?? 0}</dd>
            </div>
            <div>
              <dt>Spent</dt>
              <dd>{money(stats?.spend ?? 0)}</dd>
            </div>
            <div>
              <dt>Average</dt>
              <dd>{money(stats?.orders ? stats.spend / stats.orders : 0)}</dd>
            </div>
          </dl>
          <button
            type="button"
            className={`btn ${c.active ? 'btn-danger-ghost' : ''}`}
            onClick={() => {
              dispatch(customerToggled(c.id));
              dispatch(toastShown(`${c.name} ${c.active ? 'blocked' : 'unblocked'}`, c.active ? 'warn' : 'ok'));
            }}
          >
            {c.active ? 'Block account' : 'Unblock account'}
          </button>
          <h3 className="sub-title">Orders</h3>
          {orders.length === 0 ? (
            <p className="muted">No orders yet.</p>
          ) : (
            <ul className="list">
              {orders.map((o) => (
                <li key={o.id}>
                  <a href={`#/orders/${o.id}`} className="list-main">
                    <b>{o.id}</b>
                    <span className="muted">
                      {fmtDate(o.placedAt)}, {money(o.total)}
                    </span>
                  </a>
                  <Badge tone={STATUS_TONE[o.status]}>{STATUS_LABEL[o.status]}</Badge>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </Modal>
  );
}
