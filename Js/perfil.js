const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");
usuario.textContent = nombreUsuario;

let usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
const botonPremium = document.getElementById("btnPremium");

if (usuarioLogueado.tienePremium === "true") {
  botonPremium.style.display = "none";
}

botonPremium.addEventListener("click", () => {
  window.location.href = "Premium.html";
});

//Precargado de campos
const usuarioActual = usuarioLogueado.usuario;
const contraseniaActual = darVuelta(usuarioLogueado.contrasenia);
const fechaNacimientoActual = usuarioLogueado.fechaNacimiento;
const emailActual = usuarioLogueado.email;

document.getElementById("usuarioNuevo").value = usuarioActual;
document.getElementById("contraNueva").value = contraseniaActual;
document.getElementById("contraNuevaR").value = contraseniaActual;
document.getElementById("fechaNueva").value = fechaNacimientoActual;
document.getElementById("emailNuevo").value = emailActual;

function darVuelta(contrasenia) {
  const mitad1 = contrasenia.slice(0, contrasenia.length / 2);
  const mitad2 = contrasenia.slice(contrasenia.length / 2);
  const resultado = mitad2 + mitad1;
  return resultado;
}

const eliminarUsuario = document.getElementById("btnEliminar");

eliminarUsuario.addEventListener("click", () => {
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
});

const forumlarioDeActualizacion = document.querySelector(".form-editarperfil");

forumlarioDeActualizacion.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuarioN = document.getElementById("usuarioNuevo").value;
  let contraN = document.getElementById("contraNueva").value;
  let contraNR = document.getElementById("contraNuevaR").value;
  const fechaN = document.getElementById("fechaNueva").value;
  const emailN = document.getElementById("emailNuevo").value;

  if (contraN.length !== 8 || contraNR.length !== 8) {
    alert("la contraseña debe ser de 8 digitos");
    return;
  } else {
    contraN = darVuelta(contraN);
    contraNR = darVuelta(contraNR);
  }

  if (contraN !== contraNR) {
    alert("las contraseñas no coinciden, por favor intentelo nuevamente");
    return;
  }

  function isValidDate(dateString) {
    const fechaIngresada = new Date(dateString);
    const fechaActual = new Date();
    if (fechaIngresada > fechaActual) {
      return false;
    }

    return true;
  }

  if (!isValidDate(fechaN)) {
    alert("porfavor, ingrese una fecha de nacimiento valida.");
    return;
  }

  for (let i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].usuario !== usuarioLogueado.usuario &&
      usuarios[i].usuario === usuarioN
    ) {
      alert("El usuario ingresado ya existe");
      return;
    }
  }

  for (let i = 0; i < usuarios.length; i++) {
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
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));

      const contenedor = document.querySelector(".contenedorAlerta");
      const alertaPositiva = document.createElement("div");
      alertaPositiva.className = "alertaPositiva";
      alertaPositiva.innerHTML = `<p class="textoAlerta">Usuario actualizado correctamente.</p>`;

      const botonHome = document.createElement("button");
      botonHome.className = "button";
      botonHome.innerHTML = `<p>Inicio</p>`;

      const botonCerrar = document.createElement("button");
      botonCerrar.className = "button";
      botonCerrar.innerHTML = `<p>Cerrar</p>`;

      alertaPositiva.appendChild(botonCerrar);
      alertaPositiva.appendChild(botonHome);
      contenedor.appendChild(alertaPositiva);

      localStorage.setItem("nombreUsuario", usuarioLogueado.usuario);

      botonHome.addEventListener("click", () => {
        window.location.href = "VistaPrincipal.html";
      });

      botonCerrar.addEventListener("click", () => {
        contenedor.removeChild(alertaPositiva);
        location.reload();
      });

      

      break;
    }
  }
});



// CERRAR SESION

const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function (event) {
  const usuarioModificado = usuarioLogueado;

  for (i = 0; i < usuarios.length; i++) {
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
});
