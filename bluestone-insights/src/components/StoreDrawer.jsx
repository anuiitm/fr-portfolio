import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStore } from '../store/filtersSlice';
import { focusStore, loadReviews } from '../store/explorerSlice';
import { data, selectNetworkKpis, selectSelectedStore } from '../store/selectors';
import { YEAR_MAX, YEAR_MIN } from '../store/filtersSlice';
import { fmtDays, fmtInt, fmtMonth, fmtPct, fmtStars, storeLabel } from '../lib/format';

export default function StoreDrawer() {
  const dispatch = useDispatch();
  const store = useSelector(selectSelectedStore);
  const network = useSelector(selectNetworkKpis);
  const { from, to } = useSelector((s) => s.filters);
  const ref = useRef(null);

  // Drive the native <dialog> from Redux state: it brings focus trapping,
  // Esc-to-close and the inert background for free.
  useEffect(() => {
    const dialog = ref.current;
    if (store && !dialog.open) dialog.showModal();
    if (!store && dialog.open) dialog.close();
  }, [store]);

  const close = () => dispatch(selectStore(null));

  const readComplaints = () => {
    dispatch(focusStore(store.id));
    dispatch(loadReviews());
    close();
    requestAnimationFrame(() => document.getElementById('complaints')?.scrollIntoView({ behavior: 'smooth' }));
  };

  return (
    <dialog ref={ref} className="drawer" aria-labelledby="drawer-title" onClose={close} onClick={(e) => e.target === ref.current && close()}>
      {store && (
        <div className="drawer-body">
          <header className="drawer-head">
            <div>
              <p className="eyebrow">{store.city}</p>
              <h2 id="drawer-title">{store.area}</h2>
              <p className="muted">
                {fmtInt(store.n)} reviews since {fmtMonth(store.first)}
              </p>
            </div>
            <button type="button" className="icon-btn" onClick={close} aria-label="Close store details">
              ×
            </button>
          </header>

          <h3 className="drawer-sub">
            {from === to ? from : `${from}–${to}`} compared with the network
          </h3>
          {store.r.n ? (
            <dl className="compare">
              <Compare label="Average rating" value={`${fmtStars(store.r.avg)}★`} base={`${fmtStars(network.avg)}★`} worse={store.r.avg < network.avg} />
              <Compare label="Rated ≤3★" value={fmtPct(store.r.negShare)} base={fmtPct(network.negShare)} worse={store.r.negShare > network.negShare} />
              <Compare label="Reply within 24 h" value={fmtPct(store.r.fastShare)} base={fmtPct(network.fastShare)} worse={store.r.fastShare < network.fastShare} />
            </dl>
          ) : (
            <p className="muted">No reviews in these years.</p>
          )}

          <h3 className="drawer-sub">Year by year</h3>
          <YearBars store={store} from={from} to={to} />

          <h3 className="drawer-sub">All-time rating mix</h3>
          <RatingMix dist={store.dist} />

          <h3 className="drawer-sub">Reply speed</h3>
          <p>
            Median wait <b>{fmtDays(store.p50)}</b> all time
            {store.recentP50 != null && (
              <>
                , <b>{fmtDays(store.recentP50)}</b> since Jan 2025
              </>
            )}
            .
          </p>

          <h3 className="drawer-sub">What the low ratings mention</h3>
          {store.negText ? (
            <>
              <ul className="theme-mini">
                {Object.entries(store.themes)
                  .sort((a, b) => b[1] - a[1])
                  .map(([k, v]) => (
                    <li key={k}>
                      <span>{data.themes[k].label}</span>
                      <b>{v}</b>
                    </li>
                  ))}
              </ul>
              <p className="muted small">
                {store.negText} low ratings came with text. A review can mention several themes, and some mention none.
              </p>
              <button type="button" className="btn" onClick={readComplaints}>
                Read {storeLabel(store)}’s {store.negText} complaints
              </button>
            </>
          ) : (
            <p className="muted">None of the low ratings came with written text.</p>
          )}
        </div>
      )}
    </dialog>
  );
}

function Compare({ label, value, base, worse }) {
  return (
    <div className={`compare-row ${worse ? 'is-worse' : 'is-better'}`}>
      <dt>{label}</dt>
      <dd>
        <b>{value}</b>
        <span>network {base}</span>
      </dd>
    </div>
  );
}

function YearBars({ store, from, to }) {
  const rows = store.years.filter(([y]) => y >= YEAR_MIN && y <= YEAR_MAX);
  const max = Math.max(...rows.map(([, n]) => n), 1);
  return (
    <table className="yearbars">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Reviews</th>
          <th scope="col" className="num">
            ≤3★
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([y, n, , neg]) => (
          <tr key={y} className={y < from || y > to ? 'out' : undefined}>
            <th scope="row">{y}</th>
            <td>
              <span className="yb">
                <span style={{ width: `${(n / max) * 100}%` }} />
              </span>
              {fmtInt(n)}
            </td>
            <td className="num">{fmtPct(neg / n)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RatingMix({ dist }) {
  const total = dist.reduce((a, b) => a + b, 0);
  return (
    <ul className="rating-mix">
      {[5, 4, 3, 2, 1].map((star) => {
        const v = dist[star - 1] / total;
        return (
          <li key={star}>
            <span>{star}★</span>
            <span className="rm-bar">
              <span className={star <= 3 ? 'low' : undefined} style={{ width: `${v * 100}%` }} />
            </span>
            <span className="num">{fmtPct(v)}</span>
          </li>
        );
      })}
    </ul>
  );
}
