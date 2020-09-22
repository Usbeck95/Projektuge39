var number = Math.floor(Math.random() * 100 + 1) //Laver et tilfældigt tal mellem 1 og 100.
var guess //Indtastet gæt via prompt fra en bruger.
var counter = 0
var maxTries = 9
var guessed = false

do {
    if (counter > maxTries) {
      alert("You have no more tries left. Refresh the page to try again.");
      
  } else {
      guess = prompt("Can you guess a number between 1 and 100 in less than 10 attempts?");
      counter++; //Tilføjer 1 til counter for hvert forsøg, der er brugt.
      if (guess > number) {
        alert("That number is too high. Try again!");
        guessed = false
      } else if (guess < number) {
        alert("That number is too low. Try again!");
        guessed = false
      } else {
        alert("Congratulations, you guessed the right number!")
        guessed = true
      } 
  }
}
while (guessed === false) //Laver et while-loop og gentager alt under do {, så længe tallet ikke er blevet gættet.