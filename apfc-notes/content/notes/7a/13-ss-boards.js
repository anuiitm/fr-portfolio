import { h2, h3, p, ul, li, table, key, trap, fresh, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **National Social Security Board (NSSB)** was first set up on **18 Aug 2009** under the Unorganised Workers\' Social Security Act, 2008. It now exists under **Section 6** of the Code on Social Security: chaired by the **Union Labour Minister**, with 40 nominated members and the **DG Labour Welfare** as Member-Secretary. The same Board, with a **different composition**, is the Board for **gig and platform workers** (s.114(6)). Each State has a **State Unorganised Workers\' Social Security Board** chaired by its Labour Minister.',
  blocks: [
    h2('Evolution'),
    ul(
      li('**2008**: the **Unorganised Workers\' Social Security Act, 2008** (Act 33 of 2008, assent 30 Dec 2008) provided for a National Social Security Board and State Social Security Boards, following the **NCEUS** (Arjun Sengupta) recommendations.'),
      li('**18 Aug 2009**: the first **National Social Security Board** was constituted, chaired by the Union Labour Minister.'),
      li('**2020–2025**: the Code on Social Security replaced the 2008 Act. Section 6 re-creates the NSSB with a larger membership and adds its role for **gig and platform workers**. In force from **21 Nov 2025**.'),
      li('**8 May 2026**: the **Social Security (Central) Rules, 2026** operationalise the Board for gig and platform workers (aggregator seats rotate across the Seventh Schedule categories; a quorum of six for gig matters; expert committees allowed).'),
    ),

    h2('National Social Security Board for unorganised workers (Section 6(1)–(8))'),
    table(
      ['Item', 'Detail'],
      [
        ['Chairperson', '**Union Minister for Labour and Employment**'],
        ['Vice-Chairperson', '**Secretary, Ministry of Labour and Employment**'],
        ['Nominated members (40)', '7 representing **unorganised workers**, 7 **employers** of the unorganised sector, 7 **eminent civil society** persons, **2 Lok Sabha + 1 Rajya Sabha** MPs, 10 **Central Ministries and Departments**, 5 **State Governments**, 1 for the **Union Territories**'],
        ['Member-Secretary', '**Director General (Labour Welfare)**, ex officio'],
        ['Eligibility', 'All members except the Chairperson must be persons of eminence in labour welfare, management, finance, law or administration; adequate representation for **SC, ST, minorities and women**'],
        ['Term', '**3 years**'],
        ['Meetings', 'At least **three times a year**'],
      ],
    ),
    h3('Functions'),
    ul(
      'Recommend **schemes** for different sections of unorganised, gig and platform workers.',
      'Advise the Centre on the administration of the Code.',
      'Monitor Central social welfare schemes for these workers.',
      'Review record-keeping at the State level.',
      'Review expenditure from the fund.',
      'Perform other functions assigned by the Centre.',
    ),

    h2('The Board for gig and platform workers (Section 114(6))'),
    p('When dealing with gig and platform workers, the NSSB replaces its nominated members and Member-Secretary with:'),
    table(
      ['Seats', 'Who'],
      [
        ['5', 'Representatives of **aggregators**, nominated by the Centre'],
        ['5', 'Representatives of **gig and platform workers**, nominated by the Centre'],
        ['1', '**Director General, ESIC**'],
        ['1', '**Central Provident Fund Commissioner**'],
        ['—', 'Expert members as the Centre considers appropriate'],
        ['5', 'Representatives of **State Governments**, by rotation'],
        ['Member-Secretary', 'A **Joint Secretary**, Ministry of Labour and Employment'],
      ],
    ),
    fresh('What the Board oversees', 'Schemes under Section 114 (life and disability cover, accident insurance, health and maternity, old age, crèche) funded partly by the **aggregator contribution of 1–2% of turnover** (capped at **5%** of payments to gig and platform workers), which goes to the **Social Security Fund** (s.141).'),

    h2('State Unorganised Workers\' Social Security Board (Section 6(9)–(16))'),
    table(
      ['Item', 'Detail'],
      [
        ['Constituted by', 'Every **State Government**'],
        ['Chairperson', '**State Minister of Labour and Employment**, ex officio'],
        ['Vice-Chairperson', 'Principal Secretary or Secretary (Labour)'],
        ['Members', '1 representing the Centre (MoLE) + **31** nominated: 7 unorganised workers, 7 employers, **2 MLAs**, 5 eminent civil society persons, 10 State departments'],
        ['Member-Secretary', 'Notified by the State'],
        ['Term', '**3 years**'],
        ['Meetings', 'At least **once a quarter**'],
        ['Functions', 'Recommend State schemes; advise the State; monitor State schemes; review district-level record keeping; review **registration and issue of cards**; review expenditure'],
      ],
    ),
    h3('Related State bodies'),
    ul(
      li('**State Building and Other Construction Workers\' Welfare Boards** (s.7): chair nominated by the State, one Central nominee, up to 15 members with **equal** Government, employer and worker representation, **at least one woman**. They manage the BOCW cess fund.'),
      li('**State Social Security Fund** (s.141(5)) for unorganised workers, fed by compounding fees and other sources.'),
    ),
    key('Quick comparison', [
      'NSSB: chaired by **Union** Labour Minister; meets **3 times a year**; 40 nominated members.',
      'State Board: chaired by **State** Labour Minister; meets **quarterly**; 31 nominated members.',
      'Both: term **3 years**; representation for SC, ST, minorities and women.',
    ]),
    trap('Do not mix up', [
      'The **Member-Secretary** of the NSSB (unorganised workers) is the **DG Labour Welfare**; for gig and platform matters it is a **Joint Secretary** of the Ministry.',
      'The **CBT** is for EPF; the **ESIC** for ESI; the **NSSB** for unorganised, gig and platform workers. All are "Social Security Organisations" under s.2(79).',
    ]),

    h2('Self-test'),
    quiz(
      ['The National Social Security Board is chaired by:', ['Prime Minister', 'Union Labour Minister', 'Labour Secretary', 'DG Labour Welfare'], 1, 'Section 6(2)(a).'],
      ['How often must the NSSB meet at a minimum?', ['Once a year', 'Twice a year', 'Three times a year', 'Every quarter'], 2, 'Section 6(6). State Boards meet at least once a quarter.'],
      ['The first NSSB was constituted in:', ['2008', '2009', '2015', '2020'], 1, '18 August 2009, under the 2008 Act.'],
      ['Which of these is NOT on the NSSB when it acts for gig and platform workers?', ['DG, ESIC', 'CPFC', 'Five aggregator representatives', 'Three Members of Parliament'], 3, 'MPs are on the general NSSB, not in the gig-worker composition under s.114(6).'],
    ),
    cards([
      ['NSSB Member-Secretary', 'Director General (Labour Welfare)'],
      ['NSSB nominated members', '40 (7 + 7 + 7 + 3 MPs + 10 Ministries + 5 States + 1 UT)'],
      ['State Board nominated members', '31 (7 + 7 + 2 MLAs + 5 + 10)'],
      ['Gig board seats', '5 aggregators, 5 workers, DG ESIC, CPFC, experts, 5 States'],
    ]),
    sources([
      ['Code on Social Security, 2020, ss.6 and 114', 'https://www.labour.gov.in/static/uploads/2025/07/b0620548445580767b5c0d18c95c26f7.pdf'],
      ['Unorganised Workers\' Social Security Act, 2008 (India Code)', 'https://www.indiacode.nic.in/bitstream/123456789/15481/1/the_unorganised_workers_social_security_act,_2008.pdf'],
    ]),
  ],
};
