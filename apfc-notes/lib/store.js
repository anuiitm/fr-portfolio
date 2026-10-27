'use client';

// Per-browser study progress (done topics, bookmarks, quiz scores, preferences).
// Stored in localStorage; every access is guarded so private windows still render.
import { useSyncExternalStore } from 'react';

const KEY = 'apfc-notes:v1';
// `openSections` (sidebar sections the viewer has expanded) is kept out of storage, so
// every page load starts with the sidebar collapsed.
const EMPTY = { done: {}, marks: {}, quiz: {}, notes: {}, last: null, lastBy: {}, openSections: {}, prefs: { accent: 'lime', size: 'md', revise: false } };

let state = EMPTY;
let loaded = false;
const listeners = new Set();

function load() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const { openSections, ...parsed } = JSON.parse(raw);
      const { closedSections, ...prefs } = parsed.prefs || {};
      state = { ...EMPTY, ...parsed, openSections: state.openSections, prefs: { ...EMPTY.prefs, ...prefs } };
    }
  } catch {
    /* storage unavailable */
  }
}

function save() {
  try {
    const { openSections, ...saved } = state;
    window.localStorage.setItem(KEY, JSON.stringify(saved));
  } catch {
    /* storage unavailable */
  }
}

function set(updater) {
  load();
  state = updater(state);
  save();
  listeners.forEach((l) => l());
}

function subscribe(l) {
  listeners.add(l);
  const onStorage = (e) => {
    if (e.key === KEY) {
      loaded = false;
      load();
      l();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener('storage', onStorage);
  };
}

const getSnapshot = () => {
  load();
  return state;
};
const getServerSnapshot = () => EMPTY;

export function useStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const key = (s, t) => `${s}/${t}`;

export const actions = {
  toggleDone: (k) =>
    set((s) => {
      const done = { ...s.done };
      if (done[k]) delete done[k];
      else done[k] = Date.now();
      return { ...s, done };
    }),
  toggleMark: (k) =>
    set((s) => {
      const marks = { ...s.marks };
      if (marks[k]) delete marks[k];
      else marks[k] = Date.now();
      return { ...s, marks };
    }),
  setNote: (k, text) =>
    set((s) => {
      const notes = { ...s.notes };
      if (text.trim()) notes[k] = { text, at: Date.now() };
      else delete notes[k];
      return { ...s, notes };
    }),
  setQuiz: (k, score) => set((s) => ({ ...s, quiz: { ...s.quiz, [k]: score } })),
  // APFC keeps `last` (read by the home page's Continue card); other workspaces use `lastBy`.
  visit: (k, ws = 'apfc') =>
    set((s) => {
      if (ws === 'apfc') return s.last === k ? s : { ...s, last: k };
      const lastBy = s.lastBy || {};
      return lastBy[ws] === k ? s : { ...s, lastBy: { ...lastBy, [ws]: k } };
    }),
  setPref: (name, value) => set((s) => ({ ...s, prefs: { ...s.prefs, [name]: value } })),
  toggleSection: (no) => set((s) => ({ ...s, openSections: { ...s.openSections, [no]: !s.openSections[no] } })),
  collapseSections: () => set((s) => ({ ...s, openSections: {} })),
  openSection: (no) => set((s) => (s.openSections[no] ? s : { ...s, openSections: { ...s.openSections, [no]: true } })),
  reset: () => set((s) => ({ ...EMPTY, openSections: s.openSections })),
};
