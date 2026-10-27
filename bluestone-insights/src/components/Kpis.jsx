import { useSelector } from 'react-redux';
import { data, selectKpis } from '../store/selectors';
import { fmtInt, fmtPct, fmtStars } from '../lib/format';

export default function Kpis() {
  const k = useSelector(selectKpis);
  const { from, to, city } = useSelector((s) => s.filters);
  const scope = `${city === 'all' ? 'All stores' : city}, ${from === to ? from : `${from}–${to}`}`;
  const network = data.meta;

  return (
    <section id="overview" className="kpis" aria-labelledby="kpi-title">
      <h2 id="kpi-title" className="sr-only">
        Headline numbers for {scope}
      </h2>
      <p className="kpis-scope">{scope}</p>
      <dl className="kpi-grid">
        <Kpi label="Reviews" value={fmtInt(k.n)} note={`${k.stores} stores`} />
        <Kpi label="Average rating" value={`${fmtStars(k.avg)}★`} note={`all-time network ${fmtStars(network.avg)}★`} />
        <Kpi label="Rated 3★ or lower" value={fmtPct(k.negShare)} note="3 stars or lower" tone="bad" />
        <Kpi label="Owner replied within 24 h" value={fmtPct(k.fastShare)} note="of reviews in this selection" tone="good" />
      </dl>
    </section>
  );
}

function Kpi({ label, value, note, tone }) {
  return (
    <div className={`kpi${tone ? ` kpi-${tone}` : ''}`}>
      <dt>{label}</dt>
      <dd>
        <span className="kpi-value">{value}</span>
        <span className="kpi-note">{note}</span>
      </dd>
    </div>
  );
}
