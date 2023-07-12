function calcularPromedios() {
    let edadesManana = [];
    let edadesTarde = [];
    let edadesNoche = [];

    // Recibiendo las edades de los estudiantes 
    //mañana
    for (let i = 0; i < 5; i++) {
        let edadM = parseInt(document.getElementById('manana' + (i + 1)).value);
        edadesManana.push(edadM);
    }
    //Tarde
    for (let i = 0; i < 6; i++) {
        let edadT = parseInt(document.getElementById('tarde' + (i + 1)).value);
        edadesTarde.push(edadT);
    }
    //Noche
    for (let i = 0; i < 11; i++) {
        let edadN = parseInt(document.getElementById('noche' + (i + 1)).value);
        edadesNoche.push(edadN);
    }

    // Declarando variables para calcular los promedios
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);
    //Funcion para calcular los promedios   
    function calcularPromedio(edades) {
        let suma = 0;
        for (let i = 0; i < edades.length; i++) {
            suma += edades[i] ;
        }
        let promedio = suma / edades.length;
        return promedio;
    }

    //Condicional para saber cual de los tres turnos tiene el promedio mayo
    let promedioMayor;  
    if (promedioManana >= promedioTarde && promedioManana >= promedioNoche) {
        promedioMayor = "Mañana";
    } else if (promedioTarde >= promedioManana && promedioTarde >= promedioNoche) {
        promedioMayor = "Tarde";
    } else if (promedioNoche >= promedioManana && promedioNoche >= promedioTarde) { 
         promedioMayor = "Noche";
    }
    
    
    Swal.fire({
        icon: 'success',
        title: 'Promedios Calculados',
        html:
            '<strong>Mañana:</strong> ' + promedioManana.toFixed(2) + '<br>' +
            '<strong>Tarde:</strong> ' + promedioTarde.toFixed(2) + '<br>' +
            '<strong>Noche:</strong> ' + promedioNoche.toFixed(2) + '<br>' +
            '<strong>Noche:</strong> ' + promedioMayor
    });
  
}