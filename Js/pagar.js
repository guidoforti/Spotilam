const nombreUsuario = localStorage.getItem("nombreUsuario");
const usuario = document.getElementById("usuario");


usuario.textContent = nombreUsuario;

const planSeleccionado = JSON.parse(localStorage.getItem("planSeleccionado"));
const nombrePlan = document.getElementById("plan");
nombrePlan.textContent = planSeleccionado.tipo;
/*estoy probando otra cosa - Maga*/
const campoNumeroTarjeta = document.getElementById("campoNumeroTarjeta");
const campoCvc = document.getElementById("campoCvc");
const campoFechaVto = document.getElementById("campoFechaVto");
const campoNombreApellido = document.getElementById("campoNombreApellido");
const numeroTarjeta = document.getElementById("NumeroTarjeta");
const nombreApellido = document.getElementById("nombreApellido");
const cvc = document.getElementById("CVC");
const inputFecha = document.getElementById("fechaDeVTO");
const error1 = document.createElement('span');
const error2 = document.createElement('span');
const error3 = document.createElement('span');
const error4 = document.createElement('span');


    numeroTarjeta.addEventListener('blur', function(){
        if(numeroTarjeta.value.length !== 16){
            error1.textContent = "El numero de tarjeta debe ser de 16 digitos";
            error1.style.color = "red";
            campoNumeroTarjeta.appendChild(error1);
        } else{
            error1.textContent = "";
        }
    });

    cvc.addEventListener('blur', function(){
        if(cvc.value.length !== 3 || cvc.value === "000" || cvc.value === "999"){
            error2.textContent ="El numero de CVC es invalido";
            error2.style.color = "red";
            campoCvc.appendChild(error2);
        } else {
            error2.textContent = "";
        }

    });
  
        inputFecha.addEventListener('blur',function(){
            let fechaIngresada = inputFecha.value;
            if (!isValidDate(fechaIngresada)) {
                error3.textContent="Ingrese una fecha valida";
                error3.style.color = "red";
                campoFechaVto.appendChild(error3);  
            }else {
                error3.textContent="";
            }
        });

        nombreApellido.addEventListener("blur", function(){
            if(nombreApellido.value.length === 0){
                error4.textContent = "Ingrese nombre y apellido";
                error4.style.color = "red";
                campoNombreApellido.appendChild(error4);
            }else{
                error4.textContent = "";
            }
        })

        function isValidDate(dateString) {
    // Utilizo una expresión regular para verificar el formato YYYY-MM-DD
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
    return false;
    }
    var date = new Date(dateString);
    return !isNaN(date.getTime());
}

const btnPagar = document.getElementById("btnPagar");

btnPagar.addEventListener("click", (e)=>{
 if(error1.value ==""&& error2.value==""&& error3.value==""&& error4.value==""){
    
 }
});
/*
const formulario = document.getElementById("formularioPagar")
formulario.addEventListener("change", function (event) {
    event.preventDefault();

    const numeroTarjeta = document.getElementById("NumeroTarjeta").value;
    const error = document.createElement('span');

    if(numeroTarjeta.length !== 16){
        error.textContent = "El numero de tarjeta debe ser de 16 digitos";
        campoNumeroTarjeta.appendChild(error);
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
*/
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
