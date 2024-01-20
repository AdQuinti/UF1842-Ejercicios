// Titulo - web
document.writeln('<h1>Práctica JavaScript</h1>');

// peticion entrada
let ok = window.prompt ('Por favor, introduzca "ok" si desea continuar.');

if (ok != 'ok'){ // si vale OK -> ok.toLowerCase() -> convierte a minuscula
    document.writeln("<hr><h3>Por favor recargue la página e<br>intente de nuevo introducir 'ok' para acceder.</h3>");
    //alert("Por favor recargue la página e intente de nuevo introducir 'ok' para acceder."); // OPCION SMS-ALERT
} else {
    console.log("Todo ok - continue");
    let num = window.prompt ('Por favor, introduzca número entero.');
    if (num > 0 && num <= 10){ // comprobación número no es negarivo o mayor de 10
        if (num != Math.floor(num)){ //comprueba no decimal
            console.log("introdujo número con decimales");
            document.writeln("<hr><h4>Lo siento, no es un número entero,<br>deberá recargar la página y comenzar de nuevo.</h4>");
            //alert("Lo siento, no es un número entero, deberá recargar la página y comenzar de nuevo."); // OPCION SMS-ALERT
        } else {
    // CREACION TABLA MULTIPLICAR
            console.log(" Núm. correcto\ncreando tabla multi del "+num);
            let i=0; // contador while
            let result=0;
            document.writeln("<hr><table><tr><td id='title'>Tabla de multiplicar del "+num+"</td></tr>")
            while(i<=10){
                result=num*i;
                document.writeln("<tr><td>",num," x ",i," = ",result,"</td></tr>");
                i++;
            }
            document.writeln("</table>")
            console.log("Creado con éxtio\nSayonara, baby!!!");
    // FIN TABLA MULTIPLICAR
        } // end if decimal
    } else {
        console.log("introdujo número negativo o mayor que 10");
        document.writeln("<hr><h4>Lo siento, no es un número entero, o es cero, o mayor que diez<br>deberá recargar la página y comenzar de nuevo.</h4>");
        //alert("Lo siento, no es un número entero, o es cero, o es mayor que diez, deberá recargar la página y comenzar de nuevo."); // OPCION SMS-ALERT
    } // end if num<0
}