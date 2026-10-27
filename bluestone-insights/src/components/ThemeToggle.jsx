import { useEffect, useState } from 'react';

const KEY = 'bs-theme';
const preference = matchMedia('(prefers-color-scheme: dark)');

function read() {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(read);
  const [systemDark, setSystemDark] = useState(preference.matches);
  const isDark = theme ? theme === 'dark' : systemDark;

  useEffect(() => {
    const update = (event) => setSystemDark(event.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
  }, [theme]);

  const toggle = () => {
    const next = isDark ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(KEY, next); } catch { /* Keep the choice for this visit. */ }
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      {isDark ? <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg> : <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>}
    </button>
  );
}
