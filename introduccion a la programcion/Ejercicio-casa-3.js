const prompt = require("prompt-sync")();

let number = Number(prompt("Introduce primer numero: "));
let number2 = Number(prompt("Introduce segundo numero: "));
let number3 = Number(prompt("Introduce tercer numero: "));

if (number < number2) {
    if (number2 < number3) {
      console.log("El segundo numero es el mayor", number2);
    } else {
      console.log("El tercer numero es el mayor", number3);
    }
  } else if (number > number2) {
    if (number > number3) {
      console.log("El primer numero es el mayor", number);
    } else {
      console.log("El tercer numero es el mayor", number3);
    }
  } else {
    console.log("Son iguales");
  }