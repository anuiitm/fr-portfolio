import { useDispatch } from 'react-redux';
import { selectStore, setYears } from '../store/filtersSlice';
import { data } from '../store/selectors';
import { fmtInt, fmtPct, storeLabel } from '../lib/format';
import { sumYears, wilson } from '../lib/stats';

// Numbers in the prose are computed from the same data the charts use, so the
// text can't drift from the figures when the data is regenerated.
const year = Object.fromEntries(data.years.map((y) => [y.y, y]));
const negShare = (y) => year[y].neg / year[y].n;
const fastShare = (y) => year[y].sla.day / year[y].n;
const lateShare = (y) => year[y].sla.late / year[y].n;
const fiveStar = data.meta.dist[4] / data.meta.reviews;

const watchlist = data.stores
  .map((s) => {
    const r = sumYears(s.years, 2024, 2025);
    return { s, n: r.n, share: r.neg / r.n, low: wilson(r.neg, r.n).low };
  })
  .filter((x) => x.n >= 500)
  .sort((a, b) => b.low - a.low)
  .slice(0, 3);

const themeTotals = Object.entries(data.themes).sort((a, b) => b[1].count - a[1].count);

export default function Findings() {
  const dispatch = useDispatch();
  const openStore = (id) => {
    dispatch(setYears([2024, 2025]));
    dispatch(selectStore(id));
  };

  return (
    <section className="section" id="findings" aria-labelledby="findings-title">
      <header className="section-head">
        <p className="eyebrow">Summary</p>
        <h2 id="findings-title">Key findings</h2>
      </header>
      <ol className="findings">
        <li>
          <h3>Ignore the average. Watch the 3★-and-below share.</h3>
          <p>
            {fmtPct(fiveStar, 0)} of reviews are five stars, so the average barely moves. The share of 3★-or-lower
            reviews does move: it fell from {fmtPct(negShare(2022))} in 2022 to {fmtPct(negShare(2025))} in 2025. Report
            that number per store, every month.
          </p>
        </li>
        <li>
          <h3>Replies are fast now. Watch for another backlog like 2023.</h3>
          <p>
            In 2025, {fmtPct(fastShare(2025), 0)} of reviews were answered within 24 hours. In 2023,{' '}
            {fmtPct(lateShare(2023), 0)} waited more than a month. Alert when any store’s queue of unanswered reviews
            is older than a week.
          </p>
        </li>
        <li>
          <h3>A few stores account for a large share of the complaints.</h3>
          <p>
            Over 2024–25, adjusted for volume, the stores with the most unhappy customers are{' '}
            {watchlist.map((w, i) => (
              <span key={w.s.id}>
                <button type="button" className="inline-link" onClick={() => openStore(w.s.id)}>
                  {storeLabel(w.s)}
                </button>{' '}
                ({fmtPct(w.share)} of {fmtInt(w.n)})
                {i < watchlist.length - 2 ? ', ' : i === watchlist.length - 2 ? ' and ' : ''}
              </span>
            ))}
            . Start audits there.
          </p>
        </li>
        <li>
          <h3>Most complaints are about people and process, not product.</h3>
          <p>
            The most frequent themes are {themeTotals[0][1].label.toLowerCase()} ({themeTotals[0][1].count}) and{' '}
            {themeTotals[1][1].label.toLowerCase()} ({themeTotals[1][1].count}), ahead of{' '}
            {themeTotals[2][1].label.toLowerCase()} ({themeTotals[2][1].count}). Stock complaints (
            {data.themes.stock.count}) are mostly about a thin collection or a missing size. Some say the website showed a
            design that the store did not have, which store-level stock online would fix.
          </p>
        </li>
      </ol>
    </section>
  );
}
