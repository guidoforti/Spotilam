const button = document.getElementById("button-inicio");

button.addEventListener("click", function(event) {
    const nombreUsuario = document.getElementById("usuario").value;
    localStorage.setItem("nombreUsuario", nombreUsuario);
})
