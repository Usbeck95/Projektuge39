'use strict';


function rollDie() {
  return Math.floor(Math.random() * 6); //Ruller terningerne. 6-tallet bestemer antal sider på terningen.
}

var results = []; //Array med resultater, i dette tilfælde er den tom pga. random resultater.

for (var i = 0; i < 5; i++) { //Loop her
  var result = rollDie();
  results.push(result + 1); //Lægger +1 til resultatet for at undgå at rulle 0'ere.
}

console.log(results);  //Viser resultatet af rullene i console
document.write(results); //Viser resultatet af rullene på siden.


//Beregner og viser summen af terningerullene.
//Kilde: https://www.quora.com/How-do-I-sum-the-numbers-in-my-array-in-JavaScript
var sum = 0;

for(var i = 0; i < results.length; i++){ //Loop for at gennemgå de rullede terningers sum.

sum += results[i]
}

console.log('Your sum is ' + sum);
document.write('<br> Your sum is: ' + sum);