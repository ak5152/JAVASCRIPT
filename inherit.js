let data="secret information";

class user{
    constructor(name,email){
           this.name=name;
           this.email=email;
    }
    viewdata(){
        console.log("data information",data);
    }
}

let student1=new user("ashutosh","ashuvns2004@gmail.com");
let student2=new user("dhoni","dhonighz2007@gmail.com");


class admin extends user{
    constructor(name,email){
         super(name,email);
    }

    editdata(){
        data="data edited";
    }
}
let admin1=new admin("admin","adminvns2004@gmail.com");