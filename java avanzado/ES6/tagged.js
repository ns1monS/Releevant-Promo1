/*function init() {
    function useless(strings, ...values){
        return `i render ${strings[0]}everything useless.`;
}

let name = 'Benedict';
let profesion = 'Being awesome';

let sentenc = useless `hi i'm ${name} and i'm busy at ${profesion}`;

document.getElementById(profesion)

console.log(sentenc)
}
*/


function obtener(){
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let profesionUsuario = document.getElementById("profesionUsuario").value;
    let texto = document.getElementById("texto");
    texto.innerHTML= obtenerTexto `${nombreUsuario} ${profesionUsuario}`;

}
function obtenerTexto (strings, ...values){
    if (values.length < 2 ){
        console.log("no hay suficientes valores");
        return `error`;
    }
        let nombre = values[0];
        let profesion = values[1];

        return `hola soy ${nombre} y me dedico a ${profesion}`;
}