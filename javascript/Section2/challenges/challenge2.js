/****************************
 * 18. CODING CHALLENGE 2
 */

var scoreJhon = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

// 2. Decide which teams wins in average.

if (scoreJhon > scoreMike) {
  console.log("Jhon's team (" + scoreJhon + ") has a higher average score.");
} else if (scoreJhon < scoreMike) {
  console.log("Mike's team (" + scoreMike + ") has a higher average score.");
} else {
  console.log("Jhon's teams have the same average score that Mike's team");
}

// 3. Changes the scores.

scoreJhon = (134 + 120 + 103) / 3;
scoreMike = (92 + 94 + 123) / 3;

if (scoreJhon > scoreMike) {
  console.log("Jhon's team (" + scoreJhon + ") has a higher average score.");
} else if (scoreJhon < scoreMike) {
  console.log("Mike's team (" + scoreMike + ") has a higher average score.");
} else {
  console.log("Jhon's teams have the same average score that Mike's team");
}

// 4. EXTRA

/* For test the draw case.
scoreMary = 100;
scoreMike = 100;
scoreJhon = 100;
*/

console.log(
  "Jhon: " + scoreJhon + ". Mike: " + scoreMike + ". Mary: " + scoreMary
);

if (scoreJhon > scoreMary && scoreJhon > scoreMike) {
  console.log("Jhon's team (" + scoreJhon + ") has a higher average score.");
} else if (scoreMike > scoreJhon && scoreMike > scoreMary) {
  console.log("Mike's team (" + scoreMike + ") has a higher average score.");
} else if (scoreMary > scoreJhon && scoreMary > scoreMike) {
  console.log("Mary's team (" + scoreMary + ") has a higher average score.");
} else {
  console.log("Its a draw.");
}
