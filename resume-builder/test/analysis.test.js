import { test } from 'node:test';
import assert from 'node:assert/strict';
import { coach, matchJd } from '../src/lib/analysis.js';
import { sampleResume } from '../src/data/sample.js';

test('JD match finds present and missing skills, treating React.js as React', () => {
  const r = matchJd('We need React.js, Redux and GraphQL. GraphQL is a must.', sampleResume);
  assert.ok(r.present.includes('react'));
  assert.ok(r.present.includes('redux'));
  assert.deepEqual(r.missing, ['graphql']);
  assert.ok(r.score > 0 && r.score < 100);
});

test('bullet coach flags a weak opening verb and a missing number', () => {
  const kinds = coach('Worked on the checkout flow').tips.map((t) => t.kind);
  assert.deepEqual(kinds.sort(), ['metric', 'short', 'verb']);
  assert.equal(coach('Cut page load time from 4.1s to 1.6s by splitting the bundle').tips.length, 0);
});
