/**
 * Seleccionar una opcion de las dadas para hacer una operacion con dos numeros
 */

 const prompt = require("prompt-sync")();
 const result;
 //Creamos un menu ficticio a traves de un console.log
 
 console.log(Seleccione el numero de una de las siguientes opciones\n
                 1.- Sumar \n
                 2.- Restar \n
                 3.- Multiplicar \n
                 4.- Dividir \n
                 5.- Salir del programa);
 
 //Guardamos la opcion que introduce el usuario en la variable option
 
 const option = Number(prompt(""));
 
 //Comprobamos que el usuario introduce los numeros bien
 
 if (option > 0 && option < 5) {
     num1 = Number(prompt("Introduce el primer número: "));
     num2 = Number(prompt("Introduce el segundo número: "));
 
     switch (option) {
       case 1:
         result = num1 + num2;
         break;
 
       case 2:
         result = num1 - num2;
         break;
 
       case 3:
         result = num1 * num2;
         break;
 
       case 4:
         result = num1 / num2;
         break;
 
       default:
         console.log("NaN");
     }
 
     console.log(result);
   } else if (option === 5) {
     console.log("hasta luego!");
   } else {
     option = Number(prompt("Por favor, seleccione una opcion valida: "));
   }
 