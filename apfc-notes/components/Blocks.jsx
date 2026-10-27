import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import Inline, { tex } from './Inline';
import Quiz from './Quiz';
import Flashcards from './Flashcards';
import ProblemList from './ProblemList';
import leetcode from '@/content/placements/leetcode.json';
import { slug } from '@/lib/content';

hljs.registerLanguage('python', python);
hljs.registerLanguage('sql', sql);

const CALLOUT = {
  key: { label: 'Key point', icon: '◆' },
  trap: { label: 'Exam trap', icon: '⚠' },
  new: { label: 'New in 2025–26', icon: '✦' },
  verify: { label: 'Re-check before exam', icon: '↻' },
  note: { label: 'Note', icon: 'i' },
  mnemonic: { label: 'Memory hook', icon: '✎' },
  case: { label: 'Case law', icon: '§' },
  ask: { label: 'Interview angle', icon: '?' },
  intuition: { label: 'Intuition', icon: '◎' },
};

// Resolve LeetCode numbers against LeetCode's own list. An unknown number fails the build,
// so a problem cannot be cited that does not exist.
function resolveProblems(items) {
  return items.map(({ n, note }) => {
    const hit = leetcode[n];
    if (!hit) throw new Error(`Unknown LeetCode problem ${n}`);
    const [title, slugName, level, paid] = hit;
    return { n, title, slug: slugName, level, paid: Boolean(paid), note: note || '' };
  });
}

function highlight(code, lang) {
  try {
    return hljs.highlight(code, { language: lang }).value;
  } catch {
    return code.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }
}

