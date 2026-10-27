import { h2, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The economy is divided into **primary** (agriculture, forestry, fishing, mining), **secondary** (manufacturing, construction, electricity, gas and water) and **tertiary** (services) sectors. India\'s pattern is distinctive: **services** produce **over half of GVA**, while **agriculture employs the largest share of workers** (about **45%**) but produces only about **16–18%** of GVA. In **2025-26** (new series), growth was **3.2%** in the primary sector, **8.8%** secondary and **9.3%** tertiary. Other classifications: organised and unorganised, formal and informal, public and private.',
  blocks: [
    h2('The three sectors'),
    table(
      ['Sector', 'Includes', 'Growth 2025-26 (real, PE)'],
      [
        ['**Primary**', 'Agriculture, livestock, forestry, fishing; mining and quarrying (in national accounts, mining is often grouped with industry)', '**3.2%**'],
        ['**Secondary** (industry)', 'Manufacturing, construction, electricity, gas, water supply and other utility services', '**8.8%**'],
        ['**Tertiary** (services)', 'Trade, hotels, transport, communication, financial, real estate, professional services, public administration, defence and other services', '**9.3%**'],
      ],
    ),
    p('Source for growth rates: MoSPI Provisional Estimates, 5 June 2026 (base 2022-23). In 2025-26, manufacturing, trade–transport–communication, and financial–real estate–professional services grew in **double digits** at both constant and current prices.'),

    h2('Shares in output and employment (approximate)'),
    table(
      ['Sector', 'Share of GVA', 'Share of employment'],
      [
        ['Agriculture and allied', 'About **16–18%**', 'About **45%** (largest employer)'],
        ['Industry', 'About a quarter to 30%', 'About a quarter'],
        ['Services', '**Over half** (largest)', 'About 30%'],
      ],
      'Approximate ranges from recent Economic Surveys and PLFS reports; exact shares vary by series and year.',
    ),
    ul(
      li('**Structural transformation**: India moved from agriculture directly to **services** without a large manufacturing phase ("services-led growth"), unlike East Asia.'),
      li('**Disguised unemployment** in agriculture: more workers than needed; marginal productivity near zero.'),
      li('**Eight core industries** (40.27% weight in the IIP, 2011-12 series): **refinery products** (largest weight), electricity, steel, coal, crude oil, natural gas, cement, fertilisers. The IIP moved to a new base **2022-23** on **1 June 2026**.'),
    ),

    h2('Other classifications'),
    table(
      ['Classification', 'Meaning'],
      [
        ['**Organised / unorganised**', 'Organised: registered, follows labour laws, regular terms. Unorganised: small, scattered, largely outside regulation (**NCEUS**: over 90% of workers were informal)'],
        ['**Formal / informal employment**', 'Formal = with social security (EPF, ESI) and written contract'],
        ['**Public / private**', 'By ownership'],
        ['**Quaternary / quinary** (sometimes used)', 'Knowledge services (IT, R&D) / top decision-makers'],
      ],
    ),
    key('Pattern to remember', ['Services: largest share of **output**.', 'Agriculture: largest share of **employment**.', '2025-26 growth: **3.2 / 8.8 / 9.3%**.']),
    trap('Traps', [
      'Construction is **secondary**, not tertiary.',
      'Mining is in the primary sector in basic classification, but grouped with industry in national accounts tables.',
    ]),

    h2('Self-test'),
    quiz(
      ['Which sector employs the largest share of India\'s workforce?', ['Services', 'Manufacturing', 'Agriculture', 'Construction'], 2, ''],
      ['Which sector contributes the most to India\'s GVA?', ['Agriculture', 'Industry', 'Services', 'Mining'], 2, ''],
      ['Construction belongs to the:', ['primary sector', 'secondary sector', 'tertiary sector', 'quaternary sector'], 1, ''],
      ['The core industry with the largest weight in the index of eight core industries is:', ['Electricity', 'Steel', 'Refinery products', 'Coal'], 2, ''],
    ),
    cards([
      ['Tertiary growth 2025-26', '9.3%'],
      ['New IIP base', '2022-23 (from 1 June 2026)'],
    ]),
    sources([
      ['MoSPI: Provisional Estimates of GDP 2025-26 (sectoral growth)', 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1780655857536_5ac01869-ca4a-422d-b7a7-57b81da60932_Press_Note_on_GDP_Estimates_for_Q4_2025-26_and_PE_FY_2025-26_F.pdf'],
      ['MoSPI: FAQs on new IIP series (base 2022-23)', 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1779857844835_f8e09093-f2ef-4fb3-9890-6149d4162032_FAQ_for_new_IIP_series_with_base_year_2022-23.pdf'],
      ['Economic Survey (Ministry of Finance)', 'https://www.indiabudget.gov.in/economicsurvey/'],
    ]),
  ],
};
