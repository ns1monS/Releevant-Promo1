
let total = 10000;
let array = [];

for (let index = 0; index < total; index++) {
       let  arrayRandom = (Math.floor(Math.random()*10000));
    array[index] = arrayRandom
}

function sumaPositivosAsync(...array) {

    let p = new Promise(function(resolve,reject){

for (let index = 0; index < array.length; index++) {
    
    if (array[index] >= 0) {
        resolve("Los números son positivos");
    
}else{
    reject('los numeros indicados no son positivos');
}
    
};
  
    });
    return p;
}
sumaPositivosAsync(...array)
    .then(ok)
    .catch(error);

    function error(err){
        console.log('Error: ',err);
    }
    function ok(result){
        console.log('OK: ', result);
    }
