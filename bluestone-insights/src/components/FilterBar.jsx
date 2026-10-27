import { useDispatch, useSelector } from 'react-redux';
import { YEAR_MAX, YEAR_MIN, defaultFilters, resetFilters, setCity, setYears } from '../store/filtersSlice';
import { selectCities, selectKpis } from '../store/selectors';
import { fmtInt } from '../lib/format';

const YEARS = Array.from({ length: YEAR_MAX - YEAR_MIN + 1 }, (_, i) => YEAR_MIN + i);

export default function FilterBar() {
  const dispatch = useDispatch();
  const { from, to, city } = useSelector((s) => s.filters);
  const cities = useSelector(selectCities);
  const kpis = useSelector(selectKpis);
  const isDefault = from === defaultFilters.from && to === defaultFilters.to && city === 'all';

  return (
    <div className="filterbar" role="search" aria-label="Filter every chart and table">
      <div className="filterbar-inner">
        <label className="field">
          <span>From</span>
          <select value={from} onChange={(e) => dispatch(setYears([Number(e.target.value), to]))}>
            {YEARS.map((y) => (
              <option key={y} value={y} disabled={y > to}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>To</span>
          <select value={to} onChange={(e) => dispatch(setYears([from, Number(e.target.value)]))}>
            {YEARS.map((y) => (
              <option key={y} value={y} disabled={y < from}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <label className="field field-city">
          <span>City</span>
          <select value={city} onChange={(e) => dispatch(setCity(e.target.value))}>
            <option value="all">All {cities.length} cities</option>
            {cities.map((c) => (
              <option key={c.city} value={c.city}>
                {c.city} ({c.stores})
              </option>
            ))}
          </select>
        </label>
        <p className="filterbar-scope" aria-live="polite">
          {fmtInt(kpis.n)} reviews from {kpis.stores} stores
        </p>
        {!isDefault && (
          <button type="button" className="btn-text" onClick={() => dispatch(resetFilters())}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
