import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import filters, { filtersFromUrl, filtersToUrl, resetFilters, selectStore, setCity, setMinReviews, setYears } from './filtersSlice';
import explorer from './explorerSlice';

const urlSync = createListenerMiddleware();
urlSync.startListening({
  matcher: isAnyOf(setYears, setCity, setMinReviews, selectStore, resetFilters),
  effect: (_, api) => {
    history.replaceState(null, '', filtersToUrl(api.getState().filters));
  },
});

export const store = configureStore({
  reducer: { filters, explorer },
  preloadedState: { filters: filtersFromUrl(location.search) },
  middleware: (getDefault) =>
    // The review list is ~2k plain objects; skip the dev-only deep checks on it.
    getDefault({ immutableCheck: { ignoredPaths: ['explorer.reviews'] }, serializableCheck: { ignoredPaths: ['explorer.reviews'] } })
      .prepend(urlSync.middleware),
});
