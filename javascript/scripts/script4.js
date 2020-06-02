/************************************************
 * Chapter 11: Operator precedence
 */

var actualYear = 2020;
var yearErick = 1996;
var fullAge = 18;

// Multiple Operators
var isFullAge = actualYear - yearErick >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageErick = 24;
var ageMark = 33;
var average = (ageErick + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8*4-6 // 32-6 // 26
console.log("X: " + x, "Y: " + y);

// More operators
x *= 2; // double x
console.log("X * 2: " + x);
x++; // increment 1
console.log("X + 1: " + x);
x += 10; // X increases the indicated amount.
console.log("X + 10: " + x);
x--; // X decreases 1.
console.log("X - 1: " + x);
