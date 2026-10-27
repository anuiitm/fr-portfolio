import { EXAM, pattern, sections, subjects } from '@/content/uiic/syllabus';
import raw from '@/content/uiic';
import { normalizeTopic, topicText } from '@/content/uiic/normalize';
import { getNote, getSubject as getApfcSubject } from '@/lib/content';

export { EXAM, pattern, sections, subjects };

// Store keys for UIIC topics carry a prefix so they never collide with APFC ones.
export const storeSubject = (sid) => `uiic:${sid}`;

export function getSubject(id) {
  return subjects.find((s) => s.id === id) || null;
}

const cache = new Map();
export function getNoteData(sid, tid) {
  const k = `${sid}/${tid}`;
  if (!cache.has(k)) cache.set(k, raw[sid]?.[tid] ? normalizeTopic(raw[sid][tid]) : null);
  return cache.get(k);
}

// Resolve a 'uiic:english/cloze-test' or 'apfc:8c/irdai' reference to a link.
export function resolveRef(ref) {
  const [ws, path] = ref.split(':');
  const [sid, tid] = path.split('/');
  if (ws === 'apfc') {
    const s = getApfcSubject(sid);
    const topic = s?.topics.find((x) => x.id === tid);
    if (!topic) return null;
    return { href: `/notes/${sid}/${tid}`, ws: 'APFC', badge: s.no, subject: s.short, title: topic.title, ready: Boolean(getNote(sid, tid)) };
  }
  const s = getSubject(sid);
  const topic = s?.topics.find((x) => x.id === tid);
  if (!topic) return null;
  return { href: `/uiic/${sid}/${tid}`, ws: 'UIIC', badge: s.no, subject: s.short, title: topic.title, ready: Boolean(getNoteData(sid, tid)) };
}

export function linksOf(topic) {
  return topic.see.map(resolveRef).filter((l) => l?.ready);
}

// A topic is "ready" if it has a UIIC note, or if existing notes already cover it.
export function topicStatus(sid, topic) {
  const note = getNoteData(sid, topic.id);
  const links = linksOf(topic);
  return { note, links, ready: Boolean(note) || links.length > 0, via: !note && links.length ? 'links' : null };
}

export function questionCount(note) {
  return note ? note.practice.length + note.pyq.length : 0;
}

export function readingMinutes(note) {
  return Math.max(1, Math.round(topicText(note).split(/\s+/).length / 200));
}

export function neighbours(sid, tid) {
  const s = getSubject(sid);
  const i = s ? s.topics.findIndex((t) => t.id === tid) : -1;
  return { prev: i > 0 ? s.topics[i - 1] : null, next: i >= 0 && i < s.topics.length - 1 ? s.topics[i + 1] : null };
}

export function uiicTree() {
  return sections.map((sec) => ({
    no: sec.no,
    badge: sec.badge,
    title: sec.title,
    subjects: subjects
      .filter((s) => s.section === sec.no)
      .map((s) => ({
        id: s.id,
        no: s.no,
        title: s.title,
        short: s.short,
        parts: null,
        topics: s.topics.map((t) => {
          const st = topicStatus(s.id, t);
          return { id: t.id, title: t.title, p: t.p, ready: st.ready, via: st.via };
        }),
      })),
  }));
}

export function uiicSearchEntries() {
  return subjects.flatMap((s) =>
    s.topics.map((t) => {
      const { note, ready } = topicStatus(s.id, t);
      return {
        href: `/uiic/${s.id}/${t.id}`,
        ws: 'uiic',
        s: storeSubject(s.id),
        sn: `UIIC ${s.no}`,
        st: s.short,
        t: t.id,
        title: t.title,
        p: t.p,
        ready,
        body: note ? topicText(note) : '',
        heads: note ? note.heads : [],
      };
    }),
  );
}
