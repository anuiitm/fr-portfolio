import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from './lib/router';
import Shell from './components/Shell';
import { Empty, Toasts } from './components/ui';
import Dashboard from './pages/Dashboard';
import Checklists from './pages/Checklists';
import Workspace from './pages/Workspace';
import Users from './pages/Users';
import Audit from './pages/Audit';
import Settings from './pages/Settings';

const PAGES = { dashboard: [Dashboard, 'Dashboard'], users: [Users, 'Users & roles'], audit: [Audit, 'Audit log'], settings: [Settings, 'Settings'] };

export default function App() {
  const { page, id } = useRoute();
  const theme = useSelector((s) => s.settings.theme);
  const productName = useSelector((s) => (id ? s.products.entities[id]?.name : null));

  let Page;
  let title;
  if (page === 'checklists') [Page, title] = id ? [Workspace, productName ?? 'Not found'] : [Checklists, 'Checklists'];
  else [Page, title] = PAGES[page] ?? [NotFound, 'Not found'];

  useEffect(() => {
    if (theme === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.title = `${title} – VeriDoc admin`;
  }, [title]);

  useEffect(() => {
    document.getElementById('main')?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [page, id]);

  return (
    <>
      <Shell>
        <Page />
      </Shell>
      <Toasts />
    </>
  );
}

function NotFound() {
  return (
    <Empty title="That page does not exist.">
      <a href="#/checklists">Go to checklists</a>
    </Empty>
  );
}
