const PTag1 = document.getElementById("PTag1");
const PTag2 = document.getElementById("PTag2");
const changeButton = document.getElementById("changeButton");
const mainSection = document.getElementById("mainSection");

PTag1.innerText = "1. Change Text";
PTag2.innerText = "hello, World";
changeButton.innerText = "Change to hi~";

changeButton.addEventListener("click", () => {
  PTag2.value = "hi~";
  PTag2.innerText = "hi~";
  console.log(PTag2.value);
});
