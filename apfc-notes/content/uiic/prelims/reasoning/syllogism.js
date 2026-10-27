const topicData = {
  title: "Syllogism",
  description: "Master the art of deductive reasoning using Venn diagrams and standard propositions.",
  theory: `
    <h2>1. Introduction to Syllogism</h2>
    <p>Syllogism is a form of logical reasoning that joins two or more premises to arrive at a conclusion. It is a vital part of competitive exams. The questions consist of a set of statements (premises) followed by conclusions. The candidate must assume the statements to be 100% true, even if they seem to be at variance with commonly known facts, and then decide which of the given conclusions logically follows.</p>

    <h2>2. Standard Propositions (The Categorical Statements)</h2>
    <p>There are four standard types of categorical propositions, denoted by vowels A, E, I, and O in traditional logic:</p>
    <ul>
      <li><strong>Universal Affirmative (A-type): "All S are P"</strong>. Represents complete inclusion. Venn Diagram: A circle for S completely inside the circle for P.</li>
      <li><strong>Universal Negative (E-type): "No S are P"</strong>. Represents complete exclusion. Venn Diagram: Two disjoint circles for S and P with a line and cross between them indicating strict restriction.</li>
      <li><strong>Particular Affirmative (I-type): "Some S are P"</strong>. Represents partial inclusion. Venn Diagram: Two overlapping circles for S and P.</li>
      <li><strong>Particular Negative (O-type): "Some S are not P"</strong>. Represents partial exclusion. Venn Diagram: Two overlapping circles, with a specific shaded region in S that does not touch P, or a point in S strictly not in P.</li>
    </ul>

    <h2>3. The Venn Diagram Method: Step-by-Step</h2>
    <p>The Venn Diagram method is the most visual and reliable way to solve syllogisms:</p>
    <ol>
      <li><strong>Draw the Basic Diagram:</strong> Draw the minimum overlapping Venn diagram that satisfies all the given statements. Do not assume any overlap unless explicitly stated or logically required.</li>
      <li><strong>Check Definite Conclusions:</strong> A definite conclusion must be true in EVERY possible Venn diagram that can be drawn from the statements. If it fails in even one diagram (including the basic diagram), it does not follow.</li>
      <li><strong>Check Possibility Conclusions:</strong> A possibility conclusion is true if it can be shown in AT LEAST ONE valid Venn diagram without violating the given statements.</li>
    </ol>

    <h2>4. Definite vs. Possibility Conclusions</h2>
    <p><strong>Definite Conclusions:</strong> Words used are "is", "are", "can never be" (which means definitely not). Rule: Must be true in all possible diagrams.</p>
    <p><strong>Possibility Conclusions:</strong> Words used are "can be", "is a possibility", "may be". Rule: True if a single diagram exists where the condition is met. Remember: If a conclusion is definitely true, its possibility is considered FALSE (because it's a certainty, not a mere possibility).</p>

    <h2>5. Complementary Pairs (Either-Or Cases)</h2>
    <p>When two conclusions individually do not follow, but together they cover all possibilities, they form a complementary pair, leading to an "Either I or II follows" answer. The conditions for Either-Or are:</p>
    <ol>
      <li>Both individual conclusions must be false (i.e., they do not definitely follow).</li>
      <li>The subject and predicate (the two entities) must be the same in both conclusions.</li>
      <li>The conclusions must form one of the following pairs:</li>
      <ul>
        <li><strong>Some + No:</strong> "Some A are B" and "No A is B".</li>
        <li><strong>All + Some Not:</strong> "All A are B" and "Some A are not B".</li>
        <li><strong>Some + Some Not:</strong> "Some A are B" and "Some A are not B". (Note: "All + No" does NOT form a complementary pair).</li>
      </ul>
    </ol>

    <h2>6. New Pattern Keywords: "Only" and "Only a few"</h2>
    <p>Modern exams heavily feature these variations, and they are crucial to understand:</p>
    <h3>The "Only" Concept</h3>
    <p><strong>Statement: "Only A is B"</strong></p>
    <p>Meaning: This is logically equivalent to "All B are A", but with a strict condition: B cannot be associated with any other element. B belongs <em>exclusively</em> to A.</p>
    <p>Venn Diagram: Draw "All B are A", but put a star or cross inside B to remind yourself that B cannot touch C, D, or anything else.</p>
    <p>Implications: "Some B are C" is definitely false. "No B is C" is definitely true. "All B can be C" is a false possibility.</p>

    <h3>The "Only a few" Concept</h3>
    <p><strong>Statement: "Only a few A are B"</strong></p>
    <p>Meaning: It is a combination of TWO statements: "Some A are B" AND "Some A are not B". Both must be true simultaneously.</p>
    <p>Venn Diagram: Overlap A and B (for "some"), and draw an arrow from a portion of A to B with a cross (for "some not").</p>
    <p>Implications: </p>
    <ul>
      <li>"All A can be B" is FALSE (because some A definitely cannot be B).</li>
      <li>"All B can be A" is TRUE (the restriction is on A going fully into B, not B going fully into A).</li>
    </ul>

    <h2>7. Reverse Syllogism</h2>
    <p>In reverse syllogism, the conclusions are given in the question, and the options contain sets of statements. You must identify which set of statements logically leads to the given conclusions. Shortcut: Use the elimination method based on positive/negative premises.</p>
    <ul>
      <li>If the conclusion is negative (No, Some Not), you MUST have at least one negative statement in the correct option. Eliminate all-positive options.</li>
      <li>If the conclusion is positive (All, Some), and you only have negative statements, eliminate that option.</li>
    </ul>

    <h2>8. Conversion Rules (Immediate Inference)</h2>
    <p>Knowing how to convert statements helps in quick deductions without diagrams:</p>
    <ul>
      <li>"All A are B" -> "Some B are A" (Valid)</li>
      <li>"All A are B" -> "All B are A" (Invalid)</li>
      <li>"No A is B" -> "No B is A" (Valid) -> "Some A are not B" (Valid)</li>
      <li>"Some A are B" -> "Some B are A" (Valid)</li>
      <li>"Some A are not B" -> Cannot be converted.</li>
    </ul>
  `,
  tricks: [
    {
      title: "Tick-Cross (150-100) Method",
      description: "Assign values to subjects and predicates. All (100, 50), No (100, 100), Some (50, 50), Some Not (50, 100). Positive statements have a 50 predicate, negative have 100. Check if the income (statements) can afford the expense (conclusions). A 50 cannot become a 100."
    },
    {
      title: "Either-Or Three Rule Check",
      description: "Quickly spot Either-Or by checking: 1) Are both conclusions individually false? 2) Do they share the same entities? 3) Do they form a magic pair (Some+No, All+Some Not, Some+Some Not)? If yes to all, it's Either-Or."
    },
    {
      title: "Possibility Shortcut",
      description: "If there is no direct or indirect negative relation (cross) between two entities in the basic Venn diagram, then ALL possibilities (All, Some, No, Some Not) between them are TRUE."
    },
    {
      title: "The 'Only a Few' One-Way Street",
      description: "For 'Only a few A are B', remember it's a one-way restriction. A cannot fully go inside B ('All A can be B' is false), but B is free to go fully inside A ('All B can be A' is a valid possibility)."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      question: "Statements:<br>All Cats are Dogs.<br>Some Dogs are Rats.<br>No Rat is a Mouse.<br><br>Conclusions:<br>I. Some Cats are Rats.<br>II. Some Dogs are not Mice.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 1,
      explanation: "Basic Venn Diagram: Cats inside Dogs. Dogs overlap with Rats. Rats disjoint from Mouse.<br>Conclusion I: Some Cats are Rats. In basic diagram, Cats and Rats don't touch. So, False.<br>Conclusion II: Some Dogs are not Mice. The part of Dogs which is Rats can never be Mice. So, True. Thus, only II follows."
    },
    {
      id: 2,
      type: "practice",
      question: "Statements:<br>Only a few Apples are Bananas.<br>All Bananas are Cherries.<br>Some Cherries are Dates.<br><br>Conclusions:<br>I. All Apples being Cherries is a possibility.<br>II. All Bananas being Apples is a possibility.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "'Only a few Apples are Bananas' means some Apples are Bananas and some Apples are not Bananas.<br>Conclusion I: All Apples being Cherries is a possibility. True, because the restriction on Apples is only regarding Bananas, not Cherries.<br>Conclusion II: All Bananas being Apples is a possibility. True, 'Only a few' restricts All A -> B, but not All B -> A. Both follow."
    },
    {
      id: 3,
      type: "practice",
      question: "Statements:<br>No Pen is a Pencil.<br>No Pencil is an Eraser.<br><br>Conclusions:<br>I. No Pen is an Eraser.<br>II. Some Pens are Erasers.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 4,
      explanation: "Basic Diagram: Pen disjoint from Pencil. Pencil disjoint from Eraser. But Pen and Eraser can touch.<br>Conclusion I: False (they could overlap in possibility).<br>Conclusion II: False (they don't overlap in basic diagram).<br>Since entities are same (Pen, Eraser) and both are false, and they form a 'No + Some' pair, it's an Either-Or case."
    },
    {
      id: 4,
      type: "practice",
      question: "Statements:<br>Only Water is Ice.<br>Some Water is Steam.<br>All Steam is Cloud.<br><br>Conclusions:<br>I. Some Ice being Cloud is a possibility.<br>II. No Ice is Steam.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 1,
      explanation: "'Only Water is Ice' means 'All Ice is Water' and Ice CANNOT interact with anything else (Steam, Cloud).<br>Conclusion I: False. Ice cannot be Cloud because of 'Only' condition.<br>Conclusion II: True. Ice cannot touch Steam. Thus, only II follows."
    },
    {
      id: 5,
      type: "practice",
      question: "Statements:<br>Some Phones are Laptops.<br>Only a few Laptops are Tablets.<br>No Tablet is a Watch.<br><br>Conclusions:<br>I. All Laptops can be Tablets.<br>II. Some Phones are not Watches.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 3,
      explanation: "Conclusion I: False. 'Only a few Laptops are Tablets' means some Laptops definitely are NOT Tablets.<br>Conclusion II: False. Phones and Watches have no direct negative relation, so 'Some not' doesn't definitely follow. Neither follows."
    },
    {
      id: 6,
      type: "practice",
      question: "Statements:<br>All Books are Pages.<br>All Pages are Words.<br>No Word is a Letter.<br><br>Conclusions:<br>I. No Book is a Letter.<br>II. All Words being Books is a possibility.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Books inside Pages inside Words. Words completely disjoint from Letter.<br>Conclusion I: True. Since Books are inside Words, and no Word is a Letter, no Book is a Letter.<br>Conclusion II: True. The circles for Book, Page, and Word can be exactly overlapping (All A=B=C is a valid possibility diagram). Both follow."
    },
    {
      id: 7,
      type: "practice",
      question: "Statements:<br>Some Trees are Forests.<br>Some Forests are Mountains.<br>Some Mountains are Rivers.<br><br>Conclusions:<br>I. Some Trees are Rivers.<br>II. No Tree is a River.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 4,
      explanation: "All statements are 'Some'. No direct relation between Tree and River.<br>I is false (don't touch in basic diagram). II is false (can touch in possibility diagram). Entities are same (Tree, River). 'Some + No' forms complementary pair. Either I or II follows."
    },
    {
      id: 8,
      type: "practice",
      question: "Statements:<br>Only a few Cars are Bikes.<br>Only a few Bikes are Trucks.<br>All Trucks are Buses.<br><br>Conclusions:<br>I. All Cars can be Buses.<br>II. Some Bikes are definitely not Trucks.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Conclusion I: True. The restriction for Cars is only with Bikes. Cars can fully go inside Buses.<br>Conclusion II: True. 'Only a few Bikes are Trucks' strictly means some Bikes are NOT Trucks. Both follow."
    },
    {
      id: 9,
      type: "practice",
      question: "Statements:<br>All A are B.<br>Some B are C.<br>Only a few C are D.<br><br>Conclusions:<br>I. All A can be D.<br>II. Some B are D.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 0,
      explanation: "Conclusion I: True. There is no restriction between A and D.<br>Conclusion II: False. In basic diagram, B and D do not overlap. Thus, only I follows."
    },
    {
      id: 10,
      type: "practice",
      question: "Statements:<br>No Red is Blue.<br>All Blue are Green.<br>Some Green are Yellow.<br><br>Conclusions:<br>I. Some Green are not Red.<br>II. All Yellow can be Blue.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Conclusion I: True. The part of Green which is Blue can never be Red, so some Green are not Red.<br>Conclusion II: True. Yellow and Blue have no negative relation, so Yellow can fully go inside Blue. Both follow."
    },
    {
      id: 11,
      type: "practice",
      question: "Statements:<br>Only Doctors are Engineers.<br>Some Doctors are Teachers.<br>No Teacher is a Student.<br><br>Conclusions:<br>I. No Engineer is a Teacher.<br>II. Some Doctors are not Students.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "'Only Doctors are Engineers' -> All Engineers are Doctors AND Engineers cannot be anything else.<br>Conclusion I: True. Engineers cannot touch Teachers due to the 'Only' condition.<br>Conclusion II: True. The part of Doctors that are Teachers can never be Students. Both follow."
    },
    {
      id: 12,
      type: "practice",
      question: "Statements:<br>Some Squares are Circles.<br>Some Circles are Triangles.<br>All Triangles are Rectangles.<br><br>Conclusions:<br>I. Some Rectangles are Circles.<br>II. All Squares can be Rectangles.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Conclusion I: True. Since all Triangles are Rectangles and some Circles are Triangles, some Rectangles must be Circles.<br>Conclusion II: True. No negative statements at all, so all positive possibilities between disjoint entities are true. Both follow."
    },
    {
      id: 13,
      type: "practice",
      question: "Statements:<br>Only a few Winters are Summers.<br>No Summer is Spring.<br>Only a few Springs are Autumns.<br><br>Conclusions:<br>I. All Winters can be Spring.<br>II. Some Autumns are not Summer.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 1,
      explanation: "Conclusion I: False. The part of Winter that is Summer can never be Spring, so ALL Winter cannot be Spring.<br>Conclusion II: True. The part of Autumn that is Spring can never be Summer. So, Some Autumns are not Summer. Only II follows."
    },
    {
      id: 14,
      type: "practice",
      question: "Statements:<br>All Mondays are Tuesdays.<br>No Tuesday is a Wednesday.<br>All Wednesdays are Thursdays.<br><br>Conclusions:<br>I. No Monday is a Wednesday.<br>II. Some Thursdays are not Tuesdays.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Conclusion I: True. Monday is inside Tuesday. Tuesday doesn't touch Wednesday. So Monday cannot touch Wednesday.<br>Conclusion II: True. The part of Thursdays which are Wednesdays can never be Tuesdays. Both follow."
    },
    {
      id: 15,
      type: "practice",
      question: "Statements:<br>Some Lions are Tigers.<br>Only a few Tigers are Panthers.<br>Some Panthers are Cheetahs.<br><br>Conclusions:<br>I. All Tigers being Cheetahs is a possibility.<br>II. All Panthers can be Tigers.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Conclusion I: True. Tigers and Cheetahs have no negative relation.<br>Conclusion II: True. 'Only a few Tigers are Panthers' means Tigers cannot fully go inside Panthers, but Panthers CAN fully go inside Tigers. Both follow."
    },
    {
      id: 16,
      type: "past_year",
      question: "(IBPS PO Prelims)<br>Statements:<br>Only a few Shirts are Pants.<br>All Pants are Trousers.<br>No Trouser is a Belt.<br><br>Conclusions:<br>I. All Shirts can be Trousers.<br>II. No Pant is a Belt.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 2,
      explanation: "Conclusion I: True. The restriction is on Shirts going into Pants. Shirts can go fully into Trousers (outside Pants).<br>Conclusion II: True. Pants are inside Trousers, and Trousers cannot touch Belts. Both follow."
    },
    {
      id: 17,
      type: "past_year",
      question: "(SBI PO Prelims)<br>Statements:<br>Only a few Kings are Queens.<br>No Queen is a Jack.<br>Only a few Jacks are Aces.<br><br>Conclusions:<br>I. Some Kings are not Jacks.<br>II. All Aces can be Queens.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 0,
      explanation: "Conclusion I: True. The part of Kings that are Queens can never be Jacks.<br>Conclusion II: False. The part of Aces that are Jacks can never be Queens, so ALL Aces cannot be Queens. Only I follows."
    },
    {
      id: 18,
      type: "past_year",
      question: "(RRB Officer Scale-I Prelims)<br>Statements:<br>All Windows are Doors.<br>Only a few Doors are Walls.<br>Some Walls are Roofs.<br><br>Conclusions:<br>I. All Doors can be Walls.<br>II. Some Windows are Roofs.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 3,
      explanation: "Conclusion I: False. 'Only a few Doors are Walls' strictly prevents all Doors from being Walls.<br>Conclusion II: False. No direct relation between Windows and Roofs in the basic diagram. Neither follows."
    },
    {
      id: 19,
      type: "past_year",
      question: "(RBI Assistant Prelims)<br>Statements:<br>Only Gold is Silver.<br>Some Gold is Bronze.<br>No Bronze is Copper.<br><br>Conclusions:<br>I. Some Silver can be Copper.<br>II. Some Gold are not Copper.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 1,
      explanation: "Conclusion I: False. 'Only Gold is Silver' means Silver cannot be anything but Gold. It cannot be Copper.<br>Conclusion II: True. The part of Gold that is Bronze can never be Copper. Only II follows."
    },
    {
      id: 20,
      type: "past_year",
      question: "(SBI Clerk Prelims)<br>Statements:<br>Only a few Mugs are Cups.<br>Only a few Cups are Glasses.<br>No Glass is a Plate.<br><br>Conclusions:<br>I. All Cups can be Plates.<br>II. Some Mugs are Glasses.",
      options: [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows",
        "Either I or II follows"
      ],
      answer: 3,
      explanation: "Conclusion I: False. The part of Cups that is Glasses can never be Plates.<br>Conclusion II: False. Mugs and Glasses do not touch in the basic diagram. Neither follows."
    }
  ]
};

export default topicData;
