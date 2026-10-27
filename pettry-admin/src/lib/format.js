const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const compact = new Intl.NumberFormat('en-IN', { notation: 'compact', maximumFractionDigits: 1 });
const date = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
const dateTime = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
const rel = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const money = (n) => inr.format(n);
export const moneyCompact = (n) => `₹${compact.format(n)}`;
export const fmtDate = (iso) => (iso ? date.format(new Date(iso)) : '—');
export const fmtDateTime = (iso) => (iso ? dateTime.format(new Date(iso)) : '—');

export function ago(iso) {
  const mins = (new Date(iso).getTime() - Date.now()) / 60000;
  if (Math.abs(mins) < 60) return rel.format(Math.round(mins), 'minute');
  if (Math.abs(mins) < 1440) return rel.format(Math.round(mins / 60), 'hour');
  if (Math.abs(mins) < 43200) return rel.format(Math.round(mins / 1440), 'day');
  return fmtDate(iso);
}

export function delta(x) {
  if (x == null) return null;
  const v = Math.round(x * 100);
  return `${v > 0 ? '+' : ''}${v}%`;
}

export function toCsv(rows) {
  const cell = (v) => {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return rows.map((r) => r.map(cell).join(',')).join('\n');
}

export function download(filename, text) {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  a.click();
  URL.revokeObjectURL(url);
}
