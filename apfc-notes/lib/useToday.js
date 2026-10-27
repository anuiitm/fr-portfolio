import { useSyncExternalStore } from 'react';
import { iso } from '@/lib/planDates';

// Today's date is only known in the browser; the server render has none. Kept apart from
// planDates so server components can use the date helpers.
const noop = () => () => {};
export const useToday = () => useSyncExternalStore(noop, () => iso(new Date()), () => null);
