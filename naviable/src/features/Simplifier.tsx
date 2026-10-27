import { useMemo, useState } from 'react';
import { easeLabel, readability, simplify } from '../lib/simplify';
import { canSpeak, speak, stopSpeaking } from '../lib/speech';

const SAMPLES = {
  'Bank notice':
    'In the event that the applicant is unable to furnish the requisite documentation prior to the stipulated deadline, the application shall be deemed incomplete, and the bank reserves the right to terminate the processing of the request without further notice. Applicants are required to ensure that all information provided is accurate; furthermore, any discrepancy identified subsequently may necessitate additional verification.',
  'Government scheme':
    'Eligible beneficiaries are required to submit an application in accordance with the guidelines in order to obtain assistance under the scheme. Subsequent to verification, the aggregate amount will be disbursed to the beneficiary, which will be credited to the account linked with Aadhaar, and the beneficiary will be notified accordingly.',
  'Exam rules':
    'Candidates shall report to the examination centre approximately thirty minutes prior to the commencement of the examination. The use of electronic devices is prohibited; candidates found in possession of such devices will be subject to disqualification.',
};

export default function Simplifier() {
  const [text, setText] = useState(SAMPLES['Bank notice']);
  const result = useMemo(() => simplify(text), [text]);
  const before = useMemo(() => readability(text), [text]);
  const after = useMemo(() => readability(result.text), [result.text]);

  return (
    <div className="simplify">
      <div className="samples" role="group" aria-label="Load a sample">
        {Object.keys(SAMPLES).map((k) => (
          <button key={k} type="button" className="chip" onClick={() => setText(SAMPLES[k as keyof typeof SAMPLES])}>
            {k}
          </button>
        ))}
      </div>
      <div className="two-col">
        <section className="panel">
          <div className="panel-head">
            <label htmlFor="src" className="panel-title">
              Original
            </label>
            <Score r={before} />
          </div>
          <textarea id="src" rows={10} value={text} onChange={(e) => setText(e.target.value)} />
        </section>
        <section className="panel" aria-live="polite">
          <div className="panel-head">
            <h2 className="panel-title">Plain version</h2>
            <Score r={after} />
          </div>
          <p className="plain">{result.text}</p>
          <div className="tool-actions">
            <button type="button" className="btn" disabled={!canSpeak} onClick={() => speak(result.text, 0.95)}>
              Read aloud
            </button>
            <button type="button" className="btn" disabled={!canSpeak} onClick={stopSpeaking}>
              Stop
            </button>
            <button type="button" className="btn" onClick={() => navigator.clipboard?.writeText(result.text)}>
              Copy
            </button>
          </div>
        </section>
      </div>
      <section className="panel changes">
        <h2 className="panel-title">
          {result.changes.length} changes, all explained
        </h2>
        {result.changes.length === 0 ? (
          <p className="muted">Nothing to change. The text already uses plain words and short sentences.</p>
        ) : (
          <ul>
            {result.changes.map((c, i) => (
              <li key={i}>
                {c.kind === 'split' ? (
                  <>Split a long sentence at “{c.from}”</>
                ) : (
                  <>
                    <del>{c.from}</del> → <ins>{c.to}</ins>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
        <p className="small muted">
          Scores use the Flesch reading-ease and Flesch–Kincaid grade formulas. 60+ is plain English; most adults read
          comfortably at grade 8 or below.
        </p>
      </section>
    </div>
  );
}

function Score({ r }: { r: ReturnType<typeof readability> }) {
  return (
    <p className="score">
      <b>{Math.round(r.ease)}</b> {easeLabel(r.ease)}, grade {r.grade.toFixed(1)}, {r.words} words
    </p>
  );
}
