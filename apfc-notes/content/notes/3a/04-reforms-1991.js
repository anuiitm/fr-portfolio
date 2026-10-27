import { h2, p, ul, li, table, key, trap, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'In **1991** India faced a **balance of payments crisis**: forex reserves fell to barely enough for about **two weeks of imports**, and gold was pledged abroad to raise loans. The government of **P.V. Narasimha Rao**, with Finance Minister **Manmohan Singh**, launched **LPG reforms**: **L**iberalisation (ending the licence raj), **P**rivatisation (disinvestment) and **G**lobalisation (trade and investment opening). The key steps were the **rupee devaluation** (July 1991), the **New Industrial Policy (24 July 1991)**, IMF-backed stabilisation, and financial and tax reforms.',
  blocks: [
    h2('Causes of the 1991 crisis'),
    ul(
      li('Large **fiscal deficits** through the 1980s and rising external debt.'),
      li('**Gulf War (1990–91)**: oil prices rose and remittances from Gulf workers fell.'),
      li('Political instability; downgrades by rating agencies; loss of confidence of NRIs.'),
      li('Forex reserves fell to about **two weeks of imports**; India pledged **gold** with foreign banks to raise emergency loans and took **IMF** assistance.'),
    ),

    h2('Reforms'),
    table(
      ['Area', 'Measures'],
      [
        ['**Industrial policy**', '**New Industrial Policy, 24 July 1991**: industrial **licensing abolished** except for a short list of strategic and hazardous industries; public-sector reservation cut; MRTP restrictions on large firms eased; automatic approval for FDI'],
        ['**External sector**', '**Rupee devalued** in two steps (**1 and 3 July 1991**); dual exchange rate (**LERMS, 1992**) then a unified **market-determined** rate (**March 1993**); **current account convertibility (August 1994)**; import licensing and tariffs reduced'],
        ['**Foreign investment**', 'FDI allowed up to 51% automatically in many industries; **FIPB**; foreign portfolio investment by FIIs (1992)'],
        ['**Financial sector**', '**Narasimham Committee (1991)**: lower CRR and SLR, interest rate deregulation, private banks allowed; **SEBI** given statutory powers (**1992**)'],
        ['**Fiscal / tax**', '**Raja Chelliah** Tax Reforms Committee: lower income and corporate tax rates, wider base; later VAT and GST'],
        ['**Privatisation**', '**Disinvestment** of PSU shares; Rangarajan Committee on disinvestment (1993)'],
        ['**Trade**', 'India a founding member of the **WTO (1995)**'],
      ],
    ),

    h2('Outcomes and debate'),
    ul(
      li('Faster growth (above 6% on average in later decades), a jump in forex reserves, services and IT boom, more FDI.'),
      li('Criticisms: jobless growth, agrarian distress, rising inequality, neglect of agriculture and small industry.'),
      li('**Second-generation reforms** (from the 2000s): FRBM Act, GST, IBC, labour codes, disinvestment.'),
    ),
    key('Dates', ['Devaluation: **1 and 3 July 1991**.', 'New Industrial Policy: **24 July 1991**.', 'Unified exchange rate: **March 1993**.', 'Current account convertibility: **August 1994**.']),
    trap('Traps', [
      'The 1991 reforms were under **P.V. Narasimha Rao** (PM) and **Manmohan Singh** (FM).',
      '**Capital account** convertibility is still only partial.',
    ]),

    h2('Self-test'),
    quiz(
      ['The New Industrial Policy was announced on:', ['1 July 1991', '24 July 1991', '15 August 1991', '1 April 1992'], 1, ''],
      ['The Narasimham Committee (1991) dealt with:', ['tax reform', 'the financial (banking) sector', 'disinvestment', 'agriculture'], 1, ''],
      ['India introduced current account convertibility in:', ['1991', '1993', '1994', '1999'], 2, ''],
      ['The Tax Reforms Committee of 1991 was chaired by:', ['Raja Chelliah', 'C. Rangarajan', 'Vijay Kelkar', 'M. Narasimham'], 0, ''],
    ),
    cards([
      ['LERMS', 'Liberalised Exchange Rate Management System, 1992'],
      ['SEBI statutory', '1992'],
      ['LPG', 'Liberalisation, Privatisation, Globalisation'],
    ]),
    sources([
      ['NCERT Class XII Economics: Indian Economic Development, "Liberalisation, Privatisation and Globalisation"', 'https://ncert.nic.in/textbook.php?keec1=3-10'],
      ['RBI: History (1991 crisis and reforms)', 'https://www.rbi.org.in/history/'],
    ]),
  ],
};
