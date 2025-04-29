// first fetch video file

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// play/pause button
// Fetch the play/pause button

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton = addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}

// mute/unmute logic
// Fetch the mute/unmute button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton = addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}

// const videoList = [
//   { id: 1, src: "stardust.mp4" },
//   { id: 2, src: "zenscape.mp4" },
//   {
//     id: 3,
//     src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
//   },
// ];

// const myVideo = document.querySelector("#my-video");
// console.log(myVideo);

// const progressBar = document.querySelector("#progress-bar");
// console.log(progressBar);

// myVideo.addEventListener("timeupdate", updateProgress);

// function updateProgress() {
//   const duration = (myVideo.currentTime / myVideo.duration) * 100;
//   progressBar.style.width = duration + "%";
// }

// const playPauseButton = document.querySelector("#play-pause-button");
// console.log(playPauseButton);

// playPauseButton.addEventListener("click", togglePlayback);

// const playPauseImg = document.querySelector("#play-pause-img");
// console.log(playPauseImg);

// function togglePlayback() {
//   if (myVideo.paused || myVideo.ended) {
//     myVideo.play();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
//   } else {
//     myVideo.pause();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
//   }
// }

// const muteUnmuteButton = document.querySelector("#mute-unmute-button");
// console.log(muteUnmuteButton);

// muteUnmuteButton.addEventListener("click", toggleAudio);

// const muteUnmuteImg = document.querySelector("#mute-unmute-img");
// console.log(muteUnmuteImg);

// function toggleAudio() {
//   if (myVideo.muted) {
//     myVideo.muted = false;
//     muteUnmuteImg.src =
//       "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
//   } else {
//     myVideo.muted = true;
//     muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
//   }
// }

// const stardustButton = document.querySelector("#stardust-vid-button");
// console.log(stardustButton);

// stardustButton.addEventListener("click", function chooseVideo() {
//   playVideo(0);
// });

// const zenscapeButton = document.querySelector("#zenscape-vid-button");
// console.log(zenscapeButton);

// zenscapeButton.addEventListener("click", function chooseVideo() {
//   playVideo(1);
// });

// const musicVideoButton = document.querySelector("#musicvideo-vid-button");
// console.log(musicVideoButton);

// musicVideoButton.addEventListener("click", function chooseVideo() {
//   playVideo(2);
// });

// function playVideo(no) {
//   myVideo.src = videoList[no].src;
//   console.log(myVideo.src);
//   myVideo.load();
//   myVideo.play();
// }

// const fullscreenButton = document.querySelector("#fullscreen-button");
// console.log(fullscreenButton);

// fullscreenButton.addEventListener("click", toggleFullscreen);

// function toggleFullscreen() {
//   if (!document.fullscreenElement) {
//     myVideo.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// }

// const heartButton = document.querySelector("#heart-button");
// console.log(heartButton);

// heartButton.addEventListener("click", updateLikes);

// const likesContainer = document.querySelector("#likes");
// let likes = 0;

// function updateLikes() {
//   likes++;
//   likesContainer.textContent = likes;
// }

// const step1Button = document.querySelector("#step1-button");
// console.log(step1Button);

// step1Button.addEventListener("click", gotoStep1);

// function gotoStep1() {
//   myVideo.currentTime = 16.0;
// }

// const step2Button = document.querySelector("#step2-button");
// console.log(step2Button);

// step2Button.addEventListener("click", gotoStep2);

// function gotoStep2() {
//   myVideo.currentTime = 43.0;
// }

// const fastForwardButton = document.querySelector("#fast-forward-button");
// console.log(fastForwardButton);

// fastForwardButton.addEventListener("click", fastForward);

// function fastForward() {
//   if (myVideo.playbackRate === 1.0) {
//     myVideo.playbackRate = 2.0;
//   } else {
//     myVideo.playbackRate = 1.0;
//   }
// }
