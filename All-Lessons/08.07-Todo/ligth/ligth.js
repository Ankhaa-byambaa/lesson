const body = document.querySelector("body");
const onBtn = document.createElement("button");
const offBtn = document.createElement("button");
const div = document.createElement("div");
const imgOn = document.createElement("img");
const imgOff = document.createElement("img");
const empty = document.createElement("img");

imgOff.src = "https://www.w3schools.com/js/pic_bulboff.gif";
imgOn.src = "https://www.w3schools.com/js/pic_bulbon.gif";

onBtn.className = "on";
offBtn.className = "off";

empty.src = "";
onBtn.innerText = "on";
offBtn.innerText = "off";
let result = false;
offBtn.addEventListener("click", () => {
  return (result = true);
});
function ligth() {
  if (offBtn === true) {
    return (empty = "https://www.w3schools.com/js/pic_bulboff.gif");
  } else {
    return (empty = "https://www.w3schools.com/js/pic_bulbon.gif");
  }
}

div.appendChild(offBtn);
div.appendChild(onBtn);
div.appendChild(empty);
body.appendChild(div);
