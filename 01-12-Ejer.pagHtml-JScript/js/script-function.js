// Función para escribir en el documento
function escribe(element) {
    document.writeln(element);
}

// Función para solicitar al usuario una entrada
function solicita(message) {
    return window.prompt(message);//.toLowerCase(); // convierte a minuscula
}

// Función para crear una tabla de multiplicar
function multiplica(number) {
    let result = 0;
    let i = 1;
    escribe("<hr><table><tr><td id='title'>Tabla de multiplicar del " + number + "</td></tr>");
    while(i <= 10){
        result = number * i;
        escribe("<tr><td>" + number + " x " + i + " = " + result + "</td></tr>");
        i++
    }
    escribe("</table>");
}

// Función principal
function main() {
    escribe('<h1>Práctica JavaScript</h1>');

    let ok = solicita('Por favor, introduzca "ok" si desea continuar.');
// ZONA CONTROL
    if (ok !== 'ok') {
        escribe("<hr><h3>Por favor recargue la página e intente de nuevo introducir 'ok' para acceder.</h3>");
    } else {
        console.log("Todo ok - continue");
        let num = parseInt(solicita('Por favor, introduzca número entero.'));

        if (num > 0 && num <= 10 && num === Math.floor(num)) {
            console.log(" Núm. correcto\ncreando tabla multi del " + num);
            multiplica(num);
            console.log("Creado con éxtio\nSayonara, baby!!!");
        } else {
            console.log("introdujo número negativo o mayor que 10");
            escribe("<hr><h4>Lo siento, no es un número entero, o es cero, o mayor que diez<br>deberá recargar la página y comenzar de nuevo.</h4>");
        }
    }
}

main();