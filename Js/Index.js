const button = document.getElementById("button-inicio");
const USUARIOS = JSON.parse(localStorage.getItem("usuarios"));

button.addEventListener("click", function (event) {
  event.preventDefault();
  const nombreUsuario = document.getElementById("usuario").value;
  let contraseniaIngresada = document.getElementById("contraseña").value;
  const mitad1 = contraseniaIngresada.slice(0, contraseniaIngresada.length/2);
  const mitad2 = contraseniaIngresada.slice(contraseniaIngresada.length/2);
  const contraseniaVuelta = mitad2 + mitad1;
  contraseniaIngresada = contraseniaVuelta;

  let ingreso = false;

  USUARIOS.forEach((Usuario) => {
    if (
      Usuario.usuario === nombreUsuario &&
      Usuario.contrasenia === contraseniaIngresada
    ) {
      ingreso = true;
      return;
    } 
  });

  if (ingreso !== true) {
    const alerta = document.querySelector(".cuadroAlertaIngreso");
    alerta.classList.add("cuadroAlertaErrorIngreso");
    alerta.innerHTML = "<p> (!) El usuario y/o contraseña son incorrectos </p>";
    const recuadro = document.getElementById("contraseña");
    recuadro.classList.add("recuadro-rojo");
  } else {
    localStorage.setItem("nombreUsuario", nombreUsuario);
    window.location.href = "VistaPrincipal.html";
    localStorage.setItem("ingreso", ingreso);
  }
});
