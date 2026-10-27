import { Index, highlight, keySentences, tokens } from './search.js';

const $ = (id) => document.getElementById(id);
const COMPANY = { Aequs: 'Aequs', Aether: 'Aether Industries', BlueStone: 'BlueStone Jewellery', CP_Plus: 'CP Plus', Groww: 'Groww' };
const EXAMPLES = ['Who are the largest customers?', 'How will the IPO money be used?', 'Is there any pending litigation?', 'How much debt does the company have?', 'What did management say about growth?'];
const FEEDBACK_KEY = 'ipo-forensics:feedback';

const state = { company: new URLSearchParams(location.search).get('c') || 'BlueStone', view: 'report' };

let data;
try {
  const res = await fetch('data/index.json');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  data = await res.json();
} catch (err) {
  $('main').replaceChildren(Object.assign(document.createElement('p'), { className: 'note', textContent: `Could not load the document index (${err.message}). Serve this folder over HTTP rather than opening the file directly.` }));
  throw err;
}
const index = new Index(data.chunks);
if (!COMPANY[state.company]) state.company = 'BlueStone';

/* ---------- shared bits ---------- */
const docLabel = (d) => data.docLabels[d.doc] ?? d.doc;
const lowerUnlessAcronym = (s) => (s === s.toUpperCase() ? s : s.toLowerCase());
const counts = Object.fromEntries(Object.keys(COMPANY).map((c) => [c, data.chunks.filter((x) => x.company === c).length]));

function passage(hit, n, terms) {
  const node = $('passage-tpl').content.firstElementChild.cloneNode(true);
  const quote = node.querySelector('blockquote');
  const long = hit.doc.text.length > 420;
  const short = long ? `${hit.doc.text.slice(0, 420).replace(/\s+\S*$/, '')} …` : hit.doc.text;
  quote.innerHTML = highlight(short, terms);
  node.querySelector('.cite').textContent = `${n ? `[${n}] ` : ''}${docLabel(hit.doc)}, page ${hit.doc.page}`;
  node.id = n ? `src-${n}` : '';
  const more = node.querySelector('.more');
  if (!long) more.remove();
  else
    more.addEventListener('click', () => {
      const open = more.getAttribute('aria-expanded') === 'true';
      quote.innerHTML = highlight(open ? short : hit.doc.text, terms);
      more.setAttribute('aria-expanded', String(!open));
      more.textContent = open ? 'Show full passage' : 'Show less';
    });
  more?.setAttribute('aria-expanded', 'false');
  return node;
}

function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

/* ---------- company picker & views ---------- */
function renderCompanies() {
  $('companies').replaceChildren(
    ...Object.entries(COMPANY).map(([id, name]) => {
      const b = el('button', { type: 'button' }, el('b', { textContent: name }), el('small', { textContent: `${counts[id]} passages` }));
      b.setAttribute('aria-pressed', String(id === state.company));
      b.addEventListener('click', () => {
        state.company = id;
        history.replaceState(null, '', `?c=${id}`);
        render();
      });
      return b;
    }),
  );
}

document.querySelectorAll('.views button').forEach((b) =>
  b.addEventListener('click', () => {
    state.view = b.dataset.view;
    render();
    if (state.view === 'ask') $('q').focus();
  }),
);

/* ---------- report ---------- */
function renderReport() {
  const t0 = performance.now();
  const sections = data.sections.map((s) => {
    const hits = index.search(s.query, { filter: (d) => d.company === state.company && d.doc === s.doc, k: 3 });
    return { ...s, hits: hits.length ? hits : index.search(s.query, { filter: (d) => d.company === state.company, k: 3 }) };
  });
  const ms = performance.now() - t0;

  $('toc').replaceChildren(...sections.map((s, i) => el('li', {}, el('a', { href: `#sec-${i}`, textContent: s.name }))));
  $('stats').textContent = `10 queries answered in ${ms.toFixed(1)} ms in your browser.`;

  $('report').replaceChildren(
    el('h2', { className: 'report-title', textContent: `${COMPANY[state.company]}: what the documents say` }),
    ...sections.map((s, i) => {
      const terms = tokens(s.query);
      const sec = el('section', { className: `sec${s.name === 'Red flags' ? ' sec-flag' : ''}`, id: `sec-${i}` });
      sec.append(
        el('header', { className: 'sec-head' }, el('span', { className: 'sec-no', textContent: String(i + 1).padStart(2, '0') }), el('h3', { textContent: s.name })),
        el('p', { className: 'sec-query', textContent: `Searched the ${lowerUnlessAcronym(data.docLabels[s.doc])} for: ${s.query}` }),
        ...(s.hits.length ? s.hits.map((h) => passage(h, 0, terms)) : [el('p', { className: 'note', textContent: 'No matching passage in the demo index.' })]),
      );
      return sec;
    }),
    feedbackBox('report'),
  );
}

