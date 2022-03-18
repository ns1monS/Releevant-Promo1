const { query } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'noel',
  database: "alumnos",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error:" + err.message);
  }
  console.log("Conectado a la base de datos");
});

// 1 - Sacar todos los alumnos que tienen 23 años
let x = 23;
connection.query(
  "select * from alumnos where edad=?",
  [x],
  function (error, results, fields) {
    if (error) {
      return console.error("error:" + error.message);
    }
    for (result of results){
        console.log("Ejercicio1: " +
         result.nombre + 
         " " + 
         result.apellido + 
         " " + 
         result.edad + 
         " " + 
         result.sexo )
    }
  },
);

// 2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años

connection.query(
  "select * from alumnos where sexo like '%Femenino%' and edad !=23",
  
  function (error, results, fields) {
    if (error) {
      return console.error("error:" + error.message);
    }
    for (result of results){
        console.log("Ejercicio2: " +
         result.nombre + 
         " " + 
         result.apellido + 
         " " + 
         result.edad + 
         " " + 
         result.sexo )
    }
  },
);

// 3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno
let dni = "12345678A";
let telefono = 999999999;
let nombre = "Pepe";
let apellido = "Pepe";
let edad = 30;
let sexo = "Masculino";

connection.query(
    "insert into alumnos(dni,telefono,nombre,apellido,edad,sexo) values(?,?,?,?,?,?)",
    [dni,telefono,nombre,apellido,edad,sexo],
    function (error, results, fields) {
      if (error) {
        return console.error("error:" + error.message);
      }
    });


connection.end(function (err) {
  if (err) {
    return console.error("error:" + err.message);
  }
  console.log("Desconectado");
});

// 4 - Introducir un nuevo alumno, si ese alumno ya existe en la lista, entonces actualizar sus datos, si no, crearlo de nuevo.

obtenerAlumno(dni, callback)
  connection.query("select * from alumnos where dni"),function(err,rows){
    if (err){
      callback(err)
    }else{
      callback(null,rows)
    }
  }

obtenerAlumno(dni,function(err,alumno){
  if (err){
    return("error");
  }else{
    if(alumno != null){
      connection.query(
        "update into alumnos(dni,telefono,nombre,apellido,edad,sexo) values(?,?,?,?,?,?)",
        [dni,telefono,nombre,apellido,edad,sexo])
        return console.error("modificando alumno:" + error.message);
    }else{
      connection.query(
        "insert into alumnos(dni,telefono,nombre,apellido,edad,sexo) values(?,?,?,?,?,?)",
      [dni,telefono,nombre,apellido,edad,sexo])
      return console.error("creando alumno:" + error.message);
    }
  }
})

