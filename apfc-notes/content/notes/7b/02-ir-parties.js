import { h2, h3, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Industrial relations in India has three principal parties: **workers and their trade unions**, **employers and their associations**, and the **State** (legislature, executive, labour administration and courts). India\'s system is **tripartite**, modelled on the ILO: the three meet in the Indian Labour Conference, the CBT, ESIC and the Advisory Boards under the Codes.',
  blocks: [
    h2('1. Workers and trade unions'),
    ul(
      li('**Workers** want fair wages, job security, safe conditions, dignity and a voice. Individually weak, they organise into **trade unions**.'),
      li('A **trade union** (IR Code s.2(zl)) is any combination, temporary or permanent, formed primarily to regulate relations between workers and employers, among workers, or among employers, including **federations**.'),
      li('**Structure**: plant-level unions → industry federations → **Central Trade Union Organisations (CTUOs)**, most linked to political parties (INTUC–Congress, BMS–RSS family, AITUC–CPI, CITU–CPI(M), HMS–socialists).'),
      li('**Functions**: **militant** (collective bargaining, strikes to protect interests) and **fraternal** (welfare, education, legal aid, cooperatives); also political and social roles.'),
      li('**Problems** of Indian unions: **multiplicity** and inter-union rivalry, **political affiliation**, **outside leadership**, small size and weak finances, low membership (large informal sector), and dependence on legal machinery rather than bargaining.'),
      li('**Under the IR Code**: registration with **7 members** and **10% or 100 workers**; **negotiating union at 51%**, **negotiating council at 20%**; limits on outsiders (one-third or 5, whichever is less); recognition of **Central and State Trade Unions** (s.27).'),
    ),

    h2('2. Employers and their associations'),
    p('Employers want productivity, flexibility, discipline, cost control and industrial peace. They act individually through **management / HR departments** and collectively through **employers\' associations**, which bargain at industry level, lobby Government, and represent employers in tripartite bodies and at the ILO.'),
    table(
      ['Organisation', 'Founded', 'Notes'],
      [
        ['**Council of Indian Employers (CIE)**', '1956', 'Apex body of **AIOE**, **EFI** and **SCOPE**; represents Indian employers at the **ILO**'],
        ['**Employers\' Federation of India (EFI)**', '1933', 'Mumbai; focuses on labour and IR issues'],
        ['**All India Organisation of Employers (AIOE)**', '1932', 'Promoted by FICCI'],
        ['**Standing Conference of Public Enterprises (SCOPE)**', '1973', 'Apex body of **central public sector enterprises**'],
        ['**FICCI**', '1927', 'Federation of Indian Chambers of Commerce and Industry'],
        ['**ASSOCHAM**', '1920', 'Associated Chambers of Commerce and Industry of India'],
        ['**CII**', '1895 (origins); present name 1992', 'Confederation of Indian Industry'],
      ],
    ),
    p('Industry-wide bargaining bodies include the **Indian Banks\' Association (IBA)** for bank wage settlements and the coal and steel management committees.'),

    h2('3. The State'),
    p('The State is both **regulator** and, through public enterprises and departments, the **largest employer**. Its roles:'),
    table(
      ['Role', 'How'],
      [
        ['**Legislator**', 'Labour laws and now the **four Labour Codes** (Parliament and State legislatures, since labour is Concurrent)'],
        ['**Administrator and enforcer**', 'Ministry of Labour, **CLC(C)**, State Labour Departments, **Inspector-cum-Facilitators**'],
        ['**Conciliator and adjudicator**', 'Conciliation officers, **Industrial Tribunals**, **National Industrial Tribunal**, arbitration'],
        ['**Policy maker and facilitator**', 'Tripartite forums (ILC, SLC), wage policy, minimum wages, social security'],
        ['**Employer**', 'Government departments, railways, defence, CPSEs, banks'],
        ['**Judiciary**', 'Interprets laws; Supreme Court and High Courts shaped IR through cases on "industry", strikes, retrenchment and contract labour'],
      ],
    ),
    h3('Evolution of the State\'s role'),
    ul(
      'Colonial period: **laissez-faire** with penal laws against workers.',
      'Wartime (1942): **compulsory adjudication** under Rule 81A of the Defence of India Rules.',
      'After 1947: an **interventionist** State (Industrial Disputes Act; reference of disputes by Government).',
      'Post-1991: gradual move towards **flexibility**, voluntary settlement and ease of compliance, culminating in the **Codes** (direct access to tribunals, higher thresholds, compounding).',
    ),

    h2('Other stakeholders'),
    ul(
      'The **ILO** (international standards, technical assistance).',
      'Consumers and the public (affected by strikes in essential services).',
      'Civil society organisations and NGOs, especially for unorganised workers (for example **SEWA**).',
    ),
    key('Tripartism in practice', 'Tripartite bodies in India: **Indian Labour Conference** and **Standing Labour Committee**; **CBT (EPF)**; **ESIC**; **Advisory Boards** under the Code on Wages; **National OSH Advisory Board**; **National Social Security Board**; industrial committees; and India\'s delegation to the **International Labour Conference** (2 Government, 1 employer, 1 worker delegate).'),
    trap('Do not confuse', [
      'Employers\' representative at the ILO: **Council of Indian Employers**, not CII or FICCI directly.',
      'SCOPE represents **central public sector** enterprises; it is part of the CIE.',
    ]),

    h2('Self-test'),
    quiz(
      ['Which body represents Indian employers at the ILO?', ['CII', 'FICCI', 'Council of Indian Employers', 'NASSCOM'], 2, 'The CIE, comprising AIOE, EFI and SCOPE.'],
      ['SCOPE represents:', ['Small scale industries', 'Central public sector enterprises', 'Chambers of commerce', 'State PSUs'], 1, ''],
      ['Compulsory adjudication in India began with:', ['Trade Disputes Act 1929', 'Rule 81A, Defence of India Rules, 1942', 'IR Code 2020', 'Bombay IR Act 1946'], 1, ''],
    ),
    cards([
      ['Three actors', 'Workers/unions, employers/associations, the State'],
      ['EFI', 'Employers\' Federation of India, 1933'],
      ['AIOE', 'All India Organisation of Employers, 1932 (FICCI-promoted)'],
      ['ILO delegation', '2 Government + 1 employer + 1 worker delegate'],
    ]),
    sources([
      ['IR Code, 2020 (text)', 'https://prsindia.org/files/bills_acts/acts_parliament/2020/Industrial%20Relations%20Code,%202020.pdf'],
    ]),
  ],
};
