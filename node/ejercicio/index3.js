const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017")
function logError(e) {
    console.log(e);
  }
  
  function conectar(callback, error) {
    client.connect().then(callback).catch(error);
  }
  
  function desconectar(callback, error) {
    client.close().then(callback).catch(error);
  }

  function logError(e) {
    console.log(e);
  }
  
  function conectar(callback, error) {
    client.connect().then(callback).catch(error);
  }
  
  function desconectar(callback, error) {
    client.close().then(callback).catch(error);
  }
  function find(baseDatos, collection, filtro, execute, callback, error) {
    client
      .db(baseDatos)
      .collection(collection)
      .find(filtro)
      .forEach(execute)
      .then(callback)
      .catch(error);
  }

  function insert (baseDatos,collection){
        client.db(baseDatos).insertOne()
  }

// 1 - Sacar todos los alumnos que tienen 23 años

  conectar(function () {
    find("Alumno", "Alumno", {edad: {$eq:23}}, function (e) {
      console.log("Ejercicio 1: " + e.nombre, e.edad);
    });
  }, logError);

// 2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años


 conectar(function () {
    find("Alumno", "Alumno", {edad: {$ne:23},sexo: {$eq:"Femenino"}}, function (e) {
      console.log("Ejercicio 2: " + e.nombre, e.edad, e.sexo);
    });
  }, logError);

  // 3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno

let datosAlumno ={
    "dni": "12345667B",
    "nombre":"rodrigo",
    "apellido":"vihula",
    "telefono":664365372,
    "edad":30,
    "sexo":"Femenino",
};
let datosAlumno2 ={
    $set:{
    "dni": "12345667B",
    "nombre":"puta",
    "apellido":"vihula",
    "telefono":664365372,
    "edad":30,
    "sexo":"Femenino",
},
};
  conectar(function () {
    client 
        .db("Alumno")
        .collection("Alumno")
        .findOne({ dni: datosAlumno.dni },function (err,res) {
            if (res) {
                console.log("Ej3","Usurario existente")
            }else {
                client  
                .db("Alumno")
                .collection("Alumno")
                .insertOne(datosAlumno ,function (err,result){
                    if (err) throw err;
                    console.log("Creando usuario")
                })

            
        
    }});
    }, logError);

    // 4 - Introducir un nuevo alumno, si ese alumno ya existe en la lista, entonces actualizar sus datos, si no, crearlo de nuevo.
    conectar(function () {
        client 
            .db("Alumno")
            .collection("Alumno")
            .findOne({ dni: datosAlumno.dni },function (err,res) {
                if (res) { 
                    client
                    .db("Alumno")
                    .collection("Alumno")
                    .updateOne({_id: res._id},datosAlumno2 ,function (err,result){
                        if (err) throw err;
                        console.log("ej 4 modificando usuario")
                    })
                }else {
                    client    
                .db("Alumno")
                .collection("Alumno")
                .insertOne(datosAlumno ,function (err,result){
                    if (err) throw err;
                    console.log("Creando usuario")
                })
                
            
        }});
        }, logError);

        // 5 - Eliminar los alumnos que tengan menos 23 años (23 incluido)
     
        conectar(function () {
            client 
                .db("Alumno")
                .collection("Alumno")
                .deleteMany( {edad: {$lt:23}}, function (e) {
                            console.log("ej5 borrando usuarios usuario")
                      
           
                   
                })}, logError);
           


         // 6 - Elimnar aquellos alumnos cuyo nombre empiece por M
 conectar(function () {
            client 
                .db("Alumno")
                .collection("Alumno")
                .deleteMany( {nombre: /M/}, function (e) {
                            console.log("ej6 borrando usuarios que empiecen por M ")
                      
           
                   
                })}, logError);