
/* function suma (num1,num2){ // funcion - entrada datos
    return num1 + num2; // operacion
}

document.write(suma(7,10)); // salida y envio datos de función */
// DECLARAMOS VARIABLES
let total, numero1, numero2;

function suma (num1,num2){ // funcion - entrada datos
    return num1 + num2; // operacion
}

// INICIALIZACION VARIABLES
numero1 = 7;
numero2 = 10;
total = suma(numero1, numero2); // envio variables a funcion

// SACAMOS POR PANTALLA
document.write(total); 

document.writeln('<br><br>'); // SALTO LINEA

function saludoBienvenida (nombre){
    document.writeln ('Bienvenido '+nombre);
}

let saludo = window.prompt ("Dime un nombre: ")
saludoBienvenida(saludo);