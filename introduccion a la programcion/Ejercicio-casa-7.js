//Ejercicio
//Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero 
//entregado, calcule e imprima el cambio que se debe entregar al cliente.

const prompt = require("prompt-sync")();

let dinero = prompt("Deposite dinero: ");

let artículo = 30;
let resta = artículo - dinero;
let total = resta - falta;
let falta = 0;

if (dinero < artículo){
    let falta = prompt("le falta dinero deposite",resta,"para completar el pago");
    if (falta < resta){
        console.log("pago insuficiente");
       
    }
    else{
        console.log("pago completado,la vuelta son: ",total);
    }
}else {
    console.log("pago completado,la vuelta son: ",resta);
}
    
