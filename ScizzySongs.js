// Set Songs 
var scizz = document.getElementById("ScizzTheme"); 
var heart = document.getElementById("Hearthome"); 
var black = document.getElementById("BlackTower"); 
var great = document.getElementById("GreatCanyon");


// Random Integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
song = getRandomInt(100);

// Song Selector 
if (song < 25) {
    var x = black;

} else if (song < 50) {
    var x = heart;

} else if (song < 75) {
    var x = great;

} else {
    var x = scizz;
}

// Play/Pause
function playAudio() { 
    x.play(); 
} 
function pauseAudio() { 
    x.pause(); 
} 
