function calcularNotaMediaPonderada() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let ponderacion1 = parseFloat(document.getElementById("ponderacion1").value);
    let ponderacion2 = parseFloat(document.getElementById("ponderacion2").value);

    let promedio = (valor1 * ponderacion1 + valor2 * ponderacion2) / (ponderacion1 + ponderacion2);

    document.getElementById("resultado").value = promedio;
  }
