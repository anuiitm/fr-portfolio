const topicData = {
  title: "Order & Ranking",
  description: "Comprehensive guide to mastering order and ranking problems, a vital segment of competitive exams reasoning ability section.",
  theory: `
    <h3>Introduction to Order and Ranking</h3>
    <p>Order and Ranking problems form a crucial component of the Logical Reasoning section in almost all competitive examinations like banking, insurance (UIIC), SSC, and railways. These questions evaluate a candidate's ability to process relational information to determine the relative positions of people or objects arranged in a line (row/column), sequence, or hierarchy.</p>
    
    <p>Broadly speaking, Order and Ranking questions can be categorized into two main types:</p>
    <ul>
      <li><strong>Ranking/Positioning:</strong> Involves determining the exact position/rank of a person or object from the left/right end or top/bottom end of a row or column.</li>
      <li><strong>Ordering/Comparison:</strong> Involves comparing entities based on specific parameters like height, weight, age, marks, or wealth, and arranging them in ascending or descending order to answer related queries.</li>
    </ul>

    <h3>Understanding the Terminology and Directions</h3>
    <p>Before diving into formulas and problem-solving strategies, it's essential to understand the common terms used in these questions:</p>
    <ul>
      <li><strong>Top and Bottom:</strong> Often used when a ranking list is mentioned (e.g., merit list). The person with the highest rank is at the 'top', and the lowest rank is at the 'bottom'.</li>
      <li><strong>Left and Right:</strong> Used when individuals are arranged in a horizontal row. Unless specified otherwise, always assume the individuals are facing North. This means their Left is your Left, and their Right is your Right.</li>
      <li><strong>Front and Back / Ahead and Behind:</strong> Used in queues. 'Front' or 'Ahead' indicates a position closer to the start of the queue, while 'Back' or 'Behind' indicates a position towards the end.</li>
      <li><strong>Preceding and Following:</strong> 'Preceding' means before, and 'Following' means after. If A is preceding B, the order is AB.</li>
    </ul>

    <h3>Type 1: Total Number of Persons in a Row/Column</h3>
    <p>The most fundamental concept in ranking is finding the total number of individuals in a row when the position of one individual is given from both ends (left/right or top/bottom).</p>
    <p><strong>Concept:</strong> If you know a person's rank from the left end and the right end, you can calculate the total number of people. However, if you simply add the two ranks, you are counting that specific person twice. Therefore, you must subtract 1 from the sum.</p>
    <p><strong>Formula:</strong> <code>Total = (Position from Left) + (Position from Right) - 1</code></p>
    <p><em>Or:</em> <code>Total = (Position from Top) + (Position from Bottom) - 1</code></p>
    <p><strong>Example:</strong> In a row of students, Rahul is 15th from the left end and 20th from the right end. How many students are there in the row?</p>
    <p><strong>Solution:</strong> Total = 15 + 20 - 1 = 35 - 1 = 34 students.</p>

    <h3>Type 2: Finding Position from the Other End</h3>
    <p>If the total number of persons and the position of a person from one end is known, the position from the other end can be easily determined by rearranging the fundamental formula.</p>
    <p><strong>Formula:</strong> <code>Position from Left = Total - (Position from Right) + 1</code></p>
    <p><strong>Formula:</strong> <code>Position from Right = Total - (Position from Left) + 1</code></p>
    <p><strong>Example:</strong> In a class of 40 students, Priya ranks 8th from the top. What is her rank from the bottom?</p>
    <p><strong>Solution:</strong> Rank from bottom = 40 - 8 + 1 = 32 + 1 = 33rd.</p>
    <p><em>Logic:</em> If you subtract Priya's rank from the total, you get the number of students sitting *after* Priya (40 - 8 = 32). Therefore, Priya's position from the bottom is one more than this number (32 + 1 = 33).</p>

    <h3>Type 3: Number of Persons Between Two Persons</h3>
    <p>This is a slightly complex scenario where you are given the positions of two different people, and you need to find how many people are sitting between them. There are two sub-cases here: Non-overlapping (Simple case) and Overlapping case.</p>
    
    <h4>Case A: Non-Overlapping (Simple Case)</h4>
    <p>This occurs when the sum of positions from both ends is LESS than the total number of people.</p>
    <p><strong>Condition:</strong> Total > (Position of A from Left + Position of B from Right)</p>
    <p><strong>Formula:</strong> <code>Persons Between = Total - (Position of A from Left + Position of B from Right)</code></p>
    <p><strong>Example:</strong> In a row of 50 boys, A is 10th from left and B is 15th from right. How many boys are between them?</p>
    <p><strong>Solution:</strong> Check condition: 50 > (10 + 15). So, it's non-overlapping. Persons between = 50 - 25 = 25.</p>

    <h4>Case B: Overlapping Case</h4>
    <p>This occurs when the sum of positions from both ends is GREATER than the total number of people. This means the lines drawn from both ends cross each other.</p>
    <p><strong>Condition:</strong> Total < (Position of A from Left + Position of B from Right)</p>
    <p><strong>Formula:</strong> <code>Persons Between = (Position of A from Left + Position of B from Right) - Total - 2</code></p>
    <p><em>Why subtract 2?</em> Because when lines overlap, A and B are counted twice. We subtract 2 to exclude them from the count of "persons *between* them".</p>
    <p><strong>Example:</strong> In a row of 30 girls, X is 20th from left and Y is 18th from right. How many girls are between X and Y?</p>
    <p><strong>Solution:</strong> Check condition: 30 < (20 + 18). So, it's overlapping. Persons between = (20 + 18) - 30 - 2 = 38 - 32 = 6 girls.</p>

    <h3>Type 4: Finding Total Number When 'Between' is Given (Maximum & Minimum)</h3>
    <p>If you are given the position of person A from left, position of person B from right, and the number of people between them, you can find the total number of people. However, two answers are possible: Maximum Total and Minimum Total.</p>
    <ul>
      <li><strong>Maximum Total (Simple Arrangement):</strong> Assume no overlapping. <br><code>Max Total = Pos of A from L + Pos of B from R + Number of persons between</code></li>
      <li><strong>Minimum Total (Overlapping Arrangement):</strong> Assume overlapping. <br><code>Min Total = Pos of A from L + Pos of B from R - Number of persons between - 2</code><br><em>Note: For a minimum case to be valid, the number of persons between MUST BE strictly less than the smallest given position minus one (i.e., Persons between < Smallest Rank - 1).</em></li>
    </ul>

    <h3>Type 5: Interchanging Positions</h3>
    <p>In these questions, the initial positions of two persons (say, A and B) are given. Then, they interchange their seats, and the new position of one of them is provided. You may be asked to find:</p>
    <ol>
      <li>The total number of persons in the row.</li>
      <li>The new position of the other person.</li>
      <li>The number of persons sitting between them.</li>
    </ol>
    
    <p><strong>Step-by-step approach:</strong></p>
    <p><strong>To find Total Persons:</strong> We need one position from left and one from right for the *same physical seat*. After interchanging, A takes B's old seat, and B takes A's old seat.
    <br><code>Total = (New position of A from one end) + (Old position of B from the other end) - 1</code></p>
    
    <p><strong>To find New Position of the other person:</strong> Calculate the difference between the new and old positions of the person whose position is given twice. Add/subtract this difference to the old position of the other person.</p>
    
    <p><strong>Example:</strong> In a row, Ram is 15th from the left and Shyam is 20th from the right. If they interchange their positions, Ram becomes 25th from the left.</p>
    <ul>
      <li><strong>Total Persons:</strong> Ram's new seat is Shyam's old seat. Shyam's old seat was 20th from right. Ram is 25th from left on this seat. Total = 25 (left) + 20 (right) - 1 = 44.</li>
      <li><strong>Number of persons between:</strong> Ram moved from 15th to 25th from left. There is a difference of 10 positions. Persons between = Difference - 1 = 10 - 1 = 9.</li>
      <li><strong>Shyam's new position from right:</strong> Shyam will also move by 10 positions. Shyam's old pos = 20th from right. Shyam's new pos = 20 + 10 = 30th from right. (Verification: Total 44. Shyam is 15th from left now. Pos from right = 44 - 15 + 1 = 30).</li>
    </ul>

    <h3>Type 6: Comparison Based Ordering</h3>
    <p>In these puzzles, individuals are compared based on attributes like height, weight, marks, etc. (e.g., A is taller than B but shorter than C). The goal is to arrange them in a sequence.</p>
    <p><strong>Strategy:</strong> Use mathematical inequality symbols (>, <) to map the relationships. Always try to link common elements to form a complete chain.</p>
    <p><strong>Example:</strong> P is taller than Q but shorter than R. S is shorter than P but taller than Q. T is the tallest.</p>
    <p><strong>Mapping:</strong>
    1. R > P > Q
    2. P > S > Q
    3. T is tallest.</p>
    <p><strong>Combining:</strong> T > R > P > S > Q. (Note: P is taller than S and S is taller than Q is derived from statements).</p>

    <h3>Key Reminders for Exams</h3>
    <ul>
      <li>Read carefully if the question says "A is 3 ranks ahead of B" or "A is exactly in the middle of B and C".</li>
      <li>Draw a rough linear sketch. Visualizing the row makes overlapping and non-overlapping cases obvious.</li>
      <li>Always double-check if you need to subtract 1 when calculating the total.</li>
      <li>In interchanging questions, focus on the 'seats' rather than the 'people'. When they swap, they are just exchanging seat coordinates.</li>
    </ul>
  `,
  tricks: [
    {
      title: "The Golden Formula",
      description: "For any single person/seat: Total = Left Position + Right Position - 1."
    },
    {
      title: "Interchange Trick",
      description: "When A and B swap: Total = A's New Rank + B's Old Rank - 1. Or Total = B's New Rank + A's Old Rank - 1."
    },
    {
      title: "Finding People Between",
      description: "Simple Case: Total - (Sum of both ends). Overlapping Case: (Sum of both ends) - Total - 2."
    },
    {
      title: "Identifying Overlap",
      description: "If the sum of ranks from left and right is greater than the total number of people, it's an overlapping arrangement."
    },
    {
      title: "Quick Shift Trick",
      description: "If a person is shifted by 'n' places, the number of persons between their old and new position is 'n - 1'."
    },
    {
      title: "Comparison Chains",
      description: "Write comparisons using '>' immediately while reading. Example: 'A is taller than B but shorter than C' becomes C > A > B."
    }
  ],
  questions: [
    {
      id: "prac_or_1",
      type: "practice",
      question: "In a row of boys, Amit is 18th from the left end and 24th from the right end. How many boys are there in the row?",
      options: ["41", "42", "40", "43", "39"],
      answer: "41",
      explanation: "Total = Position from Left + Position from Right - 1. Total = 18 + 24 - 1 = 42 - 1 = 41."
    },
    {
      id: "prac_or_2",
      type: "practice",
      question: "In a class of 65 students, Reena ranks 27th from the top. What is her rank from the bottom?",
      options: ["39th", "38th", "37th", "40th", "36th"],
      answer: "39th",
      explanation: "Rank from bottom = Total - Rank from top + 1. Rank from bottom = 65 - 27 + 1 = 38 + 1 = 39th."
    },
    {
      id: "prac_or_3",
      type: "practice",
      question: "In a row of 50 people, A is 12th from the left end and B is 15th from the right end. How many people are sitting between A and B?",
      options: ["21", "22", "23", "24", "25"],
      answer: "23",
      explanation: "Total = 50. Sum of positions = 12 + 15 = 27. Since Total > Sum of positions, it's a non-overlapping case. Persons between = 50 - (12 + 15) = 50 - 27 = 23."
    },
    {
      id: "prac_or_4",
      type: "practice",
      question: "In a row of 35 girls, Sita is 20th from the left and Gita is 25th from the right. How many girls are between Sita and Gita?",
      options: ["8", "7", "9", "10", "11"],
      answer: "8",
      explanation: "Total = 35. Sum of positions = 20 + 25 = 45. Since Sum > Total, it's an overlapping case. Persons between = (Sum of positions) - Total - 2 = 45 - 35 - 2 = 10 - 2 = 8."
    },
    {
      id: "prac_or_5",
      type: "practice",
      question: "In a row of children facing North, Ramesh is 15th from the left and Suresh is 19th from the right. If they interchange their positions, Ramesh becomes 24th from the left. What is the total number of children in the row?",
      options: ["41", "42", "43", "40", "44"],
      answer: "42",
      explanation: "After interchanging, Ramesh's new position is 24th from the left. He is now occupying Suresh's old seat, which is 19th from the right. Total = (Ramesh's New Pos from Left) + (Suresh's Old Pos from Right) - 1. Total = 24 + 19 - 1 = 43 - 1 = 42."
    },
    {
      id: "prac_or_6",
      type: "practice",
      question: "In the same scenario as the previous question (Ramesh 15th L, Suresh 19th R, interchange -> Ramesh 24th L), what will be Suresh's new position from the right?",
      options: ["26th", "27th", "28th", "29th", "25th"],
      answer: "28th",
      explanation: "Ramesh moved from 15th to 24th position from left, a shift of 9 positions (24-15). Suresh will also shift by 9 positions. Suresh's old position from right was 19th. His new position from right = 19 + 9 = 28th. (Verify: Total is 42. Suresh's new seat is Ramesh's old seat, i.e., 15th from left. Pos from right = 42 - 15 + 1 = 28th)."
    },
    {
      id: "prac_or_7",
      type: "practice",
      question: "Among P, Q, R, S and T, Q is taller than only T. P is taller than S but shorter than R. Who among them is the tallest?",
      options: ["P", "Q", "R", "S", "Cannot be determined"],
      answer: "R",
      explanation: "Q is taller than ONLY T. This means Q is the 2nd shortest, and T is the shortest. So the arrangement ends with ... > Q > T. P is taller than S but shorter than R, so R > P > S. Combining both: R > P > S > Q > T. Therefore, R is the tallest."
    },
    {
      id: "prac_or_8",
      type: "practice",
      question: "Among A, B, C, D and E, A is heavier than B and C. D is heavier than E but lighter than C. Who is the lightest?",
      options: ["B", "C", "D", "E", "Cannot be determined"],
      answer: "Cannot be determined",
      explanation: "A > B and A > C. C > D > E. We know A > C > D > E. However, we do not know the relation between B and (C, D, E). B could be anywhere below A. So the lightest could be E or B. Hence, cannot be determined."
    },
    {
      id: "prac_or_9",
      type: "practice",
      question: "In a row of boys, if A who is 10th from the left and B who is 9th from the right interchange their positions, A becomes 15th from the left. How many boys are there in the row?",
      options: ["23", "24", "27", "28", "22"],
      answer: "23",
      explanation: "A's new position = 15th from Left. B's old position = 9th from Right. Total = 15 + 9 - 1 = 23."
    },
    {
      id: "prac_or_10",
      type: "practice",
      question: "In a class of 45 students, a boy is ranked 20th. When two boys joined, his rank was dropped by one. What is his new rank from the end?",
      options: ["25th", "26th", "27th", "28th", "29th"],
      answer: "27th",
      explanation: "Old total = 45. Old rank from top = 20. New total = 45 + 2 = 47. New rank from top (dropped by 1) = 20 + 1 = 21st. New rank from end = New Total - New Rank from top + 1 = 47 - 21 + 1 = 26 + 1 = 27th."
    },
    {
      id: "prac_or_11",
      type: "practice",
      question: "Three persons A, B and C are standing in a queue. There are 5 persons between A and B and 8 persons between B and C. If there be 3 persons ahead of C and 21 persons behind A, what could be the minimum number of persons in the queue?",
      options: ["27", "28", "40", "41", "30"],
      answer: "28",
      explanation: "For minimum persons, we should look for overlapping. Let's arrange them C ... B ... A to maximize overlap given the constraints. 3 ahead of C -> C is 4th. 8 persons between C and B -> B is 4 + 8 + 1 = 13th. 5 persons between B and A. Since we want minimum, A can be ahead of B. But C is 4th, and there are 8 between C and B, so placing A between C and B is possible. Let A be between C and B. C ... A ... B. Persons between C and B = 8. Persons between A and B = 5. So, C ... (2 persons) ... A ... (5 persons) ... B. This satisfies 8 between C and B. C is 4th. A is 4 + 2 + 1 = 7th. 21 persons behind A. So Total = A's position + 21 = 7 + 21 = 28. Let's check the non-overlapping case for contrast: C (3 ahead) ... 8 ... B ... 5 ... A ... (21 behind). Total = 3 + 1(C) + 8 + 1(B) + 5 + 1(A) + 21 = 40. The minimum is 28."
    },
    {
      id: "prac_or_12",
      type: "practice",
      question: "In a row of 40 girls, when Komal was shifted to her left by 4 places, her number from the left end of the row became 10. What was the number of Swati from the right end of the row if Swati was three places to the right of Komal's original position?",
      options: ["22", "23", "24", "25", "26"],
      answer: "24",
      explanation: "Komal's new position = 10th from Left. Since she was shifted 4 places to her left, her original position = 10 + 4 = 14th from Left. Swati is 3 places to the right of Komal's original position. Swati's position from Left = 14 + 3 = 17th. Swati's position from Right = Total - Left Position + 1 = 40 - 17 + 1 = 23 + 1 = 24th."
    },
    {
      id: "pyq_or_1",
      type: "past_year",
      question: "In a column of students, D is 14th from the front and there are 2 students between D and E. E is between D and F. If F is 18th from the front, how many students are there between E and F? (IBPS PO Prelims)",
      options: ["0", "1", "2", "3", "None of these"],
      answer: "0",
      explanation: "D is 14th. With 2 students between D and E, E is 11th or 17th. E must be between D (14th) and F (18th), so E is 17th. E (17th) and F (18th) are adjacent: 0 students between them."
    },
    {
      id: "pyq_or_2",
      type: "past_year",
      question: "Among five friends A, B, C, D and E, each having different weight, D is heavier than only two friends. E is lighter than only A. B is not the lightest. Who is the third heaviest among them? (SBI Clerk Prelims)",
      options: ["A", "B", "C", "D", "E"],
      answer: "D",
      explanation: "5 spots: 1 > 2 > 3 > 4 > 5. D is heavier than ONLY two friends, so D is at 3rd position (heavier than 4 and 5). E is lighter than ONLY A, so A is heaviest (1) and E is second heaviest (2). Arrangement: A > E > D > _ > _. B is not the lightest, so B must be 4th. C must be 5th (lightest). Arrangement: A > E > D > B > C. The third heaviest is D."
    },
    {
      id: "pyq_or_3",
      type: "past_year",
      question: "In a row of 36 students facing North, P is 12th from the left end. There are exactly three students between P and Q. What is Q's position from the right end? (RRB Officer Scale 1 Prelims)",
      options: ["20th", "21st", "28th", "Either 21st or 29th", "None of these"],
      answer: "Either 21st or 29th",
      explanation: "Total = 36. P is 12th from Left. Three students between P and Q. Case 1: Q is to the right of P. Q's position from left = 12 + 3 + 1 = 16th. Q's position from right = 36 - 16 + 1 = 21st. Case 2: Q is to the left of P. Q's position from left = 12 - 3 - 1 = 8th. Q's position from right = 36 - 8 + 1 = 29th. So it can be either 21st or 29th."
    },
    {
      id: "pyq_or_4",
      type: "past_year",
      question: "Six persons P, Q, R, S, T, and U scored different marks in an examination. R scored more than only T and S. P scored less than only Q. Who scored the third lowest marks? (UIIC Assistant)",
      options: ["R", "S", "T", "U", "Cannot be determined"],
      answer: "R",
      explanation: "6 positions: 1 > 2 > 3 > 4 > 5 > 6. P scored less than only Q. So Q is 1st, P is 2nd. R scored more than ONLY T and S. This means R scored less than the top 3 (Q, P, U). So R is at position 4. T and S are at 5 and 6 (order unknown). Therefore, U must be at position 3. Arrangement: Q > P > U > R > (T/S) > (S/T). The third lowest marks is scored by the person at the 4th position from top, which is R."
    },
    {
      id: "pyq_or_5",
      type: "past_year",
      question: "In a straight line of 40 persons facing north, A is 15th from the right end and B is 19th from the left end. How many persons are sitting between A and B? (LIC AAO)",
      options: ["6", "7", "8", "5", "4"],
      answer: "6",
      explanation: "Total = 40. A's position from Right = 15. B's position from Left = 19. Sum = 15 + 19 = 34. Since Sum < Total (34 < 40), it is a non-overlapping case. Persons between = Total - Sum = 40 - 34 = 6."
    }
  ]
};

export default topicData;
