import "./styles.css";
const box = document.getElementById("box");

const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;

function changePosition() {
  box.style.left = getRndInteger(windowInnerWidth) + "px";
  box.style.top = getRndInteger(windowInnerHeight) + "px";
}

function getRndInteger(max) {
  return Math.floor(Math.random() * max);
}

box.addEventListener("mouseenter", changePosition);
