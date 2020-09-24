"use strict";

var words = [
    'html',
    'css',
    'javascript',
]; //de ord, der skal gættes
var word = words[Math.floor(Math.random() * words.length) ]; //tilfældigt

var answerArray = []; //brugersvar

var lifes = 6; //forsøg

//tjekker om bogstavet er rigtigt
for (var i = 0; i < word.length; i++){
    answerArray[i] = '_'
}
var remaingLetters = word.length;

while (remaingLetters > 0 && lifes > 0 ){
    alert(answerArray.join(' '));

 var guess = prompt('Guess the letter! Click "Cancel" to exit. You have '+ lifes + ' attempts.').toLowerCase();
//indtast kun små bogstaver 
//spil loop
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert('You can only use one letter at a time!');
} else {
    for (var j = 0; j < word.length; j++){
        if (word[j] === guess){
            answerArray[j] = guess;
            remaingLetters--;
            }
        }lifes--
    }
}
//display the result after the end of the game cycle
alert(answerArray.join(' '));
if(lifes > 0){
    alert('Congratulations! You found the word - ' + word);
} else {
    alert('You lost! The word was ' + word);
}