import { lazy, Suspense, useEffect, useSyncExternalStore } from 'react';
import Reader from './features/Reader';

// Each tool after the first is its own chunk, loaded when opened.
const Simplifier = lazy(() => import('./features/Simplifier'));
const Colours = lazy(() => import('./features/Colours'));
const Captions = lazy(() => import('./features/Captions'));

const TABS = [
  { id: 'reader', label: 'Page reader', title: 'Read any page your way', sub: 'Adjust text, contrast and spacing, use your voice, and check the page for problems.', Comp: Reader },
  { id: 'simplify', label: 'Plain language', title: 'Turn formal text into plain language', sub: 'Every change is listed, and the readability score updates as you type.', Comp: Simplifier },
  { id: 'colours', label: 'Colour check', title: 'Check colours before you ship them', sub: 'Contrast against WCAG, palettes from an image, and how it looks with colour-blindness.', Comp: Colours },
  { id: 'captions', label: 'Live captions', title: 'Caption anything you hear', sub: 'Speech to text in the browser, saved as a subtitle file.', Comp: Captions },
];

const subscribe = (cb: () => void) => {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
};
const current = () => window.location.hash.replace('#/', '') || 'reader';

export default function App() {
  const id = useSyncExternalStore(subscribe, current);
  const tab = TABS.find((t) => t.id === id) ?? TABS[0];

  useEffect(() => {
    document.title = `${tab.label} – NaviAble`;
  }, [tab]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="head">
        <div className="wrap head-inner">
          <a href="#/reader" className="logo">
            <span aria-hidden="true">◐</span> NaviAble
          </a>
          <nav aria-label="Tools">
            {TABS.map((t) => (
              <a key={t.id} href={`#/${t.id}`} aria-current={t.id === tab.id ? 'page' : undefined}>
                {t.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" className="wrap" tabIndex={-1}>
        <div className="intro">
          <h1>{tab.title}</h1>
          <p>{tab.sub}</p>
        </div>
        <Suspense fallback={<p className="muted">Loading…</p>}>
          <tab.Comp />
        </Suspense>
      </main>
      <footer className="foot wrap">
        <p>Everything here runs in your browser. Nothing you type, upload or say leaves this device.</p>
      </footer>
    </>
  );
}
