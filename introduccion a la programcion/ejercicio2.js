//Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo, negativo o nulo.

const prompt = require("prompt-sync")();

let A = prompt("Introduce la variable A: ");

console.clear()

if (A > 0){
    return console.log(A,"Es un numero positivo");
} else if  (A < 0){ 
    return console.log(A,"Es un numero negativo");
} else {
    return console.log(A,"Es un numero neutro");
}