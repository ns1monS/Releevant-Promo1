const { MongoClient, CURSOR_FLAGS } = require("mongodb");
const express = require("express");
const path = require("path");
const res = require("express/lib/response");
const { response } = require("express");
const app = express();


const client = new MongoClient("mongodb://localhost:27017");


async function conectar() {
  await client.connect()
}

//  async function desconectar (callback, error){
//   await client.connect()
// }




   function obtener(collection, filtro,execute,callback,error,sort = {}, limit = 0) {
    client.db("ecommerce").collection(collection)
    
            .find(filtro)
            .sort(sort)
            .limit(limit)
            .forEach(execute)
            .then(callback)
            .catch(error)         
};

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())

app.get('/test',function(request,response){
  conectar();
   console.log("Conectado a MongoDB");

   let results = new Array();
  obtener("ventas", {}, function(e){
      results.push({nombre: e.producto.nombre, cantidad: e.producto.cantidad})
  }, function (){
    response.send(results);
  },
  function () {
    response.send(error)
  })
});



app.get("/productos", function (request, response) {
  conectar();

  let productos = "" 
  obtener("productos", {},function (results) {
    productos +=
    "<li>" +
    results.nombre +
    ", " +
    results.precio +
    "€, " +
    results.stock +
    " en stock</li>";
  
  }, function(){
    response.send(productos)
  }, function(){
    response.send("Error");
  });

});

app.get("/masgasto", function (request, response) {
});
app.get("/masproductos", function (req, response) {
  let sugarDaddy = new Map();

conectar()
  obtener( "ventas", {}, function(ventas) {

   if (sugarDaddy.has(ventas.usuario.nombre)){
      sugarDaddy.set(ventas.usuario.nombre, sugarDaddy.get(ventas.usuario.nombre)+ ventas.precio);
   }else {
      sugarDaddy.set(ventas.usuario.nombre,  ventas.precio);
   }
  }, 
  function () {
    let max = ["",0];
    for (const usuario of sugarDaddy) {
      if (usuario[1] > max[1]) {
        max = usuario;
      }

    }
    response.send(max)
  })
});


app.get(
  "/crearusuarioget/:nombre/:email/:password/:telefono/:direccion/:metodo_pago",
  function (request, res) {
    let nombre = request.params.nombre;
    let email = request.params.email;
    let password = request.params.password;
    let telefono = request.params.telefono;
    let direccion = request.params.direccion;
    let metodo_pago = request.params.metodo_pago;

    conectar();

    connection.query(
      "insert into usuarios (nombre,email, password, telefono, direccion, metodo_pago) values (?, ?, ?, ?, ?, ?)",
      [nombre, email, password, telefono, direccion, metodo_pago],
      function (error, results, fields) {
        if (err){
          response.send("error de login");
        }
        res.send(
          "Ok Get: " +
            nombre +
            " - " +
            email +
            " - " +
            password +
            " - " +
            telefono +
            " - " +
            direccion +
            " - " +
            metodo_pago
        );
      }
    );

    desconectar();
  }
);

app.get("/crearusuarioquery", function (request, res) {
  let usuario = request.query.usuario;
  let password = request.query.password;

  res.send("Ok Query: " + usuario + " - " + password);
});

app.get("/crearusuariopost", function (request, res) {
  let usuario = request.body.usuario;
  let password = request.body.password;

  res.send("Ok Post");
});




app.get(
  "/crearProducto",
  function (request, res) {
    let nombre = request.query.nombre;
    let precio = request.query.precio;
    let categoria = request.query.categoria;

    conectar();

    connection.query(
      "insert into productos (nombre, precio, categoria) values (?, ?, ?)",
      [nombre, precio, categoria],
      function (error, results, fields) {
        console.log(error)
        res.send(
          "Ok Get: " +
            nombre +
            " - " +
            precio +
            " - " +
            categoria +
            " - " 
        );
      }
    );

    desconectar();
  }
);

app.post(
  "/login",
  function (request, response) {
    let email = request.body.email;
    let password = request.body.password;

    conectar();

    connection.query(
      "select email,password from usuarios WHERE email like '"+
      email +
        "' and password like '"+
        password +
        "'",
      function (error, results, fields) {
        console.log(error)
       if (results.length === 0){
          response.send("El email o contraseña no coinciden");
       }else if (results[0].email == email && results[0].password == password) {
        response.send("Acceso completado");
       }
      }
    );

    desconectar();
  }
);













    
app.listen(8080);
