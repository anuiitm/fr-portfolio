import { h2, p, ul, li, table, key, verify, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'India has never had a comprehensive national labour and employment policy. On **8 Oct 2025** the Ministry released the draft **"National Labour & Employment Policy – Shram Shakti Niti 2025"** for comments (until **27 Oct 2025**). Rooted in **śrama dharma** (the dignity of work), it targets **Viksit Bharat @2047**: a **Universal Social Security Account** linking EPFO, ESIC, PM-JAY and e-Shram, **NCS as employment DPI**, and **35% female workforce participation by 2030**.',
  blocks: [
    h2('Timeline'),
    timeline([
      ['1947–2020', 'Labour policy expressed through Five-Year Plans, ILC recommendations, the two National Commissions on Labour and individual laws, never as one document'],
      ['2020', 'Codes enacted; the Ministry begins work on a national policy to accompany them'],
      ['8 Oct 2025', 'Draft **Shram Shakti Niti 2025** released for public consultation'],
      ['27 Oct 2025', 'Last date for comments'],
      ['2026', 'Consultations with States and social partners; finalisation pending'],
    ]),
    verify('Status', 'As of September 2026 the policy has not been announced as finally adopted. Check PIB before the exam.'),

    h2('Vision and principles'),
    ul(
      li('**Śrama dharma**: work as a moral duty and source of dignity, drawn from Indian civilisational thought.'),
      li('A **fair, inclusive and future-ready** world of work aligned with **Viksit Bharat @2047**.'),
      li('Balance between **worker welfare** and **enterprise growth**, consistent with the four Labour Codes.'),
    ),

    h2('Main pillars and proposals'),
    table(
      ['Pillar', 'Proposal'],
      [
        ['**Universal social security**', 'A **Universal Social Security Account** integrating **EPFO, ESIC, PM-JAY and e-Shram**, giving portable, lifelong protection across jobs and sectors'],
        ['**Employment and skills**', 'Develop the **National Career Service (NCS)** into India\'s **Employment Digital Public Infrastructure**, with **AI-based job matching**, credential verification and career guidance'],
        ['**Women and youth**', 'Target **35% female workforce participation by 2030**; flexible work, childcare, entrepreneurship and vocational pathways'],
        ['**Occupational safety and health**', 'Strengthen OSH systems in line with the OSH Code'],
        ['**Green and technology jobs**', 'Promote green, digital and technology-enabled jobs; prepare workers for automation and the platform economy'],
        ['**Labour governance**', 'Digital, data-driven, predictive governance; convergence of Centre and State systems'],
      ],
    ),
    h2('Phased implementation'),
    table(
      ['Phase', 'Period', 'Focus'],
      [
        ['I', '**2025–27**', 'Institutional set-up, digital pilots, integrating social security systems'],
        ['II', '**2027–30**', 'Roll-out of Universal Social Security; AI-based job matching at scale'],
        ['III', '**Beyond 2030**', 'Full digital convergence and predictive labour governance'],
      ],
    ),
    key('Why examiners like it', 'It ties together things that appear elsewhere in the syllabus: the **Labour Codes**, **e-Shram**, **NCS**, **ELI / PM Viksit Bharat Rozgar Yojana**, and women\'s labour force participation. Expect a one-line question on its name, release date or a headline target.'),

    h2('Self-test'),
    quiz(
      ['The draft national labour policy released in October 2025 is called:', ['Shramev Jayate Niti', 'Shram Shakti Niti 2025', 'Rashtriya Shram Niti', 'Viksit Shram Niti'], 1, 'Shram Shakti Niti 2025.'],
      ['Its target for female workforce participation is:', ['25% by 2027', '35% by 2030', '50% by 2047', '40% by 2035'], 1, '35% by 2030.'],
      ['The proposed Universal Social Security Account would integrate:', ['EPFO, ESIC, PM-JAY and e-Shram', 'Only EPFO and NPS', 'LIC and PMJJBY', 'NPS and APY'], 0, ''],
    ),
    cards([
      ['Shram Shakti Niti released', '8 Oct 2025, comments till 27 Oct 2025'],
      ['Guiding idea', 'Śrama dharma: dignity and moral value of work'],
      ['Phase I', '2025–27: institutions, pilots, social security integration'],
    ]),
    sources([
      ['PIB: draft National Labour & Employment Policy (Shram Shakti Niti 2025)', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2176333'],
    ]),
  ],
};
