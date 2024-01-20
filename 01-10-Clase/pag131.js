let notaAlumno;
notaAlumno = window.prompt("Dime tu nota (entre 0 y 100): ");

if (!isNaN(datoEntrada)){  // controla que se introduce número

    if (notaAlumno >= 60){
        document.writeln("Aprobado");
    } else {
        document.writeln("Suspendido");
    }

} else {// introdujo string
    document.write("<h2 style=\"color: red;\">Lo siento, necesitas introducir una nota válida.</h2>");
    console.log("EL fistro de la pradera no puso un número.");
}