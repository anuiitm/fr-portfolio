const int = new Intl.NumberFormat('en-IN');
const compact = new Intl.NumberFormat('en-IN', { notation: 'compact', maximumFractionDigits: 1 });
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const fmtInt = (n) => int.format(Math.round(n));
export const fmtCompact = (n) => compact.format(n);
export const fmtStars = (n) => (Number.isFinite(n) ? n.toFixed(2) : '—');

export function fmtPct(x, digits = 1) {
  if (!Number.isFinite(x)) return '—';
  const v = x * 100;
  // Small shares read better with one more decimal than large ones.
  return `${v.toFixed(v > 0 && v < 1 ? digits + 1 : digits)}%`;
}

// Reply latency in days → the unit a person would use.
export function fmtDays(d) {
  if (d == null || !Number.isFinite(d)) return '—';
  const hours = d * 24;
  if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} min`;
  if (hours < 36) return `${Math.round(hours)} h`;
  if (d < 60) return `${Math.round(d)} days`;
  if (d < 730) return `${Math.round(d / 30.4)} months`;
  return `${(d / 365).toFixed(1)} years`;
}

export function fmtMonth(ym) {
  const [y, m] = ym.split('-');
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

export const storeLabel = (s) => (s.area === s.city ? s.city : `${s.area}, ${s.city}`);
