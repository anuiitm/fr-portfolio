// next.config.mjs sets basePath for builds served from a sub-folder; Next adds it
// to <Link> and assets, but not to fetch() calls. Use this for those.
export const withBase = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
