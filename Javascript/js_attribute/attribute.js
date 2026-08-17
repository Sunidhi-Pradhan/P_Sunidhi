
let first = document.getElementById("first");
let a = first.getAttribute("class") //  get attribute
console.log (a);
console.log(first.hasAttribute("class"));//ans=true, has attribute or not 
console.log(first.hasAttribute("style"));//ans=false, has attribute or not 
first.setAttribute("hidden","true");//set attribute
//remove attribute
// first.removeAttribute("hidden");
