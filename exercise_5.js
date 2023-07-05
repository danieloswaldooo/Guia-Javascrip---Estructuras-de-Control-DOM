function seleccionarCarro(carro) {
    let camposAdicionales = document.getElementById("camposAdicionales");
    let colorSelect = document.getElementById("color");
    let factura = document.getElementById("factura");

    colorSelect.innerHTML = "";

    if (carro !== "") {
      // Ocultar la factura
      factura.style.display = "none";
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
    let carro = document.getElementById("carros").textContent;
    let color = document.getElementById("color").value;
    let estado = document.getElementById("estado").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let factura = document.getElementById("factura");
    let descuento = 0;
    let precioSinDescuento = 0;

    if (carro === "FORD FIESTA") {
      descuento = 0.05;
    } else if (carro === "FORD FOCUS") {
      descuento = 0.10;
    } else if (carro === "FORD ESCAPE") {
      descuento = 0.20;
    }

    if (carro === "FORD FIESTA") {
      if (estado === "nuevo") {
        precioSinDescuento = 150;
      } else if (estado === "usado") {
        precioSinDescuento = 120;
      }
    } else if (carro === "FORD FOCUS") {
      if (estado === "nuevo") {
        precioSinDescuento = 190;
      } else if (estado === "usado") {
        precioSinDescuento = 170;
      }
    } else if (carro === "FORD ESCAPE") {
      if (estado === "nuevo") {
        precioSinDescuento = 200;
      } else if (estado === "usado") {
        precioSinDescuento = 185;
      }
    }

    let precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);

    document.getElementById("modelo").textContent = "Modelo: " + carro;
    document.getElementById("colorSeleccionado").textContent = "Color: " + color.toUpperCase();
    document.getElementById("estadoSeleccionado").textContent = "Estado: " + estado.charAt(0).toUpperCase() + estado.slice(1);
    document.getElementById("precioConDescuento").textContent = "Precio con descuento: $" + precioConDescuento.toFixed(2);
    document.getElementById("precioSinDescuento").textContent = "Precio Sin descuento: $" + precioSinDescuento.toFixed(2);
    document.getElementById("direccionSeleccionada").textContent = "Dirección: " + direccion;
    document.getElementById("nombreSeleccionado").textContent = "Nombre: " + nombre;

    factura.style.display = "block";
  }