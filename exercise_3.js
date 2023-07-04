
function obtenerCalculo() { // En la funcion obtenerCalculo como el nombre lo dice obtenemos, recibimos o recopilamos los datos-
  let nombre = document.getElementById("nombre").value; 
  let salario = parseFloat(document.getElementById("salario").value);
  let categoria = document.getElementById("categoria").value;

  let personalSalario = salarioCalculator(nombre, salario, categoria); // asiganamos la variable personalSalario donde guardamos los datos para enviarlos a una nueva funcion.
  document.getElementById("trabajadors").innerHTML = personalSalario; // Se sobre entiende que con esta variable retornaremos para la impresion de datos. 
}

function salarioCalculator(nombre, salario, categoria) { //En esta funcion calculamos nuestros datos y los condicionamos conforme el salario y el nuevo aumento.
  let aumento = 0;
//condicionamos cada uno conforme su categoria y el descuento que se le ha asignado.
  if (categoria === "A") { 
    aumento = salario * 0.15;
  } else if (categoria === "B") {
    aumento = salario * 0.30;
  } else if (categoria === "C") {
    aumento = salario * 0.10;
  } else if (categoria === "D") {
    aumento = salario * 0.20;
  }
    suma = aumento + salario; // Sumamos nuestro aumento con el salario para sacar el resultado de el nuevo salario.
    
    //Retornamos e imprimimos
    return "Nombre: " + nombre + "<br>" +
                        "Salario actual: $" + salario.toFixed(2) + "<br>" +
                        "Categoría: " + categoria + "<br>" +
                        "Aumento salarial: $" + aumento.toFixed(2)+ "<br>" +
                        "Nuevo Salario: $" + suma.toFixed(2);
}



