let datoEntrada;
datoEntrada = window.prompt("Dime un número entero: ") || 0;
if (!isNaN(datoEntrada)){ // controla introducido si es numero y no string

// CONTROLA PAR O IMPAR
    if ((datoEntrada % 2) == 0){
        document.write(datoEntrada+" es un número par.");
    }else{
        document.write(datoEntrada+" es un número impar.");
    }

} else {// introdujo string
    alert("Lo siento, necesitas introducir un número válido.");
} 