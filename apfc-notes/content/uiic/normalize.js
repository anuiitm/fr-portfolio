// The UIIC topic files came from a separate app and use three slightly different
// schemas (correctIndex / answer / correctAnswer, index or option text, `pyq` or
// `past_year`, tricks with `content` or `description`). Everything is folded into
// one shape here so pages and search never deal with the variants.

const TAGS = 'p|ul|ol|li|h[1-6]|strong|em|b|i|u|br|sub|sup|code|pre|table|thead|tbody|tr|td|th|div|span|hr|small|mark|a';
// A bare "<" (as in "5<7") would otherwise be parsed as the start of a tag.
const escapeLt = (s) => s.replace(new RegExp(`<(?!/?(?:${TAGS})\\b)`, 'gi'), '&lt;');

export const stripHtml = (s = '') =>
  String(s)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&times;/g, '×')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// Plain-text fields use "\n" for line breaks; HTML fields use <br> with source
// indentation around them. Produce HTML either way.
function toHtml(s) {
  if (s == null) return '';
  let out = String(s).trim();
  if (/<br|<p|<ul|<ol|<table/i.test(out)) out = out.replace(/\s*\n\s*/g, ' ');
  else out = out.replace(/\n/g, '<br>');
  return escapeLt(out);
}

export function slugify(s) {
  return stripHtml(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

function answerIndex(q) {
  const raw = q.correctIndex ?? q.answer ?? q.correctAnswer;
  if (typeof raw === 'number') return raw;
  const want = stripHtml(raw).toLowerCase();
  return q.options.findIndex((o) => stripHtml(o).toLowerCase() === want);
}

function questionHtml(q) {
  if (q.statement) {
    const conclusions = (q.conclusions || []).map((c) => toHtml(c)).join('<br>');
    return `<b>Statements:</b> ${toHtml(q.statement)}<br><b>Conclusions:</b><br>${conclusions}`;
  }
  let html = toHtml(q.question);
  if (q.statement1) html += `<br><b>I.</b> ${toHtml(q.statement1)}<br><b>II.</b> ${toHtml(q.statement2)}`;
  return html;
}

// Promote the theory's top headings to the note's h2 (with ids for the table of
// contents) and the next level to h3, matching the APFC note typography.
function theoryHtml(raw) {
  let html = String(raw || '')
    .replace(/<div class="theory-(?:content|section)">/g, '')
    .replace(/<\/div>\s*$/g, '')
    .trim();
  html = escapeLt(html);
  const h2Count = (html.match(/<h2[\s>]/g) || []).length;
  const top = h2Count >= 2 ? ['h2'] : ['h2', 'h3'];
  const sub = h2Count >= 2 ? ['h3', 'h4'] : ['h4'];
  const heads = [];
  const used = new Set();
  html = html.replace(/<(h[1-6])>([\s\S]*?)<\/\1>/g, (m, tag, inner) => {
    if (top.includes(tag)) {
      let id = slugify(inner) || 'section';
      while (used.has(id)) id += '-x';
      used.add(id);
      heads.push({ id, text: stripHtml(inner) });
      return `<h2 class="n-h2" id="${id}">${inner}</h2>`;
    }
    if (sub.includes(tag)) return `<h3 class="n-h3">${inner}</h3>`;
    return `<h4>${inner}</h4>`;
  });
  return { html, heads };
}

export function normalizeTopic(d) {
  const { html, heads } = theoryHtml(d.theory);
  const tricks = (d.tricks || []).map((t) => ({
    title: stripHtml(t.title),
    html: toHtml(t.content ?? t.description),
    example: t.example ? toHtml(t.example) : '',
  }));
  const questions = (d.questions || []).map((q, i) => ({
    id: String(q.id ?? i),
    pyq: q.type === 'past_year' || q.type === 'pyq',
    year: q.year ? String(q.year) : '',
    q: questionHtml(q),
    options: q.options.map((o) => toHtml(o)),
    answer: answerIndex(q),
    why: toHtml(q.explanation),
  }));
  return {
    title: d.title,
    summary: d.description,
    theory: html,
    heads,
    tricks,
    practice: questions.filter((q) => !q.pyq),
    pyq: questions.filter((q) => q.pyq),
  };
}

export function topicText(n) {
  return stripHtml(
    [n.summary, n.theory, ...n.tricks.map((t) => `${t.title} ${t.html} ${t.example}`), ...[...n.practice, ...n.pyq].map((q) => q.q)].join(' '),
  );
}
