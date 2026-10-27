import { h2, h3, p, ul, li, table, key, trap, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    '**Decent Work**, launched by DG **Juan Somavía** in **1999**, means productive work in conditions of **freedom, equity, security and human dignity**. It rests on **four pillars**: employment creation, rights at work, social protection and social dialogue, with **gender equality** across all four. It is embedded in **SDG 8**. The ILO\'s flagship reports include the **World Employment and Social Outlook**, the **World Social Protection Report 2024–26** (**52.4%** of people covered by at least one benefit) and the **Global Wage Report**. The ILO won the **Nobel Peace Prize in 1969**.',
  blocks: [
    h2('The Decent Work Agenda'),
    p('Introduced in the DG\'s report to the **87th International Labour Conference (1999)**, it became the organising idea of the ILO and was affirmed by the **2008 Declaration on Social Justice for a Fair Globalization**.'),
    table(
      ['Pillar (strategic objective)', 'What it covers'],
      [
        ['**1. Employment creation**', 'Full and productive employment, enterprise development, skills'],
        ['**2. Rights at work**', 'Fundamental principles and rights; labour standards'],
        ['**3. Social protection**', 'Social security, safe working conditions, fair wages and hours'],
        ['**4. Social dialogue**', 'Tripartism, collective bargaining, conflict resolution'],
        ['Cross-cutting', '**Gender equality** and non-discrimination'],
      ],
    ),
    ul(
      li('**SDG 8**: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and **decent work for all**" (Agenda 2030).'),
      li('**Decent Work Country Programmes (DWCPs)** set national priorities with each member State; India has had DWCPs agreed with the Government and social partners.'),
      li('**Global Jobs Pact (2009)** after the financial crisis; **Global Coalition for Social Justice (2023)**.'),
    ),

    h2('Key declarations'),
    table(
      ['Year', 'Declaration', 'Point'],
      [
        ['1944', 'Declaration of Philadelphia', '"Labour is not a commodity"; broadened mandate'],
        ['1998', 'Fundamental Principles and Rights at Work', 'Four categories, binding by membership; **fifth category (OSH) added 2022**'],
        ['2008', 'Social Justice for a Fair Globalization', 'Institutionalised Decent Work; four objectives inseparable'],
        ['2019', 'Centenary Declaration for the Future of Work', 'Human-centred approach: lifelong learning, universal social protection, labour guarantee'],
      ],
    ),

    h2('Flagship reports and data'),
    table(
      ['Report', 'What it is', 'Recent headline'],
      [
        ['**World Employment and Social Outlook (WESO) – Trends**', 'Annual (January) global labour market report', 'Global unemployment near **5%**; informality and working poverty remain high'],
        ['**World Social Protection Report 2024–26**', 'Global social protection coverage', '**52.4%** of the world covered by **at least one** benefit, the first time over half; **47.6%** unprotected'],
        ['**Global Wage Report**', 'Wage trends and inequality (biennial)', 'Tracks real wage growth and wage inequality'],
        ['**Global Estimates of Child Labour** (with UNICEF)', 'Child labour count', '**138 million** children in 2024 (54 million in hazardous work), down over 20 million since 2020; the 2025 elimination target was missed'],
        ['**Global Estimates of Modern Slavery** (with Walk Free and IOM)', 'Forced labour and forced marriage', '**50 million** people in modern slavery (2021 estimate)'],
        ['**India Employment Report 2024** (with the Institute for Human Development)', 'India\'s labour market', 'Released March 2024; youth make up the large majority of the unemployed'],
      ],
    ),
    key('India in the WSPR / ILO data', 'The ILO\'s social protection dashboard credits India with raising social protection coverage from **19% (2015)** to **64.3% (2025)**, covering over **94 crore** people, second in the world by number of beneficiaries (details in 7C).'),

    h2('Nobel Peace Prize 1969'),
    ul(
      li('Awarded to the ILO on its **50th anniversary**, for improving fraternity among nations, pursuing decent work and justice for workers, and providing technical assistance to developing nations.'),
      li('Accepted by Director-General **David A. Morse**.'),
    ),
    h3('International days'),
    ul('**20 February**: World Day of Social Justice (UN)', '**28 April**: World Day for Safety and Health at Work (ILO)', '**1 May**: International Workers\' Day', '**12 June**: World Day Against Child Labour (ILO, since 2002)', '**7 October**: World Day for Decent Work (trade unions)'),
    trap('Do not confuse', [
      'Decent Work was introduced in **1999**, not 1998 (that was the Fundamental Principles Declaration).',
      '52.4% (global, WSPR) vs 64.3% (India, ILO dashboard 2025).',
    ]),

    h2('Self-test'),
    quiz(
      ['Which is NOT one of the four pillars of Decent Work?', ['Employment creation', 'Social protection', 'Social dialogue', 'Minimum wage legislation'], 3, 'The pillars are employment, rights at work, social protection and social dialogue.'],
      ['Decent Work is part of which Sustainable Development Goal?', ['SDG 1', 'SDG 5', 'SDG 8', 'SDG 10'], 2, ''],
      ['According to WSPR 2024–26, the share of the world covered by at least one social protection benefit is:', ['38.9%', '46.9%', '52.4%', '64.3%'], 2, ''],
      ['The ILO received the Nobel Peace Prize in:', ['1944', '1969', '1998', '2019'], 1, ''],
    ),
    cards([
      ['Decent Work launched', '1999, Juan Somavía, 87th ILC'],
      ['Child labour 2024', '138 million (ILO–UNICEF)'],
      ['World Day for Safety and Health at Work', '28 April'],
    ]),
    sources([
      ['ILO: World Social Protection Report 2024–26 in figures', 'https://www.ilo.org/resource/article/world-social-protection-report-2024-26-figures'],
      ['ILO–UNICEF: 138 million children in child labour', 'https://www.ilo.org/resource/news/despite-progress-child-labour-still-affects-138-million-children-globally'],
    ]),
  ],
};
