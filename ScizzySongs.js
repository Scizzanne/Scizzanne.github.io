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
var vid = document.getElementById("vid");
var bite = document.getElementById("Bite");
var zay = document.getElementById("Ahh");
var vine = document.getElementById("boom");

// To Prevent Earrape
vid.volume = 0.5;

// Random Integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
song = getRandomInt(100);

// Song Selector 
var playingMessage = new String();
if (song < 16) {
    var x = black;
    document.getElementById("show").innerHTML = "Pokemon Black 2 & White 2: Black Tower - Mother 3 Soundfont";
    playingMessage = "This one was for fun :3 Just a little soundfont experiment!";
} else if (song < 32) {
    var x = heart;
    document.getElementById("show").innerHTML = "Pokemon Diamond, Pearl, & Platinum: Hearthome City (Night) - Scizz Edition";
    playingMessage = "I might play this with my oboe sometime! :3";
} else if (song < 48) {
    var x = great;
    document.getElementById("show").innerHTML = "Pokemon Mystery Dungeon: Great Canyon - Scizz Edition";
    playingMessage = "Ooooh I love this one! I might make more PMD covers .O.";
} else if (song < 64) {
    var x = overt;
    document.getElementById("show").innerHTML = "Scizzanne: Overture";
    playingMessage = "This is a remake of a song I made when I was a kid! I think I was 15 when I first made this...";
} else if (song < 80) {
    var x = WiFi;
    document.getElementById("show").innerHTML = "Pokemon Diamond, Pearl, & Platinum: Nintendo WiFi Connection - Scizz Edition";
    playingMessage = "I posted this one on Twitter before :3";
} else {
    var x = scizz;
    document.getElementById("show").innerHTML = "Scizzanne: Main Theme (UNFINISHED) - Mother 3 Soundfont";
    playingMessage = "This one isn't finished hehe... I will finish it eventually!";
}

// Sound effects from keybinds
window.onkeydown = function(event) {
    if (event.keyCode === 66) {
        event.preventDefault();
        bite.play();
    } else if (event.keyCode === 65) {
        event.preventDefault();
        zay.play();
    } else if (event.keyCode === 86) {
        event.preventDefault();
        vine.play();
    }
}

// Play/Pause
var isPlaying = false;

function togglePlay() {
    isPlaying ? x.pause() : x.play();
    fun = getRandomInt(100);
    toggleText();
}; 

x.onplaying = function() {
    isPlaying = true;
    document.getElementById("piss").innerHTML = "Pause";
    document.getElementById("show").style.animationPlayState = "running";
    if (fun < 3) {
        document.getElementById("identify").innerHTML = playingMessage;
    } else {
        document.getElementById("identify").innerHTML = "Now Playing...";
    }
};
x.onpause = function() {
    isPlaying = false;
    document.getElementById("piss").innerHTML = "Play";
    document.getElementById("show").style.animationPlayState = "paused";
    if (fun < 3) {
        document.getElementById("identify").innerHTML = "Why'd you stop? qwq";
    } else {
        document.getElementById("identify").innerHTML = "Audio Paused";
    }
};

function toggleText() {
    var text = document.getElementById("show");
    var text2 = document.getElementById("hide");
        text.style.display = "block";
        text2.style.display = "none";
}

// Shows hidden when content is on screen (set class to hidden to activate)
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
