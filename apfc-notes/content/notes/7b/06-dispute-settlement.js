import { h2, h3, p, ul, li, table, key, trap, caselaw, steps, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Disputes are settled through a ladder of methods: **bipartite** (collective bargaining, Works Committee, Grievance Redressal Committee), **conciliation** by a Government officer, **voluntary arbitration**, and **adjudication** by tribunals. The **IR Code** keeps conciliation and arbitration, **abolishes Labour Courts, Boards of Conciliation and Courts of Inquiry**, sets up **two-member Industrial Tribunals** and a **National Industrial Tribunal**, and lets parties go **directly to a Tribunal** within 90 days of failed conciliation.',
  blocks: [
    h2('The settlement ladder'),
    steps([
      ['Bipartite negotiation', 'Collective bargaining; Works Committee (100+ workers); Grievance Redressal Committee (20+ workers).'],
      ['Conciliation', 'A neutral Government conciliation officer helps the parties reach a settlement; no power to impose one.'],
      ['Voluntary arbitration', 'Parties agree in writing to refer the dispute to an arbitrator of their choice, whose award binds them.'],
      ['Adjudication', 'Compulsory, binding decision by an Industrial Tribunal or the National Industrial Tribunal.'],
    ]),

    h2('Collective bargaining'),
    p('Negotiation between an employer (or employers\' association) and a **union** (or unions) on wages and conditions of employment, leading to a **collective agreement** or **settlement**. The term was coined by **Sidney and Beatrice Webb** (*Industrial Democracy*, 1897).'),
    table(
      ['Aspect', 'Detail'],
      [
        ['Levels', '**Plant/enterprise** (most common in private sector); **industry** (banks, coal, steel, ports, plantations); **national** (rare)'],
        ['Types (Walton & McKersie, 1965)', '**Distributive** (win-lose, dividing a fixed pie); **integrative** (win-win problem solving); **attitudinal structuring** (shaping relationships); **intra-organisational** (building consensus within each side)'],
        ['Pre-conditions', 'Strong, representative, recognised unions; willingness to bargain in good faith; freedom of association; agreed procedures'],
        ['In India', 'Hindered by multiple unions, political rivalry, and reliance on Government machinery; supported by union recognition rules'],
        ['Legal effect', 'A written agreement signed by the parties and sent to the Government and conciliation officer is a **settlement** (IR Code s.2(zi)); binding on the parties (s.57(1))'],
        ['Under the IR Code', '**Negotiating union** (51%) or **negotiating council** (unions with 20%+) negotiates with the employer (s.14); refusing to bargain in good faith is an **unfair labour practice**'],
      ],
    ),
    p('India has **not ratified ILO Convention 98** (Right to Organise and Collective Bargaining) or **Convention 87** (Freedom of Association).'),

    h2('Conciliation'),
    ul(
      li('**Conciliation officers** are appointed by the appropriate Government (IR Code s.43); in the central sphere they are officers of the **CLC(C)**.'),
      li('Conciliation is **mandatory** when a **strike or lock-out notice** is given, and may be held whenever a dispute exists or is apprehended (s.53(1)). Not after **2 years** from when the dispute arose.'),
      li('The officer investigates and tries to bring about a fair and amicable settlement. If successful: a **memorandum of settlement** signed by the parties, sent to the Government.'),
      li('If unsuccessful: a **failure report** within **45 days** of commencement (**14 days** where a strike or lock-out notice was given), extendable by agreement.'),
      li('A **settlement in conciliation** binds **all parties to the dispute, including all present and future workers** of the establishment.'),
      li('**Old law**: the ID Act also had **Boards of Conciliation** and **Courts of Inquiry**. The IR Code does **not** retain them.'),
    ),

    h2('Voluntary arbitration'),
    ul(
      li('**IR Code s.42**: by **written agreement**, before a dispute is referred to a Tribunal. With an even number of arbitrators, an **umpire** decides if they are equally divided.'),
      li('A copy goes to the appropriate Government and the conciliation officer. If the parties represent the **majority of each side**, the Government may notify it so that others concerned can be heard, and may **prohibit** any continuing strike or lock-out.'),
      li('The **Arbitration and Conciliation Act, 1996 does not apply**.'),
      li('Promoted by the **Code of Discipline (1958)** and the **National Arbitration Promotion Board (1967)**; Gandhi\'s Ahmedabad model relied on it. Use in India remains limited.'),
    ),

    h2('Adjudication'),
    table(
      ['', 'Industrial Disputes Act, 1947', 'IR Code, 2020'],
      [
        ['Bodies', '**Labour Courts** (Second Schedule matters), **Industrial Tribunals** (Second and Third Schedule matters), **National Tribunals**', '**Industrial Tribunals** and a **National Industrial Tribunal**; **Labour Courts abolished**'],
        ['Composition', 'One-person bodies (presiding officer)', '**Two members**: a **Judicial Member** and an **Administrative Member**'],
        ['How a dispute reaches it', '**Reference by the appropriate Government** (s.10), a discretionary step', '**Direct application** by a party within **90 days** of receiving the conciliation failure report (s.53(6)); individual workers after **45 days** of applying for conciliation (s.4(10))'],
        ['National body', 'National Tribunal (s.7B)', 'National Industrial Tribunal (s.46): Judicial Member a present or former **High Court Judge**; Administrative Member of **Secretary** rank'],
        ['Decision', 'Award by presiding officer', 'By **consensus**; if the members differ, a Judicial Member of another Tribunal hears the points and the majority decides'],
      ],
    ),
    ul(
      li('Awards remain in operation for **1 year** from enforceability (Government may shorten or extend).'),
      li('Tribunals can order **reinstatement**, lesser punishment or other relief in dismissal cases (s.50; earlier s.11A ID Act).'),
      li('During proceedings, employers may not change service conditions connected with the dispute to the workers\' prejudice or punish them without permission (s.90; earlier s.33).'),
    ),
    caselaw('Key judgments on the machinery', [
      '**Workmen of Firestone Tyre v. Management (1973)**: explained the tribunal\'s power under s.11A to re-examine punishment.',
      '**Uttar Pradesh State Brassware Corp. v. Uday Narain Pandey (2006)**: reinstatement with full back wages is not automatic.',
    ]),
    key('What changed and why it matters', [
      'Faster access: no more waiting for a Government reference.',
      'Fewer forums: Labour Courts, Boards of Conciliation and Courts of Inquiry gone.',
      'Two-member tribunals combine judicial and administrative experience.',
      'Transition: old tribunals continue until the new ones are functional (**s.104(1A)**, added by the 2026 amendment).',
    ]),
    trap('Timelines', 'GRC: **30 days**. Conciliation report: **45 days** (14 if strike notice). Application to Tribunal: within **90 days** of the failure report. Individual worker direct to Tribunal: after **45 days** of conciliation request, within **2 years** of termination. Settlement: **6 months** default, then until **60 days** after notice to end it. Award: **1 year**.'),

    h2('Self-test'),
    quiz(
      ['Under the IR Code, a party may apply directly to the Tribunal within how many days of receiving the conciliation failure report?', ['30', '45', '60', '90'], 3, 'Section 53(6).'],
      ['Which body under the ID Act has NOT been retained by the IR Code?', ['Conciliation officer', 'Industrial Tribunal', 'Labour Court', 'National tribunal-type body'], 2, 'Labour Courts, Boards of Conciliation and Courts of Inquiry are gone.'],
      ['The Arbitration and Conciliation Act, 1996 applies to arbitration under the IR Code:', ['Yes, fully', 'Only for awards', 'No', 'Only for NIT cases'], 2, 'Section 42(8).'],
      ['The four sub-processes of collective bargaining were described by:', ['Webbs', 'Walton and McKersie', 'Dunlop', 'Flanders'], 1, 'A Behavioral Theory of Labor Negotiations, 1965.'],
    ),
    cards([
      ['Collective bargaining (term)', 'Sidney and Beatrice Webb, 1897'],
      ['National Arbitration Promotion Board', 'Set up 1967'],
      ['s.11A ID Act → s.50 IR Code', 'Tribunal\'s power to set aside dismissal and grant relief'],
      ['s.33 ID Act → s.90 IR Code', 'No change in conditions during pendency of proceedings'],
    ]),
    sources([
      ['IR Code, 2020 (text)', 'https://prsindia.org/files/bills_acts/acts_parliament/2020/Industrial%20Relations%20Code,%202020.pdf'],
      ['PIB factsheet: IR Code', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251123703701.pdf'],
    ]),
  ],
};
