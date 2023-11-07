const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;



let usuarios = JSON.parse(localStorage.getItem("usuarios"));


const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));



const eliminarUsuario = document.getElementById("btnEliminar");

eliminarUsuario.addEventListener("click", ()=> {
    
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuarioLogueado.usuario) {
          // Usar splice para eliminar el usuario del arreglo
          usuarios.splice(i, 1);
          localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Actualizar el arreglo en localStorage
          localStorage.removeItem("usuarioLogueado");
          console.log("Usuario eliminado");
          window.location.href = "index.html";
          break;
        }
      }
 
})



const forumlarioDeActualizacion = document.querySelector(".form-editarperfil");

forumlarioDeActualizacion.addEventListener("submit", (event)=> {
    event.preventDefault();

    const usuarioN = document.getElementById("usuarioNuevo").value;
    const contraN = document.getElementById("contraNueva").value;
    const contraNR = document.getElementById("contraNuevaR").value;
    const fechaN = document.getElementById("fechaNueva").value;
    const emailN = document.getElementById("emailNuevo").value;

    for ( let i = 0 ; i < usuarios.length ; i++) {

        if (usuarios[i].usuario === usuarioLogueado.usuario) {
            /*usuarios.splice(i , 1);*/

            usuarioLogueado.usuario = usuarioN;
            usuarioLogueado.contrasenia = contraN;
            usuarioLogueado.confContrasenia = contraNR;
            usuarioLogueado.fechaNacimiento = fechaN;
            usuarioLogueado.email = emailN;
            usuarioLogueado.albumsFavs = usuarioLogueado.albumsFavs;
            usuarioLogueado.cancionesFavs = usuarioLogueado.cancionesFavs;
            usuarioLogueado.tienePremium = usuarioLogueado.tienePremium;
            
           
            usuarios[i] = usuarioLogueado;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            localStorage.setItem("usuarioLogueado" , JSON.stringify(usuarioLogueado));
            
            const contenedor = document.querySelector(".contenedorAlerta");
            const alertaPositiva = document.createElement("div");
            alertaPositiva.className = ("alertaPositiva");
            alertaPositiva.innerHTML = `<p> usuario actualizado correctamente </p>`;
            const botonHome = document.createElement("button");
            botonHome.innerHTML = `<p> Inicio </p>`
            
            const botonCerrar = document.createElement("button");
            botonCerrar.innerHTML = `<p> cerrar </p>`
            
            
            alertaPositiva.appendChild(botonCerrar);
            alertaPositiva.appendChild(botonHome);
            contenedor.appendChild(alertaPositiva);

            botonHome.addEventListener("click", ()=> {
                window.location.href = "VistaPrincipal.html";
            } )

            botonCerrar.addEventListener("click", () =>{
                contenedor.removeChild(alertaPositiva);

            })

            break; 
           
            
        }
    }
})


const botonPremium = document.getElementById("btnPremium");

botonPremium.addEventListener("click", ()=> {
    window.location.href = "Premium.html"
})






// CERRAR SESION

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