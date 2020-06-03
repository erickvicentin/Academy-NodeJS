/******************************
 * 25. Objects and properties
 */

// Object literal
var person = {
  firstName: "Erick",
  lastName: "Vicentin",
  age: 23,
  id: 40034162,
  birthYear: 1996,
  family: ["Miguel", "Lucy"],
  job: "developer",
  isMarried: false,
};

console.log(person.firstName);
console.log(person["age"]);
console.log(person.job);

// new Object syntax
var person2 = new Object();
person2.firstName = "Melisa";
person2.job = "medical doctor";
person2.age = 22;

console.log(person2);
