let USUARIOS = [];

// Verifica si hay datos en el localStorage
const storedUsers = localStorage.getItem("usuarios");

// Si existen datos en el localStorage, úsalos; de lo contrario, mantén el arreglo vacío.
if (storedUsers) {
  USUARIOS = JSON.parse(storedUsers);
}

function Usuario(
  usuario,
  contrasenia,
  confContrasenia,
  fechaNacimiento,
  email,
  tienePremium,
  albumsFavs,
  cancionesFavs
) {
  this.usuario = usuario;
  this.contrasenia = contrasenia;
  this.confContrasenia = confContrasenia;
  this.fechaNacimiento = fechaNacimiento;
  this.email = email;
  this.tienePremium = false;
  this. albumsFavs = [];
  this.cancionesFavs = [];
}

/* COSAS A CORREGIR

EL USUARIO SE REGISTRA Y SEGUARDA EN EL ARRAY
PERO LAS VALIDACIONES COMO QUE LA CONTRASEÑA SEA DE 8 DIGITOS, SEA IGUAL
EL MAIL TENGA @, Y DAR VUELTA LA CONTRASEÑA, NO FUNCIONA. 
*/
const formulario = document.getElementById("formularioDeRegistro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  /* tomo los datos del formulario */
  const nombre = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contraseña").value;

  let confContrasena = document.getElementById("confirmeContraseña").value;
  const fechaNacimiento = new Date(
    document.getElementById("fechaNacimiento").value
  );
  const email = document.getElementById("email").value;
  
  //VALIDO QUE LA CONTRASEÑA SEA DE 8 DIGITOS Y LA DOY VUELTA
  if (contrasena.length !== 8 || confContrasena.length !== 8) {
    alert("la contraseña debe ser de 8 digitos");
    return;
  } else {
    const mitad1 = contrasena.slice(0, contrasena.length / 2);
    const mitad2 = contrasena.slice(contrasena.length / 2);
    const contrasenaVuelta = mitad2 + mitad1;
    contrasena = contrasenaVuelta;

    const mitad1Conf = confContrasena.slice(0, confContrasena.length / 2);
    const mitad2Conf = confContrasena.slice(confContrasena.length / 2);
    const confContrasenaVuelta = mitad2Conf + mitad1Conf;
    confContrasena = confContrasenaVuelta;
  }

  // valido que las contraseñas sean iguales
  if (contrasena !== confContrasena) {
    alert("las contraseñas no coinciden, por favor intentelo nuevamente");
    return;
  }

  if (isNaN(fechaNacimiento)) {
    alert("porfavor, ingrese una fecha de nacimiento valida.");
    return;
  }

  const usuarioNuevo = new Usuario(
    nombre,
    contrasena,
    confContrasena,
    fechaNacimiento,
    email
    
  );

  USUARIOS.push(usuarioNuevo);

  localStorage.setItem("usuarios", JSON.stringify(USUARIOS));
  formulario.reset();

  alert("usuario registrado con exito");
  window.location.href = "index.html";
});
