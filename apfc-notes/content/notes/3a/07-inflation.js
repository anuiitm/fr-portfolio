import { h2, p, ul, li, table, key, trap, fresh, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Inflation is a sustained rise in the general price level. India targets **CPI inflation of 4% ± 2%** under **flexible inflation targeting**. This was adopted in **2016** and retained on **25 March 2026** for **2026–31**. The target is pursued by the RBI\'s six-member **Monetary Policy Committee**. In 2026 all the price indices changed: a new **CPI (base 2024)** from **February 2026**, cutting the food weight from **45.86% to 36.75%**; a **WPI rebased to 2022-23**; and new **Producer Price Indices** (15 June 2026). CPI inflation was **4.82% in August 2026**.',
  blocks: [
    facts([
      ['4% ± 2%', 'inflation target, 2026–31'],
      ['4.82%', 'CPI inflation, August 2026'],
      ['2024', 'new CPI base year (Feb 2026)'],
      ['36.75%', 'food weight in new CPI'],
    ]),

    h2('Types of inflation'),
    table(
      ['Term', 'Meaning'],
      [
        ['**Demand-pull**', 'Too much money chasing too few goods'],
        ['**Cost-push**', 'Rising input costs (wages, oil) push prices up'],
        ['**Structural**', 'Supply bottlenecks, e.g. in agriculture'],
        ['**Creeping / walking / galloping / hyperinflation**', 'Mild (under ~3%) / moderate (~3–10%) / double-digit / extremely rapid (often over 50% a month)'],
        ['**Headline** vs **core**', 'Core excludes volatile **food and fuel**'],
        ['**Deflation**', 'Falling general prices (negative inflation)'],
        ['**Disinflation**', 'Inflation **falling** but still positive'],
        ['**Stagflation**', 'High inflation with stagnant growth and high unemployment'],
        ['**Reflation**', 'Deliberate policy to raise prices out of deflation'],
        ['**Skewflation**', 'Rise in prices of a few items (e.g. vegetables) while others are stable'],
        ['**Phillips curve**', 'Short-run inverse relation between inflation and unemployment'],
      ],
    ),

    h2('Price indices'),
    table(
      ['Index', 'Compiled by', 'Base year', 'Notes'],
      [
        ['**CPI (Combined, Rural, Urban)**', '**NSO, MoSPI**', '**2024** (new series from **12 Feb 2026**; earlier 2012)', 'Headline measure for the inflation target; weights from **HCES 2023-24**; food and beverages weight cut from **45.86% to 36.75%**; first reading **2.75%** (January 2026)'],
        ['**CPI-IW** (Industrial Workers)', '**Labour Bureau**', '**2016**', 'Used for **Dearness Allowance** of Government employees and wage indexation'],
        ['**CPI-AL / CPI-RL**', 'Labour Bureau', '—', 'Agricultural and rural labourers; used for MGNREGA-type wage revision'],
        ['**WPI**', '**Office of the Economic Adviser, DPIIT**', '**2022-23** (rebased **15 June 2026**; earlier 2011-12)', 'Wholesale prices; **no services**; to run for **five years** alongside PPI and then be discontinued'],
        ['**PPI** (Producer Price Indices)', 'OEA, DPIIT', '**2022-23** (launched **15 June 2026**)', 'Output PPI, trial Input PPI, and Service PPIs for seven services (banking, securities, insurance, pension fund management, railways, air passenger, telecom)'],
        ['**GDP deflator**', 'NSO', 'GDP base (2022-23)', 'Broadest measure; covers all goods and services produced'],
      ],
    ),

    h2('Inflation targeting and the MPC'),
    table(
      ['Item', 'Detail'],
      [
        ['Law', '**RBI Act, 1934, s.45ZA–45ZO**, inserted by the **Finance Act, 2016**; recommended by the **Urjit Patel Committee (2014)**'],
        ['Target', '**4% CPI inflation, band 2–6%**: for 2016–21, retained for 2021–26 and again (notified **25 March 2026**) for **1 April 2026 – 31 March 2031**'],
        ['MPC', '**6 members**: RBI **Governor** (chair, casting vote), a Deputy Governor, one RBI officer, and **three external members** appointed by the Centre for **4 years**; quorum 4; meets at least **4 times** a year (in practice six)'],
        ['Failure', 'If average inflation stays outside the band for **three consecutive quarters**, the RBI must report the reasons and remedial action to the Government'],
        ['Current stance', 'Repo **5.25%**, **neutral** (August 2026); RBI projects **5.0%** CPI inflation for 2026-27'],
      ],
    ),
    fresh('Latest', [
      '**August 2026 CPI inflation: 4.82%** (July: 4.45%); rural **5.23%**, urban **4.31%**; food inflation **5.95%**.',
      'Next MPC meeting: **5–7 October 2026**.',
    ]),
    key('Must know', ['Target **4% ± 2%** (to 2031).', 'CPI base **2024**; WPI and PPI base **2022-23**; CPI-IW base **2016**.', 'CPI-IW → **DA**.', 'MPC: 6 members, Governor has the casting vote.']),
    trap('Traps', [
      'The inflation target is set by the **Central Government** in consultation with the RBI, not by the RBI alone.',
      '**WPI** has no services; **CPI** includes services.',
      'Disinflation ≠ deflation.',
    ]),

    h2('Self-test'),
    quiz(
      ['India\'s inflation target for 2026–31 is:', ['3% ± 1%', '4% ± 2%', '5% ± 1%', '4% ± 1%'], 1, ''],
      ['The base year of the new CPI series released in February 2026 is:', ['2012', '2022-23', '2024', '2025'], 2, ''],
      ['Which index is used to revise the DA of Government employees?', ['CPI-Combined', 'CPI-IW', 'WPI', 'GDP deflator'], 1, ''],
      ['A situation of high inflation with stagnant growth is called:', ['reflation', 'disinflation', 'stagflation', 'skewflation'], 2, ''],
      ['India\'s first Producer Price Indices were launched in:', ['February 2026', 'June 2026', 'April 2025', 'March 2027'], 1, ''],
      ['The number of members of the Monetary Policy Committee is:', ['4', '5', '6', '7'], 2, ''],
    ),
    cards([
      ['CPI compiled by', 'NSO, MoSPI'],
      ['WPI compiled by', 'Office of the Economic Adviser, DPIIT'],
      ['Urjit Patel Committee', '2014: inflation targeting'],
      ['CPI Aug 2026', '4.82%'],
    ]),
    sources([
      ['Business Today: retail inflation 4.82% in August 2026', 'https://www.businesstoday.in/latest/economy/story/retail-inflation-climbs-to-4-82-in-august-as-food-prices-rise-555451-2026-09-14'],
      ['PIB: New series of WPI and PPI, base 2022-23', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2272872'],
      ['Drishti IAS: India retains 4% inflation target', 'https://www.drishtiias.com/daily-updates/daily-news-analysis/india-retains-4-inflation-target-for-rbi'],
      ['Vajiram: India\'s new CPI series', 'https://vajiramandravi.com/current-affairs/indias-new-cpi-series-2/'],
    ]),
  ],
};
