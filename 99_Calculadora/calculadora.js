var btnSumar = document.getElementById("btnSumar");
btnSumar.addEventListener("Click" , function(e){
    e.preventDefault();
    var numerouno = parseFloat(document.getElementById("numerouno").value);
    var numerodos = parseFloat(document.getElementById("numerodos").value);

    var resultado = numerouno + numerodos;
    document.getElementById("resultado").textContent = resultado;
});