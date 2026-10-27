import { h2, h3, p, ul, li, table, key, trap, caselaw, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'An **industrial dispute** (IR Code s.2(q)) is any dispute between employers and employers, employers and workers, or workers and workers about employment, non-employment, terms of employment or conditions of labour, including an individual worker\'s dismissal or retrenchment. **Causes** are economic (wages, bonus, allowances; the top cause in Labour Bureau data), managerial, political and psychological. **Forms** include **strikes** (many types), **lock-outs**, **gherao**, **go-slow**, **picketing** and, under the Code, **mass casual leave**.',
  blocks: [
    h2('Definition'),
    p('Under **Section 2(q) of the IR Code**, an industrial dispute is any dispute or difference:'),
    ul(
      'between **employers and employers**, **employers and workers**, or **workers and workers**;',
      'connected with the **employment or non-employment**, the **terms of employment**, or the **conditions of labour** of any person;',
      'and it **includes** any dispute between an **individual worker** and the employer about **discharge, dismissal, retrenchment or termination** (earlier added to the ID Act as s.2A in 1965).',
    ),
    p('A **trade union dispute** (s.2(zm)) is different: a dispute between trade unions, or between a union and its members. It is decided by the **Industrial Tribunal** (s.22).'),

    h2('Causes of industrial disputes'),
    table(
      ['Category', 'Causes'],
      [
        ['**Economic**', 'Wages and **dearness allowance**, **bonus**, other allowances, working hours, leave, rising prices, demand for better conditions'],
        ['**Managerial**', 'Refusal to recognise unions, unfair labour practices, victimisation, **retrenchment**, lay-off and closure, faulty recruitment and promotion, poor communication, autocratic behaviour, violation of agreements'],
        ['**Political**', 'Political affiliation of unions; general strikes against Government policy; inter-union rivalry'],
        ['**Social and psychological**', 'Frustration, lack of recognition and job satisfaction, caste and community tensions'],
        ['**Technological**', 'Automation and rationalisation causing fear of job loss'],
        ['**Legal and institutional**', 'Delays in adjudication; non-implementation of awards'],
      ],
    ),
    p('**Labour Bureau data** classify causes as **wages and allowances**, **charter of demands**, **bonus**, **personnel and retrenchment**, **indiscipline and violence**, **leave and hours of work**, and others. In 2018, **wages and allowances** caused **30.2%** of disputes, followed by **charter of demands (24.4%)**.'),

    h2('Forms of industrial conflict'),
    h3('Strike'),
    p('**IR Code s.2(zk)**: a cessation of work by a body of persons employed in any industry acting in combination, or a concerted refusal (or refusal under a common understanding) to continue to work or accept employment, and it **includes concerted casual leave on a given day by 50% or more** of the workers.'),
    table(
      ['Type', 'What happens'],
      [
        ['**General strike**', 'Workers of an industry or of many industries stop work together (for example the nationwide strike of **9 July 2025** by ten central trade unions)'],
        ['**Stay-away strike**', 'Workers stay away from the workplace'],
        ['**Stay-in / sit-down / pen-down / tool-down**', 'Workers come to the workplace but do not work'],
        ['**Go-slow**', 'Workers deliberately slow down output; an **unfair labour practice** (Second Schedule)'],
        ['**Work-to-rule**', 'Workers follow every rule strictly, slowing work'],
        ['**Sympathetic strike**', 'In support of workers of another unit'],
        ['**Hunger strike**', 'Workers fast to press demands'],
        ['**Lightning / wildcat strike**', 'Sudden strike without notice; illegal under the Code'],
        ['**Token strike**', 'Short strike (hours or a day) as a warning'],
        ['**Mass casual leave**', 'Casual leave taken together; a **strike** if 50% or more workers do so on a day (new in the Code)'],
      ],
    ),
    h3('Lock-out'),
    p('**s.2(u)**: the **temporary closing** of a place of employment, the **suspension of work**, or the employer\'s refusal to continue to employ any number of persons. It is the employer\'s counterpart of a strike. A **closure** (s.2(h)) is **permanent** closing down.'),
    h3('Gherao'),
    ul(
      li('Physical encirclement of managers to prevent them from leaving until demands are met. It spread in **West Bengal in 1967**.'),
      li('**Jay Engineering Works v. State of West Bengal (Calcutta High Court, 1968)** held gheraos **illegal**, involving wrongful restraint and confinement.'),
      li('Under the IR Code, **gherao** is an **unfair labour practice** by workers and unions.'),
    ),
    h3('Others'),
    ul('**Picketing**: stationing workers at the gate to dissuade others from working (peaceful picketing is lawful; physically barring entry is an unfair labour practice).', '**Boycott**: refusing to buy the employer\'s products or cooperate.', '**Demonstrations**, **dharnas**, **work-to-rule**.'),

    h2('Is there a right to strike?'),
    caselaw('What the courts have said', [
      '**All India Bank Employees\' Association v. National Industrial Tribunal (1962)**: the right to form associations under Article 19(1)(c) does **not** include a **fundamental right to strike** or to bargain collectively.',
      '**Kameshwar Prasad v. State of Bihar (1962)**: a rule banning all **demonstrations** by Government servants was struck down, but the ban on **strikes** was upheld.',
      '**B.R. Singh v. Union of India (1989)**: the strike is a legitimate weapon of workers, recognised by law, but it is **not absolute**.',
      '**T.K. Rangarajan v. Government of Tamil Nadu (2003)**: Government employees have **no fundamental, legal, moral or equitable right to strike**.',
    ]),
    key('What the IR Code does', 'It does not ban strikes. It **regulates** them: notice within **60 days** before, a **14-day** wait, and no strike during conciliation (+7 days), tribunal or arbitration proceedings (+60 days) or while a settlement or award operates. This now applies to **all** industrial establishments.'),
    trap('Distinctions examiners test', [
      '**Lock-out** = temporary; **closure** = permanent; **lay-off** = inability to give work (for listed reasons) while the worker stays on the rolls; **retrenchment** = termination for any reason other than punishment.',
      '**Go-slow** is not a strike under the definition but is an **unfair labour practice**.',
    ]),

    h2('Self-test'),
    quiz(
      ['Which of these became part of the definition of "strike" in the IR Code?', ['Go-slow', 'Mass casual leave by 50% or more workers', 'Gherao', 'Work-to-rule'], 1, 'Section 2(zk).'],
      ['The permanent shutting down of a place of employment is:', ['Lock-out', 'Lay-off', 'Closure', 'Retrenchment'], 2, 'Section 2(h).'],
      ['Which case held that there is no fundamental right to strike?', ['All India Bank Employees\' Association (1962)', 'Bangalore Water Supply (1978)', 'Vishaka (1997)', 'Reptakos Brett (1991)'], 0, 'T.K. Rangarajan (2003) said the same for Government employees.'],
      ['According to Labour Bureau data for 2018, the leading cause of disputes was:', ['Bonus', 'Indiscipline', 'Wages and allowances', 'Retrenchment'], 2, '30.2% of disputes.'],
    ),
    cards([
      ['Individual disputes', 'Dismissal, discharge, retrenchment or termination: deemed industrial disputes'],
      ['Gherao ruling', 'Jay Engineering Works v. State of WB (Cal HC, 1968): illegal'],
      ['Lightning strike', 'Sudden, without notice: illegal under s.62'],
    ]),
    sources([
      ['Labour Bureau: Industrial Disputes, Closures, Retrenchments and Lay-offs (2018)', 'https://labourbureau.gov.in/uploads/pdf/ID_Review_2018.pdf'],
    ]),
  ],
};
