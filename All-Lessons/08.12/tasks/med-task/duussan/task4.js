const btn = document.getElementById("btn");
const P = document.getElementById("P");
const P2 = document.getElementById("P2");
const input = document.getElementById("input");

P1.innerText = "word length";
btn.innerText = "add";
P2.innerText = "";

btn.addEventListener("click", () => {
  P2.innerText = input.value.length;
});
