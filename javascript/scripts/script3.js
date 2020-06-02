/************************************************
 * Chapter 10: Basic Operators
 */

var actualYear = 2020;
var yearsErick = 24;
var yearsMark = 33;
var varX;
var base = 3;
var altura = 5;

// Math operators

console.log("You birth year is: " + (actualYear - yearsErick));
console.log("Area: " + base * altura);
console.log("Division 4/2: " + 4 / 2);

// Logical operators

var erickOlder = yearsErick > yearsMark;
var markOlder = yearsErick < yearsMark;

console.log("Erick is older than Mark? " + erickOlder);
console.log("Mark is older than Erick? " + markOlder);

// typeOf operator

console.log(typeof erickOlder);
console.log(typeof yearsErick);
console.log(typeof "Hello World!");
console.log(typeof varX);
