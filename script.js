"use strict;"

// Saving elements in constants
const button_crash = document.getElementById('crash');
const button_hihat_close = document.getElementById('hihat_close');
const button_hihat_open = document.getElementById('hihat_open');
const button_kick = document.getElementById('kick');
const button_ride = document.getElementById('ride');
const button_snare = document.getElementById('snare');
const button_tom_high = document.getElementById('tom_high');
const button_tom_low = document.getElementById('tom_low');
const button_tom_mid = document.getElementById('tom_mid');

const sound_crash = document.getElementById('sound_crash');
const sound_hihat_close = document.getElementById('sound_hihat_close');
const sound_hihat_open = document.getElementById('sound_hihat_open');
const sound_kick = document.getElementById('sound_kick');
const sound_ride = document.getElementById('sound_ride');
const sound_snare = document.getElementById('sound_snare');
const sound_tom_high = document.getElementById('sound_tom_high');
const sound_tom_low = document.getElementById('sound_tom_low');
const sound_tom_mid = document.getElementById('sound_tom_mid');

// Play sounds on key presses specifically:
const keySounds = {
    q: sound_hihat_close,
    w: sound_hihat_open,
    e: sound_ride,
    r: sound_crash,
    a: sound_tom_low,
    s: sound_tom_mid,
    d: sound_snare,
    f: sound_tom_high,
    c: sound_kick
}

function playAudioOnKeypress(key) {
    if (keySounds[key]) {
        const audioElement = keySounds[key];
        audioElement.play();
    }
}

document.addEventListener("keypress", (event) => {
    const keyPressed = event.key;
    playAudioOnKeypress(keyPressed);
  });
  

///////////////////////////////////////////////

// Each function allows to play sound in overlapping instances, so the .wav doesn't need to finish playing before the next one starts
function playAudioCrash() {
    const newAudioCrash = sound_crash.cloneNode(true);
    newAudioCrash.play();
}

function playAudioHiHatClose() {
    const newAudioHiHatClose = sound_hihat_close.cloneNode(true);
    newAudioHiHatClose.play();
}

function playAudioHiHatOpen() {
    const newAudioHiHatOpen = sound_hihat_open.cloneNode(true);
    newAudioHiHatOpen.play();
}

function playAudioKick() {
    const newAudioKick = sound_kick.cloneNode(true);
    newAudioKick.play();
}

function playAudioRide() {
    const newAudioRide = sound_ride.cloneNode(true);
    newAudioRide.play();
}

function playAudioSnare() {
    const newAudioSnare = sound_snare.cloneNode(true);
    newAudioSnare.play();
}

function playAudioTomHigh() {
    const newAudioTomHigh = sound_tom_high.cloneNode(true);
    newAudioTomHigh.play();
}

function playAudioTomLow() {
    const newAudioTomLow = sound_tom_low.cloneNode(true);
    newAudioTomLow.play();
}

function playAudioTomMid() {
    const newAudioTomMid = sound_tom_mid.cloneNode(true);
    newAudioTomMid.play();
}


///////////////////////////////////////////////////////////////////


// Event handling for each element

// Crash on click / keypress
button_crash.addEventListener('click', () => {
    playAudioCrash();
});
/* button_crash.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'r') {
        playAudioCrash();
    }
}); */

// HiHat Close on click / keypress
button_hihat_close.addEventListener('click', () => {
    playAudioHiHatClose();
});
button_hihat_close.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'q') {
        playAudioHiHatClose();
    }
});

// HiHat Open on click / keypress
button_hihat_open.addEventListener('click', () => {
    playAudioHiHatOpen();
});
button_hihat_open.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'w') {
        playAudioHiHatOpen();
    }
});

// Kick on click / keypress
button_kick.addEventListener('click', () => {
    playAudioKick();
});
button_kick.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'c') {
        playAudioKick();
    }
});

// Ride on click / keypress
button_ride.addEventListener('click', () => {
    playAudioRide();
});
button_ride.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'e') {
        playAudioRide();
    }
});

// Snare on click / keypress
button_snare.addEventListener('click', () => {
    playAudioSnare();
});
button_snare.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'd') {
        playAudioSnare();
    }
});

// Tom High on click / keypress
button_tom_high.addEventListener('click', () => {
    playAudioTomHigh();
});
button_tom_high.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'f') {
        playAudioTomHigh();
    }
});

// Tom Low on click / keypress
button_tom_low.addEventListener('click', () => {
    playAudioTomLow();
});
button_tom_low.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 'a') {
        playAudioTomLow();
    }
});

// Tom Mid on click / keypress
button_tom_mid.addEventListener('click', () => {
    playAudioTomMid();
});
button_tom_mid.addEventListener('keypress', (event) => {
    event.preventDefault();
    let keyPressed = event.key;
    if (keyPressed == 's') {
        playAudioTomMid();
    }
});
