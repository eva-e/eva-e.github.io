const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "audio is currently playing";

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

// playing sound
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  myNewHeading = "Audio is currently playing";
  airportAudio.play();
  topHeading.textContent = myNewHeading;
}

// pausing audio

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  myNewHeading = "Audio is currently paused";
  airportAudio.pause();
  topHeading.textContent = myNewHeading;
}

// pop sound

const popSound = document.querySelector("#pop-audio");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);

function popAudio() {
  myNewHeading = "Popping sound";
  popSound.play();
  topHeading.textContent = myNewHeading;
}
