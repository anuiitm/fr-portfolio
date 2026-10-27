import { h2, h3, p, ul, li, table, key, trap, fresh, note, hook, facts, steps, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **OSH Code, 2020** (Act 37 of 2020, **143 sections**, 14 chapters) merges **13** laws, including the Factories, Mines, Plantations, Contract Labour, Inter-State Migrant Workmen and BOCW Acts. Its headline numbers: establishment = **10+** workers; factory = **20** (with power) / **40** (without); contract labour Part = **50**; migrant worker Part = **10**; **8-hour day**, overtime at **2×** with consent; leave after **180 days**; women may work at night with consent; free **annual health check-up**; **appointment letters** for all.',
  blocks: [
    h2('The Code at a glance'),
    facts([
      ['37 of 2020', 'Act number; assent 28 Sep 2020'],
      ['143 sections', 'replace 620 sections of 13 Acts'],
      ['13 laws', 'repealed by Section 143'],
      ['1 registration', 'instead of 6; one licence instead of 4; one return instead of 21'],
    ]),
    table(
      ['Chapter', 'Sections', 'Subject'],
      [
        ['I', '1–2', 'Preliminary and definitions'],
        ['II', '3–5', '**Registration** (electronic, deemed registration)'],
        ['III', '6–15', '**Duties of employers and employees**; notice of accidents, dangerous occurrences and diseases; employee rights'],
        ['IV', '16–22', '**National and State OSH Advisory Boards**; standards; **Safety Committee and safety officers**'],
        ['V', '23', 'Health, safety and working conditions'],
        ['VI', '24', '**Welfare** (canteen, crèche, rest rooms, welfare officer)'],
        ['VII', '25–32', '**Hours of work and annual leave**'],
        ['VIII', '33', 'Registers, records, returns'],
        ['IX', '34–42', '**Inspector-cum-Facilitators**, third-party audit, medical officers'],
        ['X', '43–44', '**Employment of women**'],
        ['XI', '45–93', 'Special provisions: **contract labour** (Part I), **inter-State migrant workers** (Part II), **audio-visual workers** (III), **mines** (IV), **beedi and cigar** (V), **factories** (VI), **plantations** (VII)'],
        ['XII', '94–114', 'Offences and penalties; **compounding (s.114)**'],
        ['XIII', '115', '**Social Security Fund** for unorganised workers'],
        ['XIV', '116–143', 'Miscellaneous; common licence (s.119); exemptions (ss.127–128); **repeal (s.143)**'],
      ],
    ),

    h2('The 13 laws it replaced'),
    table(
      ['#', 'Act', 'Year'],
      [
        ['1', '**Factories Act**', '1948'],
        ['2', 'Plantations Labour Act', '1951'],
        ['3', '**Mines Act**', '1952'],
        ['4', 'Working Journalists and Other Newspaper Employees (Conditions of Service) and Misc. Provisions Act', '1955'],
        ['5', 'Working Journalists (Fixation of Rates of Wages) Act', '1958'],
        ['6', 'Motor Transport Workers Act', '1961'],
        ['7', 'Beedi and Cigar Workers (Conditions of Employment) Act', '1966'],
        ['8', '**Contract Labour (Regulation and Abolition) Act**', '1970'],
        ['9', 'Sales Promotion Employees (Conditions of Service) Act', '1976'],
        ['10', '**Inter-State Migrant Workmen (RE&CS) Act**', '1979'],
        ['11', 'Cine-Workers and Cinema Theatre Workers (Regulation of Employment) Act', '1981'],
        ['12', 'Dock Workers (Safety, Health and Welfare) Act', '1986'],
        ['13', '**Building and Other Construction Workers (RE&CS) Act**', '1996'],
      ],
    ),
    hook('Group the 13 by type', '**Premises** (4): Factories, Mines, Plantations, Dock Workers. **Sectors** (5): two Working Journalists Acts, Motor Transport, Beedi and Cigar, Sales Promotion. **Mobile or indirect labour** (4): Contract Labour, Inter-State Migrant, Cine-Workers, BOCW.'),

    h2('Key definitions (Section 2)'),
    table(
      ['Term', 'Clause', 'Meaning'],
      [
        ['Establishment', '**2(v)**', '(i) Any place where industry, trade, business, manufacture or occupation is carried on with **10 or more workers**; (ii) motor transport, newspaper, audio-visual production, building and construction work or plantation with **10 or more**; (iii) a factory (for registration) with 10+; (iv) a **mine** or **dock** (no threshold). The **Centre may remove the threshold** for hazardous or life-threatening activities'],
        ['Factory', '**2(w)**', 'Premises with a manufacturing process and **20 or more** workers **with power**, or **40 or more without power** (Factories Act: **10 / 20**). Excludes armed forces mobile units, railway running sheds, and **hotels, restaurants and eating places**. Where an existing State law set different numbers, the State numbers continue until amended'],
        ['Worker', '2(zzl)', 'Manual, unskilled, skilled, technical, operational, clerical or supervisory employee, including working journalists and sales promotion employees. Excludes armed forces, police and prison staff, managerial or administrative staff, and supervisors drawing **more than ₹18,000** a month'],
        ['Core activity', '**2(p)**', 'The activity for which the establishment is set up, and anything essential to it. **Not core** (unless the establishment exists for them): sanitation, **security**, **canteen and catering**, **loading and unloading**, support hospitals, schools and guest houses, courier, civil construction and maintenance, gardening, housekeeping and laundry, **transport** including ambulance, and intermittent activities'],
        ['Inter-State migrant worker', '**2(zf)**', 'Recruited in one State (directly or through a contractor) for work in another, **or who migrates on their own** and gets work in the destination State, drawing wages up to **₹18,000** a month (or more if notified)'],
        ['Plantation', '2(zx)', 'Land of **5 hectares or more** growing tea, coffee, rubber, cinchona or cardamom (or other notified plants)'],
        ['Adult', '2(b)', 'A person who has completed **18 years**'],
        ['Week', '2(zzk)', 'Seven days beginning at **midnight on Saturday**'],
      ],
    ),
    trap('Factory thresholds', 'Factory: **20** with power, **40** without (was 10 / 20). But for **registration** under Chapter II, a factory with just **10** workers counts as an establishment. Hotels and restaurants are **excluded** from "factory".'),

    h2('Registration (Chapter II)'),
    ul(
      li('Every establishment the Code applies to must apply **electronically** for registration within **60 days** of applicability (late fees allowed).'),
      li('If the registering officer does not act within the prescribed time, the establishment is **deemed registered** and the certificate is **auto-generated**.'),
      li('Changes in ownership or particulars must be reported within **30 days**; closure within **30 days**, with a certificate that all dues are paid.'),
      li('Establishments already registered under any central labour law are **deemed registered**.'),
      li('Appeal against a registration order within **30 days**; decided within **30 days**.'),
      li('Factories, mines, contract labour and construction work must give **electronic notice** before starting and on closing operations (s.5).'),
    ),

    h2('Duties and rights (Chapter III)'),
    h3('Employer\'s duties (Section 6)'),
    ul(
      'Keep the workplace free from hazards that cause or may cause injury or occupational disease.',
      'Comply with the national OSH standards (s.18) and rules.',
      li('Provide **free annual health examination** to employees of the age or class prescribed. The OSH Central Rules 2026 require it for workers **above 40 years**.'),
      'Maintain a safe working environment; dispose of hazardous and toxic waste, including **e-waste**.',
      li('Issue an **appointment letter** to every employee, with prescribed details. Existing employees without one had to receive it **within 3 months** of the Code\'s commencement.'),
      'Charge employees nothing for safety measures or medical examinations.',
    ),
    h3('Notices (Sections 10–12)'),
    ul(
      'Accident causing **death**, or injury that keeps a person off work for **48 hours or more**: notice to the authorities. For deaths in plantations, construction and other establishments, an inquiry within **2 months**.',
      'Dangerous occurrences, even without injury, must be reported.',
      'Notifiable **occupational diseases** (Third Schedule) must be reported by the employer, and by any doctor who treats the worker (a doctor who fails to report faces a penalty up to ₹10,000).',
    ),
    h3('Employees\' duties and rights (Sections 13–14)'),
    ul(
      'Duties: take reasonable care, follow standards, co-operate, **report unsafe situations**, not misuse safety appliances.',
      li('**Right to information** on health and safety, and to represent directly or through the Safety Committee.'),
      li('**Right to raise imminent danger**: a worker who reasonably fears imminent serious injury or death may notify the employer and the Inspector-cum-Facilitator together. If the employer disagrees, the Inspector-cum-Facilitator\'s decision is final.'),
    ),

    h2('Boards, standards and safety machinery (Chapter IV)'),
    table(
      ['Body', 'Detail'],
      [
        ['**National Occupational Safety and Health Advisory Board** (s.16)', 'Constituted by the Centre; **one tripartite board replacing six** earlier boards. **Chairperson: Secretary, Ministry of Labour and Employment**. Members include DG FASLI (Mumbai), DG Mines Safety (Dhanbad), Chief Controller of Explosives (Nagpur), Chairman CPCB, Chief Labour Commissioner (Central), labour Principal Secretaries of **4 States** by rotation, DG ESIC, DG Health Services, **5 employer** and **5 employee** representatives, a professional body, **5 eminent OSH experts**, and a Joint Secretary as Member Secretary. Non-official terms: **3 years**'],
        ['State OSH Advisory Board (s.17)', 'Constituted by each State; may set up technical committees, including **site appraisal committees**'],
        ['National standards (s.18)', 'Declared by the **Centre** for factories, mines, docks, construction, plantations and other establishments'],
        ['Safety Committee (s.22(1))', 'The appropriate Government may require it; worker representatives **not fewer than** employer representatives'],
        ['Safety officers (s.22(2))', 'Mandatory in a **factory with 500+** workers, a **hazardous-process factory with 250+**, **construction work with 250+**, and a **mine with 100+**'],
      ],
    ),
    note('Safety committee vs safety officer', 'The PIB factsheet describes the 500 / 250 / 100 thresholds as those for **Safety Committees**, and the rules require committees at these sizes. In the Code itself, Section 22(2) uses these thresholds for appointing **safety officers**. If a question quotes the Code, go with safety officers.'),

    h2('Health, welfare and working conditions (Chapters V–VI)'),
    table(
      ['Facility', 'OSH Code threshold', 'Factories Act 1948 (for comparison)'],
      [
        ['**Canteen**', '**100 or more** workers, **including contract labour**', '250 workers'],
        ['**Crèche** (children under 6)', '**More than 50** workers (for all workers, not only women); common crèches allowed', '30 women workers'],
        ['Rest rooms and lunch room', 'More than **50** workers (factories and mines)', '150 workers'],
        ['**Welfare officer**', '**250 or more** workers (factory, mine or plantation)', '500 workers'],
        ['Ambulance room', 'More than **500** workers (factory, mine, construction)', '500 workers'],
        ['First aid, drinking water, latrines, washing, lockers', 'All establishments; **separate facilities for male, female and transgender** employees', '—'],
      ],
    ),
    p('Section 23 lets the Centre prescribe standards on cleanliness, ventilation, temperature and humidity, dust and fumes, drinking water, overcrowding, lighting, latrines and waste treatment.'),

    h2('Hours of work and leave (Chapter VII)'),
    table(
      ['Item', 'OSH Code rule'],
      [
        ['Daily limit (s.25)', 'No worker to work more than **8 hours a day**; intervals and spread-over notified by Government'],
        ['Weekly limit (OSH Central Rules)', '**48 hours a week**. Flexible patterns: **12 hours a day in a 4-day week**, **9.5 hours in a 5-day week**, **8 hours in a 6-day week**'],
        ['Weekly holiday (s.26)', 'Not more than **6 days** a week. Compensatory holidays within the month or the next **2 months** if a holiday is lost'],
        ['Overtime (s.27)', '**Twice** the rate of wages; only **with the worker\'s consent**; calculated daily or weekly, whichever is more favourable; the total overtime cap is prescribed by Government (the Factories Act allowed at most **75 hours a quarter**)'],
        ['Night shift (s.28)', 'Weekly holiday = 24 hours from the end of the shift; hours after midnight count for the previous day'],
        ['Overlapping shifts (s.29)', 'Prohibited, except with exemption (not in mines)'],
        ['Double employment (s.30)', 'No work in a factory or mine within **12 hours** of working in a similar establishment'],
        ['Adolescents', 'Hours governed by the **Child and Adolescent Labour Act 1986**'],
      ],
    ),
    h3('Annual leave with wages (Section 32)'),
    table(
      ['Item', 'OSH Code', 'Factories Act 1948'],
      [
        ['Eligibility', 'Worked **180 days** or more in the calendar year', '240 days'],
        ['Rate', '1 day for every **20 days** of work; adolescents and **underground miners**: 1 for every **15**', '1 per 20 (adults); 1 per 15 (children)'],
        ['New joiners', 'Eligible if they work **one-fourth** of the remaining days of the year', 'Two-thirds of remaining days'],
        ['Carry forward', 'Up to **30 days**; refused leave carried without limit', '30 days'],
        ['Encashment', '**On demand at the end of the calendar year**; leave above 30 days encashable', 'Only on leaving service'],
        ['On exit', 'Leave wages within **2 working days** (discharge, dismissal, quitting) or **2 months** (superannuation, death)', '—'],
      ],
    ),
    p('Lay-off, maternity leave and leave taken count towards the 180 days, but no leave is earned for those days.'),

    h2('Women (Chapter X)'),
    ul(
      li('**Section 43**: women may be employed in **all establishments for all types of work**, and, **with their consent**, **before 6 a.m. and after 7 p.m.**, subject to conditions on safety, holidays and working hours.'),
      li('**Section 44**: where work is dangerous to women\'s health and safety, the Government may require **adequate safeguards** before women are employed. This replaces outright bans.'),
      li('Crèche for establishments with more than 50 workers; separate facilities for women and transgender employees.'),
    ),
    trap('Night work', 'The Factories Act (s.66) barred women between **7 p.m. and 6 a.m.** except by exemption. The Code allows it **with consent**, plus safety, transport and holiday conditions. The hours "before 6 a.m. and beyond 7 p.m." are asked directly.'),

    h2('Contract labour (Chapter XI, Part I)'),
    table(
      ['Rule', 'Detail'],
      [
        ['Applicability (s.45)', 'Every establishment employing **50 or more** contract labour, and every **manpower supply contractor** with 50 or more, on any day in the preceding 12 months (CLRA Act: **20**). Not for intermittent or casual work (work over **120 days** a year, or **60 days** if seasonal, is not intermittent)'],
        ['Licence (s.47)', 'Contractors need a licence. A contractor who meets the criteria gets a general licence; otherwise a **work-specific licence**. Contractors working in several States can get a single **all-India licence** from the Central authority (valid **5 years**). Common licence for factory, beedi and contract labour, issued within **45 days** or **deemed issued** (s.119)'],
        ['Welfare (s.53)', 'The **principal employer** provides welfare facilities (ss.23–24) to contract labour'],
        ['Unlicensed contractor (s.54)', 'Engaging contract labour through an unlicensed contractor is a contravention by the principal employer'],
        ['Wages (s.55)', 'Contractor pays through **bank or electronic mode** and informs the principal employer. If the contractor defaults, the **principal employer pays** and recovers from the contractor; Government may pay from the contractor\'s **security deposit**'],
        ['Experience certificate (s.56)', 'Contractor must issue on demand'],
        ['Core activities (s.57)', 'Contract labour **prohibited in core activities**, **except** where the activity is normally done through contractors; does not need full-time workers for most of the day; or there is a **sudden increase** in work to be done in a set time. A **designated authority** advises the Government on core vs non-core'],
      ],
    ),
    fresh('What changed from the CLRA Act 1970', 'Threshold **20 → 50**; **Central and State Advisory Contract Labour Boards abolished** (a designated authority advises instead); "abolition" is replaced by a statutory list of **non-core activities**; all-India licence; deemed licences.'),

    h2('Inter-State migrant workers (Chapter XI, Part II)'),
    ul(
      li('Applies to establishments employing **10 or more** inter-State migrant workers on any day in the preceding 12 months (s.59).'),
      li('Covers workers recruited through contractors, recruited directly, **and those who migrate on their own** (the 1979 Act covered only contractor-recruited workers).'),
      li('Employer or contractor duties (s.60): suitable conditions of work; report fatal accidents or serious injury to authorities of **both States** and the next of kin; extend **all benefits** (ESI, EPF, health check-ups) available to other workers.'),
      li('**Journey allowance (s.61)**: a lump sum for a **to-and-fro journey to the native place once a year**.'),
      li('**Portability (s.62)**: option to draw **PDS rations** in the native or destination State, and to get **BOCW cess fund** benefits in the destination State.'),
      li('**Toll-free helpline** (s.63) and **study** of migrant workers (s.64).'),
      li('**s.65**: any debt a migrant worker owes the contractor or principal employer is **extinguished** when the employment ends.'),
      li('Establishments must declare the number of migrant workers when registering.'),
    ),

    h2('Other special provisions'),
    table(
      ['Part', 'Key provisions'],
      [
        ['**Audio-visual workers** (Part III)', 'No one employed as an audio-visual worker without a **written agreement** registered with a notified authority. Covers films, web serials, TV, reality and sports shows, dubbing artists and stunt persons'],
        ['**Mines** (Part IV)', 'A sole **manager** for each mine; emergency powers; **no one below 18** may work in a mine (apprentices and trainees **16+** under supervision)'],
        ['**Beedi and cigar** (Part V)', 'Licence for industrial premises; no work at private dwellings except by the owner and family'],
        ['**Factories** (Part VI)', 'State rules for **hazardous processes** (First Schedule lists 40 industries); **site appraisal committees** to recommend within **30 days**; compulsory disclosure by occupiers; emergency standards; permissible exposure limits (Second Schedule)'],
        ['**Plantations** (Part VII)', 'Educational facilities, housing and medical facilities; plantation employers may use **ESI** for medical care'],
      ],
    ),

    h2('Enforcement, offences and compounding (Chapters IX, XII, XIII)'),
    ul(
      li('**Inspector-cum-Facilitators** with web-based **randomised inspection**; **third-party audit and certification** for start-ups and classes of establishments (s.34).'),
      li('**Improvement notice (s.110)**: before prosecution, the employer gets **30 days** to comply, except after an **accident** or for a repeat within **3 years**. Complaint must be filed within **6 months** of the Inspector-cum-Facilitator learning of the offence.'),
    ),
    table(
      ['Offence', 'Punishment'],
      [
        ['General contravention (s.94)', 'Penalty **₹2 lakh – ₹3 lakh**; ₹2,000 a day if continued'],
        ['Obstructing an Inspector-cum-Facilitator (s.95)', 'Up to **3 months** or fine up to **₹1 lakh**, or both; repeat: 6 months or ₹1–2 lakh'],
        ['Breach of duties in **hazardous processes** (s.102)', 'Up to **2 years** and fine up to **₹5 lakh**; ₹25,000 a day if continued; beyond a year after conviction: up to **3 years** or **₹20 lakh**'],
        ['Contravention causing **death** (s.103(1)(a))', 'Up to **2 years**, or fine **not less than ₹5 lakh**, or both'],
        ['Contravention causing **serious bodily injury** (s.103(1)(b))', 'Up to **1 year**, or fine **₹2 lakh – ₹4 lakh**, or both'],
        ['Repeat under s.103', '**Double** the punishment'],
      ],
    ),
    key('Victim compensation', 'Under Section 103, the court may direct that **at least 50%** of the fine be paid as **compensation to the victim** or, in case of death, to the legal heirs.'),
    ul(
      li('**Compounding (s.114)**: penalties at **50%** of the maximum; offences at **75%** of the maximum fine. Not for a repeat within **3 years**. Failure to comply with the order costs a further **20%**.'),
      li('**Social Security Fund (s.115)**: compounding amounts and certain penalties go to a fund for the **welfare of unorganised workers**.'),
      li('**Exemptions**: the Government may exempt establishments (s.127); States may exempt **new factories** to create jobs; during a **public emergency, disaster or pandemic**, exemptions for up to **1 year at a time** (s.128).'),
    ),

    h2('Old law vs OSH Code: summary'),
    table(
      ['Item', 'Before', 'OSH Code'],
      [
        ['Factory threshold', '10 (power) / 20 (no power)', '**20 / 40**'],
        ['Contract labour law applies at', '20', '**50**'],
        ['Registrations', '6 laws, 6 registrations', '**1** electronic registration (10+ workers)'],
        ['Advisory boards', '6 boards', '**1** National OSH Advisory Board'],
        ['Leave eligibility', '240 days', '**180 days**'],
        ['Women at night', 'Restricted', '**Allowed with consent**'],
        ['Appointment letter', 'Not mandatory', '**Mandatory**'],
        ['Health check-up', 'Only certain hazardous jobs', '**Annual**, free (workers above 40 under the Central Rules)'],
        ['Migrant worker coverage', 'Only contractor-recruited', 'Also **self-migrated**; journey allowance; portability'],
        ['Registers', '84', '**8**'],
      ],
    ),

    h2('Self-test'),
    quiz(
      ['Under the OSH Code, a premises using power becomes a "factory" at:', ['10 workers', '20 workers', '40 workers', '50 workers'], 1, 'Section 2(w): 20 with power, 40 without.'],
      ['The contract labour provisions apply to establishments employing at least:', ['20 contract workers', '30', '50', '100'], 2, 'Section 45: fifty or more.'],
      ['The chairperson of the National OSH Advisory Board is:', ['Union Labour Minister', 'Secretary, Ministry of Labour and Employment', 'DG, FASLI', 'Chief Labour Commissioner (Central)'], 1, 'Section 16(2)(a).'],
      ['A worker becomes eligible for annual leave with wages after working in a calendar year for:', ['120 days', '180 days', '240 days', '90 days'], 1, 'Section 32: 180 days (earlier 240).'],
      ['Canteen is required where the number of workers, including contract labour, is at least:', ['50', '100', '250', '500'], 1, 'Section 24(1)(v): one hundred or more.'],
      ['When a safety violation causes death, the court may direct what share of the fine to go to the victim\'s heirs?', ['At least 25%', 'At least 50%', 'At least 75%', 'The whole'], 1, 'Proviso to Section 103(1).'],
      ['Which is NOT a core activity under Section 2(p), unless the establishment exists for it?', ['Manufacturing the main product', 'Canteen and catering', 'Assembly of the main product', 'Quality testing of output'], 1, 'Canteen and catering, security, sanitation, loading and unloading, transport and similar support services are non-core.'],
    ),
    cards([
      ['Women at night', 'With consent, before 6 a.m. and beyond 7 p.m.'],
      ['Safety officers', 'Factory 500+, hazardous factory 250+, construction 250+, mine 100+'],
      ['Crèche', 'More than 50 workers, children under 6, for all workers'],
      ['Welfare officer', '250+ workers (factory, mine, plantation)'],
      ['Migrant worker Part applies at', '10 or more inter-State migrant workers'],
      ['Leave rate', '1 day per 20 days worked (1 per 15 for adolescents and underground miners)'],
      ['Improvement notice', '30 days to comply before prosecution (not after an accident)'],
      ['Plantation', '5 hectares or more (tea, coffee, rubber, cinchona, cardamom)'],
    ]),
    sources([
      ['OSH Code, 2020 (text, DGFASLI)', 'https://dgfasli.gov.in/public/Admin/Cms/AllPdf/650059fbb8f1a9.98699174.pdf'],
      ['PIB factsheet: OSH Code, 2020 (22 Nov 2025)', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251122702801.pdf'],
      ['PIB: India\'s Labour Reforms factsheet', 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251121701501.pdf'],
    ]),
  ],
};
