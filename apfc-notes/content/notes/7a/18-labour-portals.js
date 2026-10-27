import { h2, h3, p, ul, li, table, key, trap, fresh, verify, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Four portals run the Labour Ministry\'s digital system. **Shram Suvidha** (16 Oct 2014): a unified employer portal with a **Labour Identification Number (LIN)**, now the single registration window under the Codes. **SAMADHAN**: online filing of industrial disputes (pilot 2019, national 2020). **e-Shram** (26 Aug 2021): the national database of unorganised workers, with **31.89 crore** registrations by Aug 2026. **National Career Service** (20 Jul 2015): jobs portal with **6.64 crore** job-seekers.',
  blocks: [
    facts([
      ['16 Oct 2014', 'Shram Suvidha launched'],
      ['20 Jul 2015', 'NCS portal launched'],
      ['26 Aug 2021', 'e-Shram launched'],
      ['31.89 crore', 'e-Shram registrations (18 Aug 2026)'],
    ]),

    h2('Shram Suvidha'),
    ul(
      li('Launched by the **Prime Minister** on **16 October 2014** with the **Pandit Deendayal Upadhyay Shramev Jayate Karyakram**.'),
      li('Gives every inspectable unit a single **Labour Identification Number (LIN)** used by the CLC(C), DGMS, EPFO and ESIC.'),
      li('Features: online registration; **single harmonised return** instead of many; a **transparent, risk-based computerised inspection scheme** with inspection reports uploaded within **72 hours**; common ECR for EPFO and ESIC.'),
      li('Under the Codes, the upgraded portal (often called **Shram Suvidha 2.0**) provides **one central registration** at registration.shramsuvidha.gov.in, licences and returns; **aggregators** also register here and upload gig-worker details.'),
    ),
    p('The **Shramev Jayate** package (Oct 2014) also launched the **Universal Account Number (UAN)** for EPF and the **Apprentice Protsahan Yojana**.'),

    h2('SAMADHAN'),
    ul(
      li('**S**oftware **A**pplication for **M**onitoring **A**nd **D**isposal, **H**andling of **A**pprehended/Existing Industrial Dispute**s** (**N**): an online system for filing and tracking industrial disputes.'),
      li('Launched as a **pilot on 15 Feb 2019** and extended **nationwide on 17 Sep 2020**.'),
      li('Workers, employers and trade unions file disputes online; conciliation officers are assigned; proceedings and settlements are tracked. It now supports dispute filing under the **IR Code**.'),
    ),

    h2('e-Shram'),
    table(
      ['Item', 'Detail'],
      [
        ['Launched', '**26 August 2021** (eshram.gov.in)'],
        ['Purpose', '**National Database of Unorganised Workers (NDUW)**: construction, migrant, gig and platform, street vendors, domestic, agricultural and other workers'],
        ['Who can register', 'Unorganised workers aged **16–59**, not members of EPFO or ESIC and **not income-tax payers**, on **self-declaration** with **Aadhaar**'],
        ['What they get', 'A **Universal Account Number (e-Shram UAN)** and an **e-Shram card**; earlier, accidental insurance cover of **₹2 lakh** (death or permanent disability) and **₹1 lakh** (partial disability) through **PMSBY** for the first year'],
        ['Registrations', '**31.89 crore** by **18 Aug 2026** (e-Shram completed 5 years); women are more than half of registrants'],
        ['One-Stop Solution', 'Launched **21 Oct 2024**: **12 schemes** of Central Ministries mapped on e-Shram, including **ONORC**, **MGNREGA**, **NSAP**, **NCS** and **PM-SYM**'],
        ['Aggregator module', 'Launched **12 Dec 2024** for aggregators and platform workers; under the SS Central Rules 2026, aggregators had to onboard and integrate by **21 June 2026**'],
        ['Gig workers', 'About **12 lakh** gig and platform workers and **20 aggregators** registered by late June 2026'],
      ],
    ),
    fresh('Budget 2025-26 and gig workers', 'Budget 2025-26 announced **ID cards**, **e-Shram registration** and **PM-JAY health cover** for about **1 crore** gig and platform workers. Registration on e-Shram is the gateway to these benefits.'),

    h2('National Career Service (NCS)'),
    ul(
      li('Launched on **20 July 2015**; run by the **Directorate General of Employment**.'),
      li('A **digital public infrastructure for employment**: job matching, career counselling, job fairs, skill courses, and links to **Model Career Centres**.'),
      li('By August 2026: over **6.64 crore** job-seekers registered and over **10.05 crore** vacancies mobilised since launch.'),
      li('The draft **Shram Shakti Niti 2025** proposes developing NCS into India\'s **Employment DPI** with AI-based job matching.'),
      li('Under the Code on Social Security (Chapter XIII), employers may be required to report vacancies to **career centres**, which include NCS.'),
    ),

    h2('Other portals and tools'),
    table(
      ['Portal', 'Purpose'],
      [
        ['**PENCIL**', 'Enforcement of the Child Labour Act (2017)'],
        ['**SHe-Box**', 'Complaints under the POSH Act (WCD Ministry; relaunched 29 Aug 2024)'],
        ['**EPFO Unified Portal / UMANG**', 'UAN services, e-nomination, claims'],
        ['**ESIC portal**', 'Registration, contributions, benefits'],
        ['**Unified portal for BOCW**', 'Registration of building workers and cess (States)'],
      ],
    ),
    trap('Dates people confuse', [
      'Shram Suvidha: **2014**. NCS: **2015**. SAMADHAN: **2019 pilot / 2020 national**. e-Shram: **2021**. e-Shram One-Stop Solution: **2024**.',
      'e-Shram excludes **EPFO/ESIC members** and **income-tax payers**.',
    ]),
    verify('Re-check the counts', 'e-Shram and NCS registration counts change monthly. Use the latest PIB figure in the final month.'),

    h2('Self-test'),
    quiz(
      ['The Labour Identification Number (LIN) is issued through:', ['e-Shram', 'Shram Suvidha', 'NCS', 'SAMADHAN'], 1, 'Shram Suvidha, launched 16 Oct 2014.'],
      ['SAMADHAN is used for:', ['Unorganised worker registration', 'Filing industrial disputes', 'Child labour complaints', 'PF claims'], 1, 'Software Application for Monitoring And Disposal, Handling of Industrial Disputes.'],
      ['e-Shram was launched on:', ['20 Jul 2015', '26 Aug 2021', '21 Oct 2024', '16 Oct 2014'], 1, '26 August 2021.'],
      ['Which of these can register on e-Shram?', ['An EPFO member', 'An income-tax payer', 'A 25-year-old street vendor with Aadhaar', 'A 70-year-old retired worker'], 2, 'Unorganised workers aged 16–59, not EPFO/ESIC members, not income-tax payers.'],
    ),
    cards([
      ['Shramev Jayate', 'Launched 16 Oct 2014 with Shram Suvidha and UAN'],
      ['e-Shram One-Stop Solution', '21 Oct 2024; 12 schemes mapped'],
      ['NCS milestones (Aug 2026)', '6.64 crore job-seekers; 10.05 crore vacancies'],
      ['SAMADHAN', 'Pilot 15 Feb 2019; national 17 Sep 2020'],
    ]),
    sources([
      ['PIB: eShram One Stop Solution launched (21 Oct 2024)', 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2066707'],
      ['e-Shram at five: 31.89 crore registrations', 'https://organiser.org/2026/08/29/377578/bharat/five-years-of-e-shram-31-89-crore-unorganised-workers-join-indias-digital-social-security-net/'],
      ['PIB: SAMADHAN portal', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2038690'],
      ['ANI: NCS mobilises over 10.05 crore vacancies (Aug 2026)', 'https://aninews.in/news/national/general-news/national-career-service-portal-mobilises-over-1005-crore-vacancies-since-inception-mansukh-mandaviya20260805181531/'],
    ]),
  ],
};
