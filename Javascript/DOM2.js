// let div = document.querySelector("div");
// console.dir(div);
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// let p = document.querySelector("p");
// console.log(p.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor="purple";
// div.style.visibility= "hidden";
// div.style.fontSize="36px";
// div.innerText="Hello";

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn);