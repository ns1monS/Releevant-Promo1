/*
Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se 
calcula según el siguiente criterio: la parte práctica vale el 10%; la parte de problemas vale 
el 50% y la parte teórica el 40%. El algoritmo leerá el nombre del alumno, las tres notas, 
escribirá el resultado y volverá a pedir los datos del siguiente alumno hasta que el nombre 
sea una cadena vacía. Las notas deben estar entre 0 y 10, si no lo están, no imprimirá las 
notas, mostrará un mensaje de error y volverá a pedir otro alumno.
*/


const prompt = require("prompt-sync")();


let alumno = prompt("Introduce nombre del alumno: ");
while (!alumno ==("")) {
    
let np = prompt("Introduce la nota practica: ");
let npro = prompt("Introduce la nota de problemas: ");
let nt = prompt("Introduce la nota de teoria: ");


if ((np<=10 && np>=0) && (npro<=10 && npro>=0) && (nt<=10 && nt>=0)) {

    console.log("El alumno",alumno);
    console.log("La nota practica es",np);
    console.log("La nota de problemas es",npro);
    console.log("La nota de teoria es ",nt); 
   
    np=np*0.1;

    npro=npro*0.5;
    
    nt=nt*0.4;
    
    notafinal=np+npro+nt;

    console.log("La nota final es",notafinal);
} else {
    console.log("Has escrito una nota incorrecta, vuelve a intentarlo");

}

console.log("Introduce el nombre de otro alumno");

}