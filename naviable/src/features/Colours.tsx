import { useEffect, useRef, useState } from 'react';
import { CVD_TYPES, contrast, grade, hexToRgb, palette, rgbToHex, simulateImage, suggestFix, type RGB } from '../lib/color';

export default function Colours() {
  return (
    <div className="colours">
      <ContrastChecker />
      <ImageCheck />
    </div>
  );
}

function ContrastChecker() {
  const [fg, setFg] = useState('#8a8f98');
  const [bg, setBg] = useState('#ffffff');
  const f = hexToRgb(fg);
  const b = hexToRgb(bg);
  const ratio = f && b ? contrast(f, b) : null;
  const g = ratio ? grade(ratio) : null;
  const fix = f && b ? suggestFix(f, b) : null;

  return (
    <section className="panel">
      <h2 className="panel-title">Contrast checker</h2>
      <div className="pickers">
        <ColourField label="Text" value={fg} onChange={setFg} />
        <ColourField label="Background" value={bg} onChange={setBg} />
        <button type="button" className="btn" onClick={() => {
            setFg(bg);
            setBg(fg);
          }}>
          Swap
        </button>
      </div>
      <div className="swatch-preview" style={{ color: fg, background: bg }}>
        <p className="big">Large text, 24px</p>
        <p>Body text at 16px. Minimum balance changes from 1 December.</p>
      </div>
      {ratio && g && (
        <>
          <p className="ratio">
            <b>{ratio.toFixed(2)}:1</b>
          </p>
          <ul className="grades">
            <Grade ok={g.normalAA} label="AA body text (4.5:1)" />
            <Grade ok={g.normalAAA} label="AAA body text (7:1)" />
            <Grade ok={g.largeAA} label="AA large text (3:1)" />
            <Grade ok={g.largeAAA} label="AAA large text (4.5:1)" />
          </ul>
          {fix && (
            <p className="fix">
              Closest passing text colour: <span className="mini-swatch" style={{ background: rgbToHex(fix) }} />
              <code>{rgbToHex(fix)}</code>
              <button type="button" className="btn btn-sm" onClick={() => setFg(rgbToHex(fix))}>
                Use it
              </button>
            </p>
          )}
        </>
      )}
    </section>
  );
}

function ColourField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);
  const id = `c-${label}`;
  return (
    <div className="colour-field">
      <label htmlFor={id}>{label}</label>
      <div>
        <input type="color" value={hexToRgb(value) ? value : '#000000'} onChange={(e) => onChange(e.target.value)} aria-label={`${label} colour picker`} />
        <input
          id={id}
          value={draft}
          spellCheck={false}
          aria-invalid={!hexToRgb(draft)}
          onChange={(e) => {
            setDraft(e.target.value);
            if (hexToRgb(e.target.value)) onChange(e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`);
          }}
        />
      </div>
    </div>
  );
}

const Grade = ({ ok, label }: { ok: boolean; label: string }) => (
  <li className={ok ? 'pass' : 'fail'}>
    <span aria-hidden="true">{ok ? '✓' : '✗'}</span> {label} <span className="sr-only">{ok ? 'passes' : 'fails'}</span>
  </li>
);

const W = 360;

// Upload an image (or use the sample): its palette, each colour's contrast
// against white and black, and how it looks with three colour-vision deficiencies.
function ImageCheck() {
  const source = useRef<HTMLCanvasElement>(null);
  const [colours, setColours] = useState<{ rgb: RGB; share: number }[]>([]);
  const [cvd, setCvd] = useState('deuteranopia');
  const [sim, setSim] = useState<string | null>(null);
  const [name, setName] = useState('Sample poster');

  const analyse = () => {
    const c = source.current!;
    const data = c.getContext('2d')!.getImageData(0, 0, c.width, c.height);
    setColours(palette(data));
    const out = document.createElement('canvas');
    out.width = c.width;
    out.height = c.height;
    out.getContext('2d')!.putImageData(simulateImage(data, cvd), 0, 0);
    setSim(out.toDataURL());
  };

  useEffect(() => {
    if (name === 'Sample poster') drawSample(source.current!);
    analyse();
  }, [cvd, name]);

  const load = (file?: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const img = new Image();
    img.onload = () => {
      const c = source.current!;
      c.width = W;
      c.height = Math.round((img.height / img.width) * W);
      c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(img.src);
      setName(file.name);
      analyse();
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <section className="panel">
      <h2 className="panel-title">Image colours</h2>
      <div className="tool-actions">
        <label className="btn">
          Upload an image
          <input type="file" accept="image/*" className="sr-only" onChange={(e) => load(e.target.files?.[0])} />
        </label>
        <label className="inline">
          Simulate
          <select value={cvd} onChange={(e) => setCvd(e.target.value)}>
            {CVD_TYPES.map((t) => (
              <option key={t} value={t}>
                {t[0].toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="image-pair">
        <figure>
          <canvas ref={source} width={W} height={200} aria-label={`${name}, original`} role="img" />
          <figcaption>{name}</figcaption>
        </figure>
        <figure>
          {sim && <img src={sim} alt={`${name} as seen with ${cvd}`} />}
          <figcaption>As seen with {cvd}</figcaption>
        </figure>
      </div>
      <ul className="palette">
        {colours.map((c) => {
          const hex = rgbToHex(c.rgb);
          const onWhite = contrast(c.rgb, [255, 255, 255]);
          const onBlack = contrast(c.rgb, [0, 0, 0]);
          return (
            <li key={hex}>
              <span className="pal-swatch" style={{ background: hex }} />
              <code>{hex}</code>
              <span className="small muted">{Math.round(c.share * 100)}%</span>
              <span className="small">
                vs white {onWhite.toFixed(1)}, vs black {onBlack.toFixed(1)}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function drawSample(c: HTMLCanvasElement) {
  c.width = W;
  c.height = 200;
  const g = c.getContext('2d')!;
  g.fillStyle = '#f4efe6';
  g.fillRect(0, 0, W, 200);
  g.fillStyle = '#d64545';
  g.fillRect(20, 30, 150, 60);
  g.fillStyle = '#3c9d4e';
  g.fillRect(190, 30, 150, 60);
  g.fillStyle = '#1d4e89';
  g.fillRect(20, 110, 320, 60);
  g.fillStyle = '#fff';
  g.font = 'bold 18px sans-serif';
  g.fillText('Stop', 70, 66);
  g.fillText('Go', 250, 66);
  g.fillText('Information', 120, 146);
}
