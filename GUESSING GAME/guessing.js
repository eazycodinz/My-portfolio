"use strict";
//To generate the random numbers between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// this function keeps the code dry from repeating actions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//The eventListener for the check! botton and function to convert the guess string to a number and give the value
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input/number call the display message to display No Number!! using the if statement

  if (!guess) {
    displayMessage("No Number!!!");
    document.querySelector(".game-wrapper").style.backgroundColor = "red";
    //If input/Number matches with secretNumber: player wins: display else if statement
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!!!");
    document.querySelector(".number").textContent = secretNumber;
    //To change the background color and expand the guess number area when one wins
    document.querySelector(".game-wrapper").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //the current highscore should be the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When the guess is worng use the ternary operator fuction
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!!" : "Too Low!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//To reset the game
document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  //to reverse the css style
  document.querySelector("body").style.backgroundColor = "rgb(64, 19, 78)";
  document.querySelector(".number").style.width = "15rem";
});
