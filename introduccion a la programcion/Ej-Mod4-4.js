//-Crear una función “main” que pida dos números y la operación a realizar*/
const prompt = require("prompt-sync")();


let first = Number(prompt("Introduce primer numero: "));
let second = Number(prompt("Introduce segundo numero: "));
let calc = prompt("Introduce que operacion se va a realizar: ");
let calculo = 0;
function main(){
    if (calc === "+"){
        calculo = first + second;
        
    }else if (calc === "-"){
       calculo = second - first
       
    }else {
        console.log("resultado no valido");
    }
    
    return calculo
 }

main()
    console.log(calculo)

    assert(main(1,1,"suma"),2,"1+1=2");
    function assert(value, expected,infoOnError) {
            if (value === expected){
                    console.log("Passed!");
            }else{
                console.log("failed!,"+infoOnError);
            }
    }