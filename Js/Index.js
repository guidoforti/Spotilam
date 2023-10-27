const button = document.getElementById("button-inicio");
const USUARIOS = JSON.parse(localStorage.getItem("usuarios"));



button.addEventListener("click", function(event) {
    event.preventDefault();
    const nombreUsuario = document.getElementById("usuario").value;
    const contraseniaIngresada = document.getElementById("contraseña").value;
    

    let ingreso;

     USUARIOS.forEach( (Usuario) => {

      
        if (Usuario.usuario == nombreUsuario && Usuario.contrasenia == contraseniaIngresada) {
            
            ingreso = true;

        }else
        {
            ingreso = false;
            
        }  
     })

     if ( ingreso !== true) {
        const alerta = document.querySelector(".cuadroAlertaIngreso");
        alerta.classList.add("cuadroAlertaErrorIngreso");
        alerta.innerHTML = "<p> el usuario y/o contraseña son incorrectos </p>";
        

     }else {
        localStorage.setItem("nombreUsuario", nombreUsuario);
        window.location.href = "VistaPrincipal.html";
        localStorage.setItem("ingreso" , ingreso);
     }
})
