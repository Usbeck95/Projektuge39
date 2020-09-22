'use strict'

const gameloop = function() {
/* Funktionerne bliver kaldt vha EventListeners*/
realrollDice();

let dice1 =$('diceOne');
let dice2 =$('diceTwo');
let dice3 =$('diceThree');
let dice4 =$('diceFour');
let dice5 =$('diceFive');

dice1.addEventListener('click', dice1stay);
dice2.addEventListener('click', dice2stay);
dice3.addEventListener('click', dice3stay);
dice4.addEventListener('click', dice4stay);
dice5.addEventListener('click', dice5stay);

dice1.innerHTML = (arr1[0]);
dice2.innerHTML = (arr1[1]);

dice3.innerHTML = (arr1[2]);

dice4.innerHTML = (arr1[3]);

dice5.innerHTML = (arr1[4]);


}


$('rollBtn').addEventListener('click', gameloop);



