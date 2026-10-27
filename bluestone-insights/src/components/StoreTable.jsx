import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStore, setMinReviews, setQuery, sortBy } from '../store/filtersSlice';
import { selectTableRows } from '../store/selectors';
import { fmtInt, fmtPct, fmtStars } from '../lib/format';
import Spark from './charts/Spark';

const COLUMNS = [
  { key: 'name', label: 'Store' },
  { key: 'n', label: 'Reviews', num: true },
  { key: 'avg', label: 'Avg ★', num: true },
  { key: 'negShare', label: 'Rated ≤3★', num: true },
  { key: 'adjusted', label: 'At least', num: true, hint: 'Lower end of the 95% interval for the ≤3★ share. Ranks a store with 4 bad reviews out of 40 below one with 60 out of 600.' },
  { key: 'fastShare', label: 'Reply <24 h', num: true },
];
const PAGE = 20;

export default function StoreTable() {
  const dispatch = useDispatch();
  const rows = useSelector(selectTableRows);
  const { query, minReviews, sortKey, sortDesc, from, to, city } = useSelector((s) => s.filters);
  const [limit, setLimit] = useState(PAGE);
  const maxShare = Math.max(0.05, ...rows.map((r) => r.r.negShare));

  useEffect(() => setLimit(PAGE), [query, minReviews, city, from, to]);

  return (
    <section className="section" id="stores" aria-labelledby="stores-title">
      <header className="section-head">
        <p className="eyebrow">Stores</p>
        <h2 id="stores-title">Store comparison</h2>
      </header>
      <p className="prose">
        Sorted by the share of reviews rated 3★ or lower, adjusted for volume. A store with 4 bad reviews out of 40 has a
        higher raw share than one with 60 out of 600, but much less evidence. The “at least” column is the low end of the
        95% interval, so small stores need a real pattern to rank high. Select a store to see its history.
      </p>

      <div className="table-tools">
        <label className="field field-grow">
          <span>Search</span>
          <input type="search" value={query} placeholder="Area or city" onChange={(e) => dispatch(setQuery(e.target.value))} />
        </label>
        <label className="field">
          <span>Min. reviews</span>
          <select value={minReviews} onChange={(e) => dispatch(setMinReviews(Number(e.target.value)))}>
            {[0, 50, 200, 500, 1000].map((v) => (
              <option key={v} value={v}>
                {v ? `${v}+` : 'Any'}
              </option>
            ))}
          </select>
        </label>
        <p className="table-count" aria-live="polite">
          {rows.length} stores
        </p>
      </div>

      <div className="table-scroll">
        <table className="stores">
          <thead>
            <tr>
              {COLUMNS.map((c) => (
                <th key={c.key} scope="col" className={c.num ? 'num' : undefined} aria-sort={sortKey === c.key ? (sortDesc ? 'descending' : 'ascending') : 'none'}>
                  <button type="button" onClick={() => dispatch(sortBy(c.key))} title={c.hint}>
                    {c.label}
                    <span className="sort-mark" aria-hidden="true">
                      {sortKey === c.key ? (sortDesc ? '↓' : '↑') : ''}
                    </span>
                  </button>
                </th>
              ))}
              <th scope="col" className="col-trend">
                ≤3★ by year
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, limit).map((s) => (
              <tr key={s.id} onClick={() => dispatch(selectStore(s.id))}>
                <th scope="row">
                  <button type="button" className="store-link" onClick={(e) => { e.stopPropagation(); dispatch(selectStore(s.id)); }}>
                    <span>{s.area}</span>
                    {s.area !== s.city && <small>{s.city}</small>}
                  </button>
                </th>
                <td className="num">{fmtInt(s.r.n)}</td>
                <td className="num">{fmtStars(s.r.avg)}</td>
                <td className="num">
                  <span className="cell-bar">
                    <span style={{ width: `${(s.r.negShare / maxShare) * 100}%` }} />
                  </span>
                  {fmtPct(s.r.negShare)}
                </td>
                <td className="num">{fmtPct(s.r.adjusted)}</td>
                <td className="num">{fmtPct(s.r.fastShare, 0)}</td>
                <td className="col-trend">
                  <Spark years={s.years} from={from} to={to} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="empty">No store matches. Lower the minimum or clear the search.</p>}
      </div>
      {rows.length > limit && (
        <button type="button" className="btn" onClick={() => setLimit((l) => l + PAGE * 2)}>
          Show {Math.min(PAGE * 2, rows.length - limit)} more of {rows.length - limit}
        </button>
      )}
    </section>
  );
}
