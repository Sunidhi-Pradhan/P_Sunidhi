// let btn1= document.querySelector("#btn1");
// btn1.onclick =(e) => {
//     console.log(e);
//     console.log(e.type);s
//     console.log("btn1 was clicked");}


// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// })


// let box = document.querySelector("div");
// box.onmouseover =() =>{
//     console.log("you are inside div");
// }

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",()=>{
    // console.log("you are trying to change mode");
    if(currmode == "light"){
        currmode = "dark";
        body.classList.add("dark");
    }else{
        currmode = "light";
        body.classList.add("light");

    }
    console.log(currmode);
})