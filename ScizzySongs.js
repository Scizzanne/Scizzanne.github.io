/* 
    Uhhh yeah! Hi!!! this is the uhhh thingy that make da
    somgs work n stuff!!! Nice to see you here!!! :3

    Update as of 1/10/2025

*/

// Set Variables 
var scizz = document.getElementById("ScizzTheme"); 
var heart = document.getElementById("Hearthome"); 
var black = document.getElementById("BlackTower"); 
var great = document.getElementById("GreatCanyon");
var overt = document.getElementById("Overture");
var WiFi = document.getElementById("WiFiConnection");
var mega = document.getElementById("MegaMan");

var vid = document.getElementById("vid");

var bite = document.getElementById("Bite");
var erm = document.getElementById("Sigma")
var zay = document.getElementById("Ahh");
var vine = document.getElementById("boom");
var rizz = document.getElementById("rizz");

// To Prevent Earrape
vid.volume = 0.5;

// Random Integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
song = getRandomInt(100);

// Song Selector 
var playingMessage = new String();
if (song < 14) {
    var x = black;
    document.getElementById("show").innerHTML = "Pokemon Black 2 & White 2: Black Tower";
    playingMessage = "This one was for fun :3 Just a little soundfont experiment!";
} else if (song < 28) {
    var x = heart;
    document.getElementById("show").innerHTML = "Pokemon Diamond, Pearl, & Platinum: Hearthome City (Night)";
    playingMessage = "I might play this with my oboe sometime! :3";
} else if (song < 42) {
    var x = great;
    document.getElementById("show").innerHTML = "Pokemon Mystery Dungeon: Great Canyon";
    playingMessage = "Ooooh I love this one! I might make more PMD covers .O.";
} else if (song < 57) {
    var x = overt;
    document.getElementById("show").innerHTML = "Scizzanne: Overture";
    playingMessage = "This is a remake of a song I made when I was a kid! I think I was 15 when I first made this...";
} else if (song < 71) {
    var x = WiFi;
    document.getElementById("show").innerHTML = "Pokemon Diamond, Pearl, & Platinum: Nintendo WiFi Connection";
    playingMessage = "I posted this one on Twitter before :3";
} else if (song < 85) {
    var x = scizz;
    document.getElementById("show").innerHTML = "Scizzanne: Main Theme (WIP)";
    playingMessage = "This one isn't finished hehe... I will finish it eventually!";
} else {
    var x = mega;
    document.getElementById("show").innerHTML = "Mega Man 1: Ending (WIP)";
    playingMessage = "This is not finished... but at least I got the first part down! :3";
}

// Sound effects from keybinds
window.onkeydown = function(event) { 
    if (event.keyCode === 66) { // b 
        event.preventDefault();
        bite.play();
    } else if (event.keyCode === 69) { // e
        event.preventDefault();
        erm.play();
    } else if (event.keyCode === 65) { // a
        event.preventDefault();
        zay.play();
    } else if (event.keyCode === 86) { // v
        event.preventDefault();
        vine.play();
    } else if (event.keyCode === 82) { // r
        event.preventDefault();
        rizz.play();
    }
}

// Refresh Keystroke: ctrl + r
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'r') {
      this.location.reload();
    }
});

// Play/Pause Variable
var isPlaying = false;

/// Toggle Function 
function togglePlay() {
    isPlaying ? x.pause() : x.play();
    fun = getRandomInt(100);
    toggleText();
}; 

// Play/Pause songs
x.onplaying = function() {
    isPlaying = true;
    document.getElementById("piss").innerHTML = "Pause";
    if (fun < 3) {
        document.getElementById("identify").innerHTML = playingMessage;
    } else {
        document.getElementById("identify").innerHTML = "Now Playing...";
    }
    document.getElementById("show").style.animationPlayState = "running";
};
x.onpause = function() {
    isPlaying = false;
    document.getElementById("piss").innerHTML = "Play";
    if (fun < 3) {
        document.getElementById("identify").innerHTML = "Why'd you stop? qwq";
    } else {
        document.getElementById("identify").innerHTML = "Audio Paused";
    }
    document.getElementById("show").style.animationPlayState = "paused";

};

function toggleText() {
    var text = document.getElementById("show");
    var text2 = document.getElementById("hide");
        text.style.display = "block";
        text2.style.display = "none";
}

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
