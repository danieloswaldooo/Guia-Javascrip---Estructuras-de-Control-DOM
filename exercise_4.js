function mayor(){ //capturar el valor de ambos números enteros
    let mayorn=0; //si se cumple o no la condición se almacenara en esta variable, sera la propiedad a mostrar
    let num1 = parseInt(document.getElementById("numero1").value); //almacenar dato entero con parseInt para convertir el string en un entero.
    let num2 = parseInt(document.getElementById("numero2").value);
    if(num1>num2){ 
        mayorn = num1;
    }else{
        mayorn = num2;
    }
    document.getElementById("resultado").value = mayorn;
}