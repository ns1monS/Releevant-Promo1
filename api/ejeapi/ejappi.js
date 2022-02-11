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

function userFull() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  let id = document.getElementById("id");
  let title = document.getElementById("title");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let gender = document.getElementById("gender");
  let email = document.getElementById("email");
  let dateOfBirth = document.getElementById("dateOfBirth");
  let registerDate = document.getElementById("registerDate");
  let phone = document.getElementById("phone");
  let picture = document.getElementById("picture");
  let location = document.getElementById("location");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let country = document.getElementById("country");
  let timezone = document.getElementById("timezone");

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datoUsuario = JSON.parse(this.responseText);
      console.log(datoUsuario);
      picture.innerHTML = `<img src='${datoUsuario.picture}'>`;
      id.innerHTML = `<b>ID</b>: ${datoUsuario.id}`;
      title.innerHTML = `<b>${datoUsuario.title.toUpperCase()}</b>`;
      firstName.innerHTML = `<b>NOMBRE</b>: ${datoUsuario.firstName}`;
      lastName.innerHTML = `<b>SURNAME</b>: ${datoUsuario.lastName}`;
      gender.innerHTML = `<b>GENDER</b>: ${datoUsuario.gender}`;
      email.innerHTML = `<b> EMAIL </b>: ${datoUsuario.email}`;
      dateOfBirth.innerHTML = ` <b> DATE OF BIRTH </b>: ${datoUsuario.dateOfBirth}`;
      registerDate.innerHTML = `<b> REGISTER DATE </b>: ${datoUsuario.registerDate}`;
      phone.innerHTML = `<b> PHONE </b>: ${datoUsuario.phone}`;
      location.innerHTML = `<b> LOCATION </b>: ${datoUsuario.location.street}`;
      city.innerHTML = `<b> CITY </b>: ${datoUsuario.location.city}`;
      state.innerHTML = `<b> STATE </b>: ${datoUsuario.location.state}`;
      country.innerHTML = `<b> COUNTRY </b>: ${datoUsuario.location.country}`;
      timezone.innerHTML = `<b> TIME ZONE </b>: ${datoUsuario.location.timezone}`;
    }
  };

  let url = `https://dummyapi.io/data/v1/user/${userId}`;

  http.open("GET", url, true);
  http.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  http.send();
}
function register() {
    let title = document.getElementById("title").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let registerDate = document.getElementById("registerDate").value;
    let phone = document.getElementById("phone").value;
    let picture = document.getElementById("picture").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let timezone = document.getElementById("timezone").value;

    let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Usuario creado con exito");
    }
  };

let url = `https://dummyapi.io/data/v1/user/create`;

const data = {
title:title ,
firstName:firstName ,
lastName: lastName  ,
registerDate:registerDate,  
phone:phone,

dateOfBirth:dateOfBirth,
email:email,
gender: gender,
location: {
city:city,
state:state ,
country:country, 
timezone:timezone,  
},
  picture:picture  ,
};

  http.open("POST", url, true);
  http.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));


}

function actualizarUsuario() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  let title = document.getElementById("title").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  let registerDate = document.getElementById("registerDate").value;
  let phone = document.getElementById("phone").value;
  let picture = document.getElementById("picture").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let timezone = document.getElementById("timezone").value;

  let http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log("Usuario creado con exito");
  }
};

const data = {
title:title ,
firstName:firstName ,
lastName: lastName  ,
registerDate:registerDate,  
phone:phone,

dateOfBirth:dateOfBirth,
email:email,
gender: gender,
location: {
city:city,
state:state ,
country:country, 
timezone:timezone,  
},
picture:picture  ,
};


let url = `https://dummyapi.io/data/v1/user/${userId}`;
xhttp.open("PUT", url, true);
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.setRequestHeader("app-id", "620173e0ca6cf77d8ca95c2c");
xhttp.send(JSON.stringify(data));
}
