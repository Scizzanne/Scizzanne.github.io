/**
 * This file is to load all sheet music I have made!
 */

var sheetMusicIndex = 0;
var sheetMusicData = null; // array of objects containing the sheet music data
var initialized = false;

// load the data and then load the sheet music
init().then(() => {
    loadData();
});

// wait until the data is loaded before allowing access to it
async function init() {
    if (initialized) return;

    const res = await fetch("./SheetMusicFiles.json");
    sheetMusicData = await res.json(); 

    initialized = true;
}

function loadData() {
    console.log(sheetMusicData);
}
