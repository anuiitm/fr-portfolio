const topicData = {
  title: "Cloze Test",
  description: "Master the art of filling in the blanks in a passage using contextual and grammatical clues.",
  theory: `
    <h3>Introduction to Cloze Test</h3>
    <p>A Cloze Test is a comprehension exercise consisting of a portion of text with certain words removed. The candidate is asked to replace the missing words from the given options. It is designed to test a candidate's reading comprehension, vocabulary, grammar, and understanding of the contextual flow of a passage. In bank and insurance exams like UIIC AO, the Cloze Test carries a significant weightage, usually comprising 5 to 10 questions in the English Language section. Mastering this topic can yield high accuracy and quick marks.</p>

    <h3>Exam Pattern: Old vs. New</h3>
    <p><b>Old Pattern:</b> In the traditional format, a single passage is given with numbered blanks. For each blank, five options are provided, and you need to select the most appropriate word that fits grammatically and contextually. The blanks usually focus on vocabulary, prepositions, or basic grammar rules.</p>
    <p><b>New Pattern:</b> The newer formats involve variations to increase the difficulty level. Some common variations include:</p>
    <ul>
      <li><b>Word Replacement:</b> A word is already given in bold next to the blank or inside the blank. You have to decide if the given word fits or if one of the options is a better replacement.</li>
      <li><b>Multiple Blanks:</b> Sometimes, an option contains a pair of words to fill two blanks in a sentence.</li>
      <li><b>Phrase/Sentence Completion:</b> Instead of a single word, a phrase or a part of a sentence is missing.</li>
    </ul>

    <h3>Key Strategies to Solve Cloze Test</h3>
    <h4>1. Read the Complete Passage First</h4>
    <p>Before looking at the options, always read the entire passage rapidly. This helps you understand the overall theme, tone, and context of the text. Whether the passage is positive, negative, descriptive, or analytical will heavily influence your choice of words. Do not jump to answering the first blank immediately.</p>
    
    <h4>2. Analyze Contextual Clues</h4>
    <p>Context clues are hints found within a sentence, paragraph, or passage that a reader can use to understand the meanings of new or unfamiliar words. Look at the sentences preceding and succeeding the blank. The tone (optimistic, pessimistic, sarcastic, neutral) can eliminate options that contradict the established mood.</p>
    <ul>
      <li><b>Contrast Clues:</b> Look for words like <em>however, although, but, despite, in contrast</em>. These indicate a shift in tone or meaning.</li>
      <li><b>Supportive Clues:</b> Words like <em>additionally, furthermore, moreover, similarly, and</em> indicate continuity in the thought process.</li>
    </ul>

    <h4>3. Leverage Grammatical Clues</h4>
    <p>Grammar is your best friend when vocabulary fails. Analyze the parts of speech required in the blank:</p>
    <ul>
      <li><b>Articles:</b> If the blank is preceded by 'a' or 'an', it limits your options to words starting with a consonant or vowel sound, respectively.</li>
      <li><b>Prepositions:</b> Many verbs and adjectives are followed by fixed prepositions (e.g., 'accused <b>of</b>', 'acquainted <b>with</b>', 'responsible <b>for</b>'). Recognizing these pairings instantly leads to the correct answer.</li>
      <li><b>Tense Consistency:</b> Ensure the verb you choose aligns with the tense of the passage. If the passage narrates a past event, look for past tense verbs.</li>
      <li><b>Subject-Verb Agreement:</b> A singular subject requires a singular verb, and a plural subject requires a plural verb. This simple rule often eliminates two or three incorrect options.</li>
    </ul>

    <h4>4. Watch Out for Collocations</h4>
    <p>Collocations are pairs or groups of words that are frequently used together by native speakers. Knowing common collocations can help you choose the right word even when multiple options seem grammatically correct.</p>
    <p>Examples of common collocations:</p>
    <ul>
      <li>Make a decision (not 'do a decision')</li>
      <li>Catch fire (not 'get fire')</li>
      <li>Pay attention (not 'give attention')</li>
      <li>Strictly speaking, strong evidence, deep sleep, fast food.</li>
    </ul>

    <h4>5. Use the Elimination Method</h4>
    <p>Often, you might not know the exact word that fits, but you can confidently rule out words that definitely do not fit. Eliminate options that:</p>
    <ul>
      <li>Violate grammar rules (wrong tense, wrong part of speech).</li>
      <li>Change the meaning or contradict the tone of the sentence.</li>
      <li>Are grammatically correct but idiomatically awkward.</li>
    </ul>

    <h3>Step-by-Step Solving Approach</h3>
    <ol>
      <li><b>Skim:</b> Read the passage in 1-2 minutes without looking at the options. Grasp the central idea.</li>
      <li><b>Predict:</b> Try to guess the word that could fit the blank before looking at the choices.</li>
      <li><b>Evaluate:</b> Look at the options and find the one that matches your prediction or serves the same purpose.</li>
      <li><b>Check Grammar:</b> Ensure the chosen word fits seamlessly into the sentence structure.</li>
      <li><b>Review:</b> Once all blanks are filled, read the completed sentence or paragraph to ensure it flows logically.</li>
    </ol>
  `,
  tricks: [
    {
      title: "Trick 1: The 'Tone and Polarity' Check",
      content: "Determine if the sentence conveys a positive (+) or negative (-) meaning. If the sentence is discussing a disaster, look for words with negative connotations. If it's about success or improvement, look for positive words. This helps eliminate options that clash with the sentence's polarity.",
      example: "Passage: The unexpected economic crash left the citizens feeling completely ________.\nOptions: A) elated B) devastated C) indifferent D) fulfilled E) amused\nExplanation: The context 'economic crash' is negative. Options A (elated), D (fulfilled), and E (amused) are positive. C (indifferent) doesn't fit the severity. B (devastated) is a strong negative word that fits perfectly."
    },
    {
      title: "Trick 2: Identifying Fixed Prepositions",
      content: "Many blanks in bank exams test your knowledge of phrasal verbs or adjectives/verbs followed by fixed prepositions. Look at the word immediately following the blank. If it's a preposition, search for the verb or adjective that pairs with it.",
      example: "Passage: The manager was completely ignorant ________ the malpractices happening in his department.\nOptions: A) with B) to C) of D) for E) about\nExplanation: The adjective 'ignorant' is always followed by the preposition 'of'. Therefore, 'of' is the correct choice regardless of how the others sound."
    },
    {
      title: "Trick 3: Rule of Parallelism",
      content: "When words or phrases are joined by conjunctions like 'and', 'or', 'as well as', they must be in the same grammatical form (e.g., noun and noun, gerund and gerund, past tense and past tense). Use the known word to find the form of the unknown word.",
      example: "Passage: The new policy aims at reducing poverty, improving healthcare, and ________ education accessible to all.\nOptions: A) make B) made C) makes D) making E) to make\nExplanation: The sentence uses gerunds 'reducing' and 'improving'. To maintain parallel structure, the blank must also be a gerund. Hence, 'making' is correct."
    },
    {
      title: "Trick 4: The 'Part of Speech' Filter",
      content: "Analyze the sentence structure to determine what part of speech is missing (Noun, Verb, Adjective, Adverb). If the blank comes between an article ('the') and a noun, it must be an adjective. If it modifies a verb, it must be an adverb.",
      example: "Passage: She solved the complex mathematical problem ________.\nOptions: A) effortless B) ease C) effortlessly D) easy E) facile\nExplanation: The blank modifies the verb 'solved', so it requires an adverb. Only 'effortlessly' is an adverb; the rest are nouns or adjectives."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      year: null,
      question: "Passage 1: Global warming is a (1)______ increase in the overall temperature of the earth's atmosphere generally attributed to the greenhouse effect caused by increased levels of carbon dioxide. What should fill blank (1)?",
      options: ["sudden", "gradual", "negligible", "fictional", "drastic"],
      correctIndex: 1,
      explanation: "Global warming is a process that occurs over time, making 'gradual' the most appropriate adjective. 'Sudden' contradicts scientific facts, and 'negligible' minimizes a major issue."
    },
    {
      id: 2,
      type: "practice",
      year: null,
      question: "Passage 1: ...levels of carbon dioxide, CFCs, and other (2)______. What should fill blank (2)?",
      options: ["elements", "liquids", "pollutants", "nutrients", "alloys"],
      correctIndex: 2,
      explanation: "The context is the greenhouse effect and harmful emissions. 'Pollutants' correctly categorizes substances like CO2 and CFCs that harm the atmosphere."
    },
    {
      id: 3,
      type: "practice",
      year: null,
      question: "Passage 1: The increasing temperatures are causing glaciers to melt, which in turn (3)______ sea levels. What should fill blank (3)?",
      options: ["lowers", "maintains", "raises", "stabilizes", "depletes"],
      correctIndex: 2,
      explanation: "Melting glaciers add water to the oceans, which naturally 'raises' sea levels. The other words indicate the opposite or no change."
    },
    {
      id: 4,
      type: "practice",
      year: null,
      question: "Passage 1: This phenomenon poses a severe (4)______ to coastal cities worldwide. What should fill blank (4)?",
      options: ["benefit", "threat", "opportunity", "promise", "relief"],
      correctIndex: 1,
      explanation: "Rising sea levels are dangerous to coastal cities. The word 'severe' requires a negative noun, making 'threat' the perfect fit."
    },
    {
      id: 5,
      type: "practice",
      year: null,
      question: "Passage 1: If immediate action is not taken, the consequences will be (5)______. What should fill blank (5)?",
      options: ["reversible", "insignificant", "catastrophic", "beneficial", "temporary"],
      correctIndex: 2,
      explanation: "The passage sets a dire tone about the lack of action. 'Catastrophic' matches the severe and negative tone. The other options diminish the severity of the consequences."
    },
    {
      id: 6,
      type: "practice",
      year: null,
      question: "Passage 2: The advent of artificial intelligence has (6)______ the way industries operate across the globe. What should fill blank (6)?",
      options: ["preserved", "revolutionized", "stagnated", "worsened", "ignored"],
      correctIndex: 1,
      explanation: "AI has brought massive changes to industries. 'Revolutionized' accurately captures this massive transformation. 'Preserved' and 'stagnated' mean lack of change."
    },
    {
      id: 7,
      type: "practice",
      year: null,
      question: "Passage 2: While some fear that machines will (7)______ human jobs, others believe they will create new opportunities. What should fill blank (7)?",
      options: ["create", "multiply", "replace", "enhance", "ignore"],
      correctIndex: 2,
      explanation: "The sentence contrasts a fear with a belief about new opportunities. The common fear regarding AI is that it will 'replace' human jobs."
    },
    {
      id: 8,
      type: "practice",
      year: null,
      question: "Passage 2: Automation can handle repetitive tasks with high (8)______, freeing up humans for creative work. What should fill blank (8)?",
      options: ["error", "cost", "precision", "delay", "boredom"],
      correctIndex: 2,
      explanation: "Machines are known for doing repetitive tasks accurately. 'Precision' implies high accuracy, fitting the positive context of the sentence."
    },
    {
      id: 9,
      type: "practice",
      year: null,
      question: "Passage 2: However, it is crucial that the workforce is (9)______ with the necessary skills to work alongside these technologies. What should fill blank (9)?",
      options: ["burdened", "equipped", "deprived", "isolated", "confused"],
      correctIndex: 1,
      explanation: "To work with new technology, workers need to be provided with skills. 'Equipped' is the correct word used when talking about providing necessary tools or skills."
    },
    {
      id: 10,
      type: "practice",
      year: null,
      question: "Passage 2: Ultimately, AI should be viewed as a tool to (10)______ human capabilities rather than a rival. What should fill blank (10)?",
      options: ["diminish", "augment", "restrict", "destroy", "complicate"],
      correctIndex: 1,
      explanation: "The passage suggests viewing AI positively ('rather than a rival'). 'Augment', meaning to enhance or increase, fits this constructive tone perfectly."
    },
    {
      id: 11,
      type: "practice",
      year: null,
      question: "Passage 3: Reading is an essential habit that (11)______ cognitive development in children. What should fill blank (11)?",
      options: ["hinders", "fosters", "prevents", "ignores", "delays"],
      correctIndex: 1,
      explanation: "Reading is described as an 'essential habit', so it must have a positive effect. 'Fosters' (promotes/encourages) is the only positive verb here."
    },
    {
      id: 12,
      type: "practice",
      year: null,
      question: "Passage 3: It not only improves vocabulary but also enhances (12)______ thinking and empathy. What should fill blank (12)?",
      options: ["critical", "shallow", "negative", "absent", "rigid"],
      correctIndex: 0,
      explanation: "Along with empathy, reading develops higher-order thinking skills. 'Critical' thinking is a well-known positive collocation in educational contexts."
    },
    {
      id: 13,
      type: "practice",
      year: null,
      question: "Passage 3: Unfortunately, with the rise of digital entertainment, many youngsters are losing (13)______ in books. What should fill blank (13)?",
      options: ["money", "sight", "interest", "hope", "touch"],
      correctIndex: 2,
      explanation: "The phrase 'losing interest in' is a standard idiom. The passage talks about youngsters moving away from books to digital entertainment."
    },
    {
      id: 14,
      type: "practice",
      year: null,
      question: "Passage 3: Parents and teachers must collaborate to (14)______ a love for literature at an early age. What should fill blank (14)?",
      options: ["extinguish", "instill", "erase", "demand", "hide"],
      correctIndex: 1,
      explanation: "To gradually establish an idea or attitude in a person's mind is to 'instill' it. You 'instill a love' for something."
    },
    {
      id: 15,
      type: "practice",
      year: null,
      question: "Passage 3: Establishing designated reading times can be a highly (15)______ strategy in this regard. What should fill blank (15)?",
      options: ["futile", "effective", "dangerous", "expensive", "useless"],
      correctIndex: 1,
      explanation: "The passage is advocating for reading. Therefore, a strategy to promote reading would be 'effective', a positive adjective."
    },
    {
      id: 16,
      type: "past_year",
      year: 2017,
      question: "Passage 4 (PYQ): The banking sector in India is currently (16)______ a massive transition due to digitalization. What should fill blank (16)?",
      options: ["avoiding", "undergoing", "preventing", "denying", "escaping"],
      correctIndex: 1,
      explanation: "A sector experiences or goes through a transition. 'Undergoing' is the correct gerund to denote the process of experiencing a significant change."
    },
    {
      id: 17,
      type: "past_year",
      year: 2017,
      question: "Passage 4 (PYQ): The introduction of unified payment interfaces has made transactions incredibly (17)______. What should fill blank (17)?",
      options: ["cumbersome", "sluggish", "seamless", "complex", "hazardous"],
      correctIndex: 2,
      explanation: "Digital payments are meant to make things easy and smooth. 'Seamless' means smooth and without complications, fitting the positive impact of UPI."
    },
    {
      id: 18,
      type: "past_year",
      year: 2017,
      question: "Passage 4 (PYQ): However, this rapid shift has also exposed the system to new cyber (18)______. What should fill blank (18)?",
      options: ["benefits", "securities", "vulnerabilities", "assurances", "protections"],
      correctIndex: 2,
      explanation: "The word 'However' indicates a shift to a negative consequence. Cyber 'vulnerabilities' (or threats/risks) fit perfectly as negative consequences of digitalization."
    },
    {
      id: 19,
      type: "past_year",
      year: 2017,
      question: "Passage 4 (PYQ): Banks must invest heavily in robust infrastructure to (19)______ customer data. What should fill blank (19)?",
      options: ["sell", "safeguard", "expose", "ignore", "manipulate"],
      correctIndex: 1,
      explanation: "The purpose of robust infrastructure in the context of cyber threats is to protect data. 'Safeguard' is the most appropriate verb."
    },
    {
      id: 20,
      type: "past_year",
      year: 2017,
      question: "Passage 4 (PYQ): A failure to do so could result in a catastrophic loss of (20)______ among the public. What should fill blank (20)?",
      options: ["funds", "trust", "branches", "employees", "time"],
      correctIndex: 1,
      explanation: "If customer data is not safeguarded, customers lose faith in the bank. While 'funds' might be lost, 'loss of trust among the public' is the standard phrase for reputational damage."
    }
  ]
};

export default topicData;
