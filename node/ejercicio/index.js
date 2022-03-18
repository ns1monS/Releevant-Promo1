const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());


let alumnos = [
    {
        dni:"00984564Y",
        telefono: 654786907,
        nombre: "Adrian",
        apellido:"Molina",
        edad:21,
        sexo:"Masculino"
    },
    {
        dni:"9874521J",
        telefono:645789214,
        nombre:"Javier",
        apellido:"Gutierrez",
        edad:23,
        sexo:"Masculino"
    },
    {
        dni:"85632149O",
        telefono:632459871,
        nombre:"Miguel",
        apellido:"Torres",
        edad:23,
        sexo:"Masculino"
    },
    {
        dni:"68542175U",
        telefono:654786907,
        nombre:"Omar",
        apellido:"Montes",
        edad:24,
        sexo:"Masculino"
    },
     {
        dni:"58478962L",
        telefono:685632641,
        nombre:"Paula",
        apellido:"Garcia",
        edad:24,
        sexo:"Femenino"
    },
     {
        dni:"6897452U",
        telefono:653214789,
        nombre:"Marta",
        apellido:"Gonzalez",
        edad:24,
        sexo:"Femenino"
    },
    {
        dni:"68741298H",
        telefono:693654217,
        nombre:"Marta",
        apellido:"Gutierrez",
        edad:23,
        sexo:"Femenino"
    }
]

// 1 - Sacar todos los alumnos que tienen 23 años

app.get("/api/ej1/",(request , response) => {
    let alumnos23 = alumnos.filter(alumno=>alumno.edad === 23);
    console.log(alumnos23);
    response.json(alumnos23)
    })




// 2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años

app.get("/api/ej2/",(request , response) => {
    let alumnos23 = alumnos.filter(alumno=>alumno.edad !== 23 && alumno.sexo ==="Femenino");
    console.log(alumnos23);
    response.json(alumnos23)
    })



// 3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno

app.post("/api/ej3/",(request , response) => {
    let datos = request.body;
        let  econtrar = alumnos.find((alumno) => alumno.dni === datos.dni);

    if (econtrar) {
        console.log("El usuario ya existe ");
    }else{
        alumnos.push(datos);
        console.log(alumnos);
        response.json(alumnos);
    }
    });


// 4 - Introducir un nuevo alumno, si ese alumno ya existe en la lista, entonces actualizar sus datos, si no, crearlo de nuevo.

app.put("/api/ej4/",(request , response) => {
    let datos = request.body;
        let  econtrar = alumnos.find((alumno) => alumno.dni === datos.dni);

    if (econtrar) {
      alumnos.find((alumno)=>{
          if (alumno.dni === datos.dni){
            alumno.nombre = datos.nombre;
            alumno.apellido = datos.apellido;
            alumno.telefono = datos.telefono;
            alumno.edad = datos.edad;
            alumno.sexo = datos.sexo;
          }
      })
      console.log("El usuario ya existe modificando sus valores");
      response.json(alumnos)
    }else{
        alumnos.push(datos);
        console.log(alumnos);
        response.json(alumnos);
    }
    });

// 5 - Eliminar los alumnos que tengan menos 23 años (23 incluido)

app.delete("/api/ej5/",(request , response) => {
    let alumnos23 = alumnos.filter(alumno=>alumno.edad  > 23);
    console.log(alumnos23);
    response.json(alumnos23)
    })


// 6 - Elimnar aquellos alumnos cuyo nombre empiece por M

app.delete("/api/ej6/",(request , response) => {
    let alumnos23 = alumnos.filter(alumno=>alumno.nombre[0] !== "M");
    console.log(alumnos23);
    response.json(alumnos23)
    });


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
