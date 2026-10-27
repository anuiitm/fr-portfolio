# Spend calendar

A credit-card tracker: every charge on a calendar, coloured by card, plus statement bills, EMIs, part payments and unsettled charges. Plain HTML, CSS and JavaScript, with no dependencies and no build step.

```bash
python3 -m http.server   # or open index.html via any static server
```

On first open it seeds about ten weeks of demo spending, including an EMI and some paid, part-paid and overdue bills. **Reset demo** reloads that data; **Save backup** and **Restore backup** move your data as JSON.

## Notable parts

- **Statement maths.** A charge lands on the statement whose cycle closes on or after it (`stmtKey`). Due dates can be a fixed day or N days after the close.
- **EMIs** use a reducing-balance schedule with 18% GST on each month's interest and the processing fee in month one. No-cost EMIs hand the interest back as an upfront discount. The last instalment absorbs rounding.
- **Part payments** can be booked on a bill or on a single charge. A bill that is fully paid ticks its charges.
- Keyboard calculator, search across amount, shop, items and person, light and dark themes, and `aria-pressed`, `inert` and live regions throughout.

## Compared with the personal version

The original also ran a small Python server that mirrored data to `.backup-latest.json` for a nightly backup job. That server, the backup scripts and every backup file are left out here, along with the personal data in them. The front end is unchanged apart from removing the sync and adding demo seeding (`js/demo.js`).

The files are classic scripts that share one global scope, loaded in order. Moving them to ES modules, with shared state in one object, would be the next refactor.
