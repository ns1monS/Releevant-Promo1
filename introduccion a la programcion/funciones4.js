/*
ruleta de la mala suerte
*/

const prompt = require("prompt-sync")();

let alumnos = ["Noel","Juan","Angel","Vera","Antonio","Paula","Dani","Mamen","Francesco"]

function getChampion(arrayNombres) {
    let random = Math.floor(Math.random() * arrayNombres.length);
    for (let index = 0; index < arrayNombres.length; index++){
        if (index === random){
            console.log(arrayNombres[index]);
        }
    }
}

getChampion(alumnos)

        