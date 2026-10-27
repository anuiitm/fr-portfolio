// Floating calculator.

/* ---------------- calculator ---------------- */
// Typing p, m, i, d gives plus, minus, into, divide ("2p4" is 2 + 4); the
// usual + - * / x work too. History is kept in this browser only.
const CALC_KEY = NS + 'calc', CALC_MAX = 50;
const CALC_MAP = { p: '+', '+': '+', m: '−', '-': '−', i: '×', '*': '×', x: '×', d: '÷', '/': '÷', '^': '²' };
let calcHist = [];
try { calcHist = JSON.parse(localStorage.getItem(CALC_KEY)) || []; } catch (e) { calcHist = []; }

// An invisible break point after each operator, so a long sum wraps
// between numbers and never splits one across two lines.
const ZW = '\u200B';
const calcBreaks = s => s.replace(/([\d.)%²])([+−×÷])(?=[−+]?[\d.(])/g, '$1$2' + ZW);
const calcBare = s => s.split(ZW).join('');
// Swaps shortcut letters for symbols and drops anything else.
function calcClean(str) {
  let out = '';
  for (const ch of str) {
    const k = CALC_MAP[ch.toLowerCase()];
    if (k) out += k;
    else if (/[\d.,()% ]/.test(ch) || '+−×÷²'.includes(ch)) out += ch;
  }
  return out;
}
// Recursive descent over + − × ÷, brackets, unary minus, postfix ² and %.
// A percentage after + or − is of the left side, so 200 + 10% is 220;
// anywhere else it is just ÷ 100, so 15,000 × 18% is 2,700.
function calcEval(src) {
  const s = calcBare(src).replace(/[,\s]/g, '');
  let i = 0;
  const peek = () => s[i];
  function expr() {
    let v = term().v;
    while (peek() === '+' || peek() === '−') {
      const op = s[i++], r = term();
      const amt = r.pct ? v * r.v : r.v;
      v = op === '+' ? v + amt : v - amt;
    }
    return v;
  }
  function term() {
    let r = unary();
    while (peek() === '×' || peek() === '÷') {
      const op = s[i++], b = unary().v;
      if (op === '÷' && b === 0) throw new Error("Can't divide by 0");
      r = { v: op === '×' ? r.v * b : r.v / b, pct: false };
    }
    return r;
  }
  function unary() {
    if (peek() === '−') { i++; const r = unary(); return { v: -r.v, pct: r.pct }; }
    if (peek() === '+') { i++; return unary(); }
    let v;
    if (peek() === '(') {
      i++; v = expr();
      if (peek() === ')') i++;          // a missing ")" at the end is forgiven
      else if (i < s.length) throw new Error('Check the brackets');
    } else {
      const m = /^\d+\.?\d*|^\.\d+/.exec(s.slice(i));
      if (!m) throw new Error(i >= s.length ? 'Unfinished sum' : 'Check the expression');
      i += m[0].length;
      v = parseFloat(m[0]);
    }
    let pct = false;
    while (peek() === '²' || peek() === '%') {
      if (s[i++] === '²') v = v * v; else { v = v / 100; pct = true; }
    }
    return { v, pct };
  }
  if (!s) throw new Error('');
  const v = expr();
  if (i < s.length) throw new Error(s[i] === ')' ? 'Check the brackets' : 'Check the expression');
  if (!isFinite(v)) throw new Error('Too big');
  return Number(v.toPrecision(12));
}
const calcFmt = n => n.toLocaleString('en-IN', { maximumFractionDigits: 8 }).replace('-', '−');
// A result as typeable text: no grouping or exponent, and the − the parser reads.
const calcPlain = n => n.toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 10 }).replace('-', '−');
// "1250×12" → "1,250 × 12" for the history list.
const calcPretty = e => e.replace(/[\d,]*\.?\d+/g, n => {
  const [a, b] = n.replace(/,/g, '').split('.');
  return (a ? Number(a).toLocaleString('en-IN') : '0') + (b !== undefined ? '.' + b : '');
}).replace(/\s*([+×÷])\s*/g, ' $1 ').replace(/(\S)\s*−\s*/g, '$1 − ').trim();
const calcHasOp = v => /[+−×÷²%]/.test(v.replace(/^\s*−/, ''));

