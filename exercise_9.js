function contarValores(){ // funcion 
    
    let valoresAlmacenados = []; // Esta variable almacena los valores cuando los obtiene como decir "(let valores = [valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10];)"
    // declaramos las variables para que inicien en 0
    let negativos = 0;
    let positivos = 0;
    let multiplos = 0;
    let acumuladoValorPares = 0;
   
    // utilizamos el bucle for para iterar 10 veces 
    for (let i = 0; i < 10; i++) { // Definimos la variable i para que empiece en 0 y condicionandola a que solo calcule hasta 10 valores mientras hacemos uno de i++ que incrementen los valores 1 por 1
        let valorE = parseInt(document.getElementById('valorE' + (i + 1)).value); // Declaramos la variable "valorE" quien recopila todos los valores por medio de id pero en este caso hacemos uso de (i+1) para que obtenga el valor de cada iteración es decir "ValorE+numero" ejemplo "valorE1..."
        valoresAlmacenados.push(valorE); //Array en donde vamos a mandar esos datos obtenidos por medio de .push a nuesta variable 

        if (valorE < 0) { // Si los numero son menores a 0, son negativos y que me imprima cuantos numeros que son negativos
            negativos++;
        } else if (valorE > 0) {// Y si los numero son mayores a 0, diga que son positivos y que me imprima  cuantos numeros que son positivos
            positivos++;
        }

        if (valorE % 15 == 0) { // comparamos valores, si los numeros son multiplos de 15 entonces que me imprima cuantos numeros son multiplos de 15
            multiplos++;
        }

        if (valorE % 2 == 0) {// compara valores que sean pares y suma la cantidad de numeros pares
            acumuladoValorPares += valorE; //guarda los valores pares y hace la suma 
        }
    }

    // los devuelve al html para que se impriman los valores
    document.getElementById('Negativos').innerHTML = negativos;
    document.getElementById('Positivos').innerHTML = positivos;
    document.getElementById('Multiplos15').innerHTML = multiplos;
    document.getElementById('AcumuladoValorPares').innerHTML = acumuladoValorPares;
}