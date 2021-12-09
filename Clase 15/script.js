function mostrarDatos(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var mostrarDatos = apellido + "," + nombre;

    document.querySelector("h2").textContent = mostrarDatos;

}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarDatos);