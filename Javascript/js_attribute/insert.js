let a = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + "<h1>hello world</h1>";

let div = document.createElement('div');
div.innerHTML = "<h1>hello sunidhi</h1>";
// a.append(div);
a.after(div);