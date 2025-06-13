// The js will have two actions, drag and click.
// The drag action will be for dragging the plant to a designated area on the shelving.
// The click action is for choosing a plant and watering the plant.
// Three buttons for the plant options and one button for the watering can.

// Toggle Audio/Music
const music = document.querySelector("#my-audio");
const playPauseImg = document.querySelector("#play-pause-img");
const playPauseBtn = document.querySelector("#play-pause-btn");
let loop = true;
function togglePlayPause() {
  if (music.paused || music.ended) {
    music.play();
    playPauseImg.src = "images/musicbutton.png";
  } else {
    music.pause();
    playPauseImg.src = "images/musicoff.png";
  }
}

// Change image from no plant to Grown plant
// images will be named plant-grown1 and so on
const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  myImg.src = "images/plant-grown1.png";
});

const myImg2 = document.getElementById("myImg2");
myButton.addEventListener("click", function () {
  myImg2.src = "images/plant-grown2.png";
});

const myImg3 = document.getElementById("myImg3");
myButton.addEventListener("click", function () {
  myImg3.src = "images/plant-grown3.png";
});

// SPLASH SCREEN RULES
// https://www.youtube.com/watch?v=MOlaldp1Fv4 Tutorial Reference, I watched this tutorial to learn how to make a splash screen.
// I customised it to my liking, in order to maintain my webpage style.
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 6000);
});

// DRAG DROP IMAGE
let draggedElement = null;

const plantImg1 = document.querySelector("#myImg");
const plantImg2 = document.querySelector("#myImg2");
const plantImg3 = document.querySelector("#myImg3");
const dropBox = document.querySelector(".dropbox");

plantImg1.addEventListener("dragstart", startDrag);
plantImg2.addEventListener("dragstart", startDrag);
plantImg3.addEventListener("dragstart", startDrag);

function startDrag() {
  draggedElement = plantImg1;
}

function startDrag() {
  draggedElement = plantImg2;
}

function startDrag() {
  draggedElement = plantImg3;
}

dropBox.addEventListener("dragover", endDrag);

function endDrag(event) {
  event.preventDefault();
}

dropBox.addEventListener("drop", handleDrop);
const clone = draggedElement;

// CODE NOTES

// // Play music
// const firstMusicButton = document.querySelector("#music-button");

// const music = document.querySelector("#background-music");

// // Event listener to play the first video
// firstMMusicButton.addEventListener("click", function playIt() {
//   music.pause();
//   playVideo(0);
// });

// Mute/Unmute
// function toggleMuted() {
//   var sound = document.getElementById("music-button");
//   sound.muted = !sound.muted;
// }

// PLay/Pause Music Button
// const playPauseImg = document.querySelector("#play-pause-img");
// const musicButton = document.querySelector("#music-button");
// musicButton.addEventListener("click", function playIt() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseImg.src = "/images/musicoff.png";
//   }
//   video.pause();
//   playVideo(0);
// });
