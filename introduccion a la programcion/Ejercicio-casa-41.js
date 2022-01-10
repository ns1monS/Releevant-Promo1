/**
 * Dado un array de N números enteros que se generen aleatoriamente, hacer un 
algoritmo que:
a) Obtenga cuántos números son mayores que 0.
b) Calcule el promedio de los números positivos.
c) Obtenga el promedio de todos los números.
 */

let contador = 0;
let num = [];
let positive = [];
let sum = 0;
let totalSum = 0;

function fullNumbers(n) {
  for (let i = 0; i < n; i++) {
    num[i] = Math.floor(Math.random() * n);
    totalSum += num[i];
  }

  for (let j = 0; j < n; j++) {
    if (num[j] > 0) {
      contador++;
      positive[j] = num[j];
      sum += positive[j];
    }
  }

  return num;
}

console.log(fullNumbers(5));
console.log(positive);
console.log(sum / contador);
console.log(totalSum / num.length); 