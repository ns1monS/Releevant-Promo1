function init(numeroPagina) {
  let ulElement = document.getElementById("lista-ultimos-usuarios");
  let pageElement = document.getElementById("pages");
  let numUsuarios = 10;

  ulElement.innerHTML = "<li>Photo, Title, Name, Surname </li>";

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuarios = JSON.parse(this.responseText);

      for (const usuario of usuarios.data) {
        ulElement.innerHTML +=
          "<li>" +
          " " +
          `<a href='user.html?id=${usuario.id}'> <img  src='` +
          usuario.picture +
          "'" +
          "width='70px'> </a> " +
          " " +
          usuario.title +
          " " +
          usuario.firstName +
          " " +
          usuario.lastName +
          " " +
          "</li>";
      }

      let pages = "";
      for (let i = 1; i <= usuarios.total / usuarios.limit; i++) {
        pages += `<a href='#' onclick='init(${i})'> ${i} , </a>`;
      }
      let lastPage = parseInt(usuarios.total / usuarios.limit) + 1;
      pages += `<a href="#" onclick="init(${lastPage})"> ${lastPage}</a>`;

      pageElement.innerHTML = pages;
    }
  };

  let url = `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${
    numeroPagina - 1
  }`;

  http.open("GET", url, true);
  http.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  http.send();
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

function sendInfo() {
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("surname").value;
  let email = document.getElementById("email").value;

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  let url = `https://dummyapi.io/data/v1/user/create`;

  const data = {
    firstName: nombre,
    lastName: apellido,
    email: email,
  };

  http.open("POST", url, true);
  http.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));
}

function updateInfo(){
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId)

  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("surname").value;

  let http = new XMLHttpRequest();
  http.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
    }
  }
  let url = `https://dummyapi.io/data/v1/user/:id/:${userId}`;

  const data = {
    firstName: nombre,
    lastName: apellido,
  };

  http.open("PUT", url, true);
  http.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));


}

function register() {
    let userId = new URLSearchParams(window.location.search).get("id");
    console.log(userId);
  
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let registerDate = document.getElementById("registerDate").value;
    let phone = document.getElementById("phone").value;
    let picture = document.getElementById("picture").value;
    let location = document.getElementById("location").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let timezone = document.getElementById("timezone").value;

    let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

let url = `https://dummyapi.io/data/v1/user/create`;

const data = {
 id: id ,
 title:titulo ,
 firstName:Nombre ,
 lastName: apellido  ,
registerDate:fecha-registro,  
phone:telefono,
picture:imagen  ,
dateOfBirth:fecha-de-nacimiento,
email:email,
gender: genero,
location: {
city:ciudad,
state:estado ,
country:pais, 
timezone:zona-horaria,  
},
phone: telefono
}

http.open("PUT", url, true);
  http.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));


}