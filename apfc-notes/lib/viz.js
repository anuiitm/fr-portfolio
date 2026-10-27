// Small SVG builders for note figures. Every function returns an SVG string that
// Blocks renders inline, so figures are styled by the classes in globals.css
// (`.viz …`) and follow the accent colour. Curves are sampled from the actual
// functions, so a plotted normal density or sigmoid is exact, not hand-drawn.
//
// Colour classes: c1 accent, c2 violet, c3 sky, c4 coral, c5 amber, c6 teal, mute.

let uid = 0;
const nextId = (p) => `${p}${++uid}`;
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r2 = (v) => Math.round(v * 100) / 100;

const DEFS = `<defs>
<marker id="vz-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk"/></marker>
<marker id="vz-ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk c1"/></marker>
<marker id="vz-ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk c2"/></marker>
<marker id="vz-ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk c4"/></marker>
</defs>`;

const marker = (cls = '') => {
  if (/\bc1\b/.test(cls)) return 'url(#vz-ar1)';
  if (/\bc2\b/.test(cls)) return 'url(#vz-ar2)';
  if (/\bc4\b/.test(cls)) return 'url(#vz-ar4)';
  return 'url(#vz-ar)';
};

export function svg(w, h, body, label = '') {
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" class="viz" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${DEFS}${body}</svg>`;
}

// Multi-line text: '\n' splits lines, centred on (x, y).
function text(x, y, s, cls = '', anchor = 'middle', lh = 14) {
  const lines = String(s).split('\n');
  const y0 = y - ((lines.length - 1) * lh) / 2;
  return lines
    .map((l, i) => `<text x="${r2(x)}" y="${r2(y0 + i * lh)}" text-anchor="${anchor}" dominant-baseline="central" class="${cls}">${esc(l)}</text>`)
    .join('');
}

function arrowLine(x1, y1, x2, y2, cls = '', dash = false, head = true) {
  return `<line x1="${r2(x1)}" y1="${r2(y1)}" x2="${r2(x2)}" y2="${r2(y2)}" class="ln ${cls}${dash ? ' dash' : ''}"${head ? ` marker-end="${marker(cls)}"` : ''}/>`;
}

/* ───────────────────────── Function plots ───────────────────────── */

