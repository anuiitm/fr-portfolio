import { useSyncExternalStore } from 'react';

// Hash routing: works on any static host (GitHub Pages has no SPA fallback)
// and needs no router dependency for a handful of flat routes.
function subscribe(cb) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

const current = () => window.location.hash.slice(1) || '/checklists';

export function useRoute() {
  const path = useSyncExternalStore(subscribe, current);
  const [, page = 'checklists', id, sub] = path.split('/');
  return { path, page, id: id ? decodeURIComponent(id) : null, sub: sub ?? null };
}

export function navigate(path) {
  window.location.hash = path;
}
