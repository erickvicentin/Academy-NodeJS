var Question = function (question, answerTrue, answers) {
  this.question = question;
  this.answerTrue = answerTrue;
  this.answers = answers;
};

var question1 = new Question("Javascript es genial?", "yes", [
  "no",
  "maybe",
  "yes",
]);

var question2 = new Question("Cual es mi nombre?", "Erick", [
  "Fernando",
  "Genaro",
  "Erick",
  "Mario",
]);
var question3 = new Question("Nombre del nuevo virus 2020?", "covid-19", [
  "covid-19",
  "h1n1",
  "sars-covid-19",
]);
var question4 = new Question("Que edad tengo?", "23", ["19", "23", "21", "26"]);

function askQuestion(q) {
  console.log("Respuestas");
  for (let i = 0; i < q.answers.length; i++) {
    console.log("[" + i + "] " + q.answers[i]);
  }
  var answer = prompt(q.question);
  if (answer == q.answers.indexOf(q.answerTrue)) {
    console.log("WINNER");
  } else {
    console.log("Looser!");
  }
}

var questions = [question1, question2, question3, question4];

var x = Math.floor(Math.random() * 4);
console.log(x);
askQuestion(questions[x]);
