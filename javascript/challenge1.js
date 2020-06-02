/********************
 * Coding Challenge 1
 */
var markMass = 58;
var markHeight = 1.7;
var jhonMass = 72;
var jhonHeight = 1.69;

bmiMark = markMass / (markHeight * markHeight);
bmiJhon = jhonMass / (jhonHeight * jhonHeight);

isMarkHigherBMI = bmiMark > bmiJhon;

console.log("Is Mark's BMI higher than Jhon's BMI? " + isMarkHigherBMI);
