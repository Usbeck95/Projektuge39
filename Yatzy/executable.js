'use strict'




const gameloop = function() {
/* Funktionerne bliver kaldt vha EventListeners*/
if (rounds < 15) {

	if (tries < 5) {
		realrollDice();

		let dice1 =$('diceOne');
		let dice2 =$('diceTwo');
		let dice3 =$('diceThree');
		let dice4 =$('diceFour');
		let dice5 =$('diceFive');

		/* Funktionerne bliver kaldt vha EventListeners*/
		dice1.addEventListener('click', dice1stay);
		dice2.addEventListener('click', dice2stay);
		dice3.addEventListener('click', dice3stay);
		dice4.addEventListener('click', dice4stay);
		dice5.addEventListener('click', dice5stay);
		/**
		let dice = document.getElementsByClassName("dice");
		dice.innerHTML = '<span style=""></span>';
		**/
		/*skriver kastene ud fra arr1 til den pågældende terning*/
		dice1.innerHTML = (arr1[0]);
		dice2.innerHTML = (arr1[1]);
		dice3.innerHTML = (arr1[2]);
		dice4.innerHTML = (arr1[3]);
		dice5.innerHTML = (arr1[4]);
		tries +=1;
		let rollsleft =$('rollsLeft');
		rollsleft.innerHTML = (tries);
        
         //Beregner upper scores.
            var upResults = [arr1[0] + arr1[1]+ arr1[2] + arr1[3] + arr1[4]];
            var upSum = 0;
        
            for(var i = 0; i < upResults.length; i++){ //Loop for at gennemgå de rullede terningers sum.
            upSum += upResults[i]
            }
            console.log('Your sum is ' + upSum); //Skriver upper scores i console.

        
		}
	else {
		let writetoscore = $('writeToScore');
		writetoscore.addEventListener('click', endRound);
		}

}
else {
	console.log('gameover')
}
}


const restartGame = function () {

    location.reload();
}



$('restartBtn').addEventListener('click', restartGame);

$('rollBtn').addEventListener('click', gameloop);



