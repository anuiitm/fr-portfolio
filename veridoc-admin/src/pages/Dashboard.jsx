import { useSelector } from 'react-redux';
import { productsSel, selectMe } from '../store';
import { STATUS, statusOf } from '../store/products';
import { ROLES } from '../store/people';
import { aiCount, diffSections, pointCount, summarise } from '../lib/checklist';
import { ago } from '../lib/format';
import { Badge, Empty, PageHeader } from '../components/ui';
import { myQueue } from '../components/Shell';

const NEXT_STEP = { maker: 'Finish and submit these drafts', approver: 'Review these submissions', applier: 'Publish these approved changes' };

export default function Dashboard() {
  const products = useSelector(productsSel.selectAll);
  const me = useSelector(selectMe);
  const audit = useSelector((s) => s.audit).slice(0, 8);
  const users = useSelector((s) => s.users.entities);
  const queue = myQueue(products, me);

  const totalPoints = products.reduce((a, p) => a + pointCount(p.sections), 0);
  const withAi = products.reduce((a, p) => a + aiCount(p.sections), 0);
  const inFlight = products.filter((p) => p.draft).length;
  const lastPublish = products.reduce((a, p) => (p.publishedAt > a ? p.publishedAt : a), '');

  return (
    <>
      <PageHeader title="Dashboard" sub={`Signed in as ${me.name}, ${ROLES[me.role].label.toLowerCase()}.`} />
      <section className="stats">
        <Stat label="Loan products" value={products.length} note={`${totalPoints} live checklist points`} />
        <Stat label="AI review coverage" value={`${Math.round((withAi / totalPoints) * 100)}%`} note={`${withAi} points have AI criteria`} />
        <Stat label="Changes in progress" value={inFlight} note="drafts, reviews and approvals" />
        <Stat label="Last published" value={ago(lastPublish)} note={products.find((p) => p.publishedAt === lastPublish)?.name} />
      </section>

      <div className="grid-2">
        <section className="card">
          <h2 className="card-title">Waiting on you</h2>
          <p className="muted small">{NEXT_STEP[me.role]}.</p>
          {queue.length === 0 ? (
            <Empty title="Nothing waiting">Switch role in the sidebar to see another person’s queue.</Empty>
          ) : (
            <ul className="list">
              {queue.map((p) => {
                const c = summarise(diffSections(p.sections, p.draft.sections));
                return (
                  <li key={p.id}>
                    <a className="list-main" href={`#/checklists/${p.id}`}>
                      <b>{p.name}</b>
                      <span className="muted">
                        +{c.added} added, {c.modified} changed, −{c.removed} removed, {ago(p.draft.updatedAt)}
                      </span>
                    </a>
                    <Badge tone={STATUS[statusOf(p)].tone}>{STATUS[statusOf(p)].label}</Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section className="card">
          <h2 className="card-title">
            Recent activity <a href="#/audit">Full log</a>
          </h2>
          <ol className="activity">
            {audit.map((e) => (
              <li key={e.id}>
                <span>
                  <b>{users[e.userId]?.name ?? 'Someone'}</b> {e.detail.charAt(0).toLowerCase() + e.detail.slice(1)}
                  {e.productId && (
                    <>
                      {' '}
                      on <a href={`#/checklists/${e.productId}`}>{products.find((p) => p.id === e.productId)?.name}</a>
                    </>
                  )}
                </span>
                <time className="muted" dateTime={e.at}>
                  {ago(e.at)}
                </time>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}

function Stat({ label, value, note }) {
  return (
    <div className="stat">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      {note && <span className="muted small">{note}</span>}
    </div>
  );
}
