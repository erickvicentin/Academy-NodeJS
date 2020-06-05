/*********************************************
 * 61. Creating Objects: Function constructors.
 *********************************************/

/*
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(this.name + " have " + (2020 - this.yearOfBirth) + " years.");
};

var erick = new Person("Erick", 1996, "Developer");
var melisa = new Person("Melisa", 1997, "Medical Doctor");

erick.calculateAge();
melisa.calculateAge();

*/

/********************************************
 * 62. The Prototype Chain in the Console
 * *****************************************/

/*
console.log(erick.hasOwnProperty("job"));
console.log(erick.hasOwnProperty("lastName"));

console.log(erick instanceof Person);

*/

/********************************************
 * 63. Creating Objects: Object.create
 * *****************************************/

/*

var personProto = {
  calculateAge: function () {
    console.log(this.name + " have " + (2020 - this.yearOfBirth) + " years.");
    return 2020 - this.yearOfBirth;
  },
};

var erick = Object.create(personProto);
erick.name = "Erick";
erick.yearOfBirth = 1996;
erick.age = erick.calculateAge();
erick.job = "Developer";

var melisa = Object.create(personProto, {
  name: { value: "Melisa" },
  yearOfBirth: { value: 1997 },
  job: { value: "Medical Doctor" },
});

*/

/********************************************
 * 64. Primitives vs Objects
 * *****************************************/

/* 

// PRIMITIVES
var x = 23;
var y = x;
x = 40;

console.log(x);
console.log(y);

// OBJECTS
var object1 = {
  name: "Erick",
  age: 23,
};

var object2 = object1;

object1.age = 25;

console.log(object1.age);
console.log(object2.age);

// FUNCTIONS
var age = 27;
var object = {
    name: 'Jonas',
    city: 'San Fransisco'
}

function change(a, b) {
    a = 30,
        b.city = 'Lisboa'
}

*/

/********************************************
 * 64. Primitives vs Objects
 * *****************************************/

/*

var years = [1990, 1992, 1994, 1996, 1998, 2000];

function arrayCalc(arr, fn) {
  var arrayResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrayResult.push(fn(arr[i]));
  }
  return arrayResult;
}

function calculateAge(elto) {
  return 2020 - elto;
}

console.log(arrayCalc(years, calculateAge));

*/

/*********************************************************
 * 66. First Class Functions: Functions Returning Functions
 *********************************************************/

/* 
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you explain what is the UX design?");
    };
  } else if (job === "developer") {
    return function (name) {
      console.log(name + ", can you explain what is the method override?");
    };
  }
}

interviewQuestion("developer")("Erick");
*/

/*********************************************************
 * 67.  Immediately Invoked Function Expressions (IIFE)
 *********************************************************/

/*

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

*/

/*********************************************************
 * 68.  Closures
 *********************************************************/

/* 

function questionJob(job) {
  var question1 = ", can you explain what is UX design?.";
  var question2 = ", can you explain what is override of methods?";
  var question3 = ", can you explain what is the ecologic refrigerant gas?";

  return function (name) {
    if (job === "designer") {
      console.log(name + question1);
    } else if (job === "developer") {
      console.log(name + question2);
    } else if (job === "technical") {
      console.log(name + question3);
    } else {
      console.log(name + ", what is you do?");
    }
  };
}

questionDesigner = questionJob("designer");
questionDeveloper = questionJob("developer");
questionTechnic = questionJob("technical");
questionOther = questionJob("other-job");

questionDesigner("Erick");
questionDeveloper("Leandro");
questionTechnic("Genaro");
questionOther("Melisa");

questionJob("engineer")("Shumy");

*/

/*********************************************************
 * 69. Bind, Call and Apply
 *********************************************************/

var erick = {
  name: "Erick",
  age: 23,
  job: "Developer",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " ladies and gentlemen! Im " +
          this.name +
          ". Im " +
          this.job +
          " and Im " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log("Hey! Whats up? Im " + this.name + ". Good " + timeOfDay);
    }
  },
};

erick.presentation("formal", "moorning");

var melisa = {
  name: "Melisa",
  age: 22,
  job: "Medical doctor",
};

erick.presentation.call(melisa, "friendly", "night");

erick.presentation.apply(melisa, ["friendly", "afternoon"]);

var erickFriendly = erick.presentation.bind(erick, "friendly");

erickFriendly("night");
erickFriendly("morning");
erickFriendly("afternoon");
