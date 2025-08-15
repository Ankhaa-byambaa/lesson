const body = document.querySelector("body");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const mainDiv = document.createElement("div");
//const mainDiv2 = document.createElement("div");
//const box3 = document.createElement("div");
//const box4 = document.createElement("div");

//box4.className = "box4";
//box3.className = "box3";
box1.className = "box1";
box2.className = "box2";
mainDiv.className = "mainDiv";
//mainDiv2.className = "mainDiv2";
body.className = "body";

box1.style.width = "50%";
box2.style.width = "50%";
//box3.style.width = "50%";
//box4.style.width = "50%";

box1.style.height = "100vh";
box2.style.height = "100vh";
//box3.style.height = "50vh";
//box4.style.height = "50vh";

//neg

/*document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let box4width = parseInt(getComputedStyle(box4).width);
    let box1width = parseInt(getComputedStyle(box1).width);
    let box2width = parseInt(getComputedStyle(box2).width);
    let box3width = parseInt(getComputedStyle(box3).width);

    let box4heigth = parseInt(getComputedStyle(box4).heigth);
    let box1heigth = parseInt(getComputedStyle(box1).heigth);
    let box2heigth = parseInt(getComputedStyle(box2).heigth);
    let box3heigth = parseInt(getComputedStyle(box3).heigth);

    //box1 tomorhod width-heigth
    //box2 width--  ; heigth ++
    //box3 heigth--; width ++
    //box4 width--; heigth --

<<<<<<< HEAD
    box1.style.width = box1width + 10 + "px";
    console.log(box1.style.width);
    box1.style.height = box1heigth + 5 + "px";
=======
    box1.style.width = box1width + 5 + "px";
    console.log(box1.style.width);
    //box1.style.height = box1heigth + 10 + "vh";
>>>>>>> 2f6bcb4c345490a2ee13328b6d34e252ebea9e7a

    // box2.style.width = box2width - 10 + "%";
    // box2.style.height = box2heigth + 10 + "vh";

<<<<<<< HEAD
    box3.style.width = box3width + 10 + "px";
    box3.style.height = box3heigth - 5 + "px";

    //ox3.style.width = box4width - 10 + "px";
    //ox4.style.height = box4heigth - 10 + "vh";
=======
    //box3.style.width = box3width + 10 + "px";
    //box3.style.height = box3heigth - 10 + "vh";

    // box3.style.width = box4width - 10 + "px";
    // box4.style.height = box4heigth - 10 + "vh";
>>>>>>> 2f6bcb4c345490a2ee13328b6d34e252ebea9e7a
  }
});*/

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let redwidth = parseInt(getComputedStyle(box2).width);
    let greenwidth = parseInt(getComputedStyle(box1).width);
    box2.style.width = redwidth - 10 + "%";
    box1.style.width = greenwidth + 10 + "%";
  }
  console.log();
});

box2.addEventListener("click", function (event) {
  let redwidth = parseInt(getComputedStyle(box2).width);
  let greenwidth = parseInt(getComputedStyle(box1).width);
  box2.style.width = redwidth + 10 + "%";
  box1.style.width = greenwidth - 10 + "%";
});
box1.addEventListener("click", function (event) {
  let redwidth = parseInt(getComputedStyle(box2).width);
  let greenwidth = parseInt(getComputedStyle(box1).width);
  box2.style.width = redwidth - 10 + "%";
  box1.style.width = greenwidth + 10 + "%";
});
console.log(box1.style.width);
console.log(box2.style.width);

//1. css bichne
//herwee nogoon tal deer darwal 10px eer zai ni tomorno

document.addEventListener("click", () => {});

mainDiv.appendChild(box1);
mainDiv.appendChild(box2);
//mainDiv2.appendChild(box3);
//mainDiv2.appendChild(box4);
body.appendChild(mainDiv);
//body.appendChild(mainDiv2);
