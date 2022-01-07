const prompt = require("prompt-sync")();

let A = Number(prompt("Introduce la variable A: "));
let B = prompt("Introduce la variable B: ");

console.clear()
if (A != B){

    return console.log(A,"y",B," No son iguales");

}else {

    return console.log(A,"y",B," son iguales");
}