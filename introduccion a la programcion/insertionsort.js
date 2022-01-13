// Se parte de una lista vacía y se inserta el primer elemento
// Luego se pasa al segundo elemento y se busca donde insertarlo en la lista creada
// Se repite el mismo proceso hastta recorrer todos los elementos de la lista inicial
// Complejidad O(n^2)

const numbers = [4, 3, 12, 1, 8, 9];
let order = [];

function insertionsort(num) {
  order[0] = num[0]; // order es igual a [4]
  //for (let i = 0; i < nu.length; i++) {
  if (order[0] > num[1]) {
    //¿4 es mayor que 3?
    order[1] = order[0]; // order = [4, 4]
    order[0] = num[1]; // order = [3, 4]
  } else {
    order[1] = num[1];
  }
  if (order[0] > num[2]) {
    // ¿Es 3 mayor que 12? NO
    order[2] = order[1];
    order[1] = order[0];
    order[0] = num[1];
  } else {
    order[2] = num[2]; // order = [3, 4, 12]
  }
  //}
  return order;
}

console.log(insertionsort(numbers));
let numeros = [8, 5, 12, 3]

function sort(num) {
    let resultado = [];

    resultado[0] = num[0];

    for (let i = 1; i < num.length; i++) {  // i = 3, resultado = [5, 8, 12]
        let posicion = resultado.length;    // posicion = 3
        let j = 0;
        let continuar = true;

        while (continuar && j < resultado.length) { // j = 3; j < 3; ++
            if (resultado[j] > num[i]) {   // resultado[2] = 12 > num[3] = 3; si
                posicion = j;
                continuar = false;            // posicion = 2
            }

            j++;
        }

        for (let j = resultado.length - 1; j >= posicion; j--) {  // j = 3 - 1 = 2; j >= 2
            resultado[j + 1] = resultado[j]; // resultado[2+1] = resultado[2], resultado = [5, 8, 12, 12]
        }

        resultado[posicion] = num[i]; // resultado[2] = num[3] = 3 -> resultado = [5, 8, 3, 12]
    }

    return resultado;
}

console.log(sort(numeros));