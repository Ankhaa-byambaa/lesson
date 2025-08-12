const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");
const cbtn = document.getElementById("cbtn");
let num = [2, 3, 4, 56, 66, 77, 7, 10];

cbtn.innerText = "filter >5";
P1.innerText = "6) filter numbers >5";
P2.innerText = "";

cbtn.addEventListener("click", function result(num) {
  return (P2.innerText += num < 5);
});
