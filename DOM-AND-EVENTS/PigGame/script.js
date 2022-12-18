"use strict";
const player0 = {
  name: document.getElementById("name--0").textContent,
  totalScore: 0,
  currentScore: 0,
  playerElement: document.querySelector(".player--0"),
  totalScoreElement: document.getElementById("score--0"),
  currentScoreElement: document.getElementById("current--0"),
  myTurn: true,
};
const player1 = {
  name: document.getElementById("name--1").textContent,
  totalScore: 0,
  currentScore: 0,
  playerElement: document.querySelector(".player--1"),
  totalScoreElement: document.getElementById("score--1"),
  currentScoreElement: document.getElementById("current--1"),
  myTurn: false,
};
const players = [player0, player1];
let currentPlayer = getCurrentPlayer();
let nextPlayer = getNextPlayer();

const diceElement = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

resetGame();

//#region EventListeners
btnNew.addEventListener("click", resetGame);

btnRollDice.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.src = `dice-${dice}.png`;

  diceElement.classList.remove("hidden");

  if (dice === 1) {
    switchPlayer();
    return;
  }

  currentPlayer.currentScore += dice;
  currentPlayer.currentScoreElement.textContent = currentPlayer.currentScore;
});

btnHold.addEventListener("click", function () {
  //Set total score and reset the current score
  setTotalScore(
    currentPlayer,
    currentPlayer.totalScore + currentPlayer.currentScore
  );
  diceElement.classList.add("hidden");
  if (currentPlayer.totalScore >= 100) {
    setWinner();
  }
  switchPlayer();
});
//#endregion EventListeners

//#region Functions
function resetGame() {
  for (let i = 0; i < players.length; i++) {
    setTotalScore(players[i], 0);
    setCurrentScore(players[i], 0);
  }
  //remove winner class of the winner, since he is the next player after clicking "hold"
  nextPlayer.playerElement.classList.remove("player--winner");

  player0.myTurn = true;
  player1.myTurn = false;

  currentPlayer = getCurrentPlayer();
  nextPlayer = getNextPlayer();

  currentPlayer.playerElement.classList.add("player--active");
  nextPlayer.playerElement.classList.remove("player--active");

  btnRollDice.disabled = false;
  btnHold.disabled = false;
  btnRollDice.removeAttribute("style");
  btnHold.removeAttribute("style");

  diceElement.classList.add("hidden");
}
function setTotalScore(player, score) {
  player.totalScore = score;
  player.totalScoreElement.textContent = player.totalScore;
}
function setCurrentScore(player, score) {
  player.currentScore = score;
  player.currentScoreElement.textContent = player.currentScore;
}

function getCurrentPlayer() {
  return player0.myTurn ? player0 : player1;
}

function getNextPlayer() {
  return player0.myTurn ? player1 : player0;
}

function switchPlayer() {
  currentPlayer.currentScore = 0;
  currentPlayer.myTurn = false;
  nextPlayer.myTurn = true;
  currentPlayer.playerElement.classList.remove("player--active");
  nextPlayer.playerElement.classList.add("player--active");
  setCurrentScore(currentPlayer, 0);

  currentPlayer = getCurrentPlayer();
  nextPlayer = getNextPlayer();
}

function setWinner() {
  btnRollDice.disabled = true;
  btnHold.disabled = true;
  btnRollDice.style.backgroundColor = "#a9a9a9";
  btnHold.style.backgroundColor = "#a9a9a9";
  currentPlayer.playerElement.classList.remove("player--active");
  currentPlayer.playerElement.classList.add("player--winner");
}
//#endregion Functions