// plot({ x:[x0,x1], y:[y0,y1], series:[{ f, cls, label, dash, from, to }], areas:[{ f, g, from, to, cls }],
//        points:[{ x, y, cls, r, label }], vlines:[{ x, cls, label, dash }], hlines, labels:[{ x, y, text, cls, anchor }],
//        segments:[{ x1, y1, x2, y2, cls, dash, arrow }], xticks, yticks, xlabel, ylabel })
export function plot(o) {
  const w = o.w || 560;
  const h = o.h || 300;
  const m = { l: 46, r: 18, t: 18, b: 40, ...(o.margin || {}) };
  const [x0, x1] = o.x;
  const [y0, y1] = o.y;
  const sx = (x) => m.l + ((x - x0) / (x1 - x0)) * (w - m.l - m.r);
  const sy = (y) => m.t + ((y1 - y) / (y1 - y0)) * (h - m.t - m.b);
  const clip = nextId('vzc');
  let b = `<clipPath id="${clip}"><rect x="${m.l}" y="${m.t}" width="${w - m.l - m.r}" height="${h - m.t - m.b}"/></clipPath>`;

  // grid and ticks
  const xt = (o.xticks || []).map((t) => (Array.isArray(t) ? t : [t, t]));
  const yt = (o.yticks || []).map((t) => (Array.isArray(t) ? t : [t, t]));
  xt.forEach(([v]) => (b += `<line x1="${r2(sx(v))}" y1="${m.t}" x2="${r2(sx(v))}" y2="${h - m.b}" class="grid"/>`));
  yt.forEach(([v]) => (b += `<line x1="${m.l}" y1="${r2(sy(v))}" x2="${w - m.r}" y2="${r2(sy(v))}" class="grid"/>`));

  // axes: through zero when zero is in range, else along the frame
  const ax = y0 <= 0 && y1 >= 0 && !o.frame ? sy(0) : h - m.b;
  const ay = x0 <= 0 && x1 >= 0 && !o.frame ? sx(0) : m.l;
  b += `<line x1="${m.l}" y1="${r2(ax)}" x2="${w - m.r}" y2="${r2(ax)}" class="ax"/>`;
  b += `<line x1="${r2(ay)}" y1="${m.t}" x2="${r2(ay)}" y2="${h - m.b}" class="ax"/>`;
  xt.forEach(([v, l]) => (b += text(sx(v), h - m.b + 14, l, 'tick')));
  yt.forEach(([v, l]) => (b += text(m.l - 8, sy(v), l, 'tick', 'end')));
  if (o.xlabel) b += text((m.l + w - m.r) / 2, h - 8, o.xlabel, 'axl');
  if (o.ylabel) b += `<text x="14" y="${r2((m.t + h - m.b) / 2)}" transform="rotate(-90 14 ${r2((m.t + h - m.b) / 2)})" text-anchor="middle" dominant-baseline="central" class="axl">${esc(o.ylabel)}</text>`;

  const sample = (f, a, z, n = 240) => {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const x = a + ((z - a) * i) / n;
      const y = f(x);
      if (Number.isFinite(y)) pts.push([x, y]);
    }
    return pts;
  };

  (o.areas || []).forEach((a) => {
    const from = a.from ?? x0;
    const to = a.to ?? x1;
    const top = sample(a.f, from, to);
    const bot = sample(a.g || (() => Math.max(y0, 0)), from, to).reverse();
    const d = [...top, ...bot].map(([x, y], i) => `${i ? 'L' : 'M'}${r2(sx(x))} ${r2(sy(y))}`).join('') + 'Z';
    b += `<path d="${d}" class="area ${a.cls || 'c1'}" clip-path="url(#${clip})"/>`;
  });

  (o.series || []).forEach((s) => {
    const pts = s.pts || sample(s.f, s.from ?? x0, s.to ?? x1, s.n);
    const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${r2(sx(x))} ${r2(sy(y))}`).join('');
    b += `<path d="${d}" class="curve ${s.cls || 'c1'}${s.dash ? ' dash' : ''}" clip-path="url(#${clip})"/>`;
    if (s.label) {
      const lx = s.lx ?? (s.from ?? x0) + ((s.to ?? x1) - (s.from ?? x0)) * 0.82;
      const ly = s.ly ?? (s.pts ? pts[pts.length - 1][1] : s.f(lx));
      b += text(sx(lx) + (s.dx || 0), sy(ly) + (s.dy ?? -12), s.label, `lbl ${s.cls || 'c1'}`, s.anchor || 'middle');
    }
  });

  (o.segments || []).forEach((s) => {
    b += arrowLine(sx(s.x1), sy(s.y1), sx(s.x2), sy(s.y2), s.cls || 'mute', s.dash, Boolean(s.arrow));
    if (s.label) b += text((sx(s.x1) + sx(s.x2)) / 2 + (s.dx || 0), (sy(s.y1) + sy(s.y2)) / 2 + (s.dy ?? -10), s.label, `lbl ${s.cls || ''}`);
  });

  (o.vlines || []).forEach((v) => {
    b += `<line x1="${r2(sx(v.x))}" y1="${m.t}" x2="${r2(sx(v.x))}" y2="${h - m.b}" class="ln ${v.cls || 'mute'}${v.dash === false ? '' : ' dash'}"/>`;
    if (v.label) b += text(sx(v.x) + (v.dx || 0), m.t + 8 + (v.dy || 0), v.label, `lbl ${v.cls || ''}`, v.anchor || 'middle');
  });
  (o.hlines || []).forEach((v) => {
    b += `<line x1="${m.l}" y1="${r2(sy(v.y))}" x2="${w - m.r}" y2="${r2(sy(v.y))}" class="ln ${v.cls || 'mute'}${v.dash === false ? '' : ' dash'}"/>`;
    if (v.label) b += text(w - m.r - 4, sy(v.y) - 9, v.label, `lbl ${v.cls || ''}`, 'end');
  });

  (o.points || []).forEach((p) => {
    b += `<circle cx="${r2(sx(p.x))}" cy="${r2(sy(p.y))}" r="${p.r || 4}" class="pt ${p.cls || 'c1'}${p.hollow ? ' hollow' : ''}"/>`;
    if (p.label) b += text(sx(p.x) + (p.dx ?? 0), sy(p.y) + (p.dy ?? -12), p.label, `lbl ${p.lcls || ''}`, p.anchor || 'middle');
  });
  (o.labels || []).forEach((l) => (b += text(sx(l.x), sy(l.y), l.text, `lbl ${l.cls || ''}`, l.anchor || 'middle')));

  return svg(w, h, b, o.title);
}

/* ───────────────────────── Arrays ───────────────────────── */

// arrays({ rows:[{ values, hi:{ i: cls }, ptrs:[{ i, text, cls, up }], spans:[{ from, to, text, cls }], label }], index, cell })
export function arrays(o) {
  const cell = o.cell || 44;
  const ch = o.cellH || 36;
  const labelW = o.rows.some((r) => r.label) ? o.labelW || 96 : 0;
  const n = Math.max(...o.rows.map((r) => r.values.length));
  const rowH = ch + (o.index !== false ? 16 : 0) + 30 + (o.rows.some((r) => r.spans?.length) ? 22 : 0);
  const topPad = o.rows.some((r) => r.spans?.length || r.ptrs?.some((p) => p.up)) ? 26 : 8;
  const w = labelW + n * cell + 20;
  const h = topPad + o.rows.length * rowH;
  let b = '';
  o.rows.forEach((row, ri) => {
    const y = topPad + ri * rowH;
    if (row.label) b += text(labelW - 10, y + ch / 2, row.label, 'lbl mute', 'end');
    row.values.forEach((v, i) => {
      const x = labelW + 10 + i * cell;
      const cls = row.hi?.[i] || '';
      b += `<rect x="${x}" y="${y}" width="${cell - 4}" height="${ch}" rx="7" class="cell ${cls}"/>`;
      b += text(x + (cell - 4) / 2, y + ch / 2, v, `cv ${cls}`);
      if (o.index !== false) b += text(x + (cell - 4) / 2, y + ch + 10, i, 'idx');
    });
    (row.spans || []).forEach((s) => {
      const xa = labelW + 10 + s.from * cell;
      const xb = labelW + 10 + s.to * cell + cell - 4;
      const yy = y - 8;
      b += `<path d="M${xa} ${yy + 5}V${yy}H${xb}V${yy + 5}" class="ln ${s.cls || 'c1'}" fill="none"/>`;
      if (s.text) b += text((xa + xb) / 2, yy - 9, s.text, `lbl ${s.cls || 'c1'}`);
    });
    (row.ptrs || []).forEach((p) => {
      const x = labelW + 10 + p.i * cell + (cell - 4) / 2;
      if (p.up) {
        b += arrowLine(x, y - 22, x, y - 3, p.cls || 'c1');
        b += text(x, y - 30, p.text, `lbl ${p.cls || 'c1'}`);
      } else {
        const base = y + ch + (o.index !== false ? 16 : 2);
        b += arrowLine(x, base + 18, x, base + 1, p.cls || 'c1');
        b += text(x, base + 26, p.text, `lbl ${p.cls || 'c1'}`);
      }
    });
  });
  return svg(w, h + 8, b, o.title);
}

/* ───────────────────────── Grids and matrices ───────────────────────── */

// grid({ rows:[[...]], hi:{ 'r,c': cls }, rowLabels, colLabels, cell, arrows:[{ from:[r,c], to:[r,c], cls }] })
export function grid(o) {
  const cw = o.cell || 46;
  const chh = o.cellH || 34;
  const lw = o.rowLabels ? o.labelW || 60 : 0;
  const th = o.colLabels ? 24 : 0;
  const R = o.rows.length;
  const C = Math.max(...o.rows.map((r) => r.length));
  const w = lw + C * cw + 12;
  const h = th + R * chh + 12;
  let b = '';
  const cx = (c) => lw + 6 + c * cw + cw / 2;
  const cy = (r) => th + 6 + r * chh + chh / 2;
  (o.colLabels || []).forEach((l, c) => (b += text(cx(c), 12, l, 'lbl mute')));
  (o.rowLabels || []).forEach((l, r) => (b += text(lw - 6, cy(r), l, 'lbl mute', 'end')));
  o.rows.forEach((row, r) =>
    row.forEach((v, c) => {
      const cls = o.hi?.[`${r},${c}`] || '';
      b += `<rect x="${lw + 6 + c * cw + 1}" y="${th + 6 + r * chh + 1}" width="${cw - 2}" height="${chh - 2}" rx="5" class="cell ${cls}"/>`;
      b += text(cx(c), cy(r), v, `cv ${cls}`);
    }),
  );
  (o.arrows || []).forEach((a) => {
    const [r1, c1] = a.from;
    const [r2_, c2] = a.to;
    const dx = Math.sign(c2 - c1) * cw * 0.32;
    const dy = Math.sign(r2_ - r1) * chh * 0.32;
    b += arrowLine(cx(c1) + dx, cy(r1) + dy, cx(c2) - dx, cy(r2_) - dy, a.cls || 'c2');
  });
  return svg(w, h, b, o.title);
}

/* ───────────────────────── Trees ───────────────────────── */

// Binary tree from nested arrays: [value, left, right]; null for an empty child.
// N-ary tree: { v, c: [children] }. hi: { value: cls }; edges listed in `hiEdges` as 'parent-child'.
export function tree(root, o = {}) {
  const r = o.r || 17;
  const gx = o.gapX || 44;
  const gy = o.gapY || 62;
  const nodes = [];
  const edges = [];
  let next = 0;
  const isBinary = Array.isArray(root);
  function walkBin(n, depth, parent) {
    if (!n) return null;
    const node = { v: n[0], depth };
    const L = walkBin(n[1], depth + 1, node);
    node.x = next++;
    nodes.push(node);
    const Rn = walkBin(n[2], depth + 1, node);
    if (L) edges.push([node, L, 'l']);
    if (Rn) edges.push([node, Rn, 'r']);
    if (parent === undefined) return node;
    return node;
  }
  function walkN(n, depth) {
    const node = { v: n.v, depth };
    const kids = (n.c || []).map((k) => walkN(k, depth + 1));
    if (!kids.length) node.x = next++;
    else node.x = (kids[0].x + kids[kids.length - 1].x) / 2;
    nodes.push(node);
    kids.forEach((k) => edges.push([node, k]));
    return node;
  }
  if (isBinary) walkBin(root, 0);
  else walkN(root, 0);
  const maxX = Math.max(...nodes.map((n) => n.x));
  const maxD = Math.max(...nodes.map((n) => n.depth));
  const w = (maxX + 1) * gx + 20;
  const h = (maxD + 1) * gy + (o.caption ? 10 : 0);
  const px = (n) => 10 + gx / 2 + n.x * gx;
  const py = (n) => r + 8 + n.depth * gy;
  let b = '';
  const hiE = new Set(o.hiEdges || []);
  edges.forEach(([a, c]) => {
    const cls = hiE.has(`${a.v}-${c.v}`) ? 'c1 thick' : 'mute';
    b += `<line x1="${r2(px(a))}" y1="${r2(py(a))}" x2="${r2(px(c))}" y2="${r2(py(c))}" class="ln ${cls}"/>`;
  });
  nodes.forEach((n) => {
    const cls = o.hi?.[n.v] || '';
    b += `<circle cx="${r2(px(n))}" cy="${r2(py(n))}" r="${r}" class="node ${cls}"/>`;
    b += text(px(n), py(n), n.v, `cv ${cls}`);
    if (o.notes?.[n.v]) b += text(px(n), py(n) + r + 11, o.notes[n.v], 'idx');
  });
  return svg(w, h + 6, b, o.title);
}

/* ───────────────────────── Graphs ───────────────────────── */

// graph({ nodes:{ A:[x,y] }, edges:[[a, b, label?, cls?]], directed, hi:{ A: cls }, w, h, r, notes:{ A: 'text' } })
// Coordinates are in pixels inside the w×h box.
export function graph(o) {
  const r = o.r || 18;
  let b = '';
  const pairs = new Set(o.edges.map(([a, c]) => `${a}>${c}`));
  o.edges.forEach(([a, c, label, cls = 'mute']) => {
    const [x1, y1] = o.nodes[a];
    const [x2, y2] = o.nodes[c];
    const d = Math.hypot(x2 - x1, y2 - y1);
    const ux = (x2 - x1) / d;
    const uy = (y2 - y1) / d;
    // Two directed edges between the same pair are drawn as gentle arcs.
    const bend = o.directed && pairs.has(`${c}>${a}`) ? 16 : 0;
    const sx = x1 + ux * r;
    const sy = y1 + uy * r;
    const ex = x2 - ux * (r + (o.directed ? 2 : 0));
    const ey = y2 - uy * (r + (o.directed ? 2 : 0));
    const mx = (sx + ex) / 2 - uy * bend;
    const my = (sy + ey) / 2 + ux * bend;
    b += `<path d="M${r2(sx)} ${r2(sy)}Q${r2(mx)} ${r2(my)} ${r2(ex)} ${r2(ey)}" class="ln ${cls}" fill="none"${o.directed ? ` marker-end="${marker(cls)}"` : ''}/>`;
    if (label !== undefined && label !== null && label !== '') {
      const lx = (x1 + x2) / 2 - uy * (bend + 11);
      const ly = (y1 + y2) / 2 + ux * (bend + 11);
      b += `<rect x="${r2(lx - 10)}" y="${r2(ly - 8)}" width="20" height="16" rx="4" class="elbl-bg"/>`;
      b += text(lx, ly, label, `elbl ${cls}`);
    }
  });
  Object.entries(o.nodes).forEach(([id, [x, y]]) => {
    const cls = o.hi?.[id] || '';
    b += `<circle cx="${x}" cy="${y}" r="${r}" class="node ${cls}"/>`;
    b += text(x, y, o.labels?.[id] ?? id, `cv ${cls}`);
    if (o.notes?.[id]) b += text(x, y + r + 11, o.notes[id], 'idx');
  });
  (o.texts || []).forEach((t) => (b += text(t.x, t.y, t.text, `lbl ${t.cls || ''}`, t.anchor || 'middle')));
  return svg(o.w, o.h, b, o.title);
}

/* ───────────────────────── Linked lists ───────────────────────── */

// list({ values, cycleTo, ptrs:[{ i, text, cls }], doubly, hi:{ i: cls }, head })
export function list(o) {
  const bw = 52;
  const gap = 34;
  const n = o.values.length;
  const tail = o.cycleTo == null && o.nullEnd !== false;
  const w = 20 + n * (bw + gap) + (tail ? 40 : 0);
  const h = o.cycleTo != null ? 120 : 96;
  const y = o.ptrs?.length ? 34 : 14;
  let b = '';
  o.values.forEach((v, i) => {
    const x = 10 + i * (bw + gap);
    const cls = o.hi?.[i] || '';
    b += `<rect x="${x}" y="${y}" width="${bw}" height="34" rx="7" class="cell ${cls}"/>`;
    b += `<line x1="${x + bw - 14}" y1="${y}" x2="${x + bw - 14}" y2="${y + 34}" class="ln mute"/>`;
    b += text(x + (bw - 14) / 2, y + 17, v, `cv ${cls}`);
    if (i < n - 1) {
      b += arrowLine(x + bw - 7, y + (o.doubly ? 11 : 17), x + bw + gap - 1, y + (o.doubly ? 11 : 17), 'mute');
      if (o.doubly) b += arrowLine(x + bw + gap, y + 24, x + bw + 1, y + 24, 'mute');
    }
  });
  if (tail) {
    const x = 10 + n * (bw + gap) - gap;
    b += arrowLine(x - 7, y + 17, x + 22, y + 17, 'mute');
    b += text(x + 36, y + 17, 'null', 'idx');
  }
  if (o.cycleTo != null) {
    const xa = 10 + (n - 1) * (bw + gap) + bw / 2;
    const xb = 10 + o.cycleTo * (bw + gap) + bw / 2;
    b += `<path d="M${xa} ${y + 34}V${y + 62}H${xb}V${y + 38}" class="ln c4" fill="none" marker-end="${marker('c4')}"/>`;
  }
  (o.ptrs || []).forEach((p) => {
    const x = 10 + p.i * (bw + gap) + (bw - 14) / 2;
    b += arrowLine(x, y - 20, x, y - 3, p.cls || 'c1');
    b += text(x, y - 27, p.text, `lbl ${p.cls || 'c1'}`);
  });
  return svg(w, h, b, o.title);
}

/* ───────────────────────── Box-and-arrow diagrams ───────────────────────── */

// flow({ w, h, boxes:[{ id, x, y, w, h, text, cls, shape }], arrows:[{ from, to, text, cls, dash, via:[[x,y]], fs, ts }], texts })
// Box x/y are the top-left corner. Arrow sides are picked automatically unless fs/ts ('l','r','t','b') are given.
export function flow(o) {
  const box = Object.fromEntries(o.boxes.map((bx) => [bx.id, { w: 120, h: 40, ...bx }]));
  const side = (bx, s) => {
    const { x, y, w, h } = bx;
    return { l: [x, y + h / 2], r: [x + w, y + h / 2], t: [x + w / 2, y], b: [x + w / 2, y + h] }[s];
  };
  const pick = (a, c) => {
    const dx = c.x + c.w / 2 - (a.x + a.w / 2);
    const dy = c.y + c.h / 2 - (a.y + a.h / 2);
    if (Math.abs(dx) * (a.h + c.h) > Math.abs(dy) * (a.w + c.w)) return dx > 0 ? ['r', 'l'] : ['l', 'r'];
    return dy > 0 ? ['b', 't'] : ['t', 'b'];
  };
  let b = '';
  o.boxes.forEach((bx0) => {
    const bx = box[bx0.id];
    const cls = bx.cls || '';
    if (bx.shape === 'circle') {
      b += `<ellipse cx="${bx.x + bx.w / 2}" cy="${bx.y + bx.h / 2}" rx="${bx.w / 2}" ry="${bx.h / 2}" class="bx ${cls}"/>`;
    } else if (bx.shape === 'db') {
      const e = 6;
      b += `<path d="M${bx.x} ${bx.y + e}V${bx.y + bx.h - e}A${bx.w / 2} ${e} 0 0 0 ${bx.x + bx.w} ${bx.y + bx.h - e}V${bx.y + e}A${bx.w / 2} ${e} 0 0 0 ${bx.x} ${bx.y + e}Z" class="bx ${cls}"/>`;
      b += `<path d="M${bx.x} ${bx.y + e}A${bx.w / 2} ${e} 0 0 0 ${bx.x + bx.w} ${bx.y + e}" class="ln mute" fill="none"/>`;
    } else {
      b += `<rect x="${bx.x}" y="${bx.y}" width="${bx.w}" height="${bx.h}" rx="${bx.rx ?? 9}" class="bx ${cls}"/>`;
    }
    b += text(bx.x + bx.w / 2, bx.y + bx.h / 2, bx.text, `bt ${cls}`);
  });
  (o.arrows || []).forEach((a) => {
    const A = box[a.from];
    const C = box[a.to];
    if (!A || !C) throw new Error(`flow(): arrow ${a.from} → ${a.to} refers to a missing box`);
    const [fs, ts] = pick(A, C);
    const p1 = side(A, a.fs || fs);
    const p2 = side(C, a.ts || ts);
    const pts = [p1, ...(a.via || []), p2];
    const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${r2(x)} ${r2(y)}`).join('');
    b += `<path d="${d}" class="ln ${a.cls || 'mute'}${a.dash ? ' dash' : ''}" fill="none" marker-end="${marker(a.cls)}"/>`;
    if (a.text) {
      const mid = pts.length > 2 ? pts[Math.floor(pts.length / 2)] : [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
      b += text(mid[0] + (a.dx || 0), mid[1] + (a.dy ?? -9), a.text, `lbl ${a.cls || ''}`);
    }
  });
  (o.texts || []).forEach((t) => (b += text(t.x, t.y, t.text, `lbl ${t.cls || ''}`, t.anchor || 'middle')));
  return svg(o.w, o.h, b, o.title);
}

