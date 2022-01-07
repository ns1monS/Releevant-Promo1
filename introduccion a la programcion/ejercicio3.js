/*Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
Pista: para determinar el resto de una división, se usa la operación módulo %. 
*/

const prompt = require("prompt-sync")();

let A = prompt("Introduce la variable A: ");

console.clear()

if (A % 2 === 0){
    return console.log(A,"Es un par");
} else if (A === 0){
    return console.log(A,"Es nulo");    
}
     else{
    return console.log(A,"Es un numero impar");
}