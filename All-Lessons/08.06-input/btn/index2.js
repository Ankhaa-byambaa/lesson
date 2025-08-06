const input = document.createElement("input");
const button = document.createElement("button");
const body = document.getElementById("div");
const ul = document.querySelector("ul");
const data = [];

button.className = "button";
input.className = "input";
button.innerText = "click me";
ul.className = "ul";

button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

function render() {
  ul.innerHTML = "";
  let result = data.map((element) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const div = document.createElement("div");
    btn.innerText = "x";
    div.className = "div";
    li.innerText = element;
    btn.addEventListener("click", () => {
      const newlist = result.filter((el) => {
        return el !== element;
      });
      result = newlist;
      render();
    });
    div.appendChild(li);
    div.appendChild(input);
    ul.appendChild(div);
  });
  return result;
}

function printInputValue(value) {
  data.push(value);
}

div.appendChild(input);
div.appendChild(button);
