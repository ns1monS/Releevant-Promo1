/*Construir un algoritmo que te permita calcular la temperatura teniendo en cuenta el 
número de sonidos emitidos por un grillo (en época de apareamiento) en un minuto, es una 
función que depende de la temperatura. Como resultado de esto, es posible determinar el 
nivel de temperatura haciendo uso de un grillo como termómetro.
La fórmula es:
T = N / 4 + 40, donde T es la temperatura en grados centígrados y N es el número de 
sonidos emitidos por minuto.
Como el aparato para medir los sonidos puede fallar, hay que tener en cuenta que si el 
número de sonidos es 0, es un error y debe de imprimir “error”.
*/

const prompt = require("prompt-sync")();

let N = prompt("Cuantos pitido han hecho los grillos fornicadores?: ");

T = N / 4 + 40;

if (N <= 0 ){
    console.log("error ");
}else {
    console.log("La temperatura es: ",T);
} 