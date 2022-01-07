/*
Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de 
asteriscos con ese tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el 
interior.
Ejemplo, para lado = 4 escribiría:
* * * *
*      * 
*      *   
* * * *
Recuerda la estructura repetitiva For.
*/

const prompt = require("prompt-sync")();

let n = Number(prompt("Introduzca el valor del lado"))

       
        if(n >= 0 && n<=50) {
            //Linea superior
            for(  i = 1; i <=n; i++) {
                let form = "*";
                console.log(form);
            }
            
        
            //centro de la forma
            for( i = 0; i < n-2; i++) {
                console.log("*");
                for( j = 0; j < n-2; j++) {
                    console.log(" ");
                }
                console.log("*");
            }
           
            //Linea inferior
            for( i = 1; i <= n; i++) {
                let form = "*";
                console.log(form);
            }
        }else {
            console.log("Error. El dato a ingresar de "
                     ,"estar entre 0 y 50");
        }
               
 
    
