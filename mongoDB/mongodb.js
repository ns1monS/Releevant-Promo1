const { MongoClient } = require("mongodb");
// Conectar a la base de datos.
const client = new MongoClient("mongodb://localhost:27017");


function logError(e){
    console.log(e);
}
function conectar (callback, error){
    client.connect()
        .then(callback)
        .catch(error);
}

function desconectar(callback, error){
    client.close()
        .then(callback)
        .catch(error);
}
// filtro => {tipo: "Serie"}
//baseDeDatos
// collection
// execute
// callback
// error

function consulta(baseDeDatos,collection,filtro,execute,callback,error) {
        client.db(baseDeDatos).collection(collection)
            .find(filtro)
            .forEach(execute)
            .then(callback)
            .catch(error)
}

conectar(function(){
consulta("ecommerce","productos",{},function(e) {
         console.log(e)
     }); 
}, logError);


// Ejercicio 1

conectar(function(){
  consulta("ecommerce","ventas",{},function(ventas) {
           console.log("Ejercicio 1" + ventas.usuario.nombre, ventas.tipo_de_pago);
       }); 
  }, logError);

// Ejercicio 2 

conectar(function(){
  consulta("ecommerce","productos",{},function(products) {
           console.log("Ejercicio 2" + products.nombre, products.cantidad_vendida);
       }); 
  }, logError);


// Ejercicio 3 
conectar(function(){
  consulta("ecommerce","productos",{},function(products) {
           console.log("Ejercicio 3" + products.nombre, products.rating);
       }); 
  }, logError);


// Ejercicio 4
conectar(function(){
  consulta("ecommerce","ventas",{},function(ventas) {
           if (ventas.producto.nombre == "Televisior") {
             console.log(
               "Ejercicio 4 " + ventas.producto.nombre,
               ventas.cantidad,
               ventas.usuario.nombre
             );
           }
       }); 
  }, logError);

// Ejercicio 5 


let groupProducts = new Map();
conectar(function () {
  consulta("ecommerce", "ventas", {}, function(ventas) {
    const mayorGanancia = ventas.cantidad * ventas.precio;
    
    if (groupProducts.has(ventas.producto.nombre)) {
      groupProducts.set(ventas.producto.nombre, groupProducts.get(ventas.producto.nombre)+mayorGanancia)
    }else {
      groupProducts.set(ventas.producto.nombre,  mayorGanancia);
    }
  }, 
  function () {
    console.log("Ejercicio5", groupProducts)
  })
})

//Ejercicio 6

let sugarDaddy = new Map();
conectar(function () {
  consulta("ecommerce", "ventas", {}, function(ventas) {

   if (sugarDaddy.has(ventas.usuario.nombre)){
      sugarDaddy.set(ventas.usuario.nombre, sugarDaddy.get(ventas.usuario.nombre)+ ventas.cantidad);
   }else {
      sugarDaddy.set(ventas.usuario.nombre,  ventas.cantidad);
   }
  }, 
  function () {
    let max = ["",0];
    for (const usuario of sugarDaddy) {
      if (usuario[1] > max[1]) {
        max = usuario;
      }

    }
    console.log("Ejercicio 6", max)
  })
})



client
  .connect()
  .then(function () {
    console.log("Conectado a MongoDB!");
    client
      .db("ecommerce")
      .command({ ping: 1 })
      .then(function () {
        console.log("Usando base de datos ecommerce");
        client
          .db("ecommerce")
          .collection("usuarios")
          .find()
          .forEach((e) => console.log(e))
          // ---------------------DESCONECTANDO DE MONGODB!-------------------------------------
          .then(function () {
            client.close().then(function () {
              console.log("Desconectado de ecommerce");
            });
          });
      });
  })
  .catch(function (e) {
    console.log(e);
  });


