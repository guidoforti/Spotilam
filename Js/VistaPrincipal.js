const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");

usuario.textContent = nombreUsuario;

const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function(event){
    window.location.href = "Index.html";
    localStorage.setItem("ingreso", false);
})

const cancionSonando = document.getElementById("cancion-sonando").textContent;
localStorage.setItem("Cancion Sonando", cancionSonando);

//NO FUNCIONA 

// const estrella = document.querySelector(".fav");
// estrella.addEventListener("click", function(event){
//     estrella.classList.remove("material-symbols-outlined");
//     estrella.classList.add("material-symbols-rounded");
//     estrella.textContent = "star";
// })