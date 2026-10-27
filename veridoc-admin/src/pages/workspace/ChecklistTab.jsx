import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMe } from '../../store';
import { pointDeleted, pointMoved, pointSaved, sectionAdded, sectionDeleted, statusOf } from '../../store/products';
import { toastShown } from '../../store/people';
import { CRITERIA_TEMPLATES, DOC_TYPES } from '../../data/seed';
import { Badge, Field, Icon, Modal } from '../../components/ui';

export default function ChecklistTab({ product }) {
  const me = useSelector(selectMe);
  const dispatch = useDispatch();
  const sections = product.draft?.sections ?? product.sections;
  const st = statusOf(product);
  const canEdit = me.role === 'maker' && (st === 'live' || st === 'draft');
  const [collapsed, setCollapsed] = useState({});
  const [editing, setEditing] = useState(null);
  const [newSection, setNewSection] = useState('');

  const base = { productId: product.id, userId: me.id };

  return (
    <>
      {!canEdit && (
        <p className="hint-bar">
          {me.role !== 'maker' ? 'Only checklist makers can edit. Switch to Arjun (maker) in the sidebar to try it.' : 'This draft is locked while it is in review.'}
        </p>
      )}
      {canEdit && (
        <div className="toolbar toolbar-end">
          <button type="button" className="btn btn-primary" onClick={() => setEditing({ sectionId: sections[0]?.id })}>
            <Icon name="plus" /> Add point
          </button>
        </div>
      )}

      <div className="sections">
        {sections.map((s) => {
          const open = !collapsed[s.id];
          return (
            <section key={s.id} className="card card-flush section">
              <header className="section-head">
                <button type="button" className="section-toggle" aria-expanded={open} onClick={() => setCollapsed({ ...collapsed, [s.id]: open })}>
                  <Icon name={open ? 'down' : 'up'} size={16} />
                  <h2>{s.name}</h2>
                  <span className="muted small">
                    {s.points.length} {s.points.length === 1 ? 'point' : 'points'}, {s.points.filter((p) => p.required).length} required
                  </span>
                </button>
                {canEdit && s.points.length === 0 && (
                  <button type="button" className="btn btn-sm" onClick={() => dispatch(sectionDeleted({ ...base, sectionId: s.id }))}>
                    Remove section
                  </button>
                )}
              </header>
              {open && (
                <ul className="points">
                  {s.points.length === 0 && <li className="muted small points-empty">No points yet.</li>}
                  {s.points.map((p, i) => (
                    <li key={p.id} className="point">
                      <div className="point-main">
                        <span className="point-title">
                          {p.title}
                          {p.criteria.trim() ? (
                            <span className="ai-tag" title={p.criteria}>
                              AI check
                            </span>
                          ) : (
                            <span className="ai-tag ai-off">Manual</span>
                          )}
                        </span>
                        <span className="muted small">
                          {p.docType}
                          {p.override && ', officer can override'}
                        </span>
                      </div>
                      <Badge tone={p.required ? 'bad' : 'neutral'}>{p.required ? 'Required' : 'Optional'}</Badge>
                      {canEdit && (
                        <span className="point-actions">
                          <button type="button" className="icon-btn" aria-label={`Move ${p.title} up`} disabled={i === 0} onClick={() => dispatch(pointMoved({ ...base, pointId: p.id, by: -1 }))}>
                            <Icon name="up" />
                          </button>
                          <button type="button" className="icon-btn" aria-label={`Move ${p.title} down`} disabled={i === s.points.length - 1} onClick={() => dispatch(pointMoved({ ...base, pointId: p.id, by: 1 }))}>
                            <Icon name="down" />
                          </button>
                          <button type="button" className="icon-btn" aria-label={`Edit ${p.title}`} onClick={() => setEditing({ sectionId: s.id, point: p })}>
                            <Icon name="edit" />
                          </button>
                          <button
                            type="button"
                            className="icon-btn danger"
                            aria-label={`Remove ${p.title}`}
                            onClick={() => {
                              dispatch(pointDeleted({ ...base, pointId: p.id }));
                              dispatch(toastShown(`Removed “${p.title}” from the draft`, 'warn'));
                            }}
                          >
                            <Icon name="trash" />
                          </button>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>

      {canEdit && (
        <form
          className="add-section"
          onSubmit={(e) => {
            e.preventDefault();
            const name = newSection.trim();
            if (!name || sections.some((s) => s.name.toLowerCase() === name.toLowerCase())) return;
            dispatch(sectionAdded({ ...base, name }));
            setNewSection('');
          }}
        >
          <input value={newSection} onChange={(e) => setNewSection(e.target.value)} placeholder="New section name, e.g. Co-applicant" aria-label="New section name" />
          <button type="submit" className="btn" disabled={!newSection.trim()}>
            Add section
          </button>
        </form>
      )}

      <Modal open={Boolean(editing)} title={editing?.point ? 'Edit checklist point' : 'New checklist point'} onClose={() => setEditing(null)} wide>
        {editing && (
          <PointForm
            key={editing.point?.id ?? 'new'}
            initial={editing}
            sections={sections}
            onCancel={() => setEditing(null)}
            onSave={(sectionId, point) => {
              dispatch(pointSaved({ ...base, sectionId, point }));
              dispatch(toastShown(editing.point ? `Saved “${point.title}”` : `Added “${point.title}” to the draft`));
              setEditing(null);
            }}
          />
        )}
      </Modal>
    </>
  );
}

// A controlled form: typing never loses state when other parts of the page re-render.
function PointForm({ initial, sections, onSave, onCancel }) {
  const p = initial.point;
  const [f, setF] = useState({
    sectionId: initial.sectionId,
    title: p?.title ?? '',
    docType: p?.docType ?? 'Government ID',
    required: p?.required ?? true,
    criteria: p?.criteria ?? '',
    override: p?.override ?? false,
  });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    const title = f.title.trim();
    if (title.length < 3) e.title = 'At least 3 characters.';
    else if (sections.some((s) => s.points.some((pt) => pt.id !== p?.id && pt.title.toLowerCase() === title.toLowerCase()))) e.title = 'This checklist already has a point with that name.';
    if (f.criteria.trim() && f.criteria.trim().length < 20) e.criteria = 'Describe what the AI should check in a full sentence, or leave it empty for manual review.';
    setErrors(e);
    if (Object.keys(e).length) return;
    onSave(f.sectionId, { ...(p ?? {}), title, docType: f.docType, required: f.required, criteria: f.criteria.trim(), override: f.override });
  };

  const template = CRITERIA_TEMPLATES[f.docType];

  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <fieldset className="span-all fs">
        <legend>What the applicant sees</legend>
        <div className="form-grid">
          <Field label="Document name" error={errors.title}>
            {(a) => <input {...a} autoFocus value={f.title} onChange={set('title')} placeholder="e.g. PAN card" />}
          </Field>
          <Field label="Section">
            {(a) => (
              <select {...a} value={f.sectionId} onChange={set('sectionId')}>
                {sections.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <div className="radio-row span-all" role="radiogroup" aria-label="Requirement">
            <label>
              <input type="radio" name="req" checked={f.required} onChange={() => setF({ ...f, required: true })} /> Required
            </label>
            <label>
              <input type="radio" name="req" checked={!f.required} onChange={() => setF({ ...f, required: false })} /> Optional
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className="span-all fs">
        <legend>How the AI checks it</legend>
        <div className="form-grid">
          <Field label="Expected document class">
            {(a) => (
              <select {...a} value={f.docType} onChange={set('docType')}>
                {DOC_TYPES.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            )}
          </Field>
          <label className="check align-end">
            <input type="checkbox" checked={f.override} onChange={set('override')} /> Loan officer can override the AI
          </label>
          <div className="span-all">
            <Field label="AI criteria" error={errors.criteria} hint="Leave empty to send this document to manual review.">
              {(a) => <textarea {...a} rows={4} value={f.criteria} onChange={set('criteria')} placeholder="What makes this document acceptable?" />}
            </Field>
            {template && f.criteria.trim() !== template && (
              <button type="button" className="link-btn" onClick={() => setF({ ...f, criteria: template })}>
                Start from the {f.docType.toLowerCase()} template
              </button>
            )}
          </div>
        </div>
      </fieldset>

      <div className="form-actions span-all">
        <button type="button" className="btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save to draft
        </button>
      </div>
    </form>
  );
}
