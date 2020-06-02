/*************************
 * 29. Loops and Iteration
 */

// Loop for-
for (let i = 0; i < 3; i++) {
  console.log(i);
}

var array = ["Erick", "Juani", 1993, false, "Melisa", "Lucy"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// While loop
var x = 0;
while (x < array.length) {
  console.log(array[x]);
  x++;
}

// console.clear();

/**
 * @doc
 * Continue --> Skip the current iteration
 * moving on to the next without executing
 * any action for the rest of the loop....
 */
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "string") continue;
  console.log(array[i]);
}

// Looping backwards
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
