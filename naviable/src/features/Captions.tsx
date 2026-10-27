import { useEffect, useRef, useState } from 'react';
import { canListen, useListener } from '../lib/speech';

type Line = { at: number; text: string };

const stamp = (ms: number, sep = '.') => {
  const t = new Date(ms).toISOString().slice(11, 23);
  return sep === '.' ? t : t.replace('.', sep);
};

// Live captions from the microphone, the browser-only replacement for the
// original's server-side AWS Transcribe job.
export default function Captions() {
  const [lines, setLines] = useState<Line[]>([]);
  const [size, setSize] = useState(28);
  const started = useRef(0);
  const end = useRef<HTMLDivElement>(null);
  const mic = useListener((text) => text && setLines((l) => [...l, { at: Date.now() - started.current, text }]));

  useEffect(() => end.current?.scrollIntoView({ block: 'end' }), [lines, mic.interim]);

  const start = () => {
    if (!lines.length) started.current = Date.now();
    mic.start();
  };

  const vtt = () =>
    'WEBVTT\n\n' +
    lines
      .map((l, i) => {
        const next = lines[i + 1]?.at ?? l.at + 3000;
        return `${i + 1}\n${stamp(l.at)} --> ${stamp(Math.max(next, l.at + 800))}\n${l.text}\n`;
      })
      .join('\n');

  const save = (name: string, body: string) => {
    const url = URL.createObjectURL(new Blob([body], { type: 'text/plain' }));
    Object.assign(document.createElement('a'), { href: url, download: name }).click();
    URL.revokeObjectURL(url);
  };

  if (!canListen) {
    return (
      <section className="panel">
        <h2 className="panel-title">Live captions</h2>
        <p>This browser has no speech recognition. Open the page in Chrome or Edge to try live captions.</p>
      </section>
    );
  }

  return (
    <section className="panel captions">
      <div className="tool-actions">
        <button type="button" className={`btn${mic.on ? ' is-on' : ' btn-primary'}`} onClick={mic.on ? mic.stop : start} aria-pressed={mic.on}>
          {mic.on ? '● Stop captions' : 'Start captions'}
        </button>
        <label className="inline">
          Size
          <input type="range" min="18" max="48" value={size} onChange={(e) => setSize(Number(e.target.value))} />
        </label>
        <button type="button" className="btn" disabled={!lines.length} onClick={() => save('captions.vtt', vtt())}>
          Download .vtt
        </button>
        <button type="button" className="btn" disabled={!lines.length} onClick={() => save('transcript.txt', lines.map((l) => l.text).join('\n'))}>
          Transcript
        </button>
        <button type="button" className="btn" disabled={!lines.length || mic.on} onClick={() => setLines([])}>
          Clear
        </button>
      </div>
      {mic.error && <p className="error">{mic.error}</p>}
      <div className="caption-screen" style={{ fontSize: size }} aria-live="polite">
        {lines.length === 0 && !mic.interim && <p className="muted caption-hint">Press start and speak. Captions appear here as you talk, and the browser never sends the audio to a server.</p>}
        {lines.map((l, i) => (
          <p key={i}>
            <time>{stamp(l.at).slice(3, 8)}</time> {l.text}
          </p>
        ))}
        {mic.interim && <p className="interim">{mic.interim}</p>}
        <div ref={end} />
      </div>
    </section>
  );
}
