# APFC exam notes

A study site for the UPSC EPFO APFC and UIIC Administrative Officer exams. Notes cover every syllabus line, with inline self-tests, flash cards, bookmarks, personal notes, search (⌘K), keyboard shortcuts and progress tracking.

```bash
npm install
npm run dev
npm run build                          # static export in out/
BASE_PATH=/sub/folder npm run build    # when served from a sub-path
```

This portfolio copy registers four APFC subjects and two UIIC sections. The full app has 28 subjects. Unwritten topics are listed but not linked.

## Notable parts

- **Static export**: every page is pre-rendered. `generateStaticParams` only builds topics that have notes.
- **Progress store** is a small module read through `useSyncExternalStore`. It syncs across tabs with the `storage` event, and every storage access is guarded so private windows still render.
- **Content as data**: notes are arrays of blocks (`h2`, `table`, `callout`, `quiz`, `cards`, `timeline` …) built with small helpers in `content/notes/_b.js`. LeetCode references are checked against a list at build time, so a typo fails the build.

## Changes for the portfolio build

- **The sidebar tree was in every page.** The root layout passed both nav trees as props, so Next serialised 46 KB of tree data into each of 448 pages. It now comes from one static `nav.json`, fetched once and cached. A page dropped from 229 KB to 72 KB and the export from 183 MB to 18 MB, together with building only written topics.
- `fetch('/search-index.json')` broke under a sub-path; `withBase()` fixes it.
- The headline's lime-to-violet gradient text is now a solid accent colour.
- The placements workspace (company-specific interview prep) and the daily plans are not included.
