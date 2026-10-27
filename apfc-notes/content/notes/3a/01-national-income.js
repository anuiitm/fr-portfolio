import { h2, p, ul, li, table, key, trap, fresh, facts, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    '**GDP** is the value of all final goods and services produced **within** a country in a year. **GNP** = GDP + net factor income from abroad. **NDP** = GDP − depreciation. **National income** is **NNP at factor cost**. India\'s official estimates come from the **National Statistics Office (NSO), MoSPI**. A **new GDP series with base year 2022-23** replaced the 2011-12 series on **27 February 2026**. Under it, real GDP grew **7.7% in 2025-26** (provisional estimate, 5 June 2026) and **7.8% in April–June 2026** (31 August 2026).',
  blocks: [
    facts([
      ['2022-23', 'new base year (from 27 Feb 2026)'],
      ['7.7%', 'real GDP growth 2025-26 (PE)'],
      ['7.8%', 'Q1 2026-27 real growth'],
      ['8.9%', 'nominal GDP growth 2025-26'],
    ]),

    h2('Concepts'),
    table(
      ['Aggregate', 'Definition'],
      [
        ['**GDP** (Gross Domestic Product)', 'Market value of final goods and services produced **within the domestic territory** in a year'],
        ['**GNP / GNI**', 'GDP **+ net factor income from abroad** (NFIA: income earned by residents abroad − income earned by non-residents in India)'],
        ['**NDP**', 'GDP − **depreciation** (consumption of fixed capital)'],
        ['**NNP**', 'GNP − depreciation'],
        ['**National income**', '**NNP at factor cost** = NNP at market prices − net indirect taxes (indirect taxes − subsidies)'],
        ['**GVA** (Gross Value Added)', 'Output − intermediate consumption. **GVA at basic prices + product taxes − product subsidies = GDP**'],
        ['**Per capita income**', 'NNI ÷ population'],
        ['**Nominal vs real**', 'Nominal = current prices; real = constant (base-year) prices. **GDP deflator** = nominal ÷ real × 100'],
        ['**Personal income / disposable income**', 'Income received by households; disposable income = personal income − direct taxes'],
      ],
    ),
    ul(
      li('**Market price vs factor cost**: market price includes indirect taxes and excludes subsidies.'),
      li('**Three methods**: **production (value added)**, **income** (wages + rent + interest + profit + mixed income), **expenditure** (C + I + G + X − M).'),
      li('Excluded from GDP: intermediate goods (to avoid double counting), transfer payments (pensions, scholarships), sale of second-hand goods (except dealer margins), financial transactions (shares), illegal activity, household work.'),
    ),

    h2('History of national income estimation in India'),
    table(
      ['Year', 'Event'],
      [
        ['1867-68', 'First estimate by **Dadabhai Naoroji** (*Poverty and Un-British Rule in India*)'],
        ['1931-32', 'First scientific estimate by **V.K.R.V. Rao**'],
        ['1949', '**National Income Committee** chaired by **P.C. Mahalanobis**'],
        ['1951', '**Central Statistical Organisation (CSO)** set up'],
        ['May 2019', 'CSO and NSSO merged into the **National Statistics Office (NSO)** under MoSPI'],
        ['Base years', '1948-49 → 1960-61 → 1970-71 → 1980-81 → 1993-94 → 1999-2000 → 2004-05 → **2011-12** → **2022-23**'],
      ],
    ),

    h2('The new series (base year 2022-23)'),
    fresh('Released 27 February 2026', [
      'MoSPI released the **new series of GDP estimates with base year 2022-23**, replacing 2011-12, to capture structural changes and to use newer, more granular data sources and methods.',
      'Growth under the new series: **2023-24: 7.2%**, **2024-25: 7.1%** (real).',
      '**Provisional Estimates for 2025-26** (5 June 2026): real GDP **7.7%**, nominal **8.9%**; real GVA **7.9%**; primary sector **3.2%**, secondary **8.8%**, tertiary **9.3%**.',
      '**Q1 2026-27** (April–June 2026; released 31 August 2026): real GDP **7.8%**, nominal **10.3%**, real GVA **8.2%**.',
      'Other indicators were also rebased to 2022-23 in 2026: the **IIP** (1 June 2026) and the **WPI**, alongside new **Producer Price Indices** (15 June 2026). The **CPI** moved to base **2024** (February 2026).',
      'RBI projects **6.7%** growth for 2026-27 (August 2026 policy).',
    ]),

    h2('Release calendar'),
    ul(
      li('**First Advance Estimates** (early January), **Second Advance Estimates** (late February), **Provisional Estimates** (end May/early June), then first, second and third revised estimates in later years.'),
      li('**Quarterly GDP** is released about two months after the quarter ends (end of February, May, August, November).'),
    ),
    key('Formulas', [
      'GNP = GDP + NFIA.',
      'NDP = GDP − depreciation.',
      'National income = NNP at factor cost.',
      'GDP = GVA + product taxes − product subsidies.',
      'Deflator = nominal/real × 100.',
    ]),
    trap('Traps', [
      'GDP is **territorial**; GNP is **national** (residents).',
      'Transfer payments and second-hand sales are **not** in GDP.',
      'For India NFIA is usually **negative**, so GNP < GDP.',
    ]),

    h2('Self-test'),
    quiz(
      ['National income in India is measured as:', ['GDP at market prices', 'NNP at factor cost', 'GNP at market prices', 'NDP at market prices'], 1, ''],
      ['The new GDP series released in February 2026 has the base year:', ['2011-12', '2017-18', '2022-23', '2024'], 2, ''],
      ['Real GDP growth for 2025-26 (provisional estimates, June 2026) was:', ['6.5%', '7.4%', '7.7%', '8.2%'], 2, ''],
      ['GNP differs from GDP by:', ['depreciation', 'net indirect taxes', 'net factor income from abroad', 'subsidies'], 2, ''],
      ['The first scientific estimate of India\'s national income was made by:', ['Dadabhai Naoroji', 'V.K.R.V. Rao', 'P.C. Mahalanobis', 'D.R. Gadgil'], 1, ''],
    ),
    cards([
      ['NSO formed', 'May 2019 (CSO + NSSO)'],
      ['Mahalanobis', 'National Income Committee, 1949'],
      ['GDP deflator', 'Nominal ÷ real × 100'],
    ]),
    sources([
      ['MoSPI: Press note on new GDP series, base 2022-23 (27 Feb 2026)', 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1772189865181_f040336d-bc57-4aed-b80f-586d9ccb279e_Press_Note_on_New_Series_of_GDP_Estimates_with_Base_Year_2022-23_27022026.pdf'],
      ['MoSPI: Provisional Estimates 2025-26 (5 Jun 2026)', 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1780655857536_5ac01869-ca4a-422d-b7a7-57b81da60932_Press_Note_on_GDP_Estimates_for_Q4_2025-26_and_PE_FY_2025-26_F.pdf'],
      ['MoSPI: Q1 2026-27 estimates (31 Aug 2026)', 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1788172583113_d65a77cf-240e-4491-82ee-59f78618fa41_Press_Note_on_GDP_Estimates_for_Q1_2026-27.pdf'],
      ['PIB: New series of GDP estimates', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2233518'],
    ]),
  ],
};
