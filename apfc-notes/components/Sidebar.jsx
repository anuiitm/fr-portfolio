'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { actions, key, useStore } from '@/lib/store';
import { MenuIcon, SearchIcon } from './Shell';
import MaybeLink from './MaybeLink';

const ACCENTS = ['lime', 'violet', 'cyan', 'coral'];

export function Ring({ value, total }) {
  const pct = total ? value / total : 0;
  const r = 7;
  const c = 2 * Math.PI * r;
  return (
    <svg className="ring" width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <circle cx="9" cy="9" r={r} className="ring-track" />
      <circle cx="9" cy="9" r={r} className="ring-fill" strokeDasharray={c} strokeDashoffset={c * (1 - pct)} />
    </svg>
  );
}

// `nav` describes the workspace: where its notes live (base), its home page, its
// brand, which subject opens first, and the prefix its progress keys use.
const APFC_NAV = { base: '/notes', home: '/', brand: 'APFC', mark: 'A', firstOpen: '7a', keyPrefix: '' };

export default function Sidebar({ tree, nav = APFC_NAV, collapsed, onToggle, onSearch, onHelp }) {
  const pathname = usePathname();
  const store = useStore();
  const [, , activeSubject, activeTopic] = pathname.split('/');
  const [open, setOpen] = useState(() => ({ [activeSubject || nav.firstOpen]: true }));
  const sk = useCallback((sid, tid) => key(nav.keyPrefix + sid, tid), [nav.keyPrefix]);
  const [readyOnly, setReadyOnly] = useState(false);
  const activeRef = useRef(null);

  const opened = store.openSections;

  useEffect(() => {
    if (activeSubject) setOpen((o) => ({ ...o, [activeSubject]: true }));
  }, [activeSubject]);

  // Navigating to a subject or topic re-opens its section if it was collapsed.
  const activeSection = tree.find((sec) => sec.subjects.some((s) => s.id === activeSubject))?.no;
  useEffect(() => {
    if (activeSection) actions.openSection(activeSection);
  }, [activeSection, pathname]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [activeTopic]);

  const totals = useMemo(() => {
    let ready = 0;
    let done = 0;
    tree.forEach((sec) =>
      sec.subjects.forEach((s) =>
        s.topics.forEach((t) => {
          if (t.ready) {
            ready++;
            if (store.done[sk(s.id, t.id)]) done++;
          }
        }),
      ),
    );
    return { ready, done };
  }, [tree, store.done, sk]);

  return (
    <aside className={`sidebar ${collapsed ? 'is-hidden' : ''}`} aria-label="Subjects">
      <div className="sb-head">
        <Link
          href={nav.home}
          className="brand"
          title="Home (collapses all sections)"
          onClick={() => {
            setOpen({});
            actions.collapseSections();
          }}
        >
          <span className="brand-mark">{nav.mark}</span>
          <b>{nav.brand}</b>
        </Link>
        <button className="icon-btn" onClick={onToggle} aria-label="Hide subjects">
          <MenuIcon />
        </button>
      </div>

      <button className="sb-search" onClick={onSearch}>
        <SearchIcon />
        <span>Search notes</span>
        <kbd>⌘K</kbd>
      </button>

      {nav.links?.length > 0 && (
        <div className="sb-links">
          {nav.links.map((l) => (
            <Link key={l.href} href={l.href} className={`sb-link ${pathname.startsWith(l.href) ? 'is-current' : ''}`}>
              <span className="sb-link-icon" aria-hidden>
                {l.icon}
              </span>
              <span>{l.label}</span>
            </Link>
          ))}
        </div>
      )}

      <div className="sb-filter">
        <button className={!readyOnly ? 'on' : ''} onClick={() => setReadyOnly(false)}>
          All subjects
        </button>
        <button className={readyOnly ? 'on' : ''} onClick={() => setReadyOnly(true)}>
          Notes ready
        </button>
      </div>

      <nav className="sb-tree">
        {tree.map((sec) => {
          const subs = readyOnly ? sec.subjects.filter((s) => s.topics.some((t) => t.ready)) : sec.subjects;
          if (!subs.length) return null;
          const isSecOpen = Boolean(opened[sec.no]);
          let secReady = 0;
          let secDone = 0;
          subs.forEach((s) =>
            s.topics.forEach((t) => {
              if (t.ready) {
                secReady++;
                if (store.done[sk(s.id, t.id)]) secDone++;
              }
            }),
          );
          return (
            <div className="sb-section" key={sec.no}>
              <button
                className="sb-section-btn"
                onClick={() => actions.toggleSection(sec.no)}
                aria-expanded={isSecOpen}
                title={sec.title}
              >
                <span className="sb-section-no">{sec.badge ?? sec.no.padStart(2, '0')}</span>
                <span className="sb-section-name">{sec.title}</span>
                {!isSecOpen &&
                  (secReady ? (
                    <Ring value={secDone} total={secReady} />
                  ) : (
                    <span className="sb-section-count">{subs.length}</span>
                  ))}
                <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="sb-group" data-open={isSecOpen}>
                <div className="sb-group-inner">
              {subs.map((s) => {
                const readyCount = s.topics.filter((t) => t.ready).length;
                const doneCount = s.topics.filter((t) => t.ready && store.done[sk(s.id, t.id)]).length;
                const isOpen = Boolean(open[s.id]);
                const partStarts = Object.fromEntries((s.parts || []).map((p) => [p.from, p.label]));
                return (
                  <div className={`sb-subject ${activeSubject === s.id ? 'is-active' : ''}`} key={s.id}>
                    <button
                      className="sb-subject-btn"
                      onClick={() => setOpen((o) => ({ ...o, [s.id]: !o[s.id] }))}
                      aria-expanded={isOpen}
                    >
                      <span className="sb-no">{s.no}</span>
                      <span className="sb-subject-title">{s.title}</span>
                      {readyCount ? <Ring value={doneCount} total={readyCount} /> : <span className="soon-dot">soon</span>}
                      <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div className="sb-topics" data-open={isOpen}>
                      <div className="sb-topics-inner">
                        <Link href={`${nav.base}/${s.id}`} className={`sb-overview ${activeSubject === s.id && !activeTopic ? 'is-current' : ''}`}>
                          Overview
                        </Link>
                        {s.topics.map((t) => {
                          const current = activeSubject === s.id && activeTopic === t.id;
                          const k = sk(s.id, t.id);
                          return (
                            <div key={t.id}>
                              {partStarts[t.id] && <div className="sb-part">{partStarts[t.id]}</div>}
                              <MaybeLink
                                ready={t.ready}
                                ref={current ? activeRef : undefined}
                                href={`${nav.base}/${s.id}/${t.id}`}
                                className={`sb-topic ${current ? 'is-current' : ''} ${t.ready ? '' : 'is-soon'}`}
                                title={t.title}
                              >
                                <span className={`pdot p-${t.p}`} aria-label={t.p} />
                                <span className="sb-topic-title">{t.title}</span>
                                {t.via && <span className="sb-via" title="Covered by linked notes">↗</span>}
                                {store.done[k] && <span className="tick" aria-label="done">✓</span>}
                                {store.marks[k] && <span className="star" aria-label="bookmarked">★</span>}
                              </MaybeLink>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="sb-foot">
        <div className="sb-progress">
          <div className="sb-progress-row">
            <span>Progress</span>
            <b>
              {totals.done}/{totals.ready}
            </b>
          </div>
          <div className="bar">
            <span style={{ width: `${totals.ready ? (totals.done / totals.ready) * 100 : 0}%` }} />
          </div>
        </div>
        <div className="sb-prefs">
          <div className="swatches" role="radiogroup" aria-label="Accent colour">
            {ACCENTS.map((a) => (
              <button
                key={a}
                className={`swatch sw-${a} ${store.prefs.accent === a ? 'on' : ''}`}
                onClick={() => actions.setPref('accent', a)}
                aria-label={`${a} accent`}
                role="radio"
                aria-checked={store.prefs.accent === a}
              />
            ))}
          </div>
          <div className="sizes" role="radiogroup" aria-label="Text size">
            {['sm', 'md', 'lg'].map((sz) => (
              <button
                key={sz}
                className={store.prefs.size === sz ? 'on' : ''}
                onClick={() => actions.setPref('size', sz)}
                role="radio"
                aria-checked={store.prefs.size === sz}
              >
                {sz === 'sm' ? 'A' : sz === 'md' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>
          <button className="icon-btn" onClick={onHelp} aria-label="Keyboard shortcuts">
            ?
          </button>
        </div>
      </div>
    </aside>
  );
}
