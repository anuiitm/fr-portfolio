import { h2, h3, p, ul, li, table, key, trap, note, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Indian Labour Conference (ILC)** is India\'s apex **tripartite** forum, begun in **1942** as the Tripartite Labour Conference and modelled on the ILO. The **Standing Labour Committee (SLC)** is its smaller preparatory body. Both are **non-statutory** and chaired by the **Union Labour Minister**. The ILC has met **46 times**; the last session was on **20–21 July 2015**. A 47th session planned for February 2018 was deferred.',
  blocks: [
    h2('What tripartism means'),
    p('**Tripartism** is the practice of making labour policy through consultation between **Government, employers and workers**. It is the founding principle of the **ILO (1919)**, and India adopted it through the Indian Labour Conference and Standing Labour Committee, and through tripartite bodies such as the **CBT (EPF)**, **ESIC**, Wage Boards and Advisory Boards under the Codes.'),

    h2('Indian Labour Conference'),
    table(
      ['Item', 'Detail'],
      [
        ['Origin', '**1942**, as the **Tripartite Labour Conference** (first meeting in New Delhi, August 1942), during the Second World War; later renamed the Indian Labour Conference'],
        ['Status', '**Non-statutory**, advisory; convened by the Ministry of Labour and Employment'],
        ['Chair', '**Union Minister of Labour and Employment**'],
        ['Composition', '**Central Government**, **all State and UT Governments**, **Central Trade Union Organisations (CTUOs)** and **central organisations of employers**'],
        ['Role', 'Discusses labour policy, legislation and topical issues; its recommendations are implemented by consensus, not by law'],
        ['Sessions', '**46** sessions so far; the 46th on **20–21 July 2015** at Vigyan Bhavan, New Delhi, inaugurated by the Prime Minister'],
      ],
    ),
    h3('Landmark sessions'),
    timeline([
      ['Nov 1942', 'Tripartite conference at which, under Labour Member **B.R. Ambedkar**, the **8-hour working day** was agreed'],
      ['1957 (15th ILC)', '**Norms for the need-based minimum wage**: 3 consumption units per earner; **2,700 calories** per adult; **18 yards** of cloth per person a year (72 yards per family); rent at the rate of minimum area under the Industrial Housing Scheme; fuel, lighting and miscellaneous items at **20%** of the total'],
      ['1958 (16th ILC, Nainital)', '**Code of Discipline** in industry and the **Inter-Union Code of Conduct** adopted'],
      ['Dec 1991', 'Supreme Court in **Workmen v. Reptakos Brett** (reported 1992) adds a further **25%** for children\'s education, medical needs, recreation, festivals, old age and marriage to the 15th ILC norms'],
      ['May 2013 (45th ILC)', 'Recommended that **scheme workers** (anganwadi, ASHA, mid-day meal workers) be treated as workers with minimum wages and social security'],
      ['20–21 Jul 2015 (46th ILC)', 'Last session held; discussed labour law reforms, social security and minimum wages'],
      ['Feb 2018', '**47th ILC** scheduled for 26–27 Feb 2018 was **deferred**; not held since'],
    ]),
    note('Status in 2025–26', 'In July 2025 the Government told Parliament that the 46th ILC (2015) was the last session and that central trade unions had asked for it to be convened; meanwhile it holds **tripartite consultations** on specific issues such as the Labour Codes and their rules.'),

    h2('Standing Labour Committee'),
    ul(
      li('A **smaller tripartite** body that works as the **precursor** to the ILC: it settles the **agenda** and examines issues referred to it.'),
      li('Chaired by the **Union Labour Minister**; members from the Central and some State Governments, CTUOs and employers\' organisations.'),
      li('By practice, the SLC and ILC were to meet **once a year**, but meetings have been irregular. Example: the **47th SLC** revised the agenda for the 46th ILC.'),
    ),

    h2('Other tripartite and bipartite bodies'),
    table(
      ['Body', 'Basis', 'Role'],
      [
        ['Industrial Committees (for example plantations, coal, cement, jute, road transport)', 'Non-statutory', 'Industry-specific tripartite forums'],
        ['CBT, EPF', 'Statutory (SS Code s.4)', 'Administers EPF, EPS and EDLI funds'],
        ['ESIC', 'Statutory (s.5)', 'Administers ESI'],
        ['Central and State Advisory Boards', 'Code on Wages s.42', 'Advise on minimum wages and women\'s employment'],
        ['National OSH Advisory Board', 'OSH Code s.16', 'Advises on safety standards'],
        ['National Social Security Board', 'SS Code s.6', 'Unorganised, gig and platform workers'],
        ['Works Committees, Grievance Redressal Committees', 'IR Code ss.3–4', 'Bipartite, at establishment level'],
      ],
    ),
    key('Code of Discipline (1958)', 'A voluntary code agreed at the 16th ILC. Employers and unions agreed **not to take unilateral action**, to settle disputes through **existing machinery**, to avoid **strikes and lock-outs without notice**, and to use **voluntary arbitration**. Employers agreed to **recognise unions** under the criteria in the Code. It lost force from the late 1960s but shaped later union-recognition rules.'),
    trap('Common confusions', [
      'The **Indian** Labour Conference (tripartite, national) is different from the **International** Labour Conference (the ILO\'s annual assembly in Geneva, held every June).',
      'Both the ILC and the SLC are **non-statutory**.',
      'The 15th ILC (1957) set the need-based minimum wage norms; the **Reptakos Brett** judgment (1991) added 25%.',
    ]),

    h2('Self-test'),
    quiz(
      ['The Indian Labour Conference began in:', ['1919', '1942', '1947', '1957'], 1, 'As the Tripartite Labour Conference in 1942.'],
      ['The last (46th) Indian Labour Conference was held in:', ['2013', '2015', '2018', '2025'], 1, '20–21 July 2015.'],
      ['Need-based minimum wage norms were adopted by the:', ['1st ILC', '15th ILC (1957)', '16th ILC (1958)', '46th ILC'], 1, '15th session, 1957.'],
      ['The Code of Discipline was adopted in:', ['1947', '1957', '1958', '1969'], 2, '16th ILC at Nainital, 1958.'],
      ['Which case added 25% to the 15th ILC norms?', ['Bijay Cotton Mills', 'Reptakos Brett', 'Express Newspapers', 'Crown Aluminium'], 1, 'Workmen v. Reptakos Brett & Co. (decided December 1991, reported 1992).'],
    ),
    cards([
      ['ILC chair', 'Union Minister of Labour and Employment'],
      ['SLC', 'Smaller tripartite body; prepares the ILC agenda'],
      ['47th ILC', 'Planned for 26–27 Feb 2018; deferred'],
      ['15th ILC norms', '3 units, 2,700 calories, 18 yards cloth per person, fuel etc. 20%'],
    ]),
    sources([
      ['PIB: Indian Labour Conference (Lok Sabha reply, 21 Jul 2025)', 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2146472'],
      ['Ministry of Labour: 46th session of the ILC', 'https://www.labour.gov.in/46th-session-indian-labour-conference'],
    ]),
  ],
};
