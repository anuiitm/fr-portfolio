const topicData = {
  title: "Inequality",
  description: "A comprehensive guide on Mathematical and Coded Inequalities for competitive exams, covering direct relationships, chain formation, Either-Or cases, and priority encoding techniques.",
  theory: `
    <div class="theory-section">
      <h2>Introduction to Inequalities</h2>
      <p>Inequalities in reasoning test a candidate's ability to deduce the relationship between various elements based on given mathematical or coded statements. It is one of the most scoring and time-saving topics in competitive exams. Understanding the basic symbols, their priorities, and how to combine them is crucial for mastering this topic.</p>

      <h3>Basic Symbols and Meanings</h3>
      <p>There are five primary mathematical symbols used to denote relationships:</p>
      <ul>
        <li><strong>&gt;</strong> (Greater than): A &gt; B means A is strictly greater than B.</li>
        <li><strong>&lt;</strong> (Less than): A &lt; B means A is strictly less than B.</li>
        <li><strong>=</strong> (Equal to): A = B means A is exactly equal to B.</li>
        <li><strong>&ge;</strong> (Greater than or equal to): A &ge; B means A is either greater than or equal to B.</li>
        <li><strong>&le;</strong> (Less than or equal to): A &le; B means A is either less than or equal to B.</li>
        <li><strong>&ne;</strong> (Not equal to): A &ne; B means A is either greater than or less than B (A &gt; B or A &lt; B).</li>
      </ul>

      <h2>Chain Formation and Combining Inequalities</h2>
      <p>Often, relationships are given in fragments. Your first task is to combine them into a single continuous chain to deduce relationships between elements that are far apart.</p>
      <p><strong>Example:</strong> Given statements: P &gt; Q, Q &ge; R, R = S.<br>
      <strong>Combined Chain:</strong> P &gt; Q &ge; R = S.</p>
      <p>Once the chain is formed, you can easily compare any two elements. The relationship between elements is determined by the highest priority symbol present between them.</p>

      <h3>Priority of Symbols (The Family Tree Rule)</h3>
      <p>To determine the definitive relationship between two elements in a chain, think of the symbols as a hierarchy or family structure:</p>
      <ol>
        <li><strong>King / First Priority:</strong> &gt; or &lt;</li>
        <li><strong>Minister / Second Priority:</strong> &ge; or &le;</li>
        <li><strong>Public / Third Priority:</strong> =</li>
      </ol>
      <p><strong>Rule:</strong> When moving from one element to another in a chain, the relationship is defined by the highest priority symbol that appears between them, provided all symbols face the same direction (i.e., there is no conflict).</p>
      <p><em>Example 1:</em> In A &gt; B &ge; C = D, the symbols between A and D are &gt;, &ge;, and =. The highest priority is &gt;. Therefore, A &gt; D is definitively true.</p>
      <p><em>Example 2:</em> In P &ge; Q = R &ge; S, the symbols between P and S are &ge;, =, and &ge;. The highest priority is &ge;. Therefore, P &ge; S is definitively true.</p>

      <h2>Conflict or "Can't Be Determined" (No Relationship)</h2>
      <p>If you encounter opposing or conflicting symbols (e.g., &gt; and &lt;, or &ge; and &le;) between two elements, the relationship breaks down. In such cases, <strong>no definitive conclusion</strong> can be drawn between those two elements, and any specific conclusion will be individually false.</p>
      <p><strong>Example:</strong> Chain: X &gt; Y &le; Z.<br>
      Here, X &gt; Y and Z &ge; Y. Because the symbols face opposite directions (&gt; and &le;), we cannot establish a direct relationship between X and Z. Thus, conclusions like X &gt; Z, X &lt; Z, or X = Z are all individually false.</p>

      <h2>The "Either-Or" Case</h2>
      <p>The "Either-Or" condition is a common trap in exams. It occurs when two conclusions are individually false, but together they cover all possible valid relationships between the elements. There are two primary scenarios for Either-Or:</p>
      
      <h3>Scenario 1: Relationship Exists (Same Direction Symbols)</h3>
      <p>If the actual derived relationship between two elements involves a "greater than or equal to" (&ge;) or "less than or equal to" (&le;), and the conclusions split this relationship into its component parts.</p>
      <p><strong>Conditions:</strong></p>
      <ol>
        <li>Both conclusions must have the same elements (e.g., A and C).</li>
        <li>Both conclusions must be individually false.</li>
        <li>Combining the symbols of the two conclusions should yield the exact relationship established in the statement.</li>
      </ol>
      <p><strong>Example:</strong> Statement: A &ge; B = C.<br>
      Derived relationship: A &ge; C.<br>
      Conclusions:<br>
      I. A &gt; C (False individually)<br>
      II. A = C (False individually)<br>
      Since A is either &gt; or = to C, the answer is <strong>Either I or II is true</strong>.</p>

      <h3>Scenario 2: No Relationship Exists (Opposite Symbols)</h3>
      <p>If there is a conflict of symbols between two elements in the chain, no direct relationship exists. However, between any two variables, only three mathematical relationships are possible: &gt;, &lt;, or =. If the given conclusions together encompass all three possibilities, an Either-Or case applies.</p>
      <p><strong>Conditions:</strong></p>
      <ol>
        <li>Both conclusions must have the same elements.</li>
        <li>Both conclusions must be individually false (because no relation exists).</li>
        <li>The conclusions together must contain all three signs: &gt;, &lt;, and = (e.g., A &ge; B and A &lt; B, or A &gt; B and A &le; B).</li>
      </ol>
      <p><strong>Example:</strong> Statement: M &gt; N &le; O.<br>
      Derived relationship: No relation between M and O.<br>
      Conclusions:<br>
      I. M &ge; O (False)<br>
      II. M &lt; O (False)<br>
      Combining I and II covers &gt;, =, and &lt;. Thus, the answer is <strong>Either I or II is true</strong>.</p>

      <h2>Coded Inequalities</h2>
      <p>In coded inequalities, mathematical symbols are replaced by special characters like @, #, $, %, &copy;. You must decode the statements before analyzing them. A common method is the "Magic Box".</p>
      <p><strong>Example decoding:</strong></p>
      <ul>
        <li>P @ Q means P is not smaller than Q (i.e., P &ge; Q).</li>
        <li>P # Q means P is neither smaller than nor equal to Q (i.e., P &gt; Q).</li>
        <li>P % Q means P is neither greater than nor equal to Q (i.e., P &lt; Q).</li>
        <li>P $ Q means P is not greater than Q (i.e., P &le; Q).</li>
        <li>P &copy; Q means P is neither greater than nor smaller than Q (i.e., P = Q).</li>
      </ul>
      <p>To solve, you can decode the entire expression into standard symbols and apply the rules discussed above, or use the Magic Box trick directly on the coded symbols based on their positional priority.</p>
    </div>
  `,
  tricks: [
    {
      title: "Priority Encoding (The Family Tree)",
      description: "Remember the priority: King (> / <) > Minister (>= / <=) > Public (=). If there's no conflict in direction, the highest priority symbol present between two elements is the definitive relationship."
    },
    {
      title: "Reverse Checking (Backward Reading)",
      description: "When reading the chain from right to left (e.g., from B to A in A > B), physically flip the sign in your mind. A > B read backwards becomes B < A."
    },
    {
      title: "Quick Conflict Check",
      description: "Scan the path between two elements. The moment you see opposing signs (like > and <, or >= and <=), instantly conclude that no definitive relation can be established. Skip evaluating specific relations unless looking for an Either-Or case."
    },
    {
      title: "Either-Or Triple Sign Rule",
      description: "When there is a relationship break (opposing signs), look for two conclusions involving the same variables. If one has >= and the other has < (or vice versa, covering >, <, =), it's a guaranteed Either-Or."
    },
    {
      title: "Magic Box for Coded Inequality",
      description: "Draw a box. Place > top-left, >= bottom-left, < top-right, <= bottom-right, and = in the center. Map the coded symbols to these positions. Symbols on the same side (left or right) don't conflict; priority goes from top to bottom. Symbols on opposite sides conflict."
    }
  ],
  questions: [
    {
      id: "ineq_prac_1",
      type: "practice",
      statement: "Statements: P ≥ Q = R > S > T",
      conclusions: ["I. P ≥ T", "II. T < Q"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 1,
      explanation: "From P to T, the signs are ≥, =, >, >. The highest priority sign is >. Thus, P > T. Conclusion I is P ≥ T, which is false. From T to Q, reverse reading gives T < S < R = Q, which resolves to T < Q. Conclusion II is true."
    },
    {
      id: "ineq_prac_2",
      type: "practice",
      statement: "Statements: A < B ≤ C = D, E ≥ D",
      conclusions: ["I. A < E", "II. C ≤ E"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine the statements: A < B ≤ C = D ≤ E. From A to E, signs are <, ≤, =, ≤. Highest priority is <, so A < E. Conclusion I is true. From C to E, signs are =, ≤. Result is C ≤ E. Conclusion II is true. Thus, both follow."
    },
    {
      id: "ineq_prac_3",
      type: "practice",
      statement: "Statements: M ≥ N > O = P < Q ≤ R",
      conclusions: ["I. M > P", "II. N > R"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "From M to P: M ≥ N > O = P. Signs are ≥, >, =. Result is M > P. Conclusion I follows. From N to R: N > O = P < Q ≤ R. There are opposing signs (> and <) between N and R. No relation can be established. Conclusion II is false."
    },
    {
      id: "ineq_prac_4",
      type: "practice",
      statement: "Statements: U = V ≥ W, X ≤ W, Y > X",
      conclusions: ["I. U ≥ X", "II. Y > W"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "Combine: U = V ≥ W ≥ X < Y. For U to X: U = V ≥ W ≥ X. Signs are =, ≥, ≥. Result is U ≥ X. Conclusion I is true. For Y to W: Y > X ≤ W. Opposing signs (> and ≤) so no relation. Conclusion II is false."
    },
    {
      id: "ineq_prac_5",
      type: "practice",
      statement: "Statements: D ≤ E = F < G, H ≥ G",
      conclusions: ["I. D = F", "II. D < F"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 2,
      explanation: "From D to F: D ≤ E = F. Result is D ≤ F. Neither D = F nor D < F is definitively true individually. However, together they cover all possibilities of the actual relationship D ≤ F. Thus, Either I or II follows."
    },
    {
      id: "ineq_prac_6",
      type: "practice",
      statement: "Statements: J ≥ K > L, M ≤ L, N = M",
      conclusions: ["I. J > N", "II. K > M"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: J ≥ K > L ≥ M = N. J to N: J ≥ K > L ≥ M = N gives J > N. Conclusion I is true. K to M: K > L ≥ M gives K > M. Conclusion II is true. Both I and II follow."
    },
    {
      id: "ineq_prac_7",
      type: "practice",
      statement: "Statements: S < T ≤ U, U > V = W, W ≥ X",
      conclusions: ["I. S < X", "II. S ≥ X"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 2,
      explanation: "Combine: S < T ≤ U > V = W ≥ X. From S to X, there are opposing signs (≤ and >). Therefore, no relation exists between S and X. Conclusion I is S < X, Conclusion II is S ≥ X. Together they cover <, >, and =. Thus, it's an Either-Or case."
    },
    {
      id: "ineq_prac_8",
      type: "practice",
      statement: "Statements: A > B = C, C ≥ D < E, E ≤ F",
      conclusions: ["I. A > D", "II. C < F"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "For A to D: A > B = C ≥ D gives A > D. Conclusion I is true. For C to F: C ≥ D < E ≤ F. Opposing signs (≥ and <) mean no relation. Conclusion II is false. Only I follows."
    },
    {
      id: "ineq_prac_9",
      type: "practice",
      statement: "Statements: L = M ≤ N = O, P > O ≥ Q",
      conclusions: ["I. P > L", "II. Q ≤ M"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "Combine: L = M ≤ N = O < P, and O ≥ Q. For P to L: P > O = N ≥ M = L gives P > L. Conclusion I is true. For Q to M: Q ≤ O = N ≥ M. Opposing signs (≤ and ≥). No relation. Conclusion II is false."
    },
    {
      id: "ineq_prac_10",
      type: "practice",
      statement: "Statements: G ≥ H = I, J < I, K > J",
      conclusions: ["I. G > J", "II. H > K"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "Combine: G ≥ H = I > J < K. For G to J: G ≥ H = I > J gives G > J. Conclusion I is true. For H to K: H = I > J < K. Opposing signs (> and <). No relation. Conclusion II is false."
    },
    {
      id: "ineq_prac_11",
      type: "practice",
      statement: "Statements: X ≤ Y = Z, W > Z, V ≥ W",
      conclusions: ["I. V > X", "II. W > Y"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: X ≤ Y = Z < W ≤ V. For V to X: V ≥ W > Z = Y ≥ X gives V > X. Conclusion I is true. For W to Y: W > Z = Y gives W > Y. Conclusion II is true."
    },
    {
      id: "ineq_prac_12",
      type: "practice",
      statement: "Statements: B > C = D ≥ E, F ≤ E",
      conclusions: ["I. B > F", "II. C ≥ F"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: B > C = D ≥ E ≥ F. For B to F: B > C = D ≥ E ≥ F gives B > F. Conclusion I is true. For C to F: C = D ≥ E ≥ F gives C ≥ F. Conclusion II is true. Both follow."
    },
    {
      id: "ineq_prac_13",
      type: "practice",
      statement: "Statements: P = Q ≥ R, S < R, T = S",
      conclusions: ["I. P > T", "II. Q ≥ S"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "Combine: P = Q ≥ R > S = T. For P to T: P = Q ≥ R > S = T gives P > T. Conclusion I is true. For Q to S: Q ≥ R > S gives Q > S. Conclusion II is Q ≥ S, which is definitively false because Q is strictly greater than S."
    },
    {
      id: "ineq_prac_14",
      type: "practice",
      statement: "Statements: M < N ≤ O, P ≥ O, Q = P",
      conclusions: ["I. Q > M", "II. N ≤ Q"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: M < N ≤ O ≤ P = Q. For Q to M: Q = P ≥ O ≥ N > M gives Q > M. Conclusion I is true. For N to Q: N ≤ O ≤ P = Q gives N ≤ Q. Conclusion II is true. Both follow."
    },
    {
      id: "ineq_prac_15",
      type: "practice",
      statement: "Statements: E > F ≥ G, H = G, I < H",
      conclusions: ["I. E > I", "II. F ≥ H"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: E > F ≥ G = H > I. For E to I: E > F ≥ G = H > I gives E > I. Conclusion I is true. For F to H: F ≥ G = H gives F ≥ H. Conclusion II is true. Both follow."
    },
    {
      id: "ineq_pyq_1",
      type: "past_year",
      statement: "Statements: A ≥ B > C = D ≤ E, F < D",
      conclusions: ["I. A > F", "II. E > F"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: A ≥ B > C = D > F, and E ≥ D > F. For A to F: A ≥ B > C = D > F gives A > F. Conclusion I is true. For E to F: E ≥ D > F gives E > F. Conclusion II is true. Both follow."
    },
    {
      id: "ineq_pyq_2",
      type: "past_year",
      statement: "Statements: P ≤ Q = R < S, T ≥ S",
      conclusions: ["I. P < T", "II. R ≤ T"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 0,
      explanation: "Combine: P ≤ Q = R < S ≤ T. For P to T: P ≤ Q = R < S ≤ T gives P < T. Conclusion I is true. For R to T: R < S ≤ T gives R < T. Conclusion II says R ≤ T, which is false since R is strictly less than T. Only I follows."
    },
    {
      id: "ineq_pyq_3",
      type: "past_year",
      statement: "Statements: L = M ≥ N, O < N, P > M",
      conclusions: ["I. P > N", "II. L > O"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 4,
      explanation: "Combine: P > M = L ≥ N > O. For P to N: P > M = L ≥ N gives P > N. Conclusion I is true. For L to O: L ≥ N > O gives L > O. Conclusion II is true. Both follow."
    },
    {
      id: "ineq_pyq_4",
      type: "past_year",
      statement: "Statements: K > L ≤ M = N, O ≥ N, P = O",
      conclusions: ["I. K > N", "II. L ≤ P"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 1,
      explanation: "Combine: K > L ≤ M = N ≤ O = P. For K to N: K > L ≤ M = N. Opposing signs (> and ≤). No relation. Conclusion I is false. For L to P: L ≤ M = N ≤ O = P gives L ≤ P. Conclusion II is true. Only II follows."
    },
    {
      id: "ineq_pyq_5",
      type: "past_year",
      statement: "Statements: U ≥ V = W < X ≤ Y, Z = X",
      conclusions: ["I. U > X", "II. W < Z"],
      options: ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows", "Both I and II follow"],
      answer: 1,
      explanation: "Combine: U ≥ V = W < X = Z ≤ Y. For U to X: U ≥ V = W < X. Opposing signs (≥ and <). No relation. Conclusion I is false. For W to Z: W < X = Z gives W < Z. Conclusion II is true. Only II follows."
    }
  ]
};

export default topicData;
