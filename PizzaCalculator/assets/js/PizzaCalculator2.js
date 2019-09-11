//Eddy Markhorst Pizza Calculator

const PizzaS = 4.50;
const PizzaM = 5.50;
const PizzaL = 6.50;

var amountPizzaS = prompt("Hoeveel Small Pizza's Wilt U? €4,50"); // Voer antwoord in
document.write(amountPizzaS+" Pizza Small Prijs: €" +(amountPizzaS*PizzaS).toFixed(2)+ '<br/>'); // Laat de tekst zien

var amountPizzaM = prompt("Hoeveel Medium Pizza's Wilt U? €5,50");
document.write(amountPizzaM+" Pizza Medium Prijs: €" +(amountPizzaM*PizzaM).toFixed(2)+ '<br/>');

var amountPizzaL = prompt("Hoeveel Large Pizza's Wilt U? €6,50");
document.write(amountPizzaL+" Pizza Large Prijs: €" +(amountPizzaL*PizzaL).toFixed(2)+ '<br><br>')

var Total = amountPizzaS*PizzaS+amountPizzaM*PizzaM+amountPizzaL*PizzaL;
document.write ("Totaal: €"+Total.toFixed(2));