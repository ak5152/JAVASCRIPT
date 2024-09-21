
let body=document.querySelector("body");

let div=document.createElement("div");
body.appendChild(div);
div.classList.add("box");
let p=document.createElement("p");
p.innerText="hey there i am in a div";
div.appendChild(p);
let h1=document.createElement("h1");
h1.innerText="me too";
div.append(h1);


