//Her er min score som variabel.
//Mine spørgsmål har svarmuligheder med names i html. Jeg har kaldt de svarmuligheder, der hører til det bestemte spørgsmål samme name. Så ved man, de hører sammen, og det er brugbart her til javascibt. De kommer i en variabel jeg kalder for valg1,2,3 osv

let score = 0;
let valg1 = document.getElementsByName("q1");
let valg2 = document.getElementsByName("q2");
let valg3 = document.getElementsByName("q3");
let valg4 = document.getElementsByName("q4");
let valg5 = document.getElementsByName("q5");
let valg6 = document.getElementsByName("q6");
let valg7 = document.getElementsByName("q7");
let valg8 = document.getElementsByName("q8");
let knap = document.getElementById("submit");



// Nedenunder vises hvad jeg har lavet for at show/hide de forskellige diver i min quiz.
// Jeg startede egentlig med kun at have en lang række med diver hvor alle blev vist. Jeg fortrød dette senere hen, da jeg begyndte at style. Jeg ville gerne alligevel have at den viste for hver div. Jeg ved ikke hvorfor, men den drillede mig lige her, og derfor er det en var istedet for let, fordi dreamweaver blev besværgelig ligepludselig

var nextq1 = document.getElementById("nextq1");

nextq1.addEventListener("click", next1);

function next1() {
	document.getElementById("question1").style.display = "none";
	document.getElementById("question2").style.display = "block";
}

var nextq2 = document.getElementById("nextq2");

nextq2.addEventListener("click", next2);

function next2() {
	document.getElementById("question2").style.display = "none";
	document.getElementById("question3").style.display = "block";
}

var nextq3 = document.getElementById("nextq3");

nextq3.addEventListener("click", next3);

function next3() {
	document.getElementById("question3").style.display = "none";
	document.getElementById("question4").style.display = "block";
}

var nextq4 = document.getElementById("nextq4");

nextq4.addEventListener("click", next4);

function next4() {
	document.getElementById("question4").style.display = "none";
	document.getElementById("question5").style.display = "block";
}

var nextq5 = document.getElementById("nextq5");

nextq5.addEventListener("click", next5);

function next5() {
	document.getElementById("question5").style.display = "none";
	document.getElementById("question6").style.display = "block";
}

var nextq6 = document.getElementById("nextq6");

nextq6.addEventListener("click", next6);

function next6() {
	document.getElementById("question6").style.display = "none";
	document.getElementById("question7").style.display = "block";
}

var nextq7 = document.getElementById("nextq7");

nextq7.addEventListener("click", next7);

function next7() {
	document.getElementById("question7").style.display = "none";
	document.getElementById("question8").style.display = "block";
	document.getElementById("submit").style.display = "block";
	document.getElementById("nextq8").style.display = "none";
}

//Foroven og forneden har jeg valgt at sige den skal hide eller showe mine forskellige buttons alt efter hvad, der er relevant for brugeren. Jeg har ikke behov for en resultat knap, når man allerede har fået resultatet.

knap.addEventListener("click", function() {
	document.getElementById("submit").style.display = "none";
	console.log("clicked");
	//logger for at se om det virker, inden at jeg går videre.
	console.log(valg1);
	// i bruger man til at tælle med. Så definerer man længden til at svare til mængden af elementer med name q1. Man skriver i som 0 til at starte med, da quizen selvfølgelig er på 0 i scoresystemet inden man starter. 
	for (var i = 0, length = valg1.length; i < length; i++) {
		if( valg1[i].checked) {
			console.log(valg1[i]);
			// jeg bruger parseInt til at få den til at regne ud, at values ikke skal være string. Det er de nemlig som default. Jeg vil gerne have det til numre, så den kan regne det rigtigt ud i scoren. Ellers lagde den bare pointen til hinanden som var det bogstaver. så 4+4endte med at give 44.
			score += parseInt(valg1[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg2.length; i < length; i++) {
		if( valg2[i].checked) {
			console.log(valg2[i]);
			score += parseInt(valg2[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg3.length; i < length; i++) {
		if( valg3[i].checked) {
			console.log(valg3[i]);
			score += parseInt(valg3[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg4.length; i < length; i++) {
		if( valg4[i].checked) {
			console.log(valg4[i]);
			score += parseInt(valg4[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg5.length; i < length; i++) {
		if( valg5[i].checked) {
			console.log(valg5[i]);
			score += parseInt(valg5[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg6.length; i < length; i++) {
		if( valg6[i].checked) {
			console.log(valg6[i]);
			score += parseInt(valg6[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg7.length; i < length; i++) {
		if( valg7[i].checked) {
			console.log(valg7[i]);
			score += parseInt(valg7[i].value);
			console.log(score);
		}	
	}
	
	for (var i = 0, length = valg8.length; i < length; i++) {
		if( valg8[i].checked) {
			console.log(valg8[i]);
			score += parseInt(valg8[i].value);
			console.log(score);
		}	
	}

//Her får den at vide, hvilke outputs, den skal komme med, når den har lagt scoren sammen. De siger meget sig selv. Mindre end eller lig med 8 i ens score og du er en fartbølle osv. Den får også lige at vide, at den skal skjule forige div med spørgsmål.
	
	if (score <= 8) {
		document.getElementById("Fartbøllen").style.display = "block";
		document.getElementById("question8").style.display = "none";
}  else if (score <= 16) {
  		document.getElementById("Bedstefar").style.display = "block";
		document.getElementById("question8").style.display = "none";
} else if (score <= 24) {
  		document.getElementById("Den lovlydige").style.display = "block";
		document.getElementById("question8").style.display = "none";
} else {
		document.getElementById("Den hidsige").style.display = "block";
		document.getElementById("question8").style.display = "none";
}
});



 