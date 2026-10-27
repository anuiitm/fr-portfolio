import { h2, h3, p, ul, li, table, key, trap, note, hook, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Labour law protects the weaker party in the employment bargain. In India it grew in five phases: colonial penal laws (1850s), factory Acts driven by Lancashire pressure (1881–1911), ILO-inspired laws of the inter-war years (1919–1947), the post-Independence welfare state (1947–1990s), and codification into four Labour Codes (in force **21 Nov 2025**).',
  blocks: [
    h2('What labour law is'),
    p(
      '**Labour law** (also called industrial law or employment law) is the body of legal rules that governs the relationship between **employers, workers and their organisations, and the State**. It regulates the terms on which labour is bought and sold, the conditions in which work is done, the way disputes are settled, and the protection given against the risks of working life (injury, sickness, maternity, old age, death and unemployment).',
    ),
    p('It is usually divided into two branches:'),
    ul(
      '**Individual labour law**: the rights of a single worker against an employer. Examples: minimum wages, timely payment of wages, hours of work, leave, gratuity, maternity benefit, compensation for injury.',
      '**Collective labour law**: relations between employers and organised groups of workers. Examples: trade unions, collective bargaining, strikes and lock-outs, standing orders, dispute settlement.',
    ),
    p('By purpose, Indian labour laws are traditionally grouped into five kinds of legislation. This grouping explains why the Second National Commission on Labour recommended functional codes:'),
    table(
      ['Type', 'What it does', 'Examples (pre-Code law → Code)'],
      [
        ['Protective', 'Sets minimum standards for work itself', 'Factories Act 1948, Mines Act 1952 → **OSH Code 2020**'],
        ['Wage legislation', 'Guarantees a wage floor, timely payment, equal pay and bonus', 'Minimum Wages Act 1948, Payment of Wages Act 1936 → **Code on Wages 2019**'],
        ['Regulative (industrial relations)', 'Regulates unions, disputes, strikes, standing orders', 'Industrial Disputes Act 1947, Trade Unions Act 1926 → **IR Code 2020**'],
        ['Social security', 'Protects against contingencies of life and work', 'EPF Act 1952, ESI Act 1948, Gratuity Act 1972 → **Code on Social Security 2020**'],
        ['Welfare', 'Provides amenities and welfare funds', 'Beedi, cine and mine workers\' welfare fund Acts; BOCW Cess Act 1996'],
      ],
      'Five functional categories of labour legislation',
    ),

    h2('Why labour laws are needed'),
    ul(
      li('**Unequal bargaining power.** A single worker, especially in a labour-surplus economy like India, cannot negotiate fair terms with an employer. The law puts a floor under the bargain.'),
      li('**Protection of vulnerable groups.** Children, women, migrant, contract and unorganised workers face exploitation that the market alone does not correct.'),
      li('**Industrial peace.** Strikes and lock-outs cost output and livelihoods. Machinery for bargaining, conciliation and adjudication channels conflict into peaceful settlement.'),
      li('**Social justice as a constitutional goal.** The Preamble promises justice "social, economic and political". The Directive Principles (Articles 38, 39, 41, 42, 43, 43A) direct the State to secure a living wage, humane conditions of work, maternity relief and worker participation in management.'),
      li('**Safety and health.** Industrial processes create hazards (machinery, chemicals, mines, construction) that need statutory standards and inspection.'),
      li('**Economic efficiency.** A secure, healthy and fairly paid workforce is more productive. Predictable rules also help employers plan.'),
      li('**International obligations.** As a founding member of the ILO (1919), India has ratified ILO conventions and is expected to align its law with international labour standards.'),
    ),
    key('Principles behind labour legislation', [
      '**Social justice**: fair sharing of the gains of industry.',
      '**Social equity**: law must change as social and economic conditions change.',
      '**National economy**: labour standards must suit the country\'s stage of development.',
      '**International uniformity**: standards should broadly match ILO norms so that countries do not compete by lowering labour standards.',
    ]),

    h2('Phase 1: colonial penal laws (1850–1880)'),
    p(
      'The earliest "labour" laws protected **employers**, not workers. They were designed to secure a steady supply of labour for plantations, railways and public works, and they made a worker\'s breach of contract a **criminal offence**.',
    ),
    table(
      ['Law', 'Year', 'Significance'],
      [
        ['Apprentices Act', '1850', 'First statute on employment of apprentices (orphans and poor children)'],
        ['Fatal Accidents Act', '1855', 'Compensation to families for death caused by wrongful act; still in force'],
        ["Workmen's Breach of Contract Act", '1859', 'Made breach of contract by a worker who had taken an advance a criminal offence; repealed in 1925'],
        ["Employers' and Workmen's (Disputes) Act", '1860', 'Summary settlement of wage disputes of workers on railways, canals and public works'],
      ],
    ),
    note('Why this matters', 'Examiners like the contrast: early colonial laws were **penal and pro-employer**; protective legislation began only in **1881**.'),

    h2('Phase 2: the Factory Acts (1881–1918)'),
    p(
      'Protective legislation began with factory laws. The immediate push came from **Lancashire textile manufacturers** in Britain, who complained that long hours and child labour in Bombay mills gave Indian cloth an unfair cost advantage. Reformers in India (notably **Sorabji Shapurji Bengalee**, who campaigned from 1875) also pressed for protection.',
    ),
    table(
      ['Act', 'Viceroy', 'Key provisions'],
      [
        ['**Indian Factories Act, 1881** (first)', 'Lord Ripon', 'Applied to factories using mechanical power and employing **100 or more** workers. Children **7–12 years**: maximum **9 hours** a day, 4 holidays a month. Dangerous machinery to be fenced.'],
        ['Indian Factories Act, 1891', 'Lord Lansdowne', 'Minimum age raised to **9**; children 9–14 limited to **7 hours**. Women limited to **11 hours** with a 1½-hour interval. Weekly holiday. Applied to factories with **50** or more workers.'],
        ['Indian Mines Act, 1901', 'Lord Curzon', 'First mines law; inspection of mines'],
        ['Indian Factories Act, 1911', 'Lord Hardinge II', 'First limit on **adult men**: **12 hours** a day in textile factories'],
      ],
    ),

    h2('Phase 3: ILO influence and inter-war laws (1919–1947)'),
    p(
      'The creation of the **International Labour Organisation in 1919** (India a founding member even before Independence), the growth of trade unions (the **AITUC** was founded on 31 October 1920) and the Montagu–Chelmsford reforms transformed labour law. Legislation now began to protect workers\' **collective** rights and to create **social security**.',
    ),
    table(
      ['Year', 'Law or event', 'What changed'],
      [
        ['1922', 'Factories (Amendment) Act', '**60 hours a week, 11 hours a day** for adults; minimum age 12 (after the ILO Hours of Work Convention 1919)'],
        ['1923', "**Workmen's Compensation Act**", 'First social security law: compensation for employment injury. Renamed **Employees\' Compensation Act** by the Workmen\'s Compensation (Amendment) Act 2009, in force **18 Jan 2010**'],
        ['1923', 'Indian Mines Act', 'Comprehensive mines law replacing the 1901 Act'],
        ['1926', '**Trade Unions Act**', 'Registration of unions; immunity from civil and criminal liability for bona fide union activity. Came into force 1 June 1927'],
        ['1929', 'Trade Disputes Act', 'Courts of Inquiry and Boards of Conciliation; notice required before strikes in public utility services'],
        ['1929', 'Bombay Maternity Benefit Act', 'First maternity law in India (a provincial Act)'],
        ['1929–31', '**Royal Commission on Labour** (Whitley Commission)', 'Chaired by **John Henry Whitley**; appointed 1929, reported **1931**. Its recommendations shaped the laws of the 1930s'],
        ['1934', 'Factories Act', 'Consolidated law after Whitley: **54 hours a week** (perennial factories), **10 hours a day**'],
        ['1936', '**Payment of Wages Act**', 'Timely payment and authorised deductions only (a Whitley recommendation)'],
        ['1938', 'Bombay Industrial Disputes Act', 'First provincial law providing compulsory recognition of unions and industrial courts'],
        ['1942', 'Rule 81A, Defence of India Rules', 'Wartime **compulsory adjudication** and ban on strikes; the model for the ID Act'],
        ['1944', 'Labour Investigation Committee (**Rege Committee**)', 'Chaired by D.V. Rege; surveyed working conditions across industries'],
        ['1946', '**Industrial Employment (Standing Orders) Act**', 'Written, certified service conditions in industrial establishments'],
        ['1947', '**Industrial Disputes Act**', 'Conciliation, arbitration and adjudication machinery; lay-off, retrenchment and closure (in force **1 April 1947**)'],
      ],
    ),
    key(
      'Dr B.R. Ambedkar as Labour Member (1942–46)',
      'As Labour Member of the Viceroy\'s Executive Council, Ambedkar brought the **8-hour working day** (from 12 hours) at the **7th session of the Indian Labour Conference, New Delhi, November 1942**. His Labour Department also commissioned the **Adarkar report on health insurance (1944)**, the basis of the ESI Act 1948, and built up the tripartite Indian Labour Conference and employment exchanges.',
    ),

    h2('Phase 4: the welfare state (1947–1990s)'),
    p(
      'After Independence, labour was placed in the **Concurrent List** (entries 22, 23, 24) and the Directive Principles gave labour legislation a constitutional mandate. Parliament enacted the laws that governed Indian workplaces for the next seventy years.',
    ),
    table(
      ['Decade', 'Major central laws'],
      [
        ['1940s', 'Factories Act **1948**; Minimum Wages Act **1948**; Employees\' State Insurance Act **1948**; Dock Workers (Regulation of Employment) Act 1948'],
        ['1950s', 'Plantations Labour Act 1951; **EPF & MP Act 1952**; Mines Act 1952; Working Journalists Act 1955; Working Journalists (Fixation of Rates of Wages) Act 1958; Employment Exchanges (CNV) Act 1959'],
        ['1960s', '**Maternity Benefit Act 1961**; Motor Transport Workers Act 1961; Apprentices Act 1961; **Payment of Bonus Act 1965**; Beedi and Cigar Workers Act 1966'],
        ['1970s', '**Contract Labour (R&A) Act 1970**; **Payment of Gratuity Act 1972**; **Bonded Labour System (Abolition) Act 1976**; **Equal Remuneration Act 1976**; Sales Promotion Employees Act 1976; Inter-State Migrant Workmen Act 1979'],
        ['1980s', 'Cine-Workers Welfare Fund Act 1981; Cine-Workers and Cinema Theatre Workers Act 1981; **Child Labour (P&R) Act 1986**; Dock Workers (Safety, Health and Welfare) Act 1986'],
        ['1990s–2010s', '**BOCW Act and BOCW Cess Act 1996**; Unorganised Workers\' Social Security Act 2008; Sexual Harassment of Women at Workplace Act 2013; Maternity Benefit (Amendment) 2017; Child Labour (Amendment) 2016'],
      ],
    ),
    p(
      'Two National Commissions on Labour reviewed this framework. The **First NCL** (constituted 24 December 1966, chaired by Justice **P.B. Gajendragadkar**, report **August 1969**) consolidated the post-Independence approach. The **Second NCL** (constituted **15 October 1999**, chaired by **Ravindra Varma**, report **29 June 2002**) recommended grouping the laws into **four or five codes** on a functional basis.',
    ),

    h2('Phase 5: codification into four Labour Codes'),
    timeline([
      ['29 Jun 2002', 'Second NCL report recommends grouping about 44 central labour laws into 4–5 functional codes'],
      ['2015–2019', 'Tripartite consultations on draft codes with employers, industry and trade unions'],
      ['8 Aug 2019', '**Code on Wages, 2019** receives Presidential assent (Act 29 of 2019)'],
      ['28–29 Sep 2020', '**IR Code, OSH Code and Code on Social Security, 2020** receive assent (28 Sep) and are notified (29 Sep)'],
      ['3 May 2021', 'Section 142 of the Code on Social Security (Aadhaar-based identity) brought into force'],
      ['3 May 2023', 'Certain EPF/EPS provisions of the Social Security Code brought into force (to implement higher pension)'],
      ['21 Nov 2025', '**All four Codes brought into force**, replacing **29 central laws**'],
      ['16 Feb 2026', 'Industrial Relations Code (Amendment) Act, 2026 (deemed in force from 21 Nov 2025)'],
      ['8 May 2026', 'Central Rules notified under all four Codes'],
    ]),
    facts([
      ['29', 'central labour laws subsumed'],
      ['4', 'Labour Codes'],
      ['21 Nov 2025', 'date all four Codes came into force'],
      ['44', 'central laws the Second NCL said should be rationalised'],
    ]),
    trap('Common confusion', [
      'The Codes replaced **29** laws, not 44. The Second NCL spoke of rationalising about **44** central laws; several (for example the Apprentices Act and the Child Labour Act) remain outside the Codes.',
      'The **Code on Wages is from 2019**; the other three Codes are from **2020**. None of them came into force until **21 November 2025**.',
      'The first Factories Act was passed under **Lord Ripon (1881)**, not Lord Curzon.',
    ]),
    hook('Remember the numbers 4 + 3 + 13 + 9 = 29', 'Code on Wages replaced **4** laws, IR Code **3**, OSH Code **13**, Social Security Code **9**. Total **29**.'),

    h2('Self-test'),
    quiz(
      ['The first Factories Act in India (1881) was passed during the viceroyalty of:', ['Lord Lytton', 'Lord Ripon', 'Lord Lansdowne', 'Lord Curzon'], 1, 'The Indian Factories Act 1881 came under Lord Ripon. The 1891 Act came under Lord Lansdowne.'],
      ['Which was the first social security law in India?', ['Payment of Wages Act 1936', "Workmen's Compensation Act 1923", 'ESI Act 1948', 'Trade Unions Act 1926'], 1, 'The Workmen\'s Compensation Act 1923, now the Employees\' Compensation Act, was the first law to pay benefits for a contingency (employment injury).'],
      ['The Royal Commission on Labour (1929–31) was chaired by:', ['J.H. Whitley', 'D.V. Rege', 'B.P. Wadia', 'Lord Linlithgow'], 0, 'John Henry Whitley chaired it. D.V. Rege chaired the 1944 Labour Investigation Committee.'],
      ['How many central labour laws were subsumed into the four Labour Codes?', ['44', '29', '27', '38'], 1, '4 + 3 + 13 + 9 = 29.'],
      ['The 8-hour working day was adopted in India in 1942 at the initiative of:', ['N.M. Joshi', 'V.V. Giri', 'B.R. Ambedkar', 'Jagjivan Ram'], 2, 'As Labour Member, Ambedkar brought it at the 7th Indian Labour Conference in November 1942.'],
    ),
    cards([
      ['Workmen\'s Breach of Contract Act', '1859, made a worker\'s breach of contract a crime, repealed 1925'],
      ['Factories Act 1891', 'Lansdowne, children 9–14 max 7 hrs, women 11 hrs, weekly holiday'],
      ['Trade Unions Act', '1926, in force 1 June 1927, registration and immunities'],
      ['Industrial Disputes Act', '1947, in force 1 April 1947, replaced by IR Code 2020'],
      ['Rege Committee', 'Labour Investigation Committee, 1944, D.V. Rege'],
      ['Employees\' Compensation Act', 'Renamed from Workmen\'s Compensation Act by the 2009 Amendment Act, in force 18 Jan 2010'],
    ]),
    sources([
      ['PIB: India\'s Labour Reforms factsheet (21 Nov 2025)', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251121701501.pdf'],
      ['PIB: Four Labour Codes made effective (21 Nov 2025)', 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463'],
      ['Second National Commission on Labour (overview)', 'https://en.wikipedia.org/wiki/National_Commission_on_Labour'],
    ]),
  ],
};
