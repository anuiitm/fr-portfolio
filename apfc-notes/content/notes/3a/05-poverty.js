import { h2, p, ul, li, table, key, trap, fresh, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'Income poverty in India was estimated from consumption surveys using lines set by expert groups: **Alagh (1979)**, **Lakdawala (1993)**, **Tendulkar (2009**; 21.9% in 2011-12) and **Rangarajan (2014**; 29.5% in 2011-12). No official line has been set since. **NITI Aayog\'s Multidimensional Poverty Index** estimates poverty fell from **29.17% (2013-14) to 11.28% (2022-23)**, with **24.82 crore** people exiting. The **World Bank** puts extreme poverty (at **$3 a day**, 2021 PPP) at **5.3% in 2022-23**, down from **27.1% in 2011-12**.',
  blocks: [
    facts([
      ['11.28%', 'MPI poverty 2022-23 (NITI)'],
      ['24.82 crore', 'escaped MPI poverty 2013-14 to 2022-23'],
      ['5.3%', 'extreme poverty 2022-23 (World Bank, $3/day)'],
      ['21.9%', 'Tendulkar poverty 2011-12'],
    ]),

    h2('Poverty estimation committees'),
    table(
      ['Committee', 'Year', 'Approach and result'],
      [
        ['Working Group', '1962', 'First line: ₹20 (rural) and ₹25 (urban) per capita per month (1960-61 prices)'],
        ['Dandekar and Rath', '1971', 'Calorie-based line (2,250 calories)'],
        ['**Y.K. Alagh** Task Force', '**1979**', 'Calorie norms: **2,400 (rural)**, **2,100 (urban)** calories per person per day'],
        ['**D.T. Lakdawala** Expert Group', '**1993**', 'State-specific lines; price indices CPI-AL (rural) and CPI-IW (urban)'],
        ['**Suresh Tendulkar** Expert Group', '**2009**', 'Moved away from calories to a consumption basket including health and education; uniform urban basket; **37.2% (2004-05)**, **21.9% (2011-12)**; about **₹27 (rural)** and **₹33 (urban)** per person per day in 2011-12'],
        ['**C. Rangarajan** Expert Group', '**2014**', 'Separate baskets; **29.5% (2011-12)**; about **₹32 (rural)** and **₹47 (urban)** per person per day'],
      ],
    ),
    p('The Rangarajan report was not formally adopted. The **Household Consumption Expenditure Surveys (HCES)** of **2022-23** and **2023-24** give consumption data: average monthly per capita consumption expenditure in 2023-24 was about **₹4,122 (rural)** and **₹6,996 (urban)**, excluding the value of free items.'),

    h2('Multidimensional Poverty Index (MPI)'),
    table(
      ['Item', 'Detail'],
      [
        ['Global MPI', '**UNDP** and **OPHI** (Oxford), from **2010**; the **Alkire–Foster** method'],
        ['National MPI', '**NITI Aayog**, based on **NFHS** data'],
        ['Dimensions', '**Health**, **education**, **standard of living** (equal weights)'],
        ['Indicators (12)', 'Health: nutrition, child and adolescent mortality, maternal health. Education: years of schooling, school attendance. Standard of living: cooking fuel, sanitation, drinking water, electricity, housing, assets, **bank account**'],
        ['Results', 'Discussion paper (**January 2024**): MPI headcount **29.17% (2013-14) → 11.28% (2022-23)**; **24.82 crore** people escaped; largest declines in **Uttar Pradesh, Bihar, Madhya Pradesh**'],
      ],
    ),

    h2('World Bank estimates'),
    fresh('Revised poverty lines (2025)', [
      'The World Bank raised the **extreme poverty line** from **$2.15** to **$3.00 a day** (2021 PPP) in June 2025.',
      'India\'s extreme poverty: **27.1% (2011-12) → 5.3% (2022-23)**; the number fell from about **344 million to 75 million**.',
      'India\'s consumption **Gini** was about **25.5** (2022-23), among the more equal distributions of consumption globally (consumption Gini tends to be lower than income Gini).',
    ]),

    h2('Types and schemes'),
    ul(
      li('**Absolute** poverty (below a fixed minimum) vs **relative** poverty (compared with others).'),
      li('**Chronic** vs **transient** poverty.'),
      li('Main anti-poverty programmes: food security (**NFSA, PMGKAY**), wage employment (**VB-G RAM G**, earlier MGNREGA), livelihoods (**DAY-NRLM**), housing (**PMAY**), social pensions (**NSAP**), health (**PM-JAY**). See 7C for details.'),
    ),
    key('Numbers', ['Tendulkar **21.9%**; Rangarajan **29.5%** (both 2011-12).', 'MPI **29.17% → 11.28%**; **24.82 crore**.', 'World Bank **5.3%** (2022-23, $3/day).']),
    trap('Traps', [
      'The **Tendulkar** method dropped the calorie norm; **Alagh** set it.',
      'MPI is **multidimensional**, not income-based.',
      'Rangarajan\'s line (2014) gave a **higher** poverty rate than Tendulkar\'s.',
    ]),

    h2('Self-test'),
    quiz(
      ['Poverty in 2011-12 by the Tendulkar method was:', ['21.9%', '29.5%', '37.2%', '11.28%'], 0, ''],
      ['According to NITI Aayog, how many people escaped multidimensional poverty from 2013-14 to 2022-23?', ['13.5 crore', '18.2 crore', '24.82 crore', '41.5 crore'], 2, ''],
      ['The calorie norms of 2,400 (rural) and 2,100 (urban) were set by:', ['Lakdawala', 'Alagh', 'Tendulkar', 'Rangarajan'], 1, ''],
      ['The World Bank\'s revised extreme poverty line (2025) is:', ['$1.90', '$2.15', '$3.00', '$3.65'], 2, ''],
      ['Which is NOT a dimension of the MPI?', ['Health', 'Education', 'Standard of living', 'Income'], 3, ''],
    ),
    cards([
      ['MPI method', 'Alkire–Foster'],
      ['HCES 2023-24 MPCE', 'Rural ~₹4,122; urban ~₹6,996'],
      ['Rangarajan per day (2011-12)', '₹32 rural, ₹47 urban'],
    ]),
    sources([
      ['NITI Aayog: Multidimensional Poverty in India since 2005-06 (Jan 2024)', 'https://www.niti.gov.in/'],
      ['All India Radio: extreme poverty falls to 5.3% (World Bank)', 'https://www.newsonair.gov.in/indias-extreme-poverty-falls-to-5-3-in-2022-2023-says-world-bank'],
      ['MoSPI: Household Consumption Expenditure Survey', 'https://mospi.gov.in/'],
    ]),
  ],
};
