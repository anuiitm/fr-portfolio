// Small numeric helpers. Kept dependency-free so the bundle stays small.

// Wilson score interval for a proportion k/n. Used to rank stores by their
// negative-review share without letting a 3-review store top the list.
export function wilson(k, n, z = 1.96) {
  if (!n) return { low: 0, high: 0 };
  const p = k / n;
  const z2 = z * z;
  const centre = p + z2 / (2 * n);
  const spread = z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n));
  const denom = 1 + z2 / n;
  return { low: Math.max(0, (centre - spread) / denom), high: Math.min(1, (centre + spread) / denom) };
}

// A store's `years` rows are [year, reviews, starsSum, ratedThreeOrLess, repliedWithin24h].
export function sumYears(rows, from, to) {
  let n = 0, stars = 0, neg = 0, fast = 0;
  for (const [y, yn, ys, yneg, yfast] of rows) {
    if (y < from || y > to) continue;
    n += yn; stars += ys; neg += yneg; fast += yfast;
  }
  return { n, stars, neg, fast };
}

export const ratio = (a, b) => (b ? a / b : 0);

export function extent(values) {
  let lo = Infinity, hi = -Infinity;
  for (const v of values) {
    if (v < lo) lo = v;
    if (v > hi) hi = v;
  }
  return [lo, hi];
}

// "Nice" upper bound for an axis: 0–1–2–5 steps.
export function niceMax(v) {
  if (v <= 0) return 1;
  const exp = 10 ** Math.floor(Math.log10(v));
  const f = v / exp;
  const step = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return step * exp;
}

export function ticks(max, count = 4) {
  const step = max / count;
  return Array.from({ length: count + 1 }, (_, i) => i * step);
}
