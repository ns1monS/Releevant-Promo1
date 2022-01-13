// Crear un array desordenado
// Verificar que numeros son mayores y menores e intercambiarlos para ordenar el array
// Imprimir por pantalla el array ya ordenado.

const array = [5, 3, 1, 4, 2];

function bubblesort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];

        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

let start = new Date().getMilliseconds();

console.log(bubblesort(array));

let end = new Date().getMilliseconds();
let elapsed = end - start;

console.log(`Algoritmo bubblesort ha tardado ${elapsed} milisegundos`);

console.log(array);