function init(){
    let ulElement = document.getElementById("lista-ultimos-usuarios");
    let numUsuarios = 10;

let xhttp=new XMLHttpRequest();
xhttp.onreadystatechange =function(){
if (this.readyState == 4 & this.status ==200){
    let usuarios = JSON.parse(this.responseText);
   
    console.log(usuarios);

    for (const usuario of usuarios.data) {
        ulElement.innerHTML +=
          "<li>" +
          usuario.title +
          " - " +
          usuario.firstName +
          " - " +
          usuario.lastName +
          " - <img src='" +
          usuario.picture +
          "'width='50'/>" +
          "</li>";
        }

        let paginacion = "";
        for (let index = 1; index <= usuarios.total / ususarios.limit ; index++) {
            paginacion += `a href="#", ` ;           
        }
        paginacion += parseInt(usuarios.total / usuarios.limit) +  1;
        paginacionElement.innerHTML = paginacion
    }
}

let url= "https://dummyapi.io/data/v1/user?limit=" +numUsuarios;
xhttp.open("GET", url, true);
xhttp.setRequestHeader("app-id", "6201760cca6cf7776aa95c4a");
xhttp.send();


};