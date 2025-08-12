const P = document.getElementById("P");
const btn = document.getElementById("btn");
const body = document.querySelector("body");
P.innerText = "random background color";
btn.innerText = "change";
btn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 250);
  let y = Math.floor(Math.random() * 250);
  let z = Math.floor(Math.random() * 250);
  let randomColor = "rgb(" + x + "," + y + "," + z + ")";
  body.style.backgroundColor = randomColor;
});
