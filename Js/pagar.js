const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;

const planSeleccionado = JSON.parse(localStorage.getItem("planSeleccionado"));
const nombrePlan = document.getElementById("plan");
nombrePlan.textContent = planSeleccionado.tipo;

const formulario = document.getElementById("formularioPagar")
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const numeroTarjeta = document.getElementById("NumeroTarjeta").value;

    if(numeroTarjeta.length !== 16){
        alert("El numero de tarjeta debe ser de 16 digitos");
        return;
    }

    const cvc = document.getElementById("CVC").value;

    if(cvc.length !== 3 || cvc === "000" || cvc === "999"){
        alert("El numero de CVC es invalido")
        return;
    }

    const fechaDeVTO = new Date(
        document.getElementById("fechaDeVTO").value
      );
    if (isNaN(fechaDeVTO)) {
        alert("porfavor, ingrese una fecha de nacimiento valida.");
        return;
      }

    const nombreApellido = document.getElementById("nombreApellido").value;

    if(nombreApellido.length === 0){
        alert("Ingrese nombre y apellido");
        return;
    }

    window.location.href = "VistaPrincipal.html"


    
})

const cancelar = document.getElementById("btnCancelar");

cancelar.addEventListener("click", function (event){
    window.location.href = "VistaPrincipal.html"
})











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
