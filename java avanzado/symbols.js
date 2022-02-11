let producto = {
        nombre: "pepe",
        apellidos: "Contreras Carretero",
        direccion: "C/ Malaga 12, 4D"

}

producto.id = Symbol("id");
Symbol("id") == Symbol("id");

console.log(producto.id)

console.log(Symbol("id") == Symbol("id"));