'use client';

import { useEffect } from 'react';

// Display equations cannot wrap. Scale any that are wider than their box down to fit
// (to at most 65% of their size; beyond that the box scrolls horizontally).
const SELECTOR = '.n-math-eq .katex-display, .n-formula-eq .katex-display';
const MIN = 0.65;

function fit(root) {
  root.querySelectorAll(SELECTOR).forEach((el) => {
    const k = el.querySelector(':scope > .katex');
    if (!k) return;
    k.style.fontSize = '';
    const avail = el.clientWidth;
    const need = k.scrollWidth;
    if (need > avail && avail > 0) {
      const px = parseFloat(getComputedStyle(k).fontSize);
      k.style.fontSize = `${px * Math.max(MIN, (avail - 2) / need)}px`;
    }
  });
}

export default function FitMath() {
  useEffect(() => {
    const root = document.querySelector('.note-body') || document.body;
    let raf = 0;
    const run = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => fit(root));
    };
    run();
    document.fonts?.ready.then(run);
    const ro = new ResizeObserver(run);
    ro.observe(root);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);
  return null;
}
