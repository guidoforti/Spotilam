


const USUARIOS = [];

function Usuario (usuario , contrasenia, confContrasenia, fechaNacimiento ,email  ) {

this.usuario = usuario;
this.contrasenia = contrasenia;
this.confContrasenia = confContrasenia;
this.fechaNacimiento = fechaNacimiento;
this.email = email;
}



/* COSAS A CORREGIR

EL USUARIO SE REGISTRA Y SEGUARDA EN EL ARRAY
PERO LAS VALIDACIONES COMO QUE LA CONTRASEÑA SEA DE 8 DIGITOS, SEA IGUAL
EL MAIL TENGA @, Y DAR VUELTA LA CONTRASEÑA, NO FUNCIONA. 
*/
const formulario = document.getElementById ("formularioDeRegistro");

formulario.addEventListener("submit" , function(event){
event.preventDefault();

/* tomo los datos del formulario */
const nombre = document.getElementById("usuario").value;
const contrasena = document.getElementById("contraseña").value;

const confContrasena = document.getElementById("confirmeContraseña").value;
const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
const email = document.getElementById("email").value;

//VALIDO QUE LA CONTRASEÑA SEA DE 8 DIGITOS Y LA DOY VUELTA
/*if (contrasena.lenght < 8 || contrasena.lenght > 8) {
    alert("la contraseña debe ser de 8 digitos");
    return;
}else {

    const mitad1= contrasena.slice(0, contrasena.lenght / 2);
    const mitad2= contrasena.slice(contrasena.lenght / 2);
    const contrasenaVuelta = mitad2+mitad1;

} */

// valido que las contraseñas sean iguales y doy vuelta la 2 contra
/*if (contrasena !== confContrasena) {
    alert("las contraseñas no coinciden, por favor intentelo nuevamente")
    return;
}else {
    const mitad1Conf= confContrasena.slice(0, contrasena.lenght / 2);
    const mitad2Conf= confContrasena.slice(contrasena.lenght / 2);
    const confContrasenaVuelta = mitad2Conf+mitad1Conf;
} */

// valido fecha de nacimiento
if (isNaN(fechaNacimiento)) {
    alert("porfavor, ingrese una fecha de nacimiento valida.")
    return;
}

//validamos mail



if (!email.includes("@")) {
    alert("el email debe ser un mail valido");
    return;
}


const usuarioNuevo = new Usuario(nombre, contrasena , confContrasena, fechaNacimiento, email);

USUARIOS.push(usuarioNuevo);

localStorage.setItem("usuarios" , JSON.stringify(USUARIOS));

formulario.reset();
alert("usuario registrado con exito");
    
});

