import { searchIndex } from '@/lib/content';
import { uiicSearchEntries } from '@/lib/uiic';

export const dynamic = 'force-static';

export function GET() {
  return Response.json([...searchIndex(), ...uiicSearchEntries()]);
}
