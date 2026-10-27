import { useSyncExternalStore } from 'react';

// Hash routing: works on any static host (GitHub Pages has no SPA fallback)
// and needs no router dependency for eleven flat routes.
function subscribe(cb) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

const current = () => window.location.hash.slice(1) || '/dashboard';

export function useRoute() {
  const path = useSyncExternalStore(subscribe, current);
  const [, page = 'dashboard', id] = path.split('/');
  return { path, page, id: id ? decodeURIComponent(id) : null };
}

export function navigate(path) {
  window.location.hash = path;
}
