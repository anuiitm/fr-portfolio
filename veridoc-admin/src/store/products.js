import { createEntityAdapter, createSlice, current, nanoid } from '@reduxjs/toolkit';

export const productsAdapter = createEntityAdapter();

const stamp = (payload, userId) => ({ payload: { ...payload, userId, at: new Date().toISOString() } });

// Edits always land in a draft. The first edit forks one from the live version.
function draftOf(product, userId, at) {
  if (!product.draft) {
    // current() turns the Immer proxy into a (frozen) plain object; cloning that
    // gives the new draft its own mutable copy.
    product.draft = { sections: structuredClone(current(product.sections)), status: 'draft', updatedAt: at, updatedBy: userId, submittedBy: null, note: '', reviewNote: null };
  }
  product.draft.updatedAt = at;
  product.draft.updatedBy = userId;
  return product.draft;
}

const editable = (p) => !p.draft || p.draft.status === 'draft';

function findPoint(sections, pointId) {
  for (const s of sections) {
    const i = s.points.findIndex((pt) => pt.id === pointId);
    if (i >= 0) return { section: s, index: i };
  }
  return null;
}

const slice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(),
  reducers: {
    pointSaved: {
      reducer(state, { payload: { productId, sectionId, point, userId, at } }) {
        const p = state.entities[productId];
        if (!editable(p)) return;
        const d = draftOf(p, userId, at);
        const hit = findPoint(d.sections, point.id);
        const target = d.sections.find((s) => s.id === sectionId);
        if (hit && hit.section.id === sectionId) hit.section.points[hit.index] = point;
        else {
          if (hit) hit.section.points.splice(hit.index, 1);
          target.points.push(point);
        }
      },
      prepare: ({ productId, sectionId, point, userId }) => stamp({ productId, sectionId, point: point.id ? point : { ...point, id: nanoid(8) } }, userId),
    },
    pointDeleted: {
      reducer(state, { payload: { productId, pointId, userId, at } }) {
        const p = state.entities[productId];
        if (!editable(p)) return;
        const d = draftOf(p, userId, at);
        const hit = findPoint(d.sections, pointId);
        if (hit) hit.section.points.splice(hit.index, 1);
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
    pointMoved: {
      reducer(state, { payload: { productId, pointId, by, userId, at } }) {
        const p = state.entities[productId];
        if (!editable(p)) return;
        const d = draftOf(p, userId, at);
        const hit = findPoint(d.sections, pointId);
        if (!hit) return;
        const j = hit.index + by;
        if (j < 0 || j >= hit.section.points.length) return;
        const list = hit.section.points;
        [list[hit.index], list[j]] = [list[j], list[hit.index]];
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
    sectionAdded: {
      reducer(state, { payload: { productId, name, id, userId, at } }) {
        const p = state.entities[productId];
        if (!editable(p)) return;
        draftOf(p, userId, at).sections.push({ id, name, points: [] });
      },
      prepare: ({ userId, ...rest }) => stamp({ ...rest, id: nanoid(6) }, userId),
    },
    sectionDeleted: {
      reducer(state, { payload: { productId, sectionId, userId, at } }) {
        const p = state.entities[productId];
        if (!editable(p)) return;
        const d = draftOf(p, userId, at);
        d.sections = d.sections.filter((s) => s.id !== sectionId || s.points.length > 0);
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
    // Import and restore both replace the whole draft. Ids are reused by title
    // so unchanged points keep their identity.
    draftReplaced: {
      reducer(state, { payload: { productId, sections, userId, at } }) {
        const p = state.entities[productId];
        if (!editable(p)) return;
        draftOf(p, userId, at).sections = sections;
      },
      prepare({ productId, sections, existing, userId, reason }) {
        const ids = new Map(existing.flatMap((s) => s.points).map((pt) => [pt.title.toLowerCase(), pt.id]));
        const withIds = sections.map((s) => ({
          id: s.id ?? nanoid(6),
          name: s.name,
          points: s.points.map((pt) => ({ ...pt, id: ids.get(pt.title.toLowerCase()) ?? nanoid(8) })),
        }));
        return stamp({ productId, sections: withIds, reason }, userId);
      },
    },
    draftDiscarded: {
      reducer(state, { payload: { productId } }) {
        state.entities[productId].draft = null;
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
    draftSubmitted: {
      reducer(state, { payload: { productId, note, userId, at } }) {
        const d = state.entities[productId].draft;
        if (!d || d.status !== 'draft') return;
        Object.assign(d, { status: 'review', submittedBy: userId, note, updatedAt: at, reviewNote: null });
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
    draftReviewed: {
      reducer(state, { payload: { productId, approve, note, userId, at } }) {
        const d = state.entities[productId].draft;
        if (!d || d.status !== 'review') return;
        Object.assign(d, { status: approve ? 'approved' : 'draft', reviewNote: note, approvedBy: approve ? userId : null, updatedAt: at });
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
    draftPublished: {
      reducer(state, { payload: { productId, userId, at } }) {
        const p = state.entities[productId];
        if (p.draft?.status !== 'approved') return;
        p.version += 1;
        p.sections = p.draft.sections;
        p.publishedAt = at;
        p.versions.push({ version: p.version, at, by: userId, note: p.draft.note || 'Published', sections: p.draft.sections });
        p.draft = null;
      },
      prepare: ({ userId, ...rest }) => stamp(rest, userId),
    },
  },
});

export const { pointSaved, pointDeleted, pointMoved, sectionAdded, sectionDeleted, draftReplaced, draftDiscarded, draftSubmitted, draftReviewed, draftPublished } = slice.actions;
export default slice.reducer;

export const STATUS = {
  live: { label: 'Live', tone: 'ok' },
  draft: { label: 'Draft', tone: 'warn' },
  review: { label: 'In review', tone: 'info' },
  approved: { label: 'Ready to publish', tone: 'accent' },
};

export const statusOf = (p) => p.draft?.status ?? 'live';
