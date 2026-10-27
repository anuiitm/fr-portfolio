import { createEntityAdapter, createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit';
import { draftDiscarded, draftPublished, draftReplaced, draftReviewed, draftSubmitted, pointDeleted, pointMoved, pointSaved, sectionAdded, sectionDeleted } from './products';

/* ---------- users ---------- */
export const usersAdapter = createEntityAdapter({ sortComparer: (a, b) => a.name.localeCompare(b.name) });

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    userInvited: {
      reducer: usersAdapter.addOne,
      prepare: ({ name, email, role, by }) => ({ payload: { id: nanoid(6), name, email, role, status: 'invited', by, at: new Date().toISOString() } }),
    },
    roleChanged: {
      reducer(state, { payload: { id, role } }) {
        state.entities[id].role = role;
      },
      prepare: ({ id, role, by }) => ({ payload: { id, role, by, at: new Date().toISOString() } }),
    },
    userDeactivated: {
      reducer(state, { payload: { id } }) {
        const u = state.entities[id];
        u.status = u.status === 'disabled' ? 'active' : 'disabled';
      },
      prepare: ({ id, by }) => ({ payload: { id, by, at: new Date().toISOString() } }),
    },
  },
});
export const { userInvited, roleChanged, userDeactivated } = usersSlice.actions;
export const users = usersSlice.reducer;

export const ROLES = {
  maker: { label: 'Checklist maker', can: ['Edit checklist points and AI criteria', 'Import from a spreadsheet', 'Submit drafts for approval'] },
  approver: { label: 'Approver', can: ['Review submitted drafts', 'Approve or send back with a note', 'Cannot approve their own submission'] },
  applier: { label: 'Applier', can: ['Publish approved drafts to the app', 'Restore an earlier version as a draft'] },
};

/* ---------- session ---------- */
// The demo lets you switch between the three roles to walk through the workflow.
const sessionSlice = createSlice({
  name: 'session',
  initialState: { userId: 'u1' },
  reducers: {
    actingAs(state, { payload }) {
      state.userId = payload;
    },
  },
});
export const { actingAs } = sessionSlice.actions;
export const session = sessionSlice.reducer;

/* ---------- settings ---------- */
const settingsSlice = createSlice({
  name: 'settings',
  initialState: { org: 'VeriDoc Finance', twoPerson: true, model: 'balanced', confidence: 0.8, theme: 'system' },
  reducers: {
    settingsSaved: (state, { payload }) => ({ ...state, ...payload }),
  },
});
export const { settingsSaved } = settingsSlice.actions;
export const settings = settingsSlice.reducer;

/* ---------- audit log ---------- */
// Every write is recorded here by matching on the actions themselves, so no
// component can forget to log.
const DESCRIBE = [
  [pointSaved, (p) => ['edited', `Saved “${p.point.title}”`]],
  [pointDeleted, () => ['edited', 'Removed a checklist point']],
  [pointMoved, () => ['edited', 'Reordered points']],
  [sectionAdded, (p) => ['edited', `Added section “${p.name}”`]],
  [sectionDeleted, () => ['edited', 'Removed an empty section']],
  [draftReplaced, (p) => ['edited', p.reason]],
  [draftDiscarded, () => ['discarded', 'Discarded the draft']],
  [draftSubmitted, (p) => ['submitted', p.note ? `Submitted: “${p.note}”` : 'Submitted for approval']],
  [draftReviewed, (p) => (p.approve ? ['approved', p.note ? `Approved: “${p.note}”` : 'Approved'] : ['returned', `Sent back: “${p.note}”`])],
  [draftPublished, () => ['published', 'Published a new version']],
];

const auditSlice = createSlice({
  name: 'audit',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(...DESCRIBE.map(([a]) => a)), (state, action) => {
        const [, describe] = DESCRIBE.find(([a]) => a.match(action));
        const [kind, detail] = describe(action.payload);
        state.unshift({ id: nanoid(8), at: action.payload.at, userId: action.payload.userId, productId: action.payload.productId, action: kind, detail });
      })
      .addMatcher(isAnyOf(userInvited, roleChanged, userDeactivated), (state, { type, payload }) => {
        const detail = userInvited.match({ type }) ? `Invited ${payload.email} as ${ROLES[payload.role].label}` : roleChanged.match({ type }) ? `Changed a role to ${ROLES[payload.role].label}` : 'Changed a user’s access';
        state.unshift({ id: nanoid(8), at: payload.at, userId: payload.by, productId: null, action: 'access', detail });
      });
  },
});
export const audit = auditSlice.reducer;

/* ---------- toasts ---------- */
const toastsSlice = createSlice({
  name: 'toasts',
  initialState: [],
  reducers: {
    toastShown: {
      reducer: (state, { payload }) => [...state.slice(-2), payload],
      prepare: (text, tone = 'ok') => ({ payload: { id: nanoid(4), text, tone } }),
    },
    toastDismissed: (state, { payload }) => state.filter((t) => t.id !== payload),
  },
});
export const { toastShown, toastDismissed } = toastsSlice.actions;
export const toasts = toastsSlice.reducer;
