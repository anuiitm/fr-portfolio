const topicData = {
  title: "Puzzles & Seating Arrangement",
  description: "Master complex puzzles and seating arrangements with structured approaches and variable linking.",
  theory: `
    <h2>Introduction to Puzzles & Seating Arrangement</h2>
    <p>Puzzles and Seating Arrangements form the most critical section of reasoning in competitive exams, often carrying the highest weightage (15-20 marks in preliminary exams). These questions test your analytical ability, logical deduction, and capability to process multiple constraints simultaneously. Mastery over this section requires not just practice, but a structured approach to decoding complex information.</p>

    <h3>Types of Seating Arrangements & Puzzles</h3>
    
    <h4>1. Linear Seating Arrangement (Single Row)</h4>
    <p>In this type, people are seated in a single straight line. The most crucial aspect is identifying the direction they are facing. 
    <ul>
      <li><b>Facing North:</b> Left and Right of the person match your Left and Right.</li>
      <li><b>Facing South:</b> Left and Right of the person are opposite to your Left and Right.</li>
      <li><b>Bidirectional:</b> Some face North, some face South. This requires careful track of the facing direction of each entity.</li>
    </ul></p>

    <h4>2. Linear Seating Arrangement (Double Row)</h4>
    <p>Involves two parallel rows where people are seated facing each other. Usually, Row 1 faces South and Row 2 faces North. Key phrases like "A is facing the one who sits second to the right of B" are common here.</p>

    <h4>3. Circular Seating Arrangement</h4>
    <p>People sit around a circular table.
    <ul>
      <li><b>Facing the Center:</b> Left means clockwise direction, Right means anti-clockwise direction.</li>
      <li><b>Facing Outside:</b> Left means anti-clockwise direction, Right means clockwise direction.</li>
      <li><b>Mixed Direction:</b> Some face the center, some face outside. Always start with a person whose direction is definitively known.</li>
    </ul></p>

    <h4>4. Square/Rectangular Seating Arrangement</h4>
    <p>People sit at the corners and middle of the sides. Often, people at corners face one direction (e.g., center) and people in the middle face the other direction (e.g., outside). It is similar to a circular arrangement but with designated "corner" and "edge" spots.</p>

    <h4>5. Floor / Building / Box Puzzles</h4>
    <p>Entities live on different floors of a building or boxes are stacked one above another. The bottom-most floor is numbered 1 and the top-most is numbered highest. Clues often involve terms like "lives on an even-numbered floor", "three boxes between A and B", or "A lives immediately above B".</p>

    <h4>6. Multi-Variable (Scheduling / Tabular) Puzzles</h4>
    <p>Involves matching persons with their favorite colors, professions, cars, cities, or scheduling them on different days/months. These require a matrix or tabular grid to eliminate possibilities.</p>

    <h3>Step-by-Step Approach & Diagrammatic Representation</h3>
    
    <p><b>Step 1: Read and Scan:</b> Give a quick 30-second read to understand the type, number of variables, and find the most definite clues.</p>
    
    <p><b>Step 2: Set the Framework:</b> Draw the base diagram. For a circle, draw a circle with 8 intersecting marks. For floors, draw a table with floor numbers 8 to 1 vertically. For days/months, write them in chronological order.</p>

    <p><b>Step 3: Plot Definite Information:</b> A definite clue anchors a person to a specific spot. Examples: "A sits on the 5th floor" or "B sits at an extreme end of the line". Plot these directly into your framework.</p>

    <p><b>Step 4: Use Shorthand for Indirect Clues:</b> Don't re-read the paragraph. Write down indirect clues in shorthand. 
    <br>Example: "A is 3rd to the right of B" &rarr; <code>B &rarr; (2 gaps) &rarr; A</code>
    <br>Example: "C and D are immediate neighbors" &rarr; <code>(C D)</code>
    <br>Example: "E does not like Red" &rarr; <code>E &times; Red</code></p>

    <p><b>Step 5: Connect the Dots (Variable Linking):</b> Look for common variables between your plotted framework and your shorthand notes. If A is placed, look for shorthand clues involving A. This will narrow down possibilities.</p>

    <p><b>Step 6: Handle Negative Conditions:</b> Negative conditions (e.g., "F does not sit next to G") are excellent for eliminating possibilities. Keep track of them carefully by placing small cross marks around the relevant entities in your diagram.</p>

    <h3>Pro Tips for Diagramming and Execution</h3>
    <p>Always draw <b>two possible cases</b> simultaneously if a strong clue has two possibilities. For instance, "A sits at one of the extreme ends" means two cases: one where A is on the left end, and one where A is on the right end. Develop both cases simultaneously; one will eventually get eliminated due to a contradiction.</p>
  `,
  tricks: [
    {
      title: "Start with Definite Clues",
      description: "Never start a puzzle with vague or relative statements like 'A sits somewhere to the right of B'. Always scan for fixed points like 'C sits at the extreme right end' or 'D lives on floor number 4'. This anchors your diagram and saves time."
    },
    {
      title: "The Projection Method (Multiple Cases)",
      description: "When faced with a branching possibility (e.g., 'E sits third to the left of F' with no fixed point), immediately draw two small parallel diagrams. Developing two cases is faster than trying to visualize and hold permutations in your head. A later clue will automatically invalidate one diagram."
    },
    {
      title: "Variable Linking Technique",
      description: "After placing a definite clue, actively scan the remaining text ONLY for variables related to the ones you just placed. If you placed 'A' and 'B', look for the next sentence that mentions 'A' or 'B'. This creates a chain reaction of placements."
    },
    {
      title: "Elimination Grid for Matrix Puzzles",
      description: "For puzzles involving people, cities, and colors, use a tabular grid where you put a tick (✓) for positive matches and a cross (✗) for negative information. If a row/column has all crosses except one box, that box must be a tick."
    }
  ],
  // Sets 1 and 3 and questions 16 and 18 were rebuilt in Sep 2026: the originals had no
  // valid arrangement. Every set below was checked by brute force to have exactly one solution.
  // Convention: facing the centre, a person's left is clockwise and right is anticlockwise.
  questions: [
    {
      id: "q1",
      type: "practice",
      question: "<b>Directions (1-5):</b> Eight friends A, B, C, D, E, F, G and H sit around a circular table facing the centre. Each likes a different colour: Red, Blue, Green, Yellow, Pink, Black, White and Orange.<br>- A sits third to the right of the one who likes Red.<br>- H likes Black and sits second to the left of the one who likes Red.<br>- Only two persons sit between G and H.<br>- D sits immediately to the right of G.<br>- E sits second to the left of H.<br>- F sits immediately to the left of B.<br>- The one who likes White sits immediately to the right of B.<br>- The one who likes Yellow sits immediately to the right of H.<br>- The one who likes Pink sits opposite H.<br>- The ones who like Green and Orange are immediate neighbours. C likes neither of them, and E does not like Green.<br><br><b>Question 1:</b> Who likes Red?",
      options: ["B", "F", "C", "D", "None of these"],
      answer: "B",
      explanation: "Number the seats clockwise with A at seat 0 (left = clockwise, right = anticlockwise).<br>1. A is third to the right of Red, so Red is at seat 3. H is second to the left of Red, so H is at seat 5.<br>2. Two persons between G and H puts G at seat 2 (seat 0 is A). D is immediately right of G, so D is at seat 1.<br>3. E is second to the left of H, so E is at seat 7. Seats 3, 4 and 6 remain for B, C and F. F is immediately left of B, so B = 3, F = 4 and C = 6.<br>4. White is immediately right of B (seat 2, G). Yellow is immediately right of H (seat 4, F). Pink is opposite H (seat 1, D).<br>5. Green, Orange and Blue remain for A, C and E. C likes neither Green nor Orange, so C likes Blue; E does not like Green, so E likes Orange and A likes Green (A and E are neighbours, as required).<br><b>Clockwise from A:</b> A (Green), D (Pink), G (White), B (Red), F (Yellow), H (Black), C (Blue), E (Orange).<br>B sits at seat 3, so B likes Red."
    },
    {
      id: "q2",
      type: "practice",
      question: "<b>Question 2 (same arrangement as Q1):</b> What is the position of the one who likes Black with respect to F?",
      options: ["Third to the left", "Second to the right", "Immediate left", "Third to the right", "Second to the left"],
      answer: "Immediate left",
      explanation: "F is at seat 4 and H (Black) at seat 5. Seat 5 is one step clockwise from F, and clockwise is F's left. So the one who likes Black sits immediately to the left of F."
    },
    {
      id: "q3",
      type: "practice",
      question: "<b>Question 3 (same arrangement as Q1):</b> Which colour does A like?",
      options: ["Green", "White", "Orange", "Blue", "Yellow"],
      answer: "Green",
      explanation: "From the final arrangement, A likes Green (C likes Blue and E likes Orange)."
    },
    {
      id: "q4",
      type: "practice",
      question: "<b>Question 4 (same arrangement as Q1):</b> How many persons sit between C and the one who likes Green, counting from the left of C?",
      options: ["One", "Two", "Three", "Four", "None"],
      answer: "One",
      explanation: "C is at seat 6. Moving to C's left (clockwise): seat 7 is E, seat 0 is A (Green). Only E sits between them."
    },
    {
      id: "q5",
      type: "practice",
      question: "<b>Question 5 (same arrangement as Q1):</b> Four of the following five are alike in a certain way and so form a group. Which one does not belong to that group?",
      options: ["A - Pink", "G - Red", "F - Black", "C - Orange", "B - White"],
      answer: "B - White",
      explanation: "In A - Pink, G - Red, F - Black and C - Orange, the colour belongs to the person sitting immediately to the <b>left</b> of the named person (D, B, H and E). White belongs to G, who sits immediately to the <b>right</b> of B. So B - White is the odd one."
    },
    {
      id: "q6",
      type: "practice",
      question: "<b>Directions (6-10):</b> Eight persons P, Q, R, S, T, U, V and W live on separate floors of an 8-floor building. The ground floor is numbered 1 and the top floor 8.<br>- S lives on an even-numbered floor, but not on floor 4 or 8.<br>- Only three persons live between S and T. T lives on a floor below S.<br>- V lives immediately above P, and V lives on an even-numbered floor.<br>- P does not live on floor 1.<br>- Only two persons live between V and Q.<br>- R lives immediately below W, and W does not live on floor 8.<br><br><b>Question 6:</b> Who lives on the topmost floor?",
      options: ["Q", "U", "V", "W", "T"],
      answer: "V",
      explanation: "1. S is on 2 or 6. Three persons between S and T with T below S gives S = 6, T = 2.<br>2. V is even and immediately above P, and P is not on 1, so V is 4 or 8.<br>3. If V = 4, P = 3 and Q is on 1 or 7. The free floors then never include two consecutive floors for W above R without W on 8, so V = 4 fails.<br>4. So V = 8, P = 7 and Q = 5. Floors 1, 3 and 4 remain: W = 4, R = 3, U = 1.<br><b>Arrangement (8 to 1):</b> V, P, S, Q, W, R, T, U. V lives on the top floor."
    },
    {
      id: "q7",
      type: "practice",
      question: "<b>Question 7 (same arrangement as Q6):</b> How many persons live between W and U?",
      options: ["One", "Two", "Three", "Four", "None"],
      answer: "Two",
      explanation: "W is on floor 4 and U on floor 1. R (3) and T (2) live between them: two persons."
    },
    {
      id: "q8",
      type: "practice",
      question: "<b>Question 8 (same arrangement as Q6):</b> Who lives exactly between S and Q?",
      options: ["T", "W", "No one", "P", "V"],
      answer: "No one",
      explanation: "S is on floor 6 and Q on floor 5. They are on adjacent floors, so no one lives between them."
    },
    {
      id: "q9",
      type: "practice",
      question: "<b>Question 9 (same arrangement as Q6):</b> On which floor does R live?",
      options: ["1st floor", "2nd floor", "3rd floor", "5th floor", "7th floor"],
      answer: "3rd floor",
      explanation: "R lives on floor 3, immediately below W on floor 4."
    },
    {
      id: "q10",
      type: "practice",
      question: "<b>Question 10 (same arrangement as Q6):</b> Which of the following statements about P is true?",
      options: ["P lives on an even-numbered floor", "Only two persons live above P", "P lives immediately below V", "S lives immediately above P", "P lives on the 5th floor"],
      answer: "P lives immediately below V",
      explanation: "P is on floor 7, directly below V on floor 8. Only one person (V) lives above P, and floor 7 is odd."
    },
    {
      id: "q11",
      type: "practice",
      question: "<b>Directions (11-15):</b> Ten persons sit in two parallel rows of five, with equal distance between neighbours. In Row 1, A, B, C, D and E sit facing <b>South</b>. In Row 2, P, Q, R, S and T sit facing <b>North</b>, so each person faces someone in the other row.<br>- D sits second to the right of E.<br>- A sits at one of the extreme ends of the row.<br>- P faces an immediate neighbour of A.<br>- R sits third to the left of P.<br>- Only one person sits between Q and P.<br>- T faces C.<br>- B does not face S.<br><br><b>Question 11:</b> Who faces S?",
      options: ["A", "B", "C", "D", "E"],
      answer: "A",
      explanation: "Number the seats 1 to 5 from west to east. Row 1 faces South, so their right is west (lower number). Row 2 faces North, so their right is east (higher number).<br>1. A is at seat 1 or 5. If A = 1, P faces seat 2 and R (third to the left of P) would be at seat −1, which is impossible. So A = 5, P = 4 and R = 1.<br>2. One person between Q and P gives Q = 2. T and S take seats 3 and 5.<br>3. T faces C, and seat 5 in Row 1 is A, so C = 3 and T = 3, leaving S = 5.<br>4. D is second to the right of E (two seats west). With A = 5 and C = 3, only E = 4, D = 2 fits. B = 1, facing R (not S), as required.<br><b>Row 1 (west to east):</b> B, D, C, E, A. <b>Row 2:</b> R, Q, T, P, S.<br>S (seat 5) faces A."
    },
    {
      id: "q12",
      type: "practice",
      question: "<b>Question 12 (same arrangement as Q11):</b> Who sits third to the right of R?",
      options: ["P", "T", "S", "Q", "None of these"],
      answer: "P",
      explanation: "R is at seat 1 in Row 2, facing North, so R's right is east. Third to the right of R is seat 4: P."
    },
    {
      id: "q13",
      type: "practice",
      question: "<b>Question 13 (same arrangement as Q11):</b> Which pair sits at the extreme ends of Row 2?",
      options: ["R, T", "P, T", "R, S", "Q, T", "P, S"],
      answer: "R, S",
      explanation: "Row 2 from west to east is R, Q, T, P, S. R and S sit at the ends."
    },
    {
      id: "q14",
      type: "practice",
      question: "<b>Question 14 (same arrangement as Q11):</b> What is the position of B with respect to A?",
      options: ["Immediate left", "Fourth to the right", "Second to the left", "Third to the left", "Immediate right"],
      answer: "Fourth to the right",
      explanation: "A (seat 5) faces South, so A's right is west. B is at seat 1, four seats west of A: fourth to the right of A."
    },
    {
      id: "q15",
      type: "practice",
      question: "<b>Question 15 (same arrangement as Q11):</b> Four of the following five are alike in a certain way and so form a group. Which one does not belong to that group?",
      options: ["B", "R", "A", "S", "T"],
      answer: "T",
      explanation: "B and A sit at the ends of Row 1, and R and S at the ends of Row 2. T sits in the middle of Row 2, so T is the odd one."
    },
    {
      id: "q16",
      type: "practice",
      question: "<b>Question 16:</b> Seven people A, B, C, D, E, F and G sit in a straight line facing North.<br>- A sits at the extreme right end.<br>- C sits third to the left of A.<br>- D sits third to the right of G.<br>- B sits immediately to the right of D.<br>- E sits at one of the extreme ends.<br>Who sits exactly in the middle of the line?",
      options: ["D", "B", "F", "E", "C"],
      answer: "C",
      explanation: "Number the seats 1 to 7 from left to right (facing North, right = higher number).<br>1. A = 7, so C = 4.<br>2. D = G + 3 and B = D + 1. G = 1 puts D on C's seat; G = 3 puts B on A's seat. So G = 2, D = 5, B = 6.<br>3. E is at an extreme end, and seat 7 is A, so E = 1 and F = 3.<br><b>Line:</b> E, G, F, C, D, B, A. The middle seat (4) is C."
    },
    {
      id: "q17",
      type: "practice",
      question: "<b>Question 17:</b> Six boxes P, Q, R, S, T and U are placed one above the other.<br>- Box Q is placed immediately above box S.<br>- Only two boxes are placed between box S and box R.<br>- Box P is placed immediately below box R.<br>- Box U is placed somewhere above box T, but not immediately above it.<br>Which box is at the top?",
      options: ["Q", "U", "R", "S", "None of these"],
      answer: "U",
      explanation: "Number the positions 1 (bottom) to 6 (top).<br><b>Case 1, R above S:</b> S, Q, P, R form a block of four consecutive boxes (S at x, Q at x+1, P at x+2, R at x+3). If x = 1, T and U take 5 and 6, which are adjacent. If x = 3, they take 1 and 2, also adjacent. If x = 2, they take 1 and 6, so T = 1 and U = 6, which fits.<br><b>Case 2, S above R:</b> P, R, _, _, S, Q fill the whole stack and leave only 3 and 4 (adjacent) for T and U, which fails.<br><b>Bottom to top:</b> T, S, Q, P, R, U. U is at the top."
    },
    {
      id: "q18",
      type: "practice",
      question: "<b>Question 18:</b> Five people M, N, O, P and Q live on different floors of a 5-floor building (floor 1 is the bottom, floor 5 the top).<br>- M lives on an odd-numbered floor.<br>- P lives immediately above M.<br>- Only one person lives between P and N.<br>- N lives above M.<br>- O lives above Q.<br>On which floor does O live?",
      options: ["1st", "3rd", "4th", "5th", "Cannot be determined"],
      answer: "5th",
      explanation: "M is on 1 or 3 (M = 5 leaves no floor for P above).<br>If M = 3, P = 4 and N = 2 (floor 6 does not exist), but N must be above M, so this fails.<br>So M = 1, P = 2 and N = 4. Floors 3 and 5 remain, and O is above Q: Q = 3, O = 5.<br><b>Floors 1 to 5:</b> M, P, Q, N, O. O lives on the 5th floor."
    },
    {
      id: "q19",
      type: "practice",
      question: "<b>Question 19:</b> Six persons U, V, W, X, Y and Z sit around a circular table facing the centre.<br>- X sits second to the right of Y.<br>- Z sits immediately to the left of X.<br>- W sits opposite Y.<br>- V is not an immediate neighbour of Y.<br>Who sits immediately to the right of W?",
      options: ["X", "Y", "Z", "V", "U"],
      answer: "V",
      explanation: "Number the seats clockwise with Y at seat 0 (facing the centre, left = clockwise, right = anticlockwise).<br>1. X is second to the right of Y: seat 4. Z is immediately left of X: seat 5. W is opposite Y: seat 3.<br>2. Seats 1 and 2 remain. Seat 1 neighbours Y, so V takes seat 2 and U seat 1.<br><b>Clockwise from Y:</b> Y, U, V, W, X, Z. Immediately to the right of W (anticlockwise, seat 2) is V."
    },
    {
      id: "q20",
      type: "practice",
      question: "<b>Question 20:</b> Among A, B, C, D and E, each has a different weight. D is heavier than only two persons. A is heavier than B but lighter than C. E is the lightest. Who is the second heaviest?",
      options: ["A", "B", "C", "D", "Cannot be determined"],
      answer: "A",
      explanation: "Rank from heaviest (1) to lightest (5).<br>1. E is the lightest: position 5.<br>2. D is heavier than only two persons: position 3.<br>3. C > A > B must fill positions 1, 2 and 4 in that order: C = 1, A = 2, B = 4.<br><b>Order:</b> C > A > D > B > E. A is the second heaviest."
    }
  ]
};

export default topicData;
