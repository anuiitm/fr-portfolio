import { h2, p, ul, li, table, key, trap, fresh, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Periodic Labour Force Survey (PLFS)** of the NSO is India\'s main source of employment data. It began in **2017**, and since **2025** it publishes **monthly** bulletins (current weekly status), quarterly estimates and an annual report for the **calendar year**. Key measures are **LFPR** (labour force ÷ population), **WPR** (employed ÷ population) and the **unemployment rate** (unemployed ÷ labour force). In **August 2026**: UR **5.0%**, LFPR **55.6%**, WPR **52.8%**, female LFPR **34.8%** (current weekly status, 15+). The **2025 annual report**: UR **3.1%**, female LFPR **40.0%** (usual status).',
  blocks: [
    facts([
      ['5.0%', 'unemployment, Aug 2026 (CWS, 15+)'],
      ['55.6%', 'LFPR, Aug 2026'],
      ['3.1%', 'unemployment, calendar 2025 (usual status)'],
      ['40.0%', 'female LFPR, 2025 (usual status)'],
    ]),

    h2('Types of unemployment'),
    table(
      ['Type', 'Meaning'],
      [
        ['**Disguised**', 'More people work than needed; marginal productivity near zero (common in agriculture)'],
        ['**Seasonal**', 'Work available only in certain seasons (agriculture, tourism)'],
        ['**Structural**', 'Mismatch between skills and jobs, or lack of capital; long-term'],
        ['**Frictional**', 'Temporary, while changing jobs'],
        ['**Cyclical**', 'Due to downturns in the business cycle'],
        ['**Educated**', 'Unemployment among the educated; skills mismatch'],
        ['**Technological**', 'Jobs lost to automation'],
        ['**Underemployment**', 'Working below capacity or fewer hours than desired'],
      ],
    ),

    h2('Measurement'),
    table(
      ['Concept', 'Definition'],
      [
        ['**Labour force**', 'Persons employed + persons seeking or available for work'],
        ['**LFPR**', 'Labour force ÷ population × 100'],
        ['**WPR** (worker population ratio)', 'Employed ÷ population × 100'],
        ['**Unemployment rate (UR)**', 'Unemployed ÷ labour force × 100'],
        ['**Usual status (ps + ss)**', 'Activity over the last **365 days** (principal plus subsidiary status); gives a lower UR'],
        ['**Current weekly status (CWS)**', 'Activity in the last **7 days** (worked at least one hour on any day = employed); used for monthly and quarterly estimates'],
      ],
    ),

    h2('PLFS'),
    ul(
      li('Launched in **April 2017** by the NSO (replacing the NSSO\'s five-yearly Employment–Unemployment Surveys); annual reports on the July–June year until 2023-24 (UR **3.2%** in 2023-24).'),
      li('**Revamped from January 2025**: **monthly** CWS estimates for rural and urban areas (first bulletin, for April 2025, released on **15 May 2025**), **quarterly** estimates for rural and urban areas, and the **annual report on a calendar-year basis**.'),
    ),
    fresh('Latest data', [
      '**Annual Report, PLFS 2025** (January–December 2025; released March 2026): UR **3.1%**; female LFPR **40.0%** (usual status, 15+).',
      '**August 2026 monthly bulletin** (CWS, 15+): UR **5.0%** (July: 5.1%); LFPR **55.6%**; WPR **52.8%**; female LFPR **34.8%**; rural UR **4.1%**.',
      'Other sources: **EPFO monthly payroll data** (formal jobs), **e-Shram** (31.89 crore unorganised workers, August 2026), RBI\'s KLEMS database.',
    ]),
    key('Rules', ['UR = unemployed ÷ **labour force** (not population).', 'CWS gives a higher UR than usual status.', 'Monthly PLFS from 2025.']),
    trap('Traps', [
      'LFPR and WPR are percentages of **population**; UR is a percentage of the **labour force**.',
      'Do not compare CWS monthly rates directly with usual-status annual rates.',
    ]),

    h2('Self-test'),
    quiz(
      ['The unemployment rate is calculated as a percentage of:', ['the total population', 'the working-age population', 'the labour force', 'the employed'], 2, ''],
      ['India\'s unemployment rate in August 2026 (PLFS monthly, CWS, 15+) was:', ['3.1%', '4.1%', '5.0%', '5.5%'], 2, ''],
      ['Disguised unemployment is most common in:', ['IT services', 'agriculture', 'manufacturing', 'banking'], 1, ''],
      ['Current weekly status uses a reference period of:', ['1 day', '7 days', '30 days', '365 days'], 1, ''],
      ['From 2025, the PLFS annual report covers:', ['July–June', 'April–March', 'January–December', 'October–September'], 2, ''],
    ),
    cards([
      ['PLFS began', 'April 2017'],
      ['First monthly PLFS bulletin', '15 May 2025 (April 2025 data)'],
      ['Female LFPR 2025 (usual status)', '40.0%'],
    ]),
    sources([
      ['MoSPI: PLFS Annual Report 2025 press note', 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1774607827733_3e8964a9-268b-4cc9-ad65-cfc8a9e32f08_Press_note_AR_PLFS_2025_23032025_V2.1_26032026_final.pdf'],
      ['PIB: PLFS monthly bulletin (June 2026)', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2284814'],
      ['IndexBox: PLFS August 2026 (LFPR 55.6%, UR 5.0%)', 'https://www.indexbox.io/blog/indias-labour-force-participation-rises-to-556-in-august-2026/'],
    ]),
  ],
};
