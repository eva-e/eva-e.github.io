// AUDIO PLAYER ONLY

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

// const video = document.querySelector("#custom-video-player");
// const playPauseBtn = document.querySelector("#play-pause-btn");
// const playPauseImg = document.querySelector("#play-pause-img");
// const progressBar = document.querySelector("#progress-bar-fill");
// video.removeAttribute("controls");
// // playPauseBtn.addEventListener("click", togglePlayPause);
// video.addEventListener("timeupdate", updateProgressBar);
// function togglePlayPause() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
//   } else {
//     video.pause();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
//   }
// }
// function updateProgressBar() {
//   const value = (video.currentTime / video.duration) * 100;
//   progressBar.style.width = value + "%";
// }
// Add other functionalities here
