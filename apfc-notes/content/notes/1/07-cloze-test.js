import { h2, p, ul, li, key, trap, steps, quote, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'A **cloze test** is a passage with several numbered blanks, usually 5 to 10. Each blank tests grammar, a connector or vocabulary, and the **context of the whole passage** decides the answer. Read the complete passage first for the theme and tone. Then fill the blanks in order, checking the sentences before and after each one. Finally, re-read the whole passage to check that it flows.',
  blocks: [
    h2('Method'),
    steps([
      ['Read the whole passage once', 'Identify the topic, the tone (positive/negative) and the time frame (past/present).'],
      ['Solve blank by blank', 'Use the same checks as fill-in-the-blanks: part of speech, clue words, collocation.'],
      ['Watch connectors', 'Blanks for *however, therefore, moreover, although, because, unless* decide the logic between sentences.'],
      ['Keep tense consistent', 'A narrative in the past stays in the past unless there is a reason to shift.'],
      ['Re-read', 'The completed passage must make sense end to end.'],
    ]),

    h2('What each blank usually tests'),
    ul(
      li('**Connectors** (logic between sentences): contrast, cause, addition, example, conclusion.'),
      li('**Tense and verb form** matching the passage\'s time frame.'),
      li('**Prepositions** after fixed words.'),
      li('**Articles and determiners** (*a, the, some, much, many, few*).'),
      li('**Vocabulary** where tone matters (*boon/bane*, *rise/decline*).'),
    ),

    h2('Practice cloze'),
    quote(
      'The Code on Social Security came into force in November 2025 (1) ___ years of debate. It brought nine older laws (2) ___ a single framework. Supporters said the change would make compliance (3) ___ for employers, especially small ones. Trade unions, (4) ___ , worried that some protections might be diluted. The Code also recognised gig and platform workers for the first time, a step that many experts had long (5) ___ .',
      'Practice passage written for these notes',
    ),
    quiz(
      ['Blank (1)', ['since', 'after', 'during', 'until'], 1, '*came into force after years of debate*.'],
      ['Blank (2)', ['into', 'at', 'upon', 'on'], 0, '*bring … into a framework*.'],
      ['Blank (3)', ['hard', 'easier', 'easiest', 'more easy'], 1, 'Comparative needed; *more easy* is wrong.'],
      ['Blank (4)', ['therefore', 'moreover', 'however', 'thus'], 2, 'Contrast with supporters.'],
      ['Blank (5)', ['opposed', 'demanded', 'ignored', 'resisted'], 1, 'Positive tone: *a step that experts had long demanded*.'],
    ),
    key('Cloze rules', [
      'Theme and tone first; grammar second; vocabulary last.',
      'A connector blank must match the relationship between the two sentences.',
      'Check the sentence **after** the blank; it often explains the word.',
    ]),
    trap('Traps', [
      'An option can be grammatical in its sentence but break the passage\'s logic.',
      'Do not change the tense of a narrative for one blank.',
    ]),
    cards([
      ['Contrast connectors', 'however, nevertheless, yet, although, whereas'],
      ['Cause connectors', 'because, since, as, owing to, due to'],
      ['Result connectors', 'therefore, thus, hence, consequently'],
      ['Addition connectors', 'moreover, furthermore, besides, in addition'],
    ]),
    sources([
      ['Practicemock: UPSC EPFO APFC General English topics', 'https://www.practicemock.com/blog/upsc-epfo-apfc-general-english/'],
    ]),
  ],
};
