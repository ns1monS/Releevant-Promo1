const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce primer numero: "));
let number2 = Number(prompt("Introduce segundo numero: "));

const suma = number1 + number2;
const resta = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;
const producto = number1 % number2;

console.log("La suma es: ",suma);
console.log("La resta es: ",resta);
console.log("La multiplicacion es: ",mult);
console.log("La division es: ",div);
console.log("el producto es: ",producto);


