function calcularNota() {// recibimos los datos
    const examen = parseFloat(document.getElementById("examen").value);
    const tareas = parseFloat(document.getElementById("tareas").value);
    const asistencia = parseFloat(document.getElementById("asistencia").value);
    const investigacion = parseFloat(document.getElementById("investigacion").value);
    const nombre = document.getElementById("nombre").value;
    const carnet = document.getElementById("carnet").value;
  
    const notaFinal = noteCalculator( // guardamos los datos
      examen,
      tareas,
      asistencia,
      investigacion,
      nombre,
      carnet
    );
  
    document.getElementById("nota").innerHTML = notaFinal;//
  }
  
  function noteCalculator( // Enviamos los datos a calcular
    examen = 0,
    tareas = 0,
    asistencia = 0,
    investigacion = 0,
    nombre = "",
    carnet = ""
  ) {
    examen = examen * 0.2;
    tareas = tareas * 0.4;
    asistencia = asistencia * 0.1;
    investigacion = investigacion * 0.3;
    let notaFinal = examen + tareas + asistencia + investigacion;
  //Condicionamos la nota final
        if( notaFinal >= 60){
            return `Alumno: ${nombre} <br> Carnet: ${carnet} <br>  Nota final: ${notaFinal}pts. <br> Resultado: SATISFACTORIO <br>(Aprobó el curso FSJ).`;
        }else{
            return `Alumno: ${nombre} <br> Carnet: ${carnet} <br>  Nota final: ${notaFinal}pts. <br> Resultado: INSATISFACTORIO  <br> (No aprobó el curso FSJ).`;
        }

  }
  
  
  