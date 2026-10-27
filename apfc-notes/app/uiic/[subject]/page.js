import Link from 'next/link';
import MaybeLink from '@/components/MaybeLink';
import { notFound } from 'next/navigation';
import SubjectProgress from '@/components/SubjectProgress';
import { getSubject, questionCount, readingMinutes, storeSubject, subjects, topicStatus } from '@/lib/uiic';

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { subject } = await params;
  const s = getSubject(subject);
  return { title: { absolute: s ? `${s.no} ${s.title} – UIIC Notes` : 'Not found' } };
}

export default async function UiicSubjectPage({ params }) {
  const { subject: sid } = await params;
  const subject = getSubject(sid);
  if (!subject) notFound();

  const rows = subject.topics.map((t) => ({ t, ...topicStatus(sid, t) }));
  const counts = { P1: 0, P2: 0, P3: 0 };
  subject.topics.forEach((t) => counts[t.p]++);
  const written = rows.filter((r) => r.note);
  const minutes = written.reduce((n, r) => n + readingMinutes(r.note), 0);
  const questions = written.reduce((n, r) => n + questionCount(r.note), 0);
  const readyIds = rows.filter((r) => r.ready).map((r) => r.t.id);

  return (
    <div className="subject-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/uiic">UIIC</Link>
        <span>/</span>
        <span className="crumb-now">{subject.no}</span>
      </nav>
      <header className="subject-hero">
        <div className="subject-hero-no">{subject.no}</div>
        <div>
          <h1>{subject.title}</h1>
          <p className="subject-blurb">{subject.marks}</p>
          <div className="subject-stats">
            <span>
              <b>{subject.topics.length}</b> topics
            </span>
            <span>
              <b className="p-text-P1">{counts.P1}</b> P1, <b className="p-text-P2">{counts.P2}</b> P2,{' '}
              <b className="p-text-P3">{counts.P3}</b> P3
            </span>
            {written.length > 0 ? (
              <>
                <span>
                  <b>{minutes}</b> min of reading
                </span>
                <span>
                  <b>{questions}</b> practice questions
                </span>
              </>
            ) : (
              <span>Covered through linked notes</span>
            )}
          </div>
          {readyIds.length > 0 && <SubjectProgress subject={storeSubject(sid)} topicIds={readyIds} />}
        </div>
      </header>

      <ol className="topic-cards">
        {rows.map(({ t, note, links, ready }, i) => (
          <li key={t.id}>
            <MaybeLink ready={ready} href={`/uiic/${sid}/${t.id}`} className={`topic-card ${ready ? '' : 'is-soon'}`}>
              <span className="tc-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="tc-body">
                <span className="tc-title">{t.title}</span>
                {note?.summary && <span className="tc-summary">{note.summary}</span>}
                {!note && links.length > 0 && (
                  <span className="tc-summary">Covered in {links.map((l) => `${l.ws} ${l.badge}`).filter((x, j, a) => a.indexOf(x) === j).join(', ')}</span>
                )}
              </span>
              <span className="tc-meta">
                <span className={`pchip p-${t.p}`}>{t.p}</span>
                {note ? (
                  <span className="meta-dim">{questionCount(note)} Qs</span>
                ) : links.length ? (
                  <span className="meta-dim">↗ {links.length}</span>
                ) : (
                  <em className="soon-pill">not written</em>
                )}
              </span>
            </MaybeLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
