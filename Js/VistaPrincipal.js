const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;

const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function(event){
    window.location.href = "Index.html";
    const cerroSesion = localStorage.setItem("ingreso", false);
})

 //const cancionSonando = document.getElementById("cancion-sonando").textContent;
//localStorage.setItem("Cancion Sonando", cancionSonando); 

//NO FUNCIONA

// const estrella = document.querySelector(".fav");
// estrella.addEventListener("click", function(event){
//     estrella.classList.remove("material-symbols-outlined");
//     estrella.classList.add("material-symbols-rounded");
//     estrella.textContent = "star";
// }) 







/* DUDAS: 
como hacemos para seleccionar el album y poder agregarle estos atributos? esto esta bien ? o cuando nosotros declaramos album1 por el id, y despues
 le ponemos estos datos, como nombre y canciones, ya no es ese elemento de la pagiona? */

const album1 = {
  nombre: "This is nora en pure",
  id: "a1",
  img: "img/nora.jpg",
  canciones: [
    { id: "album1Cancion1", nombre: "oblivion", duracion: "3:21", vistas: "9000" },
    { id: "album1Cancion2", nombre: "oblivion", duracion: "3:21", vistas: "9000" },
    { id: "album1Cancion3", nombre: "oblivion", duracion: "3:21", vistas: "9000" },
  ],
};

const album2 = {
  nombre: "This is Bad Bunny",
  id: "a2",
  img: "img/bdbn.jpg",
  canciones: [
    { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
  ],
};

 const album3 = {
   nombre: "This is Yeat",
  id: "a3",
   img: "img/yeat.jpg",
   canciones: [
     { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
     { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
     { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
   ],
 };

 const album4 = {
    nombre: "This is Daft Punk",
   id: "a4",
    img: "img/dftpnk.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album5 = {
    nombre: "This is Kayne west",
   id: "a5",
    img: "img/kayneWest.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album6 = {
    nombre: "This is Pink Floyd",
   id: "a6",
    img: "img/pinkfloyd.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album7 = {
    nombre: "This is Tame impala",
   id: "a7",
    img: "img/tame impala.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };


  const album8 = {
    nombre: "This is Quevedo",
   id: "a8",
    img: "img/quevedo.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album9 = {
    nombre: "This is Ben Bhomer",
   id: "a9",
    img: "img/benbhomer.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album10 = {
    nombre: "This is Nicky Nicole",
   id: "a10",
    img: "img/nicky.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album11 = {
    nombre: "This is Nompa",
   id: "a11",
    img: "img/nompa.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album12 = {
    nombre: "This is Trueno",
   id: "a12",
    img: "img/trueno.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album13 = {
    nombre: "This is Tini",
   id: "a13",
    img: "img/TTT.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  const album14 = {
    nombre: "This is Mac Miller",
   id: "a14",
    img: "img/kayne.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };
  const album15 = {
    nombre: "This is Two feets",
   id: "a15",
    img: "img/2feet.jpg",
    canciones: [
      { id: "album2Cancion1", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion2", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
      { id: "album2Cancion3", nombre: "where she goes", duracion: "3:21", vistas: "9000" },
    ],
  };

  //CREO EL ARRAY CON TODOS LOS ALBUMS.
const allAlbums = [
  album1, album2, album3 , album4, album5 , album6 , album7 , album8 , album9 , album10, album11, album12, album13 , album14 , album15 
];

//CREO DATA, que tiene la info de todos los albums, osea GUARDO EL ARRAY DE ALBUMS EN EL LOCAL
localStorage.setItem("data", JSON.stringify(allAlbums));

let albumsFavoritos = [];
//CREO FAVS, QUE se pregunta si favs ya existe, si no ,seteo favs como albums favoritos Y LO SETEO EN EL LOCAL
localStorage.setItem("favs", localStorage.getItem("favs") ? localStorage.getItem("favs") : albumsFavoritos);

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
  return albumsFavoritos.some(favAlbum => favAlbum.id === albumId);
}

// se le pasa un album y se lo pushea al array y el array se vuelve a guardar en el local
function agregarAlbumFavoritos(album) {
  albumsFavoritos.push(album);
  localStorage.setItem("albumsFavoritos", JSON.stringify(albumsFavoritos));
}

// Utiliza el método filter para crear un nuevo array que excluya el álbum con el id especificado. 
//Esto se logra comparando el id de cada álbum con albumId y eliminando aquellos que coinciden.
//Luego, guarda el nuevo array de álbumes favoritos (sin el álbum que se quiso quitar) en el almacenamiento local utilizando 
//localStorage.setItem. Esto actualiza la lista de favoritos sin el álbum específico.
function quitarAlbumFavoritos(albumId) {
  albumsFavoritos = albumsFavoritos.filter(favAlbum => favAlbum.id !== albumId);
  localStorage.setItem("favs", JSON.stringify(albumsFavoritos));
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
  span.className = "material-symbols-outlined fav"; // ¿? preguntar si la id esta en favoritos para darle el estilo correspondiente y la funcion correspondiente
  span.innerHTML = "grade"; // Puedes cambiar esto si necesitas un valor dinámico

  //añadir event listener on click y validar si esta en favoritos, para darle la funcion correspondiente

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
    } else {
      agregarAlbumFavoritos(album);
      span.classList.add("material-symbols-rounded");
    }
    
  })

  //CREAMOS LA FUNCION PARA QEU VAYAN APARECIENDO LOS ALBUMS DE LA MUSICA SONANDO Y SU DESCRIPCION PERO, NO SABEMOS COMO HACER PARA QUE SE VAYAN REMPLAZANDO

  

  article.addEventListener("click", function() {
    const articuloAlbumEscuchando = document.createElement("article");
    articuloAlbumEscuchando.className = "albumDescripcion";

    const aDeArticuloEcuchando = document.createElement("a");
    aDeArticuloEcuchando.href = "musicaSonando.html";

    const imgDeArticuloEscuchando = document.createElement("img");
    imgDeArticuloEscuchando.className = "imgAlbumDescripcion";
    imgDeArticuloEscuchando.src = album.img;


    aDeArticuloEcuchando.appendChild(imgDeArticuloEscuchando);
    articuloAlbumEscuchando.appendChild(aDeArticuloEcuchando);

    const albumDescripcion = document.querySelector(".cancionReproduciendo")
    while (albumDescripcion.firstChild) {
        albumDescripcion.removeChild(albumDescripcion.lastChild);
    }
    albumDescripcion.appendChild(articuloAlbumEscuchando);

    const descripcionDelAlbum = document.createElement("article");
    descripcionDelAlbum.className = "descripcionCancion";
    const pDescripcion = document.createElement("p");
    pDescripcion.id = "cancion-sonando";
    pDescripcion.innerHTML = album.nombre;

    descripcionDelAlbum.appendChild(pDescripcion);
    albumDescripcion.appendChild(descripcionDelAlbum);

    localStorage.setItem("albumEscuchando", JSON.stringify(album));

})
});



// ACA TENGO QUE CREAR LAS DOS FUNCIONES PARA AÑADIR Y SACAR DE FAVORITOPS 
// tenemos que crear una funcion, que tome al album , lo agregue al array de favoritos si no esta y le cambie el estilo de la estrella osea la clase y el eventlistener



// const favorites = JSON.parse(localStorage.getItem("favs"));

// funcion añadir a fav => añadir a favoritos, cambiar el classname, cambiar el eventlistener

// funcion quitar de fav => quitar de favoritos, cambiar el classname, cambiar el eventlistener





