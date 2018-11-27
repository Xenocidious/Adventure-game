var button1 = document.getElementById('b1');
var button2 = document.getElementById('b2');
var button3 = document.getElementById('b3');
var clicks1 = 1;
var clicks2 = 1;
var clicks3 = 1;

button1.onclick = button1Clicked;
button2.onclick = button2Clicked;
button3.onclick = button3Clicked;


function button1Clicked() {
    document.getElementById("b1").innerHTML = clicks1;
    clicks1 = clicks1 + 1;
    document.getElementById("b1").style.backgroundColor = "red";
    document.getElementById("b2").style.backgroundColor = "green";
    document.getElementById("b3").style.backgroundColor = "green";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("smallimg").src = "images/1.jpg";
    document.getElementById("div").className = "bg1";
}
function button2Clicked() {
    document.getElementById("b2").innerHTML = clicks2;
    clicks2 = clicks2 + 1;
    document.getElementById("b1").style.backgroundColor = "green";
    document.getElementById("b2").style.backgroundColor = "red";
    document.getElementById("b3").style.backgroundColor = "green";
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = false;
    document.getElementById("smallimg").src = "images/2.jpg";
    document.getElementById("div").className = "bg2";
}
function button3Clicked() {
    document.getElementById("b3").innerHTML = clicks3;
    clicks3 = clicks3 + 1;
    document.getElementById("b1").style.backgroundColor = "green";
    document.getElementById("b2").style.backgroundColor = "green";
    document.getElementById("b3").style.backgroundColor = "red";
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = true;
    document.getElementById("smallimg").src = "images/3.jpg";
    document.getElementById("div").className = "bg3";
}
