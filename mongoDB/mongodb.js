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
consulta("ecommerce","ventas",{},function(venta) {
         console.log(venta.usuario.nombre, venta.metodoPago)
     }) //function(){
    //     desconectar(function(){
    //         console.log("Desconectado de ecommerce")
    //     })
    // },logError;
}, logError);



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


