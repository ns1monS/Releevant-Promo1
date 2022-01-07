/**
 * Escribe una función que tome un array de numeros enteros de mas de 3 elementos
 * y retorne true si 3 elementos consecutivos suman 7
 */

let numeros= [1,2,2,8,2,3];

function find7(arrayNumeros) {
    if (arrayNumeros.length < 3){
        console.log("No es valido");
    }
    for (let index = 0; index < arrayNumeros.length; index++) {
        if ((arrayNumeros[index] + arrayNumeros[index + 1] + arrayNumeros[index - 1]) === 7){
            return true;
        }  
    }
    return false;
}

console.log(find7(numeros))