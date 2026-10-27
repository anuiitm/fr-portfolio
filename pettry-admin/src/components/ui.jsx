import { useEffect, useId, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toastDismissed } from '../store/content';

// One small inline icon set (24×24, stroked) instead of a 100 KB icon font.
const PATHS = {
  home: 'M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10',
  orders: 'M4 7.5 12 3l8 4.5v9L12 21l-8-4.5zM4 7.5l8 4.5 8-4.5M12 12v9',
  products: 'M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01',
  inventory: 'M3 9h18M3 9l2-5h14l2 5M3 9v11h18V9M9 13h6',
  promo: 'M3 8a2 2 0 0 0 0 4v0a2 2 0 0 1 0 4v2h18v-2a2 2 0 0 1 0-4 2 2 0 0 0 0-4V6H3zM14 6v12',
  customers: 'M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.3M15.5 4.2a3.5 3.5 0 0 1 0 6.6',
  analytics: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  faq: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5h.01',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-3.5-3.5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  plus: 'M12 5v14M5 12h14',
  download: 'M12 4v11M7 10l5 5 5-5M5 20h14',
  up: 'M6 15l6-6 6 6',
  down: 'M6 9l6 6 6-6',
  truck: 'M3 6h11v10H3zM14 10h4l3 3v3h-7M7.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  bell: 'M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16zM10 21h4',
  logout: 'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h11',
  paw: 'M8.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM15.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 13c-3 0-5 3-5 5a2 2 0 0 0 2 2c1 0 2-.5 3-.5s2 .5 3 .5a2 2 0 0 0 2-2c0-2-2-5-5-5z',
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

export const STATUS_TONE = { processing: 'warn', shipped: 'info', delivered: 'ok', cancelled: 'neutral', pending: 'warn', paid: 'ok', refunded: 'neutral' };

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
      <Icon name="paw" size={28} />
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
