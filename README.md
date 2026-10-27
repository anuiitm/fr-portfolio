# Frontend portfolio

A portfolio site of frontend projects, plus a working, front-end-only build of each project it links to. Every demo runs on mock or pre-computed data, with no backend.

| Folder | What it is | Stack | Gzipped |
|---|---|---|---|
| [`portfolio/`](portfolio) | The portfolio page | HTML, CSS, JavaScript | 8 KB + images/font |
| [`bluestone-insights/`](bluestone-insights) | Interactive report on 196k BlueStone store reviews | React, Redux Toolkit, SVG | 125 KB, +158 KB lazy |
| [`pettry-admin/`](pettry-admin) | Pet-store admin: orders, products, inventory, promos | React, Redux Toolkit | 102 KB |
| [`veridoc-admin/`](veridoc-admin) | Loan-document checklists with a three-step publishing workflow | React, Redux Toolkit | 102 KB |
| [`resume-builder/`](resume-builder) | Resume editor with JD matching and undo/redo | React, Redux Toolkit | 85 KB |
| [`naviable/`](naviable) | In-browser accessibility tools | React, TypeScript | 80 KB |
| [`ipo-forensics/`](ipo-forensics) | Cited reading of IPO offer documents (BM25 in the browser) | JavaScript modules | 94 KB |
| [`spend-calendar/`](spend-calendar) | Credit-card statements, EMIs and payments | HTML, CSS, JS | 44 KB |
| [`instimess/`](instimess) | IIT Madras mess menus | HTML, CSS, JS | 15 KB |
| [`apfc-notes/`](apfc-notes) | Exam-notes site | Next.js static export | per page ≈ 72 KB HTML |

## Run one project

```bash
npm install                     # once, at the root: installs every Vite app (npm workspaces)
npm run dev -w pettry-admin     # or any other workspace
npm test --workspaces --if-present
```

`apfc-notes` has its own `npm install`, because Next.js pins its own React. The plain HTML projects need only a static server: `python3 -m http.server` inside the folder.

## Build the whole site

```bash
npm run build                                  # → site/
SITE_BASE=/frontend-portfolio npm run build    # when served from github.io/<repo>/
npx serve site
```

`scripts/build-site.mjs` builds each app and puts the portfolio at `site/` with each demo at `site/<folder>/`. The portfolio links to demos with relative paths (`./pettry-admin/`), so the same build works at any URL.

## Deploy to Vercel

Import [anuiitm/fr-portfolio](https://github.com/anuiitm/fr-portfolio) as one Vercel project. Keep the **Root Directory** at the repository root and the **Framework Preset** as **Other**.

`vercel.json` supplies the remaining settings:

- **Node.js:** 22.x (from `package.json`)
- **Install command:** `npm ci --include=dev && npm ci --prefix apfc-notes --include=dev`
- **Build command:** `npm run build`
- **Output directory:** `site`

The portfolio is served at `/`, and each demo at its folder path. The APFC pages are exported under `/apfc-notes/`; no server or environment secrets are required. Do not select the APFC folder as the Vercel root.

Every project's **View code** button points to its own folder in this repository, including in local previews.

Each folder also works as its own repository: copy it out and run `npm install` there.

## Portfolio experience

The project-only portfolio follows the Dennis Snellenberg work-page direction selected by the user. A large typographic heading leads into a wide BlueStone showcase and a spacious two-column work gallery. Captions sit directly on the page background. Each entry has a short description, technology labels, and Open project and View code buttons.

There is no navbar, footer, or personal biography. The light/dark toggle sits beside search, and search and filters cover all nine projects. The layout becomes one column on phones.

The theme follows the system preference until a visitor chooses light or dark, then saves that choice locally. Keyboard focus, a skip link, and reduced-motion support are included. All projects remain available without JavaScript. Space Grotesk is self-hosted under its included open font license.

[Design references and research](DESIGN_NOTES.md) document the primary layout reference and the supporting references.

Source links point to `https://github.com/anuiitm/fr-portfolio/tree/main/<project-folder>`. Set `SOURCE_REPO` when building to use a different repository.
