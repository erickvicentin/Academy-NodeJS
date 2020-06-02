/************************************************
 * Chapter 14: If / else Statements
 */

var civilStatus = "single";

if (civilStatus === "married") {
  console.log("Erick is Married");
} else {
  console.log("Erick is single");
}

var isMarried = false;

if (isMarried) {
  console.log("Erick is Married");
} else {
  console.log("Erick is single");
}

// Apply to challenge

var markMass = 58;
var markHeight = 1.7;
var jhonMass = 72;
var jhonHeight = 1.69;

bmiMark = markMass / (markHeight * markHeight);
bmiJhon = jhonMass / (jhonHeight * jhonHeight);

if (bmiMark > bmiJhon) {
  console.log("Marks BMI is higher than Jhons");
} else {
  console.log("Jhons BMI is higher than Marks");
}
