'use client';

import Inline from './Inline';
import { actions, useStore } from '@/lib/store';
import { CheckIcon } from './Shell';

const LEVEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

// LeetCode problems for a topic. Titles, links and difficulty come from LeetCode's own
// problem list (content/placements/leetcode.json); ticks are kept in this browser.
export default function ProblemList({ items, title }) {
  const store = useStore();
  const done = items.filter((p) => store.done[`lc:${p.n}`]).length;
  return (
    <section className="lc">
      <header className="lc-head">
        <div>
          <span className="quiz-kicker">LeetCode practice</span>
          <h4>{title || `${items.length} problems, in the order to solve them`}</h4>
        </div>
        <span className="lc-count">
          <b>{done}</b>/{items.length} solved
        </span>
      </header>
      <ol className="lc-list">
        {items.map((p) => {
          const k = `lc:${p.n}`;
          const on = Boolean(store.done[k]);
          return (
            <li key={p.n} className={on ? 'is-done' : ''}>
              <button className="lc-tick" onClick={() => actions.toggleDone(k)} aria-pressed={on} aria-label={on ? 'Mark unsolved' : 'Mark solved'}>
                {on && <CheckIcon />}
              </button>
              <span className="lc-no">{p.n}</span>
              <span className="lc-main">
                <a href={`https://leetcode.com/problems/${p.slug}/`} target="_blank" rel="noreferrer" className="lc-title">
                  {p.title}
                </a>
                {p.note && (
                  <span className="lc-note">
                    <Inline text={p.note} math />
                  </span>
                )}
              </span>
              <span className={`lc-lvl l${p.level}`}>{LEVEL[p.level]}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
