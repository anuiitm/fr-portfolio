const topicData = {
  title: "Data Sufficiency",
  description: "Master the art of evaluating whether the provided statements contain enough information to answer a specific question without actually solving the problem.",
  theory: `
    <div class="theory-content">
      <h2>Introduction to Data Sufficiency</h2>
      <p>Data Sufficiency (DS) questions are a unique format found in many competitive exams. Unlike traditional multiple-choice questions where you must find the exact answer, DS questions only require you to determine <em>whether</em> you have enough information to find the answer. This tests your logical reasoning, mathematical understanding, and ability to identify necessary and sufficient conditions.</p>
      
      <h3>The Core Concept</h3>
      <p>Every Data Sufficiency question consists of three parts:</p>
      <ol>
        <li><strong>The Question:</strong> A specific problem to be solved (e.g., "What is the value of x?").</li>
        <li><strong>Statement I:</strong> A piece of additional information.</li>
        <li><strong>Statement II:</strong> Another piece of additional information.</li>
      </ol>
      <p>Your task is to evaluate the statements against the question and determine which statement(s) are necessary and sufficient to arrive at a single, unique answer.</p>
      
      <h3>Standard Answer Choices</h3>
      <p>Most DS questions use a standard set of five answer choices. You must memorize these to save time during the exam:</p>
      <ul>
        <li><strong>(A) Statement I ALONE is sufficient, but Statement II alone is not sufficient.</strong> You can answer the question using only the information in Statement I, but Statement II doesn't give you enough information on its own.</li>
        <li><strong>(B) Statement II ALONE is sufficient, but Statement I alone is not sufficient.</strong> You can answer the question using only the information in Statement II, but Statement I doesn't give you enough information on its own.</li>
        <li><strong>(C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.</strong> You need the information from both statements combined to answer the question.</li>
        <li><strong>(D) EACH statement ALONE is sufficient.</strong> Statement I alone gives you enough information, AND Statement II alone also gives you enough information.</li>
        <li><strong>(E) Statements I and II TOGETHER are NOT sufficient.</strong> Even when you combine all the information, you still cannot answer the question. More data is needed.</li>
      </ul>

      <h3>Types of Questions</h3>
      <p>DS questions broadly fall into two categories:</p>
      
      <h4>1. Value Questions</h4>
      <p>These ask for a specific numerical value (e.g., "What is the length of the rectangle?", "How old is Ram?").</p>
      <p><strong>Requirement for Sufficiency:</strong> The statement(s) must lead to a <em>single, unique value</em>. If a statement yields two different possible values (e.g., x = 3 or x = -3), it is NOT sufficient.</p>
      
      <h4>2. Yes/No Questions</h4>
      <p>These ask a question that can be answered with a "Yes" or a "No" (e.g., "Is x an even number?", "Is triangle ABC equilateral?").</p>
      <p><strong>Requirement for Sufficiency:</strong> The statement(s) must lead to a <em>definite "Yes" OR a definite "No"</em>. If the information sometimes yields "Yes" and sometimes yields "No" depending on the values chosen, it is NOT sufficient. A definite "No" is just as sufficient as a definite "Yes"!</p>

      <h3>The Systematic Approach (The AD/BCE Grid)</h3>
      <p>To avoid confusion, use a systematic process to evaluate the statements. Never look at both statements together initially. Follow this flow:</p>
      
      <p><strong>Step 1: Evaluate Statement I independently.</strong></p>
      <p>Read the question and Statement I, ignoring Statement II completely. Ask yourself: "Can I answer the question using ONLY this?"</p>
      <ul>
        <li>If <strong>YES</strong>, the answer must be either (A) or (D). You have eliminated (B), (C), and (E).</li>
        <li>If <strong>NO</strong>, the answer must be (B), (C), or (E). You have eliminated (A) and (D).</li>
      </ul>
      
      <p><strong>Step 2: Evaluate Statement II independently.</strong></p>
      <p>Forget Statement I. Read the question and Statement II only. Ask yourself: "Can I answer the question using ONLY this?"</p>
      <ul>
        <li>If you answered YES in Step 1:
          <ul>
            <li>If Statement II is also sufficient -> Answer is <strong>(D)</strong>.</li>
            <li>If Statement II is NOT sufficient -> Answer is <strong>(A)</strong>.</li>
          </ul>
        </li>
        <li>If you answered NO in Step 1:
          <ul>
            <li>If Statement II is sufficient -> Answer is <strong>(B)</strong>.</li>
            <li>If Statement II is NOT sufficient -> You must proceed to Step 3.</li>
          </ul>
        </li>
      </ul>
      
      <p><strong>Step 3: Combine both statements (ONLY if necessary).</strong></p>
      <p>If neither statement alone was sufficient (you are down to options C or E), now look at all the information together. Ask yourself: "Can I answer the question using BOTH statements simultaneously?"</p>
      <ul>
        <li>If YES -> Answer is <strong>(C)</strong>.</li>
        <li>If NO -> Answer is <strong>(E)</strong>.</li>
      </ul>

      <h3>Common Traps and Pitfalls</h3>
      <ol>
        <li><strong>Carrying over information:</strong> The most common mistake is assuming information from Statement I while evaluating Statement II. You must mentally erase Statement I when looking at Statement II alone.</li>
        <li><strong>Solving all the way:</strong> You do not need to calculate the final answer. You just need to know if it's <em>possible</em> to calculate it. Once you set up an equation with one variable, stop! It's sufficient.</li>
        <li><strong>The "C" Trap (Premature Combination):</strong> Often, statements look like they need to be combined to solve the problem. Students jump straight to (C) without testing them individually. Sometimes, one tricky statement contains all the necessary info hidden within it. Always test individually first.</li>
        <li><strong>Assuming variables are positive integers:</strong> Unless stated otherwise, variables can be negative, zero, fractions, or irrational numbers. Test edge cases (0, 1, negatives, fractions) when substituting numbers.</li>
        <li><strong>Confusing "No" with "Insufficient":</strong> In a Yes/No question, if the information proves the answer is definitively "No," the statement IS sufficient.</li>
      </ol>
      
      <h3>Topic-Specific DS Concepts</h3>
      <p>Data Sufficiency questions can be drawn from any area of quantitative aptitude or logical reasoning. Here are some common themes:</p>
      
      <h4>Number System & Algebra</h4>
      <ul>
        <li><strong>Equations vs. Variables:</strong> Generally, to solve for 'n' distinct variables, you need 'n' distinct linear equations. (e.g., x + y = 5 and 2x + 2y = 10 is only one distinct equation, so it's not sufficient to find x and y).</li>
        <li><strong>Inequalities:</strong> Be careful with multiplying or dividing by variables if you don't know their sign, as it flips the inequality.</li>
        <li><strong>Quadratic Equations:</strong> Remember that x² = 25 means x = 5 or x = -5. If the question asks "What is the value of x?", this is NOT sufficient (two values). However, if the question asks "What is the value of x²?", it IS sufficient.</li>
      </ul>
      
      <h4>Geometry</h4>
      <ul>
        <li>Don't trust the diagrams (if provided) unless they explicitly state a property (e.g., right angle).</li>
        <li>Remember key properties: sum of angles in a triangle is 180°, Pythagoras theorem, area formulas.</li>
      </ul>
      
      <h4>Reasoning (Blood Relations, Directions, Seating)</h4>
      <ul>
        <li><strong>Blood Relations:</strong> Pay attention to gender. "A is the child of B" doesn't tell you if A is a son or daughter, which might be crucial for the final answer.</li>
        <li><strong>Seating Arrangement:</strong> Statement I might fix the position of half the people, and Statement II might fix the rest. Often, they need to be combined (C) to answer a specific question about someone's neighbor.</li>
      </ul>
    </div>
  `,
  tricks: [
    {
      title: "The AD/BCE Split",
      description: "Always test Statement I first. If it's sufficient, your only possible answers are A or D. If it's not sufficient, your only possible answers are B, C, or E. This immediately narrows your options."
    },
    {
      title: "Mental Erasure",
      description: "When moving from Statement I to Statement II, consciously wipe your mind of Statement I's facts. Assuming info from Statement I while reading Statement II is the #1 cause of errors."
    },
    {
      title: "Don't Over-Calculate",
      description: "Once you have n independent equations for n variables, stop calculating. You know a unique solution exists, so it is sufficient. Save your time."
    },
    {
      title: "Test Edge Cases for Yes/No",
      description: "When plugging in numbers for variable-based Yes/No questions, always test positive integers, negative integers, zero, and proper fractions (between 0 and 1) to see if you get inconsistent answers."
    },
    {
      title: "The 'Definite No' Rule",
      description: "If a statement provides enough information to definitively answer 'No' to a Yes/No question, that statement IS sufficient. Sufficient means you can answer the question, regardless of what the answer is."
    }
  ],
  questions: [
    {
      id: "ds_prac_1",
      type: "practice",
      question: "What is the value of integer x?",
      statement1: "x² - 9 = 0",
      statement2: "x > 0",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Step 1: Evaluate Statement I. x² - 9 = 0 means x² = 9, so x can be 3 or -3. Since we don't have a unique value, I alone is NOT sufficient. (Answers A and D eliminated).\nStep 2: Evaluate Statement II. x > 0. This tells us nothing about the specific value of x (could be 1, 2, 3...). II alone is NOT sufficient. (Answer B eliminated).\nStep 3: Combine. From I, x = 3 or -3. From II, x > 0. Combining them, x must be 3. We have a unique value. Therefore, both together are sufficient."
    },
    {
      id: "ds_prac_2",
      type: "practice",
      question: "In a class of 40 students, how many girls are there?",
      statement1: "The ratio of boys to girls is 3:5.",
      statement2: "The number of girls is 10 more than the number of boys.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 3,
      explanation: "We know Total = 40 (B + G = 40).\nStep 1: Evaluate Statement I. Ratio B:G = 3:5. We can find the number of girls: (5/8) * 40 = 25. Statement I alone is sufficient.\nStep 2: Evaluate Statement II. G = B + 10. We have a system of two equations: B + G = 40 and -B + G = 10. Adding them gives 2G = 50 -> G = 25. Statement II alone is also sufficient.\nSince both statements alone are sufficient, the answer is D."
    },
    {
      id: "ds_prac_3",
      type: "practice",
      question: "Is 'y' an even integer?",
      statement1: "y + 3 is an odd integer.",
      statement2: "3y is an even integer.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 0,
      explanation: "Step 1: Evaluate Statement I. y + 3 = odd. We know Even + Odd = Odd. Since 3 is odd, y must be even. This gives a definite 'Yes'. Statement I is sufficient.\nStep 2: Evaluate Statement II. 3y = even. For the product of an odd number (3) and another number (y) to be even, 'y' must be even (if y is an integer) OR 'y' could be a fraction like 2/3 (since 3 * 2/3 = 2, which is even). The question asks if 'y' is an even INTEGER, but statement II doesn't specify y is an integer. Thus, y could be 2 (even integer) or 2/3 (not an integer). So, II is not sufficient. Therefore, only I is sufficient."
    },
    {
      id: "ds_prac_4",
      type: "practice",
      question: "What is the speed of a train in km/hr?",
      statement1: "The train crosses a pole in 9 seconds.",
      statement2: "The train crosses a platform 200m long in 24 seconds.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Let Length of train = L, Speed = S.\nStatement I: L / S = 9. Two variables, one equation. Not sufficient.\nStatement II: (L + 200) / S = 24. Two variables, one equation. Not sufficient.\nCombine: From I, L = 9S. Substitute in II: (9S + 200) / S = 24 => 9S + 200 = 24S => 15S = 200 => S = 200/15 m/s. We can convert this to km/hr. We found a unique value by combining them. Both together are sufficient."
    },
    {
      id: "ds_prac_5",
      type: "practice",
      question: "Among P, Q, R, S, and T sitting in a straight line facing North, who sits exactly in the middle?",
      statement1: "Q sits third to the right of P, and T sits immediate left of Q.",
      statement2: "R is not sitting at any of the extreme ends.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 4,
      explanation: "Statement I: Q is 3rd right of P. Arrangement could be: P _ _ Q _ or _ P _ _ Q. T is immediate left of Q. So, P _ T Q _ or _ P _ T Q. We don't know who is in the middle in either case. Not sufficient.\nStatement II: R is not at ends. Not sufficient.\nCombine: Arrangement 1: P _ T Q _. R cannot be at ends, so R must be 2nd: P R T Q S. Middle is T. Arrangement 2: _ P _ T Q. R cannot be at ends, so R is 3rd: S P R T Q. Middle is R. Even after combining, we have two different possible middle persons (T or R). Thus, both together are not sufficient."
    },
    {
      id: "ds_prac_6",
      type: "practice",
      question: "Is quadrilateral ABCD a rectangle?",
      statement1: "Angle A = Angle B = Angle C = Angle D = 90°.",
      statement2: "The diagonals AC and BD are equal and bisect each other.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 3,
      explanation: "Statement I: If all four angles are 90°, the quadrilateral must be a rectangle (a square is a special type of rectangle, so it still counts as a 'Yes'). I is sufficient.\nStatement II: If diagonals are equal and bisect each other, the quadrilateral is a rectangle. II is sufficient.\nTherefore, each statement alone is sufficient."
    },
    {
      id: "ds_prac_7",
      type: "practice",
      question: "How is A related to D?",
      statement1: "A is the brother of B, who is the daughter of C.",
      statement2: "C is the wife of D.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Statement I: Gives relation between A, B, and C (A is son of C). D is not mentioned. Not sufficient.\nStatement II: Gives relation between C and D. A is not mentioned. Not sufficient.\nCombine: A is son of C. C is wife of D. Therefore, A is the son of D. We get a definitive answer. Both together are sufficient."
    },
    {
      id: "ds_prac_8",
      type: "practice",
      question: "What is the two-digit number?",
      statement1: "The sum of the digits is 8.",
      statement2: "If the digits are interchanged, the new number is 18 less than the original number.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Let the number be 10x + y.\nStatement I: x + y = 8. Possible numbers: 17, 26, 35, 44, 53, 62, 71, 80. Not unique. Not sufficient.\nStatement II: (10y + x) = (10x + y) - 18 => 9x - 9y = 18 => x - y = 2. Many pairs satisfy this (3,1; 4,2; 5,3, etc.). Not sufficient.\nCombine: x + y = 8 and x - y = 2. Solving yields 2x = 10 => x = 5, y = 3. The unique number is 53. Both together are sufficient."
    },
    {
      id: "ds_prac_9",
      type: "practice",
      question: "What is the area of circle C?",
      statement1: "The circumference of the circle is 10π.",
      statement2: "The circle is inscribed in a square of side 10.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 3,
      explanation: "Statement I: Circumference = 2πr = 10π. We can find r = 5. Once we have r, we can find Area = πr². Statement I is sufficient.\nStatement II: If a circle is inscribed in a square of side 10, the diameter of the circle is equal to the side of the square. Diameter = 10, so r = 5. We can find Area = πr². Statement II is sufficient.\nSince each alone is sufficient, answer is D."
    },
    {
      id: "ds_prac_10",
      type: "practice",
      question: "On which day of the week did Anil reach Delhi?",
      statement1: "Anil's brother remembers that Anil reached Delhi after Tuesday but before Saturday.",
      statement2: "Anil's friend remembers that Anil reached Delhi after Thursday but before Sunday.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Statement I: Possible days are Wednesday, Thursday, Friday. Not unique. Not sufficient.\nStatement II: Possible days are Friday, Saturday. Not unique. Not sufficient.\nCombine: The only common day between (Wed, Thu, Fri) and (Fri, Sat) is Friday. Thus, he reached on Friday. Both together are sufficient."
    },
    {
      id: "ds_prac_11",
      type: "practice",
      question: "What is the principal amount invested?",
      statement1: "The simple interest obtained after 3 years is ₹1500.",
      statement2: "The rate of interest is 10% per annum.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Formula: SI = (P * R * T) / 100.\nStatement I gives SI = 1500, T = 3. We don't know R, so we can't find P. Not sufficient.\nStatement II gives R = 10. We don't know SI or T, so we can't find P. Not sufficient.\nCombine: SI = 1500, T = 3, R = 10. We can solve for P: 1500 = (P * 10 * 3) / 100. Both statements are required to find P."
    },
    {
      id: "ds_prac_12",
      type: "practice",
      question: "Who is the tallest among A, B, C, D, and E?",
      statement1: "A is taller than B and C but shorter than D.",
      statement2: "E is taller than A but shorter than D.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient.",
      ],
      correctAnswer: 2,
      explanation: "Statement I: D > A > B, C. E is not placed, so the tallest is unknown. Not sufficient.\nStatement II: D > E > A. B and C are not placed. Not sufficient.\nTogether: D > E > A > B, C, so D is the tallest. Both statements together are needed: option C."
    },
    {
      id: "ds_past_1",
      type: "past_year",
      question: "In a certain code language, how is 'good' coded? (IBPS PO Prelims 2022)",
      statement1: "'he is good' is coded as 'pa la sa' and 'she is bad' is coded as 'la ta ja'.",
      statement2: "'you are good' is coded as 'pa da na' and 'he is you' is coded as 'sa la da'.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Statement I: 'he is good' = 'pa la sa', 'she is bad' = 'la ta ja'. Common word is 'is', common code is 'la'. 'good' can be 'pa' or 'sa'. Not sufficient.\nStatement II: 'you are good' = 'pa da na', 'he is you' = 'sa la da'. Common word 'you', common code 'da'. 'good' can be 'pa' or 'na'. Not sufficient.\nCombine: From I, 'good' is 'pa' or 'sa'. From II, 'good' is 'pa' or 'na'. The common code for 'good' in both statements must be 'pa'. Both together are sufficient."
    },
    {
      id: "ds_past_2",
      type: "past_year",
      question: "What is the cost price of the article? (SBI PO Prelims 2021)",
      statement1: "If the article is sold at a 20% profit, the selling price is ₹600.",
      statement2: "If the article is sold at a 10% loss, the selling price is ₹450.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 3,
      explanation: "Statement I: SP = 600, Profit = 20%. CP = SP / (1 + Profit%) = 600 / 1.2 = 500. We found CP. Statement I is sufficient.\nStatement II: SP = 450, Loss = 10%. CP = SP / (1 - Loss%) = 450 / 0.9 = 500. We found CP. Statement II is sufficient.\nSince each statement alone gives the exact CP, the answer is D."
    },
    {
      id: "ds_past_3",
      type: "practice",
      question: "P, Q, R, S, T and U sit around a circular table facing the centre. Who sits opposite P?",
      statement1: "Q sits second to the right of P. R sits opposite Q.",
      statement2: "T sits immediately to the right of U.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient.",
      ],
      correctAnswer: 2,
      explanation: "Facing the centre, right is anticlockwise. Number the seats clockwise with P at seat 0; seat 3 is opposite P.\nStatement I: Q is at seat 4 and R, opposite Q, at seat 1. S, T and U can take seats 2, 3 and 5 in any order. Not sufficient.\nStatement II: only fixes T next to U. Not sufficient.\nTogether: T is immediately to the right of U, so they occupy two adjacent free seats. Of seats 2, 3 and 5, only 2 and 3 are adjacent, so U = 3, T = 2 and S = 5. U sits opposite P. Both statements together are needed: option C."
    },
    {
      id: "ds_past_4",
      type: "past_year",
      question: "Is 'm' greater than 'n'? (IBPS Clerk Prelims 2020)",
      statement1: "m - 5 > n - 5",
      statement2: "2m > 2n",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 3,
      explanation: "Statement I: m - 5 > n - 5. Adding 5 to both sides gives m > n. This answers the question 'Yes'. Sufficient.\nStatement II: 2m > 2n. Dividing by 2 gives m > n. This answers the question 'Yes'. Sufficient.\nEach statement alone is sufficient."
    },
    {
      id: "ds_past_5",
      type: "past_year",
      question: "What is the present age of Mother? (RBI Assistant Prelims 2022)",
      statement1: "The ratio of present ages of Mother and Daughter is 5:2.",
      statement2: "Five years ago, the Mother was three times as old as the Daughter.",
      options: [
        "Statement I ALONE is sufficient, but Statement II alone is not sufficient.",
        "Statement II ALONE is sufficient, but Statement I alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements I and II TOGETHER are NOT sufficient."
      ],
      correctAnswer: 2,
      explanation: "Statement I: Let ages be 5x and 2x. We need an equation to find x. Not sufficient.\nStatement II: Let ages 5 years ago be 3y and y. Present ages: 3y+5 and y+5. Cannot find exact values. Not sufficient.\nCombine: From I, M = 5x, D = 2x. From II, M - 5 = 3(D - 5). Substituting I into II: 5x - 5 = 3(2x - 5) => 5x - 5 = 6x - 15 => x = 10. Mother's present age = 5x = 50. Both together are required."
    }
  ]
};

export default topicData;
