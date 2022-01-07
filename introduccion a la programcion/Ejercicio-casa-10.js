//Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el 
//aumento de sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la 
//categoría del trabajador y su nuevo sueldo

const prompt = require("prompt-sync")();

let A = prompt("Introduzca sueldo del trabajador: ");
let clase1 = A * 1.15
let clase2 = A * 1.10
let clase3 = A * 1.06
let clase4 = A * 1.03

if (A <= 500){
    console.log("Pertenece a la categoria a 1 y con su incremento queda con",clase1)
}else if (A <= 1000) {
    console.log("Pertenece a la categoria a 2 y con su incremento queda con",clase2)
}else if (A <=1500) {
    console.log("Pertenece a la categoria a 3 y con su incremento queda con",clase3)
}else if (A >1500) {
    console.log("Pertenece a la categoria a 4 y con su incremento queda con",clase4)
}else {
    console.log("no es valido")
}
