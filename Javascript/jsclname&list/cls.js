alert("Hello")

setTimeout(function(){
    alert("I am inside of settimeout")
},2000)
let b = prompt("Do you Want to run the settimeout");
if("n"==b){
    clearTimeut(a)
}
console.log(a)