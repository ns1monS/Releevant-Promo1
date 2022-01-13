// Algoritmo que lea un numero entero (lado) y a partir de el crree un cuadrado
// de asteriscos con ese tamaño. Los asteriscos solo se verán en el borde del cuadrado, no en el interior
/**
 *  Ejemplo: para lado = 4 escribiría
 *    * * * *
 *    *     *
 *    *     *
 *    *     *
 *    * * * *
 *  Recuerda la estructura repetitiva "For"
 */

const numero = 4;

function asterisco(forma) {
  let cuadrado = "";
  for (let i = 0; i < forma; i++) {
    cuadrado += " ";
  }
  return cuadrado;
}

function asteriscoMedio(forma) {
  let cuadrado = "";

  for (let i = 0; i < forma; i++) {
    if (i === 0 || i === forma - 1) {
      cuadrado += "* ";
    } else {
      cuadrado += "  ";
    }
  }

  return cuadrado;
}
console.log(asterisco(numero));
for (let i = 1; i < numero - 1; i++) {
  console.log(asteriscoMedio(numero));
}
console.log(asterisco(numero));