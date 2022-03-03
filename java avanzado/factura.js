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
        this.mostrartotal = function () {
            console.log(this.total);
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


let cliente1 = new cliente("paco", "avn reyes catolicos",664365372,3659721 );
let empresa1 = new empresa("asaguilar","avn los reales", 8496161,44941);
let factura1 = new factura(cliente1,"una factura",35,0.21,200,"contado");

factura1.base_imponible=35;

let cliente2 = new cliente("paco", "avn reyes catolicos",664365372,3659721 );
let empresa2 = new empresa("asaguilar","avn los reales", 8496161,44941);
let factura2 = new factura(cliente2,"una factura",35,0.21,200,"contado");

factura2.base_imponible=105;

let cliente3 = new cliente("paco", "avn reyes catolicos",664365372,3659721 );
let empresa3 = new empresa("asaguilar","avn los reales", 8496161,44941);
let factura3 = new factura(cliente3,"una factura",35,0.21,200,"contado");

factura3.base_imponible=55;


let arrayClientes = [cliente1,cliente2,cliente3]
let arrayFacturas = [factura1, factura2, factura3]
let arrayEmpresas = [empresa1, empresa2,empresa3]

for (let index = 0; index < arrayFacturas.length; index++) {
    arrayFacturas[index].contartotal ();
    arrayFacturas[index].mostrartotal ();
}