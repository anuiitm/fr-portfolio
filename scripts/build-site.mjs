// Builds every project and assembles one static site in ./site:
//
//   site/index.html            the portfolio
//   site/<project>/index.html  each demo
//
// SITE_BASE is the path the site is served from: '' for <user>.github.io,
// '/frontend-portfolio' for a project page. Only the Next.js app needs it;
// the Vite apps build with relative paths and work anywhere.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'site');
const base = process.env.SITE_BASE ?? '';

const VITE = ['bluestone-insights', 'pettry-admin', 'veridoc-admin', 'resume-builder', 'naviable'];
const STATIC = { 'spend-calendar': ['index.html', 'css', 'js'], instimess: ['index.html', 'style.css', 'app.js', 'menu-data.js'], 'ipo-forensics': ['index.html', 'styles.css', 'js', 'data'] };

const run = (cmd, cwd = root, env = {}) => {
  console.log(`\n$ ${cmd}${cwd === root ? '' : `   (in ${cwd.replace(root, '')})`}`);
  execSync(cmd, { cwd, stdio: 'inherit', env: { ...process.env, ...env } });
};

rmSync(out, { recursive: true, force: true });
mkdirSync(out);

for (const name of VITE) {
  run(`npm run build -w ${name}`);
  cpSync(join(root, name, 'dist'), join(out, name), { recursive: true });
}

const apfc = join(root, 'apfc-notes');
if (!existsSync(join(apfc, 'node_modules'))) run('npm ci', apfc);
run('npm run build', apfc, { BASE_PATH: `${base}/apfc-notes` });
cpSync(join(apfc, 'out'), join(out, 'apfc-notes'), { recursive: true });

for (const [name, files] of Object.entries(STATIC)) {
  for (const f of files) cpSync(join(root, name, f), join(out, name, f), { recursive: true });
}

for (const f of ['index.html', 'styles.css', 'app.js', 'img', 'fonts']) cpSync(join(root, 'portfolio', f), join(out, f), { recursive: true });

// "Source" buttons carry data-source="<folder>". Point them at the repository
// this site is built from; without one (a local build), show them disabled
// rather than ship dead links.
const repo = sourceRepo();
const page = join(out, 'index.html');
writeFileSync(
  page,
  readFileSync(page, 'utf8').replace(/<a ([^>]*?)data-source="([^"]+)" href="[^"]*">([\s\S]*?)<\/a>/g, (_, attrs, folder, label) =>
    repo
      ? `<a ${attrs}href="${repo}/tree/main/${folder}">${label}</a>`
      : `<span ${attrs.replace('class="', 'class="is-disabled ')}aria-disabled="true" title="Links to GitHub once the site is published">${label}</span>`,
  ),
);
console.log(repo ? `\nSource links point to ${repo}` : '\nNo repository found: Source buttons are shown disabled. Set SOURCE_REPO=https://github.com/<user>/<repo> to link them.');

function sourceRepo() {
  if (process.env.SOURCE_REPO) return process.env.SOURCE_REPO.replace(/\/$/, '');
  if (process.env.GITHUB_REPOSITORY) return `https://github.com/${process.env.GITHUB_REPOSITORY}`;
  try {
    const url = execSync('git remote get-url origin', { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    const m = url.match(/github\.com[:/](.+?)(\.git)?$/);
    if (m) return `https://github.com/${m[1]}`;
  } catch {
    /* A source archive may not contain Git metadata. */
  }
  const { repository } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
  const url = typeof repository === 'string' ? repository : repository?.url;
  const match = url?.match(/github\.com[:/](.+?)(\.git)?$/);
  return match ? `https://github.com/${match[1]}` : '';
}

console.log(`\nDone. Preview with: npx serve site${base ? `  (the APFC demo expects to live under ${base}/)` : ''}`);
