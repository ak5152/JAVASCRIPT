function savetodb(data){
    return new Promise((resolve, reject) => {
        let intspeed=Math.floor(Math.random()*10 +1);
        if(intspeed>4){
            resolve("success: data saved");
        }
        else{
            reject("failure: data rejected");
        }
    })
};

savetodb("apna college")
.then((result)=>{
    console.log(result);
    console.log("data 1 saved");
    return savetodb("rohit romeo");
})
.then((result)=>{
    console.log(result);
    console.log("data 2 saved");
    return savetodb("utkarsh pal");
})
.then((result)=>{
    console.log(result);
    console.log("data 3 saved");
})
.catch((error)=>{
    console.log(error);
    console.log("data rejected");
})