import { test } from 'node:test';
import assert from 'node:assert/strict';
import { niceMax, sumYears, wilson } from '../src/lib/stats.js';

test('wilson lower bound ranks a big sample above a tiny one with a higher raw rate', () => {
  const small = wilson(4, 40).low; // 10% of 40
  const large = wilson(60, 600).low; // 10% of 600
  assert.ok(large > small);
  assert.equal(wilson(0, 0).low, 0);
});

test('sumYears adds only the selected years', () => {
  const rows = [
    [2021, 10, 45, 1, 5],
    [2022, 20, 90, 2, 15],
    [2023, 30, 140, 3, 25],
  ];
  assert.deepEqual(sumYears(rows, 2022, 2023), { n: 50, stars: 230, neg: 5, fast: 40 });
});

test('niceMax rounds up to 1, 2, 5 steps', () => {
  assert.equal(niceMax(7), 10);
  assert.equal(niceMax(0.034), 0.05);
  assert.equal(niceMax(1800), 2000);
});
