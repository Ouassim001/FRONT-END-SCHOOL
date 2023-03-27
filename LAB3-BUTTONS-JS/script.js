// Selecteer de drie knoppen
var greenButton = document.getElementById("green-btn");
var redButton = document.getElementById("red-btn");
var blueButton = document.getElementById("blue-btn");

// Voeg event listeners toe aan de drie knoppen
greenButton.addEventListener("click", function() {
	document.body.style.backgroundColor = "green";
});

redButton.addEventListener("click", function() {
	document.body.style.backgroundColor = "red";
});

blueButton.addEventListener("click", function() {
	document.body.style.backgroundColor = "blue";
});
