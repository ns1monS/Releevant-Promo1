function init(numerico) {
  let usuarios = document.getElementById("usuario");
  let n_usuarios = 10;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      usuarios.innerHTML = "";
      document.getElementById("paginas").innerHTML = "";
      //console.log(this.responseText);
      let datosU = JSON.parse(this.responseText);

      for (i = 0; i <= parseInt(datosU.total / datosU.limit); i++) {
        document.getElementById("paginas").innerHTML +=
          "<a class='link-style' href='#' onclick='cargar(" +
          i +
          ")'>" +
          (i + 1) +
          "</a> <span> </span>";
      }

      for (usuario of datosU.data) {
        usuarios.innerHTML +=
          "<li>" +
          usuario.title +
          "  " +
          usuario.firstName +
          "  " +
          usuario.lastName +
          "  <a href='full.html?id=" +
          usuario.id +
          "'><img src='" +
          usuario.picture +
          "' width='50'/></a>";
      }
    }
  };

  let url =
    "https://dummyapi.io/data/v1/user?limit=" +
    n_usuarios +
    "&page=" +
    numerico;

  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  xhttp.send();
}

function userInit() {
  let usuariosFull = document.getElementById("usuariosFull");
  let userID = new URLSearchParams(window.location.search).get("id");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      usuariosFull.innerHTML = "";
      let datosU = JSON.parse(this.responseText);
      console.log(datosU);
      console.log(datosU.id);

      usuariosFull.innerHTML = `<img src='${datosU.picture}' width='150px'>
      <p>ID: ${datosU.id}</p>
      <p>Título: ${datosU.title}</p>
      <p>Nombre: ${datosU.firstName}</p>
      <p>Apellidos: ${datosU.lastName}</p>
      <p>Género: ${datosU.gender}</p>
      <p>Email: ${datosU.email}</p>
      <p>Fecha Nacimiento: ${datosU.dateOfBirth}</p>
      <p>Fecha Registro: ${datosU.registerDate}</p>
      <p>Teléfono: ${datosU.phone}</p>
      <p>Calle: ${datosU.location.street}</p>
      <p>Ciudad: ${datosU.location.city}</p>
      <p>Estado: ${datosU.location.state}</p>
      <p>País: ${datosU.location.country}</p>
      <p>Zona Horaria: ${datosU.location.timezone}</p>`;
      //document.getElementById("titulo").innerHTML = datosU.title;
      //document.getElementById("nombreU").innerHTML = datosU.firstName;
    }
  };

  let url = "https://dummyapi.io/data/v1/user/" + userID;

  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  xhttp.send();
}
