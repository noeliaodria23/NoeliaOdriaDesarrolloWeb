function mostrarMensaje(event){
    event.preventDefault(); // Evita que se envie el formulario

    var mensaje = parseInt(document.getElementById("textoIngresado").value);

    var textoMostrado = "";

    if(mensaje > 0){
        textoMostrado = "Es mayor a 0"; 
    }else{
        if(mensaje < 0){
            textoMostrado = "Es menor a 0";
        }else{
            textoMostrado = "Es igual a 0";
        }
    }

    document.querySelector("#mensaje").textContent = textoMostrado;
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit" , mostrarMensaje); 