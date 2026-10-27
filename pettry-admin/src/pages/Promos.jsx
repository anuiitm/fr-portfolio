import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { promoDeleted, promoPauseToggled, promoSaved, promoStatus, toastShown } from '../store/content';
import { promosSel } from '../store/selectors';
import { fmtDate, money } from '../lib/format';
import { Badge, Field, Icon, Modal, PageHeader } from '../components/ui';

const TONE = { active: 'ok', scheduled: 'info', paused: 'warn', expired: 'neutral', 'used up': 'neutral' };

export default function Promos() {
  const promos = useSelector(promosSel.selectAll);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  return (
    <>
      <PageHeader title="Promo codes" sub="Codes customers enter at checkout.">
        <button type="button" className="btn btn-primary" onClick={() => setEditing({})}>
          <Icon name="plus" /> New code
        </button>
      </PageHeader>

      <div className="card card-flush">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Discount</th>
                <th scope="col">Runs</th>
                <th scope="col">Used</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {promos.map((p) => {
                const status = promoStatus(p);
                return (
                  <tr key={p.id}>
                    <th scope="row">
                      <code className="code">{p.code}</code>
                    </th>
                    <td>
                      {p.type === 'percent' ? `${p.value}% off` : `${money(p.value)} off`}
                      {p.minOrder > 0 && <small className="muted"> over {money(p.minOrder)}</small>}
                    </td>
                    <td className="muted">
                      {fmtDate(p.startsAt)} – {p.endsAt ? fmtDate(p.endsAt) : 'no end'}
                    </td>
                    <td>
                      {p.limit ? (
                        <span className="usage">
                          <span className="usage-bar">
                            <span style={{ width: `${Math.min(100, (p.used / p.limit) * 100)}%` }} />
                          </span>
                          {p.used}/{p.limit}
                        </span>
                      ) : (
                        `${p.used} uses`
                      )}
                    </td>
                    <td>
                      <Badge tone={TONE[status]}>{status}</Badge>
                    </td>
                    <td className="row-actions">
                      {(status === 'active' || status === 'paused') && (
                        <button type="button" className="btn btn-sm" onClick={() => dispatch(promoPauseToggled(p.id))}>
                          {p.paused ? 'Resume' : 'Pause'}
                        </button>
                      )}
                      <button type="button" className="btn btn-sm" onClick={() => setEditing(p)}>
                        Edit
                      </button>
                      <button type="button" className="btn btn-sm btn-danger-ghost" onClick={() => setDeleting(p)} disabled={p.used > 0} title={p.used > 0 ? 'Used codes stay for order history. Pause it instead.' : undefined}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={Boolean(editing)} title={editing?.id ? `Edit ${editing.code}` : 'New promo code'} onClose={() => setEditing(null)} wide>
        {editing && <PromoForm key={editing.id ?? 'new'} promo={editing} promos={promos} onDone={() => setEditing(null)} />}
      </Modal>

      <Modal
        open={Boolean(deleting)}
        title="Delete promo code?"
        onClose={() => setDeleting(null)}
        footer={
          <>
            <button type="button" className="btn" onClick={() => setDeleting(null)}>
              Keep it
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                dispatch(promoDeleted(deleting.id));
                dispatch(toastShown(`${deleting.code} deleted`, 'warn'));
                setDeleting(null);
              }}
            >
              Delete
            </button>
          </>
        }
      >
        <p>
          <code className="code">{deleting?.code}</code> has never been used, so deleting it affects no orders.
        </p>
      </Modal>
    </>
  );
}

const toDateInput = (iso) => (iso ? iso.slice(0, 10) : '');

function PromoForm({ promo, promos, onDone }) {
  const dispatch = useDispatch();
  const today = new Date().toISOString().slice(0, 10);
  const [f, setF] = useState({
    code: promo.code ?? '',
    type: promo.type ?? 'percent',
    value: String(promo.value ?? ''),
    minOrder: String(promo.minOrder ?? 0),
    startsAt: toDateInput(promo.startsAt) || today,
    endsAt: toDateInput(promo.endsAt),
    limit: promo.limit == null ? '' : String(promo.limit),
  });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    const code = f.code.trim().toUpperCase();
    if (!/^[A-Z0-9]{4,16}$/.test(code)) e.code = '4–16 letters or digits, no spaces.';
    else if (promos.some((p) => p.code === code && p.id !== promo.id)) e.code = 'This code already exists.';
    const v = Number(f.value);
    if (!(v > 0)) e.value = 'Enter a discount above zero.';
    else if (f.type === 'percent' && v > 90) e.value = 'Percent discounts are capped at 90%.';
    if (f.endsAt && f.endsAt < f.startsAt) e.endsAt = 'Ends before it starts.';
    if (f.limit && !(Number.isInteger(Number(f.limit)) && Number(f.limit) > 0)) e.limit = 'Whole number above zero, or leave empty.';
    setErrors(e);
    if (Object.keys(e).length) return;

    dispatch(
      promoSaved({
        ...promo,
        code,
        type: f.type,
        value: v,
        minOrder: Number(f.minOrder) || 0,
        startsAt: new Date(`${f.startsAt}T00:00:00`).toISOString(),
        endsAt: f.endsAt ? new Date(`${f.endsAt}T23:59:59`).toISOString() : null,
        limit: f.limit ? Number(f.limit) : null,
      }),
    );
    dispatch(toastShown(promo.id ? `${code} updated` : `${code} created`));
    onDone();
  };

  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <Field label="Code" error={errors.code}>
        {(a) => <input {...a} autoFocus value={f.code} onChange={(e) => setF({ ...f, code: e.target.value.toUpperCase() })} />}
      </Field>
      <Field label="Type">
        {(a) => (
          <select {...a} value={f.type} onChange={set('type')}>
            <option value="percent">Percent off</option>
            <option value="flat">Fixed amount off</option>
          </select>
        )}
      </Field>
      <Field label={f.type === 'percent' ? 'Percent' : 'Amount (₹)'} error={errors.value}>
        {(a) => <input {...a} inputMode="decimal" value={f.value} onChange={set('value')} />}
      </Field>
      <Field label="Minimum order (₹)">{(a) => <input {...a} inputMode="numeric" value={f.minOrder} onChange={set('minOrder')} />}</Field>
      <Field label="Starts">{(a) => <input {...a} type="date" value={f.startsAt} onChange={set('startsAt')} />}</Field>
      <Field label="Ends" error={errors.endsAt} hint="Leave empty for no end date.">
        {(a) => <input {...a} type="date" value={f.endsAt} onChange={set('endsAt')} />}
      </Field>
      <Field label="Usage limit" error={errors.limit} hint="Leave empty for unlimited.">
        {(a) => <input {...a} inputMode="numeric" value={f.limit} onChange={set('limit')} />}
      </Field>
      <div className="form-actions span-all">
        <button type="button" className="btn" onClick={onDone}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {promo.id ? 'Save' : 'Create code'}
        </button>
      </div>
    </form>
  );
}
