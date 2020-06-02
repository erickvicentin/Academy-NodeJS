/***************************
 * Chapter 22: Arrays
 */

// initialize new array
var names = ["Erick", "Jhon", "Mark", "Marie"];
var years = new Array(1996, 1990, 1960, 1986);
console.log(names);

// mutate array data
names[1] = "Ben"; // change element
names[names.length] = "Pablo"; // add element
console.log(names);

// different data type
var erick = ["Erick", "Vicentin", 1996, "Developer"];
console.log(erick);

// methods
erick.push("Globant"); // add element in end of array.
erick.unshift(23); // add element in start of array
console.log(erick);

erick.pop(); // remove the last element of array
erick.shift(); // remove the first element of array
console.log(erick);

console.log(erick.indexOf(1996));
/**
 * indexOf returns the positions of elements, but if this element not exist then indexOf returns -1
 */

var isGlober =
  erick.indexOf("Globant") === -1
    ? "Erick is not a Glober"
    : "Erick is a Glober";

console.log(isGlober);
