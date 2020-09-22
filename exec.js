'use strict'
const $ = function(foo) {

	return document.getElementById(foo);
}

const choosegame = function() {
	let btn1 = $('button1');
	let btn2 = $('button2');
	let btn3 = $('button3');
	btn1.addEventlistener('click', function(yatzy));
	btn2.addEventlistener('click', function(hangman));
	btn3.addEventlistener('click', function(guess));

}