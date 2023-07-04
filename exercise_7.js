function media(){ 
    let valor1 = parseFloat(document.getElementById("valor1").value); 
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let promedio = (valor1 + valor2)/2;
    document.getElementById("resultado").value = promedio;
}