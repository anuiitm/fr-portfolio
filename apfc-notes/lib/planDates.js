// Date helpers shared by the daily plan and the plans sidebar. Dates are local
// 'YYYY-MM-DD' strings, which also compare correctly as strings.

export const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const addDays = (s, n) => {
  const d = new Date(`${s}T12:00:00`);
  d.setDate(d.getDate() + n);
  return iso(d);
};

export const fmt = (s, opts) => new Date(`${s}T12:00:00`).toLocaleDateString('en-IN', opts);

// `n` consecutive dates from `start`, skipping dates inside any pause.
export function workDates(start, n, pauses = []) {
  const out = [];
  for (let s = start; out.length < n; s = addDays(s, 1)) {
    if (!pauses.some((p) => s >= p.from && s <= p.to)) out.push(s);
  }
  return out;
}

// Placement days are dated from a start date the viewer can change (a pref).
export const startPref = (planId) => `planStart:${planId}`;

// Tick key for task `ti` of block `bi` on a day (`dayId` is the date or `d<day number>`).
export const taskKey = (planId, dayId, bi, ti) => `plan:${planId}:${dayId}:${bi}:${ti}`;

// The sidebar asks the plan on the current page to open a day with this event.
export const GOTO_EVENT = 'plan:goto';
