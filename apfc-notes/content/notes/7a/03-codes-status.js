import { h2, h3, p, ul, li, table, key, trap, fresh, verify, note, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'All four Labour Codes came into force on **21 November 2025**, replacing 29 laws. Central draft rules followed in late December 2025, the **IR Code (Amendment) Act, 2026** fixed a repeal gap, and **final Central Rules under all four Codes were notified on 8–9 May 2026**. States are notifying their own rules in stages, and the Centre expects all States and UTs to finish by **31 Oct 2026**.',
  blocks: [
    h2('Where things stand (September 2026)'),
    facts([
      ['21 Nov 2025', 'all four Codes in force'],
      ['29', 'central laws repealed and subsumed'],
      ['8–9 May 2026', 'final Central Rules under all four Codes'],
      ['31 Oct 2026', 'Centre\'s target for all States and UTs to notify rules'],
    ]),
    fresh('Why this is likely in the exam', 'The 2026 APFC notification replaced "Labour Laws" with "**Labour Codes**" in the syllabus. Expect questions on commencement dates, which laws each Code replaced, and what changed when the Codes came into force.'),

    h2('Timeline of implementation'),
    timeline([
      ['8 Aug 2019', 'Code on Wages, 2019 enacted (assent)'],
      ['28–29 Sep 2020', 'IR Code, Code on Social Security and OSH Code enacted and notified'],
      ['2020–2025', 'Codes on the statute book but not in force; Centre and States pre-publish draft rules in rounds'],
      ['3 May 2021', 'Section 142 of the Social Security Code (establishing identity through **Aadhaar**) brought into force'],
      ['3 May 2023', 'EPF and EPS provisions of the Social Security Code (Sections 15(3), 16(1)(a)–(b), 16(2), parts of 143 and 164) brought into force by S.O. 2060(E), to enable implementation of higher pension'],
      ['21 Nov 2025', '**All four Codes brought into force** (for the Social Security Code, S.O. 5319(E) of 21.11.2025). The 29 old laws stand repealed'],
      ['End-Dec 2025', 'Draft Central Rules under all four Codes pre-published, with **45 days** for objections and suggestions'],
      ['16 Feb 2026', '**Industrial Relations Code (Amendment) Act, 2026** (Act No. 1 of 2026) receives assent; deemed in force from 21 Nov 2025'],
      ['8–9 May 2026', 'Final **Code on Wages (Central) Rules, 2026** (G.S.R. 343(E), 8 May), **Industrial Relations (Central) Rules, 2026**, **Social Security (Central) Rules, 2026** and **OSH (Central) Rules, 2026** notified'],
      ['29 Jun 2026', 'EPF Scheme 2026, EPS 2026 and EDLI Scheme 2026 notified under the Social Security Code'],
      ['25 Aug 2026', 'Bonus eligibility (₹21,000) and calculation (₹7,000 or minimum wage) ceilings notified under Section 26 of the Code on Wages, retrospective from 21 Nov 2025'],
      ['17 Sep 2026', 'EPF wage ceiling raised to **₹25,000** (S.O. 5109(E))'],
    ]),

    h2('What happened on 21 November 2025'),
    ul(
      li('The Government notified the commencement of the **Code on Wages, 2019**, the **Industrial Relations Code, 2020**, the **Code on Social Security, 2020** and the **OSH Code, 2020**, rationalising **29** existing labour laws.'),
      li('The repeal sections of each Code took effect: Section **69** of the Code on Wages, Section **104** of the IR Code, Section **164** of the Social Security Code and Section **143** of the OSH Code.'),
      li('**Savings clauses** kept existing notifications, rules, appointments and wage amounts alive until replaced. For example, Section 69(2) of the Code on Wages deems anything done under the repealed Acts, "including any amount of wages provided" in them, to have been done under the Code. This is why old thresholds such as the ₹21,000 bonus ceiling continued until fresh notifications.'),
      li('The Ministry of Labour said that during the transition, the rules, regulations, notifications and schemes under the old laws would continue to apply to the extent they were consistent with the Codes.'),
    ),

    h2('The IR Code (Amendment) Act, 2026'),
    p(
      'Section 104 of the IR Code repealed the Trade Unions Act 1926, the Industrial Employment (Standing Orders) Act 1946 and the Industrial Disputes Act 1947. When the Code came into force, Industrial Tribunals under the new Code had not yet been set up, which raised doubts about whether pending cases could continue.',
    ),
    table(
      ['Item', 'Detail'],
      [
        ['Act', 'Industrial Relations Code (Amendment) Act, 2026 (**No. 1 of 2026**)'],
        ['Assent', '**16 February 2026**'],
        ['Deemed commencement', '**21 November 2025** (retrospective)'],
        ['What it did', 'Substituted Section 104(1), confirming that the three Acts stand repealed from the date notified under Section 1(3); inserted **Section 104(1A)**: Tribunals and statutory authorities under the repealed Acts **continue to function until** the Tribunals and authorities under the Code become functional'],
      ],
    ),
    trap('Do not confuse', 'The amendment did **not** change any substantive threshold (300 workers, 14-day strike notice and so on). It only secured **continuity of tribunals and authorities** during the transition.'),

    h2('The Central Rules, 2026'),
    p('The Central Rules apply only where the **Central Government is the "appropriate Government"**: central establishments, railways, mines, oilfields, major ports, air transport, telecom, banking and insurance companies, central PSUs and their contractors. Everything else is governed by **State rules**.'),
    table(
      ['Rules', 'Selected provisions'],
      [
        [
          '**Code on Wages (Central) Rules, 2026** (G.S.R. 343(E), 8 May 2026)',
          'Minimum wages fixed on a **daily** basis; hourly rate = daily ÷ **8**, monthly = daily × **26**. Floor wage fixed on minimum living standards (food, clothing, housing and others), revised ordinarily every **5 years**. VDA revised **twice a year** (before 1 April and before 1 October) using CPI-IW. Normal working day **8 hours**; not more than **48 hours** a week; one rest day a week; no more than **10 consecutive days** without a rest day. The draft\'s "3 consumption units / 2,700 calories" norm was **dropped** from the final rules.',
        ],
        [
          '**Industrial Relations (Central) Rules, 2026**',
          'Procedures for works committees, grievance redressal committees, conciliation, strike and lock-out notices, retrenchment, and the Worker Re-skilling Fund (employer\'s 15 days\' wages; credited to the worker within 45 days). **Model standing orders** for manufacturing, mining and services (services allow **work from home** by mutual consent).',
        ],
        [
          '**Social Security (Central) Rules, 2026**',
          'ESIC contribution rates, dependent-parent income limits, crèche allowance (at least **₹500 a month per child** where no crèche is provided), vacancy reporting, and the gig-worker framework: aggregators to register and upload worker details within **45 days**; a gig worker becomes eligible after **90 days** with one aggregator or **120 days** across several in the previous financial year.',
        ],
        [
          '**OSH (Central) Rules, 2026**',
          'Single electronic registration; appointment letter format; working hours and overtime at **twice** the wage rate; **annual health check-up** for workers above **40 years**; conditions for women\'s night work; single all-India licence for contractors.',
        ],
      ],
    ),
    note('Draft to final', 'The final Code on Wages rules dropped the detailed minimum-wage norms that the draft had (a family of **three consumption units**, **2,700 calories** per unit per day and so on). The Central Government will now specify the criteria by general or special order.'),

    h2('Status in the States'),
    p(
      'Because labour is a Concurrent subject and the States are the appropriate Government for most establishments, the Codes work fully only when each State frames its rules. Progress has been uneven:',
    ),
    ul(
      'By **24 September 2026**, the Union Labour Secretary said **ten States** had published final rules under all four Codes, and the rest had published draft rules for consultation.',
      'The Centre expects **all States and UTs to notify their rules by 31 October 2026**.',
      'Several States notified rules under some Codes years earlier (for example, some North-Eastern States in 2021–23); others (including large industrial States) were still at the draft stage in mid-2026.',
      'Where a State has not yet made rules under a Code, rules under the repealed Acts continue to the extent they are consistent with the Code.',
    ),
    verify('Re-check in your final month', 'The number of States with final rules changes every few weeks. Check the Ministry of Labour website or PIB in late November 2026.'),

    h2('The 29 laws and where they went'),
    table(
      ['Code', 'Laws subsumed'],
      [
        ['**Code on Wages, 2019** (4)', 'Payment of Wages Act 1936, Minimum Wages Act 1948, Payment of Bonus Act 1965, Equal Remuneration Act 1976'],
        ['**IR Code, 2020** (3)', 'Trade Unions Act 1926, Industrial Employment (Standing Orders) Act 1946, Industrial Disputes Act 1947'],
        ['**Code on Social Security, 2020** (9)', 'Employees\' Compensation Act 1923, ESI Act 1948, EPF & MP Act 1952, Employment Exchanges (CNV) Act 1959, Maternity Benefit Act 1961, Payment of Gratuity Act 1972, Cine-Workers Welfare Fund Act 1981, BOCW Welfare Cess Act 1996, Unorganised Workers\' Social Security Act 2008'],
        ['**OSH Code, 2020** (13)', 'Factories Act 1948, Plantations Labour Act 1951, Mines Act 1952, Working Journalists and Other Newspaper Employees Act 1955, Working Journalists (Fixation of Rates of Wages) Act 1958, Motor Transport Workers Act 1961, Beedi and Cigar Workers Act 1966, Contract Labour (R&A) Act 1970, Sales Promotion Employees Act 1976, Inter-State Migrant Workmen Act 1979, Cine-Workers and Cinema Theatre Workers Act 1981, Dock Workers (Safety, Health and Welfare) Act 1986, BOCW (RE&CS) Act 1996'],
      ],
    ),
    trap('Laws that were NOT subsumed', [
      'Child and Adolescent Labour (Prohibition and Regulation) Act 1986',
      'Bonded Labour System (Abolition) Act 1976',
      'Sexual Harassment of Women at Workplace Act 2013',
      'Apprentices Act 1961',
      'The beedi and mine workers\' welfare **fund** Acts (Beedi Workers Welfare Fund Act 1976 and the mines labour welfare fund Acts). Their cesses were abolished in 2017 when GST came in; the welfare schemes are now funded from the budget. Only the **Cine-Workers Welfare Fund Act 1981** went into the Social Security Code.',
      'Coal Mines Provident Fund Act 1948, which is expressly saved by Section 66 of the Code on Wages',
    ]),
    key('The BOCW split', 'The **BOCW (Regulation of Employment and Conditions of Service) Act 1996** went into the **OSH Code**, but its twin, the **BOCW Welfare Cess Act 1996**, went into the **Social Security Code**. This is a favourite trick question.'),

    h2('Self-test'),
    quiz(
      ['The four Labour Codes came into force on:', ['1 April 2025', '21 November 2025', '8 May 2026', '1 July 2026'], 1, '21 November 2025. 8 May 2026 is when the final Central Rules were notified.'],
      ['The Industrial Relations Code (Amendment) Act, 2026 mainly:', ['Raised the lay-off threshold to 500', 'Continued existing tribunals until Code tribunals are functional', 'Removed strike notice for public utilities', 'Created Labour Courts'], 1, 'It inserted Section 104(1A) for continuity of tribunals and authorities, deemed from 21 Nov 2025.'],
      ['Under which Code is the BOCW Welfare Cess Act 1996 subsumed?', ['OSH Code', 'Code on Social Security', 'Code on Wages', 'Not subsumed'], 1, 'The Cess Act went into the Social Security Code; the BOCW (RE&CS) Act went into the OSH Code.'],
      ['Which of these is NOT subsumed in any Labour Code?', ['Plantations Labour Act 1951', 'Equal Remuneration Act 1976', 'Bonded Labour System (Abolition) Act 1976', 'Maternity Benefit Act 1961'], 2, 'The Bonded Labour Act remains a separate law.'],
      ['Under the Code on Wages (Central) Rules 2026, the monthly minimum wage equals the daily rate multiplied by:', ['24', '26', '30', '25'], 1, 'Monthly = daily × 26; hourly = daily ÷ 8.'],
    ),
    cards([
      ['S.O. 5319(E), 21.11.2025', 'Commencement of the Code on Social Security'],
      ['G.S.R. 343(E), 8.5.2026', 'Code on Wages (Central) Rules, 2026'],
      ['Act No. 1 of 2026', 'IR Code (Amendment) Act, assent 16 Feb 2026, deemed from 21 Nov 2025'],
      ['S.O. 2060(E), 3.5.2023', 'EPF/EPS provisions of the SS Code in force (higher pension)'],
      ['Section 142, SS Code', 'Aadhaar-based identity, in force 3 May 2021'],
    ]),
    sources([
      ['PIB: Government makes the four Labour Codes effective', 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463'],
      ['Gazette: Industrial Relations Code (Amendment) Act, 2026', 'https://www.labour.gov.in/static/uploads/2026/02/91ef39e2096112f8b798e6c45c732e2f.pdf'],
      ['PRS: Code on Wages (Central) Rules, 2026', 'https://prsindia.org/billtrack/code-on-wages-central-rules-2026'],
      ['SCC Online: SS Code commencement notification and corrigendum', 'https://www.scconline.com/blog/post/2025/12/24/corrigendum-to-code-on-social-security-2020-enforcement-dates/'],
      ['Business Standard: States to notify rules by 31 Oct (24 Sep 2026)', 'https://www.business-standard.com/india-news/all-states-uts-may-notify-labour-code-rules-by-oct-31-labour-secretary-126092401119_1.html'],
    ]),
  ],
};
