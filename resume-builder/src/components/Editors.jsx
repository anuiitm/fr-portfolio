import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  accentChosen,
  entryAdded,
  entryEdited,
  entryMoved,
  entryRemoved,
  entryToggled,
  personalEdited,
  sectionMoved,
  selectResume,
  summaryEdited,
  templateChosen,
} from '../store';
import { SECTION_LABELS } from '../data/sample';

const LABELS = {
  experience: { title: 'Role', org: 'Company', when: 'Dates', add: 'Add a role' },
  projects: { title: 'Project', org: 'Tech stack', when: 'Year', add: 'Add a project' },
  education: { title: 'Degree', org: 'Institution', when: 'Years', add: 'Add education' },
  skills: { title: 'Group', items: 'Skills, comma separated', add: 'Add a skill group' },
  achievements: { title: 'Achievement', add: 'Add an achievement' },
};

export function PersonalEditor() {
  const r = useSelector(selectResume);
  const dispatch = useDispatch();
  const field = (f, label, type = 'text') => (
    <label className="field">
      <span>{label}</span>
      <input type={type} value={r.personal[f]} onChange={(e) => dispatch(personalEdited({ field: f, value: e.target.value }))} />
    </label>
  );
  const words = r.summary.trim().split(/\s+/).filter(Boolean).length;
  return (
    <div className="editor">
      <div className="grid-2">
        {field('name', 'Full name')}
        {field('title', 'Headline')}
        {field('email', 'Email', 'email')}
        {field('phone', 'Phone', 'tel')}
        {field('location', 'Location')}
        {field('links', 'Links')}
      </div>
      <label className="field">
        <span>
          Summary <small className={words > 60 ? 'warn' : 'muted'}>{words} words, aim for 30–60</small>
        </span>
        <textarea rows={5} value={r.summary} onChange={(e) => dispatch(summaryEdited(e.target.value))} />
      </label>
      <p className="hint">Wrap words in **double asterisks** to make them bold.</p>
    </div>
  );
}

export function ListEditor({ section }) {
  const items = useSelector((s) => selectResume(s)[section]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(items[0]?.id ?? null);
  const L = LABELS[section];
  const edit = (id, field, value) => dispatch(entryEdited({ section, id, field, value }));

  return (
    <div className="editor">
      {section === 'projects' && <p className="hint">Untick projects to keep them out of this version of the resume. The JD match tool can pick them for you.</p>}
      <ol className="entries">
        {items.map((e, i) => (
          <li key={e.id} className={`entry${e.on ? '' : ' is-off'}`}>
            <div className="entry-head">
              <input type="checkbox" checked={e.on} onChange={() => dispatch(entryToggled({ section, id: e.id }))} aria-label={`Include ${e.title || 'entry'} in the resume`} />
              <button type="button" className="entry-title" aria-expanded={open === e.id} onClick={() => setOpen(open === e.id ? null : e.id)}>
                {e.title || <span className="muted">Untitled</span>}
                {e.org && <small>{e.org}</small>}
              </button>
              <span className="entry-actions">
                <button type="button" className="icon" aria-label="Move up" disabled={i === 0} onClick={() => dispatch(entryMoved({ section, from: i, to: i - 1 }))}>
                  ↑
                </button>
                <button type="button" className="icon" aria-label="Move down" disabled={i === items.length - 1} onClick={() => dispatch(entryMoved({ section, from: i, to: i + 1 }))}>
                  ↓
                </button>
                <button type="button" className="icon danger" aria-label={`Delete ${e.title || 'entry'}`} onClick={() => dispatch(entryRemoved({ section, id: e.id }))}>
                  ×
                </button>
              </span>
            </div>
            {open === e.id && (
              <div className="entry-body">
                <label className="field">
                  <span>{L.title}</span>
                  <input value={e.title} onChange={(ev) => edit(e.id, 'title', ev.target.value)} autoFocus={!e.title} />
                </label>
                {'org' in e && (
                  <div className="grid-2">
                    <label className="field">
                      <span>{L.org}</span>
                      <input value={e.org} onChange={(ev) => edit(e.id, 'org', ev.target.value)} />
                    </label>
                    <label className="field">
                      <span>{L.when}</span>
                      <input value={e.when} onChange={(ev) => edit(e.id, 'when', ev.target.value)} />
                    </label>
                  </div>
                )}
                {'items' in e && (
                  <label className="field">
                    <span>{L.items}</span>
                    <input value={e.items} onChange={(ev) => edit(e.id, 'items', ev.target.value)} />
                  </label>
                )}
                {'bullets' in e && (
                  <label className="field">
                    <span>Bullets, one per line</span>
                    <textarea rows={Math.max(3, e.bullets.length + 1)} value={e.bullets.join('\n')} onChange={(ev) => edit(e.id, 'bullets', ev.target.value.split('\n'))} />
                  </label>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="btn"
        onClick={() => {
          const action = entryAdded(section);
          dispatch(action);
          setOpen(action.payload.id);
        }}
      >
        + {L.add}
      </button>
    </div>
  );
}

const ACCENTS = ['#1f3a5f', '#2f5d50', '#6b2737', '#333333', '#5a3e8a'];

export function LayoutEditor() {
  const r = useSelector(selectResume);
  const dispatch = useDispatch();
  return (
    <div className="editor">
      <fieldset className="field">
        <legend>Template</legend>
        <div className="seg">
          {[
            ['classic', 'Classic, one column'],
            ['modern', 'Two columns'],
          ].map(([v, l]) => (
            <button key={v} type="button" aria-pressed={r.template === v} onClick={() => dispatch(templateChosen(v))}>
              {l}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className="field">
        <legend>Accent colour</legend>
        <div className="accents">
          {ACCENTS.map((c) => (
            <button key={c} type="button" className="accent" style={{ background: c }} aria-pressed={r.accent === c} aria-label={`Accent ${c}`} onClick={() => dispatch(accentChosen(c))} />
          ))}
        </div>
      </fieldset>
      <fieldset className="field">
        <legend>Section order</legend>
        <ol className="order">
          {r.order.map((id, i) => (
            <li key={id}>
              <span>{SECTION_LABELS[id]}</span>
              <button type="button" className="icon" aria-label={`Move ${SECTION_LABELS[id]} up`} disabled={i === 0} onClick={() => dispatch(sectionMoved({ from: i, to: i - 1 }))}>
                ↑
              </button>
              <button type="button" className="icon" aria-label={`Move ${SECTION_LABELS[id]} down`} disabled={i === r.order.length - 1} onClick={() => dispatch(sectionMoved({ from: i, to: i + 1 }))}>
                ↓
              </button>
            </li>
          ))}
        </ol>
      </fieldset>
    </div>
  );
}
