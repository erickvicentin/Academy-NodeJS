/**********************************
 * 40. Scoping and the Scope chain.
 * Second step of creation.
 */

// Scoping example
var a = "Hello";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "Erick";
  console.log(a + b + c + d);
}
