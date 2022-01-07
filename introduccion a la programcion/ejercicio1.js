//Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma.

const prompt = require("prompt-sync")();

let A = prompt("Introduce la variable A: ");
let B = prompt("Introduce la variable B: ");
let C = prompt("Introduce la variable C:" );

console.clear()

mult = A * B * C;
sum = A + B + C;

if (A < 0 ) {
    return console.log("El producto de los 3 es",mult);
}else {
    return console.log("La suma  de los 3 es",sum);
}

