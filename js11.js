/* CALLBACK HELL*/
let h1=document.querySelector("h1");
function changecolor(color,delay,nextcolorchange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolorchange)nextcolorchange();
    },delay);
}

changecolor("red",1000,()=>{
    changecolor("blue",1000,()=>{
        changecolor("green",1000)
    })
})