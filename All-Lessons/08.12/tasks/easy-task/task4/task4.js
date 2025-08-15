const PTag1 = document.getElementById("PTag1");
const PTag2 = document.getElementById("PTag2");
const c = document.getElementById("c");

c.innerText = "hide & show ";
PTag1.innerText = "hide $ show Element";
PTag2.innerText = "you can hide and show me.";
c.addEventListener("click", () => {
  PTag2.innerText = "                ";
});
