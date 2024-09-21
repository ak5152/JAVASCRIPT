let url="https://catfact.ninja/fact";

async function data(){
    let res=await fetch(url);
    let date= await res.json();
    console.log(date);
    let re=await date.fact;
    console.log(re);
}