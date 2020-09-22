'use strict';

function roll() {
  return Math.floor(Math.random() * 6 + 1); 
}


const realrollDice = function () {
    let outcome;
    var result = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) { //Loop her
        if (!arr2[i]) {
            outcome = roll(6);
            console.log(outcome);
            arr1[i] = outcome;
        }
        result[outcome]++;
    }

    return result;
}

const rollDice = function () {
    res = [];
    res = realrollDice()
    console.log(res);
}

const restartGame = function () {
    location.reload();
};

function clickCount () {
    clicks++;
};

let arr2 = [false, false, false, false, false];
let arr1 = [];
let res;
let button = document.getElementById("rollBtn");
button.addEventListener("click", rollDice);

let rebutton = document.getElementById("restartBtn");
rebutton.addEventListener("click", restartGame);

let clicks = 0;
rebutton.addEventListener("click", clickCount);

console.log(clicks);