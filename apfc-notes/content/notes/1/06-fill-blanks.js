import { h2, p, ul, li, table, key, trap, steps, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The 2025 EPFO paper had **5 fill-in-the-blank questions**, most rated difficult. There are two kinds. **Grammar blanks** turn on tense, agreement, a preposition, an article or a conjunction. **Vocabulary blanks** need the word whose meaning, **connotation** and **collocation** fit the context. Read the whole sentence and find the **clue words** (contrast, cause, definition). Predict the answer before reading the options. For double blanks, eliminate on the easier blank first.',
  blocks: [
    h2('Method'),
    steps([
      ['Read the whole sentence', 'Find what the blank must do: noun, verb, adjective, adverb, connector.'],
      ['Find the clue', 'Contrast (*but, although, despite, unlike*), cause (*because, since, so, therefore*), definition or restatement (*that is, in other words*, a colon or dash), and intensity (*even, extremely*).'],
      ['Predict', 'Fill the blank with your own word first.'],
      ['Match', 'Pick the option closest to your prediction; check collocation and tone.'],
      ['Re-read', 'The sentence must be grammatical and natural.'],
    ]),

    h2('Clue signals'),
    table(
      ['Signal', 'What it tells you', 'Example'],
      [
        ['**although, but, yet, however, despite, while, unlike**', 'The blank **contrasts** with the other part', 'Although he was **wealthy**, he lived a ___ life. → *frugal / austere*'],
        ['**because, since, as, so, therefore, hence**', 'The blank is **caused by** or **causes** the other part', 'He was ___ because he had not slept for two days. → *exhausted*'],
        ['**and, also, moreover, in addition**', 'The blank **agrees** with the other part', 'She is honest and ___ . → *sincere*'],
        ['**colon, dash, "that is", "in other words"**', 'The blank is **defined** by what follows', 'He was ___: he never spent a rupee more than necessary. → *parsimonious*'],
        ['**not only … but also**', 'Second item **intensifies** the first', 'not only difficult but also ___ → *dangerous*'],
        ['**even, extremely, so … that**', 'The blank is **stronger** than normal', 'so ___ that he could not stand → *weak*'],
      ],
    ),

    h2('Collocations often tested'),
    table(
      ['Verb + noun', 'Adjective + noun', 'Fixed phrase'],
      [
        ['**lodge** a complaint / FIR', '**heavy** rain / traffic', '**bone** of contention'],
        ['**pay** attention / a visit / tribute', '**strong** tea / wind', '**by and large**'],
        ['**make** a mistake / progress / a decision / an effort', '**high** hopes / standards', '**in the long run**'],
        ['**do** homework / a favour / business / harm', '**fast** friends', '**at the eleventh hour**'],
        ['**take** a decision (Indian and British) / a step / place / charge', '**bitter** truth', '**null and void**'],
        ['**draw** a conclusion / attention / a line', '**deep** sleep / sorrow', '**in lieu of**'],
        ['**raise** an objection / a question / funds', '**grave** danger / mistake', '**with regard to**'],
        ['**meet** a demand / deadline / target', '**sweeping** changes', '**on the verge of**'],
        ['**bear** fruit / responsibility / the cost', '**vested** interests', '**in the wake of**'],
        ['**strike** a balance / a deal', '**stiff** competition', '**at the cost of**'],
        ['**wage** war', '**sound** advice', '**by dint of**'],
        ['**commit** a crime / suicide', '**acute** shortage', '**in accordance with**'],
      ],
    ),

    h2('Prepositions and phrasal verbs in blanks'),
    p('The 2025 paper grouped **5 questions on phrasal verbs and prepositions**. See the full lists in *Parts of speech* (fixed prepositions) and *Idioms and phrases* (phrasal verbs). High-frequency items:'),
    ul(
      li('*abide **by***, *comply **with***, *conform **to***, *adhere **to***, *dispense **with***, *insist **on***, *refrain **from***, *consist **of***.'),
      li('*call **off*** (cancel), *put **off*** (postpone), *look **into*** (investigate), *carry **out*** (perform), *bring **about*** (cause), *turn **down*** (reject), *set **up*** (establish), *do **away with*** (abolish), *make **up for*** (compensate), *put **up with*** (tolerate).'),
    ),

    h2('Grammar blanks: quick checks'),
    ul(
      li('Before the blank: *has/have/had* → V3; *is/are/was* → V-ing or V3; modal → V1; *to* → V1 (unless *to* is a preposition: *look forward **to** meeting*).'),
      li('Article before a vowel **sound**; none before uncountable general nouns.'),
      li('*since* (point) / *for* (period); *between* (two) / *among* (many).'),
      li('Correlative partner: *neither → nor*, *no sooner → than*, *hardly → when*, *both → and*, *not only → but also*.'),
      li('*few/a few/little/a little* by countability and positive/negative sense.'),
    ),
    key('Vocabulary blanks', [
      'Check **connotation**: *thrifty* (positive) vs *miserly* (negative) vs *frugal* (neutral).',
      'Check **collocation**: *commit* a crime, not *do* a crime.',
      'With two blanks, solve the one with the clearer clue first and eliminate pairs.',
    ]),
    trap('Traps', [
      'Two options may be synonyms; the context decides (*reply* vs *retort*).',
      'An option may fit the meaning but not the grammar (*a informative*).',
      'Do not pick a word only because it sounds advanced.',
    ]),

    h2('Practice'),
    quiz(
      ['Despite his ___ income, he donated generously to charity.', ['ample', 'modest', 'lavish', 'enormous'], 1, 'Contrast with *generously*.'],
      ['The workers ___ a complaint with the labour inspector.', ['made', 'lodged', 'did', 'put'], 1, 'Collocation.'],
      ['The meeting was called ___ due to heavy rain.', ['up', 'off', 'on', 'out'], 1, '*call off* = cancel.'],
      ['He was so ___ that he refused to change his mind even after seeing the evidence.', ['flexible', 'obstinate', 'amiable', 'timid'], 1, 'Cause signal.'],
      ['She has been working here ___ five years.', ['since', 'for', 'from', 'by'], 1, ''],
      ['The new rules will come ___ force from next month.', ['into', 'in', 'to', 'at'], 0, '*come into force*.'],
      ['The minister\'s speech was ___ : it lasted two hours but said very little.', ['concise', 'verbose', 'pithy', 'terse'], 1, 'Definition after the colon.'],
    ),
    cards([
      ['by dint of', 'by means of (effort)'],
      ['in lieu of', 'instead of'],
      ['null and void', 'having no legal force'],
      ['bone of contention', 'subject of dispute'],
    ]),
    sources([
      ['Edutap: UPSC EPFO 2025 analysis (5 fill-in-the-blank questions)', 'https://edutap.in/upsc-epfo/exam-analysis/'],
      ['Oxford Collocations (Oxford Learner\'s Dictionaries)', 'https://www.oxfordlearnersdictionaries.com/'],
    ]),
  ],
};
