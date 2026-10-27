// Top-level workspaces shown in the floating glass navbar. A workspace with a
// `nav` is a notes workspace with its own sidebar; `links` are pinned above its
// subject tree.

export const workspaces = [
  {
    id: 'apfc',
    label: 'APFC',
    href: '/',
    match: (p) => p === '/' || p.startsWith('/notes'),
    nav: { base: '/notes', home: '/', brand: 'APFC', mark: 'A', firstOpen: '7a', keyPrefix: '' },
  },
  {
    id: 'uiic',
    label: 'UIIC',
    href: '/uiic',
    nav: { base: '/uiic', home: '/uiic', brand: 'UIIC', mark: 'U', firstOpen: 'reasoning', keyPrefix: 'uiic:' },
  },
];

export function activeWorkspace(pathname = '/') {
  return workspaces.find((w) => w.match?.(pathname) || (!w.match && pathname.startsWith(w.href))) ?? workspaces[0];
}
