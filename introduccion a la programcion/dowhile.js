// Ejercicio 20
// Teniendo en cuenta que la clave es “eureka”, escribir un
// algoritmo que nos pida una clave. Solo tenemos 3 intentos
// para acertar, si fallamos los 3 intentos nos mostrara un
// mensaje indicándonos que hemos agotado esos 3 intentos.
// Si acertamos la clave, saldremos directamente del programa.

const prompt = require("prompt-sync")();

B = "eureka"



let tries = 1;
do {
    let A = prompt("Introduce la contraseña correcta: ");
    tries++;
}
while (A !== "eureka" && tries <= 3){
    A = prompt("Introduce la contraseña correcta: ");
    
}

if (tries > 3){
    console.log("te has equivocado mas de 3 veces");
}else{
    console.log("Contraseña correcta");
}