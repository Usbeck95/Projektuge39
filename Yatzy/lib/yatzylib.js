'use strict';

const $ = function(foo) {

    return document.getElementById(foo);
}

let arr2 = [false, false, false, false, false];
let arr1 = [];
let res;
let tries = 0;
let rounds = 0;
let dice = document.getElementsByClassName("Dice");
let scorea = [0, 0, 0, 0, 0, 0, 0];



function roll() {
  return Math.floor(Math.random() * 6 + 1); 
}


const realrollDice = function () {
    let outcome;
    let result = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) { //Loop her
        if (!arr2[i]) {
            outcome = roll(6);
            console.log(outcome);
            arr1[i] = outcome;
        }
        scorea[outcome]++;
    }


}

const rollDice = function () {
    res = [];
    res = realrollDice()
    console.log(res);
}


const dice1stay = function() {
    let dice1 = $('diceOne');

    if (arr2[0] === false) {
    this.style.border = 'dotted #000000'; 
    arr2[0] = true; }
    else if(arr2[0] === true){
    this.style.border = 'solid #000000'; 
    arr2[0] = false;
    }



    /*Sætter elementerne per index i arr2 til true hvilket
                    tager dem ud af loopet i realrolldice()*/
}

const dice2stay = function() {
    let dice2 = $('diceTwo');

    if (arr2[1] === false) {
    this.style.border = 'dotted #000000'; 
    arr2[1] = true; }
    else if(arr2[1] === true){
    this.style.border = 'solid #000000'; 
    arr2[1] = false;
    }
}

const dice3stay = function() {
    let dice3 = $('diceThree');
    if (arr2[2] === false) {
    this.style.border = 'dotted #000000'; 
    arr2[2] = true; }
    else if(arr2[2] === true){
    this.style.border = 'solid #000000'; 
    arr2[2] = false;
    }
}

const dice4stay = function() {
    let dice4 = $('diceFour');
    if (arr2[3] === false) {
    this.style.border = 'dotted #000000'; 
    arr2[3] = true; }
    else if(arr2[3] === true){
    this.style.border = ' solid #000000'; 
    arr2[3] = false;
    }
}

const dice5stay = function() {
    let dice5 = $('diceFive');
    if (arr2[4] === false) {
    this.style.border = ' dotted #000000'; 
    arr2[4] = true; }
    else if(arr2[4] === true){
    this.style.border = ' solid #000000'; 
    arr2[4] = false;
    }
}



//Kontrollerer, om alle elementer er ens
function erEns(arr1) {
    if (arr1.every((val, i ,arr)=> val ==
    arr1[0])){
        return true;
    } else {
        return false;
    }
};

//Sorterer array og tæller hvor mange terninger -1 er i en lige
function howMany(array) {
    let sorted = array.sort();
    let length = 0;
    for (var i = 0; i < sorted.length - 1; i++) {
        if(sorted[i + 1] - sorted[i] === 1){
            length += 1;
        }
    }
    return length;
};

//Beregner score for et stort tal
function largeNumber() {
    let score = 0;
    let length = howManyØ(roll);
    if (length === 4){
        score = 40;
    }
    return score;
};

//Beregner score for et små tal
function smallNumber() {
    let score = 0;
    let length = howMany(roll);
    if (lenth >= 3) {
        score = 30;
    }
    return score;
}
/*
// Beregner fullhouse */
const isCombo = (arr1) => {
    let countObj = {}
    for(let x of arr1){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
  
  //Kontrollere to ens par
  const twoPairs = arr1 => {
    let countObj = {}
    for(let x of arr1){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    //console.log(vals);
    if(vals.filter(x => x === 2).length == 2) return true;
    return false;
  }

  const gotBonus = function(){

    if (rounds = 15, ones(), twos(), threes(), fours(), fives(), sixes()) {
        score + 50;
    }

  }

const isOnes = function() {

if (arr1[0]=1) {
    score + 1;
}
else if (arr1[1]=1) {
    score + 1;
}
else if (arr1[2]=1) {
    score + 1;
}
else if (arr1[3]=1) {
    score + 1;
}
else if (arr1[4]=1) {
    score + 1;
}
else if (arr1[5]=1) {
    score + 1;
}

endRound();

}
const isTwos = function() {
}
const isThrees = function() {
}
const isFours = function() {
}
const isFives = function() {
}
const isSixes = function() {
}


const endRound = function() {
let scoreboard = $('scoreBoard');
rounds+=1;
tries=0;
arr2 = [false, false, false, false, false];
}





