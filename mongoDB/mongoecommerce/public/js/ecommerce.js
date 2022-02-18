function init() {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let listaProductos = document.getElementById("lista-productos");
      listaProductos.innerHTML = this.responseText;
    }
  };

  http.open("GET", "http://localhost:8080/productos", true);
  http.send();

  let httpDos = new XMLHttpRequest();
  httpDos.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let detalleUsuario = document.getElementById("detalle-usuario");
      detalleUsuario.innerHTML = this.responseText;
    }
  };
  httpDos.open("GET", "http://localhost:8080/masgasto", true);
  httpDos.send();

  let httpTres = new XMLHttpRequest();
  httpTres.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let listaUsuarios = document.getElementById("lista-usuarios");
      listaUsuarios.innerHTML = this.responseText;
    }
  };
  httpTres.open("GET", "http://localhost:8080/masproductos", true);
  httpTres.send();

}

function submit() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let metodo_pago = document.getElementById("metodo_pago").value;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  let url = "http://localhost:8080/crearusuarioget";
  url += "/" + nombre;
  url += "/" + apellido;
  url += "/" + email;
  url += "/" + password;
  url += "/" + telefono;
  url += "/" + direccion;
  url += "/" + metodo_pago;

  xhttp.open("GET", url, true);
  xhttp.send();
}
