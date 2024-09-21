function savetodb(data,success,failure){
    let intspeed=Math.floor(Math.random()*10 +1);
    if(intspeed>4){
        success();
    }else{
        failure();
    }
}

savetodb("ashutosh",()=>{
    console.log("data saved");
    savetodb("apna college",()=>{
        console.log("data1 saved");
    },()=>{
        console.log("data1 not saved");
    })
},()=>{
    console.log("data not saved");
})