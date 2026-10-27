import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '../lib/router';
import { actingAs, ROLES } from '../store/people';
import { productsSel, selectMe } from '../store';
import { Icon } from './ui';

const NAV = [
  ['dashboard', 'Dashboard', 'dashboard'],
  ['checklists', 'Checklists', 'checklist'],
  ['users', 'Users & roles', 'users'],
  ['audit', 'Audit log', 'audit'],
  ['settings', 'Settings', 'settings'],
];

// One demo user per role, so a visitor can walk a change from draft to live.
const PERSONAS = ['u1', 'u2', 'u3'];

export default function Shell({ children }) {
  const { page } = useRoute();
  const [open, setOpen] = useState(false);
  const me = useSelector(selectMe);
  const users = useSelector((s) => s.users.entities);
  const org = useSelector((s) => s.settings.org);
  const queue = useSelector((s) => myQueue(productsSel.selectAll(s), me).length);
  const dispatch = useDispatch();

  useEffect(() => setOpen(false), [page]);

  return (
    <div className={`shell${open ? ' nav-open' : ''}`}>
      <aside className="sidebar" aria-label="Main">
        <a className="brand" href="#/dashboard">
          <span className="brand-mark" aria-hidden="true">
            <Icon name="shield" size={18} />
          </span>
          <span>
            VeriDoc
            <small>{org}</small>
          </span>
        </a>
        <nav>
          {NAV.map(([id, label, icon]) => (
            <a key={id} href={`#/${id}`} aria-current={page === id ? 'page' : undefined}>
              <Icon name={icon} />
              <span>{label}</span>
              {id === 'dashboard' && queue > 0 && <span className="nav-badge">{queue}</span>}
            </a>
          ))}
        </nav>
        <div className="persona">
          <label htmlFor="persona">Acting as</label>
          <select id="persona" value={me.id} onChange={(e) => dispatch(actingAs(e.target.value))}>
            {PERSONAS.map((id) => (
              <option key={id} value={id}>
                {users[id].name.split(' ')[0]} ({ROLES[users[id].role].label})
              </option>
            ))}
          </select>
          <p>Switch roles to take a change from draft to live.</p>
        </div>
      </aside>
      <button type="button" className="scrim" aria-label="Close menu" tabIndex={-1} onClick={() => setOpen(false)} />
      <div className="main-col">
        <header className="topbar">
          <button type="button" className="icon-btn menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Icon name="menu" />
          </button>
          <span className="whoami">
            <span className="avatar" aria-hidden="true">
              {me.name
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
            {me.name} <span className="muted">({ROLES[me.role].label})</span>
          </span>
        </header>
        <main className="content" id="main" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}

// What is waiting on this person's role.
export function myQueue(products, me) {
  const wants = { maker: 'draft', approver: 'review', applier: 'approved' }[me.role];
  return products.filter((p) => p.draft?.status === wants);
}
