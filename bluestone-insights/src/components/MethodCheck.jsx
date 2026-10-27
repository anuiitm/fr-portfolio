import { data } from '../store/selectors';
import { fmtInt, fmtPct } from '../lib/format';
import { SLA } from './charts/ReplySpeedChart';

const ROWS = [
  { key: 'relativeParsing', label: 'First pass', sub: 'dates parsed from "a year ago"' },
  { key: 'exactTimestamps', label: 'Corrected', sub: 'exact timestamps from the export' },
];

export default function MethodCheck() {
  const { sampleSize, ...runs } = data.methodCheck;

  return (
    <section className="section" id="method" aria-labelledby="method-title">
      <header className="section-head">
        <p className="eyebrow">Correction</p>
        <h2 id="method-title">Reply-time correction</h2>
      </header>
      <div className="prose">
        <p>
          An earlier calculation reported that <strong>63% of reviews waited over a month for a reply</strong>. That
          number was wrong. The scraper stores both a relative label (“a year ago”) and an exact timestamp, and the earlier calculation
          used the label. A review posted 23 months ago reads “a year ago”, so its date moved by up to eleven months.
          Every gap between review and reply stretched with it.
        </p>
        <p>
          The same {fmtInt(sampleSize)} replied-to reviews, measured both ways:
        </p>
      </div>
      <div className="method-bars">
        {ROWS.map((row) => (
          <div className="method-row" key={row.key}>
            <div className="method-label">
              <b>{row.label}</b>
              <span>{row.sub}</span>
            </div>
            <div className="stack" role="img" aria-label={SLA.slice(0, 4).map((s) => `${s.label} ${fmtPct(runs[row.key][s.key] ?? 0, 0)}`).join(', ')}>
              {SLA.slice(0, 4).map((s) => {
                const v = runs[row.key][s.key] ?? 0;
                return (
                  <span key={s.key} className={`stack-seg sla-${s.key}`} style={{ flexGrow: v }} title={`${s.label}: ${fmtPct(v)}`}>
                    {v >= 0.07 && fmtPct(v, 0)}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
        <ul className="legend">
          {SLA.slice(0, 4).map((s) => (
            <li key={s.key}>
              <i className={`sw sla-${s.key}`} />
              {s.label}
            </li>
          ))}
        </ul>
      </div>
      <p className="callout">
        With exact timestamps, <strong>three in four reviews get a reply within a day</strong>. The slow replies are
        real, but they cluster in two places: reviews from before 2021, answered years later in a clean-up, and a
        backlog in 2023 when one review in four waited over a month. By 2025 that share is under 1%.
      </p>
    </section>
  );
}
