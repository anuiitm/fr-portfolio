'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

export function Countdown({ date, label = 'Recruitment Test' }) {
  const [days, setDays] = useState(null);
  useEffect(() => {
    const calc = () => {
      const target = new Date(`${date}T09:30:00+05:30`).getTime();
      setDays(Math.max(0, Math.ceil((target - Date.now()) / 86400000)));
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, [date]);
  const d = new Date(date);
  return (
    <div className="countdown">
      <span className="countdown-label">{label}</span>
      <b>{days ?? '—'}</b>
      <span>days to go</span>
      <small>{d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</small>
    </div>
  );
}

export function OverallRing({ readyIds, label = 'ready topics' }) {
  const store = useStore();
  const done = readyIds.filter((k) => store.done[k]).length;
  const pct = readyIds.length ? done / readyIds.length : 0;
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="overall">
      <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden>
        <circle cx="42" cy="42" r={r} className="ring-track" strokeWidth="7" />
        <circle cx="42" cy="42" r={r} className="ring-fill" strokeWidth="7" strokeDasharray={c} strokeDashoffset={c * (1 - pct)} />
      </svg>
      <div>
        <b>{Math.round(pct * 100)}%</b>
        <span>
          {done} of {readyIds.length} {label} done
        </span>
      </div>
    </div>
  );
}

export function ContinueCard({ ws = 'apfc', base = '/notes' }) {
  const store = useStore();
  const last = ws === 'apfc' ? store.last : store.lastBy?.[ws];
  if (!last) return null;
  const [s, t] = last.replace(/^\w+:/, '').split('/');
  return (
    <Link href={`${base}/${s}/${t}`} className="ghost-cta">
      Continue: {s.toUpperCase()} {t.replace(/-/g, ' ')}
    </Link>
  );
}
