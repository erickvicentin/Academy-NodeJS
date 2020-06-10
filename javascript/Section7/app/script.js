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
 * 108. Arrow functionsssssss =>  Lexical 'this' keyword!!
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
 * 109. Destructuring
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
 * 110. Arrays
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
/***************************************************************
 * 111. Spread Operator
 **************************************************************/
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["Erick", "Melisa", "Lucy"];
const familyMiller = ["Parker", "Juani", "Ana"];
const bigFamily = [...familySmith, "Chichi", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

Array.from(all).forEach((cur) => (cur.style.color = "purple"));
*/
/***************************************************************
 * 112. Rest parameters
 **************************************************************/
/*
//ES5
function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= 18);
  });
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
  years.forEach((cur) => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

//ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= limit);
  });
}

//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
  years.forEach((cur) => console.log(2016 - cur >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/
/***************************************************************
 * 113. Default parameters
 **************************************************************/
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Vicentin") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "argentino")
    : (nationality = nationality);

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

//ES6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var erick = new SmithPerson("Erick", 1996);
var melisa = new SmithPerson("Melisa", 1983, "Medina", "chaqueña");
*/
/***************************************************************
 * 114. Maps
 **************************************************************/
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);


if(question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here')
}

//question.clear();


//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/***************************************************************
 * 115. Classes
 **************************************************************/

/*
 //ES6
class Person {
  constructor(name, lastName, job, yearOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
  }

  getAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    return age;
  }

  getDescription() {
    return `${this.name} tiene ${this.getAge()}, nació en ${
      this.yearOfBirth
    } y actualmente se desempeña como ${this.job}`;
  }
}

const erick = new Person("Erick", "Vicentin", "Developer", 1996);

erick.getDescription();
*/

/***************************************************************
 * 116. Classes with subclasses
 **************************************************************/

class Person {
  constructor(name, lastName, job, yearOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
  }

  getAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    return age;
  }

  getDescription() {
    return `${this.name} tiene ${this.getAge()}, nació en ${
      this.yearOfBirth
    } y actualmente se desempeña como ${this.job}`;
  }
}

class Developer extends Person {
  constructor(name, lastName, job, yearOfBirth, languages) {
    super(name, lastName, yearOfBirth, job);
    this.languages = languages;
  }

  newLanguage(lang) {
    this.languages.push(lang);
  }
}

let languages = ["java", "javascript", "html"];
const erick = new Developer("Erick", "Vicentin", "Developer", 1996, languages);
