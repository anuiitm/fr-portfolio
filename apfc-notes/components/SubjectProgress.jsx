'use client';

import { key, useStore } from '@/lib/store';

export default function SubjectProgress({ subject, topicIds }) {
  const store = useStore();
  const done = topicIds.filter((t) => store.done[key(subject, t)]).length;
  const pct = Math.round((done / topicIds.length) * 100);
  return (
    <div className="subject-progress">
      <div className="bar big">
        <span style={{ width: `${pct}%` }} />
      </div>
      <span>
        {done} of {topicIds.length} done ({pct}%)
      </span>
    </div>
  );
}
