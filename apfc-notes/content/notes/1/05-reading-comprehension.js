import { h2, h3, p, ul, li, table, key, trap, steps, quote, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The 2025 EPFO paper had **5 comprehension questions**. They test **main idea**, **specific detail**, **inference**, **author\'s tone or attitude**, **vocabulary in context** and **title or purpose**. Answer only from the passage, not from outside knowledge. Correct inferences are **modest** and follow directly from the text. Options using **absolute words** (*always, never, all, only*) are usually wrong. Read the questions first, then the passage, and **mark evidence** for every answer.',
  blocks: [
    h2('Method'),
    steps([
      ['Skim the questions first (30 seconds)', 'Know what to look for: a detail, a word meaning, the tone, a title.'],
      ['Read the passage actively', 'Note the topic, the author\'s view, and signal words: *however, but, although* (contrast); *therefore, thus* (conclusion); *moreover, also* (addition); *for example* (illustration).'],
      ['Find the main idea', 'Usually in the first or last sentence of a paragraph, or the sentence after *however*.'],
      ['Answer with evidence', 'Every correct answer can be pointed to in the text.'],
      ['Eliminate', 'Remove options that are too broad, too narrow, extreme, outside the passage, or reverse the author\'s view.'],
    ]),

    h2('Question types and how to answer'),
    table(
      ['Type', 'Typical stem', 'How to answer'],
      [
        ['**Main idea / central theme**', '"The passage is mainly about…"', 'Covers the **whole** passage, not one paragraph or example.'],
        ['**Title**', '"The most suitable title is…"', 'Short, covers the main idea, matches the tone.'],
        ['**Detail**', '"According to the passage…"', 'Scan for keywords; the answer paraphrases the text.'],
        ['**Inference**', '"It can be inferred that…", "The author implies…"', 'Not stated, but must be true if the passage is true. Choose the least extreme.'],
        ['**Tone / attitude**', '"The author\'s tone is…"', 'Look at adjectives and adverbs the author chooses.'],
        ['**Vocabulary in context**', '"The word X as used in the passage means…"', 'Replace the word with each option in the sentence; the dictionary meaning may not fit.'],
        ['**Purpose**', '"The author mentions X in order to…"', 'Ask why that example or fact is there: support, contrast, illustrate.'],
        ['**Assumption**', '"The author assumes that…"', 'An unstated premise the argument needs.'],
        ['**Strengthen / weaken**', 'Rare in EPFO', 'Find the claim, then the option that adds or removes support.'],
      ],
    ),

    h2('Tone words'),
    table(
      ['Positive', 'Neutral', 'Negative'],
      [
        ['**laudatory** (praising)', '**objective** (factual, unbiased)', '**critical** (finding fault)'],
        ['**optimistic** (hopeful)', '**analytical** (examining parts)', '**pessimistic** (expecting the worst)'],
        ['**appreciative**', '**informative / expository**', '**sarcastic** (mocking, often bitter)'],
        ['**eulogistic** (high praise)', '**descriptive**', '**cynical** (distrusting motives)'],
        ['**enthusiastic**', '**didactic** (instructive, moralising)', '**satirical** (ridicule to expose faults)'],
        ['**reverent** (deep respect)', '**detached / impartial**', '**sceptical** (doubting)'],
        ['**nostalgic** (longing for the past)', '**narrative**', '**disparaging / derogatory** (belittling)'],
        ['**conciliatory** (seeking agreement)', '**speculative**', '**indignant** (angry at injustice)'],
        ['**sympathetic / compassionate**', '**philosophical / contemplative**', '**ironic** (saying the opposite of what is meant)'],
        ['**persuasive / exhortatory** (urging)', '**cautious / guarded**', '**condescending** (patronising)'],
      ],
    ),

    h2('Traps in options'),
    ul(
      li('**Extreme words**: *always, never, all, none, only, completely, must* — usually wrong in inference questions.'),
      li('**True but irrelevant**: a fact that is correct in real life but not stated or implied in the passage.'),
      li('**Too narrow**: describes one paragraph or example as the main idea.'),
      li('**Too broad**: goes beyond the scope ("the history of all labour laws" for a passage on one Act).'),
      li('**Distortion**: uses words from the passage but changes the relationship (cause/effect reversed).'),
      li('**Opposite**: states the view the author argues against.'),
    ),

    h2('Practice passage'),
    quote(
      'When the Employees\' Provident Funds scheme began in 1952, it covered six industries and a few lakh workers. Its founders saw it as a way to make workers save compulsorily for old age, at a time when most Indians had no pension of any kind. Over seven decades, the scheme grew into one of the largest social security organisations in the world. Yet its growth has also exposed a basic tension. A provident fund is, at heart, a savings account: what a worker receives depends on what was put in and how long it stayed there. Workers who change jobs often, or who withdraw their savings early to meet emergencies, reach old age with little left. Critics argue that a savings scheme cannot substitute for a guaranteed pension. Defenders reply that the fund was never meant to do everything; it is one layer in a system that also includes pensions, insurance and public assistance. The recent move to make balances portable across jobs, and to limit premature withdrawals, suggests that policymakers accept part of the criticism without abandoning the model itself.',
      'Practice passage written for these notes',
    ),
    quiz(
      ['The passage is mainly concerned with:', ['the history of the Provident Fund from 1952 to today', 'the strengths and limits of a provident fund as old-age security', 'why pensions are better than savings schemes', 'the recent rules on premature withdrawals'], 1, '(a) is too narrow (history only), (c) takes one side, (d) is one detail.'],
      ['According to the passage, why do some workers reach old age with little savings?', ['Interest rates are too low', 'They change jobs often or withdraw early', 'Employers do not contribute', 'The scheme covers few industries'], 1, 'Stated directly.'],
      ['The author\'s tone can best be described as:', ['critical', 'laudatory', 'balanced and analytical', 'pessimistic'], 2, 'The author presents both critics and defenders.'],
      ['It can be inferred that the recent changes mentioned in the last sentence:', ['replace the provident fund with a pension', 'respond partly to criticism while keeping the savings model', 'are opposed by the defenders of the fund', 'will guarantee a pension to every worker'], 1, 'Modest inference directly supported.'],
      ['The word "tension" as used in the passage means:', ['nervous anxiety', 'physical tightness', 'a conflict between two aims or features', 'a dispute between workers and employers'], 2, 'Vocabulary in context.'],
    ),
    key('Rules that decide most RC questions', [
      'Stay **inside** the passage.',
      'Choose the **moderate** option for inference.',
      'Main idea covers the **whole** passage.',
      'Tone comes from the author\'s **word choice**, not the topic.',
    ]),
    trap('Time management', [
      'Five RC questions can take as long as fifteen vocabulary questions. Read once, carefully; avoid re-reading the whole passage for each question.',
      'Build speed daily: read one newspaper editorial and summarise it in one sentence.',
    ]),
    cards([
      ['sardonic', 'grimly mocking (negative tone)'],
      ['didactic', 'intended to teach or moralise'],
      ['eulogistic', 'full of high praise'],
      ['sceptical', 'doubting'],
    ]),
    sources([
      ['Edutap: UPSC EPFO 2025 analysis (5 RC questions)', 'https://edutap.in/upsc-epfo/exam-analysis/'],
      ['Oxford Learner\'s Dictionaries (tone words)', 'https://www.oxfordlearnersdictionaries.com/'],
    ]),
  ],
};
