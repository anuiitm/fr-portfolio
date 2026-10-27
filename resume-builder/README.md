# Resume builder

Edit a resume with a live A4 preview, tailor it to a job description, coach weak bullets, track applications and export a PDF whose text stays selectable. The sample resume belongs to a fictional candidate.

```bash
npm install
npm run dev
npm test      # JD matcher, bullet coach and undo/redo
npm run build
```

## Notable parts

- **Undo and redo as a Redux higher-order reducer** around the resume slice. Typing in one field is merged into one history step. Use Ctrl/⌘+Z and Ctrl/⌘+Shift+Z outside text fields.
- **Job match without an API.** It extracts skills from the JD (aliases like React.js → react), weights the ones the JD repeats, lists present and missing skills, and ranks projects by overlap. One click shows only the best three.
- **Bullet coach** flags weak openings ("worked on", "was responsible for"), missing numbers, pronouns, passive voice and length.
- **PDF export** uses print CSS for a true A4 page, so text stays selectable and searchable. Each export also saves a version you can restore.
- `**bold**` in bullets is rendered as React elements, with no HTML strings to sanitise.

## Compared with the first version

- The first version called Gemini from the browser with a key kept in `localStorage`, and a real API key was committed in the README. **That key should be revoked.**
- The UI used 11 Radix packages, `cva`, `tailwind-merge`, `zustand`, `immer`, `marked`, `date-fns` and `jspdf`. `jspdf` was unused because PDFs came from `window.print()`, even though the README said jsPDF. `dompurify` was imported but missing from `package.json`.
- Saving the profile relied on a Vite dev-server endpoint, so it couldn't work in a static build.
- This version has four runtime dependencies (React, ReactDOM, Redux Toolkit, React Redux) and loads about 85 KB gzipped.
