import Link from 'next/link';
import MaybeLink from '@/components/MaybeLink';
import { notFound } from 'next/navigation';
import Inline from '@/components/Inline';
import SubjectProgress from '@/components/SubjectProgress';
import { getNote, getSubject, readingMinutes, subjectStatus, subjects } from '@/lib/content';

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { subject } = await params;
  const s = getSubject(subject);
  return { title: s ? `${s.no} ${s.title}` : 'Not found' };
}

export default async function SubjectPage({ params }) {
  const { subject: sid } = await params;
  const subject = getSubject(sid);
  if (!subject) notFound();
  const status = subjectStatus(subject);
  const parts = Object.fromEntries((subject.parts || []).map((p) => [p.from, p.label]));
  const counts = { P1: 0, P2: 0, P3: 0 };
  subject.topics.forEach((t) => counts[t.p]++);
  const minutes = subject.topics.reduce((n, t) => {
    const note = getNote(sid, t.id);
    return n + (note ? readingMinutes(note) : 0);
  }, 0);

  return (
    <div className="subject-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="crumb-now">{subject.no}</span>
      </nav>
      <header className="subject-hero">
        <div className="subject-hero-no">{subject.no}</div>
        <div>
          <h1>{subject.title}</h1>
          {subject.blurb && <p className="subject-blurb">{subject.blurb}</p>}
          <div className="subject-stats">
            <span>
              <b>{subject.topics.length}</b> topics
            </span>
            <span>
              <b className="p-text-P1">{counts.P1}</b> P1, <b className="p-text-P2">{counts.P2}</b> P2,{' '}
              <b className="p-text-P3">{counts.P3}</b> P3
            </span>
            {status.isReady ? (
              <span>
                <b>{minutes}</b> min of reading
              </span>
            ) : (
              <span className="soon-pill big">Notes coming soon</span>
            )}
          </div>
          {status.isReady && <SubjectProgress subject={sid} topicIds={subject.topics.map((t) => t.id)} />}
        </div>
      </header>

      <ol className="topic-cards">
        {subject.topics.map((t, i) => {
          const note = getNote(sid, t.id);
          return (
            <li key={t.id} className={parts[t.id] ? 'has-part' : ''}>
              {parts[t.id] && <div className="part-label">{parts[t.id]}</div>}
              <MaybeLink ready={Boolean(note)} href={`/notes/${sid}/${t.id}`} className={`topic-card ${note ? '' : 'is-soon'}`}>
                <span className="tc-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="tc-body">
                  <span className="tc-title">{t.title}</span>
                  {note?.summary && (
                    <span className="tc-summary">
                      <Inline text={note.summary} />
                    </span>
                  )}
                </span>
                <span className="tc-meta">
                  <span className={`pchip p-${t.p}`}>{t.p}</span>
                  {note ? <span className="meta-dim">{readingMinutes(note)} min</span> : <em className="soon-pill">soon</em>}
                </span>
              </MaybeLink>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
