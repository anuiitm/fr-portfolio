import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diffSections, parseCsv, sectionsToCsv, sheetToSections, summarise } from '../src/lib/checklist.js';

const live = [
  { id: 's1', name: 'Identity', points: [{ id: 'a', title: 'PAN card', docType: 'Government ID', required: true, criteria: 'Valid PAN' }] },
  { id: 's2', name: 'Income', points: [{ id: 'b', title: 'Salary slips', docType: 'Income document', required: true, criteria: '' }] },
];

test('parseCsv handles quotes, escaped quotes and newlines inside cells', () => {
  const rows = parseCsv('a,b\n"x, y","say ""hi""\nthere"\n');
  assert.deepEqual(rows, [['a', 'b'], ['x, y', 'say "hi"\nthere']]);
});

test('a CSV round trip produces no diff', () => {
  const { sections, errors } = sheetToSections(sectionsToCsv(live));
  assert.deepEqual(errors, []);
  assert.equal(diffSections(live, sections).length, 0);
});

test('diff reports added, modified and removed points', () => {
  const next = structuredClone(live);
  next[0].points[0].required = false;
  next[1].points = [{ id: 'c', title: 'Form 16', docType: 'Tax document', required: true, criteria: '' }];
  const d = diffSections(live, next);
  assert.deepEqual(summarise(d), { added: 1, modified: 1, removed: 1 });
  assert.deepEqual(d.find((x) => x.kind === 'modified').changed, ['required']);
});

test('sheet errors are collected, not thrown', () => {
  const { errors } = sheetToSections('section,title,required\nIdentity,PAN,yes\nIdentity,PAN,maybe\n,Missing,yes');
  assert.equal(errors.length, 2);
  assert.match(errors[0], /appears twice/);
});