// Grows the display to fit its lines and steps the text down for long sums.
function calcSize() {
  const el = $('calc-in'), n = calcBare(el.value).length;
  el.classList.toggle('mid', n > 11 && n <= 20);
  el.classList.toggle('long', n > 20);
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
  // Only offer a scrollbar once the sum outgrows the three-line cap.
  el.classList.toggle('scroll', el.scrollHeight > el.clientHeight + 1);
}
function calcNormalize() {
  const el = $('calc-in'), caret = el.selectionStart ?? el.value.length;
  // Two operators in a row keep only the latest: 5+× becomes 5×.
  const oneOp = t => t.replace(/[+−×÷]{2,}/g, r => r.slice(-1));
  let k = oneOp(calcClean(el.value.slice(0, caret))).length;   // real characters before the caret
  let bare = oneOp(calcClean(el.value));
  // The display rests on a real 0: the first digit typed replaces it, and
  // deleting everything brings it back.
  const lead = /^0 *(?=[\d(])/.exec(bare);
  if (lead) { bare = bare.slice(lead[0].length); k = Math.max(0, k - lead[0].length); }
  if (!bare) { bare = '0'; k = 1; }
  const full = calcBreaks(bare);
  if (full === el.value) return;
  let pos = 0;
  for (let seen = 0; pos < full.length && seen < k; pos++) if (full[pos] !== ZW) seen++;
  if (full[pos] === ZW) pos++;
  el.value = full;
  if (document.activeElement === el) el.setSelectionRange(pos, pos);
}
// Backspace that treats an operator and its break point as one character.
function calcBackspace() {
  const input = $('calc-in'), v = input.value;
  const a = input.selectionStart ?? v.length, z = input.selectionEnd ?? a;
  let from = a;
  if (a === z) { from = Math.max(0, a - 1); if (v[from] === ZW) from = Math.max(0, from - 1); }
  input.value = v.slice(0, from) + v.slice(z);
  input.focus(); input.setSelectionRange(from, from); calcPreview();
}
function calcPreview() {
  calcNormalize();
  calcSize();
  const v = $('calc-in').value, out = $('calc-out');
  out.classList.remove('err');
  if (!v.trim()) { out.textContent = ''; return; }
  try { out.textContent = calcHasOp(v) ? '= ' + calcFmt(calcEval(v)) : ''; }
  catch (e) { out.textContent = ''; }
}
// Adds a finished sum to the history (a repeat of the last one is skipped).
function calcSave(e, r) {
  const last = calcHist[calcHist.length - 1];
  if (last && last.e === e && last.r === r) return;
  calcHist.push({ e, r });
  if (calcHist.length > CALC_MAX) calcHist = calcHist.slice(-CALC_MAX);
  try { localStorage.setItem(CALC_KEY, JSON.stringify(calcHist)); } catch (err) { }
  renderCalcHist();
}
function calcSubmit() {
  const input = $('calc-in'), out = $('calc-out'), v = calcBare(input.value).trim();
  if (!v) return;
  try {
    const r = calcEval(v);
    if (calcHasOp(v)) calcSave(v, r);
    input.value = calcPlain(r);
    out.classList.remove('err'); out.textContent = ''; calcSize();
  } catch (e) {
    out.classList.add('err'); out.textContent = e.message || 'Check the expression';
  }
}
function renderCalcHist() {
  const box = $('calc-hist');
  box.innerHTML = calcHist.map((h, k) =>
    `<button type="button" data-h="${k}" title="Edit this sum"><span class="he">${esc(calcPretty(h.e))}</span><span class="hr">${esc(calcFmt(h.r))}</span></button>`).join('');
  box.scrollTop = box.scrollHeight;
  $('calc-clear-hist').hidden = !calcHist.length;
  // Brings the whole sum back into the display, ready to change and re-run.
  box.querySelectorAll('[data-h]').forEach(b => {
    b.onmousedown = e => e.preventDefault();
    b.onclick = () => {
      const input = $('calc-in');
      input.value = calcBreaks(calcHist[Number(b.dataset.h)].e);
      input.focus(); input.setSelectionRange(input.value.length, input.value.length);
      calcPreview();
    };
  });
}
// Puts text at the caret (or replaces the selection) and keeps focus in the box.
function calcInsert(text) {
  const input = $('calc-in');
  const a = input.selectionStart ?? input.value.length, b = input.selectionEnd ?? a;
  input.value = input.value.slice(0, a) + text + input.value.slice(b);
  input.focus(); input.setSelectionRange(a + text.length, a + text.length);
  calcPreview();
}
// ±: flips the sign of the last number (or bracket). Mid-sum the negative
// goes in brackets, 5×(−3), since two operators in a row collapse to one.
function calcNegate() {
  const input = $('calc-in'), v = calcBare(input.value);
  const N = '([\\d.,]+[%²]*|\\([^()]*\\)[%²]*)';
  let m, out = null;
  if ((m = new RegExp('\\(−' + N + '\\)$').exec(v))) out = v.slice(0, m.index) + m[1];
  else if ((m = new RegExp('^−' + N + '$').exec(v))) out = m[1];
  else if ((m = new RegExp('(^|[+−×÷(])' + N + '$').exec(v))) {
    if (/^[0.,]*$/.test(m[2])) return;           // nothing to negate yet
    const at = m.index + m[1].length;
    out = at === 0 || m[1] === '(' ? v.slice(0, at) + '−' + m[2] : v.slice(0, at) + '(−' + m[2] + ')';
  }
  if (out === null) return;
  input.value = out;
  input.focus(); input.setSelectionRange(input.value.length, input.value.length);
  calcPreview();
}
function setCalc(open) {
  const panel = $('calc-panel'), fab = $('calc-fab');
  panel.classList.toggle('open', open);
  panel.toggleAttribute('inert', !open);
  panel.setAttribute('aria-hidden', String(!open));
  fab.setAttribute('aria-expanded', String(open));
  fab.setAttribute('aria-label', open ? 'Close calculator' : 'Open calculator');
  const input = $('calc-in');
  if (open) {
    // Every opening starts from a blank display; earlier sums are in the history.
    input.value = '0'; $('calc-out').textContent = ''; $('calc-out').classList.remove('err');
    renderCalcHist(); calcSize(); input.focus(); input.setSelectionRange(1, 1);
  } else {
    // A sum left on the display without pressing = still lands in the history.
    const v = calcBare(input.value).trim();
    if (calcHasOp(v)) try { calcSave(v, calcEval(v)); } catch (e) { }
    if (panel.contains(document.activeElement)) fab.focus();
  }
}
const calcIsOpen = () => $('calc-panel').classList.contains('open');
$('calc-fab').onclick = () => setCalc(!calcIsOpen());
$('calc-close').onclick = () => setCalc(false);
$('calc-clear-hist').onclick = () => {
  calcHist = [];
  try { localStorage.removeItem(CALC_KEY); } catch (e) { }
  renderCalcHist(); $('calc-in').focus();
};
$('calc-copy').onclick = () => {
  const v = calcBare($('calc-in').value).trim();
  let text = v.replace(/,/g, '');
  try { if (v) text = String(calcEval(v)); } catch (e) { }
  if (!text) return;
  navigator.clipboard?.writeText(text).then(() => toast(`Copied ${text}`), () => toast('Could not copy'));
  $('calc-in').focus();
};
$('calc-in').addEventListener('input', e => {
  calcPreview();
});
// Clicking a lone 0 puts the cursor after it, so the next digit replaces it.
$('calc-in').addEventListener('mouseup', e => {
  if (e.target.value === '0') e.target.setSelectionRange(1, 1);
});
// Deleting next to a break point removes the operator with it.
$('calc-in').addEventListener('beforeinput', e => {
  const el = e.target, a = el.selectionStart, z = el.selectionEnd;
  if (a !== z) return;
  if (e.inputType === 'deleteContentBackward' && el.value[a - 1] === ZW) { e.preventDefault(); calcBackspace(); }
  else if (e.inputType === 'deleteContentForward' && el.value[a] === ZW) {
    e.preventDefault();
    el.value = el.value.slice(0, a) + el.value.slice(a + 2); el.setSelectionRange(a, a); calcPreview();
  }
});
$('calc-in').addEventListener('keydown', e => {
  if (e.key === 'Enter' || (e.key === '=' && !e.metaKey && !e.ctrlKey)) { e.preventDefault(); calcSubmit(); }
});
// "c" opens the calculator from anywhere outside a text box, and closes it
// again — including while typing a sum in it.
document.addEventListener('keydown', e => {
  if ((e.key !== 'c' && e.key !== 'C') || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
  const t = e.target;
  if (t !== $('calc-in') && t.closest?.('input, textarea, select, [contenteditable]')) return;
  e.preventDefault(); e.stopPropagation();
  setCalc(!calcIsOpen());
}, true);
$('calc-panel').addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); setCalc(false); } });
// While it is open, typing anywhere outside another text box goes to the
// calculator — e.g. right after tapping a day on the calendar. Runs in the
// capture phase so "/" means divide here, not "jump to search".
document.addEventListener('keydown', e => {
  if (!calcIsOpen() || e.metaKey || e.ctrlKey || e.altKey) return;
  const input = $('calc-in');
  if (e.target === input || e.target.closest?.('input, textarea, select, [contenteditable]')) return;
  const ch = e.key.length === 1 ? calcClean(e.key).trim() : '';
  if (!ch && !['Backspace', 'Enter', 'Escape'].includes(e.key)) return;
  e.preventDefault(); e.stopPropagation();
  if (e.key === 'Escape') return setCalc(false);
  input.focus(); input.setSelectionRange(input.value.length, input.value.length);
  if (e.key === 'Enter') calcSubmit();
  else if (e.key === 'Backspace') calcBackspace();
  else calcInsert(ch);
}, true);
$('calc-keys').querySelectorAll('[data-k]').forEach(b => {
  // Keep focus (and the caret) in the expression box while tapping keys.
  b.onmousedown = e => e.preventDefault();
  b.onclick = () => {
    const k = b.dataset.k, input = $('calc-in');
    if (k === '=') { calcSubmit(); input.focus(); }
    else if (k === 'C') { input.focus(); input.value = ''; calcPreview(); }
    else if (k === 'neg') calcNegate();
    else if (k === 'back') calcBackspace();
    else calcInsert(k);
  };
});
