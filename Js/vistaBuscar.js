const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");

const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const ingreso = localStorage.getItem("ingreso");

if (ingreso !== "false") {
    usuario.textContent = nombreUsuario;
    botonCerrarSesion.textContent = "Cerrar sesión";
}

if(ingreso === "false"){
  const iperfil = document.getElementById("iperfil");
  iperfil.className = "borrarimg";
}



const data = JSON.parse(localStorage.getItem("data"));
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

const contenedor = document.querySelector(".contenedorAlbums");

if (ingreso === "true") {
  function estaEnFavoritos(albumId) {
    if (usuarioLogueado.albumsFavs) {
      return usuarioLogueado.albumsFavs.some(
        (favAlbum) => favAlbum.id === albumId
      );
    }
    return false;
  }
  // se le pasa un album y se lo pushea al array y el array se vuelve a guardar en el local
  function agregarAlbumFavoritos(album) {
    usuarioLogueado.albumsFavs.push(album);

    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  }
}


// Utiliza el método filter para crear un nuevo array que excluya el álbum con el id especificado. 
//Esto se logra comparando el id de cada álbum con albumId y eliminando aquellos que coinciden.
//Luego, guarda el nuevo array de álbumes favoritos (sin el álbum que se quiso quitar) en el almacenamiento local utilizando 
//localStorage.setItem. Esto actualiza la lista de favoritos sin el álbum específico.
function quitarAlbumFavoritos(albumId) {
  usuarioLogueado.albumsFavs = usuarioLogueado.albumsFavs.filter(favAlbum => favAlbum.id !== albumId);
  
  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  
  
}





data.map((album) => {
  const article = document.createElement("article");
  article.className = "album";
  article.id = album.id;

  // Creas un nuevo elemento a
  const a = document.createElement("a");

  // Creas un nuevo elemento img y le asignas la fuente desde tu objeto
  const img = document.createElement("img");
  img.className = "imgAlbum";
  img.src = album.img;

  // Añades el img al a
  a.appendChild(img);

  // Creas un nuevo elemento span
  const span = document.createElement("span");
  
  span.className = "material-symbols-outlined fav"; // ¿? preguntar si la id esta en favoritos para darle el estilo correspondiente y la funcion correspondiente
  span.innerHTML = "grade"; // Puedes cambiar esto si necesitas un valor dinámico
  
  //EVALUO QUE SI ESTA EN FAVORITOS QUEDE MARCADA LA ESTRELLA
  if (ingreso === "true" && estaEnFavoritos(album.id)) {
    span.classList.add("material-symbols-rounded");
  }
  //añadir event listener on click y validar si esta en favoritos, para darle la funcion correspondiente

  // Añades el a y el span al article
  article.appendChild(a);
  article.appendChild(span);

  // Finalmente, añades el article al contenedor
  contenedor.appendChild(article);

  //AGREGO LA FUNCION ALAS ESTRELLAS
  if (ingreso === "true") {
    span.addEventListener("click", function () {
      if (estaEnFavoritos(album.id)) {
        quitarAlbumFavoritos(album.id);
        span.classList.remove("material-symbols-rounded");
        span.classList.add("material-symbols-outlined");
      } else {
        agregarAlbumFavoritos(album);
        span.classList.add("material-symbols-rounded");
        span.classList.remove("material-symbols-outlined");
      }
    });
  }
  

  //AGREGO LA FUNCION PARA QUE SE VAYA AGREGANDO AL COSTADO EL ALBUM ESCUCHANDO
  img.addEventListener("click", function () {
    
    const articuloAlbumEscuchando = document.createElement("article");
  
    articuloAlbumEscuchando.className = "albumDescripcion";
    const aDeArticuloEcuchando = document.createElement("a");
    aDeArticuloEcuchando.href = "musicaSonando.html";

    const imgDeArticuloEscuchando = document.createElement("img");
    imgDeArticuloEscuchando.className = "imgAlbumDescripcion";
    imgDeArticuloEscuchando.src = album.img;

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
    pDescripcion.innerHTML = "Estas escuchando: " + album.nombre;

    descripcionDelAlbum.appendChild(pDescripcion);
    albumDescripcion.appendChild(descripcionDelAlbum);

    localStorage.setItem("albumEscuchando", JSON.stringify(album));
  });
});










const barraDeBusqueda = document.querySelector(".barraBusqueda");

barraDeBusqueda.addEventListener("keyup", () => {
  const palabraAbuscar = barraDeBusqueda.value;
  //USAR DATA QUE TRAE A TODOS LOS ALBUMS Y  USAR SU CONTENENEDOR

  const albumsConlaPalabra = data.filter((elemento) =>
    elemento.nombre.includes(palabraAbuscar)
  );

  console.log(albumsConlaPalabra);
  contenedor.innerHTML = "";

  albumsConlaPalabra.map((albums) => {
    const article = document.createElement("article");
    article.className = "album";
    article.id = albums.id;

    // Creas un nuevo elemento a
    const a = document.createElement("a");

    // Creas un nuevo elemento img y le asignas la fuente desde tu objeto
    const img = document.createElement("img");
    img.className = "imgAlbum";
    img.src = albums.img;

    // Añades el img al a
    a.appendChild(img);

    // Creas un nuevo elemento span
    const span = document.createElement("span");
    span.className = "material-symbols-outlined fav"; // ¿? preguntar si la id esta en favoritos para darle el estilo correspondiente y la funcion correspondiente
    span.innerHTML = "grade"; // Puedes cambiar esto si necesitas un valor dinámico

    //añadir event listener on click y validar si esta en favoritos, para darle la funcion correspondiente
    if (estaEnFavoritos(albums.id)) {
      span.classList.add("material-symbols-rounded");
    }
    
    // Añades el a y el span al article
    article.appendChild(a);
    article.appendChild(span);
    span.addEventListener("click", function(){
  
    

      if (estaEnFavoritos(albums.id)){
        quitarAlbumFavoritos(albums.id);
        span.classList.remove("material-symbols-rounded");
        span.classList.add("material-symbols-outlined");
        
      } else {
        agregarAlbumFavoritos(albums);
        span.classList.add("material-symbols-rounded");
        span.classList.remove("material-symbols-outlined");
  
      }
      
    })
  
    // Finalmente, añades el article al contenedor
    contenedor.appendChild(article);
  });
});


  



botonCerrarSesion.addEventListener("click", function(event){
    
   

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


