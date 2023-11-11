const nombreUsuario = localStorage.getItem("nombreUsuario");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const usuario = document.getElementById("usuario");
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

const ingreso = localStorage.getItem("ingreso");

if (ingreso !== "false") {
    usuario.textContent = nombreUsuario;
    botonCerrarSesion.textContent = "Cerrar sesión";
}



const planSeleccionado = JSON.parse(localStorage.getItem("planSeleccionado"));
const nombrePlan = document.getElementById("plan");
const descripcionPlan = document.getElementById("descripcionPlan");
nombrePlan.textContent = planSeleccionado.tipo;

 switch(planSeleccionado.tipo) {
    case "Plan Mensual":
        descripcionPlan.textContent = "Musica sin anuncios. Paga por mes. Reproduccion On-demand. Escucha tus canciones en cualquier lugar.";
        break;
    case "Plan Anual":
        descripcionPlan.textContent = "Musica sin anuncios. Paga por año. Reproduccion On-demand. Super descuentos.";
        break;
    case "Plan Infinito": 
        descripcionPlan.textContent = "Musica sin anuncios para toda tu vida. Paga una sola vez. Reproduccion On-demand. Super descuentos.";
        break;
}

/*estoy probando otra cosa - Maga*/
const campoNumeroTarjeta = document.getElementById("campoNumeroTarjeta");
const campoCvc = document.getElementById("campoCvc");
const campoFechaVto = document.getElementById("campoFechaVto");
const campoNombreApellido = document.getElementById("campoNombreApellido");
const numeroTarjeta = document.getElementById("NumeroTarjeta");
const nombreApellido = document.getElementById("nombreApellido");
const cvc = document.getElementById("CVC");
const inputFecha = document.getElementById("fechaDeVTO");
const errNumeroTarjeta = document.createElement('span');
const errCVC = document.createElement('span');
const errFecha = document.createElement('span');
const errNombreYApellido = document.createElement('span');


numeroTarjeta.addEventListener('blur', function () {
    
    if (numeroTarjeta.value.length !== 16) {
        errNumeroTarjeta.textContent = "El numero de tarjeta debe ser de 16 digitos";
        errNumeroTarjeta.style.color = "red";
        campoNumeroTarjeta.appendChild(errNumeroTarjeta);
    } else {
        errNumeroTarjeta.textContent = "";
    }
});

cvc.addEventListener('blur', function () {
    if (cvc.value.length !== 3 || cvc.value === "000" || cvc.value === "999") {
        errCVC.textContent = "El numero de CVC es invalido";
        errCVC.style.color = "red";
        campoCvc.appendChild(errCVC);
    } else {
        errCVC.textContent = "";
    }

});

inputFecha.addEventListener('blur', function () {
    let fechaIngresada = inputFecha.value;
    if (!isValidDate(fechaIngresada)) {
        errFecha.textContent = "Ingrese una fecha valida. Asegúrese de que la tarjeta no esté vencida.";
        errFecha.style.color = "red";
        campoFechaVto.appendChild(errFecha);
    } else {
        errFecha.textContent = "";
    }
});

nombreApellido.addEventListener("blur", function () {
    if (nombreApellido.value.length === 0) {
        errNombreYApellido.textContent = "Ingrese nombre y apellido";
        errNombreYApellido.style.color = "red";
        campoNombreApellido.appendChild(errNombreYApellido);
    } else {
        errNombreYApellido.textContent = "";
    }
});

function isValidDate(dateString) {
    //Reviso que la fecha sea posterior a hoy
    const fechaIngresada = new Date(dateString);
    const fechaActual = new Date();
    if (fechaIngresada < fechaActual) {
        return false;
    }
    
    return true;
}

const btnPagar = document.getElementById("btnPagar");
const dialog = document.getElementById("dialogConfirmation");
dialog.open = false;
btnPagar.addEventListener("click", (e) => {
    e.preventDefault();
    if(numeroTarjeta.value.length !== 0 && cvc.value.length !== 0 && inputFecha.value.length !== 0 && nombreApellido.value.length !== 0) {
        if (errNumeroTarjeta.textContent == "" && errCVC.textContent == "" && errFecha.textContent == "" && errNombreYApellido.textContent == "") {
            dialog.classList.add("dialog");
            dialog.showModal();
            usuarioLogueado.tienePremium = "true";
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
            console.log(usuarioLogueado);
        }
    }
});

const aceptar = document.getElementById("aceptar");
aceptar.addEventListener("click", function(event) {
    if(ingreso === "true") {
        window.location.href = "VistaPrincipal.html"
    }
    else {
        window.location.href = "index.html"
    }
})

// const formulario = document.getElementById("formularioPagar")
// formulario.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("hola");
// })

const cancelar = document.getElementById("btnCancelar");

cancelar.addEventListener("click", function (event) {
    window.location.href = "VistaPrincipal.html"
})


const cerrarSesion = document.querySelector(".cerrar-sesion");
cerrarSesion.addEventListener("click", function (event) {



    const usuarioModificado = usuarioLogueado;

    for (i = 0; i < usuarios.length; i++) {

        if (usuarios[i].usuario === usuarioLogueado.usuario) {
            usuarios[i].remove;
            usuarios[i] = usuarioModificado;
            localStorage.removeItem("usuarioLogueado");
            localStorage.removeItem("nombreUsuario");
            localStorage.removeItem("albumsFavoritos");
            break;
        }
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    const cerroSesion = localStorage.setItem("ingreso", false);
    window.location.href = "Index.html";
}) 
