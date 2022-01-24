function producto_alimenticio (codigo,nombre,precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;

this.imprimedatos = function () {
    console.log("codigo: "+
                this.codigo +
                 "Nombre: "+
                 this.nombre +
                "Precio: "+
                this.precio);
}
}

let producto1 = new producto_alimenticio(1,"Puerro",1.25)
let producto2 = new producto_alimenticio(2,"Peras",3.85)
let producto3 = new producto_alimenticio(3,"arroz",10.85)

let array = [producto1,producto2,producto3]

for (let index = 0; index < array.length; index++) {
    array[index].imprimedatos ();
}



/*
producto1.imprimedatos();
producto2.imprimedatos();
producto3.imprimedatos();
*/
