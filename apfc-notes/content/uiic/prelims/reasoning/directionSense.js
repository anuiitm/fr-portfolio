const topicData = {
  title: "Direction Sense",
  description: "Master the concepts of Direction Sense for the UIIC exam. Learn about cardinal directions, left/right turns, shadow problems, and displacement using Pythagorean theorem.",
  theory: `
    <h2>Introduction to Direction Sense</h2>
    <p>Direction Sense is a crucial topic in the reasoning section of competitive exams like UIIC. Questions in this section test a candidate's ability to navigate through a given set of directions and determine the final position or distance from the starting point. It requires a clear understanding of the cardinal and ordinal directions, the concept of left and right turns relative to the current facing direction, and the application of basic geometry, specifically the Pythagorean theorem, to calculate distances.</p>
    
    <h3>The 8 Primary Directions</h3>
    <p>The foundation of direction sense lies in understanding the four cardinal directions and the four ordinal (intercardinal) directions. Imagine a compass or a simple coordinate system:</p>
    <ul>
      <li><strong>Cardinal Directions:</strong> North (N), East (E), South (S), West (W).</li>
      <li><strong>Ordinal Directions:</strong> North-East (NE), North-West (NW), South-East (SE), South-West (SW).</li>
    </ul>
    <p>The angle between two adjacent cardinal directions (e.g., North and East) is always 90 degrees. The angle between a cardinal direction and its adjacent ordinal direction (e.g., North and North-East) is 45 degrees. When a person is facing North, East is to their right, West is to their left, and South is behind them.</p>

    <h3>Concept of Left and Right Turns</h3>
    <p>A frequent point of confusion is determining left and right turns when moving in different directions. The easiest way to grasp this is to imagine yourself walking in that direction:</p>
    <ul>
      <li><strong>Facing North:</strong> Taking a Right turn means turning towards East (90 degrees clockwise). Taking a Left turn means turning towards West (90 degrees anti-clockwise).</li>
      <li><strong>Facing South:</strong> Taking a Right turn means turning towards West. Taking a Left turn means turning towards East. (Notice that this is the exact opposite of facing North).</li>
      <li><strong>Facing East:</strong> Taking a Right turn means turning towards South. Taking a Left turn means turning towards North.</li>
      <li><strong>Facing West:</strong> Taking a Right turn means turning towards North. Taking a Left turn means turning towards South.</li>
    </ul>
    <p>If the degree of the turn is not specified, it is universally assumed to be a 90-degree turn. For example, "he turns left" means "he turns 90 degrees to his left". Sometimes questions specify angles, like "turns 45 degrees clockwise" or "135 degrees anti-clockwise". In such cases, use the 45-degree increments between cardinal and ordinal directions.</p>

    <h3>Concept of Shadows</h3>
    <p>Shadow-based problems are common and rely on the position of the sun during different times of the day. The fundamental principle is that a shadow always falls on the opposite side of the light source.</p>
    <ul>
      <li><strong>Morning (Sunrise):</strong> The sun rises in the East. Therefore, the shadow of any object will always fall towards the <strong>West</strong>.
        <ul>
          <li>If a person faces North in the morning, their shadow falls to their left.</li>
          <li>If a person faces South in the morning, their shadow falls to their right.</li>
          <li>If a person faces East in the morning, their shadow falls behind them.</li>
          <li>If a person faces West in the morning, their shadow falls in front of them.</li>
        </ul>
      </li>
      <li><strong>Evening (Sunset):</strong> The sun sets in the West. Therefore, the shadow of any object will always fall towards the <strong>East</strong>.
        <ul>
          <li>If a person faces North in the evening, their shadow falls to their right.</li>
          <li>If a person faces South in the evening, their shadow falls to their left.</li>
          <li>If a person faces East in the evening, their shadow falls in front of them.</li>
          <li>If a person faces West in the evening, their shadow falls behind them.</li>
        </ul>
      </li>
      <li><strong>12:00 Noon:</strong> At exactly 12:00 PM, the sun is directly overhead. Thus, there is <strong>no shadow</strong> formed (or it is directly underneath, which is effectively no shadow in these problems).</li>
    </ul>

    <h3>Shortest Distance and Displacement</h3>
    <p>Many problems ask for the "shortest distance" or "straight line distance" from the starting point to the ending point. This is also known as displacement. While the total distance covered is the sum of all individual segments, the shortest distance is calculated by drawing a straight line between the start and end points.</p>
    <p>When the path involves right-angled turns, calculating the shortest distance frequently requires the application of the <strong>Pythagorean Theorem</strong>.</p>
    <p><strong>Pythagorean Theorem:</strong> In a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.</p>
    <p>Formula: \\(Hypotenuse^2 = Base^2 + Perpendicular^2\\) or \\(c^2 = a^2 + b^2\\)</p>
    <p>Therefore, \\(Shortest Distance (c) = \\sqrt{a^2 + b^2}\\)</p>
    <p>To solve these problems systematically:</p>
    <ol>
      <li>Draw a neat diagram mapping out the entire path based on the instructions.</li>
      <li>Mark the starting point and the final point.</li>
      <li>Draw a straight line connecting the start and end points.</li>
      <li>Drop perpendicular lines to form a right-angled triangle where the line connecting the start and end points is the hypotenuse.</li>
      <li>Calculate the lengths of the base and perpendicular from the diagram.</li>
      <li>Apply the Pythagorean theorem to find the shortest distance.</li>
    </ol>

    <h3>Angle-Based Movements</h3>
    <p>Sometimes, movements are given in terms of angles (clockwise or anti-clockwise). To solve these:</p>
    <ul>
      <li>Clockwise (CW) turns mean turning to the right.</li>
      <li>Anti-clockwise (ACW) turns mean turning to the left.</li>
      <li>Keep track of the net angle. For example, if a person turns 135 degrees CW and then 45 degrees ACW, the net movement is \\(135 - 45 = 90\\) degrees CW.</li>
      <li>Apply the net angle from the original facing direction to find the final facing direction.</li>
    </ul>
    
    <h3>Important Tips for Accuracy</h3>
    <ul>
      <li>Always assume the top of your paper is North unless stated otherwise.</li>
      <li>Draw lines roughly proportional to the distances given (a 10km line should look longer than a 5km line) to avoid visual confusion and incorrect triangles.</li>
      <li>Read carefully if the question asks for "total distance covered" vs "shortest distance".</li>
      <li>Pay close attention to words like "facing" vs "moving". A person might be facing East but walking backwards (moving West).</li>
    </ul>
  `,
  tricks: [
    {
      title: "Clock Position Method",
      description: "Imagine the directions as numbers on a clock face. North is 12, East is 3, South is 6, and West is 9. A 90-degree clockwise turn is like adding 3 hours (facing North/12 + 3 hours = East/3). A 90-degree anti-clockwise turn is subtracting 3 hours."
    },
    {
      title: "Right-Hand Rule for Turns",
      description: "Extend your right hand. Your fingers point in the direction you are facing. To turn right, bend your fingers towards your palm (a natural motion). To turn left, bend your wrist backwards. Alternatively, mentally rotate yourself into the position on the paper to intuitively know which way is left or right."
    },
    {
      title: "Pythagorean Triplets",
      description: "Memorizing common Pythagorean triplets saves immense calculation time when finding shortest distances. Common triplets are: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (9, 40, 41). Also, their multiples are triplets, e.g., (6, 8, 10), (15, 36, 39)."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      question: "Rahul walks 10 km towards North. From there, he walks 6 km towards South. Then, he walks 3 km towards East. How far and in which direction is he with reference to his starting point?",
      options: ["5 km West", "7 km West", "7 km East", "5 km North-East", "5 km South-East"],
      correctAnswer: "5 km North-East",
      explanation: "Let starting point be A. Rahul walks 10 km North to B. Then 6 km South to C. (So C is 4 km North of A). Then 3 km East to D. We need distance AD. Triangle ACD is a right-angled triangle. AC = 4 km, CD = 3 km. AD^2 = AC^2 + CD^2 = 4^2 + 3^2 = 16 + 9 = 25. AD = 5 km. Point D is in the North-East direction from A."
    },
    {
      id: 2,
      type: "practice",
      question: "A man is facing West. He turns 45 degrees in the clockwise direction and then another 180 degrees in the same direction and then 270 degrees in the anti-clockwise direction. Which direction is he facing now?",
      options: ["South", "North-West", "West", "South-West", "North-East"],
      correctAnswer: "South-West",
      explanation: "Initial direction: West. Total clockwise turns = 45 + 180 = 225 degrees. Total anti-clockwise turns = 270 degrees. Net turn = 270 - 225 = 45 degrees anti-clockwise. 45 degrees anti-clockwise from West is South-West."
    },
    {
      id: 3,
      type: "practice",
      question: "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. To which direction was he facing?",
      options: ["East", "West", "South", "North", "Data Inadequate"],
      correctAnswer: "South",
      explanation: "Time: Morning. The sun is in the East, so shadows fall in the West. The shadow of the pole falls to Suresh's right. This means Suresh's right side is towards the West. If your right side is West, you must be facing South."
    },
    {
      id: 4,
      type: "practice",
      question: "A rat runs 20m towards East and turns to right, runs 10m and turns to right, runs 9m and again turns to left, runs 5m and then turns to left, runs 12m and finally turns to left and runs 6m. Now, which direction is the rat facing?",
      options: ["East", "West", "North", "South", "North-West"],
      correctAnswer: "North",
      explanation: "Start East. Turn Right -> Facing South. Turn Right -> Facing West. Turn Left -> Facing South. Turn Left -> Facing East. Turn Left -> Facing North."
    },
    {
      id: 5,
      type: "practice",
      question: "Starting from a point P, Sachin walked 20 metres towards South. He turned left and walked 30 metres. He then turned left and walked 20 metres. He again turned left and walked 40 metres and reached a point Q. How far and in which direction is the point Q from the point P?",
      options: ["20 metres West", "10 metres East", "10 metres West", "10 metres North", "None of these"],
      correctAnswer: "10 metres West",
      explanation: "Walks 20m South from P. Turns left (East) and walks 30m. Turns left (North) and walks 20m. He is now in line with point P, but 30m East of it. He turns left (West) and walks 40m. He goes 30m back to P and 10m further West. So Q is 10m West of P."
    },
    {
      id: 6,
      type: "practice",
      question: "City A is 10 km to the West of City B. City C is 15 km to the South of City B. City D is 20 km to the East of City C. City E is 15 km to the North of City D. In which direction is City E with respect to City A?",
      options: ["East", "West", "North-East", "South-East", "South"],
      correctAnswer: "East",
      explanation: "A is 10km W of B. C is 15km S of B. D is 20km E of C. E is 15km N of D. Since E is 15km North of D, and D is 15km South of the horizontal line through A and B, E lies on the same horizontal line. D is 20km E of C, so E is 20km E of B. Therefore, E is East of A (10km + 20km = 30km East)."
    },
    {
      id: 7,
      type: "practice",
      question: "Golu started from his house towards North. After covering a distance of 8 km. he turned towards left and covered a distance of 6 km. What is the shortest distance now from his house?",
      options: ["10 km", "16 km", "14 km", "2 km", "12 km"],
      correctAnswer: "10 km",
      explanation: "Let house be origin (0,0). Moves 8km North to (0, 8). Turns left (West) and moves 6km to (-6, 8). Shortest distance = sqrt((-6-0)^2 + (8-0)^2) = sqrt(36 + 64) = sqrt(100) = 10 km. Notice the Pythagorean triplet (6, 8, 10)."
    },
    {
      id: 8,
      type: "practice",
      question: "P is 300 Kms eastward of O and Q is 400 Kms North of O. R is exactly in the middle of Q and P. The distance between Q and R is:",
      options: ["250 Kms", "250 √2 Kms", "300 Kms", "350 Kms", "200 Kms"],
      correctAnswer: "250 Kms",
      explanation: "O is at origin. P is at (300, 0). Q is at (0, 400). Distance PQ = sqrt(300^2 + 400^2) = 500 Kms. (Using 3-4-5 triplet multiplied by 100). R is in the middle of Q and P, so R is the midpoint of segment PQ. The distance QR is half of PQ. QR = 500 / 2 = 250 Kms."
    },
    {
      id: 9,
      type: "practice",
      question: "A boy rode his bicycle Northward, then turned left and rode 1 km and again turned left and rode 2 km. He found himself 1 km west of his starting point. How far did he ride northward initially?",
      options: ["1 km", "2 km", "3 km", "5 km", "4 km"],
      correctAnswer: "2 km",
      explanation: "Let starting point be origin (0,0). Rides x km North to (0, x). Turns left (West) and rides 1 km to (-1, x). Turns left (South) and rides 2 km to (-1, x - 2). He is now 1 km West of starting point, which is point (-1, 0). So, (-1, x - 2) = (-1, 0). Therefore, x - 2 = 0, which means x = 2 km."
    },
    {
      id: 10,
      type: "practice",
      question: "If South-East becomes North, North-East becomes West and so on. What will West become?",
      options: ["North-East", "North-West", "South-East", "South-West", "South"],
      correctAnswer: "South-East",
      explanation: "Original SE becomes North. The angle from SE to North is 135 degrees anti-clockwise. Original NE becomes West. The angle from NE to West is also 135 degrees anti-clockwise. The entire compass has rotated 135 degrees anti-clockwise. To find what West becomes, we look at what is 135 degrees clockwise from West in the original compass, or rotate West by 135 degrees anti-clockwise. West rotated 135 degrees anti-clockwise gives South-East."
    },
    {
      id: 11,
      type: "practice",
      question: "One evening before sunset Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
      options: ["North", "South", "East", "West", "Data Inadequate"],
      correctAnswer: "South",
      explanation: "Time: Evening. Sun is in West. Shadows fall in East. Hema's shadow is to Hema's right. This means Hema's right side is East. So Hema must be facing North. Since they are face to face, Rekha is facing South."
    },
    {
      id: 12,
      type: "practice",
      question: "A direction pole was situated on the crossing. Due to an accident the pole turned in such a manner that the pointer which was showing East, started showing South. One traveler went to the wrong direction thinking it to be West. In what direction actually was he traveling?",
      options: ["North", "South", "East", "West", "South-West"],
      correctAnswer: "North",
      explanation: "The pointer that should show East is now showing South. This means the pole has rotated 90 degrees clockwise. So the pointer showing West is actually pointing to the original North direction. The traveler followed the 'West' pointer, so he is actually traveling North."
    },
    {
      id: 13,
      type: "past_year",
      question: "Point A is 5m to the North of Point B. Point C is 4m to the East of Point B. Point D is 6m to the South of Point C. Point E is 4m to the West of Point D. Point F is 8m to the North of Point E. What is the distance between Point F and Point A?",
      options: ["2m", "3m", "4m", "5m", "1m"],
      correctAnswer: "3m",
      explanation: "Let A = (0, 5) and B = (0, 0). C is 4m East of B = (4, 0). D is 6m South of C = (4, -6). E is 4m West of D = (0, -6). F is 8m North of E = (0, 2). Distance between F(0, 2) and A(0, 5) is 3m."
    },
    {
      id: 14,
      type: "past_year",
      question: "A person starts walking from his home towards East. After walking 15m, he turns right and walks 10m. Then he turns left and walks 5m. Finally, he turns left and walks 10m to reach his office. How far and in which direction is his office with respect to his home?",
      options: ["20m, East", "15m, North", "20m, West", "10m, East", "15m, South"],
      correctAnswer: "20m, East",
      explanation: "Start at home (0,0). Walk 15m East to (15,0). Turn right (South) walk 10m to (15, -10). Turn left (East) walk 5m to (20, -10). Turn left (North) walk 10m to (20, 0). The office is at (20,0). Home is at (0,0). Distance is 20m, direction is East."
    },
    {
      id: 15,
      type: "past_year",
      question: "Shyam walks 5 km towards East and then turns left and walks 6 km. Again he turns right and walks 9 km. Finally, he turns to his right and walks 6 km. How far is he from the starting point?",
      options: ["14 km", "26 km", "20 km", "15 km", "16 km"],
      correctAnswer: "14 km",
      explanation: "Walks 5 km East. Turns left (North) and walks 6 km. Turns right (East) and walks 9 km. Turns right (South) and walks 6 km. His total horizontal movement East is 5 + 9 = 14 km. His vertical movement is 6 km North, then 6 km South, cancelling out. He is 14 km directly East of his starting point."
    },
    {
      id: 16,
      type: "past_year",
      question: "Ravi left home and cycled 10 km towards South, then turned right and cycled 5 km and then again turned right and cycled 10 km. After this he turned left and cycled 10 km. How many kilometers will he have to cycle to reach his home straight?",
      options: ["10 km", "15 km", "20 km", "25 km", "5 km"],
      correctAnswer: "15 km",
      explanation: "Cycle 10km South. Turn right (West) cycle 5km. Turn right (North) cycle 10km. He is now directly West of his home by 5km. Turn left (West) and cycle 10km. He is now further West. Total distance West from home = 5km + 10km = 15km. He has to cycle 15km straight East to reach home."
    },
    {
      id: 17,
      type: "past_year",
      question: "A man walks 30 meters towards South. Then, turning to his right, he walks 30 meters. Then, turning to his left, he walks 20 meters. Again, he turns to his left and walks 30 meters. How far is he from his initial position?",
      options: ["20 meters", "30 meters", "50 meters", "80 meters", "60 meters"],
      correctAnswer: "50 meters",
      explanation: "Walks 30m South. Turns right (West) walks 30m. Turns left (South) walks 20m. Turns left (East) walks 30m. His horizontal movement is 30m West then 30m East, returning to the original vertical line. His vertical movement is 30m South, then another 20m South. Total distance from initial position is 30 + 20 = 50 meters South."
    }
  ]
};

export default topicData;
