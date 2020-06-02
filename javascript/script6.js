/**
 * Chapter 15: Boolean logic
 */

var age = prompt("Please enter your age:");

if (age < 13) {
  console.log("You are a boy.");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are a man.");
}
