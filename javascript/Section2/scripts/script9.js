/***************************
 * Chapter 20: Functions
 */

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageErick = calculateAge(1996);
console.log("Erick have: " + ageErick);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1996, "Erick");
yearsUntilRetirement(1959, "Miguel");
yearsUntilRetirement(1951, "Jhon");
