import { sections, subjects, EXAM } from '@/content/syllabus';
import notes from '@/content/notes';

export { sections, subjects, EXAM };

export function getSubject(id) {
  return subjects.find((s) => s.id === id) || null;
}

export function getNote(subjectId, topicId) {
  return notes[subjectId]?.[topicId] || null;
}

export function isReady(subjectId, topicId) {
  return Boolean(getNote(subjectId, topicId));
}

export function subjectStatus(subject) {
  const ready = subject.topics.filter((t) => isReady(subject.id, t.id)).length;
  return { ready, total: subject.topics.length, isReady: ready > 0 };
}

// Flat reading order across the whole syllabus, used for prev/next navigation.
export function flatTopics() {
  return subjects.flatMap((s) => s.topics.map((t) => ({ subject: s, topic: t })));
}

export function neighbours(subjectId, topicId) {
  const subject = getSubject(subjectId);
  if (!subject) return {};
  const i = subject.topics.findIndex((t) => t.id === topicId);
  return {
    prev: i > 0 ? subject.topics[i - 1] : null,
    next: i < subject.topics.length - 1 ? subject.topics[i + 1] : null,
  };
}

// Lightweight structure sent to the client sidebar.
export function navTree() {
  return sections.map((sec) => ({
    no: sec.no,
    title: sec.title,
    subjects: subjects
      .filter((s) => s.section === sec.no)
      .map((s) => ({
        id: s.id,
        no: s.no,
        title: s.title,
        short: s.short,
        parts: s.parts || null,
        topics: s.topics.map((t) => ({ id: t.id, title: t.title, p: t.p, ready: isReady(s.id, t.id) })),
      })),
  }));
}

const stripInline = (s = '') =>
  String(s)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*=`_]{1,2}/g, '');

export function blockText(b) {
  switch (b.t) {
    case 'h2':
    case 'h3':
    case 'p':
      return b.text;
    case 'quote':
      return `${b.text} ${b.cite || ''}`;
    case 'ul':
    case 'ol':
      return b.items.map((i) => (typeof i === 'string' ? i : `${i.text} ${(i.sub || []).join(' ')}`)).join(' ');
    case 'callout':
      return [b.title, b.text, ...(b.items || [])].filter(Boolean).join(' ');
    case 'table':
      return [b.caption, ...(b.head || []), ...b.rows.flat()].filter(Boolean).join(' ');
    case 'facts':
      return b.items.map((i) => `${i.k} ${i.v}`).join(' ');
    case 'timeline':
      return b.items.map((i) => `${i.when} ${i.what}`).join(' ');
    case 'steps':
      return b.items.map((i) => `${i.title} ${i.text || ''}`).join(' ');
    case 'cards':
      return b.items.map((i) => `${i.front} ${i.back}`).join(' ');
    case 'quiz':
      return b.items.map((i) => i.q).join(' ');
    default:
      return '';
  }
}

export function noteText(note) {
  return stripInline([note.summary, ...note.blocks.map(blockText)].join(' '));
}

export function readingMinutes(note) {
  const words = noteText(note).split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function headingsOf(note) {
  return note.blocks
    .filter((b) => b.t === 'h2')
    .map((b) => ({ id: slug(b.text), text: stripInline(b.text) }));
}

export function slug(s) {
  return stripInline(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

export function searchIndex() {
  const out = [];
  for (const s of subjects) {
    for (const t of s.topics) {
      const note = getNote(s.id, t.id);
      out.push({
        s: s.id,
        sn: s.no,
        st: s.short,
        t: t.id,
        title: t.title,
        p: t.p,
        ready: Boolean(note),
        body: note ? noteText(note) : '',
        heads: note ? headingsOf(note) : [],
      });
    }
  }
  return out;
}
