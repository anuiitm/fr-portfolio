# BlueStone review insights

An interactive report on 196,275 Google Maps reviews of 316 BlueStone stores (2014 to January 2026): how fast stores reply, which stores leave customers unhappy, and what the low ratings say.

An independent analysis of public reviews. Not affiliated with BlueStone.

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # unit tests for the statistics helpers
npm run build    # static files in dist/
```

## What's in it

- **Filters in Redux, mirrored in the URL.** Year range, city and the selected store live in a Redux slice. A listener middleware writes them to the query string, so a view can be shared.
- **Memoised selectors** recompute store, city and KPI numbers for the chosen years from compact per-year rows.
- **Volume-adjusted ranking.** Stores are ranked by the lower bound of the 95% Wilson interval for their share of 3★-or-lower reviews, so a store with 4 bad reviews out of 40 doesn't outrank one with 60 out of 600.
- **Complaint explorer.** The ~1,900 low-rated reviews with text are a separate file, fetched by an async thunk when the section scrolls into view. Theme tagging uses regular expressions you can edit live. Invalid patterns are reported, not thrown.
- **Charts are hand-written SVG** (no chart library). Each one has a hover tooltip and a "View as table" fallback.
- Native `<dialog>` for the store drawer, light and dark themes, works at 390 px wide.

## The data

`scripts/aggregate.py` turns the 209 MB scraped CSV (not included) into `src/data/insights.json` (115 KB) and `public/data/negative-reviews.json`:

```bash
python3 -I scripts/aggregate.py Bluestone-data.csv /tmp/insights.json
```

Differences from the first notebook analysis, and why:

| Notebook | Here | Why |
|---|---|---|
| Parsed "a year ago" labels into dates | Uses the exact `published_at_date` timestamp | The labels shifted dates by up to 11 months. They inflated "replies over a month" from 8% to 63%. |
| No de-duplication | De-duplicated on `review_id` | 23,069 rows (10.5%) were repeats |
| All listings | Drops a PC Jeweller listing and the corporate office | Not BlueStone stores |
| First matching keyword wins | Multi-label regex themes | First-match counts depended on the order of the keyword lists |
| Reviewer names in the data | Names, avatars and profile links removed; phone numbers and emails in text masked | Privacy |
