const nombre = document.querySelector("#nombre");
const numero = document.querySelector("#tel");
const correo = document.querySelector("#email");
const contraseña = document.querySelector("#contraseña");
const boton = document.querySelector("#botonD");

boton.addEventListener("click", function (event){
    event.preventDefault()

    if(nombre.value == ""){
        alert("Escribe tu nombre")
    }
    if(tel.value == ""){
        alert("Escibre tu número de teléfono")
    }
    if(email.value == ""){
        alert("Escribe tu correo")
    }
    if(contraseña.value == ""){
        alert("Define tu contraseña")
    }
    else{
        alert("Sus datos se han registrado")
    }
})