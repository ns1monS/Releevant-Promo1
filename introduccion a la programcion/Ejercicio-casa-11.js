/*En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la 
compra. El descuento se basa en:
Si el monto es menor que 500€ -> No hay descuento
Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
Más de 15.000€ -> 25% descuento
Imprimir (Escribir) el precio final. 
*/


const prompt = require("prompt-sync")();

let A = prompt("Introduzca sueldo del trabajador: ");
let clase1 = A * 1.05;
let clase2 = A * 1.10;
let clase3 = A * 1.20;
let clase4 = A * 1.25;

if (A < 500){
    console.log("No hay descuento")
}else if (A = 500  &&   A < 1000) {
    console.log("Pertenece a la categoria a 1 y con su incremento queda con",clase1);
}else if (A = 1000  &&   A < 7000) {
    console.log("Pertenece a la categoria a 2 y con su incremento queda con",clase2);
}else if (A = 7000  &&   A < 15000) {
    console.log("Pertenece a la categoria a 3 y con su incremento queda con",clase3);
}else if (A > 15000) {
    console.log("Pertenece a la categoria a 4 y con su incremento queda con",clase4);
}else{
    console.log("no es valido");
}