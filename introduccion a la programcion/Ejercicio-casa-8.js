//Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de 
//sueldo del 15% si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.

const prompt = require("prompt-sync")();

let A = prompt("Introduzca sueldo del trabajador: ");
const incremento = A * 1.15;


if (A < 1000){
    console.log("el nuevo sueldo es",incremento);
}else{
    console.log("el sueldo ",A,"es adecuo");
}