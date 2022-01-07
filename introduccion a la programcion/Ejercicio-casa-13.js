/*Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo 
calcule el perímetro y la superficie del mismo.
Superficie= base*altura
Perímetro = 2*(base + altura)
Comprobar los resultados con varios datos de entradas diferentes.
*/
const prompt = require("prompt-sync")();

let A = prompt("Introduzca altura del rectangulo: ");
let B = prompt("Introduzca base del rectangulo: ");

let superficie = A * B ;
let perimetro = 2 * (A + B);

console.clear()
console.log("La superficie es: ",superficie, "y su perimetro es: ",perimetro);
