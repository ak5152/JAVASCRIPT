/* use of lexical scope*/

function outerfun(){
    let x=4;
    let y=2;
    function innerfun(){
        console.log(x);
    }
     innerfun();
}
outerfun();

