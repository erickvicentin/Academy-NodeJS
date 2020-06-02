/**
 * Chapter 16: Ternary operator and Switch statements
 */

var firstName = "Erick";
age = 19;

// Ternary Operator

age >= 18
  ? console.log(firstName + " can drink beer.")
  : console.log(firstName + " cant drink beer.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

/*
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}
*/

// Switch statement

var job = "developer";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "developer":
    console.log(firstName + " working in Globant writing code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Resistencia.");
    break;
  default:
    console.log(firstName + " does something else.");
    break;
}

switch (true) {
  case age < 13:
    console.log("You are a boy.");
    break;
  case age >= 13 && age < 18:
    console.log("You are a teenager.");
    break;
  default:
    console.log("You are a man.");
    break;
}
