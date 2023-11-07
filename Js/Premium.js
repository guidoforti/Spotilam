const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;


const formPlanes = document.querySelector(".planesPremium");


const opciones = document.querySelectorAll(".inputPlanes");


let planSeleccionado = {
    tipo: "", // Guardará el tipo de plan
    nombre: "" // Guardará el nombre del plan
  };
  
  opciones.forEach(opcion => {
    opcion.addEventListener("change", () => {
      planSeleccionado.tipo = opcion.id;
      planSeleccionado.nombre = opcion.dataset.nombre;
    });
  });
  
  usuario.textContent = nombreUsuario;
  
  formPlanes.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (planSeleccionado.tipo !== "") {
      // Almacena el objeto que contiene el tipo y el nombre del plan en el Local Storage
      localStorage.setItem("planSeleccionado", JSON.stringify(planSeleccionado));
      window.location.href = "pagar.html";
    } else {
      alert("Por favor, selecciona un plan antes de enviar el formulario.");
    }
  });

    


  












const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function(event){
    
   

    const usuarioModificado = usuarioLogueado;

    for ( i = 0; i< usuarios.length ; i++) {

      if (usuarios[i].usuario === usuarioLogueado.usuario) {
        usuarios[i].remove;
        usuarios[i] = usuarioModificado;
        localStorage.removeItem("usuarioLogueado");
        localStorage.removeItem("albumsFavoritos");
        break;
      }
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    const cerroSesion = localStorage.setItem("ingreso", false);
    window.location.href = "Index.html";
}) 