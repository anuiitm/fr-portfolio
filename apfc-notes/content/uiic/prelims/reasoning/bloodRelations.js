const topicData = {
  title: "Blood Relations",
  description: "Master the concepts of Blood Relations with comprehensive theory on family trees, coded relations, and pointing problems.",
  theory: `
    <h2>Introduction to Blood Relations</h2>
    <p>Blood relation is one of the most scoring and logically structured topics in the reasoning ability section of competitive examinations. It involves deducing the relationship between various individuals based on the information provided. The questions test your cognitive ability to process given data, form a family tree, and arrive at the correct relation. To master this topic, one must be familiar with standard relational terms and adopt a consistent method for representing familial connections.</p>
    
    <h3>Key Relational Terms</h3>
    <p>Before diving into problem-solving, it is crucial to understand the standard terminology used in blood relations:</p>
    <ul>
        <li><strong>Paternal side:</strong> Relatives on the father's side (e.g., Paternal Uncle, Paternal Grandfather).</li>
        <li><strong>Maternal side:</strong> Relatives on the mother's side (e.g., Maternal Uncle, Maternal Grandmother).</li>
        <li><strong>Nephew:</strong> Son of one's brother or sister.</li>
        <li><strong>Niece:</strong> Daughter of one's brother or sister.</li>
        <li><strong>Cousin:</strong> Child of one's uncle or aunt (Note: Cousin is a gender-neutral term. We do not use 'cousin brother' or 'cousin sister' in standard English reasoning questions).</li>
        <li><strong>Sibling:</strong> Brother or sister.</li>
        <li><strong>Spouse:</strong> Husband or wife.</li>
        <li><strong>In-laws:</strong> Relatives by marriage (e.g., Father-in-law, Sister-in-law). Sister-in-law can mean spouse's sister or brother's wife.</li>
    </ul>

    <h3>The Family Tree Method</h3>
    <p>The most effective and error-free approach to solving blood relation problems is drawing a <strong>Family Tree</strong>. A family tree is a visual representation of relationships using specific symbols to denote gender and generation gaps. Using a standardized notation saves time and prevents confusion during exams.</p>
    
    <h4>Standard Notation:</h4>
    <ul>
        <li><strong>Gender:</strong> Use a '<strong>+</strong>' sign or place the name inside a <strong>Square</strong> for a <strong>Male</strong>. Use a '<strong>-</strong>' sign or place the name inside a <strong>Circle</strong> for a <strong>Female</strong>. If the gender is unknown, do not assign any sign.</li>
        <li><strong>Spouses:</strong> Use a double horizontal line '<strong>=</strong>' or a double-ended arrow '<strong>&harr;</strong>' to connect a married couple. (e.g., A(+) = B(-)).</li>
        <li><strong>Siblings:</strong> Use a single horizontal line '<strong>—</strong>' to connect brothers and sisters. (e.g., C(+) — D(-)).</li>
        <li><strong>Generations:</strong> Use a vertical line '<strong>|</strong>' to represent a generation gap (parent-child relationship). The older generation is placed above the younger generation.</li>
    </ul>
    
    <p><em>Golden Rule:</em> Never assume the gender of a person purely based on their name. Wait for a pronoun (he/she) or a definitive relational term (son, daughter, mother, brother) to assign the gender.</p>

    <h3>Types of Blood Relation Problems</h3>
    <p>Blood relation questions generally fall into three major categories:</p>
    
    <h4>1. Pointing or Introducing Problems</h4>
    <p>In these problems, a person introduces another person or points to a photograph and describes their relationship. These questions can be solved by breaking down the statement from the speaker's perspective, often working backward from the word 'my'.</p>
    <p><strong>Approach:</strong> Identify the speaker. Find the word "my" in the statement. Trace the relations step-by-step from the speaker's point of view to reach the person being introduced.</p>
    <p><em>Example:</em> Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?</p>
    <p><em>Solution:</em> Suresh's mother's only son is Suresh himself. So, the boy is the son of Suresh. Thus, Suresh is the father of the boy.</p>

    <h4>2. Family Tree / Puzzle Based Problems</h4>
    <p>Here, a set of information regarding several members of a family is given in a jumbled paragraph. The task is to deduce the complete family structure.</p>
    <p><strong>Approach:</strong> Read the data line by line and draw the family tree simultaneously. Look for connecting links. If a statement mentions names not yet in your tree, keep it on hold and return to it once a common link is established. Count the total number of males, females, and married couples to ensure all conditions are met.</p>
    <p><em>Example:</em> In a family of six members A, B, C, D, E, and F, there are two married couples. A is the father of C. D is the grandmother of C. E is the father of F. B is the mother of C. How is F related to C?</p>
    <p><em>Solution:</em> A is the father of C (A is +, C is unknown). B is the mother of C (B is -). So A = B. D is the grandmother of C, implying D is the mother of either A or B. E is the father of F. Since there are only 6 members and 2 couples, E = D (Couple 1) and A = B (Couple 2). Thus, E and D are grandparents, A and B are parents, C and F are children. F is the sibling of C.</p>

    <h4>3. Coded Blood Relations</h4>
    <p>In coded blood relations, standard relationships are represented by symbols (like @, #, $, *, %). You will be given a code language and asked to determine the relationship between two entities based on a given expression.</p>
    <p><strong>Approach:</strong> 
    <br>1. <strong>Gender elimination:</strong> If the question asks for a male relative (like father, son), and the symbol preceding the person's name implies a female, that option can be eliminated. Note that the gender of the last person in an expression is often unknown (unless it's a husband/wife relation).
    <br>2. <strong>Generation Gap method:</strong> Assign numerical values to generations. Self generation (brother, sister, spouse) = 0. Parents generation = +1. Grandparents = +2. Children = -1. Add the values across the expression to see if it matches the required relationship's generation gap.</p>
    <p><em>Example:</em> 'P $ Q' means P is the father of Q; 'P # Q' means P is the mother of Q; 'P * Q' means P is the sister of Q. How is D related to N in 'N # A $ B * D'?</p>
    <p><em>Solution:</em> N is the mother of A (N is -, A is +1 gen below). A is the father of B (A is +, B is another gen below). B is the sister of D (B is -, D is same gen). D's gender is unknown. N is the grandmother of D. D is the grandchild (grandson or granddaughter) of N.</p>
  `,
  tricks: [
    {
      title: "Standard Tree Notation",
      description: "Always use standard symbols: + for male, - for female, = for spouses, — for siblings, and | for parent-child. Placing individuals in appropriate horizontal tiers based on their generation keeps the chart organized."
    },
    {
      title: "Gender Identification Caution",
      description: "Never deduce a person's gender purely from their given name. Always look for contextual clues like 'he/she' or relational nouns like 'uncle/aunt'. The last element in a coded expression often has an unknown gender."
    },
    {
      title: "Coded Relations: Generation Gap Trick",
      description: "Assign values: +1 for older generation (parents), -1 for younger (children), 0 for same generation (siblings/spouse). Sum these values across a coded expression to quickly check if the overall generation gap matches the required relationship."
    },
    {
      title: "Backward Tracing in Pointing Problems",
      description: "In 'pointing to...' questions, identify the speaker and locate the word 'my'. Trace the relationships backward from 'my' to decode the chain of relations."
    }
  ],
  questions: [
    {
      id: "br_prac_1",
      type: "practice",
      question: "Pointing to a photograph of a woman, Rahul said, 'She is the sister of the daughter of my mother’s husband.' How is the woman in the photograph related to Rahul?",
      options: ["Sister", "Mother", "Aunt", "Cousin", "Niece"],
      correctAnswer: "Sister",
      explanation: "Rahul's mother's husband is Rahul's father. The daughter of Rahul's father is Rahul's sister. The sister of Rahul's sister is also Rahul's sister. Therefore, the woman in the photograph is Rahul's sister."
    },
    {
      id: "br_prac_2",
      type: "practice",
      question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B; Which of the following means that C is the son of M?",
      options: ["M - N * C + F", "F - C + N * M", "N + M - F * C", "M * N - C + F", "M * C + N - F"],
      correctAnswer: "M * C + N - F",
      explanation: "We need C to be the son of M. This means M is the father/mother of C, and C is male. In option 'M * C + N - F', M * C means M is the father of C. C + N means C is the brother of N (so C is male). Thus, C is the son of M."
    },
    {
      id: "br_prac_3",
      type: "practice",
      question: "In a family of six members P, Q, R, S, T, and U, there are two married couples. P is a doctor and is the father of U. Q is the grandfather of R and is a contractor. S is the grandmother of T and is a housewife. There is one doctor, one contractor, one nurse, one housewife, and two students in the family. How is P related to R?",
      options: ["Father", "Uncle", "Brother", "Grandfather", "Cannot be determined"],
      correctAnswer: "Father",
      explanation: "Q (contractor, +) is the grandfather of R. S (housewife, -) is the grandmother of T. So, Q and S are a married couple. P (doctor, +) is the father of U. So, P and his wife form the second couple. The wife must be the nurse. U, R, and T are the children/grandchildren. Since Q and S are grandparents, P is their son. P is the father of U, R, and T (students). Therefore, P is the father of R."
    },
    {
      id: "br_prac_4",
      type: "practice",
      question: "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is the man related to the woman?",
      options: ["Brother", "Husband", "Father-in-law", "Maternal Uncle", "Brother-in-law"],
      correctAnswer: "Husband",
      explanation: "'My father' refers to the woman's father. The 'only daughter' of the woman's father is the woman herself. The statement becomes 'His wife is myself.' Therefore, the woman is the man's wife, which means the man is her husband."
    },
    {
      id: "br_prac_5",
      type: "practice",
      question: "A is the mother of B. B is the sister of C. D is the son of C. E is the brother of D. F is the mother of E. G is the granddaughter of A. H has only two children B and C. How is F related to H?",
      options: ["Daughter", "Daughter-in-law", "Sister-in-law", "Wife", "Mother"],
      correctAnswer: "Daughter-in-law",
      explanation: "A is the mother of B and C, so A(-). H has children B and C, so H(+) is A's husband. B is the sister of C, so B(-). D and E are sons, F is the mother of E, so F is the mother of D as well. This implies C is the father of D and E, so C(+). Therefore, C and F are a married couple. H is the father of C, making F the daughter-in-law of H."
    },
    {
      id: "br_prac_6",
      type: "practice",
      question: "Read the following information: 1) 'P # Q' means P is the father of Q. 2) 'P + Q' means P is the mother of Q. 3) 'P - Q' means P is the brother of Q. 4) 'P * Q' means P is the sister of Q. If A + B # C - D, then A is D's ____?",
      options: ["Grandmother", "Mother", "Aunt", "Sister", "Great-grandmother"],
      correctAnswer: "Grandmother",
      explanation: "A + B means A is the mother of B (A is -). B # C means B is the father of C (B is +). C - D means C is the brother of D (C is +). Therefore, B is the father of C and D. A is the mother of B. Hence, A is the paternal grandmother of D."
    },
    {
      id: "br_prac_7",
      type: "practice",
      question: "Pointing to a man in a photograph, a woman said, 'His brother's father is the only son of my grandfather.' How is the woman related to the man in the photograph?",
      options: ["Mother", "Aunt", "Sister", "Daughter", "Grandmother"],
      correctAnswer: "Sister",
      explanation: "The woman's grandfather's only son is the woman's father. The man's brother's father is simply the man's father. So, the man's father is the woman's father. This implies they share the same father. Hence, the woman is the sister of the man."
    },
    {
      id: "br_prac_8",
      type: "practice",
      question: "M is the brother of N. O is the father of M. P is the brother of Q. Q is the daughter of N. Who is the uncle of P?",
      options: ["N", "O", "M", "Q", "Cannot be determined"],
      correctAnswer: "M",
      explanation: "Q is the daughter of N. P is the brother of Q, so P is the son of N. M is the brother of N. Therefore, M is the brother of P's parent (N). This makes M the uncle of P."
    },
    {
      id: "br_prac_9",
      type: "practice",
      question: "If P @ Q means P is the husband of Q, P $ Q means P is the brother of Q, P % Q means P is the mother of Q, and P & Q means P is the sister of Q. What does A % B $ C & D mean?",
      options: ["A is the grandmother of D", "A is the mother of D", "A is the aunt of D", "A is the sister of D", "A is the mother-in-law of D"],
      correctAnswer: "A is the mother of D",
      explanation: "A % B means A is the mother of B. B $ C means B is the brother of C. C & D means C is the sister of D. Thus, B, C, and D are siblings. Since A is the mother of B, A is the mother of all the siblings, including D."
    },
    {
      id: "br_prac_10",
      type: "practice",
      question: "A family consists of six members A, B, C, D, E, and F. B is the son of C but C is not the mother of B. A and C are a married couple. E is the brother of C. D is the daughter of A. F is the brother of B. How many male members are there in the family?",
      options: ["1", "2", "3", "4", "5"],
      correctAnswer: "4",
      explanation: "B is the son of C (B is +). C is not the mother, so C is the father (C is +). A and C are married, so A is the mother (A is -). E is the brother of C (E is +). D is the daughter of A (D is -). F is the brother of B (F is +). Males: B, C, E, F. Total male members = 4."
    },
    {
      id: "br_prac_11",
      type: "practice",
      question: "Pointing to a boy, Meena said, 'He is the son of my grandfather's only child.' How is the boy related to Meena?",
      options: ["Brother", "Cousin", "Uncle", "Nephew", "Data Inadequate"],
      correctAnswer: "Brother",
      explanation: "Meena's grandfather's only child is Meena's parent (father or mother). The boy is the son of Meena's parent. Therefore, the boy is Meena's brother."
    },
    {
      id: "br_prac_12",
      type: "practice",
      question: "J is the father of K. K is the niece of L. L is the sister of M. M is the husband of N. If L has no siblings other than M, how is L related to J?",
      options: ["Sister", "Sister-in-law", "Cousin", "Mother", "Cannot be determined"],
      correctAnswer: "Sister",
      explanation: "K is L's niece, so K is a child of L's sibling. L's only sibling is M, so M is K's parent, and since M is N's husband, M is K's father. J is also K's father, so J and M are the same person. L is M's sister, so L is J's sister."
    },
    {
      id: "br_pyq_1",
      type: "past_year",
      question: "Study the information carefully: S is the sister of T. T is the mother of U. U is the brother of V. W is the father of V. X is the mother of W. Y is the father-in-law of T. How is S related to V?",
      options: ["Aunt", "Mother", "Grandmother", "Sister", "Cousin"],
      correctAnswer: "Aunt",
      explanation: "T is the mother of U. U is the brother of V. W is the father of V. This means T and W are married (T is mother, W is father of U and V). S is the sister of T. Therefore, S is the maternal aunt of V."
    },
    {
      id: "br_pyq_2",
      type: "past_year",
      question: "If 'X × Y' means 'X is the brother of Y', 'X - Y' means 'X is the sister of Y', 'X + Y' means 'X is the father of Y', and 'X ÷ Y' means 'X is the mother of Y'. Which of the following means 'P is the maternal uncle of Q'?",
      options: ["P × R ÷ Q", "P × R + Q", "P - R ÷ Q", "P + R ÷ Q", "P ÷ R × Q"],
      correctAnswer: "P × R ÷ Q",
      explanation: "For P to be the maternal uncle of Q, P must be the brother of Q's mother. In 'P × R ÷ Q', P × R means P is the brother of R. R ÷ Q means R is the mother of Q. Thus, P is the brother of Q's mother, making P the maternal uncle of Q."
    },
    {
      id: "br_pyq_3",
      type: "past_year",
      question: "In a family of seven members P, Q, R, S, T, U, and V, there are two married couples. P is the father of Q. R is the sister-in-law of S. T is the brother of S. U is the mother of T. V is the grandfather of Q. U has only two children. S is unmarried. How is R related to U?",
      options: ["Daughter", "Daughter-in-law", "Sister", "Niece", "Mother"],
      correctAnswer: "Daughter-in-law",
      explanation: "U is the mother of T, and T is the brother of S. U has two children, T and S. S is unmarried. R is the sister-in-law of S, so R must be married to T (since S is unmarried and they are the only siblings). Therefore, R is the wife of T. Since U is the mother of T, R is the daughter-in-law of U."
    },
    {
      id: "br_pyq_4",
      type: "past_year",
      question: "Pointing to a lady in the photograph, Amit said, 'Her father's only son's wife is my mother-in-law'. How is Amit's wife related to the lady in the photograph?",
      options: ["Niece", "Daughter", "Sister", "Sister-in-law", "Aunt"],
      correctAnswer: "Niece",
      explanation: "The lady's father's only son is the lady's brother. The wife of the lady's brother is Amit's mother-in-law. Amit's wife is the daughter of Amit's mother-in-law. Therefore, Amit's wife is the daughter of the lady's brother, making Amit's wife the niece of the lady in the photograph."
    },
    {
      id: "br_pyq_5",
      type: "past_year",
      question: "P is the brother of Q. C is the daughter of P and also sister of J. A is mother of J. S is father of A. D who is son of T, is brother of A. B has only one son and is married to E, mother of P. How is A related to B?",
      options: ["Daughter", "Daughter-in-law", "Sister", "Niece", "Wife"],
      correctAnswer: "Daughter-in-law",
      explanation: "C is the daughter of P and sister of J. A is the mother of J, so P and A are married (P is father, A is mother). B is married to E, who is the mother of P. Thus, B is the father of P. A is married to P, the son of B. Therefore, A is the daughter-in-law of B."
    }
  ]
};

export default topicData;
