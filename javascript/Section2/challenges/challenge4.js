/************************
 * 27. Coding Challenge 4
 */

var jhon = {
  name: "Jhon",
  mass: 68,
  height: 1.72,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

var mark = {
  name: "Mark",
  mass: 72,
  height: 1.8,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

if (jhon.calcBMI() > mark.calcBMI()) {
  console.log("Jhon's BMI is higher than Marks's BMI.");
} else if (jhon.calcBMI() < mark.calcBMI()) {
  console.log("Jhon's BMI is higher than Marks's BMI.");
} else {
  console.log("Jhon's BMI is same than Marks's BMI.");
}

console.log("Jhon BMI: " + jhon.calcBMI());
console.log("Mark BMI: " + mark.calcBMI());
