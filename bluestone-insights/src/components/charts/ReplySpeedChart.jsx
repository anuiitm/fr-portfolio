import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectYears } from '../../store/selectors';
import { fmtDays, fmtInt, fmtPct } from '../../lib/format';
import { niceMax, ticks } from '../../lib/stats';
import { useWidth } from './useWidth';
import DataTable from './DataTable';

export const SLA = [
  { key: 'day', label: 'Within 24 h' },
  { key: 'week', label: '1–7 days' },
  { key: 'month', label: '8–30 days' },
  { key: 'late', label: 'Over 30 days' },
  { key: 'none', label: 'No reply' },
];

const H = 260;
const M = { top: 12, right: 8, bottom: 28, left: 44 };

export default function ReplySpeedChart() {
  const years = useSelector(selectYears);
  const [mode, setMode] = useState('share');
  const [hover, setHover] = useState(null);
  const [ref, width] = useWidth();

  const innerW = Math.max(0, width - M.left - M.right);
  const innerH = H - M.top - M.bottom;
  const max = mode === 'share' ? 1 : niceMax(Math.max(...years.map((y) => y.n), 1));
  const band = innerW / Math.max(years.length, 1);
  const barW = Math.min(56, band * 0.68);
  const yScale = (v) => innerH - (v / max) * innerH;

  return (
    <figure className="chart">
      <div className="chart-head">
        <figcaption>How long reviews waited for an owner reply, by year posted</figcaption>
        <div className="seg" role="group" aria-label="Show as">
          {['share', 'count'].map((m) => (
            <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
              {m === 'share' ? 'Share' : 'Reviews'}
            </button>
          ))}
        </div>
      </div>
      <ul className="legend">
        {SLA.map((s) => (
          <li key={s.key}>
            <i className={`sw sla-${s.key}`} />
            {s.label}
          </li>
        ))}
      </ul>
      <div className="chart-body" ref={ref}>
        <svg width={width} height={H} role="img" aria-label="Stacked bars of reply time by year">
          <g transform={`translate(${M.left},${M.top})`}>
            {ticks(max).map((t) => (
              <g key={t} transform={`translate(0,${yScale(t)})`}>
                <line className="grid" x2={innerW} />
                <text className="tick" x={-8} dy="0.32em" textAnchor="end">
                  {mode === 'share' ? `${Math.round(t * 100)}%` : fmtInt(t)}
                </text>
              </g>
            ))}
            {years.map((y, i) => {
              const total = SLA.reduce((a, s) => a + y.sla[s.key], 0);
              const x = i * band + (band - barW) / 2;
              let acc = 0;
              return (
                <g
                  key={y.y}
                  onPointerEnter={() => setHover(i)}
                  onPointerLeave={() => setHover(null)}
                  className={hover !== null && hover !== i ? 'dim' : undefined}
                >
                  <rect className="hit" x={i * band} width={band} height={innerH} />
                  {SLA.map((s) => {
                    const v = mode === 'share' ? y.sla[s.key] / total : y.sla[s.key];
                    const y0 = yScale(acc + v);
                    const h = yScale(acc) - y0;
                    acc += v;
                    return h > 0 ? <rect key={s.key} className={`sla-${s.key}`} x={x} y={y0} width={barW} height={h} /> : null;
                  })}
                  <text className="tick" x={i * band + band / 2} y={innerH + 18} textAnchor="middle">
                    {y.y}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        {hover !== null && years[hover] && (
          <Tip year={years[hover]} left={M.left + hover * band + band / 2} width={width} />
        )}
      </div>
      <DataTable
        caption="Reply time by year"
        head={['Year', 'Reviews', ...SLA.map((s) => s.label), 'Median wait']}
        rows={years.map((y) => [y.y, fmtInt(y.n), ...SLA.map((s) => fmtPct(y.sla[s.key] / y.n)), fmtDays(y.p50)])}
      />
    </figure>
  );
}

function Tip({ year, left, width }) {
  const side = left > width / 2 ? 'left' : 'right';
  return (
    <div className={`tip tip-${side}`} style={{ left }} role="status">
      <b>{year.y}</b>: {fmtInt(year.n)} reviews
      <dl>
        {SLA.map((s) => (
          <div key={s.key}>
            <dt>
              <i className={`sw sla-${s.key}`} />
              {s.label}
            </dt>
            <dd>{fmtPct(year.sla[s.key] / year.n)}</dd>
          </div>
        ))}
        <div className="tip-foot">
          <dt>Median wait</dt>
          <dd>{fmtDays(year.p50)}</dd>
        </div>
      </dl>
    </div>
  );
}
