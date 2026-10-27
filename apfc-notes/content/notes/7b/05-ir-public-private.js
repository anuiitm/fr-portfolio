import { h2, h3, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'IR in the **public sector** is shaped by the **Government as owner**: multiple politically linked unions, industry-wide or national **long-term settlements** within **DPE guidelines** (banks: **12th Bipartite Settlement**, 17% from Nov 2022; coal: **NCWA-XI**, 19% MGB from July 2021), job security and few but large disputes. The **private sector** relies on **enterprise-level bargaining**, HRM practices, flexible and contract labour, and has more but smaller disputes, with **lock-outs** as the employer\'s weapon.',
  blocks: [
    h2('Public sector industrial relations'),
    h3('Features'),
    ul(
      li('The **Government is the ultimate employer**; decisions on wages and benefits need approval of the administrative Ministry and the **Department of Public Enterprises (DPE)**.'),
      li('**Multiple unions**, most affiliated to central trade union organisations; strong unionisation and high **job security**.'),
      li('Wages settled through **industry-wide or national bipartite committees** for long periods (5 years or more), or for executives through **Pay Revision Committees**.'),
      li('Bargaining is constrained by **affordability** clauses and Government guidelines.'),
      li('Disputes are **few but involve many workers** (in 2018, public sector: 16% of disputes but 94% of workers involved).'),
      li('Pressure from **disinvestment, privatisation and restructuring** (VRS, strategic sales).'),
    ),
    h3('Wage-setting examples'),
    table(
      ['Sector', 'Mechanism', 'Latest settlement'],
      [
        ['**Public sector banks**', 'Bipartite settlements between the **Indian Banks\' Association (IBA)** and unions (**UFBU**)', '**12th Bipartite Settlement**, signed **8 March 2024**: **17%** increase in pay slip components, effective **1 Nov 2022** for **1 Nov 2022 – 31 Oct 2027**'],
        ['**Coal (Coal India, SCCL)**', '**Joint Bipartite Committee for the Coal Industry (JBCCI)**; **National Coal Wage Agreements (NCWA)**', '**NCWA-XI** for **five years from 1 July 2021**: **19% Minimum Guaranteed Benefit** (MoU with BMS, HMS, AITUC and CITU on 3 Jan 2023; agreement signed 20 May 2023)'],
        ['**Steel (SAIL)**', '**National Joint Committee for the Steel Industry (NJCS)**', 'Industry-wide wage agreements'],
        ['**Executives of CPSEs**', '**Pay Revision Committees** under DPE', '**3rd PRC** (Justice **Satish Chandra**), effective **1 Jan 2017**; DPE order of **3 Aug 2017**'],
        ['**Government employees**', '**Central Pay Commissions**; the **Joint Consultative Machinery (JCM)** (1966) for staff–Government consultation', '**8th Central Pay Commission** constituted (2025)'],
      ],
    ),

    h2('Private sector industrial relations'),
    ul(
      li('**Enterprise- or plant-level bargaining** with (often) a single recognised union or an internal union.'),
      li('Stronger **HRM** orientation: performance-linked pay, direct communication, employee engagement.'),
      li('Wide use of **contract, temporary and fixed-term** workers, which weakens unions and creates disputes over regularisation.'),
      li('Lower union density, especially in **IT and services**; unions strongest in older manufacturing (automobiles, engineering, textiles).'),
      li('**Lock-outs** as an employer weapon; disputes more frequent but involve fewer workers (in 2018, 84% of disputes, 6% of workers, 67% of man-days lost).'),
      li('Notable conflict: the **Maruti Suzuki Manesar** unrest of **July 2012** over contract labour and union recognition.'),
    ),

    h2('Comparison'),
    table(
      ['Feature', 'Public sector', 'Private sector'],
      [
        ['Employer', 'Government / CPSE management', 'Private owners and managers'],
        ['Unions', 'Many, strong, politically affiliated', 'Fewer, weaker, often enterprise-based or absent'],
        ['Bargaining level', 'Industry or national; long-term settlements', 'Enterprise or plant level'],
        ['Wage autonomy', 'Limited by DPE guidelines and affordability', 'Greater, linked to performance and market'],
        ['Job security', 'High', 'Lower; more contract and fixed-term labour'],
        ['Disputes', 'Few but large', 'More frequent, smaller; lock-outs common'],
        ['Management style', 'Bureaucratic, rule-based', 'HRM-based, flexible'],
        ['Main pressures', 'Disinvestment, restructuring', 'Global competition, cost control, automation'],
      ],
    ),
    key('Under the Labour Codes', 'The **appropriate Government** for CPSEs, railways, banks, insurance, mines, oilfields and major ports is the **Centre**, so their disputes go to the **CLC(C)** conciliation machinery and **Central Government Industrial Tribunals**. The Centre stays the appropriate Government for a CPSE even if its stake falls below 50% after the Code\'s commencement (IR Code s.2(b)).'),
    trap('Do not mix up', [
      '**JBCCI** = coal; **NJCS** = steel; **IBA–UFBU** = banks; **JCM** = Central Government employees.',
      'The **3rd PRC** covers CPSE **executives and non-unionised supervisors**; workmen are covered by bipartite wage agreements.',
    ]),

    h2('Self-test'),
    quiz(
      ['The 12th Bipartite Settlement for bank employees gave a pay increase of:', ['15%', '17%', '19%', '20%'], 1, 'Signed 8 March 2024, effective 1 Nov 2022.'],
      ['NCWA-XI provides a Minimum Guaranteed Benefit of:', ['15%', '17%', '19%', '25%'], 2, 'For five years from 1 July 2021.'],
      ['The 3rd Pay Revision Committee for CPSE executives was headed by:', ['Justice Satish Chandra', 'Justice G.R. Majithia', 'Justice Ashok Kumar Mathur', 'Justice B.N. Srikrishna'], 0, 'Effective 1 Jan 2017.'],
    ),
    cards([
      ['JBCCI', 'Joint Bipartite Committee for the Coal Industry'],
      ['NJCS', 'National Joint Committee for the Steel Industry'],
      ['Maruti Manesar', 'July 2012 unrest: contract labour and union recognition'],
    ]),
    sources([
      ['PIB: Coal India and unions sign MoU on 19% MGB (Jan 2023)', 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1888601'],
      ['DPE: Pay revision of CPSE executives w.e.f. 1.1.2017', 'https://dpe.gov.in/en/pay-revision-board-level-and-below-board-level-executives-and-non-unionised-supervisors-cpses-wef-0'],
      ['Labour Bureau: Industrial Disputes statistics 2018', 'https://labourbureau.gov.in/uploads/pdf/ID_Review_2018.pdf'],
    ]),
  ],
};
