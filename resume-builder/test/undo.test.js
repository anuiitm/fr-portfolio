import { test } from 'node:test';
import assert from 'node:assert/strict';
import { personalEdited, redo, selectCanUndo, store, templateChosen, undo } from '../src/store/index.js';

test('typing in one field is a single undo step; redo restores it', () => {
  const before = store.getState().resume.present.personal.name;
  for (const v of ['A', 'An', 'Ann']) store.dispatch(personalEdited({ field: 'name', value: v }));
  store.dispatch(templateChosen('modern'));
  store.dispatch(undo());
  assert.equal(store.getState().resume.present.template, 'classic');
  store.dispatch(undo());
  assert.equal(store.getState().resume.present.personal.name, before);
  assert.equal(selectCanUndo(store.getState()), false);
  store.dispatch(redo());
  assert.equal(store.getState().resume.present.personal.name, 'Ann');
});
