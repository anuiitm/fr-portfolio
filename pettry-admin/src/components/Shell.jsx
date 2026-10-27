import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useRoute } from '../lib/router';
import { signedOut, themeChanged } from '../store/content';
import { customersSel, ordersSel, productsSel, selectDashboard } from '../store/selectors';
import { money } from '../lib/format';
import { Icon } from './ui';

const NAV = [
  ['dashboard', 'Dashboard', 'home'],
  ['orders', 'Orders', 'orders'],
  ['products', 'Products', 'products'],
  ['inventory', 'Inventory', 'inventory'],
  ['promos', 'Promo codes', 'promo'],
  ['customers', 'Customers', 'customers'],
  ['analytics', 'Analytics', 'analytics'],
  ['faq', 'FAQ', 'faq'],
  ['settings', 'Settings', 'settings'],
];

export default function Shell({ children }) {
  const { page } = useRoute();
  const [open, setOpen] = useState(false);
  const user = useSelector((s) => s.session.user);
  const storeName = useSelector((s) => s.settings.storeName);
  const { needsAction, lowStock } = useSelector(selectDashboard);
  const dispatch = useDispatch();

  useEffect(() => setOpen(false), [page]);

  const badge = { orders: needsAction.length, inventory: lowStock };

  return (
    <div className={`shell${open ? ' nav-open' : ''}`}>
      <aside className="sidebar" aria-label="Main">
        <a className="brand" href="#/dashboard">
          <Icon name="paw" size={22} />
          <span>
            {storeName} <small>admin</small>
          </span>
        </a>
        <nav>
          {NAV.map(([id, label, icon]) => (
            <a key={id} href={`#/${id}`} aria-current={page === id ? 'page' : undefined}>
              <Icon name={icon} />
              <span>{label}</span>
              {badge[id] > 0 && (
                <span className="nav-badge" aria-label={`${badge[id]} need attention`}>
                  {badge[id]}
                </span>
              )}
            </a>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="me">
            <span className="avatar" aria-hidden="true">
              {user.name[0]}
            </span>
            <span>
              {user.name}
              <small>{user.email}</small>
            </span>
          </div>
          <button type="button" className="icon-btn" onClick={() => dispatch(signedOut())} aria-label="Sign out" title="Sign out">
            <Icon name="logout" />
          </button>
        </div>
      </aside>
      <button type="button" className="scrim" aria-label="Close menu" tabIndex={-1} onClick={() => setOpen(false)} />

      <div className="main-col">
        <header className="topbar">
          <button type="button" className="icon-btn menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Icon name="menu" />
          </button>
          <GlobalSearch />
          <ThemeSwitch />
        </header>
        <main className="content" id="main" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}

function ThemeSwitch() {
  const theme = useSelector((s) => s.settings.theme);
  const dispatch = useDispatch();
  const next = { system: 'light', light: 'dark', dark: 'system' }[theme];
  return (
    <button type="button" className="chip" onClick={() => dispatch(themeChanged(next))} aria-label={`Theme: ${theme}. Switch to ${next}`}>
      {theme === 'dark' ? '☾ Dark' : theme === 'light' ? '☀ Light' : '◐ Auto'}
    </button>
  );
}

// Combobox over orders, products and customers. Arrow keys move, Enter opens.
function GlobalSearch() {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const orders = useSelector(ordersSel.selectAll);
  const products = useSelector(productsSel.selectAll);
  const customers = useSelector(customersSel.selectAll);
  const customerById = useSelector(customersSel.selectEntities);
  const box = useRef(null);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    const hit = (...fields) => fields.some((f) => f?.toLowerCase().includes(term));
    return [
      ...orders
        .filter((o) => hit(o.id, customerById[o.customerId]?.name))
        .slice(0, 4)
        .map((o) => ({ key: o.id, href: `#/orders/${o.id}`, title: o.id, meta: `${customerById[o.customerId]?.name}, ${money(o.total)}`, group: 'Order' })),
      ...products
        .filter((p) => hit(p.name, p.sku))
        .slice(0, 4)
        .map((p) => ({ key: p.id, href: `#/products/${p.id}`, title: p.name, meta: `${p.sku}, ${p.stock} in stock`, group: 'Product' })),
      ...customers
        .filter((c) => hit(c.name, c.email))
        .slice(0, 4)
        .map((c) => ({ key: c.id, href: `#/customers/${c.id}`, title: c.name, meta: c.email, group: 'Customer' })),
    ];
  }, [q, orders, products, customers, customerById]);

  const go = (r) => {
    navigate(r.href.slice(1));
    setQ('');
    setOpen(false);
  };

  const onKey = (e) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      go(results[active]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const showList = open && q.trim().length >= 2;

  return (
    <div className="gsearch" ref={box} onBlur={(e) => !box.current.contains(e.relatedTarget) && setOpen(false)}>
      <Icon name="search" />
      <input
        type="search"
        role="combobox"
        aria-expanded={showList}
        aria-controls="gsearch-list"
        aria-activedescendant={showList && results[active] ? `gs-${results[active].key}` : undefined}
        aria-label="Search orders, products and customers"
        placeholder="Search orders, products, customers"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKey}
      />
      {showList && (
        <ul id="gsearch-list" role="listbox" className="gsearch-list">
          {results.length === 0 && <li className="gs-empty">No matches for “{q}”</li>}
          {results.map((r, i) => (
            <li key={r.key} id={`gs-${r.key}`} role="option" aria-selected={i === active} onPointerDown={(e) => e.preventDefault()} onClick={() => go(r)}>
              <span className="gs-group">{r.group}</span>
              <span className="gs-title">{r.title}</span>
              <span className="gs-meta">{r.meta}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
