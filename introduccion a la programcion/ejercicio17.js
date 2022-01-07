const prompt = require("prompt-sync")();

let N = Number(prompt("Introduce la variable N: "));

let count = 0;
let sum = 0;

while (count < N) {
    sum = sum + count;
    count = count + 1
}

console.log(sum)