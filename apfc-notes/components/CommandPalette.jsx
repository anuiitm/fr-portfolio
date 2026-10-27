'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { actions, key, useStore } from '@/lib/store';
import { activeWorkspace } from '@/lib/workspaces';
import { withBase } from '@/lib/base';

let cache = null;

// Index entries without `ws` are APFC notes.
const wsOf = (r) => r.ws || 'apfc';

function snippet(body, q) {
  const i = body.toLowerCase().indexOf(q);
  if (i < 0) return '';
  const start = Math.max(0, i - 60);
  return (start > 0 ? '…' : '') + body.slice(start, i + q.length + 90) + '…';
}

function Highlight({ text, q }) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

export default function CommandPalette({ onClose }) {
  const [index, setIndex] = useState(cache);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const [scope, setScope] = useState('all');
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const router = useRouter();
  const store = useStore();
  // Results from the workspace in view rank first.
  const here = activeWorkspace(usePathname()).id;

  useEffect(() => {
    inputRef.current?.focus();
    if (!cache) {
      fetch(withBase('/search-index.json'))
        .then((r) => r.json())
        .then((d) => {
          cache = d;
          setIndex(d);
        })
        .catch(() => setIndex([]));
    }
  }, []);

  const results = useMemo(() => {
    if (!index) return [];
    const needle = q.trim().toLowerCase();
    let pool = index;
    if (scope === 'ready') pool = pool.filter((r) => r.ready);
    if (scope === 'marks') pool = pool.filter((r) => store.marks[key(r.s, r.t)]);
    if (!needle) {
      const start = scope === 'all' ? pool.filter((r) => r.ready && wsOf(r) === here) : pool;
      return start.slice(0, 30).map((r) => ({ ...r, snip: '' }));
    }
    const words = needle.split(/\s+/).filter(Boolean);
    return pool
      .map((r) => {
        const title = r.title.toLowerCase();
        const body = r.body.toLowerCase();
        let score = 0;
        for (const w of words) {
          if (title.includes(w)) score += 12;
          else if (r.heads.some((h) => h.text.toLowerCase().includes(w))) score += 6;
          else if (body.includes(w)) score += 2 + Math.min(4, body.split(w).length - 1) * 0.5;
          else return null;
        }
        if (title.includes(needle)) score += 10;
        if (r.ready) score += 1;
        if (wsOf(r) === here) score += 3;
        const head = r.heads.find((h) => h.text.toLowerCase().includes(needle));
        return { ...r, score, snip: snippet(r.body, needle), head };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40);
  }, [index, q, scope, store.marks, here]);

  useEffect(() => setSel(0), [q, scope]);
  useEffect(() => {
    listRef.current?.querySelector('[data-sel="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [sel]);

  function go(r) {
    if (!r) return;
    const hash = r.head ? `#${r.head.id}` : '';
    router.push(`${r.href || `/notes/${r.s}/${r.t}`}${hash}`);
    onClose();
  }

  function onKey(e) {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => Math.min(results.length - 1, s + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === 'Enter') go(results[sel]);
    else if (e.key === 'Tab') {
      e.preventDefault();
      setScope((s) => (s === 'all' ? 'ready' : s === 'ready' ? 'marks' : 'all'));
    }
  }

  const needle = q.trim().toLowerCase();

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Search notes" onMouseDown={(e) => e.stopPropagation()}>
        <div className="palette-input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="Search a section, Act, scheme, number… e.g. 14B, gratuity, 300 workers"
            aria-label="Search"
          />
          <kbd>esc</kbd>
        </div>
        <div className="palette-scopes">
          {[
            ['all', 'Everything'],
            ['ready', 'Notes ready'],
            ['marks', 'Bookmarks'],
          ].map(([id, label]) => (
            <button key={id} className={scope === id ? 'on' : ''} onClick={() => setScope(id)}>
              {label}
            </button>
          ))}
          <span className="palette-hint">Tab to switch, ↑↓ to move, ↵ to open</span>
          <button className="palette-toggle" onClick={() => actions.setPref('revise', !store.prefs.revise)}>
            Revision mode: <b>{store.prefs.revise ? 'on' : 'off'}</b>
          </button>
        </div>
        <ul className="palette-list" ref={listRef}>
          {!index && <li className="palette-empty">Loading index…</li>}
          {index && results.length === 0 && <li className="palette-empty">Nothing matches “{q}”.</li>}
          {results.map((r, i) => (
            <li key={r.href || `${r.s}/${r.t}`}>
              <button
                data-sel={i === sel}
                className={`palette-item ${i === sel ? 'is-sel' : ''}`}
                onMouseEnter={() => setSel(i)}
                onClick={() => go(r)}
              >
                <span className="palette-badge">{r.sn}</span>
                <span className="palette-main">
                  <span className="palette-title">
                    <Highlight text={r.title} q={needle} />
                    {!r.ready && <em className="soon-pill">soon</em>}
                  </span>
                  {r.head && <span className="palette-head">§ {r.head.text}</span>}
                  {r.snip && (
                    <span className="palette-snip">
                      <Highlight text={r.snip} q={needle} />
                    </span>
                  )}
                </span>
                <span className={`pchip p-${r.p}`}>{r.p}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
