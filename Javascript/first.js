// console.log("welcome to the  World");
// name ="Sunidhi";
// console.log(name);
// age = 20;
// console.log(age);

// marks = 82.5;
// console.log(marks);
// isfollow = true;
// const student ={
//     Name:"sunidhi",
//     roll:20,
//     age:20,
//     cgpa:8.2,
//     isPass:true,
// };
// student ["age"]=student ["age"]+1;
// student.roll=student.roll+1;
// console.log(student["age"]);
// let a =5;
// let b ="5";
// console.log("a",a,"& b",b);
// console.log("a **b",a**b);
// a++;
// console.log("a === b",a===b);

// sum(4,5);
// function sum(a,b){
//     c=a+b;
//     console.log(c);
// }

// let age=prompt("enter age");
// if(age>18){
//     console.log("u are eligeble to vote");
// }
// let age=16;
// age>=18?console.log("adult"):console.log("not adult");
// console.dir(window.document.body.childNodes[1].innertext="abcd";
// console.log(document.body);
// document.body.childNodes[1].innerText="abcd";
// let sony=document.getElementById("heading");
// console.log(sony);
// console.dir(sony);
// let home=document.getElementsByClassName("myclass");
// console.dir(home);
// console.log(home);
// let firstel=document.querySelector(".myclass");
// console.dir(firstel);
// console.dir(document.body.firstChild);
// let div =document.querySelector("div");
// console.dir(div);
// let heading =document.querySelector("h1");
// console.dir(heading);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + " From sambalpur";
let divs = document.querySelectorAll(".box");
console.log(divs[0]);
// divs[0].innerText="New 1St Div";
// divs[1].innerText="New 2St Div";
// divs[2].innerText="New 3St Div";

let idx=1;
for(div of divs){
    div.innerText=`New div $(idx)`;
    idx++;
}