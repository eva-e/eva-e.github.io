const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// playing video

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);

function playVideo() {
  myVideo.play();
}

// pausing video

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVideo.pause();
}
