import { h2, h3, p, ul, li, table, key, trap, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    '**Workers\' participation in management (WPM)** gives workers a say in decisions that affect them. Its constitutional basis is **Article 43A** (added by the **42nd Amendment, 1976**). India tried it through **Works Committees (1947)**, **Joint Management Councils (1958)**, and three Government schemes: **1975** (shop-floor and plant councils in manufacturing and mining units with **500+** workers), **1977** (unit and joint councils in public-sector commercial and service bodies with **100+** employees) and the comprehensive **1983** scheme for central PSUs. A **1990 Bill** lapsed; WPM remains **voluntary**.',
  blocks: [
    h2('Meaning and forms'),
    p('WPM is a system in which workers or their representatives share in management decision-making, from information-sharing to joint decisions. It rests on **industrial democracy**, better motivation and cooperation.'),
    table(
      ['Level of participation', 'What it means'],
      [
        ['Informative', 'Management shares information (balance sheet, production, plans)'],
        ['Consultative', 'Workers\' views are sought, but management decides'],
        ['Associative', 'Management is morally bound to accept unanimous decisions of a joint body'],
        ['Administrative', 'Workers share in implementing decisions (welfare, safety, schedules)'],
        ['Decisive', 'Joint decision-making on economic and policy matters'],
      ],
    ),
    h3('Forms'),
    ul(
      '**Works committees** and **joint councils** (consultative).',
      '**Worker directors** on company boards (for example the workman director in nationalised banks under the 1970 schemes).',
      '**Collective bargaining** (a form of participation through negotiation).',
      '**Workers\' cooperatives** and **self-management**.',
      '**Employee share ownership (ESOPs)** (ownership participation).',
      '**Suggestion schemes** and **quality circles** (task-level participation).',
    ),

    h2('Constitutional basis'),
    ul(
      li('**Article 43A** (Directive Principle, added by the **42nd Amendment, 1976**): the State shall take steps, by suitable legislation or in any other way, to secure the **participation of workers in the management of undertakings, establishments or other organisations engaged in any industry**.'),
      li('Related: **Article 43** (living wage and decent conditions), **Article 39** (distribution of ownership and control of resources).'),
    ),

    h2('Evolution in India'),
    timeline([
      ['1947', '**Works Committees** under s.3 of the Industrial Disputes Act for establishments with **100+** workers (retained in s.3 of the IR Code)'],
      ['1956–58', 'Second Five-Year Plan and the **15th ILC (1957)** recommend **Joint Management Councils (JMCs)**; JMCs introduced in **1958**, voluntary, in units with around **500+** workers'],
      ['1970', 'Nationalised Banks schemes provide for **workman and officer directors** on bank boards'],
      ['1975', '**Scheme for workers\' participation in industry** at **shop floor** (Shop Councils) and **plant level** (Joint Councils): manufacturing and mining units, public, private and cooperative, employing **500 or more** workers. Part of the **20-Point Programme**'],
      ['1976', '**Article 43A** added by the **42nd Amendment**'],
      ['1977', 'Scheme for **commercial and service organisations in the public sector** with large public dealings, employing **100 or more**: **Unit Councils** and **Joint Councils**'],
      ['1983', '**Comprehensive (new) scheme** for all **central public sector undertakings** (except those exempted), at **shop floor, plant and board** levels; worker representatives chosen by the unions or by **secret ballot** where there is no recognised union'],
      ['30 May 1990', '**Participation of Workers in Management Bill, 1990** introduced in the Rajya Sabha; would have made participation **statutory** with penalties; **lapsed**'],
      ['2020 onwards', 'IR Code keeps **Works Committees** and makes **Grievance Redressal Committees** mandatory; no statutory WPM scheme'],
    ]),
    table(
      ['Scheme', 'Coverage', 'Bodies'],
      [
        ['**1975**', 'Manufacturing and mining units with **500+** workers (all sectors)', '**Shop Councils** (shop/department level) and **Joint Councils** (unit level)'],
        ['**1977**', 'Public-sector **commercial and service** organisations with **100+** employees (for example hospitals, banks, postal and transport services)', '**Unit Councils** and **Joint Councils**'],
        ['**1983**', 'All **central PSUs** (voluntary, except exempted)', 'Shop floor, plant level, and **board of management** participation'],
      ],
    ),

    h2('Why WPM has not taken root'),
    ul(
      '**Voluntary** schemes with no legal backing; the 1990 Bill lapsed.',
      '**Multiple rival unions** could not agree on representatives.',
      'Management reluctance to share power and information.',
      'Workers\' distrust and preference for **collective bargaining**.',
      'Lack of training and education of worker representatives.',
      'Bodies became forums for grievances rather than joint decisions.',
    ),
    key('Exam essentials', [
      'Article **43A**, **42nd Amendment, 1976**.',
      'Schemes: **1975** (500+, manufacturing and mining), **1977** (100+, public commercial and service), **1983** (central PSUs, including board level).',
      'JMCs **1958**; Works Committees **1947**; 1990 Bill **lapsed**.',
    ]),
    trap('Do not confuse', [
      'Works Committee is **statutory** (ID Act s.3 → IR Code s.3) but advisory; JMCs and the 1975/77/83 schemes are **non-statutory**.',
      'Article 43A is a **Directive Principle**, not a Fundamental Right.',
    ]),

    h2('Self-test'),
    quiz(
      ['Article 43A was inserted by the:', ['24th Amendment', '42nd Amendment', '44th Amendment', '73rd Amendment'], 1, '1976.'],
      ['The 1975 WPM scheme applied to manufacturing and mining units employing at least:', ['100 workers', '300 workers', '500 workers', '1,000 workers'], 2, ''],
      ['Joint Management Councils were introduced in:', ['1947', '1958', '1975', '1983'], 1, ''],
      ['The Participation of Workers in Management Bill, 1990:', ['Became law in 1991', 'Lapsed', 'Was merged into the IR Code', 'Was struck down'], 1, ''],
    ),
    cards([
      ['1977 scheme', 'Public-sector commercial and service bodies, 100+ employees; Unit and Joint Councils'],
      ['1983 scheme', 'Central PSUs; shop floor, plant and board levels'],
      ['Worker directors', 'Nationalised banks (1970 schemes)'],
    ]),
    sources([
      ['Constitution of India, Article 43A', 'https://www.constitutionofindia.net/articles/article-43a-participation-of-workers-in-management-of-industries/'],
    ]),
  ],
};
