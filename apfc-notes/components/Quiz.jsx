'use client';

import { useState } from 'react';
import Inline from './Inline';
import { actions } from '@/lib/store';

// `html` renders question text as trusted HTML (the UIIC topic files are authored
// that way); otherwise strings go through the inline-markdown renderer.
function Text({ text, html, math }) {
  if (html) return <span className="quiz-html" dangerouslySetInnerHTML={{ __html: text }} />;
  return <Inline text={text} math={math} />;
}

export default function Quiz({ items, storeKey, html = false, math = false, kicker = 'Self-test', title }) {
  const [picked, setPicked] = useState({});
  const answered = Object.keys(picked).length;
  const correct = items.reduce((n, q, i) => n + (picked[i] === q.answer ? 1 : 0), 0);

  function choose(qi, oi) {
    if (picked[qi] !== undefined) return;
    const next = { ...picked, [qi]: oi };
    setPicked(next);
    if (Object.keys(next).length === items.length) {
      const score = items.reduce((n, q, i) => n + (next[i] === q.answer ? 1 : 0), 0);
      actions.setQuiz(storeKey, { score, total: items.length, at: Date.now() });
    }
  }

  return (
    <section className="quiz">
      <header className="quiz-head">
        <div>
          <span className="quiz-kicker">{kicker}</span>
          <h4>{title || `Check yourself: ${items.length} exam-style questions`}</h4>
        </div>
        <div className="quiz-score" aria-live="polite">
          <b>{correct}</b>/{answered || 0}
          {answered > 0 && (
            <button className="ghost-btn" onClick={() => setPicked({})}>
              Reset
            </button>
          )}
        </div>
      </header>
      <ol className="quiz-list">
        {items.map((q, qi) => {
          const done = picked[qi] !== undefined;
          return (
            <li key={qi} className="quiz-q">
              <div className="quiz-stem">
                {q.year && <span className="quiz-year">{q.year}</span>}
                <Text text={q.q} html={html} math={math} />
              </div>
              <div className="quiz-opts">
                {q.options.map((o, oi) => {
                  let state = '';
                  if (done && oi === q.answer) state = 'is-right';
                  else if (done && picked[qi] === oi) state = 'is-wrong';
                  return (
                    <button key={oi} className={`quiz-opt ${state}`} onClick={() => choose(qi, oi)} disabled={done}>
                      <span className="quiz-letter">{String.fromCharCode(65 + oi)}</span>
                      <span>
                        <Text text={o} html={html} math={math} />
                      </span>
                    </button>
                  );
                })}
              </div>
              {done && q.why && (
                <div className={`quiz-why ${picked[qi] === q.answer ? 'ok' : 'no'}`}>
                  <b>{picked[qi] === q.answer ? 'Correct.' : 'Not quite.'}</b> <Text text={q.why} html={html} math={math} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
