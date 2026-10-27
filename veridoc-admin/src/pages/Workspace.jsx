import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useRoute } from '../lib/router';
import { selectMe } from '../store';
import { STATUS, draftDiscarded, draftPublished, draftReviewed, draftSubmitted, statusOf } from '../store/products';
import { toastShown } from '../store/people';
import { diffSections, summarise } from '../lib/checklist';
import { ago } from '../lib/format';
import { Badge, Empty, Field, Icon, Modal } from '../components/ui';
import ChecklistTab from './workspace/ChecklistTab';
import DiffTable from './workspace/DiffTable';
import VersionsTab from './workspace/VersionsTab';
import PreviewTab from './workspace/PreviewTab';
import ImportTab from './workspace/ImportTab';

const TABS = [
  ['checklist', 'Checklist'],
  ['changes', 'Changes'],
  ['versions', 'Versions'],
  ['preview', 'Applicant view'],
  ['import', 'Import'],
];

export default function Workspace() {
  const { id, sub } = useRoute();
  const product = useSelector((s) => s.products.entities[id]);
  const users = useSelector((s) => s.users.entities);
  const tab = TABS.some(([k]) => k === sub) ? sub : 'checklist';

  if (!product) {
    return (
      <Empty title="No such loan product">
        <a href="#/checklists">Back to checklists</a>
      </Empty>
    );
  }

  const st = statusOf(product);
  const diff = product.draft ? diffSections(product.sections, product.draft.sections) : [];
  const c = summarise(diff);

  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="#/checklists">Checklists</a> <span aria-hidden="true">/</span> <span aria-current="page">{product.name}</span>
      </nav>
      <header className="ws-head">
        <div>
          <h1>{product.name}</h1>
          <p className="ws-meta">
            <Badge tone={STATUS[st].tone}>{STATUS[st].label}</Badge>
            <span className="muted">
              Live v{product.version}, published {ago(product.publishedAt)}
            </span>
          </p>
        </div>
        <Workflow product={product} changes={diff.length} />
      </header>

      {product.draft && (
        <p className={`draft-bar draft-${st}`}>
          <span>
            <b>{STATUS[st].label}.</b> {c.added} added, {c.modified} changed, {c.removed} removed compared with v{product.version}. Last edit by{' '}
            {users[product.draft.updatedBy]?.name} {ago(product.draft.updatedAt)}.
            {product.draft.reviewNote && st === 'draft' && <> Sent back: “{product.draft.reviewNote}”</>}
          </span>
          {tab !== 'changes' && <a href={`#/checklists/${id}/changes`}>See changes</a>}
        </p>
      )}

      <nav className="ws-tabs" aria-label="Workspace sections">
        {TABS.map(([k, label]) => (
          <a key={k} aria-current={tab === k ? 'page' : undefined} href={`#/checklists/${id}/${k}`}>
            {label}
            {k === 'changes' && diff.length > 0 && <span className="tab-count">{diff.length}</span>}
          </a>
        ))}
      </nav>

      <div>
        {tab === 'checklist' && <ChecklistTab product={product} />}
        {tab === 'changes' && (product.draft ? <DiffTable diff={diff} empty="The draft matches the live version." /> : <Empty title="No draft">Edit the checklist to start one. The live version stays untouched until a draft is published.</Empty>)}
        {tab === 'versions' && <VersionsTab product={product} />}
        {tab === 'preview' && <PreviewTab product={product} />}
        {tab === 'import' && <ImportTab product={product} />}
      </div>
    </>
  );
}

