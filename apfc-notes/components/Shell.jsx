'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import CommandPalette from './CommandPalette';
import ShortcutsDialog from './ShortcutsDialog';
import GlassNav from './GlassNav';
import { activeWorkspace } from '@/lib/workspaces';
import { withBase } from '@/lib/base';
import { actions, useStore } from '@/lib/store';
import { GOTO_EVENT } from '@/lib/planDates';

let navPromise = null;
const loadNav = () => (navPromise ??= fetch(withBase('/nav.json')).then((r) => r.json()));
const NO_TREE = [];

export default function Shell({ children }) {
  const [trees, setTrees] = useState(null);
  useEffect(() => {
    loadNav().then(setTrees, () => setTrees({}));
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [palette, setPalette] = useState(false);
  const [help, setHelp] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { prefs } = useStore();
  const ws = activeWorkspace(pathname);
  const tree = trees?.[ws.id] ?? NO_TREE;

  // Apply viewer preferences to the document root.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.accent = prefs.accent;
    root.dataset.size = prefs.size;
    root.dataset.revise = prefs.revise ? 'on' : 'off';
  }, [prefs]);

  useEffect(() => setDrawer(false), [pathname]);

  // Picking a day in the plans sidebar stays on the page, so close the drawer then too.
  useEffect(() => {
    const close = () => setDrawer(false);
    window.addEventListener(GOTO_EVENT, close);
    return () => window.removeEventListener(GOTO_EVENT, close);
  }, []);

  const toggleSidebar = useCallback(() => {
    if (window.matchMedia('(max-width: 960px)').matches) setDrawer((d) => !d);
    else setCollapsed((c) => !c);
  }, []);

  useEffect(() => {
    function onKey(e) {
      const typing = /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette((p) => !p);
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === '/') {
        e.preventDefault();
        setPalette(true);
      } else if (e.key === '\\') {
        toggleSidebar();
      } else if (e.key === '?') {
        setHelp((h) => !h);
      } else if (e.key.toLowerCase() === 'r') {
        actions.setPref('revise', !prefs.revise);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const el = document.querySelector(e.key === 'ArrowLeft' ? '[data-nav="prev"]' : '[data-nav="next"]');
        if (el?.getAttribute('href')) router.push(el.getAttribute('href'));
      } else if (e.key.toLowerCase() === 'd') {
        document.querySelector('[data-action="done"]')?.click();
      } else if (e.key.toLowerCase() === 'b') {
        document.querySelector('[data-action="mark"]')?.click();
      } else if (e.key === 'Escape') {
        setDrawer(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prefs.revise, router, toggleSidebar]);

  return (
    <div className={`frame ${collapsed ? 'is-collapsed' : ''} ${drawer ? 'drawer-open' : ''}`}>
      <div className="scrim" onClick={() => setDrawer(false)} aria-hidden />
      <Sidebar
        key={ws.id}
        tree={tree}
        nav={ws.nav}
        collapsed={collapsed}
        onToggle={toggleSidebar}
        onSearch={() => setPalette(true)}
        onHelp={() => setHelp(true)}
      />
      <main className="stage">
        <div className="mobile-bar">
          <button className="icon-btn" onClick={toggleSidebar} aria-label="Open sidebar">
            <MenuIcon />
          </button>
          <span className="mobile-title">{`${ws.label} Notes`}</span>
          <button className="icon-btn" onClick={() => setPalette(true)} aria-label="Search">
            <SearchIcon />
          </button>
        </div>
        {collapsed && (
          <button className="reopen-btn" onClick={toggleSidebar} aria-label="Show subjects">
            <MenuIcon />
          </button>
        )}
        <GlassNav />
        {children}
      </main>
      {palette && <CommandPalette onClose={() => setPalette(false)} />}
      {help && <ShortcutsDialog onClose={() => setHelp(false)} />}
    </div>
  );
}

export function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

// Drawn rather than typed: the ✓ glyph sits off-centre in most fonts.
export function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
