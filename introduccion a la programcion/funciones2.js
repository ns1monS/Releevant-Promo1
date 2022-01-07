/*
2.- Escribe un método que, dandole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
*/

const prompt = require("prompt-sync")();

function clockAngle (clockmin) {
    let minuteAngle = clockmin * 6;
    console.log(`El angulo formado es ${minuteAngle}`)
}

clockAngle(15)
 
