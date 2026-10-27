import Link from 'next/link';
import { Countdown, ContinueCard, OverallRing } from '@/components/HomeWidgets';
import { EXAM, isReady, sections, subjects, subjectStatus } from '@/lib/content';

export default function Home() {
  const ready = subjects.filter((s) => subjectStatus(s).isReady);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">UPSC EPFO, Assistant Provident Fund Commissioner</span>
          <h1>
            Every syllabus line,
            <br />
            <span className="accent-text">verified and ready to revise.</span>
          </h1>
          <p>
            Notes built from the complete APFC checklist, with facts checked against PIB, EPFO, ESIC, PRS and the texts of
            the Codes. Start with Section 7, the core of the exam for an EPFO post.
          </p>
          <div className="hero-ctas">
            <Link href="/notes/7a" className="cta">
              Start Section 7 →
            </Link>
            <ContinueCard />
          </div>
        </div>
        <div className="hero-side">
          <Countdown date={EXAM.date} />
          <OverallRing readyIds={subjects.flatMap((s) => s.topics.filter((t) => isReady(s.id, t.id)).map((t) => `${s.id}/${t.id}`))} />
        </div>
      </section>

      <section className="home-block">
        <div className="home-block-head">
          <h2>Syllabus</h2>
          <span className="meta-dim">
            {ready.length} of {subjects.length} subjects ready
          </span>
        </div>
        <div className="section-grid">
          {sections.map((sec) => {
            const subs = subjects.filter((s) => s.section === sec.no);
            const live = subs.some((s) => subjectStatus(s).isReady);
            return (
              <div key={sec.no} className={`section-card ${live ? 'is-live' : ''}`}>
                <div className="section-card-head">
                  <span className="section-no">{sec.no.padStart(2, '0')}</span>
                  {live ? <span className="live-pill">Notes ready</span> : <span className="soon-pill">Coming soon</span>}
                </div>
                <h3>{sec.title}</h3>
                <ul>
                  {subs.map((s) => (
                    <li key={s.id}>
                      <Link href={`/notes/${s.id}`}>
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

      <footer className="home-foot">
        <span>{EXAM.note}</span>
        <span>
          Press <kbd>?</kbd> for keyboard shortcuts.
        </span>
      </footer>
    </div>
  );
}
