'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { activeWorkspace, workspaces } from '@/lib/workspaces';

// Liquid glass, after Apple's 2025 material: the backdrop is refracted at the
// edges (an SVG displacement map, with a slight per-channel offset for colour
// fringing), lit by a specular rim, and the active tab is a lens that slides.
// Refraction via `backdrop-filter: url()` only works in Chromium; other
// browsers get the same layers over a plain blur.

const FILTER_ID = 'lg-nav-refraction';

// Displacement map for a pill of the given size. Red encodes x, blue encodes y;
// the blurred mid-grey core means "no displacement", so only the rim bends light.
function displacementMap(w, h) {
  const r = h / 2;
  const edge = Math.max(6, h * 0.2);
  const soft = Math.max(3, h * 0.12);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
<linearGradient id="x" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" stop-color="#000"/><stop offset="100%" stop-color="#f00"/></linearGradient>
<linearGradient id="y" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#000"/><stop offset="100%" stop-color="#00f"/></linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="#000"/>
<rect width="${w}" height="${h}" rx="${r}" fill="url(#x)"/>
<rect width="${w}" height="${h}" rx="${r}" fill="url(#y)" style="mix-blend-mode:difference"/>
<rect x="${edge}" y="${edge}" width="${Math.max(0, w - edge * 2)}" height="${Math.max(0, h - edge * 2)}" rx="${Math.max(0, r - edge)}" fill="hsl(0 0% 50% / 0.94)" style="filter:blur(${soft}px)"/>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function supportsRefraction() {
  if (typeof navigator === 'undefined') return false;
  const brands = navigator.userAgentData?.brands;
  if (brands) return brands.some((b) => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand));
  return /Chrome\//.test(navigator.userAgent);
}

export default function GlassNav() {
  const pathname = usePathname();
  const active = activeWorkspace(pathname);
  const navRef = useRef(null);
  const tabRefs = useRef({});
  const [size, setSize] = useState(null);
  const [thumb, setThumb] = useState(null);
  const [refract, setRefract] = useState(false);

  useEffect(() => setRefract(supportsRefraction()), []);

  const measure = useCallback(() => {
    const nav = navRef.current;
    const tab = tabRefs.current[active.id];
    if (!nav || !tab) return;
    setSize({ w: Math.round(nav.offsetWidth), h: Math.round(nav.offsetHeight) });
    // A tab's offsetLeft is measured from the tab list, which sits inside the nav's padding;
    // the thumb is positioned from the nav itself, so add the list's own offset.
    setThumb({ x: tab.offsetParent.offsetLeft + tab.offsetLeft, w: tab.offsetWidth });
  }, [active.id]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  // Squish the lens only when it actually travels, not on first paint.
  const [squish, setSquish] = useState(0);
  const lastId = useRef(active.id);
  useEffect(() => {
    if (lastId.current !== active.id) {
      setSquish((n) => n + 1);
      lastId.current = active.id;
    }
  }, [active.id]);

  function onPointerMove(e) {
    const nav = navRef.current;
    if (!nav) return;
    const r = nav.getBoundingClientRect();
    nav.style.setProperty('--mx', `${e.clientX - r.left}px`);
    nav.style.setProperty('--my', `${e.clientY - r.top}px`);
    nav.style.setProperty('--glow', '1');
  }
  function onPointerLeave() {
    navRef.current?.style.setProperty('--glow', '0');
  }

  return (
    <div className="lg-dock">
      {refract && size && (
        <svg className="lg-defs" width="0" height="0" aria-hidden focusable="false">
          <filter id={FILTER_ID} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feImage href={displacementMap(size.w, size.h)} x="0" y="0" width={size.w} height={size.h} preserveAspectRatio="none" result="map" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale="-54" xChannelSelector="R" yChannelSelector="B" result="dr" />
            <feColorMatrix in="dr" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale="-48" xChannelSelector="R" yChannelSelector="B" result="dg" />
            <feColorMatrix in="dg" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale="-42" xChannelSelector="R" yChannelSelector="B" result="db" />
            <feColorMatrix in="db" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b" />
            <feBlend in="r" in2="g" mode="screen" result="rg" />
            <feBlend in="rg" in2="b" mode="screen" result="rgb" />
            <feGaussianBlur in="rgb" stdDeviation="0.4" />
          </filter>
        </svg>
      )}

      <nav
        ref={navRef}
        className={`lg-nav ${refract ? 'has-refraction' : ''}`}
        aria-label="Workspaces"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <span className="lg-lens" aria-hidden />
        <span className="lg-tint" aria-hidden />
        <span className="lg-glow" aria-hidden />
        <span className="lg-rim" aria-hidden />
        {thumb && (
          <span
            className={`lg-thumb ${squish ? '' : 'no-anim'}`}
            style={{ transform: `translateX(${thumb.x}px)`, width: thumb.w }}
            aria-hidden
          >
            <i key={squish} className={squish ? 'is-squishing' : ''} />
          </span>
        )}
        <ul className="lg-tabs">
          {workspaces.map((w) => {
            const on = w.id === active.id;
            return (
              <li key={w.id}>
                <Link
                  href={w.href}
                  ref={(el) => (tabRefs.current[w.id] = el)}
                  className={`lg-tab ${on ? 'is-active' : ''}`}
                  aria-current={on ? 'page' : undefined}
                >
                  {w.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
