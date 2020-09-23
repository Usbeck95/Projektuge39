'use strict'




const gameloop = function() {
/* Funktionerne bliver kaldt vha EventListeners*/
if (rounds < 15) {

	if (tries < 20) {
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





$('rollBtn').addEventListener('click', gameloop);



