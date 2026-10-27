# Portfolio design references

Research date: 27 October 2026. The reference sites, their work pages, and available visual captures were reviewed. Older visual captures are treated as historical references, rather than representations of every current page.

The implementation uses this portfolio's existing project content and assets. Reference portraits, names, biography text, client claims, and branding are not included.

| Reference | What informed this design | Where it appears |
| --- | --- | --- |
| [Dennis Snellenberg — Work](https://www.dennissnellenberg.com/work) | Large typography, room around the work, and distinct presentation backgrounds for projects. | Primary layout reference selected by the user: a large opening title, generous spacing, image-led work entries, and restrained project captions. |
| [Brittany Chiang](https://brittanychiang.com/) | Clear title/description/technology hierarchy and careful dark-theme contrast. | Short, consistent project cards and a complete dark color system. |
| [Rauno Freiberg — Projects](https://raunofreiberg.com/projects) and [2023 archive](https://2023.rauno.me/) | Product-like presentation, visual galleries, and close attention to individual controls. | Large product previews, restrained image hover movement, and the theme control beside search. |
| [Emil Kowalski](https://emilkowal.ski/) and [7 Practical Animation Tips](https://emilkowal.ski/ui/7-practical-animation-tips) | Immediate feedback, a small press response, and short transitions with ease-out timing. | Buttons scale to 0.97 on press; hover transitions stay under 300 ms and respect reduced motion. |
| [Adham Dannaway — Portfolio](https://www.adhamdannaway.com/portfolio) | Concrete product imagery, short project labels, and a browsable work gallery. | Large app previews, concise descriptions, and direct demo/code actions. |

## Current design

Dennis Snellenberg's work-page composition is the primary reference, as selected by the user. The opening is one large typographic heading. The decorative hero collage is removed. BlueStone leads with a wide project visual; the remaining work sits in a spacious two-column gallery. Captions sit on the page background, without outer panel borders, fake browser chrome, or repeated floating previews.

The palette uses warm white, charcoal, and a restrained blue accent. Project backgrounds use muted neutrals. Descriptions are short and factual, with separate demo and source actions. There is no personal biography, navbar, footer, or middle-dot separator. Search and the theme control remain adjacent, and all nine projects can be filtered.

The layout becomes one column on phones. Keyboard focus, announced search results, local theme persistence, and reduced-motion support are retained. Space Grotesk is self-hosted under its included open font license.

Reference screenshots were downloaded to a temporary research directory only; none are shipped with the site. The production build and interaction-state checks are run locally. Visual browser QA is unavailable: Safari automation times out and access to Chrome was not approved.
