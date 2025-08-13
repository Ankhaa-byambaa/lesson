//create element
const input = document.createElement("input");
const body = document.querySelector("body");
const inputDiv = document.createElement("div");
const addBtn = document.createElement("button");
//fuction 
//1. minii input hiisen utgiig door ni ul deer list bolgon gragj 
//2.update hiih icon 
//3.delete button hiih
//4.hiisen d/button der darhad tuhain list alga boldog bhaar 
//5.tuhain update hiideg towch deer darah ued prompt garch iren tuhain utgiig zashad input iin value ruu oruuldag bolgoh / eswel shuud list ruu nemdeg bolgoh 
//6.check box nemeh daraa ni ner btn deer darhad bugd check box toi boldog bh 
//7. to do list hiidej bgaa content deer mouse ochihod menu garch ireed ------- bold bolgoh- tom usgeer bolgoh -- jijig usgeer bugdiin solih - ungiig ni solij boldog bolgoh -update hiih - delet hiih - copy hiih zereg uildliig nemj uguh 
// hmagiin suuld ni css ee hiij duusgah 
// take className
addBtn.className = "addBtn";
body.className = "body";
inputDiv.className = "inputDiv";
input.className = "input";
//inner HTML
addBtn.innerText = "add";
input.type = "text";
//appenchild
inputDiv.appendChild(input);
inputDiv.appendChild(addBtn);
body.appendChild(inputDiv);
