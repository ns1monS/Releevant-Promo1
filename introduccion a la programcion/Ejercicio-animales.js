//Segun el ruido que hace cada animal, tenemos que sacar por pantalla el animal que es,
// resultdo esperado:
/**
 * perro
 * pajaro
 * gato
 *  */
const animals = [
  { name: "Wall", legs: 4, noise: "guau" },
  { name: "piolin", legs: 2, noise: "pio" },
  { name: "misi", legs: 4, noise: "miau" },
];
function zoo(arrayAnimals) {
    for (let index = 0; index < arrayAnimals.length; index++) {
      /*  if ( arrayAnimals[index].noise === "guau"){
            console.log ("perro");
        } else if ( arrayAnimals[index].noise === "pio"){
            console.log ("pajaro");
        }else
        console.log ("gato");
     */
        switch (arrayAnimals[index].noise) {
            case "guau":
                console.log("perro")
                
                break;
            case "pio":
                 console.log("gato")
                    
                 break;
            case "miau":
                 console.log("pajaro")
                        
                 break;
            default:
                console.log("no valido")
                break;
        }




    }
}

zoo(animals)