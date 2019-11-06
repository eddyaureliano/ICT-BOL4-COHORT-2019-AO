var snack = "";
var fris = 0;
var bier = 0;
var wijn = 0;
var bbal8 = 0;
var bbal16 = 0;
var totaalFris = 0;
var totaalBier = 0;
var totaalWijn = 0;
var totaalBbal8 = 0;
var totaalBbal16 = 0;
const PRIJSFRIS = 2.00;
const PRIJSBIER = 4.50;
const PRIJSWIJN = 5.50;
const PRIJSSNACK8 = 3.00;
const PRIJSSNACK16 = 4.50;

function start(){
	while (loop = true) {
		order = prompt("Welke bestelling wilt u toevoegen?\n\n Kies uit fris, bier, wijn of snack. Type 'stop' om de rekening te krijgen") .toLowerCase();
		if (order == "fris"){
			aantalFris = Number(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"));
            fris = fris + aantalFris
			if (fris == 0){
				alert("U heeft niets toegevoegd.");
			}
			else if (isNaN(fris)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.");
			}
			else {
				alert("U heeft "+ fris +" fris toegevoegd.\n\nAantal: "+ fris +"\nPrijs: €"+ (fris*PRIJSFRIS).toFixed(2) +" euro");
			}
		}
		else if (order == "bier"){
			aantalBier = Number(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"));
            bier = bier + aantalBier
			if (bier == 0){
				alert("U heeft niets toegevoegd.");
			}
			else if (isNaN(bier)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.");
			}
			else {
				alert("U heeft " + bier + " bier toegevoegd.\n\nAantal: "+ bier +"\nPrijs: €"+ (bier*PRIJSBIER).toFixed(2) +" euro");
			}
		}
		else if (order == "wijn"){
			aantalWijn = Number(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"));
            wijn = wijn + aantalWijn
			if (wijn == 0){
				alert("U heeft geen wijn toegevoegd.");
			}
			else if (isNaN(wijn)){
				alert("Bestelling mislukt, voer a.u.b. een getal in.");
			}
			else {
				alert("U heeft " + wijn + " wijn toegevoegd.\n\nAantal: "+ wijn +"\nPrijs: €"+ (wijn*PRIJSWIJN).toFixed(2) +" euro");
			}
		}


		
		else if (order == "snack"){
			snack = prompt("Hoeveel bitterballen wilt u?\n\nU kunt kiezen uit schalen van 8 of 16 bitterballen.");
			if (snack == 8){
				aantalBbal8 = Number(prompt("Hoeveel schalen van 8 bitterballen wilt u bestellen?"));
                bbal8 = bbal8 + aantalBbal8
			}
			else if (snack == 16){
				aantalBbal16 = Number(prompt("Hoeveel schalen van 16 bitterballen wilt u bestellen?"));
                bbal16 = bbal16 + aantalBbal16

			}
			else {
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
			}
		}
		else if (order == "stop") {
			loop = false
			alert("U krijgt nu de rekening te zien.")
			return
		}
		else {
			alert("Er is een fout opgetreden!\n\n U kunt alleen kiezen tussen 'fris', 'bier', 'wijn','snack' of 'stop'");
		} 
	}
}


start();

if (fris != 0) {
	totaalFris = parseInt(fris * 2)
	document.getElementById("FrisTotaal").innerHTML= "Uw bedrag voor fris is: €" + totaalFris.toFixed(2), "<br>";
}

if (bier != 0) {
	totaalBier = parseInt(bier * 2)
	document.getElementById("BierTotaal").innerHTML = "Uw bedrag voor bier is: €" + totaalBier.toFixed(2), "<br>";
}

if (wijn != 0) {
	totaalWijn = parseInt(wijn * 2)
	document.getElementById("WijnTotaal").innerHTML = "Uw bedrag voor wijn is: €" + totaalWijn.toFixed(2), "<br>";
}

if (bbal8 != 0) {
	totaalBbal8 = parseInt(bbal8 * 2)
	document.getElementById("Bbal8Totaal").innerHTML = "Uw bedrag voor schalen van 8 bitterbalen is: €" + totaalBbal8.toFixed(2), "<br>";
}

if (bbal16 != 0) {
	totaalBbal16 = parseInt(bbal16 * 2)
	document.getElementById("Bbal16Totaal").innerHTML = "Uw bedrag schalen van 16 bitterbalen is: €" + totaalBbal16.toFixed(2), "<br>";
}

var Total = fris*PRIJSFRIS+bier*PRIJSBIER+wijn*PRIJSWIJN+bbal8*PRIJSSNACK8+bbal16*PRIJSSNACK16;
document.getElementById("Rekening").innerHTML = "Dat kost dan €" + Total.toFixed(2), "<br>";
