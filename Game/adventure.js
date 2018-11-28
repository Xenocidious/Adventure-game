var b1 = document.getElementById('button1');
var b2 = document.getElementById('button2');
var b3 = document.getElementById('button3');
var item = document.getElementById('inventoryItem');
var desc = document.getElementById('description');
var title = document.getElementById('title');
var invItem = document.getElementById('inventoryItem')

b1.innerHTML = "";
b2.innerHTML = "";
b3.innerHTML = "";

start();


function start() {
    title.innerHTML = "";
    b1.style.display = "";
    b2.style.display = "none";
    b3.style.display = "none";
    item.style.display = "none";
    desc.style.display = "none";
    b1.onclick = lvl1;
    invItem.style.display = "none";
}
function lvl1() {
    document.getElementById("game-container").style.backgroundImage = "url('image/entrance.jpg')";
    title.innerHTML = "You came across the entrance of a tomb.";

    b1.style.marginTop = "0";
    b1.style.backgroundImage = "none";
    b1.style.display = "";
    b2.style.display = "";
    b3.style.display = "none";
    b1.style.width = "100px";
    b1.style.height = "40px";
    b1.innerHTML = "Go inside";
    b2.innerHTML = "Leave";
    invItem.style.display = "none";

    b1.onclick = lvl2;
    b2.onclick = lvl0;
}
function lvl0() {
    document.getElementById("game-container").style.backgroundImage = "url('image/sandstorm.jpg')";
    title.innerHTML = "There is a sandstorm, are you sure you want to leave?";

    b1.style.display = "";
    b2.style.display = "";
    b3.style.display = "none";
    title.style.width = "750px";
    b1.innerHTML = "Go inside";
    b2.innerHTML = "Leave";
    invItem.style.display = "none";

    b1.onclick = lvl2;
    b2.onclick = sanddeath;
}
function lvl2() {
    document.getElementById("game-container").style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You have entered the tomb, the doorway collapsed behind you.";

    b1.style.display = "";
    b2.style.display = "none";
    b3.style.display = "none";
    title.style.width = "870px";
    b1.innerHTML = "Continue"
    document.getElementById("inventoryItem").src = "images/crowbar.jpg";
    invItem.style.display = "";

    b1.onclick = lvl3;
}
function lvl3() {
    document.getElementById("game-container").style.backgroundImage = "url('image/leftorstraight.jpg')";
    title.innerHTML = "The path is splitting up."; 

    b1.style.display = "";
    b2.style.display = "";
    b3.style.display = "";
    b1.innerHTML = "Go left";
    b2.innerHTML = "Go back";
    b3.innerHTML = "Go straight";
    invItem.style.display = "none";

    b1.onclick = lvl4;
    b2.onclick = lvl2;
    b3.onclick = lvl5;
}
function lvl4() {
    document.getElementById("game-container").style.backgroundImage = "url('image/coffin.jpg')";
    title.innerHTML = "You found a sarcophagus.";

    b1.style.display = "";
    b2.style.display = "none";
    b3.style.display = "none";
    b1.innerHTML = "Go back";
    b1.onclick = lvl3;
}
function sanddeath() {
    document.getElementById("game-container").style.backgroundImage = "url('image/sanddeath.jpg')";
    title.innerHTML = "The sandstorm killed you, refresh the page to try again.";

    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    title.style.width = "775px";
    invItem.style.display = "none";
}