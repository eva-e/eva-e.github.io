// The js will have two actions, drag and click.
// The drag action will be for dragging the plant to a designated area on the shelving.
// The click action is for choosing a plant and watering the plant.
// Three buttons for the plant options and one button for the watering can.

// Toggle Audio

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
  myImg.src = "images/plant3.png";
});

const myImg2 = document.getElementById("myImg2");
const myButton2 = document.getElementById("myButton2");

myButton.addEventListener("click", function () {
  myImg2.src = "images/plant3.png";
});

const myImg3 = document.getElementById("myImg2");
const myButton3 = document.getElementById("myButton2");

myButton.addEventListener("click", function () {
  myImg2.src = "images/plant2.png";
});

// DRAG DROP CARD
// const card = document.querySelector(".card");
// console.log(card);
// let draggedCard = null;

// card.addEventListener("dragstart", function () {
//   draggedCard = card;
// });
// const dropBox = document.querySelector(".dropbox");
// dropBox.innerHTML = "";

// dropBox.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// dropBox.addEventListener("drop", function () {
//   const clone = draggedCard;

//   dropBox.appendChild(clone);
// });

// CODE NOTES
// Music for Page Loop, Click anywhere on screen
// window.addEventListener("click", function () {
//   var audio = document.getElementById("Any name");
//   audio.play();
// });
// const musicList = [
//   {
//     name: "Leafy Jazz",
//     link: "https://www.dropbox.com/scl/fi/jacq38pk7e4xsoizoufto/bossa-nova-jazz-podcast-music-207165.mp3?rlkey=gda87j6g1x3j4dddvxgti4zb2&st=xo4l61fc&dl=1",
//   },
// ];
// const muteUnmuteButton = document.querySelector("#mute-unmute-button");
// // Event listener to mute or unmute audio on clicking the button
// muteUnmuteButton.addEventListener("click", toggleAudio);
// const muteUnmuteImg = document.querySelector("#mute-unmute-img");

// // Event listener to check if the video is ended to replay it
// myMusic.addEventListener("ended", replay);

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
