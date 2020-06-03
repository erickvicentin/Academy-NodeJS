/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*********************************
 ******* Global Variables ********
 *********************************/
var totalScores, roundScore, activePlayer;

totalScores = [0, 0];
roundScore = 0;
activePlayer = 0;

/*********************************
 *********** FUNCTIONS ***********
 *********************************/

function btn_roll() {
  // Variables
  var diceDOM = document.querySelector(".dice");
  var currentDOM = document.querySelector("#current-" + activePlayer);

  // Step 1: Obtain random number.
  var dice = Math.floor(Math.random() * 6) + 1;

  // Step 2: Display current point.
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";
  currentDOM.textContent = dice;

  // Step 3: Update the round score IF the rolled number !== 1;
}

/*********************************
 ******** EVENTS LISTENERS *******
 *********************************/

document.querySelector(".btn-roll").addEventListener("click", btn_roll);
