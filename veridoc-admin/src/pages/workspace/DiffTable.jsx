import { Badge, Empty } from '../../components/ui';

const LABEL = { title: 'Title', docType: 'Document class', required: 'Required', criteria: 'AI criteria', section: 'Section' };
const TONE = { added: 'ok', modified: 'warn', removed: 'bad' };
const show = (v) => (typeof v === 'boolean' ? (v ? 'Required' : 'Optional') : v || '—');

export default function DiffTable({ diff, empty = 'No differences.' }) {
  if (!diff.length) return <Empty title={empty} />;
  return (
    <div className="card card-flush">
      <ul className="diff">
        {diff.map((d) => (
          <li key={`${d.kind}-${d.title}`} className={`diff-${d.kind}`}>
            <div className="diff-head">
              <Badge tone={TONE[d.kind]}>{d.kind}</Badge>
              <b>{d.title}</b>
              <span className="muted small">{(d.after ?? d.before).section}</span>
            </div>
            {d.kind === 'modified' && (
              <dl className="diff-fields">
                {d.changed.map((f) => (
                  <div key={f}>
                    <dt>{LABEL[f]}</dt>
                    <dd>
                      <del>{show(d.before[f])}</del>
                      <ins>{show(d.after[f])}</ins>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            {d.kind === 'added' && (
              <p className="muted small">
                {d.after.docType}, {show(d.after.required)}
                {d.after.criteria && `. AI: ${d.after.criteria}`}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
