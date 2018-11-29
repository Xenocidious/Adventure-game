var buttom1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var item = document.getElementById('inventoryItem');
var desc = document.getElementById('description');
var title = document.getElementById('title');
var invItem = document.getElementById('inventoryItem')
var inventory ={"crowbar":false,"lighter":false,"explosives":false}

button1.innerHTML = "";
button2.innerHTML = "";
button3.innerHTML = "";

start();

function crowbar() {
    inventory ={"crowbar":true}
    invItem.style.display = "none";
}
function start() {
    title.innerHTML = "";
    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    item.style.display = "none";
    desc.style.display = "none";
    button1.onclick = lvl1;
    invItem.style.display = "none";
}
function lvl1() {
    document.getElementById("game-container").style.backgroundImage = "url('image/entrance.jpg')";
    title.innerHTML = "You came across the entrance of a tomb.";

    button1.style.marginTop = "0";
    button1.style.backgroundImage = "none";
    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    button1.style.width = "100px";
    button1.style.height = "40px";
    button1.innerHTML = "Go inside";
    button2.innerHTML = "Leave";
    invItem.style.display = "none";

    button1.onclick = lvl2;
    button2.onclick = lvl0;
}
function lvl0() {
    document.getElementById("game-container").style.backgroundImage = "url('image/sandstorm.jpg')";
    title.innerHTML = "There is a sandstorm, are you sure you want to leave?";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    title.style.width = "750px";
    button1.innerHTML = "Go inside";
    button2.innerHTML = "Leave";
    invItem.style.display = "none";

    button1.onclick = lvl2;
    button2.onclick = sanddeath;
}
function lvl2() {
    document.getElementById("game-container").style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You have entered the tomb, the doorway collapsed behind you.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.width = "870px";
    button1.innerHTML = "Continue"
    document.getElementById("inventoryItem").src = "image/crowbar.png";
    invItem.style.display = "";

    button1.onclick = lvl3;
    invItem.onclick = crowbar;     
}
function lvl2v2() {
    document.getElementById("game-container").style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You are back at the collapsed doorway.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.width = "560px";
    button1.innerHTML = "Continue"
    inventoryItem.src = "image/crowbar.png";
    invItem.style.display = "";

    button1.onclick = lvl3;
}
function lvl2v2noItem() {
    document.getElementById("game-container").style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You are back at the collapsed doorway.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.width = "560px";
    button1.innerHTML = "Continue";
    invItem.style.display = "none";

    button1.onclick = lvl3; 
}
function lvl3() {
    document.getElementById("game-container").style.backgroundImage = "url('image/leftorstraight.jpg')";
    title.innerHTML = "The path is splitting up."; 

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "";
    button1.innerHTML = "Go left";
    button2.innerHTML = "Go back";
    button3.innerHTML = "Go straight";
    invItem.style.display = "none";
    title.style.width = "350px";

    button1.onclick = lvl4;
    button3.onclick = lvl5;
    if (crowbar = true) {
        button2.onclick = lvl2v2noItem;
    }
    else if (crowbar = false) {
        button2.onclick = lvl2v2;
    }
}
function lvl4() {
    document.getElementById("game-container").style.backgroundImage = "url('image/coffin.jpg')";
    title.innerHTML = "You found a sarcophagus.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button1.innerHTML = "Go back";
    title.style.width = "370px";

    button1.onclick = lvl3;
}
function lvl5() {

}
function sanddeath() {
    document.getElementById("game-container").style.backgroundImage = "url('image/sanddeath.jpg')";
    title.innerHTML = "The sandstorm killed you, refresh the page to try again.";

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.width = "775px";
    invItem.style.display = "none";
}