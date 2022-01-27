/*
Implementar un algoritmo que reciba un string password y encripte en un string diferente.

function enctiptar(password) {
    let passwordEncriptada;

    // codigo de encriptacion

    return passwordEncriptada;
}

por ejemplo, encriptar('mipassword') debe devolver 'drbrdwsdtp'

Para encriptar la password el algoritmo deber realizar las siguientes tareas:

1. Empezar con una baraja ordenada tal que (digamos que el primer palo de la baraja es oro entonces baraja[0] representa 1 de oro, baraja[11] representa la ultima carta del oro y baraja[12] representa la carta 1 del siguiente palo, y asi hasta cubrir los 4 palos de la baraja

let baraja [1, 2, 3, 4, 5, ..., 12, 1, 2, 3, ....12, 1, 2, ...];

2. Usar un array con el alfabeto para intercambiar letras del password indicado tal que

let alfabeto = ['A' , 'B', 'C', ..., 'Y', 'Z', 'a', 'b', 'c', ..., 'z'];

3. Barajar la baraja para desordenar las cartas

4. Iterar letra a letra la variable password indicada

5. Por cada letra, obtener la posicion de la letra en el alfabeto, por ejemplo let posicion = alfabeto['A'] = 0;

6. Obtener el valor del elemento de la baraja en la posicion obtenida en la posicion anterior tal que let valor = baraja[alfabeto['A]];

7. Usar la variable valor del paso anterior para obtener la letra que sustituye la letra en la iteracion actual, passwordEncriptada[i] = alfabeto[baraja[alfabeto['A']];

8. Una vez completadas todas las iteraciones devolver la nueva password

*/

let alfabeto = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N"
    ,"O","P","Q","R","S","T","U", "W","X","Y","Z"
    ,"a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z",
  ];
  
  let baraja = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ];

let temp = 0;


for (let index = 0; index < baraja.length; index++) {
   let random =  Math.floor((Math.random())*baraja.length)
  temp = baraja[index];
  baraja[index] = baraja[random];
  baraja[random] = temp;
  
}

let posicion = 0;
console.log(baraja)
let newPassword = "";

let password = ["m","a","c","a","r","e","n","a"];

for (let index = 0; index < password.length; index++) {
    for (let j = 0; j < alfabeto.length; j++) {
        if (password[index] == alfabeto[j]){
               posicion = j;
            
        }

    }
    let valor = baraja[posicion]
    console.log(valor);
    
    newPassword += alfabeto[valor];
    console.log(newPassword)
}



















