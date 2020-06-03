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
var totalScores, roundScore, activePlayer, gamePlaying;

init();

/*********************************
 *********** FUNCTIONS ***********
 *********************************/

function init() {
  totalScores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function change_player() {
  // document.querySelector('.player-0-panel').classList.remove('active')
  // document.querySelector(".player-1-panel").classList.add("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // document.querySelector(".dice").style.display = "none";
}

function btn_roll() {
  if (gamePlaying) {
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
    if (dice !== 1) {
      // Add score
      roundScore += dice;
    } else {
      // Next player
      change_player();
    }

    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }
}

function btn_hold() {
  if (gamePlaying) {
    // Add current score to Global score
    totalScores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById("score-0").textContent = totalScores[0];
    document.getElementById("score-1").textContent = totalScores[1];

    // Check if player won the game
    if (totalScores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!!!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      gamePlaying = false;
    } else {
      // Next Player
      change_player();
    }
  }
}

/*********************************
 ******** EVENTS LISTENERS *******
 *********************************/

document.querySelector(".btn-roll").addEventListener("click", btn_roll);
document.querySelector(".btn-hold").addEventListener("click", btn_hold);
document.querySelector(".btn-new").addEventListener("click", init);
