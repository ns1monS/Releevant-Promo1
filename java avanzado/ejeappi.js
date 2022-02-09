function init(npag){
    let ulElement = document.getElementById("lista-ultimos-usuarios");
    let paginacionElement = document.getElementById("paginacion");
    let numUsuarios = 10;

let xhttp = new XMLHttpRequest();
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
          " - <a href='dumpy.html'> <img src='" +
          usuario.picture +
          "'width='50'/>" +
          "</li>";
        }

        let paginacion = "";
        for (let index = 1; index <= usuarios.total / usuarios.limit ; index++) {
            paginacion += `<a href="#" onclick="pagina(${index})">${index}</a>` ;           
        }
        let ultimaPagina = parseInt(usuarios.total / usuarios.limit) +1;
        paginacion += `<a href="#" onclick="pagina(${ultimaPagina})">${ultimaPagina}</a>` ;   

        paginacionElement.innerHTML = paginacion;
    }
}
};
function userInit() {
    let userId = new URLSearchParams(window.location.search).get("id")
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this,this.readyState == 4 && this.status ==200){
            let usuario = JSON.parse(this.responseText);
           
            console.log(usuario);
            let container = document.getElementById("containerr");
        container.innerHTML = `<ul>
        <li><b>ID<b>${usuario.id}</b></li>
        <img src="https://randomuser.me/api/portraits/women/58.jpg">
        <li><b>${usuario.title}.${usuario.firstName}${usuario.lastName}</b></li>
        </ul>
</form>
<form>
    <ul>
        <li><b>Gender:</b> ${usuario.gender}</li>
        <li><b>Date of birth:</b> ${usuario.dateBirth}
        </li>
        <li><b>Register date:</b> ${usuario.dataRegister}
        </li>
    </ul>
</form>
<form>
    <ul>
        <li><b>Email:</b> ${usuario.data}</li>
        <li><b>Phone:</b> ${usuario.phone}
        </li>
        <li><b>Address</b>
        </li>
        <li><b>State:</b> ${usuario.location.state}
        </li>
        <li><b>Street:</b> 9614, ${usuario.location.street}
        </li> 
        <li><b>City:</b> ${usuario.location.city}
        </li>
        <li><b>Country:</b> ${usuario.location.country}
        </li>
        <li><b>Timezone:</b> ${usuario.location.timezone}
        </li>


    </ul>`;
        }
      
       
    
    };

    let url = `https://dummyapi.io/data/v1/user/${userId}`;
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("app-id", "620403b6554d0263c3fcbd87");
    xhttp.send();

}