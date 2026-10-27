'use client';

import { useEffect, useState } from 'react';
import { actions, key, useStore } from '@/lib/store';

export function TopicActions({ subject, topic, ws = 'apfc' }) {
  const store = useStore();
  const k = key(subject, topic);
  const done = Boolean(store.done[k]);
  const marked = Boolean(store.marks[k]);

  useEffect(() => {
    actions.visit(k, ws);
  }, [k, ws]);

  return (
    <div className="topic-actions">
      <button data-action="done" className={`pill-btn ${done ? 'is-on done' : ''}`} onClick={() => actions.toggleDone(k)}>
        <span aria-hidden>{done ? '✓' : '○'}</span> {done ? 'Done' : 'Mark done'}
      </button>
      <button data-action="mark" className={`pill-btn ${marked ? 'is-on mark' : ''}`} onClick={() => actions.toggleMark(k)}>
        <span aria-hidden>{marked ? '★' : '☆'}</span> {marked ? 'Saved' : 'Bookmark'}
      </button>
      <button
        className={`pill-btn ${store.prefs.revise ? 'is-on revise' : ''}`}
        onClick={() => actions.setPref('revise', !store.prefs.revise)}
        title="Hide explanatory prose; keep facts, tables, traps and self-tests"
      >Revision mode
      </button>
    </div>
  );
}

export function Toc({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-10% 0px -75% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (items.length < 2) return null;
  return (
    <nav className="toc" aria-label="On this page">
      <div className="toc-title">On this page</div>
      <ol>
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className={active === i.id ? 'is-active' : ''}>
              {i.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="read-progress" style={{ transform: `scaleX(${p})` }} aria-hidden />;
}

function savedLabel(at) {
  const mins = Math.round((Date.now() - at) / 60000);
  if (mins < 1) return 'Saved just now';
  if (mins < 60) return `Saved ${mins} min ago`;
  return `Saved ${new Date(at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}`;
}

// Personal notes for one topic, kept in this browser. Autosaves while typing; the
// button (or ⌘/Ctrl+S) saves at once.
export function TopicNotes({ subject, topic }) {
  const store = useStore();
  const k = key(subject, topic);
  const saved = store.notes?.[k];
  const [draft, setDraft] = useState(saved?.text ?? '');
  const [dirty, setDirty] = useState(false);
  const [flash, setFlash] = useState(false);

  // Pick up the stored note once the browser store has loaded (and edits from other tabs).
  useEffect(() => {
    if (!dirty) setDraft(saved?.text ?? '');
  }, [saved?.text, dirty]);

  const save = () => {
    actions.setNote(k, draft);
    setDirty(false);
    setFlash(true);
  };

  useEffect(() => {
    if (!dirty) return;
    const t = setTimeout(() => {
      actions.setNote(k, draft);
      setDirty(false);
    }, 900);
    return () => clearTimeout(t);
  }, [draft, dirty, k]);

  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(false), 1400);
    return () => clearTimeout(t);
  }, [flash]);

  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;
  const status = dirty ? 'Typing…' : saved ? savedLabel(saved.at) : 'Saved in this browser';

  return (
    <section className="mynotes" aria-label="My notes">
      <div className="mynotes-head">
        <span className="mynotes-title">My notes</span>
        <span className="mynotes-status">{status}</span>
      </div>
      <textarea
        className="mynotes-area"
        value={draft}
        placeholder="Jot down mnemonics, doubts or points to revise for this topic…"
        spellCheck
        onChange={(e) => {
          setDraft(e.target.value);
          setDirty(true);
        }}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
            e.preventDefault();
            save();
          }
        }}
      />
      <div className="mynotes-foot">
        <span className="mynotes-count">{words ? `${words} word${words === 1 ? '' : 's'}` : ''}</span>
        <button className={`mynotes-save ${flash ? 'is-flash' : ''}`} onClick={save}>
          {flash ? '✓ Saved' : 'Save note'}
        </button>
      </div>
    </section>
  );
}
