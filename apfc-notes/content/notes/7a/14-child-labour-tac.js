import { h2, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Child Labour Technical Advisory Committee** is set up by the **Central Government** under **Section 5** of the Child and Adolescent Labour (Prohibition and Regulation) Act, 1986. It has a **Chairman and up to 10 members** and advises the Centre on **adding occupations and processes to the Schedule** of hazardous work, which the Centre amends after **3 months\'** notice (s.4).',
  blocks: [
    h2('Legal basis'),
    table(
      ['Item', 'Detail'],
      [
        ['Law', 'Child and Adolescent Labour (Prohibition and Regulation) Act, 1986, **Section 5**'],
        ['Constituted by', 'The **Central Government**, by notification'],
        ['Composition', 'A **Chairman** and **not more than 10** other members appointed by the Centre'],
        ['Purpose', 'To **advise the Central Government** on **adding occupations and processes to the Schedule**'],
        ['Procedure', 'Meets as often as needed and regulates its own procedure; may form **sub-committees** and co-opt non-members to them'],
        ['Terms of office', 'Prescribed by rules (s.18(2)(b))'],
      ],
    ),
    p('The name was changed from "Child Labour Technical Advisory Committee" to "**Technical Advisory Committee**" by the 2016 amendment, but it is still commonly called the Child Labour TAC.'),

    h2('How it works with Section 4'),
    ul(
      li('**Section 4**: the Central Government may **add to or omit from the Schedule** any hazardous occupation or process, after giving **not less than 3 months\'** notice of its intention by notification.'),
      li('The TAC studies occupations and processes (often with occupational-health experts) and recommends additions. Before 2016, the Schedule grew from a handful of items to **16 occupations and 65 processes** largely on TAC recommendations (for example domestic work and dhabas in 2006).'),
      li('Since 2016, **children** are barred from **all** work (with two exceptions), so the Schedule matters mainly for **adolescents (14–18)** and for the family-enterprise exception for children.'),
      li('Every notification under s.4 must be laid before **each House of Parliament** for **30 days** (s.19).'),
    ),
    key('Why it is in the "authorities" list', 'It is one of the advisory authorities under a labour law that sits **outside** the four Codes, alongside the Vigilance Committees under the Bonded Labour Act and the Internal and Local Committees under the POSH Act.'),
    trap('Do not confuse', [
      'The TAC advises on the **Schedule** (hazardous work); it does not enforce the Act. Enforcement is by **Inspectors** and the **District Magistrate** (s.17, 17A).',
      'Compounding under this Act is done by the **District Magistrate** (s.14D).',
    ]),

    h2('Self-test'),
    quiz(
      ['The Technical Advisory Committee under the Child Labour Act is constituted under:', ['Section 3', 'Section 5', 'Section 14', 'Section 17'], 1, 'Section 5.'],
      ['Maximum number of members, other than the Chairman:', ['5', '7', '10', '15'], 2, 'Not more than ten.'],
      ['Before adding an item to the Schedule, the Centre must give notice of at least:', ['1 month', '2 months', '3 months', '6 months'], 2, 'Section 4.'],
    ),
    cards([
      ['TAC purpose', 'Advise the Centre on additions to the Schedule of hazardous occupations and processes'],
      ['Composition', 'Chairman + up to 10 members'],
    ]),
    sources([
      ['Child and Adolescent Labour (P&R) Act, 1986 (as amended)', 'https://haryanaindustries.com/act/Central%20Acts/Child%20and%20Adolescent%20Labour%20(Prohibition%20and%20Regulation)%20Act,%201986.pdf'],
    ]),
  ],
};
