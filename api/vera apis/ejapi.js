function init(nPag) {
  let ulElement = document.getElementById("lista-ultimos-usuarios");
  let paginacionElement = document.getElementById("paginacion");
  let numUsuarios = 10;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuarios = JSON.parse(this.responseText);
      console.log(usuarios);
      ulElement.innerHTML = "";

      for (const usuario of usuarios.data) {
        ulElement.innerHTML +=
          "<li>" +
          usuario.title +
          " - " +
          usuario.firstName +
          " - " +
          usuario.lastName +
          " - <a href='dumpy.html?id=" +
          usuario.id +
          "'><img src='" +
          usuario.picture +
          "'width='50'/></a>" +
          "</li>";
      }

      let paginacion = "";
      for (let i = 1; i <= usuarios.total / usuarios.limit; i++) {
        paginacion +=
          "<a href='#' id='paginacion' onclick='init(" +
          i +
          ")'>" +
          ` ${i} |` +
          "</a>";
      }

      let ultimaPagina = parseInt(usuarios.total / usuarios.limit) + 1;
      paginacion += `<a href="#" id='paginacion' onclick="init(${ultimaPagina})">${ultimaPagina}</a>`;

      paginacionElement.innerHTML = paginacion;
    }
  };

  let url = `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${
    nPag - 1
  }`;
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("app-id", "620173e0ca6cf77d8ca95c2c");
  xhttp.send();
}

function userInit() {
  let userId = new URLSearchParams(window.location.search).get("id");

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuario = JSON.parse(this.responseText);

      console.log(usuario);

      let container = document.getElementById("container");
      container.innerHTML = `<ul>
      <img src="${usuario.picture}" width="150" height="150"/>
      <li><b>ID: </b>${usuario.id}</li>
  </ul>
  <ul>
      <li><b>Nombre: </b>${usuario.title.toUpperCase()}. ${usuario.firstName} ${
        usuario.lastName
      }</li>
  </ul>
  <ul>
      <li><b>Gender: </b>${usuario.gender}</li>
      <li><b>Date of birth: </b>${usuario.dateOfBirth}</li>
      <li><b>Register date: </b>${usuario.registerDate}</li>
  </ul>
  <ul>
      <li><b>Email: </b>${usuario.email}</li>
      <li><b>Phone: </b>${usuario.phone}</li>
  </ul>
  <ul>
      <p><b>Addres</b></p>
      <li><b>State: </b>${usuario.location.state}</li>
      <li><b>Street: </b>${usuario.location.street}</li>
      <li><b>City: </b>${usuario.location.city}</li>
      <li><b>Country: </b>${usuario.location.country}</li>
      <li><b>Timezone: </b>${usuario.location.timezone}</li>
  </ul>`;
      document.getElementById(
        "actualizar"
      ).innerHTML = `<a href='actualizar.html?id=${usuario.id}'><button>Actualizar Usuario</button></a>`;
    }
  };
  let url = `https://dummyapi.io/data/v1/user/${userId}`;
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("app-id", "620173e0ca6cf77d8ca95c2c");
  xhttp.send();
}

function registroUsuario() {
  let titulo = document.getElementById("title").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let genero = document.getElementById("genero").value;
  let cumpleaños = document.getElementById("fecha-cumpleaños").value;
  let registro = document.getElementById("fecha-registro").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let region = document.getElementById("region").value;
  let direccion = document.getElementById("direccion").value;
  let ciudad = document.getElementById("ciudad").value;
  let provincia = document.getElementById("provincia").value;
  let horario = document.getElementById("zona-horaria").value;
  let imagen = document.getElementById("imagen").value;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Usuario creado con exito!");
    }
  };

  let url = `https://dummyapi.io/data/v1/user/create`;
  const data = {
    title: titulo,
    firstName: nombre,
    lastName: apellido,
    gender: genero,
    dateOfBirth: cumpleaños,
    registerDate: registro,
    email: email,
    phone: telefono,
    location: {
      state: region,
      street: direccion,
      city: ciudad,
      country: provincia,
      timezone: horario,
    },

    picture: imagen,
  };

  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("app-id", "620173e0ca6cf77d8ca95c2c");
  xhttp.send(JSON.stringify(data));
}

function actualizarUsuario() {
  let userId = new URLSearchParams(window.location.search).get("id");

  let titulo = document.getElementById("title").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let genero = document.getElementById("genero").value;
  let cumpleaños = document.getElementById("fecha-cumpleaños").value;
  let registro = document.getElementById("fecha-registro").value;
  let telefono = document.getElementById("telefono").value;
  let region = document.getElementById("region").value;
  let direccion = document.getElementById("direccion").value;
  let ciudad = document.getElementById("ciudad").value;
  let provincia = document.getElementById("provincia").value;
  let horario = document.getElementById("zona-horaria").value;
  let imagen = document.getElementById("imagen").value;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Usuario actualizado con exito!");
    }
  };

  const data = {
    title: titulo,
    firstName: nombre,
    lastName: apellido,
    gender: genero,
    dateOfBirth: cumpleaños,
    registerDate: registro,
    phone: telefono,
    location: {
      state: region,
      street: direccion,
      city: ciudad,
      country: provincia,
      timezone: horario,
    },

    picture: imagen,
  };

  let url = `https://dummyapi.io/data/v1/user/${userId}`;
  xhttp.open("PUT", url, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("app-id", "620173e0ca6cf77d8ca95c2c");
  xhttp.send(JSON.stringify(data));
}
