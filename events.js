let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form submitted");
    /*now to access the value being input in input box */
    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
})