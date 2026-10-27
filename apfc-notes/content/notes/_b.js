// Shorthand builders for note blocks. Inline strings support **bold**, *italic*,
// ==highlight==, `mono` and [label](url). See components/Blocks.jsx for rendering.

export const h2 = (text) => ({ t: 'h2', text });
export const h3 = (text) => ({ t: 'h3', text });
export const p = (text) => ({ t: 'p', text });
export const ul = (...items) => ({ t: 'ul', items });
export const ol = (...items) => ({ t: 'ol', items });
// A list item with nested points.
export const li = (text, ...sub) => ({ text, sub });
export const quote = (text, cite) => ({ t: 'quote', text, cite });

export const table = (head, rows, caption) => ({ t: 'table', head, rows, caption });

const callout = (kind) => (title, body) =>
  Array.isArray(body) ? { t: 'callout', kind, title, items: body } : { t: 'callout', kind, title, text: body };
export const key = callout('key');
export const trap = callout('trap');
export const fresh = callout('new');
export const verify = callout('verify');
export const note = callout('note');
export const hook = callout('mnemonic');
export const caselaw = callout('case');

// facts([['₹25,000', 'EPF wage ceiling'], ...]) → value first, label second
export const facts = (pairs) => ({ t: 'facts', items: pairs.map(([v, k]) => ({ v, k })) });
export const timeline = (pairs) => ({ t: 'timeline', items: pairs.map(([when, what]) => ({ when, what })) });
export const steps = (pairs) => ({ t: 'steps', items: pairs.map(([title, text]) => ({ title, text })) });

// quiz([q, [options], answerIndex, why], ...)
export const quiz = (...qs) => ({ t: 'quiz', items: qs.map(([q, options, answer, why]) => ({ q, options, answer, why })) });
export const cards = (pairs) => ({ t: 'cards', items: pairs.map(([front, back]) => ({ front, back })) });
export const sources = (pairs) => ({ t: 'sources', items: pairs.map(([label, url]) => ({ label, url })) });
