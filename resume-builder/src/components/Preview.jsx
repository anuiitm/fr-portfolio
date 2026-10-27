import { useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectResume } from '../store';
import { SECTION_LABELS } from '../data/sample';

// **bold** only, rendered as elements: no HTML strings, nothing to sanitise.
export function Inline({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => (part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part));
}

const A4_WIDTH = 794; // 210 mm at 96 dpi

export default function Preview() {
  const r = useSelector(selectResume);
  const box = useRef(null);
  const [scale, setScale] = useState(0.7);

  // Fit the A4 page to the pane width.
  useLayoutEffect(() => {
    const el = box.current;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, (e.contentRect.width - 32) / A4_WIDTH)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="preview-pane" ref={box}>
      <div className="sheet-wrap" style={{ height: 1123 * scale + 32 }}>
        <article id="resume" className={`sheet tpl-${r.template}`} style={{ '--accent': r.accent, transform: `scale(${scale})` }} aria-label="Resume preview">
          {r.template === 'modern' ? <Modern r={r} /> : <Classic r={r} />}
        </article>
      </div>
    </div>
  );
}

function Header({ p }) {
  return (
    <header className="cv-head">
      <h1>{p.name || 'Your name'}</h1>
      {p.title && <p className="cv-title">{p.title}</p>}
      <p className="cv-contact">{[p.email, p.phone, p.location, p.links].filter(Boolean).join('  |  ')}</p>
    </header>
  );
}

function Section({ id, r }) {
  if (id === 'summary') {
    return r.summary.trim() ? (
      <section className="cv-sec">
        <h2>{SECTION_LABELS.summary}</h2>
        <p>
          <Inline text={r.summary} />
        </p>
      </section>
    ) : null;
  }
  const items = r[id].filter((e) => e.on);
  if (!items.length) return null;
  return (
    <section className="cv-sec">
      <h2>{SECTION_LABELS[id]}</h2>
      {id === 'skills' ? (
        <dl className="cv-skills">
          {items.map((s) => (
            <div key={s.id}>
              <dt>{s.title}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      ) : id === 'achievements' ? (
        <ul>
          {items.map((a) => (
            <li key={a.id}>
              <Inline text={a.title} />
            </li>
          ))}
        </ul>
      ) : (
        items.map((e) => (
          <div key={e.id} className="cv-entry">
            <div className="cv-row">
              <b>{e.title}</b>
              <span>{e.when}</span>
            </div>
            {e.org && <p className="cv-org">{e.org}</p>}
            {e.bullets.some((b) => b.trim()) && (
              <ul>
                {e.bullets
                  .filter((b) => b.trim())
                  .map((b, i) => (
                    <li key={i}>
                      <Inline text={b} />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))
      )}
    </section>
  );
}

const Classic = ({ r }) => (
  <>
    <Header p={r.personal} />
    {r.order.map((id) => (
      <Section key={id} id={id} r={r} />
    ))}
  </>
);

// Two columns: the narrative on the left, the scannable lists on the right.
const SIDE = ['skills', 'education', 'achievements'];
const Modern = ({ r }) => (
  <>
    <Header p={r.personal} />
    <div className="cv-cols">
      <div>
        {r.order
          .filter((id) => !SIDE.includes(id))
          .map((id) => (
            <Section key={id} id={id} r={r} />
          ))}
      </div>
      <aside>
        {r.order
          .filter((id) => SIDE.includes(id))
          .map((id) => (
            <Section key={id} id={id} r={r} />
          ))}
      </aside>
    </div>
  </>
);
