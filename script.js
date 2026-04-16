const bg = document.getElementById("bg-frame");

const frames = ["bg1.png", "bg2.png", "bg3.png", "bg4.png"];
let currentFrame = 0;

setInterval(() => {
  currentFrame = (currentFrame + 1) % frames.length;
  bg.src = frames[currentFrame];
}, 1000);