const PTag = document.getElementById("PTag");
const changeBtn = document.getElementById("changeBtn");
const apple = document.getElementById("apple");
const list = document.getElementById("list");

PTag.innerText = "1. Add list item";
changeBtn.innerText = "add bananaa";
apple.innerText = "apple";

changeBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  list.appendChild(li);
  li.innerText = "banana";
});
