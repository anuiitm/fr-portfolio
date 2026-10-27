import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../components/ui';

const ACCEPT = ['application/pdf', 'image/jpeg', 'image/png'];
const MAX_MB = 10;

// What an applicant would see. Uploads stay in the browser; the "check" is
// simulated from file type and size, which is all a front-end demo can honestly do.
export default function PreviewTab({ product }) {
  const sections = product.draft?.sections ?? product.sections;
  const [files, setFiles] = useState({});
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const required = sections.flatMap((s) => s.points.filter((p) => p.required));
  const done = required.filter((p) => files[p.id]?.state === 'ok').length;

  const pick = (point, file) => {
    if (!file) return;
    if (!ACCEPT.includes(file.type)) {
      setFiles((f) => ({ ...f, [point.id]: { name: file.name, state: 'bad', msg: 'Upload a PDF, JPG or PNG.' } }));
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setFiles((f) => ({ ...f, [point.id]: { name: file.name, state: 'bad', msg: `Files must be under ${MAX_MB} MB.` } }));
      return;
    }
    setFiles((f) => ({ ...f, [point.id]: { name: file.name, state: 'checking' } }));
    timers.current.push(
      setTimeout(() => {
        setFiles((f) => ({ ...f, [point.id]: { name: file.name, state: 'ok', msg: point.criteria ? `Read as ${point.docType.toLowerCase()}` : 'Sent for manual review' } }));
      }, 700),
    );
  };

  return (
    <div className="preview">
      <div className="phone">
        <header className="phone-head">
          <p className="muted small">Documents for</p>
          <h2>{product.name}</h2>
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={required.length} aria-valuenow={done} aria-label="Required documents uploaded">
            <span style={{ width: `${(done / Math.max(required.length, 1)) * 100}%` }} />
          </div>
          <p className="small">
            {done} of {required.length} required uploaded
          </p>
        </header>
        {sections.map((s) => (
          <section key={s.id} className="phone-section">
            <h3>{s.name}</h3>
            <ul>
              {s.points.map((p) => {
                const f = files[p.id];
                return (
                  <li key={p.id} className={`up up-${f?.state ?? 'empty'}`}>
                    <span className="up-text">
                      <b>
                        {p.title}
                        {!p.required && <span className="muted"> (optional)</span>}
                      </b>
                      <small>{f ? (f.state === 'checking' ? `Checking ${f.name}…` : `${f.name}: ${f.msg}`) : p.docType}</small>
                    </span>
                    <label className="btn btn-sm">
                      <Icon name={f?.state === 'ok' ? 'check' : 'upload'} size={14} />
                      {f ? 'Replace' : 'Upload'}
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="sr-only" onChange={(e) => pick(p, e.target.files[0])} />
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        <button type="button" className="btn btn-primary btn-block" disabled={done < required.length}>
          {done < required.length ? `Upload ${required.length - done} more to continue` : 'Continue to review'}
        </button>
      </div>
      <aside className="preview-note">
        <h2 className="h-sm">This is the {product.draft ? 'draft' : 'live'} checklist</h2>
        <p className="muted">Try uploading files. Wrong types and files over {MAX_MB} MB are rejected here, before any upload, which is where an applicant would want to hear it.</p>
      </aside>
    </div>
  );
}
