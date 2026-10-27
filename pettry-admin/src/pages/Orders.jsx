import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useRoute } from '../lib/router';
import { NEXT_STATUS, STATUS_LABEL, cancelOrder, orderDelivered, paymentReceived, shipmentAdded } from '../store/orders';
import { toastShown } from '../store/content';
import { customersSel, ordersSel, selectStatusCounts } from '../store/selectors';
import { download, fmtDate, fmtDateTime, money, toCsv } from '../lib/format';
import { Badge, Empty, Field, Icon, Modal, PageHeader, STATUS_TONE, Tabs } from '../components/ui';

const PAGE = 15;
const CARRIERS = ['Delhivery', 'Blue Dart', 'Ekart', 'XpressBees', 'India Post'];

export default function Orders() {
  const { id } = useRoute();
  const orders = useSelector(ordersSel.selectAll);
  const customers = useSelector(customersSel.selectEntities);
  const counts = useSelector(selectStatusCounts);
  const [status, setStatus] = useState('all');
  const [q, setQ] = useState('');
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return orders.filter(
      (o) => (status === 'all' || o.status === status) && (!term || o.id.toLowerCase().includes(term) || customers[o.customerId]?.name.toLowerCase().includes(term)),
    );
  }, [orders, customers, status, q]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const current = Math.min(page, pages - 1);
  const rows = filtered.slice(current * PAGE, current * PAGE + PAGE);

  const exportCsv = () => {
    const head = ['Order', 'Placed', 'Customer', 'Email', 'Items', 'Total', 'Status', 'Payment'];
    const body = filtered.map((o) => [o.id, o.placedAt, customers[o.customerId]?.name, customers[o.customerId]?.email, o.items.reduce((a, i) => a + i.qty, 0), o.total, o.status, o.payment]);
    download(`orders-${status}.csv`, toCsv([head, ...body]));
  };

  return (
    <>
      <PageHeader title="Orders" sub="Ship, deliver or cancel. Cancelling puts the items back in stock and refunds paid orders.">
        <button type="button" className="btn" onClick={exportCsv}>
          <Icon name="download" /> Export CSV
        </button>
      </PageHeader>

      <div className="toolbar">
        <Tabs
          label="Filter by status"
          value={status}
          onChange={(v) => {
            setStatus(v);
            setPage(0);
          }}
          items={['all', 'processing', 'shipped', 'delivered', 'cancelled'].map((s) => ({ value: s, label: s === 'all' ? 'All' : STATUS_LABEL[s], count: counts[s] }))}
        />
        <input
          className="search-input"
          type="search"
          placeholder="Order ID or customer"
          aria-label="Search orders"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(0);
          }}
        />
      </div>

      <div className="card card-flush">
        {rows.length === 0 ? (
          <Empty title="No orders match">Try another status or search.</Empty>
        ) : (
          <div className="table-wrap">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">Placed</th>
                  <th scope="col">Customer</th>
                  <th scope="col" className="num">
                    Items
                  </th>
                  <th scope="col" className="num">
                    Total
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((o) => (
                  <tr key={o.id} onClick={() => navigate(`/orders/${o.id}`)}>
                    <th scope="row">
                      <a href={`#/orders/${o.id}`} onClick={(e) => e.stopPropagation()}>
                        {o.id}
                      </a>
                    </th>
                    <td className="nowrap">{fmtDate(o.placedAt)}</td>
                    <td>{customers[o.customerId]?.name}</td>
                    <td className="num">{o.items.reduce((a, i) => a + i.qty, 0)}</td>
                    <td className="num">{money(o.total)}</td>
                    <td>
                      <Badge tone={STATUS_TONE[o.status]}>{STATUS_LABEL[o.status]}</Badge>
                    </td>
                    <td>
                      <Badge tone={STATUS_TONE[o.payment]}>{o.payment}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pager page={current} pages={pages} total={filtered.length} onPage={setPage} />
      </div>

      <OrderDrawer id={id} />
    </>
  );
}

export function Pager({ page, pages, total, onPage }) {
  if (pages <= 1) return null;
  return (
    <nav className="pager" aria-label="Pages">
      <span className="muted">
        Page {page + 1} of {pages} ({total} results)
      </span>
      <button type="button" className="btn btn-sm" disabled={page === 0} onClick={() => onPage(page - 1)}>
        Previous
      </button>
      <button type="button" className="btn btn-sm" disabled={page >= pages - 1} onClick={() => onPage(page + 1)}>
        Next
      </button>
    </nav>
  );
}

function OrderDrawer({ id }) {
  const order = useSelector((s) => (id ? ordersSel.selectById(s, id) : null));
  const customer = useSelector((s) => (order ? customersSel.selectById(s, order.customerId) : null));
  const dispatch = useDispatch();
  const [action, setAction] = useState(null);
  const close = () => navigate('/orders');

  if (id && !order) {
    return (
      <Modal open title="Order not found" onClose={close} side>
        <p>There is no order {id}.</p>
      </Modal>
    );
  }

  const next = order ? NEXT_STATUS[order.status] : [];

  return (
    <Modal
      open={Boolean(order)}
      onClose={close}
      side
      title={order?.id}
      footer={
        order &&
        !action &&
        next.length > 0 && (
          <>
            {next.includes('cancelled') && (
              <button type="button" className="btn btn-danger-ghost" onClick={() => setAction('cancel')}>
                Cancel order
              </button>
            )}
            {order.payment === 'pending' && (
              <button
                type="button"
                className="btn"
                onClick={() => {
                  dispatch(paymentReceived(order.id));
                  dispatch(toastShown(`Payment recorded for ${order.id}`));
                }}
              >
                Mark paid
              </button>
            )}
            {next.includes('shipped') && (
              <button type="button" className="btn btn-primary" onClick={() => setAction('ship')}>
                <Icon name="truck" /> Ship
              </button>
            )}
            {next.includes('delivered') && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  dispatch(orderDelivered(order.id));
                  dispatch(toastShown(`${order.id} marked delivered`));
                }}
              >
                Mark delivered
              </button>
            )}
          </>
        )
      }
    >
      {order && (
        <div className="order">
          <p className="order-badges">
            <Badge tone={STATUS_TONE[order.status]}>{STATUS_LABEL[order.status]}</Badge>
            <Badge tone={STATUS_TONE[order.payment]}>{order.payment}</Badge>
            <span className="muted">Placed {fmtDateTime(order.placedAt)}</span>
          </p>

          <h3 className="sub-title">Customer</h3>
          <p>
            <a href={`#/customers/${customer.id}`}>{customer.name}</a>
            <br />
            <span className="muted">
              {customer.email}, {customer.city}
            </span>
          </p>

          <h3 className="sub-title">Items</h3>
          <table className="table table-compact">
            <tbody>
              {order.items.map((it) => (
                <tr key={it.productId}>
                  <td>
                    {it.name}
                    <br />
                    <small className="muted">
                      {it.sku}, {money(it.price)} × {it.qty}
                    </small>
                  </td>
                  <td className="num">{money(it.price * it.qty)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <Line label="Subtotal" value={order.subtotal} />
              {order.discount > 0 && <Line label={`Discount (${order.promo})`} value={-order.discount} />}
              <Line label="Shipping" value={order.shipping} />
              <Line label="GST" value={order.tax} />
              <Line label="Total" value={order.total} strong />
            </tfoot>
          </table>

          {order.cancelReason && (
            <p className="note">
              <b>Cancelled:</b> {order.cancelReason}
            </p>
          )}

          {order.shipments.length > 0 && (
            <>
              <h3 className="sub-title">Shipments</h3>
              {order.shipments.map((s) => (
                <p key={s.id} className="shipment">
                  <Icon name="truck" />
                  <span>
                    {s.carrier}, <code>{s.tracking}</code>
                    <br />
                    <small className="muted">
                      Shipped {fmtDateTime(s.shippedAt)}
                      {s.deliveredAt && `, delivered ${fmtDateTime(s.deliveredAt)}`}
                    </small>
                  </span>
                </p>
              ))}
            </>
          )}

          <h3 className="sub-title">History</h3>
          <ol className="timeline">
            {[...order.history].reverse().map((h, i) => (
              <li key={i}>
                <span>{h.note}</span>
                <time className="muted" dateTime={h.at}>
                  {fmtDateTime(h.at)}
                </time>
              </li>
            ))}
          </ol>
        </div>
      )}
      {order && action === 'ship' && <ShipForm order={order} onDone={() => setAction(null)} />}
      {order && action === 'cancel' && <CancelForm order={order} onDone={() => setAction(null)} />}
    </Modal>
  );
}

function Line({ label, value, strong }) {
  return (
    <tr className={strong ? 'strong' : undefined}>
      <td>{label}</td>
      <td className="num">{money(value)}</td>
    </tr>
  );
}

function ShipForm({ order, onDone }) {
  const dispatch = useDispatch();
  const [carrier, setCarrier] = useState(CARRIERS[0]);
  const [tracking, setTracking] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!/^[A-Z0-9]{8,20}$/i.test(tracking.trim())) {
      setError('Tracking numbers are 8–20 letters or digits.');
      return;
    }
    dispatch(shipmentAdded({ orderId: order.id, carrier, tracking: tracking.trim().toUpperCase() }));
    dispatch(toastShown(`${order.id} shipped with ${carrier}`));
    onDone();
  };

  return (
    <form className="inline-form" onSubmit={submit}>
      <h3 className="sub-title">Ship this order</h3>
      <div className="form-row">
        <Field label="Carrier">
          {(a) => (
            <select {...a} value={carrier} onChange={(e) => setCarrier(e.target.value)}>
              {CARRIERS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Tracking number" error={error}>
          {(a) => (
            <input
              {...a}
              autoFocus
              value={tracking}
              onChange={(e) => {
                setTracking(e.target.value);
                setError('');
              }}
            />
          )}
        </Field>
      </div>
      <div className="form-actions">
        <button type="button" className="btn" onClick={onDone}>
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Confirm shipment
        </button>
      </div>
    </form>
  );
}

const REASONS = ['Customer asked to cancel', 'Item out of stock', 'Payment failed', 'Address not serviceable'];

function CancelForm({ order, onDone }) {
  const dispatch = useDispatch();
  const [reason, setReason] = useState(REASONS[0]);
  const [other, setOther] = useState('');
  const final = reason === 'Other' ? other.trim() : reason;

  const submit = (e) => {
    e.preventDefault();
    if (!final) return;
    dispatch(cancelOrder(order.id, final));
    dispatch(toastShown(`${order.id} cancelled${order.payment === 'paid' ? ', refund started' : ''}`, 'warn'));
    onDone();
  };

  return (
    <form className="inline-form inline-form-danger" onSubmit={submit}>
      <h3 className="sub-title">Cancel this order</h3>
      <p className="muted small">
        {order.items.reduce((a, i) => a + i.qty, 0)} items go back into stock.
        {order.payment === 'paid' && ` ${money(order.total)} will be refunded.`}
      </p>
      <Field label="Reason">
        {(a) => (
          <select {...a} value={reason} onChange={(e) => setReason(e.target.value)}>
            {[...REASONS, 'Other'].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        )}
      </Field>
      {reason === 'Other' && <Field label="Describe the reason">{(a) => <input {...a} autoFocus required value={other} onChange={(e) => setOther(e.target.value)} />}</Field>}
      <div className="form-actions">
        <button type="button" className="btn" onClick={onDone}>
          Keep order
        </button>
        <button type="submit" className="btn btn-danger" disabled={!final}>
          Cancel order
        </button>
      </div>
    </form>
  );
}
