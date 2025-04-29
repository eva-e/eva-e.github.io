// AUDIO PLAYER ONLY

const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "audio is currently playing";

const dangoAudio = document.querySelector("#dango-audio");
console.log(dangoAudio);

// playing sound
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  myNewHeading = "Audio is currently playing";
  dangoAudio.play();
  topHeading.textContent = myNewHeading;
}

// PLAYLIST LOGIC - USEFUL FOR ASSIGNMENT 2-
// website feature change between lightmode and darkmode, prompt the user to use darkmode lightmode or warm mode
const playlist = [
  { id: 1, src: "stardust.mp4" },
  { id: 2, src: "zenscape.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Music Video",
  },
];

// stardust
// playlist logic
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

// listen to click button
stardustButton.addEventListener("click", function chooseStardust() {
  chooseVideo(0);
});

// zenscape
// playlist logic
const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

// listen to click button
zenscapeButton.addEventListener("click", function chooseZenscape() {
  chooseVideo(1);
});

// music video
// playlist logic
const musicVidButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVidButton);

// listen to click button
musicVidButton.addEventListener("click", function chooseMusicVideo() {
  chooseVideo(2);
});

function chooseVideo(no) {
  myVideo.src = playlist[no].src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
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
