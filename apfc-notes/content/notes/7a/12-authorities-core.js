import { h2, h3, p, ul, li, table, key, trap, note, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Four central institutions carry most of the Labour Ministry\'s work: **EPFO** (statutory body under the CBT; provident fund, pension and insurance), the **Chief Labour Commissioner (Central)** (the Central Industrial Relations Machinery, set up **April 1945**), the **Labour Bureau** (labour statistics and **CPI-IW**, set up **1946**, Shimla and Chandigarh), and the **Wage Boards** (tripartite bodies for industry wages, statutory only for journalists).',
  blocks: [
    h2('Ministry of Labour and Employment: how it is organised'),
    table(
      ['Type', 'Bodies'],
      [
        ['**Offices of the Ministry**', 'Chief Labour Commissioner (Central), Directorate General of Employment, Directorate General of Labour Welfare, DGFASLI, DGMS, Labour Bureau'],
        ['**Autonomous and statutory bodies**', 'EPFO (CBT), ESIC, V.V. Giri National Labour Institute, Dattopant Thengadi National Board for Workers Education and Development'],
        ['**Adjudicating bodies**', 'Central Government Industrial Tribunals (CGIT-cum-Labour Courts), which also act as EPF Appellate Tribunals'],
        ['**Tripartite bodies**', 'Indian Labour Conference, Standing Labour Committee, CBT, ESIC, NSSB'],
      ],
    ),

    h2('EPFO'),
    facts([
      ['15 Nov 1951', 'EPF Ordinance; replaced by the EPF Act on 4 Mar 1952'],
      ['1 Nov 1952', 'EPF Scheme came into force'],
      ['7.98 crore', 'contributing members, 7.68 lakh establishments (Sep 2026)'],
      ['1.16%', 'Central Government\'s contribution to EPS'],
    ]),
    ul(
      li('The **Employees\' Provident Fund Organisation** is the organisation of officers and employees of the **Central Board of Trustees (CBT), EPF**, now constituted under **Section 4** of the Code on Social Security (earlier s.5A of the EPF & MP Act, 1952).'),
      li('The **CBT** is tripartite: Chairperson and Vice-Chairperson (by convention the Union Labour Minister chairs it), up to **5** Central officials, up to **15** State representatives, **10** employer and **10** employee representatives, and the **Central Provident Fund Commissioner** ex officio.'),
      li('The **Central Provident Fund Commissioner** is the **Chief Executive Officer** of the CBT and head of EPFO (s.14). Appointments to Group A and B posts, including **APFC**, require consultation with the **UPSC**.'),
      li('EPFO administers the **EPF Scheme, the Employees\' Pension Scheme and the EDLI Scheme** (all re-notified as **2026** schemes on 29 June 2026), and India\'s **Social Security Agreements** with other countries.'),
      li('It is one of the world\'s largest social security organisations by number of members and transactions.'),
    ),
    note('Full detail', 'EPF history, the 2026 schemes, contributions, wage ceiling, EPS and interest rates are in **7C (Social Security in India)**.'),

    h2('Chief Labour Commissioner (Central): CLC(C)'),
    p('Also called the **Central Industrial Relations Machinery (CIRM)**. It is an office of the Ministry of Labour and Employment, headed by the **Chief Labour Commissioner (Central)**.'),
    timeline([
      ['Apr 1945', 'Set up on the recommendation of the **Royal Commission on Labour**, by combining the offices of the Conciliation Officer (Railways), the Supervisor of Railway Labour and the Labour Welfare Adviser'],
      ['After 1947', 'Grew into the enforcement and industrial-relations arm of the Centre for the "central sphere"'],
      ['2020 onwards', 'Takes on the role of Inspector-cum-Facilitator and conciliation machinery under the Labour Codes'],
    ]),
    h3('Functions'),
    ul(
      '**Prevention and settlement of industrial disputes** in the central sphere (railways, mines, oilfields, major ports, banks, insurance, central PSUs and others), through **conciliation officers**.',
      '**Enforcement of labour laws** (now the Codes) in central-sphere establishments: wages, bonus, gratuity, contract labour, maternity and others.',
      '**Verification of membership** of trade unions for recognition and representation.',
      'Quasi-judicial work: hearing claims (for example gratuity and wage claims) and appeals.',
      'Implementing welfare measures and handling complaints, including through the **SAMADHAN** portal.',
    ),
    p('The organisation has **Regional Labour Commissioners** (headed by RLCs) and **Assistant Labour Commissioners** and **Labour Enforcement Officers** in the field. Its officers are from the **Central Labour Service**.'),

    h2('Labour Bureau'),
    facts([
      ['1946', 'set up'],
      ['Shimla & Chandigarh', 'offices; 5 regional offices'],
      ['2016 = 100', 'CPI-IW base year (from Sep 2020)'],
      ['2019 = 100', 'CPI-AL/RL base year (from Jun 2025)'],
    ]),
    ul(
      li('An office of the Ministry, it is the main agency for **labour statistics** in India. Regional offices: **Kolkata, Chennai, Ahmedabad, Guwahati and Kanpur**.'),
      li('**Consumer Price Index for Industrial Workers (CPI-IW)**: base **2016=100** since the September 2020 index (earlier 2001=100). Used to revise **dearness allowance** of Government and PSU employees and **VDA** in minimum wages.'),
      li('**CPI for Agricultural Labourers and Rural Labourers (CPI-AL/RL)**: new series base **2019=100** from **June 2025** (earlier 1986-87=100); now covers **34** States and UTs and **787** villages. Used to revise minimum wages in agriculture and MGNREGA-type wage rates.'),
      li('**Wage Rate Index** and **Occupational Wage Surveys**.'),
      li('Surveys: **Quarterly Employment Survey (QES)**, All-India Quarterly Establishment-based Employment Survey, and all-India surveys of **migrant workers** and **domestic workers**.'),
      li('Compiles **administrative statistics** under labour laws (industrial disputes, strikes and lock-outs, trade union returns, workplace injuries) and publishes the **Indian Labour Year Book**, **Indian Labour Journal** and **Statistical Profile on Women Labour**.'),
    ),
    trap('Do not confuse', [
      '**CPI-IW** is compiled by the **Labour Bureau**; the headline **CPI (Rural, Urban, Combined)** used for inflation targeting is compiled by **NSO, MoSPI** (new base **2024** from February 2026).',
      '**PLFS** (Periodic Labour Force Survey) is conducted by **NSO, MoSPI**, not the Labour Bureau.',
    ]),

    h2('Wage Boards'),
    ul(
      li('**Tripartite** bodies (employers, workers and independent members) set up to recommend wage structures for a particular industry.'),
      li('The **Second Five-Year Plan** (1956) favoured them; the first was for **cotton textiles (1957)**, followed by cement, sugar, jute, plantations, iron ore, iron and steel, coal, engineering and others. These were **non-statutory**, and their recommendations were implemented by agreement.'),
      li('The only **statutory** Wage Boards were for **working journalists and non-journalist newspaper employees** under the Working Journalists Act, 1955: six in all, the last being **Majithia (2007; notified 11 Nov 2011)**.'),
      li('The Labour Codes contain **no provision** for Wage Boards. Wages are now set through minimum wages, the floor wage and collective bargaining.'),
    ),
    key('One line each', [
      '**EPFO**: statutory, tripartite CBT; CPFC is CEO; social security for organised workers.',
      '**CLC(C)**: 1945; industrial relations and enforcement in the central sphere.',
      '**Labour Bureau**: 1946; statistics; CPI-IW (2016=100) and CPI-AL/RL (2019=100).',
      '**Wage Boards**: tripartite; statutory only for journalists; none under the Codes.',
    ]),

    h2('Self-test'),
    quiz(
      ['The Chief Labour Commissioner (Central) organisation was set up in:', ['1945', '1946', '1952', '1969'], 0, 'April 1945, on the Royal Commission on Labour\'s recommendation.'],
      ['The current base year of CPI-IW is:', ['2001', '2012', '2016', '2019'], 2, '2016=100, effective from the September 2020 index.'],
      ['Labour Bureau is headquartered at:', ['New Delhi and Noida', 'Shimla and Chandigarh', 'Mumbai', 'Nagpur'], 1, 'Shimla and Chandigarh.'],
      ['Who is the chief executive officer of the CBT, EPF?', ['Union Labour Secretary', 'Central Provident Fund Commissioner', 'Chief Labour Commissioner', 'DG ESIC'], 1, 'Section 14 of the Code on Social Security.'],
      ['Which Wage Boards were statutory?', ['Cotton textile', 'Cement and sugar', 'Working journalists', 'All wage boards'], 2, 'Only journalists\' boards had a statutory basis.'],
    ),
    cards([
      ['CIRM', 'Central Industrial Relations Machinery = CLC(C)'],
      ['CPI-AL/RL new series', 'Base 2019=100 from June 2025; 34 States/UTs; 787 villages'],
      ['Labour Bureau regional offices', 'Kolkata, Chennai, Ahmedabad, Guwahati, Kanpur'],
      ['CGIT', 'Central Government Industrial Tribunal; also the EPF Appellate Tribunal'],
    ]),
    sources([
      ['Wikipedia: Central Labour Service (CLC organisation)', 'https://en.wikipedia.org/wiki/Central_Labour_Service'],
      ['Labour Bureau (official site)', 'https://labourbureau.gov.in/'],
      ['PIB: CPI-AL/RL on base 2019=100 (June 2025)', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2145905'],
    ]),
  ],
};
