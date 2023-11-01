"use strict";
console.log("buenos dias ");
const sound_crash = document.getElementById('sound_crash');
const sound_hihat_close = document.getElementById('sound_hihat_close');
const sound_hihat_open = document.getElementById('sound_hihat_open');
const sound_kick = document.getElementById('sound_kick');
const sound_ride = document.getElementById('sound_ride');
const sound_snare = document.getElementById('sound_snare');
const sound_tom_high = document.getElementById('sound_tom_high');
const sound_tom_low = document.getElementById('sound_tom_low');
const sound_tom_mid = document.getElementById('sound_tom_mid');

const keySoundPairs = {
    r: sound_crash,
    q: sound_hihat_close,
    w: sound_hihat_open,
    c: sound_kick,
    e: sound_ride,
    d: sound_snare,
    f: sound_tom_high,
    a: sound_tom_low,
    s: sound_tom_mid
}

const drumSequence = [];
let isRecording = false; // Variable to control if recording is being done

function recordDrumSound(audioElement) {
    const currentTime = new Date().getTime();
    drumSequence.push({ sound: audioElement, time: currentTime });
}
//
document.addEventListener('click', (event) => {
    let clickedElement = document.getElementById(`sound_${event.target.id}`);
    if (clickedElement) {
        playAudio(clickedElement);
        if (isRecording) {
            recordDrumSound(clickedElement);
        }
    }
});

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    if (keySoundPairs[keyPressed]) {
        playAudio(keySoundPairs[keyPressed]);
        if (isRecording) {
            recordDrumSound(keySoundPairs[keyPressed]);
        }
    }
});

//start recording 
const startRecordingButton = document.getElementById('startRecordingButton');
const playRecordingButton = document.getElementById('playRecordingButton');

startRecordingButton.addEventListener('click', () => {
    isRecording = true;
});

playRecordingButton.addEventListener('click', () => {
    isRecording = false;
    playRecordedSequence();
});

//stop recording
function playRecordedSequence() {
    let index = 0;
    const interval = 500; // Interval between the play of sounds 

    const intervalId = setInterval(() => {
        if (index < drumSequence.length) {
            playAudio(drumSequence[index].sound);
            index++;
        } else {
            clearInterval(intervalId); // stops the interval when it has finished 
        }
    }, interval);
}

//allows play the sound  
function playAudio(audioFile) {
    const newAudioFile = audioFile.cloneNode(true);
    newAudioFile.play();
}