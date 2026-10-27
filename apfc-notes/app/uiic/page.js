import Link from 'next/link';
import { Countdown, ContinueCard, OverallRing } from '@/components/HomeWidgets';
import { EXAM, pattern, sections, storeSubject, subjects, topicStatus } from '@/lib/uiic';

export const metadata = { title: { absolute: 'UIIC AO Notes' } };

function PatternTable({ p }) {
  const total = p.rows.reduce((a, r) => [a[0] + r[1], a[1] + r[2]], [0, 0]);
  return (
    <div className="n-table-wrap">
      <div className="n-table-cap">{p.title}</div>
      <div className="n-table-scroll">
        <table className="n-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Questions</th>
              <th>Marks</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {p.rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => (
                  <td key={i}>{c}</td>
                ))}
              </tr>
            ))}
            <tr className="n-table-total">
              <td>Total</td>
              <td>{total[0]}</td>
              <td>{total[1]}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function UiicHome() {
  const prelimIds = subjects
    .filter((s) => s.section === 'uiic-pre')
    .flatMap((s) => s.topics.filter((t) => topicStatus(s.id, t).ready).map((t) => `${storeSubject(s.id)}/${t.id}`));
  const written = subjects.reduce((n, s) => n + s.topics.filter((t) => topicStatus(s.id, t).note).length, 0);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">United India Insurance, Administrative Officer (Scale I), 2026</span>
          <h1>
            Clear the Prelims,
            <br />
            <span className="accent-text">then own the Mains.</span>
          </h1>
          <p>
            {written} topics written for UIIC, from prelims arithmetic to machine input-output and the descriptive
            test, plus a Mains map that sends each General Awareness and Computer topic to the APFC notes that already
            cover it.
          </p>
          <div className="hero-ctas">
            <Link href="/uiic/reasoning" className="cta">
              Start with Reasoning →
            </Link>
            <ContinueCard ws="uiic" base="/uiic" />
          </div>
        </div>
        <div className="hero-side">
          <Countdown date={EXAM.prelims} label="Prelims (tentative)" />
          <OverallRing readyIds={prelimIds} label="Prelims topics" />
        </div>
      </section>

      <section className="home-block">
        <div className="home-block-head">
          <h2>Syllabus</h2>
          <span className="meta-dim">{EXAM.vacancies} posts</span>
        </div>
        <div className="section-grid">
          {sections.map((sec) => {
            const subs = subjects.filter((s) => s.section === sec.no);
            return (
              <div key={sec.no} className="section-card is-live">
                <div className="section-card-head">
                  <span className="section-no">{sec.badge}</span>
                  <span className="live-pill">{sec.no === 'uiic-pre' ? 'Notes ready' : 'Notes and links'}</span>
                </div>
                <h3>{sec.title}</h3>
                <ul>
                  {subs.map((s) => (
                    <li key={s.id}>
                      <Link href={`/uiic/${s.id}`}>
                        <span className="sc-no">{s.no}</span>
                        <span>{s.title}</span>
                        <span className="sc-count">{s.topics.length}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-block">
        <div className="home-block-head">
          <h2>Exam pattern</h2>
          <span className="meta-dim">Mains {new Date(EXAM.mains).toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })} (tentative)</span>
        </div>
        <div className="pattern-grid">
          <PatternTable p={pattern.prelims} />
          <PatternTable p={pattern.mains} />
        </div>
      </section>

      <footer className="home-foot">
        <span>{EXAM.note}</span>
        <span>
          Press <kbd>?</kbd> for keyboard shortcuts.
        </span>
      </footer>
    </div>
  );
}
