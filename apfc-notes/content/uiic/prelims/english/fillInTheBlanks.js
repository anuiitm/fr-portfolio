const topicData = {
  title: "Fill in the Blanks",
  description: "Master the art of choosing the most appropriate words to complete sentences, including single and double fillers.",
  theory: `
    <h3>Introduction to Fill in the Blanks</h3>
    <p>Fill in the blanks questions are a staple of competitive examinations like the UIIC AO Prelims. They test your vocabulary, understanding of grammar, comprehension skills, and ability to grasp the context of a sentence. In these questions, one or more words are omitted from a sentence, and you are required to choose the most suitable word(s) from the given options to complete the sentence meaningfully and grammatically.</p>

    <h3>Types of Fill in the Blanks</h3>
    <p>Understanding the different types of fill in the blanks can help you formulate specific strategies for each:</p>
    <ul>
      <li><strong>Single Fillers:</strong> Only one word is missing from the sentence. These usually test vocabulary, prepositions, or conjunctions.</li>
      <li><strong>Double Fillers:</strong> Two words are missing. The options consist of pairs of words. Both words in the chosen pair must fit their respective blanks perfectly. This type tests the ability to see the relationship between different parts of the sentence.</li>
      <li><strong>Vocabulary-Based:</strong> The options are synonyms or closely related words, requiring a precise understanding of nuances and connotations.</li>
      <li><strong>Grammar-Based:</strong> The options test your knowledge of tenses, subject-verb agreement, articles, or parts of speech.</li>
      <li><strong>Collocations:</strong> These test your knowledge of words that naturally go together (e.g., "make a mistake," not "do a mistake").</li>
      <li><strong>Phrasal Verbs:</strong> These require choosing the correct phrasal verb (e.g., "give up," "look forward to") based on the context.</li>
    </ul>

    <h3>Core Strategies for Solving</h3>
    <h4>1. Read the Complete Sentence First</h4>
    <p>Before even looking at the options, read the entire sentence from beginning to end. Try to understand the overall meaning, tone, and context. What is the author trying to convey? Is the tone positive, negative, or neutral? Is it a statement of fact, an opinion, or a hypothetical situation?</p>

    <h4>2. Predict the Word (The 'Pre-phrase' Technique)</h4>
    <p>Once you understand the context, try to guess the word (or at least the type of word) that should go in the blank before looking at the choices. Even if your exact word isn't an option, a synonym probably will be. This prevents you from being swayed by clever distractors in the options.</p>

    <h4>3. Analyze the Context and Tone</h4>
    <p>Pay close attention to contextual clues:</p>
    <ul>
      <li><strong>Signal Words:</strong> Words like <em>although, because, therefore, moreover, however, despite</em> provide crucial clues about the relationship between the ideas in the sentence. For example, "although" signals a contrast.</li>
      <li><strong>Tone:</strong> Identify if the sentence has a positive or negative connotation. If the sentence is praising someone, the blank will likely require a positive word.</li>
    </ul>

    <h4>4. Use the Process of Elimination</h4>
    <p>If you aren't sure of the correct answer, start eliminating the wrong ones. Cross out words that are grammatically incorrect in the context, words that have the wrong tone, or words that simply don't make sense.</p>

    <h4>5. Check for Grammar and Syntax</h4>
    <p>Ensure the word you choose fits grammatically. Check:</p>
    <ul>
      <li><strong>Subject-Verb Agreement:</strong> A singular subject needs a singular verb.</li>
      <li><strong>Tense Consistency:</strong> The tense of the missing word should match the overall tense of the sentence.</li>
      <li><strong>Parts of Speech:</strong> Does the blank require a noun, verb, adjective, or adverb?</li>
    </ul>

    <h4>6. Collocations and Idioms</h4>
    <p>Familiarize yourself with common collocations (words that frequently appear together) and idiomatic expressions. Sometimes a word might seem grammatically correct but is contextually wrong because it doesn't collocate well with the surrounding words.</p>

    <h3>Tackling Double Fillers</h3>
    <p>Double fillers can seem daunting, but they actually provide more clues. The key strategy is to tackle one blank at a time.</p>
    <ol>
      <li><strong>Find the Easier Blank:</strong> Read the sentence and decide which blank gives you stronger contextual clues.</li>
      <li><strong>Eliminate Options:</strong> Look at the options for that specific blank and eliminate the pairs where that word doesn't fit.</li>
      <li><strong>Check the Remaining Pairs:</strong> For the remaining options, check if the word for the *other* blank fits. Both words must work perfectly.</li>
    </ol>
    <p>Often, you can arrive at the correct answer by only being sure about one of the blanks.</p>

    <h3>Common Pitfalls to Avoid</h3>
    <ul>
      <li><strong>Ignoring Context:</strong> Choosing a word just because it has a similar meaning without considering how it fits the specific context of the sentence.</li>
      <li><strong>Overlooking Grammar:</strong> Selecting a word that makes sense meaning-wise but violates a grammatical rule.</li>
      <li><strong>Failing to Read the Entire Sentence:</strong> Jumping to conclusions based on the first half of the sentence without reading to the end.</li>
      <li><strong>Second-Guessing:</strong> Changing your initial answer without a solid reason. Your first instinct is often right, provided you've analyzed the sentence carefully.</li>
    </ul>
    <p>Consistent practice is the most effective way to master this section. Read widely to improve your vocabulary and familiarity with diverse sentence structures.</p>
  `,
  tricks: [
    {
      title: "The 'Positive/Negative' Tone Strategy",
      content: "Determine whether the sentence conveys a positive, negative, or neutral tone. Words in the options often fall into these categories. If the sentence describes a disastrous event, eliminate all positive words from the choices. This quickly narrows down your options.",
      example: "Sentence: Despite the manager's ______ efforts to motivate the team, the project still failed.\nSince the project failed 'despite' his efforts, the efforts must have been positive and strong. Options: A) sluggish, B) heroic, C) apathetic, D) lackadaisical. A, C, and D are negative. Therefore, 'heroic' (positive) is the correct choice."
    },
    {
      title: "Grammar Filtering",
      content: "Use basic grammar rules (parts of speech, singular/plural, tenses) to instantly eliminate incorrect options. Look at the words immediately before and after the blank.",
      example: "Sentence: The committee decided to ______ the new policy immediately.\nThe blank requires a base form verb because it follows 'to' (infinitive). Options: A) implementation (noun), B) implementing (gerund), C) implement (base verb), D) implements (singular verb). Only 'implement' fits grammatically."
    },
    {
      title: "The 'Double Blank Independence' Technique",
      content: "In double fillers, never try to solve both blanks simultaneously. Pick the blank that has clearer contextual clues (usually the one closer to transition words). Eliminate all options where the word for *that* specific blank doesn't work. Then, test the remaining pairs with the other blank.",
      example: "Sentence: The ______ weather forced the organizers to ______ the outdoor concert.\nContext: Bad weather causes cancellation/postponement. Let's look at blank 1 (weather). Options: A) pleasant...continue, B) inclement...cancel, C) sunny...delay, D) mild...postpone. Blank 1 must be negative. A, C, and D are positive. B is the only logical choice based on just the first blank."
    },
    {
      title: "Identifying Contrast and Similarity Markers",
      content: "Look for conjunctions and transition words. Words like 'and', 'moreover', 'similarly' indicate that the blank will have a similar tone/meaning to the surrounding text. Words like 'but', 'however', 'although', 'despite' indicate a contrast.",
      example: "Sentence: Although he is known for being extremely ______, he gave a surprisingly generous donation to the charity.\nThe word 'Although' and the phrase 'generous donation' indicate the blank must mean the opposite of generous. Options: A) altruistic, B) benevolent, C) stingy, D) philanthropic. A, B, and D mean generous. 'Stingy' is the only contrasting word."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      year: null,
      question: "The new software system is designed to ______ the workflow and reduce administrative overhead.",
      options: ["complicate", "streamline", "obfuscate", "hinder"],
      correctIndex: 1,
      explanation: "The context suggests a positive action that reduces overhead. 'Streamline' means to make an organization or system more efficient and effective, which perfectly fits."
    },
    {
      id: 2,
      type: "practice",
      year: null,
      question: "Despite her ______ schedule, she always found time to volunteer at the local animal shelter.",
      options: ["leisurely", "hectic", "relaxed", "tranquil"],
      correctIndex: 1,
      explanation: "The word 'Despite' indicates a contrast. If she still found time, her schedule must have been very busy. 'Hectic' means full of incessant or frantic activity."
    },
    {
      id: 3,
      type: "practice",
      year: null,
      question: "The company's decision to expand into international markets was seen as a highly ______ move by industry analysts.",
      options: ["lucrative", "detrimental", "calamitous", "futile"],
      correctIndex: 0,
      explanation: "Usually, expanding into markets is done to generate profit. 'Lucrative' means producing a great deal of profit."
    },
    {
      id: 4,
      type: "practice",
      year: null,
      question: "The politician delivered a ______ speech that managed to offend almost everyone in the audience.",
      options: ["diplomatic", "conciliatory", "provocative", "soothing"],
      correctIndex: 2,
      explanation: "The context says the speech offended people. 'Provocative' means causing annoyance, anger, or another strong reaction, especially deliberately."
    },
    {
      id: 5,
      type: "practice",
      year: null,
      question: "The detective carefully examined the ______ evidence before drawing any conclusions about the suspect's guilt.",
      options: ["circumstantial", "irrelevant", "frivolous", "immaterial"],
      correctIndex: 0,
      explanation: "Detectives examine evidence to draw conclusions. 'Circumstantial' evidence is indirect evidence that implies something occurred but doesn't directly prove it, common in investigations."
    },
    {
      id: 6,
      type: "practice",
      year: null,
      question: "Because he was so ______ in his beliefs, no amount of logical argument could change his mind.",
      options: ["flexible", "yielding", "obstinate", "amenable"],
      correctIndex: 2,
      explanation: "The sentence describes someone who cannot be persuaded. 'Obstinate' means stubbornly refusing to change one's opinion or chosen course of action."
    },
    {
      id: 7,
      type: "practice",
      year: null,
      question: "The museum's collection of ancient artifacts is truly ______; there is nothing else like it in the world.",
      options: ["mediocre", "commonplace", "unparalleled", "run-of-the-mill"],
      correctIndex: 2,
      explanation: "The phrase 'nothing else like it' implies it is unique or unmatched. 'Unparalleled' means having no parallel or equal; exceptional."
    },
    {
      id: 8,
      type: "practice",
      year: null,
      question: "The sudden ______ of the storm caught many hikers off guard, leaving them stranded on the mountain.",
      options: ["cessation", "onset", "conclusion", "departure"],
      correctIndex: 1,
      explanation: "A storm catching people off guard usually happens at its beginning. 'Onset' means the beginning of something, especially something unpleasant."
    },
    {
      id: 9,
      type: "practice",
      year: null,
      question: "To ensure a fair trial, the judge ordered that the jury be ______ from all outside news sources.",
      options: ["inundated", "exposed", "sequestered", "acquainted"],
      correctIndex: 2,
      explanation: "To keep a jury away from outside influence, they are isolated. 'Sequestered' means isolated and hidden away."
    },
    {
      id: 10,
      type: "practice",
      year: null,
      question: "The medicine had a ______ effect on her symptoms, providing relief almost instantly.",
      options: ["deleterious", "pallid", "salutary", "malignant"],
      correctIndex: 2,
      explanation: "The medicine provided 'relief', so the effect must be beneficial. 'Salutary' means producing good effects; beneficial."
    },
    {
      id: 11,
      type: "practice",
      year: null,
      question: "The teacher tried to ______ a sense of curiosity in her students by introducing engaging experiments.",
      options: ["stifle", "extinguish", "foster", "suppress"],
      correctIndex: 2,
      explanation: "Introducing engaging experiments is a way to encourage or develop curiosity. 'Foster' means to encourage or promote the development of something."
    },
    {
      id: 12,
      type: "practice",
      year: null,
      question: "The two warring factions finally agreed to a ______ after months of devastating conflict.",
      options: ["skirmish", "truce", "vendetta", "melee"],
      correctIndex: 1,
      explanation: "Factions agree to stop fighting after a conflict. A 'truce' is an agreement between enemies or opponents to stop fighting or arguing for a certain time."
    },
    {
      id: 13,
      type: "practice",
      year: null,
      question: "The author's latest novel is a ______ narrative that weaves together multiple timelines and perspectives.",
      options: ["linear", "straightforward", "labyrinthine", "simple"],
      correctIndex: 2,
      explanation: "Weaving multiple timelines suggests complexity. 'Labyrinthine' means like a labyrinth; irregular and twisting; highly intricate and confusing."
    },
    {
      id: 14,
      type: "practice",
      year: null,
      question: "His explanation was so ______ that even the experts in the room had trouble understanding his point.",
      options: ["lucid", "convoluted", "articulate", "transparent"],
      correctIndex: 1,
      explanation: "If experts had trouble understanding, the explanation must have been complex. 'Convoluted' means extremely complex and difficult to follow."
    },
    {
      id: 15,
      type: "practice",
      year: null,
      question: "The athlete's ______ dedication to her training regimen is the primary reason for her Olympic success.",
      options: ["sporadic", "wavering", "unflagging", "intermittent"],
      correctIndex: 2,
      explanation: "Olympic success requires consistent, untiring dedication. 'Unflagging' means tireless; persistent."
    },
    {
      id: 16,
      type: "practice",
      year: null,
      question: "The manager's ______ criticism demoralized the team, leading to a significant drop in productivity.",
      options: ["constructive", "scathing", "gentle", "supportive"],
      correctIndex: 1,
      explanation: "Criticism that demoralizes a team is likely harsh. 'Scathing' means witheringly harsh."
    },
    {
      id: 17,
      type: "practice",
      year: null,
      question: "Despite the ______ evidence against him, the defendant maintained his innocence throughout the trial.",
      options: ["flimsy", "overwhelming", "paltry", "negligible"],
      correctIndex: 1,
      explanation: "The word 'Despite' indicates contrast. He maintained innocence even though the evidence was strong. 'Overwhelming' fits perfectly."
    },
    {
      id: 18,
      type: "practice",
      year: null,
      question: "The old mansion, once grand and beautiful, now stood in a state of utter ______.",
      options: ["splendor", "opulence", "dilapidation", "grandeur"],
      correctIndex: 2,
      explanation: "The contrast 'once grand... now...' implies it is no longer grand. 'Dilapidation' is the state or process of falling into decay or being in disrepair."
    },
    {
      id: 19,
      type: "practice",
      year: null,
      question: "To ______ the situation and prevent further panic, the authorities released a calming public statement.",
      options: ["exacerbate", "aggravate", "ameliorate", "intensify"],
      correctIndex: 2,
      explanation: "Releasing a calming statement is meant to improve the situation. 'Ameliorate' means to make (something bad or unsatisfactory) better."
    },
    {
      id: 20,
      type: "practice",
      year: null,
      question: "The comedian's ______ remarks offended many in the audience, though a few found them hilarious.",
      options: ["inoffensive", "bland", "flippant", "reverent"],
      correctIndex: 2,
      explanation: "Remarks that offend are lacking proper respect. 'Flippant' means not showing a serious or respectful attitude."
    },
    {
      id: 21,
      type: "past_year",
      year: 2023,
      question: "The economic crisis has ______ a significant decline in consumer spending across the country.",
      options: ["precipitated", "alleviated", "mitigated", "resolved"],
      correctIndex: 0,
      explanation: "An economic crisis would cause a decline. 'Precipitated' means to cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely."
    },
    {
      id: 22,
      type: "past_year",
      year: 2022,
      question: "The government's new policy is aimed at ______ the disparity between the rich and the poor.",
      options: ["widening", "broadening", "bridging", "expanding"],
      correctIndex: 2,
      explanation: "Policies usually aim to reduce inequality. 'Bridging' a gap or disparity means to make the difference between them smaller."
    },
    {
      id: 23,
      type: "past_year",
      year: 2021,
      question: "His sudden resignation left the company in a state of ______, with no clear succession plan in place.",
      options: ["tranquility", "turmoil", "order", "harmony"],
      correctIndex: 1,
      explanation: "A sudden resignation with no succession plan causes chaos. 'Turmoil' means a state of great disturbance, confusion, or uncertainty."
    },
    {
      id: 24,
      type: "past_year",
      year: 2020,
      question: "The artist's early works were quite conventional, but her later paintings became increasingly ______.",
      options: ["orthodox", "traditional", "avant-garde", "conservative"],
      correctIndex: 2,
      explanation: "The word 'but' signals a contrast to 'conventional'. 'Avant-garde' refers to new and unusual or experimental ideas, especially in the arts."
    },
    {
      id: 25,
      type: "past_year",
      year: 2019,
      question: "The scientists were ______ by the unexpected results of the experiment, which contradicted their initial hypothesis.",
      options: ["vindicated", "baffled", "reassured", "encouraged"],
      correctIndex: 1,
      explanation: "Results that contradict a hypothesis would confuse scientists. 'Baffled' means totally bewilder or perplex."
    }
  ]
};

export default topicData;