function ListItems({ items, ordered, math }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className="n-list">
      {items.map((it, i) =>
        typeof it === 'string' ? (
          <li key={i}>
            <Inline text={it} math={math} />
          </li>
        ) : (
          <li key={i}>
            <Inline text={it.text} math={math} />
            {it.sub && (
              <ul className="n-sublist">
                {it.sub.map((s, j) => (
                  <li key={j}>
                    <Inline text={s} math={math} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ),
      )}
    </Tag>
  );
}

function Block({ b, idx, noteKey, math }) {
  switch (b.t) {
    case 'h2':
      return (
        <h2 className="n-h2" id={slug(b.text)} data-toc>
          <a href={`#${slug(b.text)}`} className="n-anchor" aria-hidden>
            #
          </a>
          <Inline text={b.text} math={math} />
        </h2>
      );
    case 'h3':
      return (
        <h3 className="n-h3">
          <Inline text={b.text} math={math} />
        </h3>
      );
    case 'p':
      return (
        <p className="n-p">
          <Inline text={b.text} math={math} />
        </p>
      );
    case 'ul':
      return <ListItems items={b.items} math={math} />;
    case 'ol':
      return <ListItems items={b.items} ordered math={math} />;
    case 'quote':
      return (
        <figure className="n-quote">
          <blockquote>
            <Inline text={b.text} math={math} />
          </blockquote>
          {b.cite && (
            <figcaption>
              <Inline text={b.cite} math={math} />
            </figcaption>
          )}
        </figure>
      );
    case 'callout': {
      const c = CALLOUT[b.kind] || CALLOUT.note;
      return (
        <aside className={`n-callout k-${b.kind || 'note'}`}>
          <div className="n-callout-head">
            <span className="n-callout-icon" aria-hidden>
              {c.icon}
            </span>
            <span>{b.title ? <Inline text={b.title} math={math} /> : c.label}</span>
          </div>
          {b.text && (
            <p>
              <Inline text={b.text} math={math} />
            </p>
          )}
          {b.items && <ListItems items={b.items} math={math} />}
        </aside>
      );
    }
    case 'table':
      return (
        <div className="n-table-wrap">
          {b.caption && (
            <div className="n-table-cap">
              <Inline text={b.caption} math={math} />
            </div>
          )}
          <div className="n-table-scroll">
            <table className="n-table">
              {b.head && (
                <thead>
                  <tr>
                    {b.head.map((h, i) => (
                      <th key={i}>
                        <Inline text={h} math={math} />
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j}>
                        <Inline text={c} math={math} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'facts':
      return (
        <div className="n-facts">
          {b.items.map((f, i) => (
            <div className="n-fact" key={i}>
              <div className="n-fact-v">
                <Inline text={f.v} math={math} />
              </div>
              <div className="n-fact-k">
                <Inline text={f.k} math={math} />
              </div>
            </div>
          ))}
        </div>
      );
    case 'timeline':
      return (
        <ol className="n-timeline">
          {b.items.map((it, i) => (
            <li key={i}>
              <span className="n-tl-when">
                <Inline text={it.when} math={math} />
              </span>
              <span className="n-tl-what">
                <Inline text={it.what} math={math} />
              </span>
            </li>
          ))}
        </ol>
      );
    case 'steps':
      return (
        <ol className="n-steps">
          {b.items.map((it, i) => (
            <li key={i}>
              <span className="n-step-no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="n-step-title">
                  <Inline text={it.title} math={math} />
                </div>
                {it.text && (
                  <div className="n-step-text">
                    <Inline text={it.text} math={math} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      );
    case 'math':
      return (
        <div className="n-math">
          <div className="n-math-eq" dangerouslySetInnerHTML={{ __html: tex(b.tex, true) }} />
          {b.label && (
            <div className="n-math-label">
              <Inline text={b.label} math />
            </div>
          )}
        </div>
      );
    case 'formulas':
      return (
        <div className="n-formulas">
          {b.title && (
            <div className="n-formulas-head">
              <span className="n-formulas-kicker">Formula sheet</span>
              <Inline text={b.title} math />
            </div>
          )}
          <dl>
            {b.rows.map(([name, src, note], i) => (
              <div className="n-formula" key={i}>
                <dt>
                  <Inline text={name} math />
                </dt>
                <dd>
                  <div className="n-formula-eq" dangerouslySetInnerHTML={{ __html: tex(src, true) }} />
                  {note && (
                    <div className="n-formula-note">
                      <Inline text={note} math />
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );
    case 'code':
      return (
        <figure className="n-code">
          <figcaption>
            <span className="n-code-lang">{b.lang === 'sql' ? 'SQL' : 'Python'}</span>
            {b.title && <span className="n-code-title">{b.title}</span>}
          </figcaption>
          <pre>
            <code className={`hljs language-${b.lang}`} dangerouslySetInnerHTML={{ __html: highlight(b.code.trim(), b.lang) }} />
          </pre>
        </figure>
      );
    case 'figure':
      return (
        <figure className={`n-figure ${b.wide ? 'is-wide' : ''}`}>
          <div className="n-figure-art" dangerouslySetInnerHTML={{ __html: b.svg }} />
          {b.caption && (
            <figcaption>
              <Inline text={b.caption} math />
            </figcaption>
          )}
        </figure>
      );
    case 'figures':
      return (
        <div className="n-figrow">
          {b.items.map((f, i) => (
            <figure className="n-figure" key={i}>
              <div className="n-figure-art" dangerouslySetInnerHTML={{ __html: f.svg }} />
              {f.caption && (
                <figcaption>
                  <Inline text={f.caption} math />
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );
    case 'problems':
      return <ProblemList items={resolveProblems(b.items)} title={b.title} />;
    case 'quiz':
      return <Quiz items={b.items} storeKey={`${noteKey}#${idx}`} math={math} />;
    case 'cards':
      return <Flashcards items={b.items} math={math} />;
    case 'sources':
      return (
        <div className="n-sources">
          <div className="n-sources-head">Sources checked</div>
          <ul>
            {b.items.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default function Blocks({ blocks, noteKey, math = false }) {
  return blocks.map((b, i) => (
    <div className={`blk blk-${b.t}${b.t === 'callout' ? ` blk-callout-${b.kind || 'note'}` : ''}`} key={i}>
      <Block b={b} idx={i} noteKey={noteKey} math={math} />
    </div>
  ));
}
