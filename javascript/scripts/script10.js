/***************************
 * Chapter 21: Functions statements and expressions
 */

// Function declaration
function _whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "developer":
      return firstName + " make incredibles applications.";
    case "designer":
      return firstName + " design fantastics mockups.";
    case "project-manager":
      return firstName + "  manage big teams of people.";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo("developer", "Pablo"));
console.log(whatDoYouDo("project-manager", "Fiorella"));
console.log(whatDoYouDo("technic", "Genaro"));
