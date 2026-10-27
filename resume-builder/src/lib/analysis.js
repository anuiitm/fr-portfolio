// Local, explainable replacements for the Gemini calls in the original:
// keyword matching against a job description, and a rule-based bullet coach.

// Terms worth matching. Multi-word terms come first so "react native" wins over "react".
const TERMS = [
  'react native', 'redux toolkit', 'next.js', 'node.js', 'vue.js', 'react.js', 'type script', 'unit testing', 'code review', 'design system',
  'responsive design', 'cross-browser', 'web performance', 'rest api', 'graphql', 'accessibility', 'wcag', 'seo', 'ci/cd', 'figma',
  'react', 'redux', 'typescript', 'javascript', 'html5', 'html', 'css3', 'css', 'sass', 'tailwind', 'bootstrap', 'jquery', 'angular', 'vue',
  'svelte', 'node', 'express', 'webpack', 'vite', 'jest', 'vitest', 'cypress', 'playwright', 'git', 'docker', 'aws', 'firebase', 'mongodb',
  'sql', 'postgresql', 'python', 'java', 'testing', 'debugging', 'agile', 'scrum', 'ui/ux', 'ux', 'ui', 'performance', 'animation', 'gsap',
  'three.js', 'd3', 'charts', 'mobile', 'pwa', 'storybook', 'lighthouse', 'collaboration', 'communication',
];
const ALIASES = { 'react.js': 'react', reactjs: 'react', 'node.js': 'node', nodejs: 'node', 'vue.js': 'vue', html5: 'html', css3: 'css', 'type script': 'typescript', 'redux toolkit': 'redux' };
const canon = (t) => ALIASES[t] ?? t;

function findTerms(text) {
  const t = ` ${text.toLowerCase().replace(/[^a-z0-9.+/#\s-]/g, ' ')} `;
  const found = new Map();
  for (const term of TERMS) {
    const rx = new RegExp(`[\\s(,]${term.replace(/[.+/]/g, '\\$&')}(?=[\\s),.;:])`, 'g');
    const hits = t.match(rx)?.length ?? 0;
    if (hits) found.set(canon(term), (found.get(canon(term)) ?? 0) + hits);
  }
  return found;
}

export function resumeText(r) {
  const parts = [r.personal.title, r.summary];
  for (const s of ['experience', 'projects', 'education']) for (const e of r[s]) if (e.on) parts.push(e.title, e.org, ...(e.bullets ?? []));
  for (const s of r.skills) if (s.on) parts.push(s.items);
  for (const a of r.achievements) if (a.on) parts.push(a.title);
  return parts.join(' \n ');
}

export function matchJd(jd, resume) {
  const wanted = findTerms(jd);
  const have = findTerms(resumeText(resume));
  const terms = [...wanted.entries()].sort((a, b) => b[1] - a[1]);
  const present = terms.filter(([t]) => have.has(t)).map(([t]) => t);
  const missing = terms.filter(([t]) => !have.has(t)).map(([t]) => t);
  // Terms the JD repeats count more.
  const weight = (list) => list.reduce((a, t) => a + Math.min(3, wanted.get(t)), 0);
  const score = terms.length ? Math.round((weight(present) / weight(terms.map(([t]) => t))) * 100) : 0;

  // Projects ranked by how many JD terms each one mentions, including hidden ones.
  const projects = resume.projects
    .map((p) => {
      const t = findTerms([p.title, p.org, ...p.bullets].join(' '));
      const hits = [...t.keys()].filter((k) => wanted.has(k));
      return { id: p.id, title: p.title, on: p.on, hits };
    })
    .sort((a, b) => b.hits.length - a.hits.length);

  // Where a missing term could honestly go: a skills line already near it.
  return { score, present, missing, projects, total: terms.length };
}

/* ---------- bullet coach ---------- */
const WEAK = {
  'worked on': 'Built / Shipped', 'helped': 'Contributed to / Led', 'was responsible for': 'Owned / Ran', 'responsible for': 'Owned',
  'did': 'Delivered', 'made': 'Built / Designed', 'handled': 'Managed / Resolved', 'involved in': 'Drove / Delivered', 'assisted': 'Supported / Co-built',
  'participated in': 'Contributed to', 'tasked with': 'Delivered', 'got': 'Earned / Won',
};

export function coach(bullet) {
  const text = bullet.replace(/\*\*/g, '').trim();
  const lower = text.toLowerCase();
  const words = text.split(/\s+/).filter(Boolean).length;
  const tips = [];
  const weak = Object.keys(WEAK).find((w) => lower.startsWith(w));
  if (weak) tips.push({ kind: 'verb', msg: `Starts with “${weak}”. Try: ${WEAK[weak]}.` });
  if (!/\d/.test(text)) tips.push({ kind: 'metric', msg: 'No number. How many users, how much faster, what percentage?' });
  if (/\b(i|my|me|we|our)\b/i.test(text)) tips.push({ kind: 'person', msg: 'Drop “I/my/we”; resumes are written without pronouns.' });
  if (/\b(was|were|been|being)\s+\w+ed\b/i.test(text)) tips.push({ kind: 'passive', msg: 'Passive voice. Say who did it: you.' });
  if (words < 7) tips.push({ kind: 'short', msg: 'Very short. Add what you built and the result.' });
  if (words > 30) tips.push({ kind: 'long', msg: `${words} words. Aim for under 25; split into two bullets.` });
  return { tips, score: Math.max(0, 100 - tips.length * 25) };
}
