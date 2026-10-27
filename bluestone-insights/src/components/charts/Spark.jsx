import { YEAR_MAX, YEAR_MIN } from '../../store/filtersSlice';

// Yearly share of ≤3★ reviews for one store, 2019–2025. Years with fewer than
// 20 reviews are left as gaps rather than plotted as noisy spikes.
export default function Spark({ years, from, to, width = 96, height = 26 }) {
  const span = YEAR_MAX - YEAR_MIN;
  const byYear = new Map(years.map(([y, n, , neg]) => [y, n >= 20 ? neg / n : null]));
  const values = [...byYear.values()].filter((v) => v !== null);
  const max = Math.max(0.08, ...values);
  const x = (y) => ((y - YEAR_MIN) / span) * (width - 4) + 2;
  const y = (v) => height - 3 - (v / max) * (height - 6);

  let d = '';
  let pen = false;
  for (let yr = YEAR_MIN; yr <= YEAR_MAX; yr += 1) {
    const v = byYear.get(yr);
    if (v == null) {
      pen = false;
      continue;
    }
    d += `${pen ? 'L' : 'M'}${x(yr).toFixed(1)},${y(v).toFixed(1)}`;
    pen = true;
  }

  return (
    <svg className="spark" width={width} height={height} aria-hidden="true">
      <rect className="spark-range" x={x(from) - 2} width={x(to) - x(from) + 4} height={height} />
      <path d={d} />
      {[...byYear].map(([yr, v]) =>
        v == null || yr < YEAR_MIN || yr > YEAR_MAX ? null : <circle key={yr} cx={x(yr)} cy={y(v)} r={1.6} />,
      )}
    </svg>
  );
}
