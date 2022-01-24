function factura (cliente,elementos ){
    this.cliente = cliente;
    this.elementos = elementos;



    this.base_imponible = 0;
    this.iva = 0.21;
    this.total = 0;
    this.forma_de_pago = "Contado";

    this.contartotal = function () {
       this.total =  this.base_imponible + (this.base_imponible * this.iva)
    }

}


function cliente (nombre,direccion,telefono,nif) {
        this.nombre = nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.nif = nif ;
}

function empresa(nombre,direccion,telefono,cif) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.cif = cif
}


let cliente1 = new cliente["paco", "avn reyes catolicos",664365372,3659721 ];
let empresa1 = new empresa["asaguilar","avn los reales", 8496161,44941];
let factura1 = new factura[cliente1,"una factura",35,0.21,200,"contado"];

let cliente2 = new cliente["paco", "avn reyes catolicos",664365372,3659721 ];
let empresa2 = new empresa["asaguilar","avn los reales", 8496161,44941];
let factura2 = new factura[cliente1,"una factura",35,0.21,200,"contado"];

let cliente3 = new cliente["paco", "avn reyes catolicos",664365372,3659721 ];
let empresa3 = new empresa["asaguilar","avn los reales", 8496161,44941];
let factura3 = new factura[cliente1,"una factura",35,0.21,200,"contado"];

let arrayClientes = [cliente1,cliente2,cliente3]
let arrayFacturas = [factura1, factura2, factura3]
let arrayEmpresas = [empresa1, empresa2,empresa3]

for (let index = 0; index < array.length; index++) {
    arrayEmpresas[index]
    arrayClientes[index]
    arrayFacturas[index]
}