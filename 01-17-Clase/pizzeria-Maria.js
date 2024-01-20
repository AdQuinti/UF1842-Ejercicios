/**
 * Ejercicio Pizzrería
 * 
 * Pregunta a usuario cuantos ingredierntes deaea para la pizza. Controla:
 *          -que sea número entero pero no controla máximo de ingredientes.
 * 
 * Sale otra ventana con emergente preguntanado a user introduzca ingredientes añadir a la
 * pizza separados por coma. Controla:
 *          - que introduzca todos los indicados separados por coma, sino introduce todos dice
 *              q se anula pedido y q recargue pag. para empezar. No me fije si controla q no
 *              se introduzca números.
 * 
 * Sale otra ventana diciendo que confirme ingredientes introducidos para pizza. Debe poner 'ok'
 * o si desea cambiar que ponga 'cambio' , controla:
 *          - si pone otra cosa dice q recarge pag web y empiece desde principio
 * 
 * Si todo acaba bien entonces saca otra ventana en el que dice que gracias pr su pedido, q pronto
 * estará su pizza con los ingredientes que indico, los muestra, y tras cerrar esta ventana en
 * pag.web te pone en letras grandes "ARRAY PIZZERIA"
 */

document.writeln("<h1>Array Pizzería</h1>");

// Pedimos datos a nuestros clientes
var numIngredientes = window.prompt("Bienvenidos a nuestra pizzería, ¿Cuántos ingredientes llevará su pizza?: ");
if (!isNaN(numIngredientes)) {
    var ingredientes = window.prompt("Dime los " + numIngredientes + " ingredientes separados por comas: ");
    // Convertimos la cadena de ingredientes en un array
    var arrayIngredientes = ingredientes.split(',');

    if (arrayIngredientes.length === parseInt(numIngredientes)) {
        // Mostramos el array completo
        var ok = window.prompt("Los ingredientes seleccionados son: " + arrayIngredientes.join(', ') + ". Si es correcto, escriba 'ok' o 'cambio' para cambiar un ingrediente");
        // Ponemos en minúscula
        ok = ok.toLowerCase().trim();
        if (ok === "ok") {
            window.alert("Muchas gracias por su pedido, en unos minutos disfrutará de su pizza con " + arrayIngredientes.join(', '));
        } else if (ok === "cambio") {
            var cambio = window.prompt("Indique el ingrediente que desea cambiar:");

            if (arrayIngredientes.includes(cambio.toLowerCase().trim())) {
                var nuevoIngrediente = window.prompt("Introduzca el nuevo ingrediente");
                //posición del ingrediente que deso cambiar
                var posicionIngrediente = arrayIngredientes.indexOf(cambio.toLowerCase().trim());
                //colocamos el nuevo ingrediente en la posición del ingrediente cambiado
                arrayIngredientes[posicionIngrediente] = nuevoIngrediente;
               
                window.alert("Muchas gracias por su pedido, en unos minutos disfrutará de su pizza con " + arrayIngredientes.join(', '));
            } else {
                window.alert("Ingrediente no encontrado en la lista. Para continuar recargue y vuelva a empezar. Gracias.");
            }
        } else {
            window.alert("Opción no reconocida. Recargue y vuelva a empezar.");
        }
    } else {
        window.alert("No ha introducido suficientes ingredientes. Recargue y vuelva a empezar.");
    }
} else {
    window.alert("Por favor, recargue e introduzca un número entero.");
}
