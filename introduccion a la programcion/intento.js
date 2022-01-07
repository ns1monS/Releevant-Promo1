// Ejercicio 20
// Teniendo en cuenta que la clave es “eureka”, escribir un
// algoritmo que nos pida una clave. Solo tenemos 3 intentos
// para acertar, si fallamos los 3 intentos nos mostrara un
// mensaje indicándonos que hemos agotado esos 3 intentos.
// Si acertamos la clave, saldremos directamente del programa.

const prompt = require("prompt-sync")();

B = "eureka"

let A = prompt("Introduce la contraseña correcta: ");

let tries = 1;

while (A !== B && tries < 3){
    if (A == B){
        console.log ("La contraseña es correcta")
    }else {
        console.log ("La contraseña es incorrecta pruebe otra vez")
        tries + 1
    }
}
