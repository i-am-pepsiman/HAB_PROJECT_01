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

// Crash on click
button_crash.addEventListener('click', () => {
    playAudioCrash();
});

// HiHat Close on click
button_hihat_close.addEventListener('click', () => {
    playAudioHiHatClose();
});

// HiHat Open on click
button_hihat_open.addEventListener('click', () => {
    playAudioHiHatOpen();
});

// Kick on click
button_kick.addEventListener('click', () => {
    playAudioKick();
});

// Ride on click
button_ride.addEventListener('click', () => {
    playAudioRide();
});

// Snare on click
button_snare.addEventListener('click', () => {
    playAudioSnare();
});

// Tom High on click
button_tom_high.addEventListener('click', () => {
    playAudioTomHigh();
});

// Tom Low on click
button_tom_low.addEventListener('click', () => {
    playAudioTomLow();
});

// Tom Mid on click
button_tom_mid.addEventListener('click', () => {
    playAudioTomMid();
});

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;

    switch (keyPressed) {
        case 'r':
            playAudioCrash();
            break;
        case 'q':
            playAudioHiHatClose();
            break;
        case 'w':
            playAudioHiHatOpen();
            break;
        case 'c':
            playAudioKick();
            break;
        case 'e':
            playAudioRide();
            break;
        case 'd':
            playAudioSnare();
            break;
        case 'f':
            playAudioTomHigh();
            break;
        case 'a':
            playAudioTomLow();
            break;
        case 's':
            playAudioTomMid();
            break;
        default:
            break;
    }
});
