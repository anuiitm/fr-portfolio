import { h2, p, ul, li, table, key, trap, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Dattopant Thengadi National Board for Workers Education and Development (DTNBWED)**, formerly the **Central Board for Workers Education** (set up **1958**, HQ **Nagpur**), runs tripartite workers\' education. The **Labour Welfare Organisation**, headed by the **Director General (Labour Welfare)** with **18 regions** under Welfare Commissioners, runs welfare schemes for **beedi, cine and non-coal mine workers**.',
  blocks: [
    h2('Workers\' education: DTNBWED'),
    table(
      ['Item', 'Detail'],
      [
        ['Set up', '**1958** as the **Central Board for Workers Education (CBWE)**, a society registered under the Societies Registration Act, on the recommendation of a team of experts after the Second Five-Year Plan'],
        ['Headquarters', '**Nagpur**'],
        ['Renamed', 'The Governing Body decided in **November 2014** (166th meeting) to rename it after trade unionist **Dattopant Thengadi**, founder of the **Bharatiya Mazdoor Sangh**; the change was formalised in **2016**'],
        ['Status', 'An autonomous body under the Ministry of Labour and Employment; **tripartite** governing body (Government, employers, trade unions, educational institutions)'],
        ['Network', '**50 Regional Directorates**, **9 Sub-Regional Directorates** and **6 Zonal Directorates**; the **Indian Institute of Workers Education, Mumbai** is its apex training institute'],
        ['Programmes', 'Awareness camps for **rural and unorganised workers**, programmes for **organised-sector** workers on labour laws and the Labour Codes, programmes for **women, weaker sections and child labour** families, and training of worker-teachers'],
      ],
    ),

    h2('Labour Welfare Organisation (LWO)'),
    table(
      ['Item', 'Detail'],
      [
        ['Head', '**Director General (Labour Welfare)**, a Joint Secretary-level officer of the Ministry; also **Member-Secretary of the National Social Security Board**'],
        ['Regions', '**18 regions**, each under a **Welfare Commissioner** from the Central Labour Service'],
        ['Beneficiaries', '**Beedi workers**, **cine workers** and **non-coal mine workers** (iron ore, manganese ore, chrome ore, limestone, dolomite and mica mines)'],
        ['Benefits', '**Health care** (hospitals and dispensaries), **education assistance** (scholarships for workers\' children), **housing** subsidy'],
      ],
    ),
    timeline([
      ['1946', 'Mica Mines Labour Welfare Fund Act'],
      ['1972', 'Limestone and Dolomite Mines Labour Welfare Fund Act'],
      ['1976', 'Beedi Workers Welfare Fund Act; Iron Ore, Manganese Ore and Chrome Ore Mines Labour Welfare Fund Act'],
      ['1981', 'Cine-Workers Welfare Fund Act (now subsumed in the **Code on Social Security**)'],
      ['2017', 'The welfare **cesses** that financed these funds were abolished when **GST** came in; the schemes are now funded from the Union Budget under the **Labour Welfare Scheme**'],
    ]),
    key('How it connects', [
      'The welfare **fund** Acts for beedi and mine workers are **outside** the Codes; only the Cine-Workers Welfare Fund Act 1981 was subsumed (Social Security Code).',
      'The **DG (Labour Welfare)** links the LWO to the **NSSB**, since both deal with unorganised workers.',
    ]),
    trap('Do not confuse', [
      'Workers\' **education** board = **DTNBWED (Nagpur)**. Labour **research and training** institute = **VVGNLI (Noida)**.',
      'The LWO deals with **beedi, cine and non-coal mines**. **Coal** miners have their own **Coal Mines Provident Fund Organisation (CMPFO)** under the Ministry of Coal.',
    ]),

    h2('Self-test'),
    quiz(
      ['The Central Board for Workers Education was renamed after:', ['V.V. Giri', 'Dattopant Thengadi', 'N.M. Joshi', 'B.R. Ambedkar'], 1, 'Dattopant Thengadi, founder of the BMS.'],
      ['DTNBWED is headquartered at:', ['New Delhi', 'Mumbai', 'Nagpur', 'Noida'], 2, 'Nagpur.'],
      ['The Labour Welfare Organisation does NOT run schemes for:', ['Beedi workers', 'Cine workers', 'Iron ore mine workers', 'Coal mine workers'], 3, 'Coal miners are covered by the CMPFO and the coal sector\'s own welfare arrangements.'],
    ),
    cards([
      ['CBWE set up', '1958, Nagpur'],
      ['LWO regions', '18, each under a Welfare Commissioner'],
      ['Cess abolition', '2017, with GST; schemes now budget-funded'],
    ]),
    sources([
      ['PIB: CBWE renamed as DTNBWED', 'https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=149124'],
      ['Labour Welfare Organisation', 'https://en.wikipedia.org/wiki/Labour_Welfare_Organisation'],
    ]),
  ],
};
