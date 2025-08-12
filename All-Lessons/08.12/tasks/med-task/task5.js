const P1 = document.getElementById("P");
const food = document.getElementById("food");
const ul = document.getElementById("ul");
P.innerText = "select";
const vegetables = ["carrot", "pumpkin", "potato"];
const fruits = ["apple", "banana", "strawberry"];

// list
/*let li = document.createElement("li");
li.innerText = vegetables[0];
li.innerText = vegetables[1];
li.innerText = vegetables[2];
li.innerText = fruits[0];
li.innerText = fruits[1];
li.innerText = fruits[2];
ul.appendChild(li);*/

for (i = 0; i < vegetables.length; i++) {
  let li = document.createElement("li");
  li.innerText = vegetables[i];
  ul.appendChild(li);
}
for (i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruits[i];
  ul.appendChild(li);
}
console.log;
food.addEventListener("change", () => {});
