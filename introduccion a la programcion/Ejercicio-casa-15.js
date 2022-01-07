/*
Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a 
pedir el número por teclado, así hasta que se teclee un número mayor que cero, recuerda 
la estructura while
*/

const prompt = require("prompt-sync")();

let A = prompt("Introduce la variable A: ");

console.clear()
while ( A = 0) {
    let  = prompt("Introduce la variable A: ");

}
if (A % 2 === 0){
    return console.log(A,"Es un par");
} else if (A === 0){
    return console.log(A,"Es nulo");    
}
     else{
    return console.log(A,"Es un numero impar");
}