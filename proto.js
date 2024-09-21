class toyotacar{
    constructor(brand,milage){
        console.log("creating new object");
        this.brandname=brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}

let fortuner=new toyotacar("fortuner",10);  /* method of making class as object */
console.log(fortuner);
let swift=new toyotacar("safari",15);
console.log(swift);