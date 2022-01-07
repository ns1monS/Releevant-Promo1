//Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima el 
//promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 5, y la 
//palabra “no aprobado” en caso contrario.

const prompt = require("prompt-sync")();
    
    let calificacion1 = Number(prompt("Introduce primera nota: "));
    let calificacion2 = Number(prompt("Introduce segunda nota: "));
    let calificacion3 = Number(prompt("Introduce tercera nota: "));
    let calificacion4 = Number(prompt("Introduce cuarta nota: "));
    let calificacion5 = Number(prompt("Introduce quinta nota: "));

let suma = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) ;
let promedio = suma / 5;

if (promedio <=5) {
    console.log("aprobado");
}else{
    console.log("Suspenso");
}

