/***************************************************************
 * 104. Variable declarations with let and const
 **************************************************************/

/**
 * const => Valor constante no modificable en el tiempo.
 * let => Valor modificable, es como el antiguo var
 */

/*
let name = "Erick";
const apellido = "Vicentin";
name = "Erick Emanuel";

console.log(name + " " + apellido);
*/

/*
function es5(display) {
  if (display) {
    var name = "Erick";
    var yearBirth = 1995;
  }
  console.log(name + " nacio en " + yearBirth);
}

es5(true);

function es6(display) {
  if (display) {
    let name = "Erick";
    const yearBirth = 1995;
  }
  console.log(name + " nacio en " + yearBirth);
}

es6(true);


let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

*/

/***************************************************************
 * 105. BLOCKS and IFFEs
 **************************************************************/

/*
{
  const a = 10;
  let b = 23;
  console.log(a + b);
}
{
  const a = 15;
  let b = 5;
  console.log(a + b);
}
*/

/***************************************************************
 * 106. Strings in ES6
 **************************************************************/

/*
let firstName = "Erick ";
let lastName = "Vicentin";
const yearOfBirth = 1996;

function calcAge(year) {
  var now = new Date();
  let actualYear = now.getFullYear();
  return actualYear - year;
}

console.log(
  `El es ${firstName} ${lastName}. Nacio en ${yearOfBirth} y hoy tiene ${calcAge(
    yearOfBirth
  )} años`
);

const x = `${firstName} ${lastName}`;
console.log(x.startsWith("Er"));
console.log(x.endsWith("tin"));
console.log(x.includes("ick"));
console.log(firstName.repeat(5));

*/

/***************************************************************
 * 107. Arrow functionsssssss =>
 **************************************************************/

/*
const years = [1990, 1992, 1994, 1996, 1998, 2000];

//ES5
var ages5 = years.map(function (elto) {
  return 2020 - elto;
});
console.log(ages5);

//ES6
let ages6 = years.map((elto) => 2020 - elto);
console.log(ages6);

ages6 = years.map((elto, index) => `Age element ${index + 1}: ${2020 - elto}`);
console.log(ages6);

ages6 = years.map((elto, index) => {
  const now = new Date().getFullYear();
  const age = now - elto;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
*/

/***************************************************************
 * 107. Arrow functionsssssss =>  Lexical 'this' keyword!!
 **************************************************************/

/*
// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};
//box5.clickMe();

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

const box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box66.clickMe();

function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );

  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);

  console.log(arr);
};

new Person("Mike").myFriends6(friends);
*/

/***************************************************************
 * 108. Destructuring
 **************************************************************/

/*
// ES5
var john = ["John", 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "John",
  lastName: "Smith",
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/***************************************************************
 * 109. Arrays
 **************************************************************/

/*
const boxes = document.querySelectorAll(".box");

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

//ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }

  boxesArr5[i].textContent = "I changed to blue!";
}

//ES6
for (const current of boxesArr6) {
  if (current.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex((cur) => cur >= 18));
console.log(ages.find((cur) => cur >= 18));
*/
