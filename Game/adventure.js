var container = document.getElementById('game-container');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var desc = document.getElementById('description');
var title = document.getElementById('title');
var invItem = document.getElementById('inventoryItem');
var inventoryItem ={"crowbar":false,"explosives":false,"scroll":false,"key":false,"statue":false};

button1.innerHTML = "";
button2.innerHTML = "";
button3.innerHTML = "";
button4.innerHTML = "";

title.innerHTML = "";
desc.style.display = "none";
button1.style.transition = "0.3s";

start();
function start() {
    container.style.backgroundImage = "url('image/startscreen.jpg')";
    title.innerHTML = "";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    invItem.style.display = "none";
    button1.style.backgroundImage = "url('image/start.png')";
    button1.style.backgroundSize = "225px 75px"
    button1.style.width = "225px";
    button1.style.height = "75px";
    button1.style.marginTop = "400px";
    button1.style.borderRadius = "50px";

    button1.onclick = lvl1;
}
function lvl1() {
    container.style.backgroundImage = "url('image/entrance.jpg')";
    title.innerHTML = "You came across the entrance of a tomb.";

    title.style.width = "565px";
    button1.style.marginTop = "0";
    button1.style.backgroundImage = "none";
    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.style.width = "100px";
    button1.style.height = "40px";
    button1.innerHTML = "Go inside";
    button2.innerHTML = "Leave";
    invItem.style.display = "none";
    button1.style.borderRadius = "50px";

    button1.onclick = lvl2;
    button2.onclick = lvl0;
}
function lvl0() {
    container.style.backgroundImage = "url('image/sandstorm.jpg')";
    title.innerHTML = "There is a sandstorm, are you sure you want to leave?";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "750px";
    button1.innerHTML = "Go inside";
    button2.innerHTML = "Leave";
    invItem.style.display = "none";

    button1.onclick = lvl2;
    button2.onclick = sanddeath;
}
function lvl2() {
    container.style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You have entered the tomb, the doorway collapsed behind you.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "870px";
    button1.innerHTML = "Continue"
    invItem.src = "image/halfcrowbar.png";
    invItem.style.display = "";
    invItem.style.height = "216px";
    invItem.style.width = "49px";
    invItem.style.marginTop = "291px";
    invItem.style.marginLeft = "595px";

    button1.onclick = lvl3;
    invItem.onclick = functCrowbar;     
}
function lvl2v2() {
    container.style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You are back at the collapsed doorway.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "560px";
    button1.innerHTML = "Continue";
    invItem.src = "image/halfcrowbar.png";
    invItem.style.display = "";
    invItem.style.height = "216px";
    invItem.style.width = "49px";
    invItem.style.marginTop = "291px";  
    invItem.style.marginLeft = "595px";

    invItem.onclick = functCrowbar;

    if (inventoryItem['scroll'] == true) {
        button1.onclick = lvl3noItem;
    }
    else if (inventoryItem['scroll'] == false) {
        button1.onclick = lvl3;
    }
}
function lvl2v2noItem() {
    container.style.backgroundImage = "url('image/doorway.jpg')";
    title.innerHTML = "You are back at the collapsed doorway.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "560px";
    button1.innerHTML = "Continue";
    invItem.style.display = "none";


    if (inventoryItem['explosives'] == true) {
        button2.onclick = explosiondeath;
        button2.style.display = "";
        button2.innerHTML = "Use explosives";
        button2.style.width = "125px";
    }
    if (inventoryItem['scroll'] == true) {
        button1.onclick = lvl3noItem;
    }
    else if (inventoryItem['scroll'] == false) {
        button1.onclick = lvl3;
    }
}
function lvl3() {
    container.style.backgroundImage = "url('image/leftorstraight.jpg')";
    title.innerHTML = "The path is splitting up."; 

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "";
    button4.style.display = "none";
    button1.innerHTML = "Go left";
    button2.innerHTML = "Go back";
    button3.innerHTML = "Go straight";
    invItem.src = "image/scroll3d.png";
    invItem.style.display = "";
    invItem.style.height = "80px";
    invItem.style.width = "60px";
    title.style.width = "350px";
    button2.style.width = "100px";
    button3.style.width = "100px";
    invItem.style.marginTop = "130px";
    invItem.style.marginLeft = "460px";

    button1.onclick = lvl4;
    button3.onclick = lvl5;
    invItem.onclick = functScroll;

    if (inventoryItem['crowbar'] == true) {
        button2.onclick = lvl2v2noItem;
    }
    else if (inventoryItem['crowbar'] == false) {
        button2.onclick = lvl2v2;
    }
}
function lvl3noItem() {
    container.style.backgroundImage = "url('image/leftorstraight.jpg')";
    title.innerHTML = "The path is splitting up."; 

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "";
    button4.style.display = "none";
    button1.innerHTML = "Go left";
    button2.innerHTML = "Go back";
    button3.innerHTML = "Go straight";
    invItem.style.display = "none";
    title.style.width = "350px";
    button2.style.width = "100px";
    button3.style.width = "100px";

    button1.onclick = lvl4;
    button3.onclick = lvl5;

    if (inventoryItem['crowbar'] == true) {
        button2.onclick = lvl2v2noItem;
    }
    else if (inventoryItem['crowbar'] == false) {
        button2.onclick = lvl2v2;
    }
}
function lvl4() {
    container.style.backgroundImage = "url('image/coffin.jpg')";
    title.innerHTML = "You found a sarcophagus.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = "Go back";
    title.style.width = "370px";
    invItem.style.display = "none";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "0px";
    invItem.style.marginLeft = "0px";

    if (inventoryItem['crowbar'] == true) {
        if (inventoryItem['explosives'] == false) {
            button2.onclick = lvl4v2;
            button2.style.display = "";
            button2.innerHTML = "Open it";
        }
    }
    if (inventoryItem['scroll'] == true) {
        button1.onclick = lvl3noItem;
    }
    else if (inventoryItem['scroll'] == false) {
        button1.onclick = lvl3;
    }
}
function lvl4v2() {
    container.style.backgroundImage = "url('image/coffin.jpg')";
    title.innerHTML = "You used the crowbar to open the sarcophagus," + "<br>" + "You found a bunch of explosives in there.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = "Go back";
    title.style.width = "660px";
    invItem.src = "image/explosives.png";
    invItem.style.display = "";
    invItem.style.marginTop = "281px";  
    invItem.style.marginLeft = "565px";
    invItem.style.height = "181px";
    invItem.style.width = "234px";

    button1.onclick = lvl3;
    invItem.onclick = functExplosives;

    if (inventoryItem['scroll'] == true) {
        button1.onclick = lvl3noItem;
    }
    else if (inventoryItem['scroll'] == false) {
        button1.onclick = lvl3;
    }
}
function lvl5() {
    container.style.backgroundImage = "url('image/corridor.jpg')";
    title.innerHTML = "You entered a corridor.";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "";
    button4.style.display = "";
    title.style.width = "340px";
    button1.innerHTML = "Run";
    button2.innerHTML = "Walk";
    button3.innerHTML = "Go back";
    button4.innerHTML = "Hug the wall";
    invItem.style.display = "none";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "0px";
    invItem.style.marginLeft = "0px";

    button1.onclick = spikedeath;
    button2.onclick = spikedeath;
    button4.onclick = lvl6;

    if (inventoryItem['scroll'] == true) {
        button3.onclick = lvl3noItem;
    }
    else if (inventoryItem['scroll'] == false) {
        button3.onclick = lvl3;
    }
}
function lvl6() {
    container.style.backgroundImage = "url('image/threeways.jpg')";
    title.innerHTML = "The corridor is splitting into three paths.";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "";
    button4.style.display = "";
    title.style.width = "575px";
    button1.innerHTML = "Go left";
    button2.innerHTML = "Go straight";
    button3.innerHTML = "Go back";
    button4.innerHTML = "Go right";
    invItem.style.display = "none";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "0px";
    invItem.style.marginLeft = "0px";
    button2.style.width = "100px";
    button3.style.width = "100px";

    button1.onclick = snakedeath;
    button2.onclick = lvl7;
    button3.onclick = lvl5;
    button4.onclick = puzzle;
}
function lvl7() {
    container.style.backgroundImage = "url('image/deadend.jpg')";
    title.innerHTML = "You walked into a dead end.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "400px";
    button1.innerHTML = "Go back";
    button2.innerHTML = "Use explosives";
    button3.innerHTML = "";
    button4.innerHTML = "";
    invItem.src = "image/key.png";
    invItem.style.display = "";
    invItem.style.width = "12px"
    invItem.style.height = "6px"
    invItem.style.marginTop = "300px";
    invItem.style.marginRight = "70px";
    invItem.style.marginLeft = "0px";

    button1.onclick = lvl6;
    invItem.onclick = functKey;

    if (inventoryItem['explosives'] == true) {
        button2.onclick = explosiondeath;
        button2.style.display = "";
        button2.innerHTML = "Use explosives";
        button2.style.width = "125px";
    }
}
function puzzle() {
    container.style.backgroundImage = "url('image/puzzle.jpg')";
    title.innerHTML = "You have found a puzzle.";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "370px";
    button1.innerHTML = "Try to solve";
    button2.innerHTML = "Go back";
    button3.innerHTML = "Use explosives";
    button4.innerHTML = "";
    invItem.style.display = "none";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "0px";
    invItem.style.marginLeft = "0px";

    button2.onclick = lvl6;

    if (inventoryItem['scroll'] == true) {
        button1.onclick = puzzle2;
    }
    else if (inventoryItem['scroll'] == false) {
        button1.onclick = puzzlespikedeath;
    }
    if (inventoryItem['explosives'] == true) {
        button3.onclick = explosiondeath;
        button3.style.display = "";
        button3.innerHTML = "Use explosives";
        button3.style.width = "125px";
    }
}
function puzzle2() {
    container.style.backgroundImage = "url('image/puzzle.jpg')";
    title.innerHTML = "You need some kind of key.";

    button1.style.display = "none";
    button2.style.display = "";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "390px";
    button1.innerHTML = "";
    button2.innerHTML = "Go back";
    button3.innerHTML = "";
    button4.innerHTML = "";
    invItem.style.display = "none";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "0px";
    invItem.style.marginLeft = "0px";

    button2.onclick = lvl6;

    if (inventoryItem['key'] == true) {
        button1.onclick = treasure;
        button1.style.display = "";
        button1.innerHTML = "Use key";
    }
    if (inventoryItem['explosives'] == true) {
        button3.onclick = explosiondeath;
        button3.style.display = "";
        button3.innerHTML = "Use explosives";
        button3.style.width = "125px";
    }
}
function treasure() {
    container.style.backgroundImage = "url('image/treasureroom.jpg')";
    title.innerHTML = "You found a treasure room.";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "575px";
    button1.innerHTML = "Continue";
    button2.innerHTML = "Go back";
    button3.innerHTML = "";
    button4.innerHTML = "";
    invItem.src = "image/statue.png";
    invItem.style.display = "";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "650px";
    invItem.style.marginLeft = "0px";
    invItem.style.width = "100px";
    invItem.style.height = "280px";
    button2.style.width = "100px";
    button3.style.width = "100px";

    button1.onclick = escape1;
    button2.onclick = lvl6;

    if (inventoryItem['explosives'] == true) {
        invItem.onclick = carryExplosives;
    }
    else if (inventoryItem['explosives'] == false) {
        invItem.onclick = statue;
    }
}
function escape1() {
    container.style.backgroundImage = "url('image/treasureroom.jpg')";
    title.innerHTML = "You won.";

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "none";
    button4.style.display = "none";
    title.style.width = "575px";
    button1.innerHTML = "Continue";
    button2.innerHTML = "Go back";
    button3.innerHTML = "";
    button4.innerHTML = "";
    invItem.style.display = "none";
    invItem.style.marginTop = "0px";
    invItem.style.marginRight = "0px";
    invItem.style.marginLeft = "0px";

    button1.onclick = snakedeath;
    button2.onclick = lvl6;
}
function sanddeath() {
    container.style.backgroundImage = "url('image/sanddeath.jpg')";
    title.innerHTML = "The sandstorm killed you.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = ""
    title.style.width = "380px";
    invItem.style.display = "none";
    button1.style.backgroundImage = "url('image/retry.png')";
    button1.style.backgroundSize = "100px 100px"
    button1.style.width = "100px";
    button1.style.height = "100px";
    button1.style.borderRadius = "50px";

    button1.onclick = start;

    inventoryItem["crowbar"]=false;
    inventoryItem["explosives"]=false;
    inventoryItem["scroll"]=false;
    inventoryItem["key"]=false;
    inventoryItem["statue"]=false;
}
function explosiondeath() {
    container.style.backgroundImage = "url('image/explode.jpg')";
    title.innerHTML = "You blew yourself up.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = ""
    title.style.width = "320px";
    invItem.style.display = "none";
    button1.style.backgroundImage = "url('image/retry.png')";
    button1.style.backgroundSize = "100px 100px"
    button1.style.width = "100px";
    button1.style.height = "100px";
    button1.style.borderRadius = "50px";

    button1.onclick = start;

    inventoryItem["crowbar"]=false;
    inventoryItem["explosives"]=false;
    inventoryItem["scroll"]=false;
    inventoryItem["key"]=false;
    inventoryItem["statue"]=false;
}
function spikedeath() {
    container.style.backgroundImage = "url('image/spikepit.jpg')";
    title.innerHTML = "You fell into a spike pit.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = ""
    title.style.width = "350px";
    invItem.style.display = "none";
    button1.style.backgroundImage = "url('image/retry.png')";
    button1.style.backgroundSize = "100px 100px"
    button1.style.width = "100px";
    button1.style.height = "100px";
    button1.style.borderRadius = "50px";

    button1.onclick = start;

    inventoryItem["crowbar"]=false;
    inventoryItem["explosives"]=false;
    inventoryItem["scroll"]=false;
    inventoryItem["key"]=false;
    inventoryItem["statue"]=false;
}
function snakedeath() {
    container.style.backgroundImage = "url('image/snakepit.jpg')";
    title.innerHTML = "You fell into a snake pit.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = ""
    title.style.width = "350px";
    invItem.style.display = "none";
    button1.style.backgroundImage = "url('image/retry.png')";
    button1.style.backgroundSize = "100px 100px"
    button1.style.width = "100px";
    button1.style.height = "100px";
    button1.style.borderRadius = "50px";

    button1.onclick = start;

    inventoryItem["crowbar"]=false;
    inventoryItem["explosives"]=false;
    inventoryItem["scroll"]=false;
    inventoryItem["key"]=false;
    inventoryItem["statue"]=false;
}
function puzzlespikedeath() {
    container.style.backgroundImage = "url('image/spikepit.jpg')";
    title.innerHTML = "The floor opened up and you fell into a spike pit.";

    button1.style.display = "";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.innerHTML = ""
    title.style.width = "685px";
    invItem.style.display = "none";
    button1.style.backgroundImage = "url('image/retry.png')";
    button1.style.backgroundSize = "100px 100px"
    button1.style.width = "100px";
    button1.style.height = "100px";
    button1.style.borderRadius = "50px";

    button1.onclick = start;

    inventoryItem["crowbar"]=false;
    inventoryItem["explosives"]=false;
    inventoryItem["scroll"]=false;
    inventoryItem["key"]=false;
    inventoryItem["statue"]=false;
}
function functCrowbar() {
    inventoryItem["crowbar"]=true;
    invItem.style.display = "none";
}
function functExplosives() {
    inventoryItem["explosives"]=true;
    invItem.style.display = "none";
}
function functScroll() {
    inventoryItem["scroll"]=true;
    invItem.style.display = "none";
}
function functKey() {
    inventoryItem["key"]=true;
    invItem.style.display = "none";
}
function functStatue() {
    inventoryItem["statue"]=true;
    invItem.style.display = "none";
}
function carryExplosives() {
    alert("You are already carrying explosives.")
}
function carryStatue() {
    alert("You are already carrying a statue.")
}