import { h2, h3, p, ul, li, table, key, trap, hook, quote, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    '**Industrial relations (IR)** is the web of relationships among **workers and their unions, employers and their associations, and the State**, arising out of employment. Good IR means industrial peace, productivity and fair sharing of gains; poor IR shows up as strikes, lock-outs, absenteeism and low morale. It is studied through several approaches (**unitary, pluralist, Marxist, systems (Dunlop), Gandhian**).',
  blocks: [
    h2('Meaning and definitions'),
    p('**Industrial relations** covers the relations between management and workers, and between their organisations, in the course of employment, including the role of the State in regulating them. It includes both **individual** relations (a worker and the employer) and **collective** relations (unions and management).'),
    quote('Industrial relations are an integral aspect of social relations arising out of employer-employee interaction in modern industries, which are regulated by the State in varying degrees in conjunction with organised social forces and influenced by the existing institutions.', 'ILO\'s description, commonly cited in Indian texts'),
    ul(
      li('**Dale Yoder**: IR refers to the relationships between management and employees, or among employees and their organisations, that arise out of employment.'),
      li('**J.T. Dunlop (1958)**: an **industrial relations system** consists of **actors** (workers and their organisations, managers and their organisations, and specialised government agencies), a **context** (technology, markets and budget, power distribution in society) and an **ideology** that binds them, which together produce a **web of rules**.'),
      li('**ILO**: IR deals with the relationship between the State and employers\' and workers\' organisations, or between the occupational organisations themselves.'),
    ),

    h2('Scope'),
    ul(
      'Labour-management relations at the workplace and industry level.',
      'Relations between trade unions (inter-union and intra-union).',
      '**Collective bargaining**, negotiations and agreements.',
      '**Workers\' participation in management**.',
      'Prevention and **settlement of industrial disputes** (conciliation, arbitration, adjudication).',
      'Standing orders, discipline and **grievance handling**.',
      'The **State\'s role**: labour legislation, labour administration, tripartite bodies.',
      'Labour welfare, working conditions and social security as they affect relations.',
    ),

    h2('Need and importance of good industrial relations'),
    table(
      ['For', 'Benefits'],
      [
        ['**Industry**', 'Uninterrupted production, higher productivity, less wastage, lower costs, easier adoption of new technology'],
        ['**Workers**', 'Fair wages, job security, better working conditions, voice in decisions, dignity'],
        ['**Economy and society**', 'Industrial peace, economic growth, investment climate, social justice, reduced conflict'],
        ['**State**', 'Less need for coercive intervention; better implementation of labour policy'],
      ],
    ),
    h3('Symptoms of poor IR'),
    ul('Strikes, lock-outs, gheraos, go-slows', 'High **absenteeism** and **labour turnover**', 'Indiscipline and frequent grievances', 'Low morale and productivity', 'Inter-union rivalry'),

    h2('Factors that shape IR'),
    table(
      ['Factor', 'Examples'],
      [
        ['Institutional', 'Labour laws, dispute machinery, trade union structure, collective agreements, Codes of Discipline'],
        ['Economic', 'Wages and inflation, employment levels, ownership (public/private), technology, product markets'],
        ['Social', 'Caste, community and family ties, migration, education of workers'],
        ['Political', 'Links of trade unions with political parties, Government policy'],
        ['Psychological', 'Attitudes and perceptions of management and workers, leadership, trust'],
        ['Technological', 'Automation, work organisation, skills'],
      ],
    ),

    h2('Approaches to industrial relations'),
    table(
      ['Approach', 'Key idea', 'Associated with'],
      [
        ['**Unitary**', 'The organisation is one team with a common goal; conflict is abnormal and caused by troublemakers; unions are unnecessary', 'Traditional management thinking'],
        ['**Pluralist**', 'The organisation has groups with different interests; conflict is normal and should be managed through **collective bargaining** and institutions', 'Alan Fox, Clegg, Flanders (Oxford school)'],
        ['**Marxist (radical)**', 'Conflict arises from the capitalist system and the class divide between capital and labour; IR institutions only contain conflict', 'Karl Marx, Richard Hyman'],
        ['**Systems**', 'IR is a sub-system of society with actors, context and ideology that produce a web of rules', '**John T. Dunlop** (*Industrial Relations Systems*, 1958)'],
        ['**Gandhian (trusteeship)**', 'Capital and labour are complementary; employers are **trustees** of wealth; disputes settled by negotiation and **voluntary arbitration**; non-violent strikes only as a last resort', 'Mahatma Gandhi; the **Ahmedabad Textile Labour Association** (1918–20)'],
        ['**Human relations**', 'Workers\' social and psychological needs drive productivity and harmony', 'Elton Mayo (Hawthorne studies)'],
        ['**Oxford approach**', 'IR as the study of **job regulation** institutions', 'Allan Flanders'],
      ],
    ),
    hook('The Dunlop triangle', '**Actors** (workers, managers, government agencies), **Contexts** (technology, market and budget, power), **Ideology** → output: a **web of rules**.'),
    key('Three actors in India', 'Workers and trade unions; employers and their associations; the State (legislature, labour administration, tribunals). See the next topic.'),
    trap('Watch the attributions', [
      '**Dunlop** = systems approach, 1958.',
      '**Flanders** = job regulation; **Fox** = unitary vs pluralist frames of reference.',
      '**Gandhi** = trusteeship and voluntary arbitration (Ahmedabad, 1918).',
    ]),

    h2('Self-test'),
    quiz(
      ['The "systems approach" to industrial relations was developed by:', ['Elton Mayo', 'John T. Dunlop', 'Allan Flanders', 'Karl Marx'], 1, 'Industrial Relations Systems, 1958.'],
      ['Which approach treats conflict as abnormal and unions as unnecessary?', ['Pluralist', 'Unitary', 'Marxist', 'Systems'], 1, ''],
      ['The Gandhian approach to IR emphasises:', ['Class struggle', 'Trusteeship and voluntary arbitration', 'Compulsory adjudication', 'Individual contracts'], 1, ''],
      ['In Dunlop\'s model, the output of the IR system is:', ['Collective agreements only', 'A web of rules', 'Industrial peace', 'Wage policy'], 1, ''],
    ),
    cards([
      ['Unitary', 'One team, common goal; conflict is pathological'],
      ['Pluralist', 'Divergent interests; conflict managed by bargaining'],
      ['Dunlop\'s actors', 'Workers and their organisations, managers and theirs, government agencies'],
      ['Gandhian IR', 'Trusteeship, arbitration, non-violence'],
    ]),
    sources([
      ['V.V. Giri National Labour Institute (research on IR)', 'https://vvgnli.gov.in/'],
    ]),
  ],
};
