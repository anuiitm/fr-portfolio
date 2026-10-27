import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from './lib/router';
import Shell from './components/Shell';
import { Toasts } from './components/ui';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Promos from './pages/Promos';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import Faq from './pages/Faq';
import Settings from './pages/Settings';

const PAGES = { dashboard: Dashboard, orders: Orders, products: Products, inventory: Inventory, promos: Promos, customers: Customers, analytics: Analytics, faq: Faq, settings: Settings };
const TITLES = { dashboard: 'Dashboard', orders: 'Orders', products: 'Products', inventory: 'Inventory', promos: 'Promo codes', customers: 'Customers', analytics: 'Analytics', faq: 'FAQ', settings: 'Settings' };

export default function App() {
  const user = useSelector((s) => s.session.user);
  const theme = useSelector((s) => s.settings.theme);
  const { page } = useRoute();
  const Page = PAGES[page] ?? NotFound;

  useEffect(() => {
    if (theme === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.title = `${user ? TITLES[page] ?? 'Not found' : 'Sign in'} – Pettry admin`;
    // Move focus to the page on navigation so screen readers announce the change.
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [page, user]);

  if (!user) return <Login />;

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
    <div className="empty">
      <p className="empty-title">That page does not exist.</p>
      <a href="#/dashboard">Go to the dashboard</a>
    </div>
  );
}
