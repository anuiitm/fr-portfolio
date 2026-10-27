import { h2, h3, p, ul, li, table, key, trap, caselaw, steps, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'A **grievance** is an individual worker\'s complaint about any aspect of employment. India handled it first through the voluntary **Model Grievance Procedure** (Code of Discipline, 1958), then through statutory **Grievance Redressal Committees** (ID Act s.9C, 2010; now **IR Code s.4**, 20+ workers, 30 days). **Discipline** is enforced through **standing orders**; a major penalty requires a fair **domestic enquiry** following **natural justice**: charge-sheet, reply, enquiry, findings, show-cause on penalty, order, appeal.',
  blocks: [
    h2('Grievance handling'),
    p('A **grievance** is any dissatisfaction or complaint, expressed or not, by an individual worker about wages, working conditions, leave, promotion, transfer, discipline or treatment. Unresolved grievances lead to low morale, absenteeism and, when collective, to **industrial disputes**.'),
    h3('Model Grievance Procedure (1958)'),
    p('Adopted with the **Code of Discipline** at the **16th Indian Labour Conference (1958)**. A voluntary, time-bound ladder:'),
    steps([
      ['Step 1: departmental representative or designated officer', 'Worker presents the grievance orally or in writing; answer within **48 hours**.'],
      ['Step 2: head of department', 'If unresolved, the worker (with a union representative if desired) meets the head of department; answer within **3 days**.'],
      ['Step 3: grievance committee', 'A bipartite committee of management and union representatives makes recommendations within **7 days**.'],
      ['Step 4: management decision', 'Management communicates its decision on the committee\'s recommendation, within about **3 days**.'],
      ['Step 5: revision', 'The worker may ask management for a revision.'],
      ['Step 6: voluntary arbitration', 'If still unresolved, the matter may go to voluntary arbitration.'],
    ]),
    h3('Statutory Grievance Redressal Committee'),
    table(
      ['', 'ID Act s.9C (2010 amendment)', 'IR Code s.4 (2020)'],
      [
        ['Threshold', '20+ workmen', '**20+ workers**'],
        ['Members', 'Equal employer and worker members; up to **6**', 'Equal; up to **10**; chairperson alternates yearly; **women** represented at least in proportion to their share'],
        ['Time', '45 days', 'Application within **1 year**; decision within **30 days**'],
        ['Next step', 'Conciliation', 'Conciliation through the union within **60 days**; for termination disputes, direct to the **Tribunal** after **45 days**'],
      ],
    ),

    h2('Discipline'),
    ul(
      li('**Discipline** is orderly conduct according to the rules of the organisation. **Positive** discipline relies on self-control and motivation; **negative** discipline relies on penalties.'),
      li('**Standing orders** (IR Code Chapter IV; model orders for **300+** worker establishments) list acts of **misconduct**, penalties and procedure.'),
      li('**Hot stove rule** (Douglas McGregor): discipline should be **immediate, consistent, impersonal and with advance warning**, like touching a hot stove.'),
    ),
    table(
      ['Typical misconduct (model standing orders)', 'Penalties'],
      [
        ['Wilful insubordination or disobedience; theft, fraud or dishonesty; wilful damage to property; taking bribes; habitual absence or late attendance; habitual breach of rules; riotous or disorderly behaviour; habitual negligence; striking illegally or inciting others; go-slow; sexual harassment', '**Minor**: warning, censure, fine (within limits of the Code on Wages), withholding increment, suspension (as punishment). **Major**: reduction in rank, **discharge**, **dismissal**'],
      ],
    ),

    h2('Domestic enquiry'),
    p('Before imposing a major penalty for misconduct, the employer must hold a **domestic (departmental) enquiry** that follows the standing orders and the principles of **natural justice**: **audi alteram partem** (hear the other side) and **nemo judex in causa sua** (no one should be a judge in their own cause).'),
    steps([
      ['Preliminary inquiry', 'Fact-finding to decide whether there is a case.'],
      ['Suspension (if needed)', 'Pending enquiry; **subsistence allowance** at **50%** for the first **90 days** and **75%** after (IR Code s.38); enquiry ordinarily within **90 days**.'],
      ['Charge-sheet', 'Specific, clear charges with details, so the worker can reply.'],
      ['Reply / explanation', 'Worker submits a written explanation within a reasonable time.'],
      ['Notice of enquiry', 'Date, time, place; appointment of an impartial **enquiry officer**.'],
      ['Enquiry proceedings', 'Management evidence first; worker may **cross-examine** witnesses, produce evidence and be assisted by a **co-worker** (lawyers usually not allowed unless management uses one or the standing orders allow).'],
      ['Findings', 'Enquiry officer records reasoned findings on each charge.'],
      ['Show-cause on penalty', 'Worker given a chance to respond to the proposed punishment.'],
      ['Order of punishment', 'By the competent authority; proportionate to the misconduct.'],
      ['Appeal', 'As provided in the standing orders; later an industrial dispute before the **Tribunal**, which can review the punishment (IR Code s.50, earlier ID Act s.11A).'],
    ]),
    caselaw('Cases on discipline and enquiry', [
      '**Workmen of Firestone Tyre & Rubber Co. v. Management (1973)**: explained the tribunal\'s power under s.11A to re-appraise evidence and alter the punishment.',
      '**Bharat Iron Works v. Bhagubhai Balubhai Patel (1976)**: a finding of victimisation must be based on evidence, not assumed.',
      '**Punjab National Bank v. Kunj Behari Misra (1998)**: if the disciplinary authority disagrees with an enquiry officer\'s findings in the worker\'s favour, it must give the worker a hearing first.',
    ]),
    key('Link to the Codes', [
      'Grievance committee: **IR Code s.4**; standing orders: **ss.28–39**; subsistence allowance: **s.38**; tribunal relief: **s.50**.',
      'Discharging a worker for union activity or on trumped-up charges, or in disregard of natural justice in the enquiry, is an **unfair labour practice** (Second Schedule).',
    ]),
    trap('Numbers', 'Model Grievance Procedure: **48 hours**, **3 days**, **7 days**. GRC: **20 workers**, **10 members**, **30 days**. Subsistence allowance: **50% / 75%**, enquiry in **90 days**.'),

    h2('Self-test'),
    quiz(
      ['Under the IR Code, the maximum number of members of a Grievance Redressal Committee is:', ['6', '8', '10', '12'], 2, 'Section 4(4).'],
      ['The Model Grievance Procedure was adopted in:', ['1947', '1958', '1976', '2010'], 1, 'With the Code of Discipline, 16th ILC.'],
      ['"Audi alteram partem" means:', ['No one should be a judge in their own cause', 'Hear the other side', 'The burden of proof is on the accused', 'Punishment must be proportionate'], 1, ''],
      ['Subsistence allowance after the first 90 days of suspension (delay not due to the worker) is:', ['50%', '60%', '75%', '100%'], 2, 'Section 38(3).'],
    ),
    cards([
      ['Hot stove rule', 'Immediate, consistent, impersonal, with warning (McGregor)'],
      ['Nemo judex in causa sua', 'No one should be a judge in their own cause'],
      ['ID Act s.9C', 'Grievance Redressal Machinery, added in 2010'],
    ]),
    sources([
      ['IR Code, 2020 (text)', 'https://prsindia.org/files/bills_acts/acts_parliament/2020/Industrial%20Relations%20Code,%202020.pdf'],
    ]),
  ],
};
