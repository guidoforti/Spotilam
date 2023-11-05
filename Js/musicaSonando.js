const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;
const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
const albumsFavoritos = usuarioLogueado.albumsFavs;
const cancionesFavoritas = usuarioLogueado.cancionesFavs;
const albumEscuchando = JSON.parse(localStorage.getItem("albumEscuchando"));
const cancionesDelAlbumActual = albumEscuchando.canciones;

/*TODO DE LA PRIMER CANCION */

const imgCancion1 = document.querySelector(".portada")
imgCancion1.src = albumEscuchando.img;

const nombreCancion = document.getElementById("pCancion1");
const nombreDelAlbumDeLaCancion = document.getElementById("pAlbum1");
const duracionDeLaCancion = document.getElementById("pDuracion1");
const vistasDeLaCancion = document.getElementById("pVistas1");
for (i = 0; i < cancionesDelAlbumActual.length ; i ++) {

    if (cancionesDelAlbumActual[i].id === "albumCancion1"){
        nombreCancion.textContent = cancionesDelAlbumActual[i].nombre;
        nombreDelAlbumDeLaCancion.textContent = albumEscuchando.nombre;
        duracionDeLaCancion.textContent = cancionesDelAlbumActual[i].duracion;
        vistasDeLaCancion.textContent = cancionesDelAlbumActual[i].vistas;
        break;
    }
}





const imgCancion2 = document.querySelector(".portada2")
imgCancion2.src = albumEscuchando.img;

const nombreCancion2 = document.getElementById("pCancion2");
const nombreDelAlbumDeLaCancion2 = document.getElementById("pAlbum2");
const duracionDeLaCancion2 = document.getElementById("pDuracion2");
const vistasDeLaCancion2 = document.getElementById("pVistas2");
for (i = 0; i < cancionesDelAlbumActual.length ; i ++) {

    if (cancionesDelAlbumActual[i].id === "albumCancion2"){
        nombreCancion2.textContent = cancionesDelAlbumActual[i].nombre;
        nombreDelAlbumDeLaCancion2.textContent = albumEscuchando.nombre;
        duracionDeLaCancion2.textContent = cancionesDelAlbumActual[i].duracion;
        vistasDeLaCancion2.textContent = cancionesDelAlbumActual[i].vistas;
        break;
    }
}


/*TODO DE LA TERCERA CANCION */
const imgCancion3 = document.querySelector(".portada3")
imgCancion3.src = albumEscuchando.img;

const nombreCancion3 = document.getElementById("pCancion3");
const nombreDelAlbumDeLaCancion3 = document.getElementById("pAlbum3");
const duracionDeLaCancion3 = document.getElementById("pDuracion3");
const vistasDeLaCancion3 = document.getElementById("pVistas3");
for (i = 0; i < cancionesDelAlbumActual.length ; i ++) {

    if (cancionesDelAlbumActual[i].id === "albumCancion3"){
        nombreCancion3.textContent = cancionesDelAlbumActual[i].nombre;
        nombreDelAlbumDeLaCancion3.textContent = albumEscuchando.nombre;
        duracionDeLaCancion3.textContent = cancionesDelAlbumActual[i].duracion;
        vistasDeLaCancion3.textContent = cancionesDelAlbumActual[i].vistas;
        break;
    }
}







/* --------------------------------------------------------------------------------------------- */

//creo lo de abajo segun la cancion
const icono = document.querySelector(".icono-play");

icono.addEventListener("click", ()=> {

    const cancionMostrando = document.querySelector(".imgAlbumDescripcion");
    cancionMostrando.src = imgCancion1.src;
    const descripcionCancionSonando = document.querySelector(".descripcion");
    descripcionCancionSonando.textContent = "estas escuchando : " + nombreCancion.textContent;

});


const icono2 = document.querySelector(".icono-play2");

icono2.addEventListener("click", ()=> {

    const cancionMostrando = document.querySelector(".imgAlbumDescripcion");
    cancionMostrando.src = imgCancion2.src;
    const descripcionCancionSonando = document.querySelector(".descripcion");
    descripcionCancionSonando.textContent = "estas escuchando : " + nombreCancion2.textContent;

});


const icono3 = document.querySelector(".icono-play3");

icono3.addEventListener("click", ()=> {

    const cancionMostrando = document.querySelector(".imgAlbumDescripcion");
    cancionMostrando.src = imgCancion3.src;
    const descripcionCancionSonando = document.querySelector(".descripcion");
    descripcionCancionSonando.textContent = "estas escuchando : " + nombreCancion3.textContent;

});


/* -------------------------------------------------------------------------------------------- */


function estaEnFavoritosCancion(cancionId) {
    return usuarioLogueado.cancionesFavs.some(favCancion => favCancion.id === cancionId);
  }
  
  
  function agregarCancionesFavoritos(cancion) {
    usuarioLogueado.cancionesFavs.push(cancion);
    
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
    
  }
  
  
  function quitarCancionesFavoritos(cancionId) {
    usuarioLogueado.cancionesFavs = usuarioLogueado.cancionesFavs.filter(favCancion => favCancion.id !== cancionId);
    
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
    
    
  }

  // AGREGO LA FUNCION A LAS ESTRELLAS , 
  // TENGO QUE TRAER CON UN ALL QUE ME TRAE UN ARRAY DE SPANS

  //HAGO UN FOR EACH QUE RECORRA A TODAS ESASA CANCIOEN DEL ALBUM
  //PARA EVALUAR SI ESTA EN FAVS Y AGREGARLA O QUITARLA Y DEPS HAGO UN FOR 
  // EL ARRAY DE SPANS Y LE AGREGO A CADA UNO LA FUNCION Y EVALUO DENTRO LA CANCION.
 



//HAY UN ERROR QUE LA ESTRELLA QUEDA MARCADA SI CAMBIAS DE ALBUM DESPUES
// ADEMAS 
const spans = document.querySelectorAll(".material-symbols-outlined");


for (let i = 0; i < cancionesDelAlbumActual.length; i++) {
  const cancion = cancionesDelAlbumActual[i];
  const span = spans[i];

  if (estaEnFavoritosCancion(cancion.id)) {
    span.classList.add("material-symbols-rounded");
  }

  span.addEventListener("click", function() {
    if (estaEnFavoritosCancion(cancion.id)) {
      quitarCancionesFavoritos(cancion.id);
      span.classList.remove("material-symbols-rounded");
      span.classList.add("material-symbols-outlined");
    } else {
      agregarCancionesFavoritos(cancion);
      span.classList.add("material-symbols-rounded");
      span.classList.remove("material-symbols-outlined");
    }
  });
}


  

  













const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function(event){
   event.preventDefault(); 
   

    const usuarioModificado = usuarioLogueado;

    for ( i = 0; i< usuarios.length ; i++) {

      if (usuarios[i].usuario === usuarioLogueado.usuario) {
        usuarios[i].remove;
        usuarios[i] = usuarioModificado;
        localStorage.removeItem("usuarioLogueado");
        break;
      }
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    const cerroSesion = localStorage.setItem("ingreso", false);
    window.location.href = "Index.html";
})