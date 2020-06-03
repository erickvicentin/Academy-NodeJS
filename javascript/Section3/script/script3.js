/*****************************
 * 41/42. this keyword.
 */

/*
calculateAge(1985);
function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}
*/

var jhon = {
  name: "Jhon",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this.name, this.yearOfBirth);
  },
};

jhon.calculateAge();
