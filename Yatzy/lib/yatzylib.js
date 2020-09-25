'use strict';

const $ = function(foo) {

    return document.getElementById(foo);
}

let arr2 = [false, false, false, false, false];
let arr1 = [];
let scorea = [0, 0, 0, 0, 0, 0, 0];
let scorecard = [];
let res;
let tries = 0;
let rounds = 0;
let pairscore = 0;



function roll() {
  return Math.floor(Math.random() * 6 + 1); 
}


const realrollDice = function () {
    let outcome;
    scorea = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) { //Loop her
        outcome = roll(6);
        if (!arr2[i]) {         /*! er en logisk operator der betyder "not" dvs "do stuff" 
                                    når elementet i arr2 er sat til false*/
            arr1[i] = outcome;
            scorea[outcome]++;  /*udfaldet af terninge kastene blive skrevet ind i vores score array 
                                    på den plads som er givet af outcome*/
        } else {
            scorea[arr1[i]]++; /*index af arr1 bruges som index i scorea dette skriver 
                                    score ind i score array når de er låst*/
        }
        
        scorea[0] += arr1[i];  /*tæller de samlede point sammen på plads 0 i score array*/
        if (scorea[i] >= 2) {
            pairscore = scorea[i]*arr1[i];
            }

    }


    console.log(scorea);
}

const rollDice = function () {
    res = [];
    res = realrollDice()
    console.log(res);
}


const dice1stay = function() {
    let dice1 = $('diceOne');

    if (arr2[0] === false) {            /*Denne if/else konstruktion fungere basically som en toggle af og til, 
                                            hvor arr2 true eller false er afgørende for hvad der skal ske*/
    this.style.border = 'dotted #000000'; 
    arr2[0] = true; }
    else if(arr2[0] === true){          /*Sætter elementerne per index i arr2 til true hvilket
                                            tager dem ud af loopet i realrolldice()*/
    this.style.border = 'solid #000000'; 
    arr2[0] = false;
    }

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




  const gotBonus = function(){

    if (rounds = 15, isOnes(), isTwos(), isThrees(), isFours(), isFives(), isSixes()) {
        scorecard[0] =+ 50;
    }

  }

const isOnes = function() {
endRound();                         /*endRound() bliver kørt når der trykkes på score knapperne */
scorecard[1] = scorea[1] * 1;           /* scoren fra score array blive indført på scorecard array. 
                                    Der bliver ganget med hvormange forkomster af 1 der er i array*/
$('Ones').innerHTML = (scorecard[1]);
$('btnOnes').style.visibility = "hidden"; /*score knappen skjules når scoren er indført,
                                    jeg ville nok gøre knappen genenmsigtig og inaktiv en anden gan mht UX*/
return true;

}

const isTwos = function() {
endRound();
scorecard[2] = scorea[2] * 2;
$('Twos').innerHTML = (scorecard[2]);
$('btnTwos').style.visibility = "hidden";
return true;

}
const isThrees = function() {
endRound();
scorecard[3] = scorea[3] * 3;
$('Threes').innerHTML = (scorecard[3]);
$('btnThrees').style.visibility = "hidden";
return true;

}
const isFours = function() {
    endRound();
scorecard[4] = scorea[4] * 4;
$('Fours').innerHTML = (scorecard[4]);
$('btnFours').style.visibility = "hidden";
return true;

}
const isFives = function() {
    endRound();
scorecard[5] = scorea[5] * 5;
$('Fives').innerHTML = (scorecard[5]);
$('btnFives').style.visibility = "hidden";
return true;

}
const isSixes = function() {
    endRound();
scorecard[6] = scorea[6] * 6;
$('Sixes').innerHTML = (scorecard[6]);
$('btnSixes').style.visibility = "hidden";
return true;

}
const scorePair = function () {

endRound();
scorecard[7] = isPair(); 
$('APair').innerHTML = (scorecard[7]);
$('btnAPair').style.visibility = "hidden";

}
const isPair =function() {



}


const endRound = function() {
let scoreboard = $('scoreBoard');
rounds+=1; 
tries=0;    /* rounds og tries henviser til variablerne i gameloop funktionen i 
                executable.js som holder styr på hvormange forsøg og runder der er brugt*/
arr2 = [false, false, false, false, false];
            /*arr2 er det array i roll*/
$('diceOne').style.border = ' solid #000000';
$('diceTwo').style.border = ' solid #000000';
$('diceThree').style.border = ' solid #000000';
$('diceFour').style.border = ' solid #000000';
$('diceFive').style.border = ' solid #000000';


}

function createCookie(name, value, days) {
    let expires;
    let samesite = "; sameSite=lax";            // nml
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + samesite + "; path=/"; // nml
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}











/**
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

 Beregner fullhouse 
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
*/