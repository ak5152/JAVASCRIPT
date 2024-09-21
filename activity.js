function randcolor(){
    let red=Math.floor(Math.random()*255 +1);
    let green=Math.floor(Math.random()*255 +1);
    let blue=Math.floor(Math.random()*255 +1);
    let res=`rgb(${red},${green},${blue})`;

    return res;
}

let btn=document.querySelector("button");
let div=document.querySelector("div");
let h1=document.querySelector("h1");


btn.addEventListener("click",()=>{
 div.style.backgroundColor=randcolor();
 h1.innerText=randcolor();
})
