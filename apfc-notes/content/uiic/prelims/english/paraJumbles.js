const topicData = {
  title: "Para Jumbles",
  description: "Master the art of rearranging sentences to form a coherent and logical paragraph.",
  theory: `
    <h3>Introduction to Para Jumbles</h3>
    <p>Para Jumbles, also known as Sentence Rearrangement, is a critical topic in the English Language section of competitive exams like UIIC AO. It tests your reading comprehension, logical reasoning, and understanding of grammatical connections. In these questions, you are given a set of sentences (usually 4 to 6) in a jumbled order, and you must arrange them in a meaningful and logical sequence to form a coherent paragraph.</p>
    
    <h3>Types of Para Jumbles</h3>
    <p>There are primarily three types of Para Jumble questions asked in exams:</p>
    <ul>
      <li><strong>Standard Para Jumbles:</strong> You are given 5-6 sentences (labeled A, B, C, D, E, F) and asked to arrange them. You will then answer 5 questions based on this arrangement (e.g., "Which is the first sentence?", "Which is the second sentence?").</li>
      <li><strong>Fixed First/Last Sentences:</strong> The first (S1) and/or last (S6) sentence is fixed, and you need to arrange the intermediate sentences (P, Q, R, S) to connect S1 and S6 logically.</li>
      <li><strong>Multiple Choice Options:</strong> You are given 4-5 sentences and four options containing different sequences (e.g., ABCD, BCDA, CABD, DABC). You must select the correct sequence.</li>
    </ul>

    <h3>How to Approach Para Jumbles</h3>
    
    <h4>1. Finding the Opening Sentence (The Anchor)</h4>
    <p>The opening sentence introduces the central theme, topic, or main idea of the paragraph. It is usually independent and does not rely on previous sentences for context.</p>
    <ul>
      <li><strong>General to Specific:</strong> The first sentence often makes a general statement, while subsequent sentences provide specific details, examples, or arguments.</li>
      <li><strong>Introduction of Nouns:</strong> Look for sentences that introduce a noun (a person, place, or concept) for the first time. Sentences starting with pronouns (he, she, it, they) are rarely the opening sentences unless the pronoun refers to a noun in the same sentence.</li>
      <li><strong>Avoid Transition Words:</strong> Sentences beginning with transition words like 'However', 'Therefore', 'Thus', 'Meanwhile', 'Also', 'Moreover', 'But', etc., are almost never the first sentence.</li>
    </ul>

    <h4>2. Finding the Closing Sentence</h4>
    <p>The closing sentence concludes the discussion, summarizes the paragraph, or provides a final thought, result, or consequence.</p>
    <ul>
      <li><strong>Concluding Words:</strong> Look for words like 'Thus', 'Therefore', 'Hence', 'Ultimately', 'In conclusion', 'Finally'.</li>
      <li><strong>Logical Conclusion:</strong> It should logically wrap up the chain of thoughts presented in the preceding sentences.</li>
    </ul>

    <h4>3. Identifying Mandatory Pairs (The Connectors)</h4>
    <p>A mandatory pair is a set of two sentences that logically and grammatically follow each other. Finding one or two mandatory pairs can drastically reduce the number of possible sequences and help you solve the jumble quickly.</p>
    <ul>
      <li><strong>Noun-Pronoun Reference:</strong> If a sentence introduces a noun (e.g., 'Ravi', 'the company', 'the dog'), the subsequent sentence will likely use a pronoun (e.g., 'he', 'it') to refer to it. Therefore, the noun sentence must precede the pronoun sentence.</li>
      <li><strong>Demonstrative Pronouns:</strong> Words like 'this', 'that', 'these', 'those', 'such' point back to something mentioned previously. For example, if a sentence says "This policy was controversial," you must find the preceding sentence that introduces a "policy."</li>
      <li><strong>Full Form to Short Form:</strong> If an organization or concept is mentioned, its full form (e.g., World Health Organization) will precede its abbreviation (e.g., WHO) or short name.</li>
    </ul>

    <h4>4. Using Linking/Transition Words</h4>
    <p>Transition words act as signposts that indicate the relationship between sentences.</p>
    <ul>
      <li><strong>Cause and Effect:</strong> Words like 'Because', 'Since', 'As a result', 'Consequently', 'Therefore'. The cause must precede the effect.</li>
      <li><strong>Contrast/Contradiction:</strong> Words like 'However', 'But', 'On the other hand', 'Nevertheless', 'Yet', 'Although'. These connect two contrasting ideas.</li>
      <li><strong>Addition/Elaboration:</strong> Words like 'Additionally', 'Moreover', 'Furthermore', 'Also', 'In addition'. These add more information to a previously stated point.</li>
      <li><strong>Comparison:</strong> Words like 'Similarly', 'Likewise'.</li>
    </ul>

    <h4>5. Chronological Ordering</h4>
    <p>Some paragraphs follow a sequence of events based on time. Look for clues like dates, years, time phrases ('initially', 'then', 'later', 'finally'), or logical progression of events (e.g., birth -> education -> career -> death).</p>

    <h4>6. Cause-Effect Chains</h4>
    <p>In analytical or economic passages, one event often leads to another. Establish the root cause first, followed by the immediate effect, and then the long-term consequences.</p>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Reading all sentences simultaneously without looking for connections. Read sentence by sentence and try to form pairs.</li>
      <li>Jumping to conclusions without reading all sentences. Even if you think you found the first sentence, read the rest to confirm.</li>
      <li>Ignoring grammatical clues (articles, pronouns, conjunctions) that link sentences.</li>
    </ul>
  `,
  tricks: [
    {
      title: "The Noun-Pronoun Link",
      content: "Always pair a sentence introducing a proper noun with the sentence that uses a pronoun for that noun. The noun must come first.",
      example: "A: He was known for his eccentricities. B: Albert Einstein was a genius. (Pair: B -> A, because B introduces Einstein, and A uses 'He')"
    },
    {
      title: "The 'A/An' to 'The' Transition",
      content: "When a noun is mentioned for the first time, it usually takes an indefinite article ('a' or 'an'). When it is referred to again, it takes the definite article ('the'). Use this to order sentences.",
      example: "A: The boy started crying loudly. B: I saw a boy in the park. (Order: B -> A)"
    },
    {
      title: "Spotting Demonstrative Adjectives",
      content: "Words like 'this', 'that', 'these', 'those' followed by a noun point back to a previous sentence where the concept was discussed. Find what 'this [noun]' refers to.",
      example: "A: These measures are expected to boost the economy. B: The government has announced several tax cuts and subsidies. (Pair: B -> A. 'These measures' refers to the 'tax cuts and subsidies'.)"
    },
    {
      title: "Chronology and Time Markers",
      content: "Look for dates, years, or time-related words (First, Then, Next, Finally, Previously) to establish a timeline. Events must unfold logically.",
      example: "A: In 2020, the pandemic struck. B: By 2022, vaccines were widely available. C: The world changed dramatically in 2021. (Order: A -> C -> B)"
    },
    {
      title: "Acronym Strategy",
      content: "The full form of an organization, treaty, or concept will always precede its abbreviation or acronym in the paragraph.",
      example: "A: ISRO launched the satellite. B: The Indian Space Research Organisation (ISRO) is a premier institute. (Order: B -> A)"
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences (A, B, C, D) to make a meaningful paragraph:\nA. It is the most powerful and influential medium of mass communication.\nB. Television has become a part of our daily life.\nC. It provides us with a lot of information and entertainment.\nD. Today, we cannot imagine our life without it.",
      options: [
        "B A C D",
        "A B D C",
        "B C A D",
        "D C B A"
      ],
      correctIndex: 0,
      explanation: "Sentence B introduces the main subject 'Television' and makes a general statement. Sentence A uses 'It' to refer to Television, providing more information. C elaborates on what it does, and D gives a concluding thought based on the previous statements. Therefore, BACD is the correct sequence."
    },
    {
      id: 2,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The farmer was very sad and did not know what to do.\nB. One day, a poor farmer's horse fell into a deep well.\nC. He finally decided that since the horse was old and the well needed to be covered up anyway, he would bury the horse alive.\nD. The animal cried piteously for hours as the farmer tried to figure out what to do.",
      options: [
        "B D A C",
        "A B C D",
        "C D B A",
        "B A D C"
      ],
      correctIndex: 0,
      explanation: "Sentence B introduces the story (the farmer and the horse). Sentence D describes the immediate aftermath (the horse cried). Sentence A describes the farmer's emotional state (sad and confused), and C gives his final decision. The sequence BDAC flows logically."
    },
    {
      id: 3,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. Consequently, the prices of these goods have skyrocketed in the global market.\nB. The ongoing war has disrupted supply chains worldwide.\nC. This disruption has led to a severe shortage of essential commodities.\nD. Many developing nations are facing the brunt of this inflation.",
      options: [
        "B C A D",
        "A B C D",
        "C A B D",
        "B A C D"
      ],
      correctIndex: 0,
      explanation: "Sentence B states the root cause (war disrupted supply chains). C explains the immediate effect of this disruption (shortage). A explains the consequence of the shortage (prices skyrocketed), indicated by 'Consequently'. D concludes with the broader impact of the inflation. BCAD is the logical cause-effect chain."
    },
    {
      id: 4,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. Thus, they play a crucial role in maintaining ecological balance.\nB. Forests are often called the lungs of the earth.\nC. They absorb carbon dioxide and release oxygen during photosynthesis.\nD. This process is essential for the survival of all living beings on the planet.",
      options: [
        "B C D A",
        "C B A D",
        "B D C A",
        "A B C D"
      ],
      correctIndex: 0,
      explanation: "Sentence B introduces the topic 'Forests'. C explains why they are called lungs (absorb CO2, release O2). D uses 'This process' referring back to 'photosynthesis' in C. A concludes the paragraph with 'Thus'. The sequence BCDA is correct."
    },
    {
      id: 5,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. However, he soon realized that the startup world was far more challenging than he had anticipated.\nB. After working for ten years in a multinational corporation, Rohit decided to start his own venture.\nC. He had a brilliant idea for a tech platform and managed to secure initial funding.\nD. Despite the initial hurdles, his resilience helped him turn the company into a success story.",
      options: [
        "B C A D",
        "A B C D",
        "C A B D",
        "B A C D"
      ],
      correctIndex: 0,
      explanation: "B introduces Rohit and his decision to start a venture. C elaborates on his initial steps (idea and funding). A introduces a contrast ('However') describing the challenges he faced. D concludes the narrative by stating that despite the hurdles, he succeeded. BCAD is the correct logical flow."
    },
    {
      id: 6,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. For instance, the use of AI in healthcare is revolutionizing patient diagnosis.\nB. Artificial Intelligence (AI) is rapidly transforming various sectors of the economy.\nC. By analyzing vast amounts of medical data, AI algorithms can identify diseases with high accuracy.\nD. This early detection often leads to more effective treatments and better patient outcomes.",
      options: [
        "B A C D",
        "A B C D",
        "B C A D",
        "C D B A"
      ],
      correctIndex: 0,
      explanation: "B is the general introductory sentence about AI. A provides a specific example ('For instance'). C explains how AI works in that specific example (healthcare). D refers to the result of C ('This early detection'). The sequence BACD is correct."
    },
    {
      id: 7,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The king was very proud of his vast empire and invincible army.\nB. Once upon a time, there lived a powerful king in the northern part of India.\nC. He believed that no force on earth could ever defeat him.\nD. But his pride was shattered when a small neighboring kingdom launched a surprise attack.",
      options: [
        "B A C D",
        "B C A D",
        "A B C D",
        "D B A C"
      ],
      correctIndex: 0,
      explanation: "B introduces the story and the king. A describes a characteristic of the king (proud). C elaborates on that pride (invincible belief). D provides the turning point ('But'). Sequence BACD is logically sound."
    },
    {
      id: 8,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The committee has proposed several radical changes to the education system.\nB. These changes aim to make learning more experiential and less rote-based.\nC. However, many traditional educators are opposing the new framework.\nD. They argue that the infrastructure is not yet ready for such a drastic shift.",
      options: [
        "A B C D",
        "B A C D",
        "A C B D",
        "C D A B"
      ],
      correctIndex: 0,
      explanation: "A introduces the committee's proposal. B refers back to it with 'These changes'. C introduces the opposition ('However'). D elaborates on the reason for the opposition ('They argue'). Sequence ABCD is correct."
    },
    {
      id: 9,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. It is a necessary evil that ensures social order and infrastructure development.\nB. No one really likes paying taxes to the government.\nC. Without this revenue, the government cannot build roads, hospitals, or schools.\nD. Therefore, paying taxes should be viewed as a civic duty rather than a burden.",
      options: [
        "B A C D",
        "A B C D",
        "B C A D",
        "D C B A"
      ],
      correctIndex: 0,
      explanation: "B introduces the topic of paying taxes. A refers to it as a 'necessary evil'. C explains why it is necessary ('Without this revenue'). D provides the conclusion ('Therefore'). Sequence BACD is the logical flow."
    },
    {
      id: 10,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The invention of the printing press by Gutenberg in the 15th century changed this completely.\nB. Before that, books were copied by hand, making them expensive and rare.\nC. It allowed for the mass production of books, making knowledge accessible to the common people.\nD. This democratization of knowledge paved the way for the Renaissance and the Scientific Revolution.",
      options: [
        "B A C D",
        "A B C D",
        "A C B D",
        "C D A B"
      ],
      correctIndex: 0,
      explanation: "B describes the situation before the printing press. A introduces the invention that changed the situation described in B. C uses 'It' to refer to the printing press and explains its impact. D refers to the result of C ('This democratization'). Sequence BACD is correct."
    },
    {
      id: 11,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. He had forgotten his umbrella at home in his hurry to leave.\nB. As soon as he stepped out of the office, it started pouring heavily.\nC. John realized that he was going to get completely drenched.\nD. He quickly looked around for some shelter but found none nearby.",
      options: [
        "B A C D",
        "A B C D",
        "B C D A",
        "C A B D"
      ],
      correctIndex: 0,
      explanation: "B sets the scene (started pouring). A explains a relevant fact (forgot umbrella). C is the realization based on A and B. D is his action following the realization. BACD provides a coherent narrative."
    },
    {
      id: 12,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The internet has brought the world closer together by connecting people globally.\nB. But this hyper-connectivity also has its dark side.\nC. Cyberbullying, privacy breaches, and misinformation are rampant on digital platforms.\nD. Users must remain vigilant and practice digital hygiene to protect themselves.",
      options: [
        "A B C D",
        "B A C D",
        "A C B D",
        "C D A B"
      ],
      correctIndex: 0,
      explanation: "A introduces the positive aspect of the internet. B contrasts it with a 'dark side'. C elaborates on the 'dark side' with examples. D gives a concluding advice. Sequence ABCD is logical."
    },
    {
      id: 13,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. First, you must gather all the necessary ingredients mentioned in the recipe.\nB. Baking a perfect chocolate cake requires precision and patience.\nC. Finally, let the cake cool before applying the frosting.\nD. Next, mix the dry and wet ingredients separately before combining them.",
      options: [
        "B A D C",
        "A B D C",
        "B D A C",
        "A D C B"
      ],
      correctIndex: 0,
      explanation: "B is the topic sentence. A, D, and C follow chronological markers ('First', 'Next', 'Finally'). Sequence BADC is correct."
    },
    {
      id: 14,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The majestic Bengal tiger is the national animal of India.\nB. Unfortunately, their numbers have dwindled drastically over the last century.\nC. Poaching and habitat destruction are the primary reasons for this decline.\nD. Conservation efforts like Project Tiger were launched to save them from extinction.",
      options: [
        "A B C D",
        "B C A D",
        "A C B D",
        "C D B A"
      ],
      correctIndex: 0,
      explanation: "A introduces the subject (Bengal tiger). B introduces the problem (dwindling numbers). C gives the cause ('this decline'). D provides the solution (conservation efforts). ABCD is correct."
    },
    {
      id: 15,
      type: "practice",
      year: null,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. It aims to reduce carbon emissions and promote renewable energy sources.\nB. The summit concluded with a landmark agreement signed by 150 nations.\nC. Global warming is an existential threat to humanity.\nD. Therefore, international cooperation is vital to combat this crisis effectively.",
      options: [
        "C D B A",
        "C B A D",
        "B A C D",
        "C A B D"
      ],
      correctIndex: 0,
      explanation: "C introduces the problem (global warming). D concludes that international cooperation is vital. B mentions a specific act of cooperation (the summit). A describes the agreement ('It aims'). CDBA makes sense logically."
    },
    {
      id: 16,
      type: "past_year",
      year: 2017,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. However, the implementation of these policies has been severely flawed.\nB. The government announced a series of welfare schemes last year.\nC. Bureaucratic red tape and corruption have hindered the progress.\nD. As a result, the intended beneficiaries have not received any substantial relief.",
      options: [
        "B A C D",
        "A B C D",
        "B C A D",
        "C D B A"
      ],
      correctIndex: 0,
      explanation: "B introduces the welfare schemes. A contrasts with 'However' stating the implementation is flawed. C explains why it is flawed (red tape, corruption). D provides the final result ('As a result'). BACD is correct."
    },
    {
      id: 17,
      type: "past_year",
      year: 2018,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. These microorganisms help in the digestion of complex carbohydrates.\nB. The human gut is home to trillions of bacteria, collectively known as the gut microbiome.\nC. Maintaining a healthy balance of these bacteria is crucial for overall well-being.\nD. Furthermore, they play a vital role in regulating the immune system.",
      options: [
        "B A D C",
        "B D A C",
        "A B C D",
        "C B A D"
      ],
      correctIndex: 0,
      explanation: "B introduces the gut microbiome. A uses 'These microorganisms' to refer to the bacteria, explaining one function. D adds another function ('Furthermore'). C provides the conclusion about maintaining balance. BADC is correct."
    },
    {
      id: 18,
      type: "past_year",
      year: 2019,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. This strategy backfired when the market dynamics suddenly shifted.\nB. The company aggressively expanded its operations into new international markets.\nC. They invested heavily in marketing and infrastructure without adequate research.\nD. Ultimately, the company had to file for bankruptcy due to massive losses.",
      options: [
        "B C A D",
        "B A C D",
        "A B C D",
        "C B A D"
      ],
      correctIndex: 0,
      explanation: "B introduces the company's aggressive expansion. C elaborates on how they did it (invested heavily without research). A refers to this whole approach as 'This strategy', explaining it backfired. D provides the final outcome (bankruptcy). BCAD is correct."
    },
    {
      id: 19,
      type: "past_year",
      year: 2021,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. Reading regularly is one of the most effective ways to improve vocabulary.\nB. It exposes the reader to new words in their natural context.\nC. This contextual learning is much better than simply memorizing dictionary definitions.\nD. Therefore, educators strongly recommend cultivating a habit of reading from a young age.",
      options: [
        "A B C D",
        "B A C D",
        "A C B D",
        "C D A B"
      ],
      correctIndex: 0,
      explanation: "A introduces the benefit of reading. B uses 'It' to refer to reading and explains how it helps. C refers to 'This contextual learning' mentioned in B. D concludes with an recommendation based on these facts. ABCD is the logical order."
    },
    {
      id: 20,
      type: "past_year",
      year: 2023,
      question: "Rearrange the following sentences to make a meaningful paragraph:\nA. The transition to electric vehicles (EVs) is accelerating globally.\nB. Governments are offering massive subsidies to encourage EV adoption.\nC. Despite these incentives, the lack of charging infrastructure remains a major hurdle.\nD. Consumers are hesitant to switch from conventional cars due to range anxiety.",
      options: [
        "A B C D",
        "B A C D",
        "A C B D",
        "C D B A"
      ],
      correctIndex: 0,
      explanation: "A introduces the global transition to EVs. B explains an action supporting it (government subsidies). C introduces a contrast ('Despite these incentives') pointing out a hurdle. D elaborates on the effect of the hurdle on consumers. ABCD is correct."
    }
  ]
};

export default topicData;
