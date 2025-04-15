var video;

window.addEventListener("load", function() {
  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  video.load();
  document.getElementById("volume").innerText = (video.volume * 100) + "%";
  console.log("Page loaded. Autoplay and loop disabled.");
});

document.getElementById("play").addEventListener("click", function() {
  video.play();
  document.getElementById("volume").innerText = (video.volume * 100) + "%";
  console.log("Play Video");
});

document.getElementById("pause").addEventListener("click", function() {
  video.pause();
  console.log("Pause Video");
});

document.getElementById("slower").addEventListener("click", function() {
  video.playbackRate *= 0.9;
  console.log("New speed is:", video.playbackRate.toFixed(5));
});

document.getElementById("faster").addEventListener("click", function() {
  video.playbackRate /= 0.9;
  console.log("New speed is:", video.playbackRate.toFixed(5));
});

document.getElementById("skip").addEventListener("click", function() {
  if (video.currentTime + 10 < video.duration) {
    video.currentTime += 10;
  } else {
    video.currentTime = 0;
  }
  console.log("Current location:", video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
  video.muted = !video.muted;
  this.innerText = video.muted ? "Unmute" : "Mute";
});

document.getElementById("slider").addEventListener("input", function() {
  video.volume = this.value / 100;
  document.getElementById("volume").innerText = (video.volume * 100) + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
  video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
  video.classList.remove("oldSchool");
});
