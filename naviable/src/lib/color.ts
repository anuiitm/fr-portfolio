// Colour maths for the contrast checker and palette tools. WCAG 2.2 formulas.

export type RGB = [number, number, number];

export function hexToRgb(hex: string): RGB | null {
  const m = hex.trim().replace(/^#/, '');
  const full = m.length === 3 ? m.split('').map((c) => c + c).join('') : m;
  if (!/^[0-9a-f]{6}$/i.test(full)) return null;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as RGB;
}

export const rgbToHex = ([r, g, b]: RGB) => `#${[r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`;

const channel = (v: number) => {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

export const luminance = ([r, g, b]: RGB) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

export function contrast(a: RGB, b: RGB) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export function grade(ratio: number) {
  return {
    normalAA: ratio >= 4.5,
    normalAAA: ratio >= 7,
    largeAA: ratio >= 3,
    largeAAA: ratio >= 4.5,
  };
}

// Nudge the foreground lighter or darker until it passes AA; returns null if
// already passing.
export function suggestFix(fg: RGB, bg: RGB, target = 4.5): RGB | null {
  if (contrast(fg, bg) >= target) return null;
  const darker = luminance(bg) > 0.5;
  let c: RGB = [...fg];
  for (let i = 0; i < 100 && contrast(c, bg) < target; i += 1) {
    c = c.map((v) => (darker ? v * 0.96 : v + (255 - v) * 0.06)) as RGB;
  }
  return c.map(Math.round) as RGB;
}

// Colour-vision deficiency simulation (Machado et al. 2009, severity 1.0),
// applied in linear RGB.
const CVD: Record<string, number[]> = {
  protanopia: [0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216, -0.003882, -0.048116, 1.051998],
  deuteranopia: [0.367322, 0.860646, -0.227968, 0.280085, 0.672501, 0.047413, -0.01182, 0.04294, 0.968881],
  tritanopia: [1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602, 0.004733, 0.691367, 0.3039],
};
export const CVD_TYPES = Object.keys(CVD);

const toSrgb = (v: number) => 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055);

export function simulate(rgb: RGB, type: string): RGB {
  const m = CVD[type];
  const [r, g, b] = rgb.map(channel);
  return [m[0] * r + m[1] * g + m[2] * b, m[3] * r + m[4] * g + m[5] * b, m[6] * r + m[7] * g + m[8] * b].map((v) =>
    Math.min(255, Math.max(0, toSrgb(Math.min(1, Math.max(0, v))))),
  ) as RGB;
}

export function simulateImage(data: ImageData, type: string) {
  const out = new ImageData(data.width, data.height);
  const cache = new Map<number, RGB>();
  for (let i = 0; i < data.data.length; i += 4) {
    const key = (data.data[i] << 16) | (data.data[i + 1] << 8) | data.data[i + 2];
    let c = cache.get(key);
    if (!c) {
      c = simulate([data.data[i], data.data[i + 1], data.data[i + 2]], type);
      if (cache.size < 50000) cache.set(key, c);
    }
    out.data[i] = c[0];
    out.data[i + 1] = c[1];
    out.data[i + 2] = c[2];
    out.data[i + 3] = data.data[i + 3];
  }
  return out;
}

// Dominant colours: bucket pixels into a 4-bit-per-channel grid, then merge
// buckets that are close. Fast enough for a 300px thumbnail.
export function palette(data: ImageData, count = 6): { rgb: RGB; share: number }[] {
  const buckets = new Map<number, { sum: RGB; n: number }>();
  let total = 0;
  for (let i = 0; i < data.data.length; i += 4) {
    if (data.data[i + 3] < 128) continue;
    const r = data.data[i], g = data.data[i + 1], b = data.data[i + 2];
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    const bk = buckets.get(key) ?? { sum: [0, 0, 0], n: 0 };
    bk.sum[0] += r;
    bk.sum[1] += g;
    bk.sum[2] += b;
    bk.n += 1;
    buckets.set(key, bk);
    total += 1;
  }
  const colours = [...buckets.values()]
    .map((b) => ({ rgb: b.sum.map((v) => v / b.n) as RGB, n: b.n }))
    .sort((a, b) => b.n - a.n);
  const picked: { rgb: RGB; n: number }[] = [];
  for (const c of colours) {
    const near = picked.find((p) => Math.hypot(p.rgb[0] - c.rgb[0], p.rgb[1] - c.rgb[1], p.rgb[2] - c.rgb[2]) < 48);
    if (near) near.n += c.n;
    else picked.push({ ...c });
  }
  return picked
    .sort((a, b) => b.n - a.n)
    .slice(0, count)
    .map((p) => ({ rgb: p.rgb.map(Math.round) as RGB, share: p.n / total }))
    .filter((p) => p.share >= 0.01); // drops anti-aliasing fringes
}
