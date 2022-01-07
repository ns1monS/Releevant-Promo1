const prompt = require("prompt-sync")();
console.log(`Seleccione el numero de una de las siguientes opciones/n
    1.- Sumar /n
    2.- Restar /n
    3.- Multiplicar /n
    4.- Dividir /n
    5.- Salir del programa`);
option = Number(prompt("Introduce una opcion del menu: "));


if (option >= 1 || option <= 5 ) {
    const number = Number(prompt("Introduce primer numero: "));
    const number2 = Number(prompt("Introduce segundo numero: "));

    switch (option) {
        case 1:
            result = number + number2
          break;
          case 2:
              result = number - number2 
          break;
          case 3:
              result = number * number2
          break;
          case 4:
                result = number / number2
          break;
      }
        console.log (result)

    }   else if (option === 5) {
        console.log("Hasta luego")
    } else
        Number(prompt("Introduce un caracter valido: "));







  
