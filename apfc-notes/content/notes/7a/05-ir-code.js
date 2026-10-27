import { h2, h3, p, ul, li, table, key, trap, fresh, note, hook, facts, steps, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Industrial Relations Code, 2020** (Act 35 of 2020, **104 sections**, 14 chapters, 3 Schedules) merges the Trade Unions Act 1926, the Standing Orders Act 1946 and the Industrial Disputes Act 1947. Its headline numbers are **300** workers (standing orders; permission for lay-off, retrenchment and closure), **51% / 20%** (negotiating union / council), **14 and 60 days** (strike notice, now for **all** establishments), **15 days\' wages** (re-skilling fund), and **two-member Industrial Tribunals** in place of Labour Courts.',
  blocks: [
    h2('The Code at a glance'),
    facts([
      ['35 of 2020', 'Act number; assent 28 Sep 2020'],
      ['104 sections', '14 chapters, 3 Schedules'],
      ['3 laws', 'repealed by Section 104'],
      ['21 Nov 2025', 'in force'],
    ]),
    table(
      ['Chapter', 'Sections', 'Subject'],
      [
        ['I', '1–2', 'Preliminary and definitions'],
        ['II', '3–4', '**Bi-partite forums**: Works Committee (s.3), **Grievance Redressal Committee (s.4)**'],
        ['III', '5–27', '**Trade unions**: registration, **negotiating union or council (s.14)**, funds, immunities, office-bearers, recognition of central and State unions (s.27)'],
        ['IV', '28–39', '**Standing orders** (300 workers), subsistence allowance (s.38)'],
        ['V', '40–41', '**Notice of change** (21 days)'],
        ['VI', '42', '**Voluntary arbitration**'],
        ['VII', '43–61', 'Dispute resolution: conciliation officers, **Industrial Tribunal (s.44)**, **National Industrial Tribunal (s.46)**, conciliation and adjudication (s.53), settlements and awards'],
        ['VIII', '62–64', '**Strikes and lock-outs**'],
        ['IX', '65–76', 'Lay-off, retrenchment and closure (general)'],
        ['X', '77–82', 'Special provisions for establishments with **300+** workers (prior permission)'],
        ['XI', '83', '**Worker Re-skilling Fund**'],
        ['XII', '84', '**Unfair labour practices**'],
        ['XIII', '85–89', 'Offences, penalties, **compounding (s.89)**'],
        ['XIV', '90–104', 'Miscellaneous; **repeal and savings (s.104)**'],
      ],
    ),
    hook('Three laws: 1926, 1946, 1947', '**T**rade Unions, **S**tanding Orders, **I**ndustrial **D**isputes: "**TSID**". The IR Code is the only Code that merged laws all from before Independence.'),

    h2('Key definitions (Section 2)'),
    table(
      ['Term', 'Clause', 'Meaning and what is new'],
      [
        ['Appropriate Government', '2(b)', 'Centre for its establishments, **railways including metro railways**, mines, oilfields, major ports, air transport, telecom, banking, insurance, central PSUs and subsidiaries, and **companies in which the Centre holds at least 51%**. The Centre stays the appropriate Government for a CPSU even if its stake later falls below 50%. For contract-labour disputes, it is the Government that controls the principal establishment'],
        ['Fixed term employment', '**2(o)**', 'Engagement of a worker on a **written contract for a fixed period**. Hours, wages, allowances and benefits **not less than a permanent worker** doing the same work; all statutory benefits **pro rata**; **gratuity after 1 year** of service'],
        ['Industry', '**2(p)**', 'Any **systematic activity** carried on by co-operation between employer and worker (directly or through a contractor) to produce, supply or distribute goods or services to satisfy human wants (not merely spiritual or religious), **whether or not capital is invested or profit is intended**. **Excludes**: charitable, social or philanthropic institutions; **sovereign functions** of Government, including defence research, atomic energy and space; **domestic service**; and any activity notified by the Centre'],
        ['Industrial dispute', '2(q)', 'Dispute between employers and employers, employers and workers, or workers and workers, about employment, non-employment, terms of employment or conditions of labour. **Includes** an individual worker\'s dispute about discharge, dismissal, retrenchment or termination'],
        ['Lay-off', '2(t)', 'Failure, refusal or inability to give work to a worker on the muster roll due to shortage of coal, power or raw material, accumulation of stock, breakdown of machinery or natural calamity. A worker not given work within **2 hours** of reporting is deemed laid off for the day'],
        ['Retrenchment', '2(zh)', 'Termination for any reason other than punishment. **Excludes**: voluntary retirement; superannuation; non-renewal or termination of a contract under its terms; **completion of a fixed-term tenure**; termination for continued ill-health'],
        ['Strike', '**2(zk)**', 'Cessation of work or concerted refusal to work by persons acting in combination. **New**: includes **concerted casual leave on a given day by 50% or more** of the workers'],
        ['Trade union', '2(zl)', 'Any combination, temporary or permanent, formed primarily to regulate relations between workers and employers (or among either), including a **federation** of trade unions'],
        ['Wages', '2(zq)', 'Same definition as the Code on Wages, with the **50% rule**'],
        ['Worker', '**2(zr)**', 'Anyone (except an apprentice) doing manual, skilled, unskilled, technical, operational, clerical or supervisory work, including **working journalists** and **sales promotion employees**. Excludes armed forces, police and prison staff, managerial or administrative staff, and **supervisors drawing more than ₹18,000 a month**. For trade-union purposes (Chapter III) it means all persons employed in trade or industry, including **unorganised workers**'],
      ],
    ),
    trap('Supervisory wage limit', 'IR Code **₹18,000** (Industrial Disputes Act had **₹10,000**). Code on Wages **₹15,000**. Both can be revised by Central notification.'),
    caseNote(),

    h2('Bi-partite forums (Sections 3–4)'),
    table(
      ['', 'Works Committee (s.3)', 'Grievance Redressal Committee (s.4)'],
      [
        ['Threshold', '**100 or more** workers on any day in the preceding 12 months', '**20 or more** workers'],
        ['Mandatory?', 'Only if the Government orders it', '**Yes**, one or more committees'],
        ['Composition', 'Worker representatives **not fewer than** employer representatives', '**Equal** numbers; **maximum 10** members; chairperson alternates yearly between employer and worker sides; **women** represented at least in proportion to their share of the workforce'],
        ['Purpose', 'Promote amity; comment on and reconcile matters of common interest', 'Resolve **individual grievances**'],
        ['Timelines', '—', 'Application within **1 year** of the cause of action; proceedings to be completed in **30 days**; appeal to conciliation officer (through the union) within **60 days**; direct application to the Tribunal after **45 days** of conciliation for individual termination disputes (within **2 years** of termination)'],
      ],
    ),

    h2('Trade unions (Sections 5–27)'),
    table(
      ['Rule', 'Detail'],
      [
        ['Registrar (s.5)', 'Appointed by the **State Government**'],
        ['Application (s.6(1))', 'Any **7 or more** members may apply'],
        ['Minimum membership (s.6(2))', 'At least **10% of the workers or 100 workers, whichever is less**, in the establishment or industry; must be **maintained** at all times, subject to a **minimum of 7** (s.6(4))'],
        ['Deemed registration (s.9(4))', 'Unions validly registered under the 1926 Act are deemed registered under the Code'],
        ['Other laws excluded (s.13)', 'Societies Registration Act, Co-operative Societies Acts and the Companies Act do not apply; registration under them is void'],
        ['Negotiating union (s.14(2)–(3))', 'Only one registered union: it is the **sole negotiating union**. Several unions: the one supported by **51% or more** of workers on the muster roll is the sole negotiating union'],
        ['Negotiating council (s.14(4))', 'If no union has 51%: a council of representatives of unions with **at least 20%** support, **one representative for each 20%**'],
        ['Validity (s.14(6))', '**3 years**, extendable by mutual agreement up to **5 years** in total'],
        ['Funds (s.15)', 'General fund only for prescribed objects; a **separate political fund** from voluntary contributions (no compulsion, no discrimination)'],
        ['Immunities (ss.16–18)', 'No civil suit for acts in furtherance of a trade dispute (inducing breach of contract, interfering with trade); no liability for **criminal conspiracy** under s.120B IPC for lawful union objects; agreements in restraint of trade not void'],
        ['Minors (s.20)', 'A person aged **14 or more** employed in a **non-hazardous** industry may be a member'],
        ['Disqualification of office-bearers (s.21)', 'Under **18**; convicted of an offence of **moral turpitude** (for 5 years after release); disqualified by the Tribunal. **Ministers and holders of an office of profit** cannot be office-bearers'],
        ['Outsiders (s.23)', 'In the **organised** sector, all office-bearers except **one-third or five, whichever is less**, must be employed in the establishment. In the **unorganised** sector, at least **half** must be. Retired or retrenched employees are not outsiders'],
        ['Change of name (s.24)', 'Consent of **two-thirds** of members'],
        ['Disputes (s.22)', 'Trade union disputes go to the **Industrial Tribunal**; civil courts barred'],
        ['Central and State unions (s.27)', 'The Centre may recognise a **Central Trade Union**; a State may recognise a **State Trade Union**'],
      ],
    ),
    key('51 / 20 / 3', 'Sole negotiating union at **51%**; seat on the negotiating council at **20%**, one seat per 20%; recognition valid **3 years** (up to 5 by agreement). The Second NCL had suggested **66% / 25%**.'),

    h2('Standing orders (Sections 28–39)'),
    ul(
      li('**Applicability (s.28)**: industrial establishments employing **300 or more** workers on any day in the preceding 12 months (the 1946 Act: **100**). Not applicable to workers covered by Government service rules (Fundamental Rules, CCS (CCA) Rules, Railway Establishment Code and similar).'),
      li('**Model standing orders (s.29)**: made by the **Central Government**. They apply automatically until the establishment\'s own standing orders are certified. The Central Rules 2026 give model orders for **manufacturing, mining and services**; the services model permits **work from home** by mutual agreement.'),
      li('**Drafting and certification (s.30)**: the employer prepares a draft within **6 months**, consults the unions and sends it to the **certifying officer**, who must certify within **60 days**, failing which it is **deemed certified**. Adopting the model orders is **deemed certification**.'),
      li('**Matters covered (First Schedule)**: classification of workers; hours, holidays, pay days and wage rates; shift working; attendance and late coming; leave; entry and search; closing of sections and stoppage of work; **termination** and notice; **suspension or dismissal for misconduct**; means of redress for unfair treatment; and any other notified matter.'),
      li('**Modification (s.35)**: not within **6 months** of the last certification, except by agreement.'),
      li('**Subsistence allowance (s.38)**: an inquiry into misconduct should ordinarily be completed within **90 days** of suspension. Allowance is **50%** of wages for the first 90 days and **75%** thereafter, if the delay is not due to the worker.'),
    ),

    h2('Notice of change (Sections 40–41)'),
    p('An employer who wants to change conditions of service on any matter in the **Third Schedule** must give notice and wait **21 days**. The Third Schedule covers wages, PF and pension contributions, allowances, hours and rest intervals, leave and holidays, shift working, classification by grades, withdrawal of customary concessions, rules of discipline, rationalisation, and increase or reduction in the number of workers. No notice is needed for changes under a settlement or award, for Government-service-rules staff, or for emergency shift changes made in consultation with the Grievance Redressal Committee.'),

    h2('Dispute resolution machinery (Sections 42–61)'),
    steps([
      ['Grievance Redressal Committee (s.4)', 'Individual grievances in establishments with **20+** workers; 30 days.'],
      ['Conciliation (s.53)', 'By a **conciliation officer** (s.43). No conciliation after **2 years** from when the dispute arose. Report within **45 days** of starting (**14 days** where a strike or lock-out notice was given).'],
      ['Voluntary arbitration (s.42)', 'By written agreement. If the arbitrators are evenly split, an **umpire** decides. The **Arbitration and Conciliation Act 1996 does not apply**. Government may prohibit a strike or lock-out once the reference is notified.'],
      ['Industrial Tribunal (s.44)', 'On application by a party within **90 days** of receiving the failure report. **No government reference needed.**'],
      ['National Industrial Tribunal (s.46)', 'Constituted by the **Centre** for disputes of **national importance** or affecting establishments in **more than one State**; the Centre refers disputes to it (s.54).'],
    ]),
    table(
      ['', 'Industrial Tribunal (s.44)', 'National Industrial Tribunal (s.46)'],
      [
        ['Set up by', 'Appropriate Government', 'Central Government'],
        ['Members', '**Two**: one **Judicial** and one **Administrative** Member', 'Two: Judicial and Administrative'],
        ['Judicial Member', 'Qualifications as prescribed (Central tribunals follow rules under s.184 Finance Act 2017)', '**A present or former High Court Judge**'],
        ['Administrative Member', 'Not below **Joint Secretary** (Centre)', 'Present or former **Secretary to Government of India** (or equivalent) with labour experience'],
        ['Presides', 'Judicial Member', 'Judicial Member'],
        ['Benches', 'Two-member bench decides standing orders, discharge and dismissal, legality of strikes and lock-outs, retrenchment and closure, and trade union disputes; single members decide the rest', '—'],
        ['Decision', '**By consensus**; if the members differ, a Judicial Member of another Tribunal hears the points and the majority decides (s.47)', 'Same'],
        ['Extra role', 'Central Industrial Tribunal also acts as the **EPF Appellate Tribunal**', '—'],
      ],
    ),
    fresh('Labour Courts abolished', 'The Code has **no Labour Courts**. Cases pending in Labour Courts and Tribunals under the ID Act were transferred to the new Tribunals (s.51), and ID Act presiding officers became Judicial Members (s.52). The 2026 amendment (s.104(1A)) keeps the old tribunals working until the new ones are functional.'),
    h3('Settlements and awards'),
    ul(
      li('A settlement in **conciliation** binds all parties, including **all present and future workers** of the establishment. A settlement outside conciliation binds only the **parties to it**.'),
      li('A settlement lasts for the agreed period, or **6 months** if none is agreed, and continues until **60 days** after either party gives notice to end it.'),
      li('An award is enforceable after publication and remains in operation for **1 year** (the Government may shorten or extend it).'),
      li('**Reinstatement (s.50)**: if a dismissal was unjustified, the Tribunal may order reinstatement, lesser punishment or other relief.'),
      li('**s.90**: while a dispute is pending, the employer may not change conditions of service connected with the dispute to the workers\' prejudice, or punish workers for connected misconduct, without the authority\'s written permission.'),
    ),

    h2('Strikes and lock-outs (Sections 62–64)'),
    p('**No person employed in an industrial establishment** (not just public utility services, as under the ID Act) shall strike, and no employer shall lock out:'),
    ul(
      'without notice given **within 60 days before** the strike or lock-out;',
      'within **14 days** of giving such notice;',
      'before the date given in the notice;',
      'during **conciliation** and **7 days** after it ends;',
      'during **Tribunal or National Industrial Tribunal** proceedings and **60 days** after they end;',
      'during **arbitration** (once notified) and **60 days** after it ends;',
      'while a **settlement or award** is in operation on the matters it covers.',
    ),
    ul(
      li('The employer must report strike and lock-out notices to the Government and the conciliation officer within **5 days** (s.62(6)).'),
      li('**Illegal** strikes and lock-outs (s.63): those in breach of s.62, or continued against an order under s.42(7). A lock-out in response to an illegal strike (or vice versa) is **not illegal**.'),
      li('**s.64**: no one may knowingly spend money in support of an illegal strike or lock-out.'),
    ),
    trap('Strike notice: old law vs Code', [
      'ID Act s.22: notice (6 weeks before, 14 days\' wait) only in **public utility services**.',
      'IR Code s.62: the same kind of notice for **every industrial establishment**.',
      '**Mass casual leave** by 50% or more of workers on a day is now a **strike**.',
    ]),

    h2('Lay-off, retrenchment and closure'),
    h3('General rules: Chapter IX (establishments below 300)'),
    table(
      ['Item', 'Rule'],
      [
        ['Lay-off compensation (s.67)', 'Factories, mines and plantations with **50 or more** workers (not seasonal). Worker with **1 year** continuous service (not badli or casual) gets **50% of basic wages + DA** for lay-off days, except weekly holidays. After **45 days** in 12 months, no compensation if agreed, and the worker may be retrenched'],
        ['No lay-off compensation (s.69)', 'If the worker refuses alternative work within **8 km** at the same wages, does not report once a day, or the lay-off is due to a strike or go-slow elsewhere in the establishment'],
        ['Continuous service (s.66)', '1 year = **240 days** actually worked in 12 months (**190** below ground in mines); 6 months = **120 days** (**95** below ground)'],
        ['Retrenchment (s.70)', 'Worker with **1 year** continuous service: **1 month\'s notice** (or wages in lieu), compensation of **15 days\' average pay for every completed year** (or part over 6 months), and notice to Government'],
        ['Last come, first go (s.71)', 'Retrench the last person employed in the category, unless reasons are recorded'],
        ['Re-employment (s.72)', 'Preference to retrenched workers if hiring within **1 year**'],
        ['Transfer of undertaking (s.73)', 'Notice and compensation as if retrenched, unless service is continuous and terms are no less favourable'],
        ['Closure notice (s.74)', '**60 days** to Government. Not for units with **fewer than 50** workers or construction projects'],
        ['Closure compensation (s.75)', 'As for retrenchment. If closure is due to **unavoidable circumstances**, at most **3 months\'** average pay. Financial loss, unsold stock, expiry of lease or exhaustion of minerals are **not** unavoidable circumstances'],
      ],
    ),
    h3('Special rules: Chapter X (300 or more workers)'),
    table(
      ['Item', 'Rule'],
      [
        ['Applies to (s.77)', 'Factories, mines and plantations with **300 or more** workers on average per working day in the preceding 12 months (ID Act: **100**). The appropriate Government may notify a **higher** number'],
        ['Lay-off (s.78)', '**Prior permission** needed, except for shortage of power, natural calamity, or (in mines) fire, flood, excess inflammable gas or explosion. For mines, apply within **30 days** to continue'],
        ['Retrenchment (s.79)', '**3 months\'** notice (or wages in lieu) **and** prior permission'],
        ['Closure (s.80)', 'Apply for permission **90 days** before closure. Not for construction undertakings'],
        ['Deemed permission', 'If the Government does not decide within **60 days**, permission is **deemed granted**; an order is valid for **1 year**'],
      ],
    ),

    h2('Worker Re-skilling Fund (Section 83)'),
    ul(
      li('Set up by the appropriate Government by notification.'),
      li('Employer contributes **15 days\' last-drawn wages** (or another number of days notified by the Centre) **for every retrenched worker**, only in cases of **retrenchment**, over and above retrenchment compensation.'),
      li('Credited to the retrenched worker\'s account within **45 days** of retrenchment, for re-skilling. Under the IR Central Rules 2026, the employer transfers the amount within **10 days** of retrenchment.'),
    ),

    h2('Unfair labour practices (Section 84, Second Schedule)'),
    table(
      ['By employers (16 practices)', 'By workers and unions (8 practices)'],
      [
        ['Threatening dismissal or closure for joining a union; employer-sponsored unions; victimisation; discharge in colourable exercise of rights; giving regular work to contractors to break a strike; mala fide transfers; **good conduct bonds** for legal strikers; keeping workers as **badli, casual or temporary for years**; recruiting during a legal strike; refusing to bargain in good faith; failing to implement an award or settlement; illegal lock-outs', 'Supporting or instigating an **illegal strike**; coercion, picketing that physically bars non-strikers; refusing to bargain in good faith (recognised union); **go-slow**, squatting after hours and **gherao**; demonstrations at the **residence** of employers or managers; wilful damage to property; force or threats to stop others working'],
      ],
    ),
    note('Go-slow defined', 'Go-slow means more than one worker jointly working more slowly than usual to press the employer to concede a demand. "Usual" is the specified standard, or the average of the previous three months.'),

    h2('Offences, penalties and compounding (Sections 85–89)'),
    table(
      ['Offence', 'First offence', 'Repeat'],
      [
        ['Lay-off, retrenchment or closure without permission (ss.78–80)', 'Fine **₹1 lakh – ₹10 lakh**', 'Fine **₹5 lakh – ₹20 lakh** or up to **6 months**, or both'],
        ['Breach of lay-off, retrenchment, transfer or closure compensation rules (ss.67, 70, 73, 75)', '₹50,000 – ₹2 lakh', '₹1 lakh – ₹5 lakh or up to 6 months, or both'],
        ['Unfair labour practice', '₹10,000 – ₹2 lakh', '₹50,000 – ₹5 lakh or up to 3 months, or both'],
        ['**Worker** in an **illegal strike**', 'Fine **₹1,000 – ₹10,000**, or up to **1 month**, or both', '—'],
        ['**Employer** in an **illegal lock-out**', 'Fine **₹50,000 – ₹1 lakh**, or up to **1 month**, or both', '—'],
        ['Instigating an illegal strike or lock-out; financing one', '₹10,000 – ₹50,000, or up to 1 month, or both', '—'],
        ['Breach of settlement or award', '₹20,000 – ₹2 lakh, or up to 3 months, or both', 'Plus up to ₹1,000 a day if continuing'],
        ['Not submitting draft standing orders', '₹50,000 – ₹2 lakh, plus ₹2,000 a day', '—'],
        ['Acting against certified standing orders', '₹1 lakh – ₹2 lakh', '₹2 lakh – ₹4 lakh or up to 3 months, or both'],
        ['Any other contravention', 'Fine up to **₹1 lakh**', '—'],
      ],
    ),
    ul(
      li('**Cognizance (s.87)**: only on complaint by or under the authority of the appropriate Government.'),
      li('**Compounding (s.89)** by a notified Gazetted Officer: **50%** of the maximum fine for fine-only offences; **75%** for offences punishable with imprisonment up to **1 year** and fine. Amounts go to the **Social Security Fund** under s.141 of the Social Security Code. **Not available** for a similar offence within **3 years**.'),
      li('**Penalty by officers (s.85)**: an officer not below **Under Secretary** may impose penalties for certain offences; failure to pay within 90 days attracts a fine of ₹50,000–₹2 lakh.'),
    ),

    h2('Old law vs IR Code: the comparison examiners love'),
    table(
      ['Provision', 'Before (ID Act / TU Act / IESO Act)', 'IR Code, 2020'],
      [
        ['Standing orders apply at', '**100** workers', '**300** workers'],
        ['Permission for lay-off, retrenchment, closure', '**100** workers (Chapter V-B)', '**300** workers (more if notified)'],
        ['Strike notice', 'Only **public utility services**', '**All** industrial establishments'],
        ['Mass casual leave', 'Not covered', 'A **strike** if 50%+ of workers'],
        ['Adjudicating bodies', 'Labour Courts, Industrial Tribunals, National Tribunals', '**Two-member** Industrial Tribunals and **National Industrial Tribunal**'],
        ['Access to Tribunal', 'Only on **Government reference**', '**Direct application** within 90 days of failed conciliation'],
        ['Supervisory wage limit', '₹10,000', '**₹18,000**'],
        ['Grievance committee', '20+ workers, up to **6** members (s.9C)', '20+ workers, up to **10** members; women proportionately represented'],
        ['Union recognition', 'No central law (State laws and the Code of Discipline)', '**Negotiating union (51%) or council (20%)**'],
        ['Fixed-term employment', 'Allowed by rules from 2018', '**Statutory**, with gratuity after 1 year'],
        ['Re-skilling fund', 'None', '**15 days\' wages** per retrenched worker'],
        ['Compounding', 'Very limited', '50% or 75% of maximum fine'],
      ],
    ),

    h2('Self-test'),
    quiz(
      ['Under the IR Code, prior Government permission for retrenchment is needed in establishments with at least:', ['100 workers', '200 workers', '300 workers', '500 workers'], 2, 'Section 77: 300 workers, or a higher number notified by the appropriate Government.'],
      ['A trade union becomes the sole negotiating union if it has the support of at least:', ['33%', '51%', '66%', '75%'], 1, 'Section 14(3): 51% of workers on the muster roll.'],
      ['Mass casual leave counts as a strike when taken on a given day by:', ['25% or more of workers', '33% or more', '50% or more', 'Any 10 workers'], 2, 'Section 2(zk).'],
      ['The Grievance Redressal Committee must be set up in establishments with:', ['10 or more workers', '20 or more workers', '50 or more workers', '100 or more workers'], 1, 'Section 4(1); maximum 10 members.'],
      ['The employer\'s contribution to the Worker Re-skilling Fund for each retrenched worker is:', ['7 days\' wages', '15 days\' wages', '30 days\' wages', '45 days\' wages'], 1, 'Section 83: 15 days\' last-drawn wages, credited to the worker within 45 days.'],
      ['The Judicial Member of a National Industrial Tribunal must be:', ['A District Judge', 'A present or former High Court Judge', 'A Supreme Court Judge', 'A Labour Court presiding officer'], 1, 'Section 46(3).'],
      ['Which of these is NOT retrenchment under Section 2(zh)?', ['Termination due to surplus staff', 'Completion of a fixed-term tenure', 'Termination because a process is automated', 'Termination to cut costs'], 1, 'Completion of the tenure of fixed-term employment is expressly excluded.'],
    ),
    cards([
      ['Strike notice window', 'Given within 60 days before the strike; no strike within 14 days of notice'],
      ['Conciliation report deadline', '45 days (14 days if a strike or lock-out notice was given)'],
      ['Subsistence allowance', '50% for the first 90 days, then 75%'],
      ['Notice of change', '21 days (Third Schedule matters)'],
      ['Deemed permission', 'Lay-off, retrenchment or closure application not decided in 60 days'],
      ['Continuous service', '240 days a year (190 underground); 120 days in 6 months (95 underground)'],
      ['Compounding bar', 'Similar offence within 3 years'],
      ['Outsiders in unions', 'Organised sector: at most one-third or 5, whichever is less'],
    ]),
    sources([
      ['Industrial Relations Code, 2020 (text, PRS)', 'https://prsindia.org/files/bills_acts/acts_parliament/2020/Industrial%20Relations%20Code,%202020.pdf'],
      ['PIB factsheet: Industrial Relations Code, 2020 (23 Nov 2025)', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251123703701.pdf'],
      ['Industrial Relations Code (Amendment) Act, 2026 (Gazette)', 'https://www.labour.gov.in/static/uploads/2026/02/91ef39e2096112f8b798e6c45c732e2f.pdf'],
    ]),
  ],
};

function caseNote() {
  return {
    t: 'callout',
    kind: 'case',
    title: 'Why the "industry" definition matters: the Bangalore Water Supply case',
    text: 'In **Bangalore Water Supply & Sewerage Board v. A. Rajappa (1978)**, a seven-judge bench (Justice **V.R. Krishna Iyer**) laid down the **triple test**: systematic activity, organised by co-operation between employer and employee, for producing goods or services for human wants. It held that hospitals, educational and research institutions and clubs could be "industries". The IR Code codifies this test but **carves out** charitable institutions, sovereign functions (including defence research, atomic energy and space) and domestic service.',
  };
}
