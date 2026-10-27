# VeriDoc admin

Back office for a lender's loan-document checklists: which documents each loan product asks for, and what the AI checks in each one. Changes reach applicants only after a maker, an approver and an applier have each signed off.

```bash
npm install
npm run dev
npm test      # checklist diff and CSV import tests
npm run build
```

Use **Acting as** in the sidebar to switch between the three roles and take a change from draft to live.

## Notable parts

- **Draft → review → approved → live.** The first edit forks a draft from the live checklist, and the live version is untouched until it is published. With the two-person rule on, an approver can't approve their own submission.
- **Versions** keep full snapshots. Any version can be compared with the one before it, downloaded as CSV, or restored as a new draft.
- **Spreadsheet import.** Paste or upload a CSV. The parser handles quoted commas and newlines, collects every bad row instead of stopping at the first, and shows the exact diff before you apply it. `src/lib/checklist.js` has no framework code and is unit-tested.
- **Audit log written by reducers.** The audit slice matches the workflow actions themselves, so no screen can forget to log.
- **Applicant view** previews the checklist as an applicant sees it, rejecting wrong file types and oversize files before upload.

## Compared with the first version

The first version was one 1,230-line `App.jsx`, with every screen defined as a component inside `App`. Each state change therefore created new component types and remounted them. In the edit modal, toggling "manual override" wiped the title you had just typed. Save, Publish, Delete, Collapse, Search, Restore and Upload did nothing, three of five nav items were placeholders, and the fixed 256 px sidebar left no room on a phone. The visual style (violet-to-indigo gradients, glow shadows, "✨ AI-Powered" badges) has been replaced with a plain enterprise look.
