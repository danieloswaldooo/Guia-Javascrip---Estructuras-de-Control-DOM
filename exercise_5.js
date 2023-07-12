function mostrarCamposAdicionales() {
  let carro = document.getElementById("carros").value;
  let camposAdicionales = document.getElementById("camposAdicionales");
  let colorSelect = document.getElementById("color");

  colorSelect.innerHTML = "";

  if (carro !== "") {
    camposAdicionales.style.display = "block";
    if (carro === "fiesta") {
      generarOpcionesColor(["rojo", "verde", "azul", "negro"]);
    } else if (carro === "focus") {
      generarOpcionesColor(["azul", "negro", "verde", "blanco"]);
    } else if (carro === "escape") {
      generarOpcionesColor(["negro", "blanco", "rojo", "naranja"]);
    }
    actualizarPrecio();
  } else {
    camposAdicionales.style.display = "none";
  }
}

function generarOpcionesColor(colores) {
  let colorSelect = document.getElementById("color");
  for (let i = 0; i < colores.length; i++) {
    let option = document.createElement("option");
    option.value = colores[i];
    option.text = colores[i].charAt(0).toUpperCase() + colores[i].slice(1);
    colorSelect.appendChild(option);
  }
}

function generarFactura() {
  let carro = document.getElementById("carros").value;
  let color = document.getElementById("color").value;
  let estado = document.getElementById("estado").value;
  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value;
  let factura = document.getElementById("factura");
  let descuento = 0;
  let precioSinDescuento = 0;

  if (carro === "fiesta") {
    descuento = 0.05;
  } else if (carro === "focus") {
    descuento = 0.10;
  } else if (carro === "escape") {
    descuento = 0.20;
  }

  let modelo;
  if (carro === "fiesta") {
    if (estado === "nuevo") {
      precioSinDescuento = 150;
      modelo = "FORD FIESTA";
    } else if (estado === "usado") {
      precioSinDescuento = 120;
      modelo = "FORD FIESTA";
    }
  } else if (carro === "focus") {
    if (estado === "nuevo") {
      precioSinDescuento = 190;
      modelo = "FORD FOCUS";
    } else if (estado === "usado") {
      precioSinDescuento = 170;
      modelo = "FORD FOCUS";
    }
  } else if (carro === "escape") {
    if (estado === "nuevo") {
      precioSinDescuento = 200;
      modelo = "FORD ESCAPE";
    } else if (estado === "usado") {
      precioSinDescuento = 185;
      modelo = "FORD ESCAPE";
    }
  }

  let precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);

  Swal.fire({
    title: 'Factura Generada',
    html:
      '<strong>Modelo:</strong> ' + modelo + '<br>' +
      '<strong>Color:</strong> ' + color.toUpperCase() + '<br>' +
      '<strong>Estado:</strong> ' + estado.charAt(0).toUpperCase() + estado.slice(1) + '<br>' +
      '<strong>Precio con descuento:</strong> $' + precioConDescuento.toFixed(2) + '<br>' +
      '<strong>Precio sin descuento:</strong> $' + precioSinDescuento.toFixed(2) + '<br>' +
      '<strong>Dirección:</strong> ' + direccion + '<br>' +
      '<strong>Nombre:</strong> ' + nombre
  });
}