/* ───────────────────────── Bar charts ───────────────────────── */

// bars({ items:[[label, value, cls]], max, w, h, line: true (cumulative line), fmt })
export function bars(o) {
  const w = o.w || 520;
  const h = o.h || 240;
  const m = { l: 40, r: 14, t: 18, b: 34 };
  const max = o.max || Math.max(...o.items.map((i) => i[1]));
  const n = o.items.length;
  const bw = (w - m.l - m.r) / n;
  const sy = (v) => m.t + (1 - v / max) * (h - m.t - m.b);
  let b = `<line x1="${m.l}" y1="${h - m.b}" x2="${w - m.r}" y2="${h - m.b}" class="ax"/><line x1="${m.l}" y1="${m.t}" x2="${m.l}" y2="${h - m.b}" class="ax"/>`;
  (o.yticks || []).forEach((t) => {
    b += `<line x1="${m.l}" y1="${r2(sy(t))}" x2="${w - m.r}" y2="${r2(sy(t))}" class="grid"/>`;
    b += text(m.l - 6, sy(t), o.fmt ? o.fmt(t) : t, 'tick', 'end');
  });
  let cum = 0;
  const cpts = [];
  o.items.forEach(([label, v, cls], i) => {
    const x = m.l + i * bw + bw * 0.15;
    b += `<rect x="${r2(x)}" y="${r2(sy(v))}" width="${r2(bw * 0.7)}" height="${r2(h - m.b - sy(v))}" rx="4" class="bar ${cls || 'c1'}"/>`;
    b += text(x + bw * 0.35, h - m.b + 13, label, 'tick');
    if (o.values !== false) b += text(x + bw * 0.35, sy(v) - 8, o.fmt ? o.fmt(v) : v, 'lbl');
    cum += v;
    cpts.push([x + bw * 0.35, sy(cum)]);
  });
  if (o.line) {
    b += `<path d="${cpts.map(([x, y], i) => `${i ? 'L' : 'M'}${r2(x)} ${r2(y)}`).join('')}" class="curve c2"/>`;
    cpts.forEach(([x, y]) => (b += `<circle cx="${r2(x)}" cy="${r2(y)}" r="3.5" class="pt c2"/>`));
  }
  if (o.xlabel) b += text((m.l + w - m.r) / 2, h - 6, o.xlabel, 'axl');
  return svg(w, h, b, o.title);
}

