/* 
    Uhhh yeah! Hi!!! this is the uhhh thingy that make da
    somgs work n stuff!!! Nice to see you here!!! :3
*/

// Set Songs 
var scizz = document.getElementById("ScizzTheme"); 
var heart = document.getElementById("Hearthome"); 
var black = document.getElementById("BlackTower"); 
var great = document.getElementById("GreatCanyon");
var overt = document.getElementById("Overture")
var WiFi = document.getElementById("WiFiConnection")

// Random Integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
song = getRandomInt(100);

// Song Selector 
if (song < 16) {
    var x = black;
} else if (song < 32) {
    var x = heart;
} else if (song < 48) {
    var x = great;
} else if (song < 64) {
    var x = overt;
} else if (song < 80) {
    var x = WiFi;
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

// TODO: Produce Message - SHOULD BE INVISIBLE FIRST

// Shows hidden when content is on screen 
// (set class to hidden to activate)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
