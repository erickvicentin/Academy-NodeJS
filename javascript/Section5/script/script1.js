/*********************************************
 * 61. Creating Objects: Function constructors.
 *********************************************/

/*
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(this.name + " have " + (2020 - this.yearOfBirth) + " years.");
};

var erick = new Person("Erick", 1996, "Developer");
var melisa = new Person("Melisa", 1997, "Medical Doctor");

erick.calculateAge();
melisa.calculateAge();

*/

/********************************************
 * 62. The Prototype Chain in the Console
 * *****************************************/

/*
console.log(erick.hasOwnProperty("job"));
console.log(erick.hasOwnProperty("lastName"));

console.log(erick instanceof Person);

*/

/********************************************
 * 63. Creating Objects: Object.create
 * *****************************************/

/*

var personProto = {
  calculateAge: function () {
    console.log(this.name + " have " + (2020 - this.yearOfBirth) + " years.");
    return 2020 - this.yearOfBirth;
  },
};

var erick = Object.create(personProto);
erick.name = "Erick";
erick.yearOfBirth = 1996;
erick.age = erick.calculateAge();
erick.job = "Developer";

var melisa = Object.create(personProto, {
  name: { value: "Melisa" },
  yearOfBirth: { value: 1997 },
  job: { value: "Medical Doctor" },
});

*/

/********************************************
 * 64. Primitives vs Objects
 * *****************************************/
