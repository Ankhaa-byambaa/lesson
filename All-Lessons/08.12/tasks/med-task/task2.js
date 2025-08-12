const PTag1 = document.getElementById("PTag1");
const input = document.getElementById("input");
const cbtn = document.getElementById("cbtn");

PTag1.innerText = "write here";
cbtn.innerText = "add";

cbtn.addEventListener("onclick", () => {
  const li = document.createElement("li");
  document.getElementById("a").appendChild(li);
  li.innerText = input.value;
});
