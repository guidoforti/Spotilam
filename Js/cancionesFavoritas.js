const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;



function estaEnFavoritosCancion(cancionId, albumId) {
    if(usuarioLogueado.cancionesFavs) {
      return usuarioLogueado.cancionesFavs.some(favCancion => favCancion.id === cancionId && favCancion.albumId === albumId);
    }
    return false;
    }
    
  
  
  
  function agregarCancionesFavoritos(cancion, albumId) {
    cancion.albumId = albumId; // Asigna el id del álbum a la canción
    usuarioLogueado.cancionesFavs.push(cancion);
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  }
  
  function quitarCancionesFavoritos(cancionId, albumId) {
    usuarioLogueado.cancionesFavs = usuarioLogueado.cancionesFavs.filter(favCancion => !(favCancion.id === cancionId && favCancion.albumId === albumId));
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  }



const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
const cancionesFavoritas = usuarioLogueado.cancionesFavs;
const contenedorDeCanciones = document.querySelector(".cancionesFavoritasInfo");



cancionesFavoritas.map((cancion) => {

    const divContenedorDeTodo = document.createElement("div");
    divContenedorDeTodo.className = ("divDeCadaCancion");

    const divImg = document.createElement("div");
    divImg.className = ("div1");

    divImg.addEventListener("click" , ()=> {
        const articuloAlbumEscuchando = document.createElement("article");
    articuloAlbumEscuchando.className = "albumDescripcion";

    const aDeArticuloEcuchando = document.createElement("a");
    aDeArticuloEcuchando.href = "musicaSonando.html";

    const imgDeArticuloEscuchando = document.createElement("img");
    imgDeArticuloEscuchando.className = "imgAlbumDescripcion";
    imgDeArticuloEscuchando.src = cancion.img;



    aDeArticuloEcuchando.appendChild(imgDeArticuloEscuchando);
    articuloAlbumEscuchando.appendChild(aDeArticuloEcuchando);

    const albumDescripcion = document.querySelector(".cancionReproduciendo");
    albumDescripcion.style.animation = "fadeIn 2s";

    while (albumDescripcion.firstChild) {
      
      albumDescripcion.removeChild(albumDescripcion.lastChild);
        
    }
    albumDescripcion.appendChild(articuloAlbumEscuchando);
    
    const descripcionDelAlbum = document.createElement("article");
    descripcionDelAlbum.className = "descripcionCancion";
    const pDescripcion = document.createElement("p");
    pDescripcion.id = "cancion-sonando";
    pDescripcion.innerHTML = "Estas escuchando: " + cancion.nombre;

    descripcionDelAlbum.appendChild(pDescripcion);
    albumDescripcion.appendChild(descripcionDelAlbum);

    
    } )
    const img = document.createElement("img");
    img.className = ("imgCC");
    img.src = cancion.img;

    const overlay = document.createElement("div");
    overlay.className = ("overlay");
    const iconoDePlay = document.createElement("div");
    iconoDePlay.className = ("icono-play");

    divImg.appendChild(img);
    divImg.appendChild(overlay);
    divImg.appendChild(iconoDePlay);
    
    const divTitulo = document.createElement("div");
    const titulo = document.createElement("p")
    titulo.textContent = cancion.nombre;
    const span = document.createElement("span");
    span.innerHTML = "grade";
    span.className = "material-symbols-outlined";
    const album2 = cancion.albumId;

    if (estaEnFavoritosCancion(cancion.id, album2)) {
        span.classList.add("material-symbols-rounded");
      }
    
      span.addEventListener("click", function() {
        if (estaEnFavoritosCancion(cancion.id , album2)) {
          quitarCancionesFavoritos(cancion.id, album2);
          
          span.classList.remove("material-symbols-rounded");
          contenedorDeCanciones.removeChild(divContenedorDeTodo);
        } else {
          agregarCancionesFavoritos(cancion, album2);
          span.classList.add("material-symbols-rounded");
          
        }
      });
    
  
    divTitulo.appendChild(titulo);
    divTitulo.appendChild(span);
    


    const divAlbum =document.createElement("div");
    const album = cancion.nombreAlbum;
    divAlbum.innerHTML = `<p> ${album} </p>`

    const divDuracion =document.createElement("div");
    const duracion = cancion.duracion;
    divDuracion.innerHTML = `<p> ${duracion} </p>`

    const divVistas =document.createElement("div");
    const vistas = cancion.vistas;
    divVistas.innerHTML = `<p> ${vistas} </p>`


    divContenedorDeTodo.appendChild(divImg);
    divContenedorDeTodo.appendChild(divTitulo);
    divContenedorDeTodo.appendChild(divAlbum);
    divContenedorDeTodo.appendChild(divDuracion);
    divContenedorDeTodo.appendChild(divVistas);


    contenedorDeCanciones.appendChild(divContenedorDeTodo);
} )