/* ───────────────────────── Venn (SQL joins) ───────────────────────── */

// venn({ fill: 'inner' | 'left' | 'right' | 'full' | 'leftOnly' | 'rightOnly' | 'outerOnly', a, b, title })
export function venn(o) {
  const w = 220;
  const h = 150;
  const ca = [84, 72];
  const cb = [136, 72];
  const R = 52;
  const id = nextId('vzv');
  const A = `<circle cx="${ca[0]}" cy="${ca[1]}" r="${R}"/>`;
  const B = `<circle cx="${cb[0]}" cy="${cb[1]}" r="${R}"/>`;
  let b = `<defs><clipPath id="${id}a">${A}</clipPath><clipPath id="${id}b">${B}</clipPath>
<mask id="${id}na"><rect width="${w}" height="${h}" fill="white"/><circle cx="${ca[0]}" cy="${ca[1]}" r="${R}" fill="black"/></mask>
<mask id="${id}nb"><rect width="${w}" height="${h}" fill="white"/><circle cx="${cb[0]}" cy="${cb[1]}" r="${R}" fill="black"/></mask></defs>`;
  const fillA = `<circle cx="${ca[0]}" cy="${ca[1]}" r="${R}" class="vf"`;
  const fillB = `<circle cx="${cb[0]}" cy="${cb[1]}" r="${R}" class="vf"`;
  const f = o.fill;
  if (f === 'inner') b += `${fillA} clip-path="url(#${id}b)"/>`;
  if (f === 'left' || f === 'full') b += `${fillA}/>`;
  if (f === 'right' || f === 'full') b += `${fillB}/>`;
  if (f === 'leftOnly' || f === 'outerOnly') b += `${fillA} mask="url(#${id}nb)"/>`;
  if (f === 'rightOnly' || f === 'outerOnly') b += `${fillB} mask="url(#${id}na)"/>`;
  b += `<circle cx="${ca[0]}" cy="${ca[1]}" r="${R}" class="vo"/><circle cx="${cb[0]}" cy="${cb[1]}" r="${R}" class="vo"/>`;
  b += text(ca[0] - 22, ca[1], o.a || 'A', 'cv');
  b += text(cb[0] + 22, cb[1], o.b || 'B', 'cv');
  if (o.title) b += text(w / 2, h - 8, o.title, 'lbl');
  return svg(w, h, b, o.title);
}

