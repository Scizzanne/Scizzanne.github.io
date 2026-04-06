/* 
    Uhhh yeah! Hi!!! this is the uhhh thingy that make da
    somgs work n stuff!!! Nice to see you here!!! :3

    Update as of 4/6/2025
*/

const songList = [
    {
        id: "BlackTower",
        path: "./Music/BlackTower.mp3",
        title: "Pokemon Black 2 & White 2: Black Tower",
        message: "This one was for fun :3 Just a little soundfont experiment!"
    },
    {
        id: "Hearthome",
        path: "./Music/HearthomeCityScizzEdition.mp3",
        title: "Pokemon Diamond, Pearl, & Platinum: Hearthome City (Night)",
        message: "I might play this with my oboe sometime! :3"
    },
    {
        id: "GreatCanyon",
        path: "./Music/GreatCanyonScizzEdition.mp3",
        title: "Pokemon Mystery Dungeon: Great Canyon",
        message: "Ooooh I love this one! I might make more PMD covers .O."
    },
    {
        id: "Overture",
        path: "./Music/ScizzOverture1.mp3",
        title: "Scizzanne: Overture",
        message: "This is a remake of a song I made when I was a kid! I think I was 15 when I first made this..."
    },
    {
        id: "WiFiConnection",
        path: "./Music/WiFiConnectionScizzEdition.mp3",
        title: "Pokemon Diamond, Pearl, & Platinum: Nintendo WiFi Connection",
        message: "I posted this one on Twitter before :3"
    },
    {
        id: "ScizzTheme",
        path: "./Music/ScizzanneMainThemeWIP.mp3",
        title: "Scizzanne: Main Theme (WIP)",
        message: "This one isn't finished hehe... I will finish it eventually!"
    },
    {
        id: "MegaMan",
        path: "./Music/MegaMan1EndScizzWIP.mp3",
        title: "Mega Man 1: Ending (WIP)",
        message: "This is not finished... but at least I got the first part down! :3"
    },
    {
        id: "Victory",
        path: "./Music/SCIZZtoryRoad.mp3",
        title: "Pokemon Black & White/Black 2 & White 2: Victory Road (WIP)",
        message: "Still workin on this one too! I'm quite proud of it so far hehe :3"
    },
    {
        id: "Floccesy",
        path: "./Music/FloccesyTownRecreation.mp3",
        title: "Pokemon Black 2 & White 2: Floccesy Town Recreation",
        message: "This was just for fun hehe. There will be a cover version I will record eventually..."
    },
    {
        id: "TitleScreen",
        path: "./Music/BWTitleScreenWIP.mp3",
        title: "Pokemon Black 2 & White 2: Title Screen (WIP)",
        message: "Ngl I'm just working on the sheet music. What you hear is like... almost complete :3"
    }
];

// Set Global Variables 
let vid = document.getElementById("vid");
let selectedSong = null;
let fun = getRandomInt(100);

const identify = document.getElementById("identify");
const pissButton = document.getElementById("piss");
const showText = document.getElementById("show");
const bite = createAudioPool("./SoundEffects/Bite.mp3");
const rizz = createAudioPool("./SoundEffects/Rizz.mp3");
const zay  = createAudioPool("./SoundEffects/ZaytovenAhh.mp3");
const vine = createAudioPool("./SoundEffects/VineBoom.mp3");

// To Prevent Earrape
if (vid) vid.volume = 0.5;

// Song Selection
function getRandomSong() {
    const index = Math.floor(Math.random() * songList.length);
    return songList[index];
}
const chosen = getRandomSong();

selectedSong = document.getElementById("player");
selectedSong.src = chosen.path;
selectedSong.load();
showText.innerHTML = chosen.title;
let currentSongData = chosen;

// Play/Pause Variable
let isPlaying = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Toggle Function 
function togglePlay() {
    isPlaying ? selectedSong.pause() : selectedSong.play();
    fun = getRandomInt(100);
    toggleText();
}; 

// Play/Pause songs
selectedSong.addEventListener("playing", function() {
    isPlaying = true;
    pissButton.innerHTML = "Pause";

    if (fun < 3) {
        identify.innerHTML = currentSongData.message;
    } else {
        identify.innerHTML = "Now Playing...";
    }

    showText.style.animationPlayState = "running";
});

selectedSong.addEventListener("pause", function() {
    isPlaying = false;
    pissButton.innerHTML = "Play";

    if (fun < 3) {
        identify.innerHTML = "Why'd you stop? qwq";
    } else {
        identify.innerHTML = "Audio Paused";
    }

    showText.style.animationPlayState = "paused";
});

function toggleText() {
    let text = showText;
    let text2 = document.getElementById("hide");
        text.style.display = "block";
        text2.style.display = "none";
}

function createAudioPool(src, poolSize = 5, volume = 0.5) {
    const pool = [];

    for (let i = 0; i < poolSize; i++) {
        const audio = new Audio(src);
        audio.volume = volume;
        pool.push(audio);
    }

    let index = 0;

    return function play() {
        const sound = pool[index];

        // reset so it always plays instantly
        sound.currentTime = 0;
        sound.play();

        index = (index + 1) % pool.length;
    };
}

// Sound effects from keybinds
window.onkeydown = function(event) { 
    if (event.ctrlKey && event.key === 'r') {
        event.preventDefault();
        location.reload();
    } else if (event.key === 'b') { 
        event.preventDefault();
        bite();
    } else if (event.key === 'r') { 
        event.preventDefault();
        rizz();
    } else if (event.key === 'a') { 
        event.preventDefault();
        zay();
    } else if (event.key === 'v') { 
        event.preventDefault();
        vine();
    } 
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