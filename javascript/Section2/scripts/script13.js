/******************************
 * 26. Objects and methods
 */

const actualDate = new Date();

var person = {
  firstName: "Erick",
  lastName: "Vicentin",
  id: 40034162,
  birthYear: 1996,
  family: ["Miguel", "Lucy"],
  job: "developer",
  isMarried: false,
  // object method
  calcAge: function () {
    return actualDate.getFullYear() - this.birthYear;
  },
};

person.age = person.calcAge();

console.log(person.age);
