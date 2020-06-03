/********************************
 * 39. Hoisting in practice
 */

// functions
calculateAge(1996);
function calculateAge(year) {
  console.log(2020 - year);
}

var retirement = function (year) {
  console.log(65 - (2020 - year));
};
retirement(1996);

// variables

console.log(age);
var age = 23; // variable in the global context
console.log(age);

function foo() {
  var age = 65; // variable in the object context
  console.log(age);
}

foo(); // age: foo context.
console.log(age); // age: global context
