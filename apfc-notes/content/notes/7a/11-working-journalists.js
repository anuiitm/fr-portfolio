import { h2, h3, p, ul, li, table, key, trap, note, caselaw, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Working journalists were protected by two special laws: the **Working Journalists Act, 1955** (service conditions, gratuity after 3 years, statutory **Wage Boards**) and the **Working Journalists (Fixation of Rates of Wages) Act, 1958**. Six Wage Boards were set up, from **Divatia (1956)** to **Majithia (2007; notified 2011; upheld by the Supreme Court in 2014)**. Both Acts are now subsumed in the **OSH Code 2020**, which widens "working journalist" to **electronic and digital media** but has **no provision for Wage Boards**.',
  blocks: [
    h2('The two special laws'),
    table(
      ['Law', 'Key features'],
      [
        [
          '**Working Journalists and Other Newspaper Employees (Conditions of Service) and Miscellaneous Provisions Act, 1955**',
          'Applied the ID Act, EPF and other laws to newspaper employees; **gratuity** for journalists after **3 years** (instead of 5); special **notice periods** on retrenchment (6 months for editors, 3 months for other journalists); limits on hours; leave; and **Wage Boards** for working journalists (s.9) and, from 1974, for **non-journalist newspaper employees** (s.13C). Wage Board recommendations notified by the Centre are **binding** on newspaper establishments (s.12, s.13)',
        ],
        [
          '**Working Journalists (Fixation of Rates of Wages) Act, 1958**',
          'Passed after the Supreme Court struck down the first Wage Board\'s decision in **Express Newspapers v. Union of India (1958)**. It fixed rates of wages directly by law, validating the wage structure',
        ],
      ],
    ),
    p('A **working journalist** is a person whose **principal avocation is journalism** and who is employed in or in relation to a newspaper establishment: editors, leader-writers, news editors, sub-editors, feature writers, copy-testers, reporters, correspondents, cartoonists, news photographers and proof-readers. It **excludes** persons employed mainly in a **managerial or administrative** capacity, or supervisors drawing wages above the prescribed limit.'),

    h2('Wage Boards for journalists'),
    p('Wage Boards were the only **statutory** wage boards in India. All other industry wage boards (textiles, cement, sugar, jute, tea, coffee, iron and steel and others, from 1957 onward) were **non-statutory tripartite** bodies whose recommendations were implemented voluntarily.'),
    table(
      ['#', 'Wage Board', 'Constituted', 'Notes'],
      [
        ['1', '**Divatia**', 'May 1956', 'Recommendations accepted May 1957; quashed in *Express Newspapers* (1958), which led to the 1958 Act'],
        ['2', '**Shinde**', 'Nov 1963', 'Recommendations accepted Oct 1967'],
        ['3', '**Palekar**', '1975', 'Later converted into a one-man tribunal; award Aug 1980'],
        ['4', '**Bachawat**', 'Jul 1985', 'Recommendations May 1989'],
        ['5', '**Manisana** (Justice Raj Kumar Manisana Singh, retired Chief Justice of the Gauhati High Court)', '2 Sep 1994', 'Recommendations accepted **25 Jul 2000**'],
        ['6', '**Majithia** (Justice G.R. Majithia)', '**2007** (two boards: journalists and non-journalists)', 'Report 2010; notified **11 Nov 2011**; upheld **7 Feb 2014**'],
      ],
      'The six Wage Boards for working journalists and newspaper employees',
    ),
    caselaw('Supreme Court on Wage Boards', [
      '**Express Newspapers (P) Ltd v. Union of India (1958)**: upheld the 1955 Act but quashed the Divatia Board\'s decision because it had not considered the **capacity of the industry to pay**. It also discussed the concepts of **minimum, fair and living wage** drawn from the Fair Wages Committee (1948).',
      '**ABP Pvt Ltd v. Union of India (7 Feb 2014)**: a bench led by **CJI P. Sathasivam** upheld the Majithia Wage Board recommendations and the procedure followed; ordered arrears from **11 Nov 2011** in instalments.',
      '**Avishek Raja v. Sanjay Gupta (2017)**: contempt petitions over non-implementation; the Court held the default was not wilful but clarified that the Majithia award must be implemented.',
    ]),

    h2('What the Labour Codes changed'),
    table(
      ['Item', 'Before', 'Under the Codes'],
      [
        ['Governing law', 'Working Journalists Acts 1955 and 1958', 'Both **repealed** and subsumed in the **OSH Code, 2020**'],
        ['Definition', 'Newspapers (print)', 'Includes **electronic and digital media** journalists (s.2(zzm) of the OSH Code)'],
        ['"Worker" status', 'Covered by the ID Act through the 1955 Act', 'Working journalists are expressly within "worker" in the **IR Code** (s.2(zr)), **Code on Wages** and **OSH Code**'],
        ['Gratuity', 'After **3 years** (1955 Act)', '**3 years** retained (proviso to s.53(1), Code on Social Security)'],
        ['Wage Boards', 'Statutory Wage Boards (s.9, 1955 Act)', '**No provision** for Wage Boards. Wages fall under the general minimum-wage and floor-wage system of the Code on Wages'],
        ['Hours, leave', 'Special provisions in the 1955 Act and rules', 'General OSH Code provisions and rules'],
      ],
    ),
    key('Exam angle', 'Remember three things: (1) journalists\' gratuity after **3 years**; (2) the OSH Code definition now includes **electronic/digital media**; (3) the Codes contain **no Wage Board** mechanism, which journalists\' unions criticise.'),
    note('Cine and audio-visual workers', 'Similarly, the OSH Code widens "audio-visual worker" to cover films, TV, web serials, dubbing artists and stunt persons, and requires a **registered written agreement** before engagement.'),

    h2('Wage Boards in other industries'),
    ul(
      'The Second Five-Year Plan (1956) recommended tripartite wage boards for major industries.',
      'The first non-statutory Wage Board was for **cotton textiles (1957)**, followed by cement, sugar, jute, tea and coffee plantations, iron ore, iron and steel, coal, rubber, engineering, electricity and others.',
      'These boards fell out of use after the 1970s, when collective bargaining and industry-level agreements (for example in steel, coal and banking) took over.',
    ),

    h2('Self-test'),
    quiz(
      ['Working journalists become eligible for gratuity after:', ['1 year', '3 years', '5 years', '10 years'], 1, 'Retained in the proviso to s.53(1) of the Code on Social Security.'],
      ['The Majithia Wage Board recommendations were upheld by the Supreme Court in:', ['2011', '2014', '2017', '2019'], 1, 'ABP Pvt Ltd v. Union of India, 7 Feb 2014.'],
      ['The Working Journalists Acts are now subsumed in:', ['Code on Wages', 'IR Code', 'OSH Code', 'Social Security Code'], 2, 'Both the 1955 and 1958 Acts are among the 13 laws in the OSH Code.'],
      ['Which case led to the Working Journalists (Fixation of Rates of Wages) Act, 1958?', ['Express Newspapers v. Union of India', 'Bijay Cotton Mills', 'Crown Aluminium', 'ABP v. Union of India'], 0, 'The Court quashed the first Wage Board decision, so Parliament fixed wages by law.'],
    ),
    cards([
      ['First Wage Board', 'Divatia, 1956'],
      ['Sixth Wage Board', 'Majithia, 2007, notified 11 Nov 2011'],
      ['Non-journalist newspaper employees', 'Brought under Wage Boards from 1974 (s.13C)'],
      ['OSH Code on journalists', 'Includes electronic and digital media; no Wage Board provision'],
    ]),
    sources([
      ['Ministry of Labour: Wage Board for Working Journalists', 'https://www.labour.gov.in/wageboard/wage-board-working-journalists'],
      ['ABP Pvt Ltd v. Union of India (7 Feb 2014)', 'https://indiankanoon.org/doc/55355160/'],
      ['PIB factsheet: OSH Code (journalists and AV workers)', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251122702801.pdf'],
    ]),
  ],
};
