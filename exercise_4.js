function mayor(){
    let mayorn=0;
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    if(num1>num2){
        mayorn = num1;
    }else{
        mayorn = num2;
    }
    document.getElementById("resultado").value = mayorn;

}