let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

changecolor("red",1000)
.then((result)=>{
    console.log(result);
    console.log("red color completed");
    return changecolor("green",1000);

})
.then(()=>{
    console.log("green color completed");
    return changecolor("yellow",1000);
})
.then(()=>{
    console.log("yellow color completed");
})
.catch(()=>{
    console.log("color not changed");
})