// Write your code here!

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);

let main = document.querySelector("main#main");
main.remove();

let newMain = document.createElement("");
newMain.id = "main";
document.body.appendChild(newMain);
