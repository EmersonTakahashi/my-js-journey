"use strict";

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessText = document.querySelector(".guess").value;

  if (guessText == "") {
    //When there is no input
    document.querySelector(".message").textContent = "⛔ No number!";
    return;
  }
  const guess = Number(guessText);

  if (guess > 20 || guess < 1) {
    //When invalid number
    setMessageText("⛔ You should try a number between 1 and 20!");
  } else if (guess === secretNumber) {
    //When player wins
    setMessageText("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    disableCheckButton();
  } else if (guess !== secretNumber) {
    guess > secretNumber ? wrongValue("📈Too high") : wrongValue("📉Too low");
  }

  if (score <= 0) {
    setMessageText("💥 You lost the game! Try again...");
    disableCheckButton();
  }
});

//Again button, reset all the variants and styling
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = getSecretNumber();

  setMessageText("Start guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".check").disabled = false;

  document.querySelector(".check").style.backgroundColor = "#fff";
});

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function disableCheckButton() {
  document.querySelector(".check").disabled = true;

  document.querySelector(".check").style.backgroundColor = "#555";
}

function wrongValue(text) {
  setMessageText(text);
  score--;
  document.querySelector(".score").textContent = score;
}

function setMessageText(text) {
  document.querySelector(".message").textContent = text;
}
