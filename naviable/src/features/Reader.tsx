import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { audit, type Issue } from '../lib/audit';
import { canListen, canSpeak, speak, stopSpeaking, useListener } from '../lib/speech';

type Prefs = { size: number; spacing: boolean; readable: boolean; contrast: 'normal' | 'high'; links: boolean; guide: boolean; images: boolean };
const DEFAULTS: Prefs = { size: 100, spacing: false, readable: false, contrast: 'normal', links: false, guide: false, images: true };

// Phrases → actions. Matching is "contains", so "please make text bigger" works.
const COMMANDS: [RegExp, string][] = [
  [/bigger|larger|zoom in/, 'bigger'],
  [/smaller|zoom out/, 'smaller'],
  [/scroll down|down/, 'down'],
  [/scroll up|up/, 'up'],
  [/contrast/, 'contrast'],
  [/read( the)? page|read aloud/, 'read'],
  [/stop|quiet/, 'stop'],
  [/next heading/, 'heading'],
  [/check|audit/, 'audit'],
  [/reset/, 'reset'],
];

export default function Reader() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const [fixed, setFixed] = useState(false);
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const [guideY, setGuideY] = useState(0);
  const page = useRef<HTMLDivElement>(null);
  const headingIx = useRef(-1);
  const set = (patch: Partial<Prefs>) => setPrefs((p) => ({ ...p, ...patch }));

  const runAudit = () => setIssues(audit(page.current!));
  useEffect(() => {
    if (issues) runAudit();
    // Re-run when the version shown changes so the count stays honest.
  }, [fixed]);

  const doCommand = (said: string) => {
    const hit = COMMANDS.find(([rx]) => rx.test(said.toLowerCase()));
    setLog((l) => [`“${said}” → ${hit ? hit[1] : 'not a command'}`, ...l].slice(0, 6));
    if (!hit) return;
    const scroller = page.current!;
    switch (hit[1]) {
      case 'bigger':
        return setPrefs((p) => ({ ...p, size: Math.min(200, p.size + 20) }));
      case 'smaller':
        return setPrefs((p) => ({ ...p, size: Math.max(80, p.size - 20) }));
      case 'down':
        return scroller.scrollBy({ top: 240, behavior: 'smooth' });
      case 'up':
        return scroller.scrollBy({ top: -240, behavior: 'smooth' });
      case 'contrast':
        return setPrefs((p) => ({ ...p, contrast: p.contrast === 'high' ? 'normal' : 'high' }));
      case 'read':
        return speak(scroller.innerText);
      case 'stop':
        return stopSpeaking();
      case 'heading': {
        const hs = scroller.querySelectorAll<HTMLElement>('h1, h2, h3, h4');
        headingIx.current = (headingIx.current + 1) % hs.length;
        hs[headingIx.current].scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      case 'audit':
        return runAudit();
      case 'reset':
        return setPrefs(DEFAULTS);
    }
  };
  const mic = useListener(doCommand);

  const style = { '--reader-size': `${prefs.size}%` } as CSSProperties;
  const classes = ['page', prefs.spacing && 'is-spaced', prefs.readable && 'is-readable', prefs.contrast === 'high' && 'is-contrast', prefs.links && 'is-links', !prefs.images && 'no-images'].filter(Boolean).join(' ');

  const showIssue = (i: Issue) => {
    page.current?.querySelectorAll('.flagged').forEach((n) => n.classList.remove('flagged'));
    i.el.classList.add('flagged');
    i.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="reader">
      <aside className="toolbar" aria-label="Reading tools">
        <h2 className="tool-title">Reading tools</h2>
        <div className="tool">
          <span id="size-label">Text size</span>
          <div className="stepper" role="group" aria-labelledby="size-label">
            <button type="button" onClick={() => set({ size: Math.max(80, prefs.size - 20) })} aria-label="Smaller text">
              A−
            </button>
            <output aria-live="polite">{prefs.size}%</output>
            <button type="button" onClick={() => set({ size: Math.min(200, prefs.size + 20) })} aria-label="Larger text">
              A+
            </button>
          </div>
        </div>
        <Toggle label="Wider spacing" on={prefs.spacing} onChange={(v) => set({ spacing: v })} />
        <Toggle label="Readable font" hint="Heavier letters, no italics" on={prefs.readable} onChange={(v) => set({ readable: v })} />
        <Toggle label="High contrast" on={prefs.contrast === 'high'} onChange={(v) => set({ contrast: v ? 'high' : 'normal' })} />
        <Toggle label="Highlight links" on={prefs.links} onChange={(v) => set({ links: v })} />
        <Toggle label="Reading guide" hint="A band that follows the pointer" on={prefs.guide} onChange={(v) => set({ guide: v })} />
        <Toggle label="Show images" on={prefs.images} onChange={(v) => set({ images: v })} />

        <div className="tool-actions">
          <button type="button" className="btn" disabled={!canSpeak} onClick={() => speak(page.current!.innerText)}>
            Read aloud
          </button>
          <button type="button" className="btn" disabled={!canSpeak} onClick={stopSpeaking}>
            Stop
          </button>
        </div>

        <div className="voice">
          <button type="button" className={`btn btn-block${mic.on ? ' is-on' : ''}`} disabled={!canListen} onClick={mic.on ? mic.stop : mic.start} aria-pressed={mic.on}>
            {mic.on ? '● Listening… tap to stop' : 'Voice commands'}
          </button>
          {!canListen && <p className="small muted">Voice commands need Chrome or Edge.</p>}
          {mic.error && <p className="small error">{mic.error}</p>}
          {mic.on && <p className="small muted">Try “bigger”, “scroll down”, “next heading”, “read page”, “check page”.</p>}
          {mic.interim && <p className="small interim">{mic.interim}</p>}
          {log.length > 0 && (
            <ul className="voice-log" aria-live="polite">
              {log.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      <section className="stage" aria-label="Sample page">
        <div className="stage-bar">
          <div className="seg" role="group" aria-label="Sample page version">
            <button type="button" aria-pressed={!fixed} onClick={() => setFixed(false)}>
              As published
            </button>
            <button type="button" aria-pressed={fixed} onClick={() => setFixed(true)}>
              Fixed
            </button>
          </div>
          <button type="button" className="btn btn-primary" onClick={runAudit}>
            Check this page
          </button>
        </div>
        <div className="page-frame" onPointerMove={(e) => prefs.guide && setGuideY(e.clientY - e.currentTarget.getBoundingClientRect().top)}>
          <div ref={page} className={classes} style={style} tabIndex={0} aria-label="Sample bank notice">
            {fixed ? <FixedNotice /> : <BrokenNotice />}
          </div>
          {prefs.guide && <div className="guide" style={{ top: guideY - 22 }} aria-hidden="true" />}
        </div>
        {issues && (
          <div className="issues" aria-live="polite">
            <h2>{issues.length ? `${issues.length} problems found` : 'No problems found'}</h2>
            {issues.length > 0 && (
              <ol>
                {issues.map((i) => (
                  <li key={i.id} className={`issue issue-${i.severity}`}>
                    <button type="button" onClick={() => showIssue(i)}>
                      <b>{i.rule}</b> {i.message}
                    </button>
                    <span className="small muted">{i.fix}</span>
                  </li>
                ))}
              </ol>
            )}
            {!fixed && issues.length > 0 && <p className="small muted">Switch to “Fixed” to see the same page with these resolved.</p>}
          </div>
        )}
      </section>
    </div>
  );
}

function Toggle({ label, hint, on, onChange }: { label: string; hint?: string; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="tool toggle">
      <span>
        {label}
        {hint && <small className="muted">{hint}</small>}
      </span>
      <input type="checkbox" role="switch" checked={on} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
}

// A realistic page with the mistakes the audit looks for. Kept deliberately.
function BrokenNotice() {
  return (
    <article className="notice">
      <h1>Changes to your savings account</h1>
      <img src={CHART} width="320" height="120" />
      <p>
        With effect from 1 December, the minimum balance applicable to your account shall be revised in accordance with the
        schedule of charges, and customers who fail to maintain the requisite balance will be charged a fee.
      </p>
      <h4>What you need to do</h4>
      <p className="faint">Please ensure that sufficient funds are available prior to the commencement of the new quarter.</p>
      <p>
        To see the full fee schedule, <a href="#fees">click here</a>.
      </p>
      <form className="notice-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email for reminders" />
        <button type="submit" className="icon-only">
          ✉
        </button>
      </form>
    </article>
  );
}

function FixedNotice() {
  return (
    <article className="notice">
      <h1>Changes to your savings account</h1>
      <img src={CHART} width="320" height="120" alt="Bar chart: the minimum balance rises from ₹5,000 to ₹10,000 on 1 December." />
      <p>From 1 December, the minimum balance for your account goes up. If your balance falls below it, you will pay a fee.</p>
      <h2>What you need to do</h2>
      <p>Make sure you have enough money in your account before the new quarter starts.</p>
      <p>
        <a href="#fees">Read the full fee schedule</a>.
      </p>
      <form className="notice-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="remind-email">Email for reminders</label>
        <input id="remind-email" type="email" />
        <button type="submit">Send me reminders</button>
      </form>
    </article>
  );
}

const CHART =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 120'%3E%3Crect width='320' height='120' fill='%23eef3f8'/%3E%3Crect x='60' y='60' width='70' height='45' fill='%2391a7c1'/%3E%3Crect x='190' y='20' width='70' height='85' fill='%231d4e89'/%3E%3Ctext x='95' y='52' font-size='13' text-anchor='middle' font-family='sans-serif'%3E₹5,000%3C/text%3E%3Ctext x='225' y='14' font-size='13' text-anchor='middle' font-family='sans-serif'%3E₹10,000%3C/text%3E%3C/svg%3E";
