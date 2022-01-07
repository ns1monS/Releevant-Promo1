/* 
Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha 
válida. Si no es válida escribir un mensaje de error y volver a pedir los números. Si es 
válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 
2006, se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0. (Recuerda 
la estructura switch). 
*/

const prompt = require("prompt-sync")();

let d = prompt("Introduzca dia: ");

let m = prompt("Introduzca mes: ");

let a = prompt("Introduzca año: ");

if (d<1 || d>31){
    console.log("Día fuera de rango");
}
if (m<1 || m>12){
    console.log("mes fuera de rango");
}
if (a<1){
    console.log("año fuera de rango");
}
nombremes = "";
switch (m) {
    case 1:
        nombremes = "enero" ;
        break;
     case 2:
        nombremes = "febrero" ;
        break;
     case 3:
        nombremes = "marzo" ;
        break;
     case 4:
        nombremes = "abril" ;
        break;
     case 5:
        nombremes = "mayo" ;
        break;
     case 6:
        nombremes = "junio" ;
        break;
     case 7:
        nombremes = "julio";
        break;
     case 8:
        nombremes = "agosto";
        break;
     case 9:
        nombremes = "septiembre";
        break;
     case 10:
        nombremes = "octubre" ;
        break;
     case 11:
        nombremes = "noviembre";
        break;
     case 12:
         nombremes = "diciembre";
        break;
     default:
                nombremes = "no es valido";
        
}

console.log(d,"de",nombremes,"del año",a)
