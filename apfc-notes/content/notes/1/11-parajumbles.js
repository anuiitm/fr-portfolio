import { h2, p, ul, li, table, key, trap, steps, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'In a parajumble, sentences or parts of a sentence (labelled P, Q, R, S) must be put in logical order. There are two formats. In one, the first and last sentences (S1 and S6) are fixed and you order the middle four. In the other, you order all the parts. To solve them, find the **opening sentence** (it introduces the topic and has no unexplained pronoun or connector), then look for **mandatory pairs** linked by pronouns, articles, connectors, time order or example-after-general. Use the **options to eliminate**. You rarely need the full order.',
  blocks: [
    h2('Method'),
    steps([
      ['Read all parts quickly', 'Identify the topic.'],
      ['Find the opener', 'A general or introductory statement; a proper noun introduced in full; no *this, he, it, however, therefore* at the start.'],
      ['Find mandatory pairs', 'Two parts that must be together (a pronoun and its noun, *a* then *the*, a question and its answer).'],
      ['Check the options', 'Keep only options that have your opener and your pair in the right order.'],
      ['Verify', 'Read the final order once; it should flow.'],
    ]),

    h2('Linking clues'),
    table(
      ['Clue', 'What it tells you'],
      [
        ['**Pronouns** (*he, she, it, they, this, these, such*)', 'Come after the noun they refer to.'],
        ['**Articles**', '*a/an* introduces a noun; *the* refers back to it: *a scheme… The scheme…*'],
        ['**Full name → short name**', '*Mahatma Gandhi* comes before *Gandhi* or *he*.'],
        ['**Acronym**', 'Full form first (*Employees\' Provident Fund Organisation*), then *EPFO*.'],
        ['**Contrast connectors** (*however, but, yet, on the other hand*)', 'Follow a sentence making the opposite point.'],
        ['**Addition** (*also, moreover, furthermore, besides*)', 'Follow a sentence on the same point.'],
        ['**Result** (*therefore, thus, hence, as a result*)', 'Follow the cause.'],
        ['**Example** (*for example, for instance, such as*)', 'Follow the general statement.'],
        ['**Time** (*first, then, later, finally*; dates)', 'Chronological order.'],
        ['**Question → answer**', 'A question is followed by its answer.'],
        ['**Conclusion** (*in short, thus, in conclusion*)', 'Usually the last part.'],
      ],
    ),

    h2('Parts of a single sentence'),
    ul(
      li('Find the **subject** first, then its **verb**, then the **object/complement**, then modifiers.'),
      li('A part beginning with a relative pronoun (*who, which, that*) follows the noun it describes.'),
      li('A part beginning with a preposition usually completes a phrase (*of the workers*).'),
      li('Correlatives stay in order: *not only* … *but also*.'),
    ),

    h2('Worked example'),
    p('S1: The Employees\' Provident Fund was created in 1952. S6: Today it serves crores of members. P: It was later extended to many more industries. Q: At first it covered only six industries. R: Along the way, a pension scheme and an insurance scheme were added. S: This growth made it one of the largest social security bodies in the world.'),
    p('**Q** (at first) → **P** (later extended) → **R** (along the way, schemes added) → **S** (this growth) → S6. Answer: **QPRS**.'),
    key('Shortcuts', [
      'Opener + one mandatory pair usually leaves only one option.',
      '*This/these/such* at the start of a part means it cannot be first.',
      'A part with a contrast word needs the point it contrasts with before it.',
    ]),
    trap('Traps', [
      'Two parts may both look like openers; choose the more **general** one.',
      'A pronoun may refer to a noun in **S1** (fixed sentence), so that part can come first in the middle.',
    ]),

    h2('Practice'),
    quiz(
      ['S1: Labour laws protect workers. P: For instance, the Code on Wages fixes minimum wages. Q: They cover wages, safety and social security. R: Such protections, however, work only if they are enforced. S: Enforcement depends on inspection and awareness. Choose the order.', ['QPRS', 'PQRS', 'QRPS', 'RQPS'], 0, 'Q (they = labour laws) → P (example) → R (however, such protections) → S (enforcement).'],
      ['Arrange: P: the report / Q: submitted / R: the committee / S: to the minister yesterday', ['RQPS', 'PQRS', 'QRPS', 'RPQS'], 0, '*The committee submitted the report to the minister yesterday*: subject → verb → object → modifiers.'],
      ['Which part CANNOT be the opening sentence? ', ['India has four Labour Codes.', 'These replaced 29 central laws.', 'Labour law in India has a long history.', 'The first factory law came in 1881.'], 1, '*These* needs an antecedent.'],
    ),
    cards([
      ['This / these / such', 'never the opener'],
      ['for example', 'follows a general statement'],
      ['however', 'follows the opposite point'],
      ['a … the', 'introduce, then refer back'],
    ]),
    sources([
      ['UPSC: previous question papers (sentence-ordering format)', 'https://upsc.gov.in/examinations/previous-question-papers'],
    ]),
  ],
};
