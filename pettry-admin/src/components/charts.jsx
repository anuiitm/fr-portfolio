import { useState } from 'react';

// Monthly bars. Uses a fixed viewBox and lets CSS scale it: bars are simple
// enough that the text staying proportional is fine here.
export function BarChart({ data, value, label, format, height = 220, highlightLast = true }) {
  const [hover, setHover] = useState(null);
  const W = 640;
  const H = height;
  const pad = { t: 16, r: 8, b: 26, l: 8 };
  const max = Math.max(...data.map(value), 1);
  const band = (W - pad.l - pad.r) / data.length;
  const bw = band * 0.62;
  const shown = hover ?? data.length - 1;

  return (
    <div className="barchart">
      <p className="barchart-readout" aria-live="polite">
        <b>{format(value(data[shown]))}</b> <span className="muted">{label(data[shown])}</span>
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={data.map((d) => `${label(d)}: ${format(value(d))}`).join(', ')} onPointerLeave={() => setHover(null)}>
        {data.map((d, i) => {
          const h = ((H - pad.t - pad.b) * value(d)) / max;
          const x = pad.l + i * band + (band - bw) / 2;
          const on = i === shown;
          return (
            <g key={label(d)} onPointerEnter={() => setHover(i)}>
              <rect className="bar-hit" x={pad.l + i * band} y={0} width={band} height={H} />
              <rect className={`bar${on ? ' on' : ''}${highlightLast && i === data.length - 1 ? ' current' : ''}`} x={x} y={H - pad.b - h} width={bw} height={Math.max(h, 1)} rx={3} />
              <text className="bar-label" x={x + bw / 2} y={H - 8} textAnchor="middle">
                {label(d).split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function HBars({ rows, format, max: maxIn }) {
  const max = maxIn ?? Math.max(...rows.map((r) => r.value), 1);
  return (
    <ul className="hbars">
      {rows.map((r) => (
        <li key={r.label}>
          <span className="hb-label" title={r.label}>
            {r.label}
          </span>
          <span className="hb-track">
            <span style={{ width: `${(r.value / max) * 100}%` }} />
          </span>
          <span className="hb-value">{format(r.value)}</span>
        </li>
      ))}
    </ul>
  );
}
