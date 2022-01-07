const prompt = require("prompt-sync")();

let number = Number(prompt("Introduce primer numero: "));
let number2 = Number(prompt("Introduce segundo numero: "));
let number3 = Number(prompt("Introduce tercer numero: "));

const producto = number * number2 * number3;
const suma = number + number2 + number3;

if (number < 0){
    console.log("El numero es negativo el producto es: ",producto);
}else{
    console.log("El numero es negativo la suma es: ",suma);
}