import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockAdjusted, subscribersNotified } from '../store/catalog';
import { toastShown } from '../store/content';
import { productsSel } from '../store/selectors';
import { ago } from '../lib/format';
import { Badge, Empty, PageHeader, Tabs } from '../components/ui';

const REASONS = ['Received from supplier', 'Damaged in warehouse', 'Stock count correction', 'Returned by customer'];

export default function Inventory() {
  const products = useSelector(productsSel.selectAll);
  const byId = useSelector(productsSel.selectEntities);
  const movements = useSelector((s) => s.movements);
  const threshold = useSelector((s) => s.settings.lowStock);
  const [view, setView] = useState('low');

  const rows = useMemo(() => {
    const list = products.filter((p) => p.active);
    const shown = view === 'low' ? list.filter((p) => p.stock <= threshold) : list;
    return [...shown].sort((a, b) => a.stock - b.stock);
  }, [products, view, threshold]);

  const lowCount = products.filter((p) => p.active && p.stock <= threshold).length;

  return (
    <>
      <PageHeader title="Inventory" sub={`Products at or below ${threshold} units count as low. Change the threshold in Settings.`} />
      <div className="toolbar">
        <Tabs
          label="Show"
          value={view}
          onChange={setView}
          items={[
            { value: 'low', label: 'Low or sold out', count: lowCount },
            { value: 'all', label: 'All listed', count: products.filter((p) => p.active).length },
          ]}
        />
      </div>

      <div className="grid-3">
        <section className="card card-flush span-2">
          {rows.length === 0 ? (
            <Empty title="Nothing is running low">Every listed product is above the threshold.</Empty>
          ) : (
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col" className="num">
                      In stock
                    </th>
                    <th scope="col">Adjust</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((p) => (
                    <StockRow key={p.id} product={p} threshold={threshold} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="card">
          <h2 className="card-title">Stock log</h2>
          {movements.length === 0 ? (
            <p className="muted">Adjustments and restocks will appear here.</p>
          ) : (
            <ol className="log">
              {movements.slice(0, 14).map((m) => (
                <li key={m.id}>
                  <span className={`log-delta ${m.delta > 0 ? 'up' : m.delta < 0 ? 'down' : ''}`}>{m.delta > 0 ? `+${m.delta}` : m.delta || '0'}</span>
                  <span>
                    {byId[m.productId]?.name ?? 'Deleted product'}
                    <small className="muted">
                      {m.reason}, {ago(m.at)}
                    </small>
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </>
  );
}

function StockRow({ product: p, threshold }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState('');
  const [reason, setReason] = useState(REASONS[0]);
  const n = Number(qty);
  const valid = qty !== '' && Number.isInteger(n) && n !== 0 && p.stock + n >= 0;

  const apply = (e) => {
    e.preventDefault();
    if (!valid) return;
    dispatch(stockAdjusted({ productId: p.id, delta: n, reason }));
    dispatch(toastShown(`${p.name}: ${n > 0 ? '+' : ''}${n} (now ${p.stock + n})`));
    setQty('');
  };

  return (
    <tr>
      <th scope="row">
        {p.name}
        <br />
        <small className="muted">{p.sku}</small>
        {p.subscribers > 0 && p.stock > 0 && (
          <button
            type="button"
            className="link-btn"
            onClick={() => {
              dispatch(subscribersNotified(p.id));
              dispatch(toastShown(`Back-in-stock email sent to ${p.subscribers} customers`));
            }}
          >
            Notify {p.subscribers} waiting customers
          </button>
        )}
        {p.subscribers > 0 && p.stock === 0 && <small className="muted"> ({p.subscribers} waiting)</small>}
      </th>
      <td className="num">
        <Badge tone={p.stock === 0 ? 'bad' : p.stock <= threshold ? 'warn' : 'ok'}>{p.stock === 0 ? 'Sold out' : p.stock}</Badge>
      </td>
      <td>
        <form className="adjust" onSubmit={apply}>
          <input
            type="number"
            step="1"
            placeholder="+/−"
            aria-label={`Change stock for ${p.name}`}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            aria-invalid={qty !== '' && !valid}
          />
          <select aria-label="Reason" value={reason} onChange={(e) => setReason(e.target.value)}>
            {REASONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-sm" disabled={!valid}>
            Apply
          </button>
        </form>
      </td>
    </tr>
  );
}
