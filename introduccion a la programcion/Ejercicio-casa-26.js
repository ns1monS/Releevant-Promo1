/*
Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno 
de ellos. En cada lectura, tiene que indicar por pantalla el número que está pidiendo. 
Ejemplo de salida por pantalla:
Introduce el número 1º.
➢8
El cubo de 8 es 512. 
Introduce el número 2º.
*/

const prompt = require("prompt-sync")();

let primer = prompt("Introduce el número 1º : ");
    const primercubo = (primer * primer)*primer;
    console.log("El cubo de",primer,"es",primercubo);

let segundo = prompt("Introduce el número 2º : ");
    const segundocubo = (segundo * segundo)*segundo;
    console.log("El cubo de",segundo,"es",segundocubo);

let tercero = prompt("Introduce el número 3º : ");
    const tercercubo = (tercero * tercero)*tercero;
    console.log("El cubo de",tercero,"es",tercercubo);

let cuarto = prompt("Introduce el número 4º : ");
    const cuartcubo = (cuarto * cuarto)*cuarto;
    console.log("El cubo de",tercero,"es",cuartcubo);

let quinto = prompt("Introduce el número 5º : ");
    const quintocubo = (quinto * quinto)*quinto;
    console.log("El cubo de",quinto,"es",quintocubo);

let sexto = prompt("Introduce el número 6º : ");
    const sextocubo = (sexto * sexto)*sexto;
    console.log("El cubo de",sexto,"es",sextocubo);


let septimo = prompt("Introduce el número 7º : ");
    const septocubo = (septimo * septimo)*septimo;
    console.log("El cubo de",septimo,"es",septocubo);

let octavo = prompt("Introduce el número 8º : ");
    const octocubo = (octavo * octavo)*octavo;
    console.log("El cubo de",octavo,"es",octocubo);

let noveno = prompt("Introduce el número 9º : ");
    const novcubo = (noveno * noveno)*noveno;
    console.log("El cubo de",noveno,"es",novcubo);

let decimo = prompt("Introduce el número 10º : ");
    const decubo = (decimo * decimo)*decimo;
    console.log("El cubo de",decimo,"es",decubo);


