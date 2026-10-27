import { h2, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    '**DGFASLI** (Mumbai; set up **1945**) advises on factory and port safety and runs the Central and Regional Labour Institutes. **DGMS** (Dhanbad; began **7 Jan 1902**) enforces mine safety. **DGE** (Directorate General of Employment) runs the **National Career Service** after training moved to the Skill Development Ministry in **2015**. **VVGNLI** (Noida; **1974**, renamed **1995**) is the Ministry\'s research and training institute.',
  blocks: [
    h2('Directorate General Factory Advice Service and Labour Institutes (DGFASLI)'),
    table(
      ['Item', 'Detail'],
      [
        ['Origin', 'Set up in **1945** in **Delhi** as the office of the **Chief Adviser of Factories**; moved to **Mumbai in 1966**'],
        ['Headquarters', '**Mumbai**'],
        ['Network', '**Central Labour Institute (CLI), Mumbai** (1966) and **Regional Labour Institutes** at **Kolkata, Chennai, Faridabad and Kanpur**, plus inspectorates of **dock safety** at major ports'],
        ['Role', 'Technical arm of the Ministry for **occupational safety and health in factories and ports**. Advises Central and State Governments, drafts model rules and standards, trains factory inspectors and safety officers, conducts surveys and research on industrial hygiene and occupational diseases, and enforces the dock-safety law at major ports'],
        ['Under the OSH Code', 'The **DG, FASLI** is an ex officio member of the **National OSH Advisory Board** (s.16)'],
      ],
    ),

    h2('Directorate General of Mines Safety (DGMS)'),
    table(
      ['Item', 'Detail'],
      [
        ['Origin', 'A **Bureau of Mines Inspection** started in **Calcutta on 7 January 1902** to administer the **Indian Mines Act, 1901**'],
        ['Renaming and move', 'Became the **Department of Mines** and moved to **Dhanbad in 1908**; renamed **Directorate General of Mines Safety** in **1967**'],
        ['Headquarters', '**Dhanbad** (Jharkhand)'],
        ['Role', 'Regulatory agency for **safety, health and welfare in mines** (coal, metalliferous and oil mines). Inspects mines, investigates accidents, approves mining equipment, conducts statutory examinations for mine managers, and frames regulations'],
        ['Law', 'Earlier the **Mines Act, 1952**; now the **OSH Code, 2020** and its mine regulations'],
        ['Under the OSH Code', 'The **DG, Mines Safety** is an ex officio member of the National OSH Advisory Board'],
      ],
    ),
    trap('Remember the pairs', '**DGFASLI → Mumbai → factories and ports**. **DGMS → Dhanbad → mines**. DGMS is older (1902 vs 1945).'),

    h2('Directorate General of Employment (DGE)'),
    ul(
      li('Formerly the **Directorate General of Employment and Training (DGE&T)**. In **2015** the training wing (ITIs, apprenticeship) was transferred to the **Ministry of Skill Development and Entrepreneurship**, which runs it as the **Directorate General of Training (DGT)**. The employment wing stayed with the Labour Ministry as the **DGE**.'),
      li('**National Career Service (NCS)**: the digital employment platform launched on **20 July 2015**; over **6.64 crore** job-seekers registered and over **10 crore** vacancies mobilised by August 2026.'),
      li('Runs **Model Career Centres**, **NCS Centres for SC/ST** (formerly Coaching-cum-Guidance Centres) and **NCS Centres for Differently Abled** (formerly Vocational Rehabilitation Centres).'),
      li('Policy for **employment exchanges** (a State subject in administration) and **Employment Market Information**. The **Employment Exchanges (CNV) Act, 1959** is now part of the **Code on Social Security** (Chapter XIII: vacancies reported to **career centres**).'),
    ),

    h2('V.V. Giri National Labour Institute (VVGNLI)'),
    table(
      ['Item', 'Detail'],
      [
        ['Established', '**1 July 1974** as the **National Labour Institute**'],
        ['Renamed', '**1995**, after **V.V. Giri**, former President of India and a trade union leader (Labour Minister 1952–54)'],
        ['Location', 'Sector 24, **Noida**, Uttar Pradesh'],
        ['Status', 'An **autonomous body** of the Ministry of Labour and Employment, registered as a society'],
        ['Role', '**Research, training, education and publication** on labour: industrial relations, labour law, social security, employment, gender, child labour, informal sector. Trains labour administrators (including **Central Labour Service** and EPFO/ESIC officers), trade union leaders and managers. Houses the **National Resource Centre on Child Labour** and a Centre for Gender and Labour; publishes the journal **Labour & Development**'],
        ['International', 'Works with the ILO and runs international training programmes (ITEC)'],
      ],
    ),
    key('One line each', [
      '**DGFASLI**: Mumbai, 1945, factory and dock safety, CLI plus four RLIs.',
      '**DGMS**: Dhanbad, 1902, mine safety.',
      '**DGE**: employment services and **NCS** (training went to MSDE in 2015).',
      '**VVGNLI**: Noida, 1974 (renamed 1995), research and training.',
    ]),

    h2('Self-test'),
    quiz(
      ['DGMS is headquartered at:', ['Kolkata', 'Dhanbad', 'Nagpur', 'Ranchi'], 1, 'It moved to Dhanbad in 1908.'],
      ['Which is NOT a Regional Labour Institute under DGFASLI?', ['Kolkata', 'Chennai', 'Faridabad', 'Ahmedabad'], 3, 'RLIs: Kolkata, Chennai, Faridabad and Kanpur.'],
      ['VVGNLI was renamed after V.V. Giri in:', ['1974', '1984', '1995', '2005'], 2, 'Established 1974 as the National Labour Institute.'],
      ['The NCS portal was launched on:', ['16 Oct 2014', '20 Jul 2015', '26 Aug 2021', '1 Apr 2016'], 1, '20 July 2015.'],
    ),
    cards([
      ['Central Labour Institute', 'Mumbai, 1966, under DGFASLI'],
      ['DGMS renamed', '1967'],
      ['DGT', 'Directorate General of Training, now under MSDE'],
      ['VVGNLI journal', 'Labour & Development'],
    ]),
    sources([
      ['DGFASLI: introduction', 'https://dgfasli.gov.in/en/introduction'],
      ['DGMS: organisation and functions', 'https://www.dgms.gov.in/writereaddata/Content/DGMS%20organization.pdf'],
      ['VVGNLI: history', 'https://vvgnli.gov.in/en/aboutus/history'],
    ]),
  ],
};
