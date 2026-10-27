import { h2, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'India planned its development through **twelve Five-Year Plans (1951–2017)** under the **Planning Commission** (set up **15 March 1950** by a Cabinet resolution, chaired by the PM). The **National Development Council** (1952) approved the plans. On **1 January 2015** the Planning Commission was replaced by **NITI Aayog** (National Institution for Transforming India), a policy **think tank** without the power to allocate funds. Five-Year Plans ended with the 12th Plan in **2017**.',
  blocks: [
    h2('Pre-independence plans'),
    table(
      ['Plan', 'Year', 'Author'],
      [
        ['*Planned Economy for India*', '1934', '**M. Visvesvaraya**'],
        ['National Planning Committee', '**1938**', 'Congress, chaired by **Jawaharlal Nehru** (Subhas Bose as Congress president)'],
        ['**Bombay Plan**', '**1944**', 'Industrialists (J.R.D. Tata, G.D. Birla and others)'],
        ['**Gandhian Plan**', '1944', '**S.N. Agarwal**'],
        ['**People\'s Plan**', '1945', '**M.N. Roy**'],
        ['**Sarvodaya Plan**', '1950', '**Jayaprakash Narayan**'],
      ],
    ),

    h2('Five-Year Plans'),
    table(
      ['Plan', 'Period', 'Focus and notes'],
      [
        ['**1st**', '1951–56', '**Agriculture**, irrigation; based on the **Harrod–Domar** model; exceeded its growth target'],
        ['**2nd**', '1956–61', '**Heavy industry**; the **Mahalanobis** model; steel plants at Bhilai, Durgapur, Rourkela'],
        ['**3rd**', '1961–66', 'Self-reliance; **failed** due to the 1962 and 1965 wars and droughts'],
        ['**Plan holiday**', '1966–69', 'Three annual plans; **Green Revolution** began; rupee devalued (1966)'],
        ['**4th**', '1969–74', '"**Growth with stability**" and self-reliance; bank nationalisation (1969); the **Gadgil formula** for central assistance to states'],
        ['**5th**', '1974–79', '"**Garibi Hatao**" (poverty removal); ended a year early (1978) by the Janata government; **Minimum Needs Programme**'],
        ['Rolling plan', '1978–80', 'Janata government\'s annual rolling plans (Gunnar Myrdal\'s idea)'],
        ['**6th**', '1980–85', 'Poverty alleviation; IRDP; beginning of liberalisation'],
        ['**7th**', '1985–90', 'Food, work and productivity; Jawahar Rozgar Yojana (1989)'],
        ['Annual plans', '1990–92', 'Political instability and the BoP crisis'],
        ['**8th**', '1992–97', 'Began the **LPG reforms**; human development; indicative planning'],
        ['**9th**', '1997–2002', '"Growth with social justice and equity"'],
        ['**10th**', '2002–07', 'Target 8% growth; monitorable targets for poverty and literacy'],
        ['**11th**', '2007–12', '"**Faster and more inclusive growth**"'],
        ['**12th**', '2012–17', '"**Faster, more inclusive and sustainable growth**"; the **last** Five-Year Plan'],
      ],
    ),

    h2('Planning Commission vs NITI Aayog'),
    table(
      ['', 'Planning Commission', 'NITI Aayog'],
      [
        ['Created', '**15 March 1950**, Cabinet resolution', '**1 January 2015**, Cabinet resolution'],
        ['Nature', 'Extra-constitutional, non-statutory', 'Extra-constitutional, non-statutory **think tank**'],
        ['Chair', 'Prime Minister', '**Prime Minister**'],
        ['Approach', 'Top-down; Five-Year Plans', '**Bottom-up, cooperative federalism**; 15-year vision, 7-year strategy, 3-year action agenda (announced)'],
        ['Funds', 'Allocated plan funds to ministries and states', '**No power to allocate funds** (now done by the Finance Ministry)'],
        ['States', 'National Development Council', '**Governing Council**: PM, all Chief Ministers and Lt Governors'],
      ],
    ),
    ul(
      li('NITI Aayog initiatives: **Atal Innovation Mission**, the **Aspirational Districts Programme** (2018) and **Aspirational Blocks** (2023), the **SDG India Index**, the national **Multidimensional Poverty Index**, **Export Preparedness Index**, State Health and Energy indices, and work on **Viksit Bharat @2047**.'),
      li('The **National Development Council** (set up **6 August 1952**) approved Five-Year Plans; it has not met since 2014.'),
    ),
    key('Pairs', ['2nd Plan = **Mahalanobis**, heavy industry.', '5th Plan = **Garibi Hatao**.', '8th Plan = LPG reforms.', '12th = last plan (2012–17).', 'NITI Aayog = **1 Jan 2015**.']),
    trap('Traps', [
      'Neither the Planning Commission nor NITI Aayog is **constitutional** or **statutory**.',
      'The plan holiday was **1966–69**, not after the 3rd Plan\'s success.',
    ]),

    h2('Self-test'),
    quiz(
      ['The Second Five-Year Plan was based on the model of:', ['Harrod–Domar', 'Mahalanobis', 'Gadgil', 'Rostow'], 1, ''],
      ['NITI Aayog was set up on:', ['15 March 1950', '1 January 2015', '26 January 2015', '1 April 2017'], 1, ''],
      ['The "plan holiday" was:', ['1961–64', '1966–69', '1978–80', '1990–92'], 1, ''],
      ['"Garibi Hatao" was the slogan of which plan?', ['Fourth', 'Fifth', 'Sixth', 'Seventh'], 1, ''],
      ['The Bombay Plan (1944) was prepared by:', ['M.N. Roy', 'Industrialists', 'S.N. Agarwal', 'Jayaprakash Narayan'], 1, ''],
    ),
    cards([
      ['NDC set up', '6 August 1952'],
      ['Rolling plan', '1978–80 (Janata government)'],
      ['NITI Governing Council', 'PM + all CMs and LGs'],
    ]),
    sources([
      ['NITI Aayog', 'https://www.niti.gov.in/'],
      ['NCERT Class XII Economics: Indian Economic Development, Chapter 2', 'https://ncert.nic.in/textbook.php?keec1=0-10'],
    ]),
  ],
};
