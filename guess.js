let user=prompt("enter any number b/w 1 to 10");
console.log( "user entry=",user);

let comp=Math.floor(Math.random()*10 +1);
console.log("comp entry=",comp);

while(true){
if(user==comp){
    console.log("congrats you won the game",comp);
    break;
}else{
    user=prompt("sorry! you lost try sgain",comp);
    
}}