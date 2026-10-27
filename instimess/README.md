# InstiMess

Today's mess menu for every IIT Madras hostel mess (temporary, Jain, North, South, Unified and Protein; veg and non-veg). The meal being served right now is highlighted. No dependencies and no build step.

```bash
python3 -m http.server
```

- The week letter (A–D) of the four-week rotation is worked out from the date. Use ← and → to move between days.
- The mess and diet you pick are remembered, and "serving now" re-checks every minute.
- Menus live in `menu-data.js`.

## Fixes over the first version

- `initializeCalendar()` ran on every mess or diet click, stacking date-picker instances and click handlers. One "next day" click then skipped several days. Here everything is wired once.
- flatpickr and an unused plugin, loaded from two CDNs, are replaced by the native date input.
- The logo and favicon were hotlinked from Wikipedia and Flaticon. They are now an inline SVG.
- `new Date("2024-07-28")` parsed the rotation start as UTC midnight, which can put the week boundary on the wrong day. It now uses local time.
- The page was missing `</body>`, rendered HTML strings, and called an `onclick` handler on `window`. It now uses a `<template>`, `textContent` and real event listeners.
