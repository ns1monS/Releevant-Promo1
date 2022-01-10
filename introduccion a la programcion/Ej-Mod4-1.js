/*Ejercicio (uso de funciones):
Crear un programa que reutilice código tal que:
-Crear una función suma que sume dos números de entrada
-Crear una función resta que reste dos números (el primer numero tiene que ser mayor que el segundo)
-Crear una función “main” que pida dos números y la operación a realizar*/
const prompt = require("prompt-sync")();


let first = Number(prompt("Introduce primer numero: "));
let second = Number(prompt("Introduce segundo numero: "));

function sumar(){

   suma = first + second;
   return suma
 }

sumar()
    console.log(suma)