/** Necesario poner en index.html en el body esta linea
 * <body onload="start()"> <!--Llamada a la función --> 
 * */

let x = 1; // variable global
let contador = 1; // variable contador
let nombre; // variable nombre del usuario

function start() {
    let x = 5; // variable local a la función start

    document.writeln("Variables local x al comienzo es "+x);

    // llamamos al prompt antes de la función A
    nombre = window.prompt("Introduzca su nombre");

    functionA(nombre); // función A variable local x
    functionB(); // función B usa variable global x

    // llamamos al prompt antes de la función A
    nombre = window.prompt("Introduzca su nombre");
    functionA(nombre); // función A reinicializa variable local x
    functionB(); //variable global x retiene el valor

    document.writeln("<p>variable local x despues de las funciones ",x,"</p>");
    document.writeln("<p>El nombre de la variable global es <b>",nombre,"</b></p>");
    document.writeln("<p>El contador es: <b>",contador,"</b></p>");
} // fin funcion start

function functionA (nombre){
    let x = 25; // se inicializa cuando se llama a la función A

    document.writeln ("<p> variable local x en función A es ",x," despues de entrar en la función A");
    x++; contador ++;
    document.writeln("<br />variable local x en la función A es ",x," despues salir de la función A","</p>");
    document.writeln("<br /><b>El nombre es: ",nombre,"</b>");
} // fin funciónA

function functionB (nombre){
    document.writeln("<p>variable global x es ",x," al entrar en la función B");
    x*=10; contador++;
    document.writeln("<br />variable global x es ",x," al salir de la función B ","</p>");
}// fin funciónB
