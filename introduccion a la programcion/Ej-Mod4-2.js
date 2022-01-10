/*-Crear una función resta que reste dos números (el primer numero tiene que ser mayor que el segundo)
-Crear una función “main” que pida dos números y la operación a realizar*/
const prompt = require("prompt-sync")();


let first = Number(prompt("Introduce primer numero: "));
let second = Number(prompt("Introduce segundo numero: "));
let resta = 0;
function rest(){
    if (first > second){
        resta = first - second;
    }else{
       resta = second - first
    }
    return resta
 }

rest()
    console.log(resta)