import { h2, h3, p, ul, li, table, key, trap, quote, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **International Labour Organization** was created in **1919** by the **Treaty of Versailles** (Part XIII) and became the **first specialised agency of the UN in 1946**. It is the only **tripartite** UN agency. **India is a founding member**. Its three organs are the **International Labour Conference** (annual, June, Geneva), the **Governing Body** (India holds a **permanent** government seat) and the **International Labour Office** (secretariat, headed by the **Director-General, Gilbert F. Houngbo**, since Oct 2022). It has **187** member States and won the **Nobel Peace Prize in 1969**.',
  blocks: [
    facts([
      ['1919', 'founded (Treaty of Versailles)'],
      ['Geneva', 'headquarters'],
      ['187', 'member States'],
      ['1969', 'Nobel Peace Prize'],
    ]),

    h2('History'),
    timeline([
      ['1919', 'Created by **Part XIII of the Treaty of Versailles** at the Paris Peace Conference; Commission on International Labour Legislation chaired by **Samuel Gompers** (AFL, USA). India is a **founding member** (then British India)'],
      ['Oct–Nov 1919', '**First International Labour Conference** in **Washington, D.C.** adopts six Conventions, including **C1 (Hours of Work, Industry)**'],
      ['1920', 'Headquarters set up in **Geneva**; **Albert Thomas** (France) becomes the first **Director**'],
      ['1928', 'ILO opens an office in **India** (Delhi)'],
      ['10 May 1944', '**Declaration of Philadelphia** (26th ILC) restates the ILO\'s aims; annexed to the Constitution in 1946'],
      ['1946', 'Becomes the **first specialised agency** of the United Nations'],
      ['1969', '**Nobel Peace Prize** on its **50th anniversary** (received by DG **David A. Morse**)'],
      ['1998', '**Declaration on Fundamental Principles and Rights at Work**'],
      ['1999', '**Decent Work** agenda (DG **Juan Somavía**)'],
      ['2008', '**Declaration on Social Justice for a Fair Globalization**'],
      ['2019', '**Centenary Declaration for the Future of Work**; **C190** on violence and harassment'],
      ['2022', 'Safe and healthy working environment made a fundamental principle; **Gilbert F. Houngbo** (Togo) becomes the **11th Director-General** (1 Oct 2022)'],
      ['2023', '**Global Coalition for Social Justice** launched'],
      ['2025', '**C192** on biological hazards (113th ILC)'],
      ['June 2026', '**C193** on decent work in the **platform economy** (114th ILC, 1–12 June 2026)'],
    ]),

    h2('The Declaration of Philadelphia (1944)'),
    p('Adopted at the 26th session in Philadelphia on **10 May 1944**, it set out the ILO\'s fundamental principles:'),
    quote('Labour is not a commodity; freedom of expression and of association are essential to sustained progress; poverty anywhere constitutes a danger to prosperity everywhere; the war against want requires to be carried on with unrelenting vigour …', 'Declaration of Philadelphia, Part I'),
    p('It widened the ILO\'s mandate to **social security**, **full employment**, **health care** and **education**, and endorsed **tripartism**.'),

    h2('Structure'),
    table(
      ['Organ', 'Composition', 'Functions'],
      [
        [
          '**International Labour Conference (ILC)**',
          'Each member sends **4 delegates**: **2 Government, 1 employer, 1 worker** (with advisers); each delegate votes **independently**',
          'The "world parliament of labour". Meets **annually in June in Geneva**. Adopts **Conventions** and **Recommendations** (by **two-thirds** majority), adopts the **budget**, elects the Governing Body, reviews application of standards (Conference Committee on the Application of Standards)',
        ],
        [
          '**Governing Body (GB)**',
          '**56 titular members**: **28 Government, 14 employer, 14 worker** (plus 66 deputy members). **10 Government seats are permanent** for States of chief industrial importance: **Brazil, China, France, Germany, India, Italy, Japan, Russia, UK, USA**. Others elected for **3 years**',
          'The **executive council**: meets **three times a year** (March, June, November); sets the ILC agenda, prepares the programme and budget, **elects the Director-General**, supervises the Office. India chaired it **Oct 2020 – Jun 2021** (Labour Secretary **Apurva Chandra**), the first time in 35 years',
        ],
        [
          '**International Labour Office**',
          'Permanent **secretariat** in Geneva with regional and country offices (India: **Decent Work Team for South Asia and Country Office for India**, New Delhi)',
          'Research, technical cooperation, publications, preparing documents for the ILC and GB. Headed by the **Director-General** (5-year term)',
        ],
      ],
    ),
    h3('Supervisory machinery'),
    ul(
      '**Committee of Experts on the Application of Conventions and Recommendations (CEACR)**, set up **1926**: independent jurists review country reports.',
      '**Conference Committee on the Application of Standards (CAS)**: tripartite, examines selected country cases at each ILC.',
      '**Committee on Freedom of Association (CFA)**, **1951**: examines complaints even against States that have not ratified C87 and C98.',
      '**Representations** (Article 24) by employers\' or workers\' organisations; **complaints** (Article 26) that can lead to a **Commission of Inquiry**.',
    ),
    h3('Institutions'),
    ul(
      '**International Training Centre**, **Turin** (1964).',
      '**International Institute for Labour Studies** (1960), now part of the ILO Research Department.',
    ),

    h2('Tripartism and functions'),
    ul(
      li('**Tripartism**: Governments, employers and workers share decision-making on equal terms. The ILO is the **only tripartite UN agency**.'),
      li('**Functions**: setting **international labour standards**; promoting **fundamental rights**; creating **employment** opportunities; extending **social protection**; promoting **social dialogue**; **technical cooperation**, research and statistics (for example the **International Conference of Labour Statisticians**).'),
    ),
    h2('Directors-General'),
    table(
      ['#', 'Director-General', 'Country', 'Term'],
      [
        ['1', 'Albert Thomas', 'France', '1919–1932'],
        ['5', 'David A. Morse', 'USA', '1948–1970 (Nobel Prize 1969)'],
        ['9', 'Juan Somavía', 'Chile', '1999–2012 (Decent Work)'],
        ['10', 'Guy Ryder', 'UK', '2012–2022'],
        ['11', '**Gilbert F. Houngbo**', '**Togo**', '**Oct 2022 –**'],
      ],
    ),
    key('India and the ILO', [
      '**Founding member** (1919) and a **permanent member** of the Governing Body.',
      'Ratified **C1** in **1921**, among the earliest ratifications.',
      'ILO office in India since **1928**.',
      'India chaired the Governing Body **2020–21**.',
      'India\'s tripartite bodies (ILC, SLC, CBT, ESIC) mirror the ILO model.',
    ]),
    trap('Common mix-ups', [
      'First ILC was held in **Washington** (1919), not Geneva.',
      'ILC delegation is **2-1-1**; Governing Body is **28-14-14**.',
      'The ILO was a League of Nations body first; it joined the UN system in **1946**.',
    ]),

    h2('Self-test'),
    quiz(
      ['The ILO was established by:', ['UN Charter 1945', 'Treaty of Versailles 1919', 'Declaration of Philadelphia 1944', 'League Covenant 1920'], 1, 'Part XIII of the Treaty of Versailles.'],
      ['How many delegates does each member send to the International Labour Conference?', ['2', '3', '4', '6'], 2, 'Two Government, one employer, one worker.'],
      ['"Labour is not a commodity" is from:', ['Treaty of Versailles', 'Declaration of Philadelphia', '1998 Declaration', 'Centenary Declaration'], 1, '10 May 1944.'],
      ['The current ILO Director-General is:', ['Guy Ryder', 'Juan Somavía', 'Gilbert F. Houngbo', 'Kristalina Georgieva'], 2, 'Since 1 October 2022.'],
      ['India chaired the ILO Governing Body in:', ['1985', '2010–11', '2020–21', '2024–25'], 2, 'Apurva Chandra, Oct 2020–Jun 2021.'],
    ),
    cards([
      ['Governing Body permanent seats', 'Brazil, China, France, Germany, India, Italy, Japan, Russia, UK, USA'],
      ['CEACR', 'Committee of Experts, 1926'],
      ['CFA', 'Committee on Freedom of Association, 1951'],
      ['First ILO Director', 'Albert Thomas (France)'],
    ]),
    sources([
      ['ILO: India country page', 'https://www.ilo.org/regions-and-countries/asia-and-pacific/india'],
      ['PIB: India assumes chair of ILO Governing Body (Oct 2020)', 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1667036'],
      ['ILO: 114th ILC closes (June 2026)', 'https://www.ilo.org/resource/news/ilc/ilc114/international-labour-conference-ends-adoption-first-convention-decent-work'],
    ]),
  ],
};
