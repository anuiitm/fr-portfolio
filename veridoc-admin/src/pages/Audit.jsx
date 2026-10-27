import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { productsSel, usersSel } from '../store';
import { download, fmtDateTime } from '../lib/format';
import { Badge, Empty, Icon, PageHeader } from '../components/ui';

const TONE = { edited: 'neutral', submitted: 'info', approved: 'accent', returned: 'warn', published: 'ok', discarded: 'warn', access: 'neutral' };

export default function Audit() {
  const log = useSelector((s) => s.audit);
  const users = useSelector(usersSel.selectEntities);
  const products = useSelector(productsSel.selectAll);
  const productName = Object.fromEntries(products.map((p) => [p.id, p.name]));
  const [f, setF] = useState({ action: '', product: '', user: '' });

  const rows = useMemo(
    () => log.filter((e) => (!f.action || e.action === f.action) && (!f.product || e.productId === f.product) && (!f.user || e.userId === f.user)),
    [log, f],
  );

  const exportCsv = () => {
    const lines = [['When', 'Who', 'Action', 'Product', 'Detail'], ...rows.map((e) => [e.at, users[e.userId]?.name, e.action, productName[e.productId] ?? '', e.detail])];
    download('veridoc-audit.csv', lines.map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n'));
  };

  return (
    <>
      <PageHeader title="Audit log" sub="Every change, who made it and when. Entries can’t be edited or deleted.">
        <button type="button" className="btn" onClick={exportCsv}>
          <Icon name="download" /> Export
        </button>
      </PageHeader>
      <div className="toolbar">
        <select aria-label="Action" value={f.action} onChange={(e) => setF({ ...f, action: e.target.value })}>
          <option value="">All actions</option>
          {Object.keys(TONE).map((a) => (
            <option key={a} value={a}>
              {a[0].toUpperCase() + a.slice(1)}
            </option>
          ))}
        </select>
        <select aria-label="Product" value={f.product} onChange={(e) => setF({ ...f, product: e.target.value })}>
          <option value="">All products</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <select aria-label="Person" value={f.user} onChange={(e) => setF({ ...f, user: e.target.value })}>
          <option value="">Everyone</option>
          {Object.values(users).map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
        <span className="muted small">{rows.length} entries</span>
      </div>
      <div className="card card-flush">
        {rows.length === 0 ? (
          <Empty title="No entries match these filters" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">When</th>
                  <th scope="col">Who</th>
                  <th scope="col">Action</th>
                  <th scope="col">Product</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((e) => (
                  <tr key={e.id}>
                    <td className="nowrap muted">{fmtDateTime(e.at)}</td>
                    <td className="nowrap">{users[e.userId]?.name ?? '—'}</td>
                    <td>
                      <Badge tone={TONE[e.action]}>{e.action}</Badge>
                    </td>
                    <td className="nowrap">{e.productId ? <a href={`#/checklists/${e.productId}`}>{productName[e.productId]}</a> : '—'}</td>
                    <td>{e.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
