const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;


 



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/




const album1 = {
  nombre:"nora en pure",
  id: "a1",
  img: "img/nora.jpg",
  canciones: [
    { id: "albumCancion1", nombre: "oblivion", duracion: "3:50", vistas: "11000" },
    { id: "albumCancion2", nombre: "noraAndNora", duracion: "4:21", vistas: "5000" },
    { id: "albumCancion3", nombre: "NoraSuena", duracion: "2:21", vistas: "3000" },
    { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
  ],
};

const album2 = {
  nombre:"bad bunny",
  id: "a2",
  img: "img/bdbn.jpg",
  canciones: [
    { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
  ],
};

 const album3 = {
   nombre:"yeat",
  id: "a3",
   img: "img/yeat.jpg",
   canciones: [
     { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
     { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
     { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
     { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
    ],
 };

 const album4 = {
    nombre:"daft punk",
   id: "a4",
    img: "img/dftpnk.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:45", vistas: "92000" },
      { id: "albumCancion2", nombre: "mosco mule", duracion: "2:21", vistas: "19000" },
      { id: "albumCancion3", nombre: "conejo malo", duracion: "2:41", vistas: "2000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
    ],
  };

  const album5 = {
    nombre:"kayne west",
   id: "a5",
    img: "img/kayneWest.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
    ],
  };

  const album6 = {
    nombre:"pink floyd",
   id: "a6",
    img: "img/pinkfloyd.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
    ],
  };

  const album7 = {
    nombre:"tame impala",
   id: "a7",
    img: "img/tame impala.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };


  const album8 = {
    nombre:"quevedo",
   id: "a8",
    img: "img/quevedo.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };

  const album9 = {
    nombre:"ben bhomer",
   id: "a9",
    img: "img/benbhomer.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
    ],
  };

  const album10 = {
    nombre:"nicky nicole",
   id: "a10",
    img: "img/nicky.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };

  const album11 = {
    nombre:"nompa",
   id: "a11",
    img: "img/nompa.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };

  const album12 = {
    nombre:"trueno",
   id: "a12",
    img: "img/trueno.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };

  const album13 = {
    nombre:"tini",
   id: "a13",
    img: "img/TTT.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
     { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };

  const album14 = {
    nombre:"mac miller",
   id: "a14",
    img: "img/kayne.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" },
    ],
  };
  const album15 = {
    nombre:"two feets",
    id: "a15",
    img: "img/2feet.jpg",
    canciones: [
      { id: "albumCancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "albumCancion4", nombre: "NoraSuenaEnSpotilam", duracion: "22:21", vistas: "4000" }, 
    ],
  };

  

  //CREO EL ARRAY CON TODOS LOS ALBUMS.
const allAlbums = [
  album1, album2, album3 , album4, album5 , album6 , album7 , album8 , album9 , album10, album11, album12, album13 , album14 , album15 
];

const usuarios = JSON.parse(localStorage.getItem("usuarios"));

//EL PROBLEMA ES QUE no valido

// Verifica si ya existe un usuario logueado en el almacenamiento local
let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

if (!usuarioLogueado) {
  // Si no existe un usuario logueado en el almacenamiento local, busca el usuario en el array de usuarios guardados
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  for (let u of usuarios) {
    if (u.usuario === nombreUsuario) {
      // Encuentra el usuario y asigna sus datos a usuarioLogueado
      usuarioLogueado = u;
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
      break; // Termina el bucle una vez que se encuentra el usuario
    }
  }
}


  




//CREO DATA, que tiene la info de todos los albums, osea GUARDO EL ARRAY DE ALBUMS EN EL LOCAL
localStorage.setItem("data", JSON.stringify(allAlbums));

let albumsFavoritos = [];
//CREO FAVS, QUE se pregunta si favs ya existe, si no ,seteo favs como albums favoritos Y LO SETEO EN EL LOCAL
//localStorage.setItem("favs", localStorage.getItem("favs") ? localStorage.getItem("favs") : albumsFavoritos);

///////////////////////////////
// CREO const data, tomando los datos del locla que subi y lo hago JSON parse , para que pase de strings , a objeto.
const data = JSON.parse(localStorage.getItem("data"));

//CREO LA VAR CONTENEDOR y tomo el contenedor de los albums
const contenedor = document.querySelector(".contenedorAlbums");





//CREO 3 FUNCIONES QUE NOS VAN A SERVIR PARA EVALUAR SI UN ALBUM ESTA EN FAVORITOS , LA PRIMERA
// PARA AGREGAR A FAVORITOS LA SEGUNDA
// PARA QUITAR DE FAVORITOS LA TERCERA 


// esta funcion retorna true o false , favAlbum representa a un album de cada iteracion y compasra si el id de ese album es igual al parametro
// que se le pasa a la funcion, si es igual, devuelve true, sino devuelve false
function estaEnFavoritos(albumId) {
  return usuarioLogueado.albumsFavs.some(favAlbum => favAlbum.id === albumId);
}

// se le pasa un album y se lo pushea al array y el array se vuelve a guardar en el local
function agregarAlbumFavoritos(album) {
  usuarioLogueado.albumsFavs.push(album);
  
  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  
}

// Utiliza el método filter para crear un nuevo array que excluya el álbum con el id especificado. 
//Esto se logra comparando el id de cada álbum con albumId y eliminando aquellos que coinciden.
//Luego, guarda el nuevo array de álbumes favoritos (sin el álbum que se quiso quitar) en el almacenamiento local utilizando 
//localStorage.setItem. Esto actualiza la lista de favoritos sin el álbum específico.
function quitarAlbumFavoritos(albumId) {
  usuarioLogueado.albumsFavs = usuarioLogueado.albumsFavs.filter(favAlbum => favAlbum.id !== albumId);
  
  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  
  
}

// ACA RECORRO ESE ARRAY DE DATA CON LA FUNCION MAP, QUE ES UNA FUNCION DE LOS ARRAYLIST
// con la cual es tipo un for each y con este "for" VOY CREANDO CADA ARTICULO DINAMICAMENTE 
// Y LO VOY CREANDO IGUAL QUE COMO LO TENIAMOS EN EL HTML
// ASI CADA RTICULO ES UN OBJETO.
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
  
  span.innerHTML = "grade";
  span.className = "material-symbols-outlined fav";

  //EVALUO QUE SI ESTA EN FAVORITOS QUEDE MARCADA LA ESTRELLA
  if (estaEnFavoritos(album.id)) {
    span.classList.add("material-symbols-rounded");
  }
  


  // Añades el a y el span al article
  article.appendChild(a);
  article.appendChild(span);

  // Finalmente, añades el article al contenedor
  contenedor.appendChild(article);

  
  

  //AGREGO UN EVENTO A LA ESTRELLA QUE UTILIZA 3 FUNCIONES CREADAS ARRIBA PARA EVALUAR 
  // PARA AGREGAR O QUITAR DEL ARRAY DE FAVORITOS A LOS ALBUMS
  span.addEventListener("click", function(){
  
    

    if (estaEnFavoritos(album.id)){
      quitarAlbumFavoritos(album.id);
      span.classList.remove("material-symbols-rounded");
      span.classList.add("material-symbols-outlined");
      
    } else {
      agregarAlbumFavoritos(album);
      span.classList.add("material-symbols-rounded");
      span.classList.remove("material-symbols-outlined");

    }
    
  })

  //CREAMOS LA FUNCION PARA QEU VAYAN APARECIENDO LOS ALBUMS DE LA MUSICA SONANDO Y SU DESCRIPCION PERO, NO SABEMOS COMO HACER PARA QUE SE VAYAN REMPLAZANDO

  

  img.addEventListener("click", function() {
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

})
});



//EN EL CERRAR SESION AGREGO QUE CUANDO SE CIERRE SESION,  SE RECORRA EL ARRAY DE USUARIOS
// SE BORRE EL USUARIO QUE COINCIDA CON EL USUARIO LOGUEADO  Y SE LO MODIFIQUE POR LOS DATOS DEL USUARIO LOGUEADO
// LOS DATOS DEL USUARIO LOGUEADO SON LOS MISMOS QUE DEL REGISTRO, PERO EL MISMO VA A IR GUARDANDO ALBUMS Y CANCIONES
const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function(event){
    
   

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





