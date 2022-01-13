// Dada una lista de elementos y el elemento a buscar
// El algoritmo debe recorrer la lista desde el primer elemento
// al siguiente hasta encontrar el elemento a buscar

let numbers = [4, 3, 12, 9, 1, 8, 11];
let objetivo = 13;

function secuencial(find) {
  let position = `${objetivo} No encontrado`;
  for (let i = 0; i < find.length; i++) {
    if (numbers[i] === objetivo) {
      position = i;
    }
  }
  return position;
}

console.log(secuencial(numbers));