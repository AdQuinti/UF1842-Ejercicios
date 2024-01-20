let datoEntrada;
datoEntrada = window.prompt("Dime un número entero: ") || 0;

// NaN --> Not a Number
if (!isNaN(datoEntrada)){ // controla introducido si es numero y no string
// con ! niega para q devuelva valor contrario
    // REALIZA CONVERSION
    function esPar (datoEntrada){
        return datoEntrada%2 == 0;
    }

    // CONTROLA PAR O IMPAR
        if (esPar(datoEntrada)){
            document.write(datoEntrada+" es un número par.");
        }else{
            document.write(datoEntrada+" es un número impar.");
        }
    
    } else {// introdujo string
        document.write("<h2 style=\"color: red;\">Lo siento, necesitas introducir un número válido.</h2>");
        console.log("EL fistro de la pradera no puso un número.");
    } 