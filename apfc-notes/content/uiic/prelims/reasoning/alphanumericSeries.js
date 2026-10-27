const topicData = {
  title: "Alphanumeric Series",
  description: "Comprehensive guide on number series, letter series, and alphanumeric sequences, focusing on pattern recognition and wrong number detection.",
  theory: `
    <h2>Introduction to Alphanumeric Series</h2>
    <p>Alphanumeric series is a prominent topic in competitive examinations, testing a candidate's logical reasoning and pattern recognition skills. A series is a sequence of characters, which can be numbers, letters, or a combination of both, arranged according to a specific rule or pattern. Solving these problems requires quickly identifying the underlying logic and applying it to find the missing term, the next term, or the wrong term in the sequence.</p>

    <h3>1. Number Series Patterns</h3>
    <p>Number series involve sequences of numbers that follow a specific mathematical logic. Recognizing common patterns is crucial for solving these quickly:</p>
    <ul>
      <li><strong>Constant Addition/Subtraction:</strong> The difference between consecutive terms is constant. For example, in the series 5, 9, 13, 17, 21, the pattern is +4.</li>
      <li><strong>Constant Multiplication/Division:</strong> The ratio between consecutive terms is constant. For example, in 3, 6, 12, 24, 48, the pattern is x2.</li>
      <li><strong>Alternating Series:</strong> Two different series are interleaved. For example, 2, 10, 4, 9, 6, 8, 8... Here, the odd-positioned terms form one series (2, 4, 6, 8) and even-positioned terms form another (10, 9, 8).</li>
      <li><strong>Difference of Differences (Multi-level Difference):</strong> The differences between consecutive terms form a series themselves. For example, 1, 3, 7, 13, 21. Differences are 2, 4, 6, 8. The differences of differences are a constant 2.</li>
      <li><strong>Prime Numbers:</strong> The sequence consists of prime numbers or involves operations with prime numbers. Example: 2, 3, 5, 7, 11, 13, 17.</li>
      <li><strong>Squares and Cubes:</strong> The terms are related to squares or cubes of natural numbers. Example: 1, 4, 9, 16, 25 (squares). Another variation is \(n^2 \pm k\) or \(n^3 \pm k\), such as 2, 5, 10, 17, 26 (which is \(n^2 + 1\)).</li>
      <li><strong>Fibonacci Series:</strong> Each term is the sum of the two preceding ones. Example: 1, 1, 2, 3, 5, 8, 13.</li>
    </ul>

    <h3>2. Letter Series Patterns</h3>
    <p>Letter series involve English alphabets arranged in a specific pattern. The position of each letter in the alphabet (A=1, B=2, ..., Z=26) is the key to solving these.</p>
    <ul>
      <li><strong>Positional Shift:</strong> Letters are shifted by a fixed number of positions. Example: A, C, E, G, I (+2 shift).</li>
      <li><strong>Reverse Positional Value:</strong> Sometimes the reverse positional value is used (Z=1, Y=2, ..., A=26). Notice that Forward Position + Reverse Position = 27.</li>
      <li><strong>Multiple Letter Groups:</strong> The series consists of groups of letters. The pattern often relates the first letter of each group, the second letter of each group, and so on. Example: ABC, DEF, GHI, JKL.</li>
      <li><strong>Vowels and Consonants:</strong> Patterns might involve alternating vowels and consonants or specific rules applying only to vowels.</li>
    </ul>

    <h3>3. Mixed Alphanumeric Series</h3>
    <p>These series combine both letters and numbers. The pattern usually involves simultaneous operations on both components. For example, in the series A1, C3, E5, G7, the letters increase by 2 (A->C->E->G) and the numbers increase by 2 (1->3->5->7).</p>

    <h3>4. Wrong Number Detection</h3>
    <p>In wrong number series problems, a complete sequence is provided, but one term does not follow the pattern. To solve these, you must identify the general pattern of the series and then pinpoint the term that deviates from it. Often, calculating differences or ratios helps isolate the incorrect segment of the sequence.</p>

    <p>Mastering alphanumeric series is largely about practice and familiarity with common numerical relationships. Always start by checking differences if a pattern isn't immediately obvious, as it resolves a majority of series questions.</p>
  `,
  tricks: [
    {
      title: "Difference Method (Multi-level)",
      description: "If a number series does not have an obvious pattern (like squares or cubes), calculate the difference between consecutive terms. If the first differences don't show a pattern, calculate the differences of those differences (second-level), and so on."
    },
    {
      title: "Ratio Method",
      description: "When terms in a sequence increase or decrease rapidly, check the ratio between consecutive terms. They might be multiplied or divided by a constant or an incrementally changing number."
    },
    {
      title: "Square/Cube ± n Pattern",
      description: "Always check if the numbers are close to perfect squares or cubes. A common pattern is n² ± n, n² ± k, or n³ ± n. Knowing squares up to 30 and cubes up to 15 by heart is highly recommended."
    },
    {
      title: "Prime Number Recognition",
      description: "If a sequence contains numbers like 2, 3, 5, 7, 11, immediately suspect a prime number logic. Prime number sequences often do not yield uniform patterns through differences."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      question: "Find the next term in the series: 2, 5, 10, 17, 26, ?",
      options: ["35", "37", "39", "41"],
      correctAnswer: "37",
      explanation: "The pattern is \(n^2 + 1\). 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26. The next term is 6²+1 = 37."
    },
    {
      id: 2,
      type: "practice",
      question: "What comes next in the sequence: A, C, F, J, ?",
      options: ["O", "N", "P", "M"],
      correctAnswer: "O",
      explanation: "The positional values are A(1), C(3), F(6), J(10). The differences are +2, +3, +4. The next difference should be +5. 10 + 5 = 15, which corresponds to O."
    },
    {
      id: 3,
      type: "practice",
      question: "Find the missing term: 3, 12, 48, 192, ?",
      options: ["768", "672", "576", "480"],
      correctAnswer: "768",
      explanation: "Each term is multiplied by 4 to get the next term. 192 × 4 = 768."
    },
    {
      id: 4,
      type: "practice",
      question: "Identify the wrong term in the series: 1, 4, 9, 16, 24, 36",
      options: ["4", "9", "24", "36"],
      correctAnswer: "24",
      explanation: "The series represents squares of natural numbers: 1², 2², 3², 4², 5², 6². The term 24 should be 5² = 25."
    },
    {
      id: 5,
      type: "practice",
      question: "What is the next number: 5, 11, 23, 47, 95, ?",
      options: ["189", "190", "191", "192"],
      correctAnswer: "191",
      explanation: "The pattern is (previous term × 2) + 1. 95 × 2 + 1 = 191."
    },
    {
      id: 6,
      type: "practice",
      question: "Complete the alphanumeric series: A1, D4, G7, J10, ?",
      options: ["L12", "M13", "M14", "N13"],
      correctAnswer: "M13",
      explanation: "Letters increase by 3: A(+3)->D(+3)->G(+3)->J(+3)->M. Numbers increase by 3: 1(+3)->4(+3)->7(+3)->10(+3)->13. So, M13."
    },
    {
      id: 7,
      type: "practice",
      question: "Find the missing term: 10, 18, 28, 40, 54, 70, ?",
      options: ["85", "86", "87", "88"],
      correctAnswer: "88",
      explanation: "Differences are 8, 10, 12, 14, 16. The next difference is 18. 70 + 18 = 88."
    },
    {
      id: 8,
      type: "practice",
      question: "What comes next: Z, W, S, P, L, I, E, ?",
      options: ["C", "B", "A", "D"],
      correctAnswer: "B",
      explanation: "Positional values: Z(26), W(23), S(19), P(16), L(12), I(9), E(5). The differences are -3, -4, -3, -4, -3, -4. The next difference should be -3. 5 - 3 = 2, which is B."
    },
    {
      id: 9,
      type: "practice",
      question: "Identify the wrong number: 2, 3, 5, 8, 12, 18, 23",
      options: ["12", "18", "23", "8"],
      correctAnswer: "18",
      explanation: "Differences are +1, +2, +3, +4, +5, +6. The series should be 2, 3, 5, 8, 12, 17, 23. Thus, 18 is wrong and should be 17."
    },
    {
      id: 10,
      type: "practice",
      question: "Find the next term: 0, 7, 26, 63, ?",
      options: ["124", "125", "126", "127"],
      correctAnswer: "124",
      explanation: "The pattern is \(n^3 - 1\). 1³-1=0, 2³-1=7, 3³-1=26, 4³-1=63. The next is 5³-1 = 124."
    },
    {
      id: 11,
      type: "practice",
      question: "Complete the series: 3, 4, 12, 45, 196, ?",
      options: ["985", "990", "1000", "1005"],
      correctAnswer: "1005",
      explanation: "The pattern is (term × 1)+1, (term × 2)+4, (term × 3)+9, (term × 4)+16... Next is 196 × 5 + 25 = 980 + 25 = 1005."
    },
    {
      id: 12,
      type: "practice",
      question: "What is the next group: QAR, RAS, SAT, TAU, ?",
      options: ["UAV", "UAT", "VAT", "VAV"],
      correctAnswer: "UAV",
      explanation: "First letter: Q, R, S, T, U. Middle letter: A is constant. Third letter: R, S, T, U, V. The next group is UAV."
    },
    {
      id: 13,
      type: "practice",
      question: "Find the missing term in: 12, 15, 21, 30, 42, ?",
      options: ["55", "57", "59", "61"],
      correctAnswer: "57",
      explanation: "Differences are +3, +6, +9, +12. Next is +15. 42 + 15 = 57."
    },
    {
      id: 14,
      type: "practice",
      question: "Find the wrong term: 10, 14, 28, 32, 64, 68, 132",
      options: ["28", "32", "64", "132"],
      correctAnswer: "132",
      explanation: "Pattern is +4, ×2, +4, ×2, +4, ×2. 10+4=14, 14×2=28, 28+4=32, 32×2=64, 64+4=68, 68×2=136. So 132 is wrong."
    },
    {
      id: 15,
      type: "practice",
      question: "Next term in series: 7, 26, 63, 124, 215, 342, ?",
      options: ["511", "512", "513", "514"],
      correctAnswer: "511",
      explanation: "The sequence is n³ - 1 for n=2,3,4,5,6,7. For n=8, it's 8³ - 1 = 512 - 1 = 511."
    },
    {
      id: 16,
      type: "past_year",
      question: "Find the missing term: 14, 16, 22, 34, 54, ?",
      options: ["84", "82", "86", "80"],
      correctAnswer: "84",
      explanation: "Differences are 2, 6, 12, 20. Differences of differences are 4, 6, 8. Next is 10. So difference is 20+10=30. 54+30=84."
    },
    {
      id: 17,
      type: "past_year",
      question: "Complete the series: B2D, E3H, I4M, ?",
      options: ["N5S", "N5R", "M5S", "N6R"],
      correctAnswer: "N5S",
      explanation: "First letter: B(+3)E(+4)I(+5)N. Number: 2, 3, 4, 5. Third letter: D(+4)H(+5)M(+6)S. Therefore, N5S."
    },
    {
      id: 18,
      type: "past_year",
      question: "What comes next: 8, 4, 4, 6, 12, ?",
      options: ["28", "30", "32", "36"],
      correctAnswer: "30",
      explanation: "Pattern: ×0.5, ×1, ×1.5, ×2. Next is ×2.5. 12 × 2.5 = 30."
    },
    {
      id: 19,
      type: "practice",
      question: "Identify the wrong number: 3, 7, 15, 32, 63, 127",
      options: ["7", "15", "32", "63"],
      correctAnswer: "32",
      explanation: "Each term is the previous term × 2 + 1: 3 → 7 → 15 → 31 → 63 → 127. The fourth term should be 31, so 32 is wrong."
    },
    {
      id: 20,
      type: "past_year",
      question: "Identify the wrong number: 4, 6, 15, 50, 201, 1011",
      options: ["15", "50", "201", "1011"],
      correctAnswer: "50",
      explanation: "Pattern is ×1+2, ×2+3, ×3+4, ×4+5. 4×1+2=6, 6×2+3=15, 15×3+4=49. The term 50 is wrong, it should be 49."
    }
  ]
};

export default topicData;
