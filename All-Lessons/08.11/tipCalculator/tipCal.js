const body = document.querySelector("body");
const main = document.getElementById("main");
const section1 = document.getElementById("section1"); //
const section2 = document.getElementById("section2"); //
const section3 = document.getElementById("section3"); //
const input = document.createElement("input"); //
const introPTag1 = document.createElement("p"); //
const introPTag2 = document.createElement("p"); //
const resultPTag = document.createElement("p"); //
const resetBtn = document.createElement("button"); //
const btn5 = document.createElement("button"); //
const btn10 = document.createElement("button"); //
const btn15 = document.createElement("button"); //
const btn25 = document.createElement("button"); //
const btn35 = document.createElement("button"); //
const btn50 = document.createElement("button"); //
const btn60 = document.createElement("button"); //
const btn80 = document.createElement("button"); //

body.className = "body";
input.className = "input";
introPTag1.className = "int";
introPTag2.className = "int";
resultPTag.className = "resultPTag";
resetBtn.className = "resetBtn";
btn5.className = "btn";
btn15.className = "btn";
btn10.className = "btn";
btn25.className = "btn";
btn35.className = "btn";
btn35.className = "btn";
btn50.className = "btn";
btn60.className = "btn";
btn80.className = "btn";
resetBtn.addEventListener("click", () => {
  input.value = "";
  resultPTag.innerText = "Total: 0.00";
});

btn5.addEventListener("click", () => {
  let num = (input.value * 5) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn10.addEventListener("click", () => {
  let num = (input.value * 10) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn15.addEventListener("click", () => {
  let num = (input.value * 15) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn25.addEventListener("click", () => {
  let num = (input.value * 25) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn35.addEventListener("click", () => {
  let num = (input.value * 35) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn50.addEventListener("click", () => {
  let num = (input.value * 50) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn60.addEventListener("click", () => {
  let num = (input.value * 60) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});
btn80.addEventListener("click", () => {
  let num = (input.value * 80) / 100;
  num += parseInt(input.value);
  resultPTag.innerText = "";
  resultPTag.innerText += "Total:" + num;
});

introPTag1.innerText = "Bill";
introPTag2.innerText = "select tip %";
resultPTag.innerText = "Total:0.00  ";
resetBtn.innerText = "reset ";
input.innerHTML = "$";
btn5.innerText = "5%";
btn15.innerText = "15%";
btn10.innerText = "10%";
btn25.innerText = "25%";
btn35.innerText = "35%";
btn50.innerText = "50%";
btn60.innerText = "60%";
btn80.innerText = "80%";

section1.appendChild(introPTag1);
section1.appendChild(input);
section1.appendChild(introPTag2);
section2.appendChild(btn5);
section2.appendChild(btn10);
section2.appendChild(btn15);
section2.appendChild(btn25);
section2.appendChild(btn35);
section2.appendChild(btn50);
section2.appendChild(btn60);
section2.appendChild(btn80);
section3.appendChild(resultPTag);
section3.appendChild(resetBtn);
main.appendChild(section1);
main.appendChild(section2);
main.appendChild(section3);
body.appendChild(main);

//1. create element -section1-3-++
//2.className++
//3.appenchild
//4. function
