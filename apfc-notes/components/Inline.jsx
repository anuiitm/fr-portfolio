// Tiny inline-markdown renderer for note strings.
// Supports **bold**, *italic*, ==highlight==, `mono` (for section numbers) and [label](url).
// With `math`, $…$ is typeset by KaTeX. It is opt-in because APFC notes use "$" for dollars.
import katex from 'katex';

const TOKEN = /(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*[^*\s][^*]*\*)/g;
const MATH = /(\$[^$]+\$)/g;

export function tex(src, display = false) {
  return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: false, output: 'html' });
}

function Marked({ text, math }) {
  const parts = String(text).split(TOKEN);
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}><Inline text={part.slice(2, -2)} math={math} /></strong>;
    if (part.startsWith('==') && part.endsWith('==')) return <mark key={i}><Inline text={part.slice(2, -2)} math={math} /></mark>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith('[')) {
      const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (m) {
        const external = /^https?:/.test(m[2]);
        return (
          <a key={i} href={m[2]} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
            {m[1]}
          </a>
        );
      }
    }
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export default function Inline({ text, math = false }) {
  if (text == null) return null;
  if (!math) return <Marked text={text} />;
  // Math spans are cut out first so markdown tokens inside a formula (like *) are left alone.
  return String(text)
    .split(MATH)
    .map((part, i) => {
      if (!part) return null;
      if (part.length > 2 && part.startsWith('$') && part.endsWith('$')) {
        return <span key={i} className="m-inline" dangerouslySetInnerHTML={{ __html: tex(part.slice(1, -1)) }} />;
      }
      return <Marked key={i} text={part} math />;
    });
}
