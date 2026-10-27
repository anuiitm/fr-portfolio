const rel = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const dateTime = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' });

export const fmtDateTime = (iso) => dateTime.format(new Date(iso));

export function ago(iso) {
  if (!iso) return '—';
  const mins = (new Date(iso).getTime() - Date.now()) / 60000;
  if (Math.abs(mins) < 1) return 'just now';
  if (Math.abs(mins) < 60) return rel.format(Math.round(mins), 'minute');
  if (Math.abs(mins) < 1440) return rel.format(Math.round(mins / 60), 'hour');
  if (Math.abs(mins) < 43200) return rel.format(Math.round(mins / 1440), 'day');
  return rel.format(Math.round(mins / 43200), 'month');
}

export function download(filename, text, type = 'text/csv') {
  const url = URL.createObjectURL(new Blob([text], { type: `${type};charset=utf-8` }));
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  a.click();
  URL.revokeObjectURL(url);
}
