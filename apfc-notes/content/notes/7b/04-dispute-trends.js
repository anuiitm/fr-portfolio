import { h2, h3, p, ul, li, table, key, trap, verify, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Labour Bureau** publishes *Statistics on Industrial Disputes, Closures, Retrenchments and Lay-offs* from monthly returns by State Labour Departments and Regional Labour Commissioners (Central). Disputes have fallen sharply, from thousands a year in the 1970s–80s to under a hundred now: **86 disputes and 31.5 lakh man-days lost in 2018** (112 and 52.3 lakh in 2017). Most disputes are in the **private sector** and **State sphere**, but public-sector disputes involve far more workers. **Lock-outs** cause more man-days lost per dispute than strikes.',
  blocks: [
    h2('How the data are collected'),
    ul(
      li('Monthly returns from **State and UT Labour Departments** (State sphere) and **Regional Labour Commissioners (Central)** (Central sphere), sent to the Labour Bureau by the **25th** of the following month.'),
      li('Covers **strikes, lock-outs, and gheraos followed by lock-outs**, involving **10 or more workers**.'),
      li('**Political and sympathetic strikes** are counted separately, as they are not linked to a demand the employer can meet.'),
      li('Measures: number of disputes, **workers involved**, **man-days lost** (the main measure of intensity), wages lost, production lost, duration, causes and methods of settlement.'),
      li('Data are submitted **voluntarily** and published with a long lag, so the latest full report is several years old.'),
    ),

    h2('Official figures: 2017 and 2018'),
    facts([
      ['86', 'disputes in 2018 (112 in 2017)'],
      ['7.43 lakh', 'workers involved in 2018'],
      ['31.5 lakh', 'man-days lost in 2018 (52.3 lakh in 2017)'],
      ['80% / 20%', 'strikes / lock-outs by number, 2018'],
    ]),
    table(
      ['Indicator (2018)', 'Figure'],
      [
        ['Disputes', '**86** (down 23% from 112 in 2017)'],
        ['Strikes / lock-outs', '**69** strikes (80.2%) and **17** lock-outs (19.8%); all lock-outs in the private sector'],
        ['Workers involved', '**7,42,968**'],
        ['Man-days lost', '**31,49,554** (down 39.8% from 52,33,467)'],
        ['State sphere', '76 disputes (88%) and 67% of man-days lost'],
        ['Public sector', '14 disputes (16%) but **94%** of workers involved and 33% of man-days lost'],
        ['Private sector', '72 disputes (84%), 6% of workers, **67%** of man-days lost'],
        ['Leading State', '**Tamil Nadu**: 26 disputes (30%)'],
        ['Leading industry', '**Manufacturing** (NIC 10–33): 62 disputes (72%)'],
        ['Leading causes', '**Wages and allowances (30.2%)**, **charter of demands (24.4%)**'],
        ['Average time-loss per dispute', '36,623 man-days (strikes 24,427; **lock-outs 86,124**)'],
        ['Closures / retrenchments / lay-offs', '12 closures (2,143 workers); 9 retrenchments (116 workers); 31 lay-offs (6,561 workers; mainly shortage of raw material)'],
      ],
      'Labour Bureau, Statistics on Industrial Disputes (2018 edition, published July 2022)',
    ),
    p('Later years remained low: roughly **40–50 disputes a year** in 2021–2023, with man-days lost varying widely depending on a few large strikes.'),
    verify('Recent-year figures', 'The Labour Bureau\'s reports after 2018 are delayed. Figures quoted for 2021–23 in media reports vary; use the latest Lok Sabha reply or Labour Bureau report for exact numbers.'),

    h2('Long-term trends and explanations'),
    table(
      ['Period', 'Pattern'],
      [
        ['1960s–1980s', 'High conflict: thousands of disputes a year; peak man-days lost in the late 1970s and early 1980s, including the **Great Bombay Textile Strike (1982–83)** led by **Datta Samant**'],
        ['1990s', 'Decline in strikes; **lock-outs** begin to account for most man-days lost as employers use them more assertively after liberalisation'],
        ['2000s–2010s', 'Continued fall in the number of disputes; occasional large conflicts (for example **Maruti Suzuki, Manesar, 2012**)'],
        ['2020s', 'Very few recorded disputes; nationwide **general strikes** against Government policy (not counted as industrial disputes)'],
      ],
    ),
    h3('Why disputes have declined'),
    ul(
      'Fall in **union density** and bargaining power; growth of the **informal** and **contract** workforce outside unions.',
      'Shift from manufacturing to **services** and to **IT**, where unions are weak.',
      '**Voluntary retirement schemes**, restructuring and closures of old industries (textiles, jute).',
      'Better **HR practices**, grievance systems and settlements outside the legal machinery.',
      'Employers\' greater use of **lock-outs** and legal action; stricter strike rules.',
      'Under-reporting because returns are voluntary.',
    ),
    key('Pattern to remember', 'Most disputes are **private sector** and **State sphere**; public sector disputes are **few but large** (94% of workers involved in 2018); **lock-outs** last longer and cause more man-days lost per dispute; **wages and allowances** remain the top cause.'),
    trap('Do not confuse', [
      'Labour Bureau counts disputes involving **10+ workers**; political and sympathetic strikes are counted separately.',
      '**Man-days lost** measures intensity; the **number of disputes** measures frequency.',
    ]),

    h2('Self-test'),
    quiz(
      ['In 2018, which sector accounted for most workers involved in industrial disputes?', ['Private sector', 'Public sector', 'Agriculture', 'Unorganised sector'], 1, 'Public sector: 94% of workers involved, though only 16% of disputes.'],
      ['Labour Bureau data on disputes cover work stoppages involving at least:', ['5 workers', '10 workers', '20 workers', '50 workers'], 1, ''],
      ['Average time-loss per dispute in 2018 was highest for:', ['Strikes', 'Lock-outs', 'Gheraos', 'Political strikes'], 1, 'Lock-outs averaged 86,124 man-days vs 24,427 for strikes.'],
    ),
    cards([
      ['2018 disputes', '86 disputes, 7.43 lakh workers, 31.5 lakh man-days'],
      ['Top State (2018)', 'Tamil Nadu, 26 disputes'],
      ['Great Bombay Textile Strike', '1982–83, led by Datta Samant'],
    ]),
    sources([
      ['Labour Bureau: Statistics on Industrial Disputes, Closures, Retrenchments and Lay-offs, 2018', 'https://labourbureau.gov.in/uploads/pdf/ID_Review_2018.pdf'],
    ]),
  ],
};
