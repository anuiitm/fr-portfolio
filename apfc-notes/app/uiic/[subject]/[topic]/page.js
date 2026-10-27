import Link from 'next/link';
import { notFound } from 'next/navigation';
import Quiz from '@/components/Quiz';
import { ReadingProgress, Toc, TopicActions, TopicNotes } from '@/components/TopicTools';
import { getSubject, neighbours, questionCount, readingMinutes, storeSubject, subjects, topicStatus, uiicTree } from '@/lib/uiic';

export function generateStaticParams() {
  return uiicTree().flatMap((sec) => sec.subjects.flatMap((s) => s.topics.filter((t) => t.ready).map((t) => ({ subject: s.id, topic: t.id }))));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { subject, topic } = await params;
  const s = getSubject(subject);
  const t = s?.topics.find((x) => x.id === topic);
  return { title: { absolute: t ? `${s.no} ${t.title} – UIIC Notes` : 'Not found' } };
}

const SECTION = {
  tricks: { id: 'shortcuts-and-tricks', text: 'Shortcuts and tricks' },
  practice: { id: 'practice-questions', text: 'Practice questions' },
  pyq: { id: 'past-year-style-questions', text: 'Past-year style questions' },
  links: { id: 'related-notes', text: 'Related notes' },
};

function H2({ s }) {
  return (
    <div className="blk blk-h2">
      <h2 className="n-h2" id={s.id}>
        <a href={`#${s.id}`} className="n-anchor" aria-hidden>
          #
        </a>
        {s.text}
      </h2>
    </div>
  );
}

function LinkCards({ links }) {
  return (
    <div className="xlinks">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="xlink">
          <span className="xlink-kicker">
            {l.ws}: {l.badge} {l.subject}
          </span>
          <b>{l.title}</b>
        </Link>
      ))}
    </div>
  );
}

export default async function UiicTopicPage({ params }) {
  const { subject: sid, topic: tid } = await params;
  const subject = getSubject(sid);
  const topic = subject?.topics.find((t) => t.id === tid);
  if (!topic) notFound();

  const { note, links, ready } = topicStatus(sid, topic);
  const { prev, next } = neighbours(sid, tid);
  const index = subject.topics.findIndex((t) => t.id === tid) + 1;
  const skey = storeSubject(sid);

  const toc = note
    ? [
        ...note.heads,
        ...(note.tricks.length ? [SECTION.tricks] : []),
        ...(note.practice.length ? [SECTION.practice] : []),
        ...(note.pyq.length ? [SECTION.pyq] : []),
        ...(links.length ? [SECTION.links] : []),
      ]
    : [];

  return (
    <div className="topic">
      <ReadingProgress />
      <div className="topic-grid">
        <article className="topic-main">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/uiic">UIIC</Link>
            <span>/</span>
            <Link href={`/uiic/${sid}`}>
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
              {note && <span className="meta-dim">{questionCount(note)} questions</span>}
            </div>
            {ready && <TopicActions subject={skey} topic={tid} ws="uiic" />}
          </header>

          {note && (
            <>
              {note.summary && (
                <div className="tldr">
                  <span className="tldr-label">In one line</span>
                  <p>{note.summary}</p>
                </div>
              )}
              <div className="note-body">
                <div className="html-note" dangerouslySetInnerHTML={{ __html: note.theory }} />

                {note.tricks.length > 0 && (
                  <>
                    <H2 s={SECTION.tricks} />
                    {note.tricks.map((t, i) => (
                      <div className="blk" key={i}>
                        <aside className="n-callout k-mnemonic">
                          <div className="n-callout-head">
                            <span className="n-callout-icon" aria-hidden>
                              ✎
                            </span>
                            <span>{t.title}</span>
                          </div>
                          <div className="html-note" dangerouslySetInnerHTML={{ __html: t.html }} />
                          {t.example && <div className="html-note trick-example" dangerouslySetInnerHTML={{ __html: t.example }} />}
                        </aside>
                      </div>
                    ))}
                  </>
                )}

                {note.practice.length > 0 && (
                  <>
                    <H2 s={SECTION.practice} />
                    <div className="blk">
                      <Quiz
                        html
                        items={note.practice}
                        storeKey={`${skey}/${tid}#practice`}
                        kicker="Practice"
                        title={`${note.practice.length} prelims-level questions`}
                      />
                    </div>
                  </>
                )}

                {note.pyq.length > 0 && (
                  <>
                    <H2 s={SECTION.pyq} />
                    <div className="blk">
                      <aside className="n-callout k-verify">
                        <div className="n-callout-head">
                          <span className="n-callout-icon" aria-hidden>
                            ↻
                          </span>
                          <span>About these questions</span>
                        </div>
                        <p>
                          Marked as previous-year in the source. Most are memory-based or drawn from other bank and
                          insurance exams, so treat the years as indicative of level, not as official papers.
                        </p>
                      </aside>
                    </div>
                    <div className="blk">
                      <Quiz
                        html
                        items={note.pyq}
                        storeKey={`${skey}/${tid}#pyq`}
                        kicker="Previous-year style"
                        title={`${note.pyq.length} questions`}
                      />
                    </div>
                  </>
                )}

                {links.length > 0 && (
                  <>
                    <H2 s={SECTION.links} />
                    <div className="blk">
                      <LinkCards links={links} />
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          {!note && links.length > 0 && (
            <div className="note-body">
              <div className="tldr">
                <span className="tldr-label">Where to study this</span>
                <p>
                  There is no separate UIIC note for this topic: the notes below already cover it. Mark it done here
                  once you have read them.
                </p>
              </div>
              <div className="blk">
                <LinkCards links={links} />
              </div>
            </div>
          )}

          {!ready && (
            <div className="soon">
              <div className="soon-orb" aria-hidden />
              <span className="soon-tag">Not written yet</span>
              <h2>No notes for this topic yet</h2>
              <p>
                This is on the UIIC syllabus under <b>{subject.no} {subject.title}</b>, but neither the UIIC nor the
                APFC notes cover it yet.
              </p>
              <div className="soon-meta">
                <div>
                  <span>Priority</span>
                  <b className={`p-text-${topic.p}`}>{topic.p}</b>
                </div>
              </div>
            </div>
          )}

          <nav className="pager" aria-label="Topic navigation">
            {prev ? (
              <Link href={`/uiic/${sid}/${prev.id}`} className="pager-card" data-nav="prev">
                <span>← Previous</span>
                <b>{prev.title}</b>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/uiic/${sid}/${next.id}`} className="pager-card next" data-nav="next">
                <span>Next →</span>
                <b>{next.title}</b>
              </Link>
            ) : (
              <Link href={`/uiic/${sid}`} className="pager-card next">
                <span>Finished</span>
                <b>Back to {subject.no} overview</b>
              </Link>
            )}
          </nav>
        </article>
        <aside className="topic-rail">
          <div className="rail-sticky">
            {note && <Toc items={toc} />}
            <TopicNotes key={`${skey}/${tid}`} subject={skey} topic={tid} />
          </div>
        </aside>
      </div>
    </div>
  );
}
