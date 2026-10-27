import { data } from './store/selectors';
import { fmtInt } from './lib/format';
import FilterBar from './components/FilterBar';
import Kpis from './components/Kpis';
import MethodCheck from './components/MethodCheck';
import ReplySpeedChart from './components/charts/ReplySpeedChart';
import VolumeChart from './components/charts/VolumeChart';
import CityBoard from './components/CityBoard';
import StoreTable from './components/StoreTable';
import Complaints from './components/Complaints';
import Findings from './components/Findings';
import StoreDrawer from './components/StoreDrawer';
import ThemeToggle from './components/ThemeToggle';

const { meta } = data;
const SECTIONS = [
  ['overview', 'Overview'],
  ['replies', 'Reply times'],
  ['volume', 'Volume'],
  ['cities', 'Cities'],
  ['stores', 'Stores'],
  ['complaints', 'Reviews'],
  ['findings', 'Findings'],
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="report-top">
        <nav className="report-nav" aria-label="Portfolio navigation">
          <a className="portfolio-back" href="../">
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H4m5-5-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Projects
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <div className="masthead wrap">
        <div className="masthead-copy">
          <p className="eyebrow">Review analysis</p>
          <h1>BlueStone insights</h1>
          <p className="dek">Explore customer ratings, response times, and reviews across {meta.stores} stores in {meta.cities} cities.</p>
        </div>
        <div className="report-meta"><span>Google Maps reviews</span><strong>{fmtInt(meta.reviews)} reviews</strong><span>June 2014 – January 2026</span></div>
      </div>
      <div className="wrap"><nav className="toc" aria-label="Report sections">{SECTIONS.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></div>
      <FilterBar />
      <main id="main" className="wrap report-main">
        <Kpis />
        <details className="method-disclosure">
          <summary><span className="method-summary-icon" aria-hidden="true">i</span><span>About the reply-time figures</span><span className="method-summary-note">Based on exact review timestamps</span><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></summary>
          <MethodCheck />
        </details>
        <div className="analytics-grid">
          <section className="section" id="replies" aria-labelledby="replies-title">
            <header className="section-head"><p className="eyebrow">Response times</p><h2 id="replies-title">Reply times by year</h2></header>
            <p className="prose">Compare how quickly stores responded to reviews in each year.</p>
            <ReplySpeedChart />
          </section>
          <section className="section" id="volume" aria-labelledby="volume-title">
            <header className="section-head"><p className="eyebrow">Review trends</p><h2 id="volume-title">Volume and low ratings</h2></header>
            <p className="prose">Monthly review counts alongside the share rated three stars or lower.</p>
            <VolumeChart />
          </section>
        </div>
        <CityBoard />
        <StoreTable />
        <Complaints />
        <Findings />
        <section className="section about" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About the data</h2>
          <ul>
            <li>{fmtInt(meta.rowsRaw)} rows collected from Google Maps on 7 January 2026. {fmtInt(meta.rowsRaw - meta.rowsDeduped)} duplicate rows and {fmtInt(meta.rowsExcluded)} rows from non-store listings were removed.</li>
            <li>Reviewer names, photos, and profile links are excluded. Phone numbers and email addresses in review text are masked.</li>
            <li>Year filters cover 2019–2025. Earlier years have fewer than 100 reviews each; 2026 includes only five days.</li>
          </ul>
          <p className="muted small">An independent analysis of public reviews. Not affiliated with BlueStone.</p>
        </section>
      </main>
      <StoreDrawer />
    </>
  );
}
