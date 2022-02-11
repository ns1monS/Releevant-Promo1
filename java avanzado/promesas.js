function promesa (ok){

let p = new Promise(function(resolve,reject){
    if (ok){
            resolve('Trabajo completado');
    }else{
            reject('ERROR , no se pudo reealizar la tarea');
    }
});
    return p;
}

promesa(true).then(function(texto) {
        console.log(texto);
}).catch(function(texto) {
    console.log(texto);
});

promesa(false).then(function(texto) {
    console.log(texto);
}).catch(function(texto) {
console.log(texto);
});

