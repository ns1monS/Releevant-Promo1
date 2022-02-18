// usuariosCREATE TABLE `usuarios` (
//     `id_usuarios` int(10) unsigned NOT NULL AUTO_INCREMENT,
//     `usuario` varchar(45) DEFAULT NULL,
//     `direccion` varchar(45) DEFAULT NULL,
//     `metodo_pago` varchar(45) DEFAULT NULL,
//     `password` varchar(45) DEFAULT NULL,
//     `email` varchar(45) DEFAULT NULL,
//     `telefono` varchar(45) DEFAULT NULL,
//     PRIMARY KEY (`id_usuarios`),
//     UNIQUE KEY `email` (`email`),
//     UNIQUE KEY `email_2` (`email`),
//     UNIQUE KEY `email_3` (`email`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
  

// let usuario1 = {
//         id: Symbol(),
//         nombre: "Noel",
//         apellidos: "Simón Aguilar",
//         email: "noelsimonaguilarj@gmail.com",
//         password:"Noelsimon1",
//         direccion: "c/mago shantai",
//         metodo_de_pag: "bizuum",
// }

// let usuario2 = {
//     id: Symbol(),
//     nombre: "paco",
//     apellidos: "paco paco",
//     email: "pacoj@gmail.com",
//     password:"paco1",
//     direccion: "c/paco",
//     metodo_de_pag: "paco",
// }

// let usuarios = [usuario1,usuario2];


// let producto1 = {
//     id:Symbol(),
//     nombre:	"patata",
//     precio:	"6.95",	
//     categoria : "verdura",
//     vendedor: {
//         id : Symbol(),
//         nombre: " Verduras Pepe",
//         direccion :"en el kmpo",
//         correo: "verpepe@gmail.com"

//     }
// }
// let producto2 = {
//     id:Symbol(),
//     nombre:	"lechuga",
//     precio:	"3",	
//     categoria : "verdura"
// }

// let productos = [producto1,producto2];

// let vendedor1 = {
//   id : Symbol(),
//   nombre: " Verduras Pepe",
//   direccion :"en el kmpo",
//   correo: "verpepe@gmail.com",
// }

// let vendedor2 = {
//     id : Symbol(),
//   nombre: " Charcuteria Juana",
//   direccion :"tambien en el kmpo",
//   correo: "juana@gmail.com",
// }

// let vendedores = [vendedor1,vendedor2];

// // console.log(productos)
// console.log(producto1.vendedor.nombre)


// db.contenidos.find()
// { "_id" : ObjectId("620e9a4ed0fd0e7ef0a4ffc4"),
//  "tipo" : "serie", "genero" : "josema", "nombre" : 
//  "josema no me da mi temario", "rating" : "undefined", 
//  "votaciones" : [ { "nombre" : "pacapacheco", "apellidos"
//   : "pacapachecoooo", "rating" : "8" }, { "nombre" : "israel",
//    "apellidos" : "menis", "rating" : "0" } ] }



//    db.productos({nombre: "Correa perro",tipo: "Animal",stock: 15,precio: 90.9,rating: 4.9,vendedor: {nombre: "Orlando",direccion: "C/ Orlando 14",email: "orlando@campeon.es" }})

// db.ventas({
//     producto: {
//         nombre: "Correa perro", 
//         tipo: "Animal", 
//         stock: 15, 
//         precio: 90.9,
//         rating: 4.9,
//     },
//     cantidad: 10,
//     precio: 9.90,
//     usuario: {
//         nombre: "pepe",
//         apellidos: "Reina",
//         email: "pepe@reina.com",
//         direccion: "C/ Malaga 16"
//     }
// })



//productos
// db.productos.insertOne({
//     nombre: "Correa perro",
//     tipo: "Animal",
//     stock: 15,
//     precio: 90.9,
//     rating: 4.9,
//     vendedor: {
//       nombre: "Orlando",
//       direccion: "C/ Orlando 14",
//       email: "orlando@campeon.es",
//     },
//   })
  
  db.productos.insertOne({
    nombre: "Lampara",
    tipo: "Hogar",
    stock: 5,
    precio: 69.50,
    rating: 5,
    vendedor: {
      nombre: "Fabio",
      direccion: "C/ Colonia 14",
      email: "fabio@campeon.es",
    },
  });
  
  db.productos.insertOne({
    nombre: "Televisor",
    tipo: "Entertaining",
    stock: 15,
    precio: 999,
    rating: 4.5,
    vendedor: {
      nombre: "Nicola",
      direccion: "C/ Loria 12",
      email: "nicola@campeon.es",
    },
  });
  
  //ventas
  db.ventas.insertOne({
    producto: {
      nombre: "Correa perro",
      tipo: "Animal",
      stock: 15,
      precio: 90.9,
      rating: 4.9,
    },
    cantidad: 10,
    precio: 9.9,
    usuario: {
      nombre: "pepe",
      apellidos: "Reina",
      email: "pepe@reina.com",
      direccion: "C/ Malaga 16",
    },
  });
  
  db.ventas.insertOne({
    producto: {
      nombre: "Televisor",
      tipo: "Entertaining",
      stock: 15,
      precio: 999,
      rating: 4.5,
    },
    cantidad: 15,
    precio: 630,
    usuario: {
      nombre: "Carlo",
      apellidos: "Romeo",
      email: "carlo@romeo.com",
      direccion: "C/ Sevilla 16",
    },
  });
  
    db.ventas.insertOne({
        producto: {
        nombre: "Lampara",
        tipo: "Hogar",
        stock: 20,
        precio: 32.5,
        rating: 4.5,
        },
        cantidad: 5,
        precio: 25.99,
        usuario: {
        nombre: "Cristo",
        apellidos: "Paolo",
        email: "cristo@paolo.com",
        direccion: "C/ Huelva 1",
        },
    });
  
  //vendedor
  db.vendedor.insertOne({
    nombre: "Hogareria",
    direccion: "Calle Cadiz 13",
    correo: "vendo@gmail.com"
  })
  
  db.vendedor.insertOne({
    nombre: "GameIn",
    direccion: "Calle Madrid 1",
    correo: "game@in.com"
  })
  
  db.vendedor.insertOne({
    nombre: "Electro",
    direccion: "Calle Barca 23",
    correo: "electro@gmail.com"
  })
  
  //usuarios
  db.usuarios.insertOne({
  nombre: "Francesco",
  apellido: "Fava",
  telefono: "611163534",
    direccion: "Calle Oceano 1",
    metodo_de_pago: "Bizum",
    email: "favafrancesco5@gmail.com",
    password: "ciaocomestai",
  });
  
  db.usuarios.insertOne({
    nombre: "Luigi",
    apellido: "Cropani",
    telefono: "64356789",
    direccion: "Calle Lario 11",
    metodo_de_pago: "Tarjeta",
    email: "luigicropani@gmail.com",
    password: "holacomoestas",
  });
  
  db.usuarios.insertOne({
    nombre: "Carlo",
    apellido: "Cracco",
    telefono: "634234567",
    direccion: "Calle Madrid 12",
    metodo_de_pago: "Paypal",
    email: "carlocracco@gmail.com",
    password: "porcamiseria",
  });