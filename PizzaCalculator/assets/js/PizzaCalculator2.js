//Eddy Markhorst Pizza Calculator

const PIZZA_SMALL = 4.50;
const PIZZA_MEDIUM = 5.50;
const PIZZA_LARGE = 6.50;

var amountPizzaS = prompt("Hoeveel Small Pizza's Wilt U? €4,50"); // Voer antwoord in
document.write(amountPizzaS+" Pizza Small Prijs: €" +(amountPizzaS*PIZZA_SMALL).toFixed(2)+ '<br/>'); // Laat de tekst zien

var amountPizzaM = prompt("Hoeveel Medium Pizza's Wilt U? €5,50");
document.write(amountPizzaM+" Pizza Medium Prijs: €" +(amountPizzaM*PIZZA_MEDIUM).toFixed(2)+ '<br/>');

var amountPizzaL = prompt("Hoeveel Large Pizza's Wilt U? €6,50");
document.write(amountPizzaL+" Pizza Large Prijs: €" +(amountPizzaL*PIZZA_LARGE).toFixed(2)+ '<br><br>')

var Total = amountPizzaS*PIZZA_SMALL+amountPizzaM*PIZZA_MEDIUM+amountPizzaL*PIZZA_LARGE;
document.write ("Totaal: €"+Total.toFixed(2));