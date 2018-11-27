/*Opdracht 1*/ /*
var weekdagen = ["maandag"," dinsdag"," woensdag"," donderdag"," vrijdag"," zaterdag"," zondag."];
var werkdagen = ["maandag"," dinsdag"," woensdag"," donderdag"," vrijdag."];
var weekenddagen = ["zaterdag"," zondag."];
var oweekdagen = ["zondag"," zaterdag"," vrijdag"," donderdag"," woensdag"," dinsdag"," maandag."];;
var owerkdagen = ["vrijdag"," donderdag"," woensdag"," dinsdag"," maandag."];
var oweekenddagen = ["zondag"," zaterdag."]; */



/*Opdracht 2*/ /*
var aantal = 0;
var naam = ["Max","Hans","Kees","Henk","Pedro","Piet","Klaas","Jan","Willem","Guus","Peter"];
aantal = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3");
aantal = aantal -1
document.write("<h2>De ingevoerde namen in de array zijn:</h2>");
for (i = 0; i <= aantal; i++) {
    document.write(naam[i] + "<br>");
}

document.write("<h2>De ingevoerde namen in de array in omgekeerde volgorde zijn:</h2>")
for(i = aantal; 0 <= i; i--){
    document.write(naam[i] + "<br>");
}                */



/*Opdracht 3*/ /*
var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];
var uitkomst = 0;

function optellen(arrayEen, arrayTwee){
    for(i = 0; i < 10; i++) {
        uitkomst = arrayEen[i]+arrayTwee[i];
        document.write(arrayEen[i] + " + " + arrayTwee[i] + " = " + uitkomst + "<br>");
    }
}
function aftrekken(arrayTwee, arrayEen){
    for(i = 0; i < 10; i++) {
        uitkomst = arrayTwee[i]-arrayEen[i];
        document.write(arrayTwee[i] + " - " + arrayEen[i] + " = " + uitkomst + "<br>");
    }
}
function vermenigvuldigen(arrayEen, arrayTwee){
    for(i = 0; i < 10; i++) {
        uitkomst = arrayEen[i]*arrayTwee[i];
        document.write(arrayEen[i] + " * " + arrayTwee[i] + " = " + uitkomst + "<br>");
    }
}
function delen(arrayTwee, arrayEen){
    for(i = 0; i < 10; i++) {
        uitkomst = arrayTwee[i]/arrayEen[i];
        document.write(arrayTwee[i] + " / " + arrayEen[i] + " = " + uitkomst + "<br>");
    }
} */




/*Opdracht 4*/ /*
var array = ["1","2","3","4","5","6","7","8","9","10"];

function twee(array){
    for (i = 0; i < 10; i++) {
        uitkomst = array[i] * 2;
        document.write(array[i] + " * " + "2" + " = " + uitkomst + "<br>");
    }
}
function vier(array){
    for (i = 0; i < 10; i++) {
        uitkomst = array[i] * 4;
        document.write(array[i] + " * " + "4" + " = " + uitkomst + "<br>");
    }
}
function zes(array){
    for (i = 0; i < 10; i++) {
        uitkomst = array[i] * 6;
        document.write(array[i] + " * " + "6" + " = " + uitkomst + "<br>");
    }
}
function acht(array){
    for (i = 0; i < 10; i++) {
        uitkomst = array[i] * 8;
        document.write(array[i] + " * " + "8" + " = " + uitkomst + "<br>");
    }
} */


/*Opdracht 5*/ /*
var array = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
var loop = 0;
var input = prompt("Voer een getal in:");

function piramide(){
    document.write("Array : " + array)
    for (i = -1; i <= input; i++) {
        for (j = 0; j < loop; j++) {
            document.write(array[j])
        }
        loop = loop + 1;
        document.write("<br>")
    }
} */
/*Opdracht 6*/ /*
var array = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
var input = prompt("Voer een getal in:");
var loop = input;


function piramide(){
    document.write("Array : " + array + "<br>")
    for (i = -1; i < input; i++) {
        for (j = 0; j <= loop; j++) {
            document.write(array[j]);
        }
        loop = loop -1;
        document.write("<br>")
    }
} */
/*Opdracht 7*/
var array = ["bier","wijn","fris","8bb","16bb"];
var input = prompt(Welke bestelling wilt u toevoegen);

