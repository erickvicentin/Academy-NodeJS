/***************************
 * Chapter 17: Truthy and Falsy Values and Equality Operators
 */

// Falsy values: undefined, null, 0, '', NaN.
// Truthy values: NOT falsy values.

var height;

height = 23;

height
  ? console.log("Variable is defined")
  : console.log("Variable has NOT been defined");

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality operators
if (height == "23") {
  console.log("The == operator does type coercion");
}
