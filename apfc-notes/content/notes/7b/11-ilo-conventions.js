import { h2, h3, p, ul, li, table, key, trap, fresh, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The ILO recognises **five categories of fundamental principles and rights at work**, covered by **10 fundamental Conventions**. India has ratified **6**: **C29, C105** (forced labour), **C100, C111** (equality) and **C138, C182** (child labour, both on **13 June 2017**). It has **not** ratified **C87, C98** (freedom of association, collective bargaining) or the OSH Conventions **C155, C187**, which became fundamental in **2022**. Overall, India has ratified **47 Conventions and 1 Protocol**.',
  blocks: [
    h2('The 1998 Declaration and the 2022 amendment'),
    p('The **ILO Declaration on Fundamental Principles and Rights at Work (1998)** commits all member States, **whether or not they have ratified** the relevant Conventions, to respect and promote principles in these categories. In **June 2022** (110th ILC) a **fifth category** was added: **a safe and healthy working environment**.'),

    h2('The 10 fundamental Conventions and India\'s status'),
    table(
      ['Category', 'Convention', 'Year', 'India'],
      [
        ['Freedom of association and collective bargaining', '**C87** Freedom of Association and Protection of the Right to Organise', '1948', '**Not ratified**'],
        ['', '**C98** Right to Organise and Collective Bargaining', '1949', '**Not ratified**'],
        ['Elimination of forced labour', '**C29** Forced Labour', '1930', 'Ratified **1954**'],
        ['', '**C105** Abolition of Forced Labour', '1957', 'Ratified **2000**'],
        ['Abolition of child labour', '**C138** Minimum Age', '1973', 'Ratified **13 Jun 2017** (minimum age **14**)'],
        ['', '**C182** Worst Forms of Child Labour', '1999', 'Ratified **13 Jun 2017**'],
        ['Elimination of discrimination', '**C100** Equal Remuneration', '1951', 'Ratified **1958**'],
        ['', '**C111** Discrimination (Employment and Occupation)', '1958', 'Ratified **1960**'],
        ['Safe and healthy working environment (2022)', '**C155** Occupational Safety and Health', '1981', '**Not ratified**'],
        ['', '**C187** Promotional Framework for OSH', '2006', '**Not ratified**'],
      ],
    ),
    p('The **Protocol of 2014 to the Forced Labour Convention (P29)** is also a fundamental instrument; India has **not** ratified it.'),
    h3('Why India has not ratified C87 and C98'),
    p('Ratification would require granting **Government employees** rights that service rules prohibit: the right to **strike**, to openly **criticise** Government policies, to freely accept **financial contributions**, and to freely **join foreign organisations**.'),

    h2('Governance (priority) Conventions'),
    table(
      ['Convention', 'India'],
      [
        ['**C81** Labour Inspection, 1947', 'Ratified **1949**'],
        ['**C144** Tripartite Consultation (International Labour Standards), 1976', 'Ratified **1978**'],
        ['**C122** Employment Policy, 1964', 'Not ratified'],
        ['**C129** Labour Inspection (Agriculture), 1969', 'Not ratified'],
      ],
    ),

    h2('Other Conventions worth knowing'),
    table(
      ['Convention', 'Subject', 'India'],
      [
        ['**C1** (1919)', 'Hours of Work (Industry): 8 hours a day, 48 a week', 'Ratified **1921**: among the first'],
        ['**C102** (1952)', '**Social Security (Minimum Standards)**: nine branches', 'Not ratified'],
        ['**C118** (1962)', 'Equality of Treatment (Social Security)', 'Ratified'],
        ['**C19** (1925)', 'Equality of Treatment (Accident Compensation)', 'Ratified'],
        ['**MLC, 2006**', 'Maritime Labour Convention', 'Ratified **9 Oct 2015**'],
        ['**C183** (2000)', 'Maternity Protection', 'Not ratified'],
        ['**C189** (2011)', 'Domestic Workers', 'Not ratified'],
        ['**C190** (2019)', 'Violence and Harassment', 'Not ratified'],
        ['**C192** (2025)', 'Protection against Biological Hazards in the Working Environment', 'Newly adopted'],
        ['**C193** (2026)', '**Decent Work in the Platform Economy**', 'Newly adopted'],
      ],
    ),
    fresh('The platform economy Convention (June 2026)', 'The **114th International Labour Conference (1–12 June 2026)** adopted **C193**, the first international labour standard for **digital labour platform** work. It covers all platforms regardless of how workers are classified and requires fundamental rights (freedom of association and collective bargaining, no discrimination, child or forced labour), a safe and healthy working environment, protection from violence and harassment, **data privacy** and **algorithmic transparency**. India\'s Code on Social Security already recognises gig and platform workers.'),

    h2('How Conventions work'),
    ul(
      li('Adopted at the **ILC** by a **two-thirds** majority of delegates.'),
      li('A member must submit a new Convention to its **competent authority** (Parliament) within **12 to 18 months**.'),
      li('**Ratification** makes it legally binding; the State reports periodically to the **CEACR**.'),
      li('**Recommendations** are not open to ratification; they give guidance.'),
      li('**Protocols** partially revise Conventions and are ratified separately.'),
      li('Out of date instruments can be **abrogated** by the ILC (since the 1997 constitutional amendment, in force 2015).'),
    ),
    key('Six ratified, four not', '**Ratified**: C29, C105, C100, C111, C138, C182. **Not ratified**: C87, C98, C155, C187. Memory hook: India ratified all **forced, child and equality** Conventions, but none on **association** or **OSH**.'),
    trap('Common errors', [
      'Before 2022 there were **8** fundamental (core) Conventions; now there are **10**.',
      'C138 and C182 were ratified together in **2017**, which is why the 2016 amendment to the Child Labour Act came first.',
      'C102 (social security minimum standards) is **not** ratified by India.',
    ]),

    h2('Self-test'),
    quiz(
      ['Which fundamental Conventions has India NOT ratified?', ['C29 and C105', 'C87 and C98', 'C138 and C182', 'C100 and C111'], 1, 'Also C155 and C187.'],
      ['In 2022 the ILO added which category to fundamental principles?', ['Social protection floors', 'Safe and healthy working environment', 'Living wage', 'Right to work from home'], 1, ''],
      ['India ratified C138 and C182 in:', ['2000', '2012', '2017', '2022'], 2, '13 June 2017.'],
      ['The ILO Convention on decent work in the platform economy adopted in 2026 is:', ['C190', 'C192', 'C193', 'C189'], 2, ''],
      ['India ratified the Maritime Labour Convention in:', ['2006', '2011', '2015', '2019'], 2, '9 October 2015.'],
    ),
    cards([
      ['C100', 'Equal Remuneration, 1951, India 1958'],
      ['C111', 'Discrimination, 1958, India 1960'],
      ['C29 / C105', 'Forced labour, India 1954 / 2000'],
      ['C155 / C187', 'OSH, fundamental since 2022, not ratified by India'],
    ]),
    sources([
      ['ILO NORMLEX: ratifications for India', 'https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB%3A11200%3A0%3A%3ANO%3A%3Ap11200_country_id%3A102691'],
      ['PIB: ILO fundamental Conventions (India ratified six)', 'https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=168889'],
      ['ILO: 114th ILC adopts platform economy Convention', 'https://www.ilo.org/resource/news/ilc/ilc114/international-labour-conference-ends-adoption-first-convention-decent-work'],
    ]),
  ],
};
