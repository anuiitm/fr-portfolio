import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../store/filtersSlice';
import { selectCities, selectNetworkKpis } from '../store/selectors';
import { fmtInt, fmtPct } from '../lib/format';

const MIN_REVIEWS = 1000;

export default function CityBoard() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const network = useSelector(selectNetworkKpis);
  const active = useSelector((s) => s.filters.city);
  const [order, setOrder] = useState('worst');

  const eligible = cities.filter((c) => c.n >= MIN_REVIEWS);
  // Every listed city has 1,000+ reviews, so the raw share is stable enough to rank on.
  const ranked = [...eligible].sort((a, b) => (order === 'worst' ? b.negShare - a.negShare : a.negShare - b.negShare)).slice(0, 10);
  const max = Math.max(...eligible.map((c) => c.negShare), network.negShare);

  const pick = (city) => {
    dispatch(setCity(active === city ? 'all' : city));
    document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="cities" aria-labelledby="cities-title">
      <header className="section-head">
        <p className="eyebrow">Cities</p>
        <h2 id="cities-title">City comparison</h2>
      </header>
      <div className="cities-tools">
        <p className="prose">
          {eligible.length} cities have at least {fmtInt(MIN_REVIEWS)} reviews in the selected years. The line marks the
          network average. Select a city to filter the whole page.
        </p>
        <div className="seg" role="group" aria-label="Order">
          <button type="button" aria-pressed={order === 'worst'} onClick={() => setOrder('worst')}>
            Most unhappy
          </button>
          <button type="button" aria-pressed={order === 'best'} onClick={() => setOrder('best')}>
            Least unhappy
          </button>
        </div>
      </div>
      <ol className="citybars">
        {ranked.map((c) => (
          <li key={c.city}>
            <button type="button" aria-pressed={active === c.city} onClick={() => pick(c.city)}>
              <span className="cb-name">
                {c.city}
                <small>
                  {c.stores} {c.stores === 1 ? 'store' : 'stores'}, {fmtInt(c.n)} reviews
                </small>
              </span>
              <span className="cb-track">
                <span className="cb-fill" style={{ width: `${(c.negShare / max) * 100}%` }} />
                <span className="cb-avg" style={{ left: `${(network.negShare / max) * 100}%` }} aria-hidden="true" />
              </span>
              <span className="cb-val">{fmtPct(c.negShare)}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
