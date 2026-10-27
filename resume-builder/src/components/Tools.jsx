import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  STAGES,
  applicationAdded,
  applicationMoved,
  applicationRemoved,
  jdEdited,
  projectsPicked,
  resumeReplaced,
  selectResume,
  versionDeleted,
  versionSaved,
} from '../store';
import { coach, matchJd } from '../lib/analysis';
import { SECTION_LABELS } from '../data/sample';

const SAMPLE_JD = `Frontend Developer
• Develop responsive web applications with HTML5, CSS3 and JavaScript.
• Build components with React.js and Redux.
• Ensure cross-browser compatibility and mobile responsiveness.
• Work with Node.js and integrate backend REST APIs.
• Participate in code reviews, testing and debugging.
• Collaborate with designers in Figma.`;

export function JdMatch({ onEdit }) {
  const jd = useSelector((s) => s.jd);
  const resume = useSelector(selectResume);
  const dispatch = useDispatch();
  const result = useMemo(() => (jd.trim() ? matchJd(jd, resume) : null), [jd, resume]);
  const best = result?.projects.filter((p) => p.hits.length).slice(0, 3) ?? [];

  return (
    <div className="editor">
      <label className="field">
        <span>Job description</span>
        <textarea rows={8} value={jd} onChange={(e) => dispatch(jdEdited(e.target.value))} placeholder="Paste the job description here" />
      </label>
      {!jd.trim() && (
        <button type="button" className="btn" onClick={() => dispatch(jdEdited(SAMPLE_JD))}>
          Try a sample JD
        </button>
      )}
      {result && (
        <div className="match">
          <div className="meter" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={result.score} aria-label="Keyword match">
            <span style={{ width: `${result.score}%` }} />
          </div>
          <p>
            <b>{result.score}% keyword match</b> <span className="muted">({result.total} skills found in the JD)</span>
          </p>
          <h3>In your resume</h3>
          <p className="tags">{result.present.length ? result.present.map((t) => <span key={t} className="tag ok">{t}</span>) : <span className="muted">None yet</span>}</p>
          <h3>Missing</h3>
          <p className="tags">{result.missing.length ? result.missing.map((t) => <span key={t} className="tag miss">{t}</span>) : <span className="muted">Nothing missing</span>}</p>
          {result.missing.length > 0 && (
            <p className="hint">
              Only add a missing skill if you have used it. If you have,{' '}
              <button type="button" className="link" onClick={() => onEdit('skills')}>
                add it to Skills
              </button>{' '}
              or to a bullet that shows where you used it.
            </p>
          )}
          <h3>Best projects for this job</h3>
          {best.length ? (
            <>
              <ol className="plain-list">
                {best.map((p) => (
                  <li key={p.id}>
                    <b>{p.title}</b> <span className="muted">matches {p.hits.join(', ')}</span>
                  </li>
                ))}
              </ol>
              <button type="button" className="btn" onClick={() => dispatch(projectsPicked(best.map((p) => p.id)))}>
                Show only these projects
              </button>
            </>
          ) : (
            <p className="muted">No project mentions the JD’s skills.</p>
          )}
        </div>
      )}
    </div>
  );
}

export function BulletCoach({ onEdit }) {
  const r = useSelector(selectResume);
  const rows = ['experience', 'projects']
    .flatMap((section) => r[section].filter((e) => e.on).flatMap((e) => e.bullets.filter((b) => b.trim()).map((b) => ({ section, entry: e.title, text: b, ...coach(b) }))))
    .sort((a, b) => a.score - b.score);
  const strong = rows.filter((x) => !x.tips.length).length;

  return (
    <div className="editor">
      <p>
        <b>
          {strong} of {rows.length}
        </b>{' '}
        bullets have a strong verb, a number and a sensible length. Weakest first.
      </p>
      <ul className="coach">
        {rows.map((x, i) => (
          <li key={i} className={x.tips.length ? 'needs' : 'good'}>
            <p className="coach-text">{x.text.replace(/\*\*/g, '')}</p>
            <p className="muted small">
              {SECTION_LABELS[x.section]}, {x.entry}{' '}
              <button type="button" className="link" onClick={() => onEdit(x.section)}>
                Edit
              </button>
            </p>
            {x.tips.length > 0 && (
              <ul className="tips">
                {x.tips.map((t) => (
                  <li key={t.kind}>{t.msg}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Applications() {
  const apps = useSelector((s) => s.applications);
  const dispatch = useDispatch();
  const [f, setF] = useState({ company: '', role: '' });

  return (
    <div className="editor">
      <form
        className="app-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!f.company.trim() || !f.role.trim()) return;
          dispatch(applicationAdded({ company: f.company.trim(), role: f.role.trim() }));
          setF({ company: '', role: '' });
        }}
      >
        <input aria-label="Company" placeholder="Company" value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} />
        <input aria-label="Role" placeholder="Role" value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })} />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <div className="pipeline">
        {STAGES.map((stage) => {
          const list = apps.filter((a) => a.status === stage);
          return (
            <section key={stage} className="stage">
              <h3>
                {stage[0].toUpperCase() + stage.slice(1)} <span className="muted">{list.length}</span>
              </h3>
              {list.map((a) => (
                <div key={a.id} className="app-card">
                  <b>{a.company}</b>
                  <span className="small">{a.role}</span>
                  <span className="small muted">{a.date}</span>
                  <div className="app-actions">
                    <select aria-label={`Stage for ${a.company}`} value={a.status} onChange={(e) => dispatch(applicationMoved({ id: a.id, status: e.target.value }))}>
                      {STAGES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <button type="button" className="icon danger" aria-label={`Remove ${a.company}`} onClick={() => dispatch(applicationRemoved(a.id))}>
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export function Versions() {
  const versions = useSelector((s) => s.versions);
  const resume = useSelector(selectResume);
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');

  return (
    <div className="editor">
      <form
        className="app-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(versionSaved(label.trim() || `Version ${versions.length + 1}`, resume));
          setLabel('');
        }}
      >
        <input aria-label="Version name" placeholder="Name this version, e.g. Frontend, BlueStone" value={label} onChange={(e) => setLabel(e.target.value)} />
        <button type="submit" className="btn">
          Save current
        </button>
      </form>
      <p className="hint">Exporting a PDF also saves a version. Restoring can be undone.</p>
      {versions.length === 0 ? (
        <p className="muted">No saved versions yet.</p>
      ) : (
        <ul className="versions">
          {versions.map((v) => (
            <li key={v.id}>
              <span>
                <b>{v.label}</b>
                <small className="muted">{new Date(v.at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</small>
              </span>
              <button type="button" className="btn btn-sm" onClick={() => dispatch(resumeReplaced(v.snapshot))}>
                Restore
              </button>
              <button type="button" className="icon danger" aria-label={`Delete ${v.label}`} onClick={() => dispatch(versionDeleted(v.id))}>
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
