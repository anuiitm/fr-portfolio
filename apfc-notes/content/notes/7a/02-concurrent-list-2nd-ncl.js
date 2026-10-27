import { h2, h3, p, ul, li, table, key, trap, note, hook, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Labour is mainly a **Concurrent List** subject (entries **22, 23, 24**), so both Parliament and the States legislate on it. By 2002 this had produced about 44 central and over 100 State laws with clashing definitions. The **Second National Commission on Labour** (Ravindra Varma, report **29 June 2002**) recommended grouping them into 4–5 functional codes, which became the four Labour Codes.',
  blocks: [
    h2('Labour in the Seventh Schedule'),
    p(
      'Article **246** divides legislative power between the Union and the States through the three lists of the **Seventh Schedule**. Labour is spread across all three lists, but the core subjects are in the **Concurrent List (List III)**.',
    ),
    table(
      ['List', 'Entry', 'Exact subject'],
      [
        ['**Concurrent (III)**', '**22**', 'Trade unions; industrial and labour disputes'],
        ['**Concurrent (III)**', '**23**', 'Social security and social insurance; employment and unemployment'],
        ['**Concurrent (III)**', '**24**', 'Welfare of labour including conditions of work, provident funds, employers\' liability, workmen\'s compensation, invalidity and old age pensions and maternity benefits'],
        ['Concurrent (III)', '25', 'Education … vocational and technical training of labour'],
        ['Concurrent (III)', '36, 37', 'Factories; Boilers'],
        ['Concurrent (III)', '20', 'Economic and social planning'],
        ['Union (I)', '**55**', 'Regulation of labour and safety in mines and oilfields'],
        ['Union (I)', '**61**', 'Industrial disputes concerning Union employees'],
        ['Union (I)', '65', 'Union agencies and institutions for professional, vocational or technical training'],
        ['Union (I)', '13', 'Participation in international conferences and bodies (the basis for ILO work) and implementing their decisions'],
        ['State (II)', '9', 'Relief of the disabled and unemployable'],
      ],
      'Where labour sits in the Seventh Schedule',
    ),
    hook('22, 23, 24', '**22** = Unions and disputes (collective). **23** = Social security and jobs. **24** = Welfare, conditions of work, PF, compensation, pensions and maternity. The three together are the whole of the four Codes.'),

    h3('What "concurrent" means in practice'),
    ul(
      li('**Both** Parliament and State legislatures can make laws. Most major labour Acts, and all four Codes, are **central** laws.'),
      li('**Article 254(1)**: if a State law conflicts with a central law on a Concurrent subject, the **central law prevails** and the State law is void to the extent of repugnancy.'),
      li('**Article 254(2)**: a State law that conflicts with a central law **prevails in that State** if it was reserved for, and received, the **President\'s assent**. This is how States amended central labour Acts before the Codes. Example: **Rajasthan (2014)** raised the threshold for prior permission for lay-off, retrenchment and closure under the Industrial Disputes Act from **100 to 300**, and the Contract Labour Act threshold from **20 to 50**. The Codes later adopted the same numbers nationally.'),
      li('Administration is shared. The Centre is the "appropriate Government" for its own establishments, railways, mines, oilfields, major ports, air transport, telecom, banking, insurance and central PSUs. The **States** are the appropriate Government for everything else, which is most establishments.'),
      li('Both levels must frame **rules** under each Code. This is why the Codes came into force nationally on **21 Nov 2025** while State rules are still being notified in stages.'),
    ),
    trap('Entry numbers are a favourite', [
      '"Trade unions; industrial and labour disputes" is **Concurrent 22**, not Union List.',
      '"Industrial disputes concerning **Union employees**" is **Union List 61**.',
      '"Regulation of labour and safety in **mines and oilfields**" is **Union List 55**. Factories are **Concurrent 36**.',
      'Provident funds, maternity benefits and workmen\'s compensation are all in **Concurrent 24**, not 23.',
    ]),

    h2('The problem codification was meant to solve'),
    p('By the 2010s India had a dense and inconsistent body of labour law:'),
    ul(
      li('**Multiplicity**: about **40+ central laws** and more than **100 State laws**, each with its own definitions, registers, returns, inspectors and authorities.'),
      li('**Inconsistent definitions**: "wages", "worker", "employee" and "establishment" meant different things in different Acts. The same payment could count as wages for PF but not for gratuity or bonus.'),
      li('**Narrow coverage**: the Minimum Wages Act applied only to **scheduled employments**, covering about **30%** of workers. Payment of Wages protections applied only to employees earning up to **₹24,000** a month.'),
      li('**Outdated laws**: many dated from the colonial era (Trade Unions Act 1926, Payment of Wages Act 1936) and did not reflect services, the platform economy, digital records or women\'s night work.'),
      li('**Compliance burden and "inspector raj"**: many registrations, licences and returns; discretionary inspections; criminal penalties for minor lapses.'),
      li('**Informal workforce**: over 90% of workers were outside the reach of most protective laws.'),
    ),
    facts([
      ['163 → 58', 'rules under the Code on Wages (forms 20 → 6, registers 24 → 2)'],
      ['105 → 51', 'rules under the IR Code (forms 37 → 18, registers 3 → 0)'],
      ['620 → 143', 'sections replaced by the OSH Code (rules 868 → 175)'],
      ['6 → 1', 'registrations needed under the OSH Code (licences 4 → 1, returns 21 → 1)'],
    ]),

    h2('The Second National Commission on Labour'),
    table(
      ['Item', 'Detail'],
      [
        ['Constituted', '**15 October 1999**'],
        ['Chairperson', '**Ravindra Varma** (former Union Labour Minister)'],
        ['Report submitted', '**29 June 2002**, to Prime Minister Atal Bihari Vajpayee'],
        ['Terms of reference', '(1) suggest **rationalisation of existing laws** relating to labour in the **organised sector**; (2) suggest **"umbrella" legislation** to ensure a minimum level of protection for workers in the **unorganised sector**'],
        ['Predecessor', 'First NCL: constituted **24 Dec 1966**, chaired by **Justice P.B. Gajendragadkar**, report **August 1969**'],
      ],
    ),
    h3('Key recommendations'),
    ul(
      li('**Group the existing central labour laws into four or five codes on a functional basis**, by simplifying, amalgamating and rationalising them. The functional groups it identified were industrial relations, wages, social security, safety and working conditions, and welfare.'),
      li('**Uniform definitions** of core terms such as "worker", "wages" and "establishment" across all laws.'),
      li('**Umbrella legislation for the unorganised sector** giving a minimum floor of protection and social security. This led to the Unorganised Workers\' Social Security Act 2008 and, later, the unorganised-worker chapters of the Social Security Code.'),
      li('**Prior permission for lay-off, retrenchment and closure** to be required only for larger establishments (it suggested **300 or more workers**).'),
      li('**Recognition of a negotiating agent** through a check-off system. A union with **66%** support would be the single negotiating agent; otherwise unions with over **25%** would get proportional representation in a negotiating college. The IR Code adopted a simpler **51% / 20%** rule.'),
      li('**Labour Relations Commissions** at national and state level, and a three-tier dispute system of **Lok Adalats, Labour Courts and Labour Relations Commissions**.'),
      li('Permit **contract labour for non-core activities**, with protection of wages and welfare.'),
      li('**Wage boards** for fixing wages in any industry, and a national minimum wage floor.'),
    ),
    note('How far the Codes followed the Commission', 'The Codes follow the Commission on the **functional grouping, uniform definitions, the 300-worker threshold, recognition of a negotiating union and core/non-core contract labour**. They do not create Labour Relations Commissions; instead they give **two-member Industrial Tribunals** and a **National Industrial Tribunal**, and they abolish separate Labour Courts.'),

    h2('From recommendation to four Codes'),
    timeline([
      ['2002', 'Second NCL recommends 4–5 functional codes'],
      ['2015–2019', 'Ministry of Labour drafts the codes; tripartite consultations with employers, industry and central trade unions'],
      ['10 Aug 2017', 'Code on Wages Bill 2017 introduced in Lok Sabha; referred to the Standing Committee; lapsed with the 16th Lok Sabha'],
      ['23 Jul 2019', 'Code on Wages Bill 2019 introduced; passed by Lok Sabha (30 Jul) and Rajya Sabha (2 Aug)'],
      ['8 Aug 2019', 'Code on Wages, 2019 receives assent (Act No. 29 of 2019)'],
      ['19–23 Sep 2020', 'IR, OSH and Social Security Code Bills 2020 introduced (19 Sep) and passed by Lok Sabha (22 Sep) and Rajya Sabha (23 Sep)'],
      ['28 Sep 2020', 'Assent to the IR Code (Act 35), Social Security Code (Act 36) and OSH Code (Act 37); notified 29 Sep 2020'],
      ['21 Nov 2025', 'All four Codes brought into force'],
    ]),
    table(
      ['Code', 'Act No.', 'Assent', 'Laws subsumed', 'Sections'],
      [
        ['Code on Wages, 2019', '29 of 2019', '8 Aug 2019', '**4**', '69'],
        ['Industrial Relations Code, 2020', '35 of 2020', '28 Sep 2020', '**3**', '104'],
        ['Code on Social Security, 2020', '36 of 2020', '28 Sep 2020', '**9**', '164'],
        ['OSH Code, 2020', '37 of 2020', '28 Sep 2020', '**13**', '143'],
      ],
      'The four Codes at a glance',
    ),

    h2('Objectives the Government gives for the Codes'),
    ul(
      '**Simplify compliance**: single registration, single licence and single return; electronic registers and filings.',
      '**Streamline enforcement**: one set of authorities per Code; the **Inspector-cum-Facilitator** replaces the inspector, with **web-based randomised inspection**.',
      '**Universalise protection**: minimum wages and timely payment for **all** employees; social security for **gig, platform and unorganised** workers; ESIC coverage **pan-India**.',
      '**Modernise**: fixed-term employment, women\'s night work with consent and safety, work from home in services, digital records.',
      '**Decriminalise**: fines instead of imprisonment for many first offences; **compounding** of offences; mandatory notice to comply before prosecution.',
    ),
    h3('Criticism you should be able to state'),
    ul(
      'Central trade unions (other than BMS) argued that higher thresholds (300 for standing orders and retrenchment permission, 50 for contract labour) remove protection from most workers, and that the notice requirement for strikes in **all** establishments restricts the right to strike. Ten central trade unions held a nationwide general strike against the Codes on **9 July 2025**.',
      'Fixed-term employment with no cap on tenure or renewals may replace permanent jobs.',
      'Social security for gig and unorganised workers depends on schemes the Government may frame, rather than on enforceable entitlements.',
      'Important details were left to rules, which delayed implementation by five years after enactment.',
    ),

    h2('Self-test'),
    quiz(
      ['"Trade unions; industrial and labour disputes" falls under:', ['Union List entry 55', 'Concurrent List entry 22', 'Concurrent List entry 24', 'State List entry 9'], 1, 'Concurrent List entry 22. Union List 55 is labour and safety in mines and oilfields.'],
      ['"Welfare of labour including provident funds and maternity benefits" is in:', ['Concurrent List 23', 'Concurrent List 24', 'Union List 61', 'Concurrent List 36'], 1, 'Entry 24. Entry 23 is social security, social insurance, employment and unemployment.'],
      ['The Second National Commission on Labour was chaired by:', ['P.B. Gajendragadkar', 'Ravindra Varma', 'Arjun Sengupta', 'S.R. Vasavada'], 1, 'Ravindra Varma chaired the Second NCL (1999–2002). Gajendragadkar chaired the First NCL; Arjun Sengupta chaired NCEUS.'],
      ['Under Article 254(2), a State labour law repugnant to a central law prevails in that State if:', ['It is passed by a two-thirds majority', 'It receives the President\'s assent', 'The Governor certifies it', 'The Inter-State Council approves it'], 1, 'Reservation for, and receipt of, Presidential assent saves the State law within that State.'],
      ['Which Code subsumed the largest number of laws?', ['Code on Wages', 'IR Code', 'Code on Social Security', 'OSH Code'], 3, 'The OSH Code subsumed 13 Acts; Social Security 9; Wages 4; IR 3.'],
    ),
    cards([
      ['Concurrent List entry 23', 'Social security and social insurance; employment and unemployment'],
      ['Union List entry 61', 'Industrial disputes concerning Union employees'],
      ['Second NCL dates', 'Constituted 15 Oct 1999, report 29 June 2002, Ravindra Varma'],
      ['First NCL', 'Constituted 24 Dec 1966, Justice P.B. Gajendragadkar, report Aug 1969'],
      ['Act numbers of the Codes', 'Wages 29/2019, IR 35/2020, SS 36/2020, OSH 37/2020'],
    ]),
    sources([
      ['Constitution of India: Seventh Schedule, List I', 'https://courtbook.in/constitution/schedule/seventh-schedule-list-i-union-list'],
      ['PIB factsheet: India\'s Labour Reforms (rationale and numbers)', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251121701501.pdf'],
      ['PRS: Code on Social Security 2020 (bill history)', 'https://prsindia.org/billtrack/the-code-on-social-security-2020'],
    ]),
  ],
};
