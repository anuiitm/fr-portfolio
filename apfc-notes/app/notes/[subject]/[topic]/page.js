import Link from 'next/link';
import { notFound } from 'next/navigation';
import Blocks from '@/components/Blocks';
import Inline from '@/components/Inline';
import { ReadingProgress, Toc, TopicActions, TopicNotes } from '@/components/TopicTools';
import { getNote, getSubject, headingsOf, neighbours, readingMinutes, subjects } from '@/lib/content';

export function generateStaticParams() {
  return subjects.flatMap((s) => s.topics.filter((t) => getNote(s.id, t.id)).map((t) => ({ subject: s.id, topic: t.id })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { subject, topic } = await params;
  const s = getSubject(subject);
  const t = s?.topics.find((x) => x.id === topic);
  return { title: t ? `${s.no} ${t.title}` : 'Not found' };
}

export default async function TopicPage({ params }) {
  const { subject: sid, topic: tid } = await params;
  const subject = getSubject(sid);
  const topic = subject?.topics.find((t) => t.id === tid);
  if (!topic) notFound();

  const note = getNote(sid, tid);
  const { prev, next } = neighbours(sid, tid);
  const index = subject.topics.findIndex((t) => t.id === tid) + 1;

  return (
    <div className="topic">
      <ReadingProgress />
      <div className="topic-grid">
        <article className="topic-main">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={`/notes/${sid}`}>
              {subject.no} {subject.short}
            </Link>
            <span>/</span>
            <span className="crumb-now">
              Topic {index} of {subject.topics.length}
            </span>
          </nav>

          <header className="topic-head">
            <div className="subject-kicker">
              <span className="kicker-no">{subject.no}</span>
              {subject.title}
            </div>
            <h1 className="topic-title">{topic.title}</h1>
            <div className="topic-meta">
              <span className={`pchip p-${topic.p}`}>{topic.p}</span>
              {note && <span className="meta-dim">{readingMinutes(note)} min read</span>}
            </div>
            {note && <TopicActions subject={sid} topic={tid} />}
          </header>

          {note ? (
            <>
              {note.summary && (
                <div className="tldr">
                  <span className="tldr-label">In one line</span>
                  <p>
                    <Inline text={note.summary} />
                  </p>
                </div>
              )}
              <div className="note-body">
                <Blocks blocks={note.blocks} noteKey={`${sid}/${tid}`} />
              </div>
            </>
          ) : (
            <ComingSoon subject={subject} topic={topic} />
          )}

          <nav className="pager" aria-label="Topic navigation">
            {prev ? (
              <Link href={`/notes/${sid}/${prev.id}`} className="pager-card" data-nav="prev">
                <span>← Previous</span>
                <b>{prev.title}</b>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/notes/${sid}/${next.id}`} className="pager-card next" data-nav="next">
                <span>Next →</span>
                <b>{next.title}</b>
              </Link>
            ) : (
              <Link href={`/notes/${sid}`} className="pager-card next">
                <span>Finished</span>
                <b>Back to {subject.no} overview</b>
              </Link>
            )}
          </nav>
        </article>
        <aside className="topic-rail">
          <div className="rail-sticky">
            {note && <Toc items={headingsOf(note)} />}
            <TopicNotes key={`${sid}/${tid}`} subject={sid} topic={tid} />
          </div>
        </aside>
      </div>
    </div>
  );
}

function ComingSoon({ subject, topic }) {
  return (
    <div className="soon">
      <div className="soon-orb" aria-hidden />
      <span className="soon-tag">Coming soon</span>
      <h2>These notes are being written</h2>
      <p>
        This topic is on the syllabus checklist under <b>{subject.no} {subject.title}</b>. Notes are being added
        section by section; use the <b>Notes ready</b> filter in the sidebar to see every finished topic.
      </p>
      <div className="soon-meta">
        <div>
          <span>Priority</span>
          <b className={`p-text-${topic.p}`}>{topic.p}</b>
        </div>
      </div>
      <Link href="/notes/7c/epf-under-code" className="cta">
        Read a finished topic: EPF under the Code →
      </Link>
    </div>
  );
}
