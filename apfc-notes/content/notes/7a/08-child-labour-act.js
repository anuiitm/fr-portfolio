import { h2, h3, p, ul, li, table, key, trap, note, caselaw, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Child and Adolescent Labour (Prohibition and Regulation) Act, 1986** (Act 61 of 1986), as amended in **2016**, bans employing **children below 14 in any occupation or process** (two exceptions: helping the family outside school hours, and child artists) and bans **adolescents aged 14–18 in hazardous work**. Employers face **6 months–2 years** and/or **₹20,000–₹50,000**; offences are **cognizable**. It stays **outside** the four Labour Codes.',
  blocks: [
    h2('Constitutional and international basis'),
    table(
      ['Provision', 'What it says'],
      [
        ['**Article 24**', 'No child **below 14** shall be employed in any **factory or mine** or engaged in any other **hazardous employment** (a Fundamental Right)'],
        ['**Article 21A**', 'Free and compulsory education for children aged **6–14** (86th Amendment, 2002)'],
        ['**Article 39(e)**', 'The tender age of children is not to be abused; citizens not forced by economic necessity into unsuited work'],
        ['**Article 39(f)**', 'Children to be given opportunities to develop in a healthy manner and protected against exploitation'],
        ['**Article 45**', 'Early childhood care and education for children below 6'],
        ['**Article 51A(k)**', 'Parents and guardians to provide opportunities for education to children aged 6–14'],
        ['**ILO C138 and C182**', 'Minimum Age Convention (1973) and Worst Forms of Child Labour Convention (1999): India ratified both on **13 June 2017**'],
      ],
    ),

    h2('Evolution of the law'),
    timeline([
      ['1938', 'Employment of Children Act, 1938 (repealed by the 1986 Act)'],
      ['23 Dec 1986', '**Child Labour (Prohibition and Regulation) Act, 1986** enacted: banned children under 14 only in **scheduled** hazardous occupations and processes, and regulated their work elsewhere'],
      ['1987', 'National Policy on Child Labour'],
      ['1988', '**National Child Labour Project (NCLP)** launched to rehabilitate child workers through special schools. From 2021–22 it was merged into **Samagra Shiksha**'],
      ['10 Dec 1996', '**M.C. Mehta v. State of Tamil Nadu**: Supreme Court orders offending employers to pay **₹20,000** per child into a Child Labour Rehabilitation-cum-Welfare Fund'],
      ['2006', 'Domestic work and work in dhabas, restaurants and hotels added to the prohibited list'],
      ['29 Jul 2016', '**Child Labour (Prohibition and Regulation) Amendment Act, 2016** (Act 35 of 2016) receives assent; Act renamed "Child **and Adolescent** Labour"; in force from **1 Sep 2016**'],
      ['2 Jun 2017', 'Child and Adolescent Labour (P&R) Amendment Rules, 2017 notified'],
      ['13 Jun 2017', 'India ratifies ILO Conventions **138 and 182**'],
      ['26 Sep 2017', '**PENCIL** portal (Platform for Effective Enforcement for No Child Labour) launched'],
    ]),

    h2('Key definitions (Section 2)'),
    table(
      ['Term', 'Meaning'],
      [
        ['**Child**', 'A person who has **not completed 14 years**, or the age specified in the **RTE Act, 2009**, whichever is more'],
        ['**Adolescent**', 'A person who has completed **14** but not **18** years'],
        ['Appropriate Government', 'Centre for its establishments, railways, major ports, mines and oilfields; the State otherwise'],
        ['Establishment', 'Includes a shop, commercial establishment, workshop, farm, residential hotel, restaurant, eating house, theatre or other place of public amusement'],
      ],
    ),

    h2('The prohibitions'),
    h3('Children below 14 (Section 3): total ban with two exceptions'),
    p('No child shall be employed or permitted to work in **any occupation or process**. The ban does not apply where the child:'),
    ul(
      li('**helps the family or family enterprise**, in work **other than hazardous** occupations or processes in the Schedule, **after school hours or during vacations**. "Family" means mother, father, brother, sister, and father\'s and mother\'s sisters and brothers.'),
      li('works as an **artist in the audio-visual entertainment industry** (advertisements, films, TV serials, other entertainment or sports), **except the circus**, subject to prescribed safety conditions and without affecting school education.'),
    ),
    h3('Adolescents 14–18 (Section 3A): ban on hazardous work'),
    p('No adolescent shall be employed in the hazardous occupations or processes in the Schedule. The Schedule lists three categories:'),
    ul('**Mines**', '**Inflammable substances or explosives**', '**Hazardous processes** as defined in Section 2(cb) of the Factories Act, 1948'),
    p('The Central Government may add to or omit from the Schedule after **3 months\'** notice (s.4), on the advice of the **Child Labour Technical Advisory Committee** (s.5).'),
    trap('Before and after 2016', [
      'Before 2016: children barred only from **listed** hazardous occupations (the Schedule listed 16 occupations and 65 processes). After 2016: children barred from **all** occupations and processes, with only two exceptions.',
      'Adolescents (14–18) were **not** covered before 2016.',
    ]),

    h2('Conditions of work of adolescents (Part III)'),
    table(
      ['Section', 'Rule'],
      [
        ['7(2)', 'No period of work longer than **3 hours**, and no adolescent works more than 3 hours without a rest interval of **at least 1 hour**'],
        ['7(3)', 'Total **spread-over** not more than **6 hours**, including rest and waiting time'],
        ['7(4)', 'No work between **7 p.m. and 8 a.m.**'],
        ['7(5)', '**No overtime**'],
        ['7(6)', 'No work in two establishments on the same day'],
        ['8', 'One **weekly holiday**, not altered more than once in **3 months**'],
        ['9', 'Notice to the Inspector within **30 days** of employing an adolescent'],
        ['10', 'Disputes about age referred to the prescribed medical authority'],
        ['11–13', 'Register of adolescents; display of an abstract of ss.3A and 14; health and safety rules'],
      ],
    ),

    h2('Penalties and enforcement (Part IV)'),
    table(
      ['Offence', 'Punishment'],
      [
        ['Employing a **child** (s.3) or an **adolescent in hazardous work** (s.3A): first offence', 'Imprisonment **6 months to 2 years**, or fine **₹20,000 to ₹50,000**, or both'],
        ['Repeat offence', 'Imprisonment **1 to 3 years**'],
        ['Parents or guardians', '**Not punished for the first offence**. Repeat: fine up to **₹10,000**. Punishable only if they permit the child to work for **commercial purposes**'],
        ['Other contraventions (notice, register, display, rules)', 'Simple imprisonment up to **1 month**, or fine up to **₹10,000**, or both'],
      ],
    ),
    ul(
      li('**s.14A**: offences by employers under ss.3 and 3A are **cognizable**.'),
      li('**s.14B: Child and Adolescent Labour Rehabilitation Fund** in every district (or group of districts). Fines realised from employers are credited, and the Government adds **₹15,000 for each child or adolescent**. The amount and interest are paid to the child.'),
      li('**s.14C**: rescued children and adolescents are rehabilitated under the laws in force.'),
      li('**s.14D**: the **District Magistrate** may compound a first offence under s.14(3), and offences by parents or guardians.'),
      li('**s.17A**: the **District Magistrate** may be given powers to implement the Act. **s.17B**: periodic inspection and monitoring.'),
      li('**s.16**: any person, police officer or Inspector may file a complaint; trial by a Metropolitan Magistrate or Judicial Magistrate First Class.'),
    ),
    key('The link with the Labour Codes', 'This Act is **not** subsumed in any Code. The OSH Code (s.25(4)) says the hours of work of adolescents are governed by this Act; the Code on Wages bans fines on anyone **under 15**; and the IR Code lets a person of **14+** in non-hazardous work join a trade union.'),

    h2('Schemes and portals'),
    ul(
      li('**National Child Labour Project (NCLP)**, 1988: special training centres for rescued children, bridging them into mainstream schools. **Subsumed into Samagra Shiksha** from 2021–22.'),
      li('**PENCIL portal** (26 Sep 2017): links the Centre, States, districts and NCLP societies for complaints, rescue and rehabilitation tracking.'),
      li('**World Day Against Child Labour**: **12 June** (ILO, since 2002).'),
      li('Census 2011 counted about **1.01 crore** working children aged 5–14.'),
    ),
    caselaw('Landmark cases', [
      '**M.C. Mehta v. State of Tamil Nadu (1996)**: Sivakasi match and firework units. Employers pay **₹20,000** per child to a welfare fund; the State provides a job to an adult family member or contributes ₹5,000.',
      '**Bachpan Bachao Andolan v. Union of India (2011)**: directions against child trafficking and child labour in circuses.',
      '**People\'s Union for Democratic Rights v. Union of India (1982)** (Asiad workers): construction work is hazardous employment under Article 24.',
    ]),

    h2('Self-test'),
    quiz(
      ['Under the amended Act, an "adolescent" is a person aged:', ['12–16', '14–18', '15–18', '14–16'], 1, 'Completed 14 but not 18 years.'],
      ['Which is NOT an exception to the ban on child labour?', ['Helping a family enterprise after school hours', 'Working as a child artist in films', 'Performing in a circus', 'Helping family during vacations'], 2, 'Circus is expressly excluded from the artist exception.'],
      ['First-offence punishment for an employer who employs a child is:', ['Up to 3 months', '6 months to 2 years and/or ₹20,000–₹50,000', '1–3 years', 'Fine up to ₹10,000'], 1, 'Section 14(1). Repeat: 1–3 years.'],
      ['The Government credits how much per rescued child to the Rehabilitation Fund?', ['₹5,000', '₹15,000', '₹20,000', '₹25,000'], 1, 'Section 14B(2).'],
      ['India ratified ILO Conventions 138 and 182 in:', ['2011', '2016', '2017', '2019'], 2, '13 June 2017.'],
      ['Adolescents may not work between:', ['8 p.m. and 6 a.m.', '7 p.m. and 8 a.m.', '10 p.m. and 6 a.m.', '6 p.m. and 7 a.m.'], 1, 'Section 7(4).'],
    ),
    cards([
      ['Article 24', 'No child below 14 in factory, mine or hazardous employment'],
      ['2016 Amendment Act', 'Act 35 of 2016, in force 1 Sep 2016, adds "adolescent"'],
      ['Schedule (post-2016)', 'Mines, inflammable substances or explosives, hazardous processes (Factories Act s.2(cb))'],
      ['Parents', 'No punishment for first offence; repeat fine up to ₹10,000'],
      ['PENCIL', 'Online enforcement portal, launched 26 Sep 2017'],
      ['s.14D compounding', 'By the District Magistrate'],
    ]),
    sources([
      ['Child and Adolescent Labour (P&R) Act, 1986 (as amended)', 'https://haryanaindustries.com/act/Central%20Acts/Child%20and%20Adolescent%20Labour%20(Prohibition%20and%20Regulation)%20Act,%201986.pdf'],
      ['Ministry of Labour: Child Labour Amendment Act, 2016', 'https://www.labour.gov.in/whatsnew/child-labour-prohibition-and-regulation-amendment-act-2016'],
    ]),
  ],
};
