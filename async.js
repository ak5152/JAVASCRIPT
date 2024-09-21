async function greet(){
    throw "page not found";
    return "hello";
}
greet()

.then((result)=>{
    console.log("promise resolved",result);
})

.catch((err)=>{
    console.log("promise rejected",err);
})
