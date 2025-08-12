const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");
const c = document.getElementById("c");

c.innerText = "click me";
P1.innerText = "50 Count button clicks";
P2.innerText = "clicked 0 times";
let count = 0;

c.addEventListener("click", () => {
  count++;
  console.log(count);
  P2.innerText = "Clicked" + count + "times";
});
