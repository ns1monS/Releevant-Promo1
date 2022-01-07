const prompt = require("prompt-sync")();

let A = prompt("Introduce la variable A: ");
let B = prompt("Introduce la variable B: ");

let tmp = A;
A = B;
B = tmp;

console.log(A)
console.log(B)