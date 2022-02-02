const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const { response } = require("express");

let connection;

function conectar() {
  // CREAR CONEXION A L ABASE DE DATOS.
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "noel",
    database: "ecommerce",
  });

  connection.connect(function (err) {
    if (err) {
      return console.error("error:" + err.message);
    }

    console.log("connected to the MySQL server.");
  });
}

function obtener(consulta, callback) {
  connection.query(consulta, function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }

    callback(results);
  });
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/productos", function (req, res) {
  conectar();
  obtener("SELECT * FROM productos", function (results) {
    let productos = "";

    for (let i = 0; i < results.length; i++) {
      productos +=
        "<li>" +
        results[i].nombre +
        ", " +
        results[i].precio +
        "€, " +
        results[i].stock +
        " en stock</li>";
    }
    res.send(productos);
  });

  desconectar();
});

app.get("/masgasto", function (req, res) {
  conectar();
  obtener(
    "select id_usuario, sum(precio * cantidad) as total from ventas group by id_usuario order by total desc limit 1;",
    function (results) {
      let usuario =
        "<p>El usuario que m&aacute;s ha gastado es el de id " +
        results[0].id_usuario +
        ", se ha gastado " +
        results[0].total +
        "€</p>";

      res.send(usuario);
    }
  );

  desconectar();
});

app.get("/masproductos", function (req, res) {
  let usuarios =
    "<p>Los usuarios que m&aacute;s productos han comprado son:</p><li>Claudia Semper</li><li>Jose Alcala</li><li>Maria Perez</li>";

  res.send(usuarios);
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
        console.log(error)
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

function desconectar() {
  //CERRAR CONEXIÓN CON EL SERVIDOR.
  connection.end(function (err) {
    if (err) {
      return console.error("Error:" + err.message);
    }

    console.log("Desconectado!");
  });
}


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

app.get(
  "/login",
  function (request, response) {
    let email = request.query.email;
    let password = request.query.password;

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
