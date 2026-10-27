import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMonthly } from '../../store/selectors';
import { fmtCompact, fmtInt, fmtMonth, fmtPct, fmtStars } from '../../lib/format';
import { niceMax, ticks } from '../../lib/stats';
import { useWidth } from './useWidth';
import DataTable from './DataTable';

const H = 280;
const axisPct = (v) => `${+(v * 100).toFixed(1)}%`;
const M = { top: 14, right: 46, bottom: 28, left: 44 };

export default function VolumeChart() {
  const months = useSelector(selectMonthly);
  const [hover, setHover] = useState(null);
  const [ref, width] = useWidth();

  const innerW = Math.max(0, width - M.left - M.right);
  const innerH = H - M.top - M.bottom;
  const maxN = niceMax(Math.max(...months.map((m) => m.n), 1));
  const shares = months.map((m) => m.neg / m.n);
  const maxShare = niceMax(Math.max(...shares, 0.01));
  const band = innerW / Math.max(months.length, 1);
  const yN = (v) => innerH - (v / maxN) * innerH;
  const yS = (v) => innerH - (v / maxShare) * innerH;
  const line = shares.map((s, i) => `${i ? 'L' : 'M'}${(i + 0.5) * band},${yS(s)}`).join('');

  const onMove = (e) => {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().left - M.left;
    const i = Math.floor(x / band);
    setHover(i >= 0 && i < months.length ? i : null);
  };

  const m = hover !== null ? months[hover] : null;

  return (
    <figure className="chart">
      <div className="chart-head">
        <figcaption>Reviews per month, and the share rated 3★ or lower</figcaption>
      </div>
      <ul className="legend">
        <li>
          <i className="sw vol" />
          Reviews (left axis)
        </li>
        <li>
          <i className="sw line" />
          Rated ≤3★ (right axis)
        </li>
      </ul>
      <div className="chart-body" ref={ref}>
        <svg width={width} height={H} onPointerMove={onMove} onPointerLeave={() => setHover(null)} role="img" aria-label="Monthly review volume with share of low ratings">
          <g transform={`translate(${M.left},${M.top})`}>
            {ticks(maxN).map((t) => (
              <g key={t} transform={`translate(0,${yN(t)})`}>
                <line className="grid" x2={innerW} />
                <text className="tick" x={-8} dy="0.32em" textAnchor="end">
                  {fmtCompact(t)}
                </text>
                <text className="tick" x={innerW + 8} dy="0.32em">
                  {axisPct((t / maxN) * maxShare)}
                </text>
              </g>
            ))}
            {months.map((mo, i) => (
              <rect
                key={mo.m}
                className={`vol${hover === i ? ' on' : ''}`}
                x={i * band + band * 0.12}
                width={Math.max(1, band * 0.76)}
                y={yN(mo.n)}
                height={innerH - yN(mo.n)}
              />
            ))}
            <path className="share-line" d={line} />
            {hover !== null && <circle className="share-dot" cx={(hover + 0.5) * band} cy={yS(shares[hover])} r={4} />}
            {months.map((mo, i) =>
              mo.m.endsWith('-01') ? (
                <text key={mo.m} className="tick" x={i * band} y={innerH + 18}>
                  {mo.m.slice(0, 4)}
                </text>
              ) : null,
            )}
          </g>
        </svg>
        {m && (
          <div className={`tip tip-${(hover + 0.5) * band > innerW / 2 ? 'left' : 'right'}`} style={{ left: M.left + (hover + 0.5) * band }} role="status">
            <b>{fmtMonth(m.m)}</b>
            <dl>
              <div>
                <dt>Reviews</dt>
                <dd>{fmtInt(m.n)}</dd>
              </div>
              <div>
                <dt>Average</dt>
                <dd>{fmtStars(m.avg)}★</dd>
              </div>
              <div>
                <dt>Rated ≤3★</dt>
                <dd>
                  {fmtInt(m.neg)} ({fmtPct(m.neg / m.n)})
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
      <DataTable
        caption="Monthly reviews"
        head={['Month', 'Reviews', 'Average', 'Rated ≤3★']}
        rows={months.map((mo) => [fmtMonth(mo.m), fmtInt(mo.n), fmtStars(mo.avg), fmtPct(mo.neg / mo.n)])}
      />
    </figure>
  );
}
