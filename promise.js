function savetodb(data){
    return new Promise((resolve,reject)=>{
        let intspeed=Math.floor(Math.random()*10 +1);
        if(intspeed>4){
            resolve("data saved");
        }else{
            reject("data not saved");
        }
    })
};
savetodb("apnacollege")
.then(()=>{
    console.log("data 1 saved: promise was resolved");
    savetodb("romeo")
    .then(()=>{
        console.log("data 2 saved : promise was resolved");
    })
    .catch(()=>{
        console.log("promise 2 rejected");
    })
})
.catch(()=>{
    console.log("promise was rejected");
})
