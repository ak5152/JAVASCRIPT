const student={
    hindi:45,
    eng:44,
    math:23,
    sans:21,
    avg(){
        let avg=(this.hindi+this.eng+this.math+this.sans)/4;
        console.log(avg);
    }
};