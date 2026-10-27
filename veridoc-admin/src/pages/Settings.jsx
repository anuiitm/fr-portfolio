import { useDispatch, useSelector } from 'react-redux';
import { demoReset } from '../store';
import { settingsSaved, toastShown } from '../store/people';
import { Field, PageHeader } from '../components/ui';

const MODELS = {
  strict: 'Strict: flag anything uncertain for manual review',
  balanced: 'Balanced: auto-accept clear matches',
  lenient: 'Lenient: accept unless clearly wrong',
};

// Each control saves on change; there is no separate Save step to forget.
export default function Settings() {
  const s = useSelector((st) => st.settings);
  const dispatch = useDispatch();
  const save = (patch) => dispatch(settingsSaved(patch));

  return (
    <>
      <PageHeader title="Settings" sub="Changes apply immediately." />
      <section className="card stack settings">
        <Field label="Organisation name">{(a) => <input {...a} value={s.org} onChange={(e) => save({ org: e.target.value })} onBlur={(e) => !e.target.value.trim() && save({ org: 'VeriDoc Finance' })} />}</Field>
        <label className="check">
          <input type="checkbox" checked={s.twoPerson} onChange={(e) => save({ twoPerson: e.target.checked })} />
          <span>
            <b>Two-person rule.</b> <span className="muted">Approvers can’t approve a draft they submitted themselves.</span>
          </span>
        </label>
        <Field label="AI review mode">
          {(a) => (
            <select {...a} value={s.model} onChange={(e) => save({ model: e.target.value })}>
              {Object.entries(MODELS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={`Minimum confidence to auto-accept: ${Math.round(s.confidence * 100)}%`} hint="Below this, the document goes to a loan officer.">
          {(a) => <input {...a} type="range" min="0.5" max="0.99" step="0.01" value={s.confidence} onChange={(e) => save({ confidence: Number(e.target.value) })} />}
        </Field>
        <Field label="Theme">
          {(a) => (
            <select {...a} value={s.theme} onChange={(e) => save({ theme: e.target.value })}>
              <option value="system">Match the system</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          )}
        </Field>
      </section>
      <section className="card stack settings">
        <h2 className="h-sm">Demo data</h2>
        <p className="muted">Everything you change is kept in this browser. Reset to start the walkthrough again.</p>
        <div>
          <button
            type="button"
            className="btn btn-danger-ghost"
            onClick={() => {
              if (window.confirm('Reset all demo data?')) {
                dispatch(demoReset());
                dispatch(toastShown('Demo data reset', 'warn'));
              }
            }}
          >
            Reset demo data
          </button>
        </div>
      </section>
    </>
  );
}
