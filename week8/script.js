// first fetch video file

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

myVideo.addEventListener("timeupdate", updateProgressBar);

// fetch progress bar
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

// logic of how many seconds into the video, the current time
function updateProgressBar() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  progressBar.style.width = progress + "%";
}
// --------------------------------------------------------------------------

// play/pause button
// Fetch the play/pause button

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlay);

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

// --------------------------------------------------------------------------

// mute/unmute logic
// Fetch the mute/unmute button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  // if the video does not have sound that means muted == true, then unmute the video
  if (myVideo.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    myVideo.muted = false;
    // if the video has sound then mute the video
  } else {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = true;
  }
}

// --------------------------------------------------------------------------

// fast forward logic
// Fetch the fast forward button

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// listen to click on that button
fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myVideo.playbackRate == 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
//  -------------------------------------------------------------------------

// step one button
// Fetch the step one button

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

// listen to click on that button
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 43.54;
}

//  -------------------------------------------------------------------------
// fullscreen logic
// fetch fullscreen button
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

// listen to click on that button
fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//  -------------------------------------------------------------------------
// like button

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

// listen to click button
heartButton.addEventListener("click", updateLikes);

let likes = 0;
const likesContainer = document.querySelector("#likes");
function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}
// -------------------------------------------------------------------------

// PLAYLIST LOGIC - USEFUL FOR ASSIGNMENT 2
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
// = assigning value
//  == comparing values
// compare value and type
// myVideo.muted === true => myVideo.muted
// myVideo.muted === false => !myVideo.muted
