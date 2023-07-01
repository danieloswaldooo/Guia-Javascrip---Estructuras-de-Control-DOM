function obtenerEdad(){
    //captura la entrada de datos
    let edad = document.getElementById('edad')
    //console.log(edad); // print the html code where ID edad is 
    //console.log(edad.value); //prints the age value sumbitted
    if (edad.value >= 18) {
        alert(`Tienes ${edad.value} años, felicidades eres mayor de edad!`)
    }else if (edad.value <= 17 && edad.value >= 1) {
        alert(`Tienes ${edad.value} años, aun no eres mayor de edad!`)
    }else{
        alert(`Ingresa un numero valido!`)
    }
    }
    // alert(`Hola ${edad.value}, le has dado click`)