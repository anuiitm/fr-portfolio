// Rule-based plain-language rewriting plus readability scores. The original
// called a T5 model on a Python server; this version runs in the browser and
// explains every change it makes, which a model can't.

// Only words whose plain form works in any sentence: "request" and "purchase"
// are left out because the noun and verb need different replacements.
const WORDS: Record<string, string> = {
  accordingly: 'so', additionally: 'also', adjacent: 'next to', aforementioned: 'this', approximately: 'about',
  ascertain: 'find out', assistance: 'help', commence: 'start', commencement: 'start',
  component: 'part', comprehend: 'understand', consequently: 'so', constitute: 'make up', demonstrate: 'show',
  disseminate: 'share', endeavour: 'try', endeavor: 'try', ensure: 'make sure', equivalent: 'equal',
  facilitate: 'help', furthermore: 'also', henceforth: 'from now on', however: 'but',
  implement: 'carry out', inception: 'start', indicate: 'show', initiate: 'start', modify: 'change',
  necessitate: 'need', notwithstanding: 'despite', numerous: 'many', objective: 'aim', obtain: 'get',
  optimal: 'best', participate: 'take part', pertaining: 'about', possess: 'have',
  prior: 'before', procure: 'get', proficiency: 'skill', provided: 'given', remainder: 'rest',
  remuneration: 'pay', require: 'need', requisite: 'needed', reside: 'live', residence: 'home',
  subsequent: 'later', subsequently: 'later', sufficient: 'enough', terminate: 'end', therefore: 'so',
  thereby: 'by this', utilise: 'use', utilize: 'use', utilisation: 'use', utilization: 'use', whilst: 'while',
  furnish: 'give', deemed: 'treated as', expedite: 'speed up',
  stipulated: 'set', aggregate: 'total', mandatory: 'required', prohibited: 'not allowed', submit: 'send',
};

const PHRASES: [RegExp, string][] = [
  [/\bin order to\b/gi, 'to'],
  [/\bdue to the fact that\b/gi, 'because'],
  [/\bin the event that\b/gi, 'if'],
  [/\bat this point in time\b/gi, 'now'],
  [/\bwith regard to\b/gi, 'about'],
  [/\bin accordance with\b/gi, 'under'],
  [/\bprior to\b/gi, 'before'],
  [/\bsubsequent to\b/gi, 'after'],
  [/\ba number of\b/gi, 'some'],
  [/\bis required to\b/gi, 'must'],
  [/\bare required to\b/gi, 'must'],
  [/\bfor the purpose of\b/gi, 'to'],
  [/\bin respect of\b/gi, 'for'],
  [/\bshall\b/gi, 'must'],
];

export type Change = { from: string; to: string; kind: 'word' | 'phrase' | 'split' };

function syllables(word: string) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (w.length <= 3) return 1;
  const groups = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '').match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups?.length ?? 1);
}

export const sentencesOf = (text: string) => text.split(/(?<=[.!?])\s+(?=[A-Z0-9"“(])/).filter((s) => s.trim());

export function readability(text: string) {
  const sentences = sentencesOf(text);
  const words = text.match(/[A-Za-z][A-Za-z'-]*/g) ?? [];
  if (!words.length) return { ease: 0, grade: 0, words: 0, sentences: 0, longWords: 0 };
  const syl = words.reduce((a, w) => a + syllables(w), 0);
  const wps = words.length / Math.max(sentences.length, 1);
  const spw = syl / words.length;
  return {
    ease: Math.max(0, Math.min(100, 206.835 - 1.015 * wps - 84.6 * spw)),
    grade: Math.max(0, 0.39 * wps + 11.8 * spw - 15.59),
    words: words.length,
    sentences: sentences.length,
    longWords: words.filter((w) => syllables(w) >= 3).length,
  };
}

export function easeLabel(ease: number) {
  if (ease >= 80) return 'Easy';
  if (ease >= 60) return 'Plain English';
  if (ease >= 50) return 'Fairly hard';
  if (ease >= 30) return 'Hard';
  return 'Very hard';
}

const keepCase = (src: string, rep: string) => (src[0] === src[0].toUpperCase() ? rep[0].toUpperCase() + rep.slice(1) : rep);

// Long sentences are split at "; " or at ", and"/", which" past the midpoint.
function splitLong(sentence: string, changes: Change[]) {
  const words = sentence.split(/\s+/).length;
  if (words <= 25) return sentence;
  const semi = sentence.indexOf('; ');
  if (semi > 30) {
    changes.push({ from: '; ', to: '. ', kind: 'split' });
    const rest = sentence.slice(semi + 2);
    return `${sentence.slice(0, semi)}. ${rest[0].toUpperCase()}${rest.slice(1)}`;
  }
  const m = /, (and|but|which|so) /g;
  let hit: RegExpExecArray | null;
  while ((hit = m.exec(sentence))) {
    if (hit.index > sentence.length * 0.35) {
      const rest = sentence.slice(hit.index + hit[0].length);
      const lead = hit[1] === 'which' ? 'This ' : `${hit[1][0].toUpperCase()}${hit[1].slice(1)} `;
      changes.push({ from: hit[0].trim(), to: '. ' + lead.trim(), kind: 'split' });
      return `${sentence.slice(0, hit.index)}. ${lead}${rest}`;
    }
  }
  return sentence;
}

export function simplify(text: string) {
  const changes: Change[] = [];
  let out = text;
  for (const [rx, rep] of PHRASES) {
    out = out.replace(rx, (m) => {
      changes.push({ from: m, to: rep, kind: 'phrase' });
      return keepCase(m, rep);
    });
  }
  out = out.replace(/[A-Za-z]+/g, (w) => {
    const rep = WORDS[w.toLowerCase()];
    if (!rep) return w;
    changes.push({ from: w, to: rep, kind: 'word' });
    return keepCase(w, rep);
  });
  out = sentencesOf(out)
    .map((s) => splitLong(s, changes))
    .join(' ');
  return { text: out, changes };
}
