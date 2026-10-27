// BM25 over the demo passages, plus a small extractive step that picks the
// sentences most related to a question. Same scoring as the Python builder.

const STOP = new Set('a an and are as at be by for from has have in is it its of on or that the this to was were will with which our we us not no any all may such other than into what how why who when where does do did'.split(' '));

export function tokens(text) {
  return (text.toLowerCase().match(/[a-z0-9]+(?:\/[a-z]+)?/g) ?? []).filter((t) => t.length > 1 && !STOP.has(t));
}

export class Index {
  constructor(passages) {
    this.docs = passages.map((p) => ({ ...p, toks: tokens(p.text) }));
    this.df = new Map();
    for (const d of this.docs) for (const t of new Set(d.toks)) this.df.set(t, (this.df.get(t) ?? 0) + 1);
    this.avg = this.docs.reduce((a, d) => a + d.toks.length, 0) / Math.max(this.docs.length, 1);
  }

  search(query, { filter = () => true, k = 5, k1 = 1.5, b = 0.75 } = {}) {
    const q = [...new Set(tokens(query))];
    const n = this.docs.length;
    const hits = [];
    for (const d of this.docs) {
      if (!filter(d)) continue;
      const tf = new Map();
      for (const t of d.toks) tf.set(t, (tf.get(t) ?? 0) + 1);
      let score = 0;
      const matched = [];
      for (const t of q) {
        const f = tf.get(t);
        if (!f) continue;
        const df = this.df.get(t);
        const idf = Math.log(1 + (n - df + 0.5) / (df + 0.5));
        score += (idf * f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.toks.length) / this.avg));
        matched.push(t);
      }
      if (score > 0) hits.push({ doc: d, score, matched });
    }
    return hits.sort((x, y) => y.score - x.score).slice(0, k);
  }
}

// Best sentences across the top passages, each tagged with its source number.
export function keySentences(hits, query, max = 4) {
  const q = new Set(tokens(query));
  const out = [];
  hits.forEach((h, i) => {
    const sentences = h.doc.text.replace(/\n/g, ' ').split(/(?<=[.;])\s+(?=[A-Z(₹0-9])/);
    for (const s of sentences) {
      const st = tokens(s);
      if (st.length < 6 || st.length > 70) continue;
      const overlap = new Set(st.filter((t) => q.has(t))).size;
      if (overlap) out.push({ text: s.trim(), source: i + 1, score: overlap / Math.sqrt(st.length) + h.score / 50 });
    }
  });
  const seen = new Set();
  return out
    .sort((a, b) => b.score - a.score)
    .filter((s) => !seen.has(s.text) && seen.add(s.text))
    .slice(0, max);
}

// Wraps query terms in <mark>. Input text is escaped first.
export function highlight(text, terms) {
  const safe = text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  if (!terms.length) return safe;
  const rx = new RegExp(`\\b(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')).join('|')})\\w*`, 'gi');
  return safe.replace(rx, '<mark>$&</mark>');
}
