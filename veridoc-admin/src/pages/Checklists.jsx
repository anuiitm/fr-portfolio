import { useState } from 'react';
import { useSelector } from 'react-redux';
import { productsSel } from '../store';
import { STATUS, statusOf } from '../store/products';
import { aiCount, pointCount } from '../lib/checklist';
import { ago } from '../lib/format';
import { Badge, Empty, PageHeader, Tabs } from '../components/ui';

export default function Checklists() {
  const products = useSelector(productsSel.selectAll);
  const [filter, setFilter] = useState('all');
  const [q, setQ] = useState('');

  const counts = { all: products.length };
  for (const p of products) counts[statusOf(p)] = (counts[statusOf(p)] ?? 0) + 1;
  const shown = products.filter((p) => (filter === 'all' || statusOf(p) === filter) && p.name.toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <>
      <PageHeader title="Checklists" sub="The documents each loan product asks for, and how the AI checks each one." />
      <div className="toolbar">
        <Tabs
          label="Filter by status"
          value={filter}
          onChange={setFilter}
          items={['all', 'live', 'draft', 'review', 'approved'].map((k) => ({ value: k, label: k === 'all' ? 'All' : STATUS[k].label, count: counts[k] ?? 0 }))}
        />
        <input className="search-input" type="search" placeholder="Search products" aria-label="Search products" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {shown.length === 0 ? (
        <Empty title="No products match" />
      ) : (
        <ul className="product-grid">
          {shown.map((p) => {
            const st = statusOf(p);
            const working = p.draft?.sections ?? p.sections;
            const pts = pointCount(working);
            const ai = aiCount(working);
            return (
              <li key={p.id}>
                <a className="product-card" href={`#/checklists/${p.id}`}>
                  <span className="pc-top">
                    <b>{p.name}</b>
                    <Badge tone={STATUS[st].tone}>{STATUS[st].label}</Badge>
                  </span>
                  <span className="muted small">{p.description}</span>
                  <span className="pc-meter" aria-label={`${ai} of ${pts} points have AI criteria`}>
                    <span style={{ width: `${(ai / pts) * 100}%` }} />
                  </span>
                  <span className="pc-foot">
                    <span>
                      {pts} points, {ai} with AI
                    </span>
                    <span>
                      v{p.version}, {ago(p.draft?.updatedAt ?? p.publishedAt)}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
