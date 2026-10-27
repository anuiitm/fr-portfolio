import { combineReducers, configureStore, createSlice, nanoid } from '@reduxjs/toolkit';
import { sampleApplications, sampleResume } from '../data/sample.js';

/* ---------- resume (the document) ---------- */
const LIST_SECTIONS = ['experience', 'projects', 'education', 'skills', 'achievements'];
const BLANK = {
  experience: { title: '', org: '', when: '', bullets: [''] },
  projects: { title: '', org: '', when: '', bullets: [''] },
  education: { title: '', org: '', when: '', bullets: [] },
  skills: { title: '', items: '' },
  achievements: { title: '' },
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState: sampleResume,
  reducers: {
    personalEdited(state, { payload: { field, value } }) {
      state.personal[field] = value;
    },
    summaryEdited(state, { payload }) {
      state.summary = payload;
    },
    entryAdded: {
      reducer(state, { payload: { section, id } }) {
        state[section].push({ id, on: true, ...structuredClone(BLANK[section]) });
      },
      prepare: (section) => ({ payload: { section, id: nanoid(6) } }),
    },
    entryEdited(state, { payload: { section, id, field, value } }) {
      const e = state[section].find((x) => x.id === id);
      if (e) e[field] = value;
    },
    entryToggled(state, { payload: { section, id } }) {
      const e = state[section].find((x) => x.id === id);
      if (e) e.on = !e.on;
    },
    entryRemoved(state, { payload: { section, id } }) {
      state[section] = state[section].filter((x) => x.id !== id);
    },
    entryMoved(state, { payload: { section, from, to } }) {
      const list = state[section];
      if (to < 0 || to >= list.length) return;
      const [item] = list.splice(from, 1);
      list.splice(to, 0, item);
    },
    sectionMoved(state, { payload: { from, to } }) {
      if (to < 0 || to >= state.order.length) return;
      const [s] = state.order.splice(from, 1);
      state.order.splice(to, 0, s);
    },
    projectsPicked(state, { payload: ids }) {
      for (const p of state.projects) p.on = ids.includes(p.id);
    },
    templateChosen(state, { payload }) {
      state.template = payload;
    },
    accentChosen(state, { payload }) {
      state.accent = payload;
    },
    resumeReplaced: (_, { payload }) => payload,
  },
});

export const { personalEdited, summaryEdited, entryAdded, entryEdited, entryToggled, entryRemoved, entryMoved, sectionMoved, projectsPicked, templateChosen, accentChosen, resumeReplaced } =
  resumeSlice.actions;
export { LIST_SECTIONS };

// Undo/redo as a higher-order reducer around the resume slice. Typing in one
// field coalesces into a single step, so undo doesn't go back one letter at a time.
const LIMIT = 60;
function undoable(reducer) {
  const initial = { past: [], present: reducer(undefined, { type: '@@init' }), future: [], lastKey: null };
  return (state = initial, action) => {
    if (action.type === 'history/undo') {
      if (!state.past.length) return state;
      return { past: state.past.slice(0, -1), present: state.past.at(-1), future: [state.present, ...state.future], lastKey: null };
    }
    if (action.type === 'history/redo') {
      if (!state.future.length) return state;
      return { past: [...state.past, state.present], present: state.future[0], future: state.future.slice(1), lastKey: null };
    }
    const present = reducer(state.present, action);
    if (present === state.present) return state;
    const p = action.payload ?? {};
    const key = p.field ? `${action.type}:${p.section ?? ''}:${p.id ?? ''}:${p.field}` : action.type === summaryEdited.type ? action.type : null;
    const coalesce = key && key === state.lastKey;
    return { past: coalesce ? state.past : [...state.past, state.present].slice(-LIMIT), present, future: [], lastKey: key };
  };
}
export const undo = () => ({ type: 'history/undo' });
export const redo = () => ({ type: 'history/redo' });

/* ---------- saved versions ---------- */
const versionsSlice = createSlice({
  name: 'versions',
  initialState: [],
  reducers: {
    versionSaved: {
      reducer: (state, { payload }) => [payload, ...state].slice(0, 20),
      prepare: (label, snapshot) => ({ payload: { id: nanoid(6), label, at: new Date().toISOString(), snapshot } }),
    },
    versionDeleted: (state, { payload }) => state.filter((v) => v.id !== payload),
  },
});
export const { versionSaved, versionDeleted } = versionsSlice.actions;

/* ---------- job applications ---------- */
export const STAGES = ['saved', 'applied', 'interview', 'offer', 'rejected'];
const appsSlice = createSlice({
  name: 'applications',
  initialState: sampleApplications,
  reducers: {
    applicationAdded: {
      reducer: (state, { payload }) => [payload, ...state],
      prepare: (a) => ({ payload: { ...a, id: nanoid(6), status: 'saved', date: new Date().toISOString().slice(0, 10) } }),
    },
    applicationMoved(state, { payload: { id, status } }) {
      const a = state.find((x) => x.id === id);
      if (a) a.status = status;
    },
    applicationRemoved: (state, { payload }) => state.filter((a) => a.id !== payload),
  },
});
export const { applicationAdded, applicationMoved, applicationRemoved } = appsSlice.actions;

/* ---------- jd analysis input (kept so it survives navigation) ---------- */
const jdSlice = createSlice({
  name: 'jd',
  initialState: '',
  reducers: { jdEdited: (_, { payload }) => payload },
});
export const { jdEdited } = jdSlice.actions;

/* ---------- store ---------- */
const KEY = 'resume-builder:v2';
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s?.resume) return { ...s, resume: { past: [], present: s.resume, future: [], lastKey: null } };
  } catch {
    /* fresh start */
  }
  return undefined;
}

export const store = configureStore({
  reducer: combineReducers({ resume: undoable(resumeSlice.reducer), versions: versionsSlice.reducer, applications: appsSlice.reducer, jd: jdSlice.reducer }),
  preloadedState: load(),
});

let t;
store.subscribe(() => {
  clearTimeout(t);
  t = setTimeout(() => {
    const s = store.getState();
    try {
      localStorage.setItem(KEY, JSON.stringify({ resume: s.resume.present, versions: s.versions, applications: s.applications, jd: s.jd }));
    } catch {
      /* storage full or blocked */
    }
  }, 400);
});

export const selectResume = (s) => s.resume.present;
export const selectCanUndo = (s) => s.resume.past.length > 0;
export const selectCanRedo = (s) => s.resume.future.length > 0;
