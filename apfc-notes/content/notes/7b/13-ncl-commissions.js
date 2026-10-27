import { h2, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'India has had two National Commissions on Labour. The **First NCL** (constituted **24 Dec 1966**, chaired by **Justice P.B. Gajendragadkar**, report **August 1969**) reviewed post-Independence labour policy and industrial relations. The **Second NCL** (constituted **15 Oct 1999**, chaired by **Ravindra Varma**, report **29 June 2002**) recommended **4–5 functional labour codes** and **umbrella legislation for the unorganised sector**. Before both came the **Royal Commission on Labour (Whitley, 1929–31)**.',
  blocks: [
    h2('Side-by-side'),
    table(
      ['', 'Royal Commission on Labour', 'First NCL', 'Second NCL'],
      [
        ['Chair', '**John Henry Whitley**', '**Justice P.B. Gajendragadkar** (former Chief Justice of India)', '**Ravindra Varma** (former Union Labour Minister)'],
        ['Constituted', '1929', '**24 December 1966**', '**15 October 1999**'],
        ['Report', '**1931**', '**August 1969**', '**29 June 2002**'],
        ['Context', 'Colonial industrialisation; growth of unions', 'Two decades after Independence; planning era', 'Post-1991 liberalisation; globalisation; informal workforce'],
        ['Key outcomes', 'Payment of Wages Act 1936; Factories Act 1934; labour officers; CLC(C) (1945)', 'Shaped policy on IR, wages, union recognition, social security in the 1970s', 'Basis for the **four Labour Codes** and the **Unorganised Workers\' SS Act 2008**'],
      ],
    ),

    h2('First National Commission on Labour (1966–69)'),
    ul(
      li('Reviewed working conditions, wages, industrial relations, trade unions, social security and labour administration since Independence.'),
      li('Recommended **Industrial Relations Commissions** (national and state) as independent bodies for conciliation, adjudication and **certification of bargaining agents**.'),
      li('Favoured **collective bargaining** backed by statutory **recognition** of a representative union (by **verification of membership** or secret ballot), and a reduced role for Government in referring disputes.'),
      li('Discussed the **need-based minimum wage** (15th ILC norms) against the industry\'s capacity to pay, and reviewed the working of **wage boards**.'),
      li('Recommended better **labour administration**, **workers\' education**, and extension of **social security**.'),
      li('Favoured gradually reducing the role of **outsiders** in union leadership.'),
    ),

    h2('Second National Commission on Labour (1999–2002)'),
    ul(
      li('**Terms of reference**: (1) rationalise existing laws for the **organised sector**; (2) suggest **umbrella legislation** for the **unorganised sector**.'),
      li('Recommended grouping about **44 central laws** into **4–5 codes**: **industrial relations, wages, social security, safety and working conditions, and welfare**.'),
      li('**Uniform definitions** of worker, wages and establishment.'),
      li('**Prior permission** for lay-off, retrenchment and closure only for establishments with **300 or more** workers.'),
      li('**Union recognition**: a union with **66%** support as the single negotiating agent; otherwise unions with **over 25%** in a negotiating college (check-off for 300+ workers, secret ballot below that).'),
      li('**Labour Relations Commissions** and a three-tier system of **Lok Adalats, Labour Courts and Labour Relations Commissions**.'),
      li('Allow **contract labour** in non-core activities; flexibility in hours and staffing, balanced by social security.'),
      li('A **social security** system for **unorganised workers**, funded jointly by Government, employers and workers.'),
    ),
    key('What was implemented', [
      '**Codification**: the four Codes (2019–20), in force **21 Nov 2025**.',
      '**300-worker** threshold (IR Code, Chapter X).',
      '**Umbrella law** for the unorganised: **2008 Act**, now Chapter IX of the Social Security Code.',
      '**Not** implemented: Labour Relations Commissions; 66%/25% recognition rule (the Code uses 51%/20%).',
    ]),
    trap('Chairs and dates', [
      'First NCL: **Gajendragadkar**, 1966–69. Second NCL: **Ravindra Varma**, 1999–2002.',
      '**NCEUS** (2004–09) was chaired by **Arjun Sengupta**: it is a different body (see 7C).',
    ]),

    h2('Self-test'),
    quiz(
      ['The First National Commission on Labour was chaired by:', ['Ravindra Varma', 'P.B. Gajendragadkar', 'J.H. Whitley', 'Arjun Sengupta'], 1, ''],
      ['The Second NCL submitted its report on:', ['29 June 2002', '15 Oct 1999', 'Aug 1969', '21 Nov 2025'], 0, ''],
      ['Which recommendation of the Second NCL is NOT reflected in the IR Code?', ['300-worker threshold for permission', 'Grouping laws into codes', 'Labour Relations Commissions', 'Uniform definitions'], 2, 'The Code uses Industrial Tribunals instead.'],
    ),
    cards([
      ['First NCL report', 'August 1969'],
      ['Second NCL constituted', '15 October 1999'],
      ['Royal Commission on Labour', 'Whitley, 1929–31'],
    ]),
    sources([
      ['PIB factsheet: rationale for the Labour Codes (Second NCL)', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251121701501.pdf'],
      ['National Commission on Labour (overview)', 'https://en.wikipedia.org/wiki/National_Commission_on_Labour'],
    ]),
  ],
};
