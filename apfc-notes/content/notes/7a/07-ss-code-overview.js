import { h2, h3, p, ul, li, table, key, trap, fresh, note, hook, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Code on Social Security, 2020** (Act 36 of 2020, **164 sections**, 14 chapters, 7 Schedules) merges **9** laws (EC, ESI, EPF, Employment Exchanges, Maternity, Gratuity, Cine-Workers Welfare Fund, BOCW Cess, Unorganised Workers). It is the EPFO\'s parent law: **EPF is now Chapter III**. It also brings **gig and platform workers** under statutory social security for the first time. Full detail is in **7C**.',
  blocks: [
    h2('The Code at a glance'),
    facts([
      ['36 of 2020', 'Act number; assent 28 Sep 2020'],
      ['164 sections', '14 chapters, 7 Schedules'],
      ['9 laws', 'repealed by Section 164'],
      ['21 Nov 2025', 'most provisions in force (s.142 from 3 May 2021; EPS provisions from 3 May 2023)'],
    ]),
    table(
      ['Chapter', 'Sections', 'Subject', 'Replaces'],
      [
        ['I', '1–3', 'Preliminary; **definitions (s.2, 91 clauses)**; registration', '—'],
        ['II', '4–13', '**Social Security Organisations**: CBT (s.4), ESIC (s.5), NSSB and State Boards (s.6), Building Workers\' Welfare Boards (s.7)', '—'],
        ['III', '14–23', '**Employees\' Provident Fund**: CPFC (s.14), schemes (s.15), funds and contribution rates (s.16), exclusions (s.20), appeal to Tribunal (s.23)', 'EPF & MP Act 1952'],
        ['IV', '24–52', '**Employees\' State Insurance**: contributions (s.29), benefits (s.32), commuting accidents (s.34), EI Court (s.48)', 'ESI Act 1948'],
        ['V', '53–58', '**Gratuity**', 'Payment of Gratuity Act 1972'],
        ['VI', '59–72', '**Maternity benefit**', 'Maternity Benefit Act 1961'],
        ['VII', '73–99', '**Employee\'s compensation**', 'Employees\' Compensation Act 1923'],
        ['VIII', '100–108', '**BOCW cess** (1–2% of cost) and registration of building workers', 'BOCW Welfare Cess Act 1996'],
        ['IX', '109–114', '**Unorganised, gig and platform workers**; aggregator contribution (s.114)', 'Unorganised Workers\' SS Act 2008'],
        ['X', '115–121', 'Finance and accounts', '—'],
        ['XI', '122–132', 'Inspector-cum-Facilitator (s.122); **assessment of dues (s.125)**; **interest (s.127)**; **damages (s.128)**; recovery', 'EPF ss.7A, 7Q, 14B, 8'],
        ['XII', '133–138', 'Offences, penalties, **compounding (s.138)**', 'EPF s.14'],
        ['XIII', '139–140', '**Employment information**: reporting vacancies to career centres', 'Employment Exchanges (CNV) Act 1959'],
        ['XIV', '141–164', '**Social Security Fund (s.141)**; **Aadhaar (s.142)**; **exemption (s.143)**; repeal (s.164)', 'EPF s.17'],
      ],
    ),
    hook('The 9 laws, in date order', '**E**C 1923, **E**SI 1948, **E**PF 1952, **E**mployment Exchanges 1959, **M**aternity 1961, **G**ratuity 1972, **C**ine-Workers Fund 1981, **B**OCW Cess 1996, **U**norganised Workers 2008. "**Four E\'s, then MGCBU**."'),

    h2('Applicability (First Schedule)'),
    table(
      ['Chapter', 'Applies to'],
      [
        ['III, EPF', 'Every establishment with **20 or more** employees. Voluntary coverage if the employer and **majority of employees** agree (s.1(5)). Once covered, always covered even if numbers fall (s.1(8))'],
        ['IV, ESI', 'Every establishment with **10 or more** persons (other than a seasonal factory). Also establishments in **hazardous or life-threatening** occupations notified by the Centre **even with one employee**. **Plantations may opt in**. Voluntary coverage by agreement (s.1(7))'],
        ['V, Gratuity', 'Every factory, mine, oilfield, plantation, port and railway company; every shop or establishment with **10 or more** employees'],
        ['VI, Maternity', 'Every factory, mine or plantation (including Government ones); every shop or establishment with **10 or more** employees'],
        ['VII, Employee\'s compensation', 'Employers and employees **not covered by Chapter IV (ESI)**, subject to the Second Schedule'],
        ['VIII, BOCW cess', 'Every establishment doing building or other construction work'],
        ['IX, Unorganised, gig and platform', 'Unorganised sector and unorganised, gig and platform workers'],
      ],
    ),
    trap('Two different "factory" definitions', 'In the **Social Security Code**, a factory is **10+** workers with power or **20+** without, the same as the old Factories Act. In the **OSH Code** it is **20 / 40**.'),

    h2('Definitions examiners pick from (Section 2)'),
    table(
      ['Term', 'Clause', 'Meaning'],
      [
        ['Aggregator', '2(2)', 'A **digital intermediary or marketplace** for a buyer or user of a service to connect with the seller or service provider'],
        ['Gig worker', '2(35)', 'A person who performs work and earns from it **outside a traditional employer-employee relationship**'],
        ['Platform work / worker', '2(60), 2(61)', 'Work outside a traditional employer-employee relationship in which organisations or individuals **use an online platform** to access others to solve problems or provide services for payment'],
        ['Unorganised sector', '2(85)', 'Enterprise owned by individuals or self-employed workers, employing **fewer than 10** workers'],
        ['Unorganised worker', '2(86)', 'Home-based, self-employed or wage worker in the unorganised sector, **and** an organised-sector worker not covered by the ID Act or Chapters III–VII'],
        ['Employee', '2(26)', 'Includes those employed **through a contractor**. For EPS, EDLI and ESI, only those within the **wage ceiling**; but all employees count for coverage thresholds'],
        ['Wages', '2(88)', 'Basic + DA + retaining allowance; the **50% rule** applies'],
        ['Wage ceiling', '**2(89)**', 'Amount notified by the Centre for **membership under Chapters III (EPF) and IV (ESI)**. EPF ceiling: **₹25,000 from 17 Sep 2026**'],
        ['Superannuation', '2(82)', 'For Chapter III, age **58**'],
        ['Family', '2(33)', 'Includes dependent parents and, for a **woman employee, parents-in-law**'],
        ['Social security', '2(78)', 'Protection to ensure access to **health care** and **income security**, particularly in old age, unemployment, sickness, invalidity, work injury, maternity or loss of a breadwinner'],
        ['Fixed-term employment', '2(34)', 'Written contract for a fixed period; parity with permanent workers; benefits pro rata'],
        ['Commissioning mother', '2(13)', 'A biological mother who uses her egg to create an embryo implanted in another woman'],
      ],
    ),

    h2('What is new compared with the old laws'),
    table(
      ['Area', 'Change'],
      [
        ['**Gig and platform workers**', 'First statutory recognition. Schemes under s.114; **aggregators contribute 1–2% of annual turnover**, capped at **5%** of what they pay gig and platform workers (nine categories in the **Seventh Schedule**)'],
        ['**ESIC**', 'Applies **pan-India** (no more "notified areas"); voluntary for units under 10; **mandatory even for 1 employee** in notified hazardous work; plantations can opt in'],
        ['**Gratuity**', 'Fixed-term employees get gratuity **pro rata**, without the 5-year rule (in practice after **1 year** of service); working journalists after **3 years**'],
        ['**Employee\'s compensation**', '**Commuting accidents** (home to work and back) deemed to arise out of employment'],
        ['**EPF inquiries**', 'No proceeding after **5 years**; inquiry to finish in **2 years** (+1 year extension); **no suo motu reopening**'],
        ['**EPF appeal deposit**', '**25%** of the assessed amount (earlier up to 75% under s.7-O)'],
        ['**BOCW cess**', '**Self-assessment** by the employer'],
        ['**Aadhaar**', 'Identity through Aadhaar for registration and benefits (s.142)'],
        ['**Family**', 'Includes a woman employee\'s **parents-in-law**; dependants include a **grandparent** where no parent of the employee is alive'],
        ['**Enforcement**', 'Inspector-cum-Facilitator; web-based inspection; **30 days\' notice to comply** before prosecution; compounding at 50% or 75%'],
        ['**Epidemics**', 'Centre may **defer or reduce** PF and ESI contributions for up to **3 months at a time** during a pandemic, endemic or national disaster (s.144)'],
      ],
    ),
    fresh('2026 milestones under this Code', [
      '**8 May 2026**: Social Security (Central) Rules, 2026 notified.',
      '**29 June 2026**: **EPF Scheme 2026, EPS 2026 and EDLI Scheme 2026** notified under Section 15, replacing the 1952, 1971/1995 and 1976 schemes. Section 164(2)(b) had kept the old schemes alive for only **one year** after commencement.',
      '**17 Sep 2026**: EPF wage ceiling **₹25,000** notified under **Section 2(89)** (S.O. 5109(E)).',
    ]),

    h2('The social security organisations (Chapter II)'),
    table(
      ['Body', 'Section', 'Key composition'],
      [
        ['**Central Board of Trustees, EPF (CBT)**', '4', 'Chairperson and Vice-Chairperson (appointed by the Centre); up to **5** Central officials; up to **15** State representatives; **10 employer** and **10 employee** representatives; **CPFC ex officio**. A body corporate'],
        ['**Employees\' State Insurance Corporation**', '5', 'Chairperson, Vice-Chairperson; up to 5 Central officials; one per State; one for UTs; **10 employer**, **10 employee**; **2 medical**; **3 MPs** (2 Lok Sabha, 1 Rajya Sabha); **DG ESIC ex officio**'],
        ['**National Social Security Board** (unorganised workers)', '6(1)', '**Chair: Union Labour Minister**; Vice-Chair: Labour Secretary; **40** nominated members (7 workers, 7 employers, 7 civil society, 3 MPs, 10 Central Ministries, 5 States, 1 UT); **DG Labour Welfare** as Member-Secretary; term **3 years**; meets at least **3 times** a year'],
        ['**NSSB for gig and platform workers**', '114(6)', 'Same Board, reconstituted with **5 aggregator** and **5 gig/platform worker** representatives, **DG ESIC**, **CPFC**, experts, **5 States** by rotation; a Joint Secretary as Member-Secretary'],
        ['**State Unorganised Workers\' Social Security Board**', '6(9)', 'Chair: State Labour Minister; 31 nominated members; meets at least once a quarter; term 3 years'],
        ['**State BOCW Welfare Board**', '7', 'Chair nominated by the State; 1 Central nominee; up to 15 members with **equal** Government, employer and worker representation; **at least one woman**'],
      ],
    ),
    note('Where to go next', 'Each Chapter is covered in depth in **7C (Social Security in India)**: the Code in detail, EPF and the 2026 schemes, ESI, gratuity, maternity, employee\'s compensation, BOCW and gig workers.'),

    h2('Self-test'),
    quiz(
      ['How many laws did the Code on Social Security subsume?', ['7', '9', '13', '4'], 1, 'Nine laws, from the Employees\' Compensation Act 1923 to the Unorganised Workers\' Social Security Act 2008.'],
      ['Under the Social Security Code, the aggregator contribution is:', ['1–2% of turnover, capped at 5% of payouts to gig/platform workers', '2–5% of turnover', '5% of profit', '12% of payouts'], 0, 'Section 114(4).'],
      ['The EPF wage ceiling is notified under which provision?', ['Section 16', 'Section 2(89)', 'Section 125', 'Section 143'], 1, 'Section 2(89) defines "wage ceiling" for membership under Chapters III and IV.'],
      ['Which body is the Board for gig and platform workers under the Code?', ['CBT, EPF', 'ESIC', 'National Social Security Board', 'A separate Gig Workers Board'], 2, 'Section 114(6): the NSSB, with a modified composition.'],
      ['ESI coverage under the Code is mandatory even for one employee when:', ['The unit is in a metro city', 'The establishment does notified hazardous or life-threatening work', 'The employer opts in', 'It is a plantation'], 1, 'First Schedule, Chapter IV proviso.'],
    ),
    cards([
      ['Chapter III', 'Employees\' Provident Fund (ss.14–23)'],
      ['Section 125', 'Assessment of dues (old EPF s.7A)'],
      ['Section 128', 'Damages up to the arrears (old s.14B)'],
      ['Section 143', 'Exemption of establishments (old s.17)'],
      ['Section 141', 'Social Security Fund for unorganised, gig and platform workers'],
      ['Seventh Schedule', 'Nine categories of aggregators (ride sharing, food delivery, logistics, e-market, professional, healthcare, travel, content, other)'],
    ]),
    sources([
      ['Code on Social Security, 2020 (text, Ministry of Labour)', 'https://www.labour.gov.in/static/uploads/2025/07/b0620548445580767b5c0d18c95c26f7.pdf'],
      ['PIB factsheet: Code on Social Security, 2020', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251122702601.pdf'],
      ['PRS: Code on Social Security, 2020', 'https://prsindia.org/billtrack/the-code-on-social-security-2020'],
    ]),
  ],
};
