let userscore=0;
let compscore=0;
let result=document.querySelector("#result");
let one=document.querySelector("#one");
let five=document.querySelector("#five");


let rohit=document.querySelectorAll("#ro");

const getcompchoice=()=>{
    let arr=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return arr[idx];
}
const draw=()=>{
    console.log("game was draw");
    result.innerText=`game draw! play again ${userchoice} is equals to ${compchoice}`;
    result.style.backgroundColor="gold";
}
const Showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        one.innerText=userscore;
       console.log("you won");
       result.innerText=`you won the game ${userchoice} beats ${compchoice}`;
       result.style.backgroundColor="green";
    }
    else{
        compscore++;
        five.innerText=compscore;
        console.log("user lost");
        result.innerText=`you lost the game ${compchoice} beats ${userchoice}`;
        result.style.backgroundColor="red";
        
    }
}

const playgame=(userchoice)=>{
   
    console.log("choice clicked",userchoice);
    const compchoice=getcompchoice();
    console.log("computer choice",compchoice);
    if(userchoice===compchoice){
        draw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin= compchoice==="rock"?true:false;
        }
        else if(userchoice=="scissor"){
            userwin= compchoice==="paper"?true:false;
        }
        Showwinner(userwin);
    }
}


 rohit.forEach((ashu)=>{
    ashu.addEventListener("click",()=>{
        const userchoice= ashu.getAttribute("class");
        
        playgame(userchoice);
    })
 })

