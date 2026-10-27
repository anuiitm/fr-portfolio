import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { focusStore, loadReviews, resetRules, setExplorerQuery, setRule, setTheme, showMore } from '../store/explorerSlice';
import { THEME_KEYS, data, selectCompiledRules, selectThemeCounts, selectVisibleReviews, storeById } from '../store/selectors';
import { fmtInt, fmtMonth, fmtPct, storeLabel } from '../lib/format';

export default function Complaints() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((s) => s.explorer);
  const ref = useRef(null);

  // Fetch the review file when the section is about to scroll into view.
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(loadReviews());
          io.disconnect();
        }
      },
      { rootMargin: '400px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [dispatch]);

  return (
    <section className="section" id="complaints" ref={ref} aria-labelledby="complaints-title">
      <header className="section-head">
        <p className="eyebrow">Complaints</p>
        <h2 id="complaints-title">What the low ratings say</h2>
      </header>
      <p className="prose">
        Only {fmtInt(data.meta.negWithText)} of the {fmtInt(data.meta.reviews)} reviews are rated 3★ or lower <em>and</em>{' '}
        have text. Each one is tagged with simple patterns you can edit below. Tagging is multi-label: “rude staff and
        the refund never came” counts for both. Reviews that no pattern matches are kept and shown as untagged.
      </p>
      {status === 'loading' && <p className="muted">Loading reviews…</p>}
      {status === 'error' && (
        <p className="error">
          {error}.{' '}
          <button type="button" className="btn-text" onClick={() => dispatch(loadReviews())}>
            Retry
          </button>
        </p>
      )}
      {status === 'ready' && <Explorer />}
    </section>
  );
}

function Explorer() {
  const dispatch = useDispatch();
  const { theme, query, storeOnly, rules } = useSelector((s) => s.explorer);
  const { counts, untagged, total } = useSelector(selectThemeCounts);
  const { errors } = useSelector(selectCompiledRules);
  const visible = useSelector(selectVisibleReviews);
  const ordered = [...THEME_KEYS].sort((a, b) => counts[b] - counts[a]);
  const max = Math.max(1, ...Object.values(counts), untagged);

  return (
    <div className="explorer">
      {storeOnly && (
        <p className="scope-chip">
          Showing <b>{storeLabel(storeById[storeOnly])}</b> only
          <button type="button" className="btn-text" onClick={() => dispatch(focusStore(null))}>
            Show all stores
          </button>
        </p>
      )}

      <div className="themes" role="group" aria-label="Filter by theme">
        <ThemeButton active={theme === 'all'} onClick={() => dispatch(setTheme('all'))} label="All low ratings" count={total} share={1} />
        {ordered.map((k) => (
          <ThemeButton
            key={k}
            active={theme === k}
            onClick={() => dispatch(setTheme(k))}
            label={data.themes[k].label}
            count={counts[k]}
            share={counts[k] / max}
            pct={total ? counts[k] / total : 0}
          />
        ))}
        <ThemeButton active={theme === 'untagged'} onClick={() => dispatch(setTheme('untagged'))} label="No pattern matched" count={untagged} share={untagged / max} pct={total ? untagged / total : 0} muted />
      </div>

      <details className="rules">
        <summary>Edit the matching patterns</summary>
        <p className="muted small">
          Case-insensitive regular expressions. Counts update as you type. A broken pattern is ignored until it parses.
        </p>
        {THEME_KEYS.map((k) => (
          <label key={k} className="rule">
            <span>{data.themes[k].label}</span>
            <input
              type="text"
              spellCheck="false"
              value={rules[k]}
              aria-invalid={Boolean(errors[k])}
              aria-describedby={errors[k] ? `rule-err-${k}` : undefined}
              onChange={(e) => dispatch(setRule({ key: k, pattern: e.target.value }))}
            />
            {errors[k] && (
              <small id={`rule-err-${k}`} className="error">
                {errors[k]}
              </small>
            )}
          </label>
        ))}
        <button type="button" className="btn-text" onClick={() => dispatch(resetRules())}>
          Restore default patterns
        </button>
      </details>

      <div className="table-tools">
        <label className="field field-grow">
          <span>Search the text</span>
          <input type="search" value={query} placeholder="e.g. exchange, polish, scheme" onChange={(e) => dispatch(setExplorerQuery(e.target.value))} />
        </label>
        <p className="table-count" aria-live="polite">
          {fmtInt(visible.total)} reviews
        </p>
      </div>

      <ul className="reviews">
        {visible.items.map((r) => (
          <li key={r.id} className="review">
            <p className="review-meta">
              <span className={`stars s${r.rating}`} aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}
                <span aria-hidden="true">{'★'.repeat(5 - r.rating)}</span>
              </span>
              <span>{storeLabel(storeById[r.store])}</span>
              <span>{fmtMonth(r.month)}</span>
            </p>
            <ReviewText text={r.text} query={query} />
            {r.themes.length > 0 && (
              <p className="review-tags">
                {r.themes.map((t) => (
                  <span key={t}>{data.themes[t].label}</span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
      {visible.total === 0 && <p className="empty">Nothing matches. Try another theme or clear the search.</p>}
      {visible.total > visible.items.length && (
        <button type="button" className="btn" onClick={() => dispatch(showMore())}>
          Show more ({fmtInt(visible.total - visible.items.length)} left)
        </button>
      )}
    </div>
  );
}

function ThemeButton({ active, onClick, label, count, share, pct, muted }) {
  return (
    <button type="button" aria-pressed={active} className={`theme${muted ? ' theme-muted' : ''}`} onClick={onClick}>
      <span className="theme-label">{label}</span>
      <span className="theme-track" aria-hidden="true">
        <span style={{ width: `${share * 100}%` }} />
      </span>
      <span className="theme-count">
        {fmtInt(count)}
        {pct !== undefined && <small>{fmtPct(pct, 0)}</small>}
      </span>
    </button>
  );
}

function ReviewText({ text, query }) {
  const long = text.length > 360;
  const [open, setOpen] = useState(false);
  return (
    <>
      <p className={`review-text${long && !open ? ' clamped' : ''}`}>
        <Highlight text={text} query={query} />
      </p>
      {long && (
        <button type="button" className="btn-text" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
    </>
  );
}

function Highlight({ text, query }) {
  const q = query.trim();
  if (!q) return text;
  const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'));
  return parts.map((p, i) => (i % 2 ? <mark key={i}>{p}</mark> : p));
}