// The buttons a person sees depend on their role and where the draft is.
function Workflow({ product, changes }) {
  const me = useSelector(selectMe);
  const twoPerson = useSelector((s) => s.settings.twoPerson);
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState(null);
  const st = statusOf(product);
  const ownSubmission = product.draft?.submittedBy === me.id;

  const act = (action, msg, tone) => {
    dispatch(action);
    dispatch(toastShown(msg, tone));
    setDialog(null);
  };

  let buttons = null;
  if (me.role === 'maker' && st === 'draft') {
    buttons = (
      <>
        <button type="button" className="btn" onClick={() => setDialog('discard')}>
          Discard draft
        </button>
        <button type="button" className="btn btn-primary" disabled={!changes} onClick={() => setDialog('submit')} title={changes ? undefined : 'Nothing has changed yet'}>
          Submit for approval
        </button>
      </>
    );
  } else if (me.role === 'approver' && st === 'review') {
    const blocked = twoPerson && ownSubmission;
    buttons = (
      <>
        <button type="button" className="btn" disabled={blocked} onClick={() => setDialog('return')}>
          Send back
        </button>
        <button type="button" className="btn btn-primary" disabled={blocked} onClick={() => setDialog('approve')}>
          Approve
        </button>
        {blocked && <span className="hint">You submitted this. Another approver must review it.</span>}
      </>
    );
  } else if (me.role === 'applier' && st === 'approved') {
    buttons = (
      <button type="button" className="btn btn-primary" onClick={() => setDialog('publish')}>
        <Icon name="upload" /> Publish v{product.version + 1}
      </button>
    );
  } else {
    const waiting = { live: 'Edits start a draft.', draft: 'A maker is editing this draft.', review: 'Waiting for an approver.', approved: 'Approved. Waiting for an applier to publish.' }[st];
    buttons = <span className="hint">{waiting}</span>;
  }

  return (
    <div className="workflow">
      {buttons}
      <WorkflowDialog
        kind={dialog}
        product={product}
        onClose={() => setDialog(null)}
        onConfirm={(note) => {
          const base = { productId: product.id, userId: me.id };
          if (dialog === 'discard') act(draftDiscarded(base), 'Draft discarded', 'warn');
          if (dialog === 'submit') act(draftSubmitted({ ...base, note }), 'Sent for approval');
          if (dialog === 'approve') act(draftReviewed({ ...base, approve: true, note }), 'Approved');
          if (dialog === 'return') act(draftReviewed({ ...base, approve: false, note }), 'Sent back to the maker', 'warn');
          if (dialog === 'publish') {
            act(draftPublished(base), `${product.name} v${product.version + 1} is live`);
            navigate(`/checklists/${product.id}/versions`);
          }
        }}
      />
    </div>
  );
}

const DIALOGS = {
  discard: { title: 'Discard this draft?', body: 'All unpublished changes are lost. The live version is not affected.', confirm: 'Discard', danger: true },
  submit: { title: 'Submit for approval', body: 'An approver will review the changes. You can’t edit while it is in review.', confirm: 'Submit', note: 'What changed and why', noteRequired: false },
  approve: { title: 'Approve these changes', body: 'An applier will then publish them to the app.', confirm: 'Approve', note: 'Note for the record (optional)' },
  return: { title: 'Send back to the maker', body: 'The draft becomes editable again.', confirm: 'Send back', note: 'What needs to change', noteRequired: true },
  publish: { title: 'Publish to the app', body: 'Applicants will see the new checklist on their next visit. The current version stays in the history.', confirm: 'Publish' },
};

function WorkflowDialog({ kind, product, onClose, onConfirm }) {
  const [note, setNote] = useState('');
  const d = DIALOGS[kind];
  const blocked = d?.noteRequired && !note.trim();
  return (
    <Modal
      open={Boolean(kind)}
      title={d?.title}
      onClose={() => {
        setNote('');
        onClose();
      }}
      footer={
        d && (
          <>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className={`btn ${d.danger ? 'btn-danger' : 'btn-primary'}`}
              disabled={blocked}
              onClick={() => {
                onConfirm(note.trim());
                setNote('');
              }}
            >
              {d.confirm}
            </button>
          </>
        )
      }
    >
      {d && (
        <>
          <p>{d.body}</p>
          {d.note && (
            <Field label={d.note}>
              {(a) => <textarea {...a} rows={3} autoFocus value={note} onChange={(e) => setNote(e.target.value)} placeholder={kind === 'submit' ? product.draft?.note : ''} />}
            </Field>
          )}
        </>
      )}
    </Modal>
  );
}
