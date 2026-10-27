import { navTree } from '@/lib/content';
import { uiicTree } from '@/lib/uiic';

// The sidebar trees used to be passed from the root layout, which serialised
// them into every one of ~450 exported pages (46 KB each). Served once here,
// the browser downloads and caches them a single time.
export const dynamic = 'force-static';

export function GET() {
  return Response.json({ apfc: navTree(), uiic: uiicTree() });
}
