// Pure helpers for comparing and importing checklists. No React, no Redux:
// easy to reason about and to unit-test.

const FIELDS = ['title', 'docType', 'required', 'criteria', 'section'];

function flatten(sections) {
  const out = new Map();
  for (const s of sections) for (const p of s.points) out.set(keyOf(p), { ...p, section: s.name });
  return out;
}

// Points are matched by title (case-insensitive) so an imported sheet, which has
// no ids, can be compared with the live checklist.
const keyOf = (p) => p.title.trim().toLowerCase();

export function diffSections(before, after) {
  const a = flatten(before);
  const b = flatten(after);
  const rows = [];
  for (const [k, p] of b) {
    const old = a.get(k);
    if (!old) rows.push({ kind: 'added', title: p.title, after: p });
    else {
      const changed = FIELDS.filter((f) => String(old[f] ?? '') !== String(p[f] ?? ''));
      if (changed.length) rows.push({ kind: 'modified', title: p.title, before: old, after: p, changed });
    }
  }
  for (const [k, p] of a) if (!b.has(k)) rows.push({ kind: 'removed', title: p.title, before: p });
  const order = { added: 0, modified: 1, removed: 2 };
  return rows.sort((x, y) => order[x.kind] - order[y.kind] || x.title.localeCompare(y.title));
}

export function summarise(diff) {
  const c = { added: 0, modified: 0, removed: 0 };
  for (const d of diff) c[d.kind] += 1;
  return c;
}

export const pointCount = (sections) => sections.reduce((a, s) => a + s.points.length, 0);
export const aiCount = (sections) => sections.reduce((a, s) => a + s.points.filter((p) => p.criteria.trim()).length, 0);

/* ---------- CSV import ---------- */

// RFC 4180-ish: quoted fields, doubled quotes, commas and newlines inside quotes.
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') {
      row.push(cell);
      cell = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim()));
}

const HEADERS = { section: ['section'], title: ['title', 'document', 'point'], docType: ['doc type', 'doctype', 'type', 'class'], required: ['required', 'mandatory'], criteria: ['criteria', 'ai criteria', 'prompt'] };

// Turns a sheet into sections. Returns { sections, errors } and never throws,
// so the UI can show every problem at once.
export function sheetToSections(text) {
  const rows = parseCsv(text.trim());
  if (rows.length < 2) return { sections: [], errors: ['The file needs a header row and at least one data row.'] };
  const head = rows[0].map((h) => h.trim().toLowerCase());
  const col = Object.fromEntries(Object.entries(HEADERS).map(([k, names]) => [k, head.findIndex((h) => names.includes(h))]));
  const errors = [];
  if (col.section < 0 || col.title < 0) return { sections: [], errors: ['Columns “section” and “title” are required.'] };

  const bySection = new Map();
  const seen = new Set();
  rows.slice(1).forEach((r, i) => {
    const line = i + 2;
    const title = (r[col.title] ?? '').trim();
    const section = (r[col.section] ?? '').trim();
    if (!title || !section) {
      errors.push(`Row ${line}: section and title can’t be empty.`);
      return;
    }
    if (seen.has(title.toLowerCase())) {
      errors.push(`Row ${line}: “${title}” appears twice.`);
      return;
    }
    seen.add(title.toLowerCase());
    const req = (r[col.required] ?? 'yes').trim().toLowerCase();
    if (!['yes', 'no', 'y', 'n', 'true', 'false', '1', '0', ''].includes(req)) errors.push(`Row ${line}: “required” should be yes or no, got “${req}”.`);
    if (!bySection.has(section)) bySection.set(section, []);
    bySection.get(section).push({
      title,
      docType: (r[col.docType] ?? '').trim() || 'Other',
      required: ['yes', 'y', 'true', '1', ''].includes(req),
      criteria: (r[col.criteria] ?? '').trim(),
      override: false,
    });
  });
  const sections = [...bySection].map(([name, points]) => ({ name, points }));
  return { sections, errors };
}

export function sectionsToCsv(sections) {
  const esc = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  const lines = ['section,title,doc type,required,criteria'];
  for (const s of sections) for (const p of s.points) lines.push([s.name, p.title, p.docType, p.required ? 'yes' : 'no', p.criteria].map((v) => esc(String(v))).join(','));
  return lines.join('\n');
}