/* ---------- ask ---------- */
$('examples').append(
  ...EXAMPLES.map((q) => {
    const b = el('button', { type: 'button', className: 'chip', textContent: q });
    b.addEventListener('click', () => {
      $('q').value = q;
      ask(q);
    });
    return b;
  }),
);

$('ask-form').addEventListener('submit', (e) => {
  e.preventDefault();
  ask($('q').value.trim());
});

function ask(q) {
  if (!q) return;
  const t0 = performance.now();
  const hits = index.search(q, { filter: (d) => d.company === state.company, k: 5 });
  const sentences = keySentences(hits, q);
  const ms = performance.now() - t0;
  const terms = tokens(q);

  if (!hits.length) {
    $('answer').replaceChildren(el('p', { className: 'note', textContent: `Nothing in the ${counts[state.company]} demo passages for ${COMPANY[state.company]} matches that. Try different words, or one of the examples.` }));
    return;
  }

  const list = el('ol', { className: 'key-lines' });
  for (const s of sentences) {
    const li = el('li');
    li.innerHTML = highlight(s.text, terms);
    li.append(' ', el('a', { href: `#src-${s.source}`, className: 'ref', textContent: `[${s.source}]` }));
    list.append(li);
  }

  $('answer').replaceChildren(
    el('h2', { className: 'h-ans', textContent: 'Most relevant lines' }),
    el('p', { className: 'note', textContent: `Picked from the top ${hits.length} passages in ${ms.toFixed(1)} ms. In the full app, these passages go to the model, which must cite them.` }),
    sentences.length ? list : el('p', { className: 'note', textContent: 'The passages below match, but no single sentence stands out.' }),
    el('h2', { className: 'h-ans', textContent: 'Sources' }),
    ...hits.map((h, i) => passage(h, i + 1, terms)),
    feedbackBox('ask', q),
  );
}

/* ---------- feedback ---------- */
// The original Streamlit version lost the comment on rerun; here it is a
// normal form, saved locally and downloadable for the evaluation set.
function feedbackBox(kind, question = '') {
  const form = el('form', { className: 'feedback' });
  const legend = el('p', { className: 'fb-q', textContent: 'Were these passages the right evidence?' });
  const up = el('button', { type: 'button', textContent: 'Yes' });
  const down = el('button', { type: 'button', textContent: 'No' });
  const comment = el('textarea', { rows: 2, placeholder: 'What was missing or wrong? (optional)', hidden: true });
  comment.setAttribute('aria-label', 'Comment');
  const send = el('button', { type: 'submit', textContent: 'Send feedback', hidden: true });
  const done = el('p', { className: 'note', hidden: true });
  let rating = null;

  const pick = (r) => {
    rating = r;
    up.setAttribute('aria-pressed', String(r === 'up'));
    down.setAttribute('aria-pressed', String(r === 'down'));
    comment.hidden = r !== 'down';
    send.hidden = false;
    if (r === 'down') comment.focus();
  };
  up.addEventListener('click', () => pick('up'));
  down.addEventListener('click', () => pick('down'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const entry = { at: new Date().toISOString(), company: state.company, kind, question, rating, comment: comment.value.trim() };
    let all = [];
    try {
      all = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) ?? [];
      all.push(entry);
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(all));
    } catch {
      all = [entry];
    }
    form.querySelector('.fb-row').hidden = true;
    comment.hidden = send.hidden = true;
    done.hidden = false;
    done.replaceChildren(`Thanks. ${all.length} response${all.length === 1 ? '' : 's'} saved in this browser. `, exportLink());
  });

  form.append(legend, el('div', { className: 'fb-row' }, up, down), comment, send, done);
  return form;
}

function exportLink() {
  const a = el('a', { href: '#', textContent: 'Download as JSON' });
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const blob = new Blob([localStorage.getItem(FEEDBACK_KEY) ?? '[]'], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    el('a', { href: url, download: 'feedback.json' }).click();
    URL.revokeObjectURL(url);
  });
  return a;
}

/* ---------- render ---------- */
function render() {
  renderCompanies();
  document.querySelectorAll('.views button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === state.view)));
  $('view-report').hidden = state.view !== 'report';
  $('view-ask').hidden = state.view !== 'ask';
  if (state.view === 'report') renderReport();
  else if ($('q').value.trim()) ask($('q').value.trim());
  else $('answer').replaceChildren();
}

render();
