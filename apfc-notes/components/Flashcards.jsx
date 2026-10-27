'use client';

import { useState } from 'react';
import Inline from './Inline';

export default function Flashcards({ items, math = false }) {
  const [order, setOrder] = useState(() => items.map((_, i) => i));
  const [flipped, setFlipped] = useState({});

  const shuffle = () => {
    const o = [...order];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    setOrder(o);
    setFlipped({});
  };
  const allOpen = Object.keys(flipped).length === items.length;

  return (
    <section className="cards">
      <header className="cards-head">
        <div>
          <span className="quiz-kicker">Flash cards</span>
          <h4>Tap a card to flip it</h4>
        </div>
        <div className="cards-tools">
          <button className="ghost-btn" onClick={shuffle}>
            Shuffle
          </button>
          <button
            className="ghost-btn"
            onClick={() => setFlipped(allOpen ? {} : Object.fromEntries(items.map((_, i) => [i, true])))}
          >
            {allOpen ? 'Hide all' : 'Reveal all'}
          </button>
        </div>
      </header>
      <div className="cards-grid">
        {order.map((i) => (
          <button
            key={i}
            className={`card ${flipped[i] ? 'is-flipped' : ''}`}
            onClick={() => setFlipped((f) => ({ ...f, [i]: !f[i] }))}
            aria-pressed={Boolean(flipped[i])}
          >
            <span className="card-inner">
              <span className="card-face card-front">
                <Inline text={items[i].front} math={math} />
              </span>
              <span className="card-face card-back">
                <Inline text={items[i].back} math={math} />
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
