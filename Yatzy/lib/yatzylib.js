'use strict';

const $ = function(foo) {

    return document.getElementById(foo);
}

let arr2 = [false, false, false, false, false];
let arr1 = [];
let res;

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


const dice1stay = function() {
    let dice1 = $('diceOne'); 
    dice1.style.border = 'thick dotted #000000'; 

    arr2[0] = true; /*Sætter elementerne per index i arr2 til true hvilket
                    tager dem ud af loopet i realrolldice()*/
}

const dice2stay = function() {
    let dice2 = $('diceTwo');
    dice2.style.border = 'thick dotted #000000';

    arr2[1] = true;
}

const dice3stay = function() {
    let dice3 = $('diceThree');
    dice3.style.border = 'thick dotted #000000';

    arr2[2] = true;
}

const dice4stay = function() {
    let dice4 = $('diceFour');
    dice4.style.border = 'thick dotted #000000';

    arr2[3] = true;
}

const dice5stay = function() {
    let dice5 = $('diceFive');
    dice5.style.border = 'thick dotted #000000';

    arr2[4] = true;
}

let button = document.getElementById("rollBtn");
button.addEventListener("click", rollDice);



