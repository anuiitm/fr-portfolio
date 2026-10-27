import { useEffect, useId, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toastDismissed } from '../store/people';

// One small inline icon set (24×24, stroked) instead of a 100 KB icon font.
const PATHS = {
  dashboard: 'M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z',
  checklist: 'M9 6h11M9 12h11M9 18h11M4.5 6l1 1 2-2M4.5 12l1 1 2-2M4.5 18l1 1 2-2',
  users: 'M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.3M15.5 4.2a3.5 3.5 0 0 1 0 6.6',
  audit: 'M8 4h8l4 4v12H4V4h4M14 4v4h4M8 13h8M8 17h5',
  settings: 'M4 7h10M18 7h2M4 17h4M12 17h8M14 4v6M8 14v6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  plus: 'M12 5v14M5 12h14',
  up: 'M6 15l6-6 6 6',
  down: 'M6 9l6 6 6-6',
  edit: 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  upload: 'M12 16V4M7 9l5-5 5 5M5 20h14',
  download: 'M12 4v11M7 10l5 5 5-5M5 20h14',
  shield: 'M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z',
  sparkle: 'M12 4v4M12 16v4M4 12h4M16 12h4',
  back: 'M15 6l-6 6 6 6',
  check: 'M5 12.5l4.5 4.5L19 7',
  file: 'M7 3h7l5 5v13H7zM14 3v5h5',
  history: 'M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4M12 8v4l3 2',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
};

export function Icon({ name, size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      <path d={PATHS[name]} />
    </svg>
  );
}

// Native <dialog>: focus trap, Esc and inert background come from the browser.
export function Modal({ open, title, onClose, children, footer, wide, side }) {
  const ref = useRef(null);
  const titleId = useId();
  useEffect(() => {
    const d = ref.current;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`modal${wide ? ' modal-wide' : ''}${side ? ' modal-side' : ''}`}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {open && (
        <div className="modal-inner">
          <header className="modal-head">
            <h2 id={titleId}>{title}</h2>
            <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
              <Icon name="close" />
            </button>
          </header>
          <div className="modal-body">{children}</div>
          {footer && <footer className="modal-foot">{footer}</footer>}
        </div>
      )}
    </dialog>
  );
}

export function Badge({ tone = 'neutral', children }) {
  const text = typeof children === 'string' ? children[0].toUpperCase() + children.slice(1) : children;
  return <span className={`badge badge-${tone}`}>{text}</span>;
}

export function PageHeader({ title, sub, children }) {
  return (
    <header className="page-head">
      <div>
        <h1>{title}</h1>
        {sub && <p className="muted">{sub}</p>}
      </div>
      {children && <div className="page-actions">{children}</div>}
    </header>
  );
}

export function Empty({ title, children }) {
  return (
    <div className="empty">
      <p className="empty-title">{title}</p>
      {children && <p className="muted">{children}</p>}
    </div>
  );
}

export function Field({ label, error, hint, children }) {
  const id = useId();
  const child = typeof children === 'function' ? children({ id, 'aria-invalid': Boolean(error), 'aria-describedby': error || hint ? `${id}-msg` : undefined }) : children;
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {child}
      {(error || hint) && (
        <small id={`${id}-msg`} className={error ? 'error' : 'muted'}>
          {error || hint}
        </small>
      )}
    </div>
  );
}

export function Tabs({ value, onChange, items, label }) {
  return (
    <div className="tabs" role="group" aria-label={label}>
      {items.map((it) => (
        <button key={it.value} type="button" aria-pressed={value === it.value} onClick={() => onChange(it.value)}>
          {it.label}
          {it.count !== undefined && <span className="tab-count">{it.count}</span>}
        </button>
      ))}
    </div>
  );
}

export function Toasts() {
  const toasts = useSelector((s) => s.toasts);
  const dispatch = useDispatch();
  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.tone}`}>
          <span>{t.text}</span>
          <button type="button" className="icon-btn" aria-label="Dismiss" onClick={() => dispatch(toastDismissed(t.id))}>
            <Icon name="close" size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
