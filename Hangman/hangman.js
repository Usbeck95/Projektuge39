"use strict";
// ordte der skal gettes
var word = ["a", "e", "r", "o", "p", "l", "a", "n", "e"];

var guess = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

const guessLetter = str => {

  let flag = 0;

  // traversing the whole word array to check if guessed char is equal to it or not

  for (var i = 0; i < word.length; i++) {

    if (word[i] === str) {

      flag = 1;

      guess[i] = str;

    }

  }

  console.log(guess.join(" "));

  // if the guess letter was correct

  if (flag == 1) {

    document.getElementById("guessedWord").innerHTML = guess.join(" ");

    document.getElementById("str").value = "";

    document.getElementById("message").innerHTML =

      "Congratulation you guessed the right letter";

    // console.log("Congratulation you guessed the right letter");

  }

  // if all the letters are guessed

  if (!guess.includes("_")) {

    document.getElementById("message").innerHTML =

      "Congratulation you won the game";

    // console.log("Congratulation you won the game");
  }
};

const clicked = () => {

  const str = document.getElementById("str").value;

  guessLetter(str);

};