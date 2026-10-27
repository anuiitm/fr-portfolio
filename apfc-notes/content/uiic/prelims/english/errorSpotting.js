const topicData = {
  title: "Error Spotting",
  description: "Master the grammatical rules to spot errors in sentences efficiently.",
  theory: `
    <h3>1. Subject-Verb Agreement</h3>
    <p>The verb must always agree with its subject in number and person. Here are the essential rules:</p>
    <ul>
      <li><strong>Rule 1:</strong> Two or more singular subjects connected by 'and' usually take a plural verb. (e.g., Ram and Shyam are friends.)</li>
      <li><strong>Rule 2:</strong> If two singular nouns refer to the same person or thing, the verb must be singular. (e.g., The poet and philosopher is dead.)</li>
      <li><strong>Rule 3:</strong> Words joined to a singular subject by 'with', 'together with', 'in addition to', 'as well as', etc., do not affect the number of the verb. (e.g., The captain, along with his players, was present.)</li>
      <li><strong>Rule 4:</strong> Two or more singular subjects connected by 'or', 'nor', 'either...or', 'neither...nor' take a singular verb. (e.g., Neither he nor I was there.)</li>
      <li><strong>Rule 5:</strong> When subjects joined by 'or' or 'nor' are of different numbers, the verb must be plural, and the plural subject must be placed next to the verb. (e.g., Neither the principal nor the teachers were present.)</li>
      <li><strong>Rule 6:</strong> 'Either', 'neither', 'each', 'everyone', 'many a' must be followed by a singular verb. (e.g., Each of the boys was rewarded.)</li>
      <li><strong>Rule 7:</strong> Some nouns which are plural in form but singular in meaning take a singular verb. (e.g., Mathematics is my favorite subject.)</li>
      <li><strong>Rule 8:</strong> Some nouns which are singular in form but plural in meaning take a plural verb. (e.g., The cattle are grazing.)</li>
      <li><strong>Rule 9:</strong> A collective noun takes a singular verb when the collection is thought of as a whole; a plural verb when the individuals of which it is composed are thought of. (e.g., The jury has given its verdict. / The jury are divided in their opinions.)</li>
      <li><strong>Rule 10:</strong> When the plural noun is a proper name for some single object or some collective unit, it must be followed by a singular verb. (e.g., The Arabian Nights is an interesting book.)</li>
      <li><strong>Rule 11:</strong> When a plural noun denotes some specific quantity or amount considered as a whole, the verb is generally singular. (e.g., Ten kilometers is a long distance to walk.)</li>
      <li><strong>Rule 12:</strong> The verb in a relative clause must agree with the antecedent of the relative pronoun. (e.g., I, who am your friend, will help you.)</li>
      <li><strong>Rule 13:</strong> 'None' takes a singular or plural verb depending on the noun it refers to. (e.g., None of the money was stolen. / None of the students have finished.)</li>
      <li><strong>Rule 14:</strong> Phrases like 'A number of' take a plural verb, while 'The number of' takes a singular verb. (e.g., A number of students are absent. / The number of students is fifty.)</li>
      <li><strong>Rule 15:</strong> Fractions and percentages take a singular or plural verb depending on the noun they modify. (e.g., Half of the cake was eaten. / Half of the students were present.)</li>
    </ul>

    <h3>2. Tense Errors</h3>
    <p>Using the correct tense is crucial for conveying the exact time of an action.</p>
    <ul>
      <li><strong>Simple Present:</strong> Used for universal truths, habits, and scheduled events in the future. (e.g., The sun rises in the east.)</li>
      <li><strong>Present Continuous:</strong> Used for actions happening now or planned future actions. (e.g., I am reading a book.)</li>
      <li><strong>Present Perfect:</strong> Used for past actions with relevance to the present. (e.g., I have finished my homework.)</li>
      <li><strong>Present Perfect Continuous:</strong> Used for actions that started in the past and are still continuing. (e.g., I have been waiting for two hours.)</li>
      <li><strong>Simple Past:</strong> Used for completed actions in the past. (e.g., I visited London last year.)</li>
      <li><strong>Past Continuous:</strong> Used for past actions happening at a specific time. (e.g., I was reading when he called.)</li>
      <li><strong>Past Perfect:</strong> Used for an action completed before another past action. (e.g., The train had left before I reached the station.)</li>
      <li><strong>Past Perfect Continuous:</strong> Used for a past action continuing up to another past time. (e.g., I had been working for five hours when he arrived.)</li>
      <li><strong>Simple Future:</strong> Used for future predictions or spontaneous decisions. (e.g., I will go to the market.)</li>
      <li><strong>Future Continuous:</strong> Used for actions that will be in progress at a future time. (e.g., I will be sleeping at midnight.)</li>
      <li><strong>Future Perfect:</strong> Used for actions that will be completed before a certain future time. (e.g., I will have finished the project by tomorrow.)</li>
      <li><strong>Future Perfect Continuous:</strong> Used for ongoing actions up to a certain future point. (e.g., Next month, I will have been working here for two years.)</li>
    </ul>
    <p><em>Important:</em> Do not use past tense with 'did'. (Incorrect: He did not went. Correct: He did not go.) Do not use double past tenses.</p>

    <h3>3. Article Errors</h3>
    <p>Articles define a noun as specific or unspecific.</p>
    <ul>
      <li><strong>A/An:</strong> Indefinite articles. Use 'a' before consonant sounds, 'an' before vowel sounds. (e.g., A university, an umbrella, an hour.)</li>
      <li><strong>The:</strong> Definite article. Used for specific nouns, superlatives, unique objects, names of rivers, mountain ranges, etc. (e.g., The Himalayas, the best boy, the sun.)</li>
      <li><strong>Omission of Articles:</strong> Do not use articles before abstract nouns in a general sense, plural countable nouns in a general sense, names of languages, meals, sports, etc. (e.g., Honesty is the best policy. Not: The honesty...)</li>
    </ul>

    <h3>4. Preposition Errors</h3>
    <p>Prepositions show the relationship between nouns or pronouns and other words.</p>
    <ul>
      <li><strong>In/At/On (Time):</strong> 'At' for specific times (at 5 PM), 'On' for days/dates (on Monday), 'In' for months/years/seasons (in 1990).</li>
      <li><strong>In/At/On (Place):</strong> 'At' for specific locations (at the bus stop), 'On' for surfaces (on the table), 'In' for enclosed spaces (in the room).</li>
      <li><strong>Between vs. Among:</strong> 'Between' for two items, 'Among' for three or more. (e.g., Divide the sweets among the students.)</li>
      <li><strong>Beside vs. Besides:</strong> 'Beside' means next to, 'Besides' means in addition to. (e.g., Besides English, he knows French.)</li>
      <li><strong>Since vs. For:</strong> 'Since' for a point in time (since Monday), 'For' for a period of time (for two hours).</li>
    </ul>

    <h3>5. Pronoun Errors</h3>
    <p>Pronouns must agree with their antecedents in number, person, and gender.</p>
    <ul>
      <li><strong>Subjective vs. Objective Case:</strong> Use subjective case for subjects (I, he, she, they) and objective for objects (me, him, her, them). After prepositions, always use the objective case. (e.g., Between you and me, not between you and I.)</li>
      <li><strong>Reflexive Pronouns:</strong> Use myself, yourself, etc., when the subject and object are the same person. Certain verbs like 'enjoy', 'avail', 'pride' often take reflexive pronouns. (e.g., He availed himself of the opportunity.)</li>
      <li><strong>Relative Pronouns:</strong> 'Who' for subjects, 'Whom' for objects, 'Which' for things, 'That' for both people and things in defining clauses.</li>
    </ul>

    <h3>6. Modifier Errors</h3>
    <ul>
      <li><strong>Dangling Modifiers:</strong> A phrase modifying a noun that is missing or unclear. (Incorrect: Walking down the street, the trees were beautiful. Correct: Walking down the street, I saw the beautiful trees.)</li>
      <li><strong>Misplaced Modifiers:</strong> A modifier placed too far from the word it modifies. (Incorrect: He almost ate the whole pizza. Correct: He ate almost the whole pizza.)</li>
    </ul>

    <h3>7. Parallelism</h3>
    <p>Elements in a series must be in the same grammatical form. (Incorrect: He likes swimming, running, and to jump. Correct: He likes swimming, running, and jumping.)</p>

    <h3>8. Conditional Sentences</h3>
    <ul>
      <li><strong>Type 0 (General Truths):</strong> If + Present Simple, Present Simple. (e.g., If you heat water to 100 degrees, it boils.)</li>
      <li><strong>Type 1 (Real Future):</strong> If + Present Simple, Future Simple. (e.g., If it rains, I will stay at home.)</li>
      <li><strong>Type 2 (Unreal Present/Future):</strong> If + Past Simple, would + base verb. (e.g., If I were you, I would study harder. Note: 'were' is used for all subjects.)</li>
      <li><strong>Type 3 (Unreal Past):</strong> If + Past Perfect, would have + past participle. (e.g., If he had studied, he would have passed.)</li>
    </ul>

    <h3>9. Commonly Confused Words</h3>
    <ul>
      <li><strong>Affect vs. Effect:</strong> 'Affect' is usually a verb (to influence), 'Effect' is usually a noun (result).</li>
      <li><strong>Principal vs. Principle:</strong> 'Principal' means head of a school or main, 'Principle' means a rule or belief.</li>
      <li><strong>Lose vs. Loose:</strong> 'Lose' is a verb (to fail to win or misplace), 'Loose' is an adjective (not tight).</li>
      <li><strong>Its vs. It's:</strong> 'Its' is possessive, 'It's' is a contraction of 'it is'.</li>
    </ul>
  `,
  tricks: [
    {
      title: "The 'Rule of Proximity' Trap",
      content: "Examiners often separate the subject and the verb with a long prepositional phrase or dependent clause. Ignore everything between the true subject and the verb to check for agreement.",
      example: "Incorrect: The quality of the apples were not good. (You might see 'apples' and use 'were').\nCorrect: The quality of the apples was not good. (The subject is 'quality', which is singular)."
    },
    {
      title: "The 'Past Perfect' Indicator",
      content: "If a sentence contains two past actions, the action that happened FIRST must be in the Past Perfect tense (had + V3), and the action that happened SECOND must be in the Simple Past tense (V2).",
      example: "Incorrect: The patient died before the doctor arrived.\nCorrect: The patient had died before the doctor arrived. (The patient dying happened first)."
    },
    {
      title: "Hardly / Scarcely / No sooner Rules",
      content: "These negative adverbs take an inverted word order (verb before subject) when they start a sentence. 'Hardly/Scarcely' pairs with 'when', while 'No sooner' pairs with 'than'.",
      example: "Incorrect: No sooner I had stepped out, it started raining.\nCorrect: No sooner had I stepped out than it started raining."
    },
    {
      title: "The 'Lest' Rule",
      content: "The conjunction 'lest' means 'for fear that' or 'in order that not'. It should only be followed by the modal auxiliary 'should' or the base form of the verb, NEVER 'would' or 'will' or 'may'. Also, do not use 'not' after lest.",
      example: "Incorrect: Walk carefully lest you will fall.\nCorrect: Walk carefully lest you should fall."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: The manager, as well as the employees, are going to attend the annual conference in Mumbai next week.",
      options: [
        "The manager, as well as",
        "the employees, are going",
        "to attend the annual conference",
        "in Mumbai next week.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "When two subjects are joined by 'as well as', the verb must agree with the first subject. Since 'The manager' is singular, the verb should be 'is going' instead of 'are going'."
    },
    {
      id: 2,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Neither of the two candidates who had applied for the position of Assistant Manager were suitable for the job.",
      options: [
        "Neither of the two candidates",
        "who had applied for the position",
        "of Assistant Manager were suitable",
        "for the job.",
        "No error"
      ],
      correctIndex: 2,
      explanation: "The subject of the sentence is 'Neither', which is singular and must be followed by a singular verb. Therefore, 'were suitable' should be 'was suitable'."
    },
    {
      id: 3,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Scarcely had the minister started his speech then the crowd began to protest against the new policies.",
      options: [
        "Scarcely had the minister",
        "started his speech then",
        "the crowd began to protest",
        "against the new policies.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "'Scarcely' is always followed by the conjunction 'when', not 'then'. The correct phrase should be 'started his speech when'."
    },
    {
      id: 4,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Despite of the heavy rain, the delivery boy managed to deliver the parcel exactly on time.",
      options: [
        "Despite of the heavy rain,",
        "the delivery boy managed",
        "to deliver the parcel",
        "exactly on time.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "The preposition 'despite' means 'in spite of' and takes no preposition after it. Therefore, 'Despite of' is incorrect; it should be just 'Despite' or 'In spite of'."
    },
    {
      id: 5,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: One of the most important factor contributing to the success of the project was the team's dedication.",
      options: [
        "One of the most important factor",
        "contributing to the success",
        "of the project was",
        "the team's dedication.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "The phrase 'One of the' is always followed by a plural noun. Therefore, 'factor' should be 'factors'."
    },
    {
      id: 6,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: If I would have known about your illness, I would definitely have visited you in the hospital.",
      options: [
        "If I would have known",
        "about your illness,",
        "I would definitely have visited you",
        "in the hospital.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "In a Type 3 conditional sentence (unreal past), the 'if' clause uses the Past Perfect tense. Therefore, 'If I would have known' should be 'If I had known'."
    },
    {
      id: 7,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: The committee comprises of five members, all of whom are experts in their respective fields.",
      options: [
        "The committee comprises of",
        "five members, all of whom",
        "are experts in",
        "their respective fields.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "The verb 'comprise' means 'consist of'. It is not followed by the preposition 'of' in active voice. The correct phrasing is 'The committee comprises five members'."
    },
    {
      id: 8,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: It is high time that the government takes strict action against the corrupt officials in the department.",
      options: [
        "It is high time that",
        "the government takes strict action",
        "against the corrupt officials",
        "in the department.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "Phrases like 'It is time', 'It is high time', and 'It is about time' are followed by a subject and a verb in the simple past tense when expressing something that should be done now. So, 'takes' should be 'took'."
    },
    {
      id: 9,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: A large number of students has applied for the scholarship, making the competition very tough this year.",
      options: [
        "A large number of students",
        "has applied for the scholarship,",
        "making the competition",
        "very tough this year.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "The phrase 'A number of' always takes a plural verb, while 'The number of' takes a singular verb. Therefore, 'has applied' should be 'have applied'."
    },
    {
      id: 10,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Unless you do not work hard, you will not be able to clear the upcoming banking examination.",
      options: [
        "Unless you do not work hard,",
        "you will not be able",
        "to clear the upcoming",
        "banking examination.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "The word 'Unless' itself carries a negative meaning ('if not'). We do not use 'not' in the clause starting with unless. It should be 'Unless you work hard'."
    },
    {
      id: 11,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: The scenery of Kashmir are very charming and attracts thousands of tourists every year.",
      options: [
        "The scenery of Kashmir",
        "are very charming and",
        "attracts thousands of tourists",
        "every year.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "The word 'scenery' is an uncountable noun and does not have a plural form. It takes a singular verb. Therefore, 'are' should be 'is'."
    },
    {
      id: 12,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: He is one of those writers who has won acclaim the world over for his unique storytelling.",
      options: [
        "He is one of those writers",
        "who has won acclaim",
        "the world over for",
        "his unique storytelling.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "In the structure 'one of + plural noun + relative pronoun', the verb that follows the relative pronoun agrees with the antecedent plural noun ('writers'). So, 'has won' should be 'have won'."
    },
    {
      id: 13,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Between you and I, he probably won't come to the party tonight.",
      options: [
        "Between you and I,",
        "he probably won't come",
        "to the party",
        "tonight.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "'Between' is a preposition, and pronouns following a preposition must be in the objective case. Therefore, 'Between you and I' should be 'Between you and me'."
    },
    {
      id: 14,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: The reason why he was rejected was because he was too young for the senior role.",
      options: [
        "The reason why",
        "he was rejected",
        "was because he was too young",
        "for the senior role.",
        "No error"
      ],
      correctIndex: 2,
      explanation: "The phrase 'The reason why' is redundant when followed by 'because'. It should be 'The reason why... was that he was too young'."
    },
    {
      id: 15,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Each of the girls gave their own version of how the accident happened on the highway.",
      options: [
        "Each of the girls",
        "gave their own version",
        "of how the accident",
        "happened on the highway.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "'Each' is a singular pronoun. Therefore, the possessive pronoun referring back to it must also be singular. 'their own version' should be 'her own version'."
    },
    {
      id: 16,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: The newer model of this smartphone is superior than the older one in terms of battery life.",
      options: [
        "The newer model",
        "of this smartphone",
        "is superior than the older one",
        "in terms of battery life.",
        "No error"
      ],
      correctIndex: 2,
      explanation: "Adjectives ending in '-ior' such as superior, inferior, senior, junior take the preposition 'to' instead of 'than'. So it should be 'superior to'."
    },
    {
      id: 17,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Not only he failed to complete the assignment, but he also lost the important files.",
      options: [
        "Not only he failed",
        "to complete the assignment,",
        "but he also lost",
        "the important files.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "When a sentence begins with 'Not only', it follows the rule of inversion (verb before subject). It should be 'Not only did he fail'."
    },
    {
      id: 18,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: By the time we reached the cinema hall, the movie already started.",
      options: [
        "By the time we",
        "reached the cinema hall,",
        "the movie already",
        "started.",
        "No error"
      ],
      correctIndex: 2,
      explanation: "For two actions in the past, the earlier action takes the past perfect tense. The movie started before they reached, so it should be 'the movie had already started'."
    },
    {
      id: 19,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: Many a man have realized that real happiness lies in making sacrifices for others.",
      options: [
        "Many a man",
        "have realized that",
        "real happiness lies in",
        "making sacrifices for others.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "The phrase 'Many a' is always followed by a singular noun and a singular verb. Therefore, 'Many a man have realized' should be 'Many a man has realized'."
    },
    {
      id: 20,
      type: "practice",
      year: null,
      question: "Identify the segment that contains a grammatical error: I requested the bank manager to return back my documents as soon as the verification was done.",
      options: [
        "I requested the bank manager",
        "to return back my documents",
        "as soon as the verification",
        "was done.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "The word 'return' means 'to give back' or 'come back'. Using 'back' with 'return' makes it superfluous (a pleonasm). It should simply be 'to return my documents'."
    },
    {
      id: 21,
      type: "past_year",
      year: 2023,
      question: "Identify the grammatical error: The team captain, along with his fellow players, were felicitated by the management for winning the tournament.",
      options: [
        "The team captain, along with",
        "his fellow players, were felicitated",
        "by the management",
        "for winning the tournament.",
        "No error"
      ],
      correctIndex: 1,
      explanation: "When two subjects are joined by 'along with', the verb agrees with the first subject. The first subject 'The team captain' is singular, so 'were' should be 'was'."
    },
    {
      id: 22,
      type: "past_year",
      year: 2022,
      question: "Identify the grammatical error: No sooner did the train arrive at the station when the passengers rushed towards the compartments.",
      options: [
        "No sooner did the train",
        "arrive at the station",
        "when the passengers rushed",
        "towards the compartments.",
        "No error"
      ],
      correctIndex: 2,
      explanation: "'No sooner' is always followed by the conjunction 'than'. Therefore, 'when' should be replaced by 'than'."
    },
    {
      id: 23,
      type: "past_year",
      year: 2021,
      question: "Identify the grammatical error: My brother has been working in this prestigious organization since five years without any promotion.",
      options: [
        "My brother has been working",
        "in this prestigious organization",
        "since five years",
        "without any promotion.",
        "No error"
      ],
      correctIndex: 2,
      explanation: "'Since' is used for a point of time, whereas 'for' is used for a period of time. 'Five years' is a period of time, so 'since' should be replaced by 'for'."
    },
    {
      id: 24,
      type: "past_year",
      year: 2020,
      question: "Identify the grammatical error: If he will work hard, he will surely pass the examination with flying colours.",
      options: [
        "If he will work hard,",
        "he will surely pass",
        "the examination",
        "with flying colours.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "In a Type 1 conditional sentence, the 'if' clause is always in the simple present tense. Therefore, 'If he will work hard' should be 'If he works hard'."
    },
    {
      id: 25,
      type: "past_year",
      year: 2019,
      question: "Identify the grammatical error: She prides on her ability to solve complex mathematical problems within minutes.",
      options: [
        "She prides on her",
        "ability to solve",
        "complex mathematical problems",
        "within minutes.",
        "No error"
      ],
      correctIndex: 0,
      explanation: "The verb 'pride' when used reflexively requires a reflexive pronoun. It should be 'She prides herself on her ability'."
    }
  ]
};

export default topicData;
