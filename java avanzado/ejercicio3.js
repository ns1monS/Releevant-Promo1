function Bus (capacidad, pasajeros,conductor) {
    this.capacidad = capacidad;
    this.conductor = conductor;
    this.pasajeros = 0;
    
    this.subir = function (pasajerosSubir) {
        if(this.pasajeros + pasajerosSubir > this.capacidad){
             pasajerosFuera = pasajerosSubir + this.pasajeros - this.capacidad 
            this.pasajeros += capacidad - this.pasajeros;
            console.log("el bus esta lleno no caben mas")
            console.log(`En el bus hay ${this.pasajeros}`) 
            console.log( `Se han quedado fuera ${pasajerosFuera} pasajeros`)
        }else {
          this.pasajeros += pasajerosSubir;
        }
        console.log(`En el bus hay ${this.pasajeros} pasajeros`);   
    }
    this.bajar = function(pasajerosBajar) {
        if (this.pasajeros - pasajerosBajar > 0) {
            this.pasajeros -= pasajerosBajar;
            
            console.log(`Han bajado ${pasajerosBajar} Pasajeros`)
            console.log(`Quedan ${this.pasajeros} pasajeros`)
        }

    }

}

function conductor (nombre,licencia){
    this.nombre = nombre;
    this.licencia = licencia;
}

let conductor1 = new conductor("Antonio",3659);
let conductor2 = new conductor("toni",4659);

let bus1 = new Bus(50 , conductor1);
let bus2 = new Bus(75 , conductor2);

bus1.subir(20);
bus1.subir(5);
bus1.subir(30);

bus1.bajar(6);
bus1.bajar(10);
bus1.bajar(2);
