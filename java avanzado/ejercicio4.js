
function proveedor(nombre,email,telefono) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
}

let proveedor1 = new proveedor("orange","gmail.com",666433587 )
let proveedor2 = new proveedor("apple","gmail.com",666433587 )
let proveedor3 = new proveedor("samsung","gmail.com",666433587 )
let proveedor4 = new proveedor("dacia","gmail.com",666433587 )




this.datosProveedor = function () {
    console.log (`el proveedor es ${this.proveedor.nombre} y el telefono es ${this.proveedor.telefono}`)
}

function articulo(nombre,proveedor,precio) {
    this.nombre = nombre;
    this.proveedor = proveedor;
    this.precio = precio;
    this.telefono = function () {
         console.log(this.proveedor.nombre,this.proveedor.telefono);
    };
}



let articulo1 = new articulo("bolsa",proveedor1,30);
let articulo2 = new articulo("bolsa",proveedor1,40);
let articulo3 = new articulo("bolsa",proveedor1,50);
let articulo4 = new articulo("bolsa",proveedor1,340);

let arrayArticulo = [articulo1,articulo2,articulo3,articulo4]
 

for (let index = 0; index < arrayArticulo.length; index++) {
            arrayArticulo[index].telefono() 
            let sum = arrayArticulo[index].precio +=  arrayArticulo[index].precio;
            let media = sum / arrayArticulo.length ;
            console.log(media);


}
