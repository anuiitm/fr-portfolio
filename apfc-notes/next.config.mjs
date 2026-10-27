/** @type {import('next').NextConfig} */
// Static export: every page is pre-rendered at build time, so the site runs
// from any static host. BASE_PATH is set when it is served from a sub-folder.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};

export default nextConfig;
