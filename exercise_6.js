function destinoFinal(destino){
    let resultado_descuento = document.getElementById("resultado_descuento");
    

    if(destino === "costa_sol"){
        resultado_descuento.style.display = "";
        nuevoPrecio.innerHTML = "";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Nuevo precio a pagar $95",
            showConfirmButton: false,
            timer: 1500
        })
    }else if(destino === "panchimalco"){
        resultado_descuento.style.display = "";
        nuevoPrecio.innerHTML = "";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Nuevo precio a pagar $180",
            showConfirmButton: false,
            timer: 1500
        })
    }else if(destino === "puerto_triunfo"){
        resultado_descuento.style.display = "";
        nuevoPrecio.innerHTML = "";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Nuevo precio a pagar $255",
            showConfirmButton: false,
            timer: 1500
        })
    }
}

