let notaAlumno = prompt("Ingrese una nota (entre 0 a 100): ");

if (isNaN(notaAlumno)){ // controla introducido es letra
    alert("No ingreso 🤪 nota correcta. 😭");
    console.log("Fistro - Pecador, el user anda dormido.");
} else if (notaAlumno >= 0 && notaAlumno <= 100) { // si es un núm
    
    // otra forma de introducir condicional - pregunta ? si | no
    document.writeln (notaAlumno >= 50 ? "Aprobado 👍🏽": "No Aprobado 👎🏽");
    // condiconales sin necesidad de {} llaves
    if (notaAlumno >= 90 && notaAlumno <=100)
        document.writeln ("- Sobresaliente");
    else if (notaAlumno >= 80 && notaAlumno <90)
        document.writeln ("- Notable");
    else if (notaAlumno >= 60 && notaAlumno <80)
        document.writeln ("- Bien");
    else if (notaAlumno >= 50 && notaAlumno <60)
        document.writeln ("- Suficiente");
    else
        document.writeln ("- Insuficiente ");
} else  // no necesario poner llaves
    document.writeln("No ingreso, nota correcta. 😭");
    console.log("Fistro - Pecador, QUITA A ESE GATO 🐈 DEL TECLADO.")