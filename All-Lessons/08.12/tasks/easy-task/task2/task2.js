const PTag1 = document.getElementById("PTag1");
const div = document.getElementById("div");
const cbtn = document.getElementById("changeBackgroundColorButton");
const mainSection = document.getElementById("mainSection");

PTag1.innerText = "1. Change Background color";
cbtn.innerText = "Change color";

cbtn.addEventListener("click", () => {
  div.style.backgroundColor = "blue";
});