/* ───────────────────────── Helpers for common curves ───────────────────────── */

export const fns = {
  normal: (mu = 0, s = 1) => (x) => Math.exp(-((x - mu) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI)),
  sigmoid: (x) => 1 / (1 + Math.exp(-x)),
  tanh: (x) => Math.tanh(x),
  relu: (x) => Math.max(0, x),
};

/* ───────────────────────── Reproducible data for figures ───────────────────────── */

// Seeded PRNG (mulberry32) so figures are identical on every build.
export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Standard normal draws (Box–Muller) from a seeded uniform source.
export function randn(u) {
  return () => {
    const a = Math.max(u(), 1e-12);
    return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * u());
  };
}

export function pearson(xs, ys) {
  const n = xs.length;
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
    syy += (ys[i] - my) ** 2;
  }
  return sxy / Math.sqrt(sxx * syy);
}

// Box-plot figure from a list of values (Tukey whiskers at 1.5 × IQR).
export function boxplot(values, o = {}) {
  const v = [...values].sort((a, b) => a - b);
  const q = (p) => {
    const i = (v.length - 1) * p;
    const lo = Math.floor(i);
    return v[lo] + (v[Math.ceil(i)] - v[lo]) * (i - lo);
  };
  const [q1, med, q3] = [q(0.25), q(0.5), q(0.75)];
  const iqr = q3 - q1;
  const loF = q1 - 1.5 * iqr;
  const hiF = q3 + 1.5 * iqr;
  const inside = v.filter((x) => x >= loF && x <= hiF);
  const wl = inside[0];
  const wh = inside[inside.length - 1];
  const outl = v.filter((x) => x < loF || x > hiF);
  const [x0, x1] = o.x || [Math.min(v[0], loF) - 1, Math.max(v[v.length - 1], hiF) + 1];
  const y = 1;
  const box = [
    { x1: q1, y1: y - 0.35, x2: q3, y2: y - 0.35, cls: 'c2' },
    { x1: q1, y1: y + 0.35, x2: q3, y2: y + 0.35, cls: 'c2' },
    { x1: q1, y1: y - 0.35, x2: q1, y2: y + 0.35, cls: 'c2' },
    { x1: q3, y1: y - 0.35, x2: q3, y2: y + 0.35, cls: 'c2' },
    { x1: med, y1: y - 0.35, x2: med, y2: y + 0.35, cls: 'c1 thick' },
    { x1: wl, y1: y, x2: q1, y2: y, cls: 'mute' },
    { x1: q3, y1: y, x2: wh, y2: y, cls: 'mute' },
    { x1: wl, y1: y - 0.18, x2: wl, y2: y + 0.18, cls: 'mute' },
    { x1: wh, y1: y - 0.18, x2: wh, y2: y + 0.18, cls: 'mute' },
  ];
  const fmt = (n) => (Math.round(n * 10) / 10).toString();
  return {
    svg: plot({
      w: o.w || 560,
      h: o.h || 170,
      x: [x0, x1],
      y: [0, 2],
      xticks: o.xticks,
      yticks: [],
      frame: true,
      xlabel: o.xlabel || '',
      segments: box,
      points: outl.map((x) => ({ x, y, cls: 'c4', r: 4 })),
      labels: [
        { x: q1, y: 1.72, text: `Q1 ${fmt(q1)}`, cls: 'c2' },
        { x: med, y: 0.28, text: `median ${fmt(med)}`, cls: 'c1' },
        { x: q3, y: 1.72, text: `Q3 ${fmt(q3)}`, cls: 'c2' },
        ...(outl.length ? [{ x: outl[outl.length - 1], y: 1.5, text: 'outlier', cls: 'c4' }] : []),
      ],
    }),
    stats: { q1, med, q3, iqr, loF, hiF, wl, wh, outliers: outl },
  };
}
