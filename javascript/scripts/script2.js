/************************************************
 * Chapter 9: Variable mutation and Type Coercion
 */

console.log("SCRIPT 2");

var firstName, age, job, isMarried;

firstName = "Erick";
age = 23;
job = "Developer";
isMarried = false;

console.log(
  firstName + " have " + age + " and is " + job + ". Is married? " + isMarried
);

// Var mutation
age = "Twenty three";
job = "Web UI Developer";

alert(
  firstName + " have " + age + " and is " + job + ". Is married? " + isMarried
);

// Using the prompt

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);

// Bonus --> Comments

// Comment in one line

/**
 * Comment in two o more lines.
 */
