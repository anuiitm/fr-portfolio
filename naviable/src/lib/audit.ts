import { contrast, type RGB } from './color';

export type Issue = { id: string; severity: 'error' | 'warning'; rule: string; message: string; fix: string; el: Element };

const parseRgb = (s: string): RGB | null => {
  const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
  if (!m || (m[4] !== undefined && Number(m[4]) === 0)) return null;
  return [Number(m[1]), Number(m[2]), Number(m[3])];
};

// Walk up until a non-transparent background is found.
function backgroundOf(el: Element): RGB {
  for (let n: Element | null = el; n; n = n.parentElement) {
    const c = parseRgb(getComputedStyle(n).backgroundColor);
    if (c) return c;
  }
  return [255, 255, 255];
}

const nameOf = (el: Element) => (el.getAttribute('aria-label') || el.textContent || '').trim();

// A subset of WCAG checks that can be decided from the DOM alone. Same rules
// as the original browser extension, plus contrast and link-text checks.
export function audit(root: Element): Issue[] {
  const issues: Issue[] = [];
  const add = (severity: Issue['severity'], rule: string, el: Element, message: string, fix: string) =>
    issues.push({ id: `${rule}-${issues.length}`, severity, rule, message, fix, el });

  let prev = 0;
  root.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((h) => {
    const level = Number(h.tagName[1]);
    if (prev && level - prev > 1) add('warning', 'Heading order', h, `Jumps from h${prev} to h${level}: “${nameOf(h).slice(0, 40)}”`, `Use h${prev + 1}, or style the heading with CSS instead.`);
    prev = level;
  });

  root.querySelectorAll('img').forEach((img) => {
    if (!img.hasAttribute('alt')) add('error', 'Image text', img, 'Image has no alt attribute, so screen readers read the file name.', 'Describe the image in alt, or use alt="" if it is decorative.');
  });

  root.querySelectorAll('input, select, textarea').forEach((input) => {
    const id = input.id;
    const labelled = (id && root.querySelector(`label[for="${id}"]`)) || input.closest('label') || input.getAttribute('aria-label') || input.getAttribute('aria-labelledby');
    if (!labelled) add('error', 'Form label', input, `A ${input.tagName.toLowerCase()} has no label.`, 'Add a <label for> or aria-label. A placeholder is not a label.');
  });

  root.querySelectorAll('a, button').forEach((el) => {
    const name = nameOf(el).toLowerCase();
    if (!/[a-z0-9]/i.test(name)) add('error', 'Control name', el, name ? `A ${el.tagName.toLowerCase()} is labelled only “${name}”, which screen readers can’t name.` : `A ${el.tagName.toLowerCase()} has no text or label.`, 'Give icon-only controls an aria-label.');
    else if (el.tagName === 'A' && ['click here', 'here', 'read more', 'more', 'link'].includes(name)) add('warning', 'Link text', el, `Link text “${name}” makes no sense out of context.`, 'Say where the link goes: “Read the fee schedule”.');
  });

  const seen = new Set<Element>();
  root.querySelectorAll('p, li, a, span, td, label, h1, h2, h3, h4, button').forEach((el) => {
    if (!el.textContent?.trim() || [...el.children].some((c) => seen.has(c))) return;
    const cs = getComputedStyle(el);
    const fg = parseRgb(cs.color);
    if (!fg) return;
    const ratio = contrast(fg, backgroundOf(el));
    const large = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && Number(cs.fontWeight) >= 700);
    if (ratio < (large ? 3 : 4.5)) {
      seen.add(el);
      add('error', 'Contrast', el, `Text contrast is ${ratio.toFixed(2)}:1; needs ${large ? '3' : '4.5'}:1.`, 'Darken the text or lighten the background. Try the colour tool.');
    }
  });

  return issues;
}
