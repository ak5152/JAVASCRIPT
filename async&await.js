function changecolor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5);
            if(num>3){
                reject("color get stop");
            }
            let h1=document.querySelector("h1");
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

async function demo(){
    try{
        await  changecolor("red",1000);
        await changecolor("green",1000);
        await  changecolor("yellow",1000);
        await  changecolor("orange",1000);
        await  changecolor("blue",1000);
        console.log("ashutosh"); 
    }
  catch(err){
       console.log("error is caught");
  }
}

demo();