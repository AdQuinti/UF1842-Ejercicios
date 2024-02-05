document.writeln("<h2>Pizzería DANN</h2>");

// DECLARAMOS
let numIngredientes = window.prompt("Bienvenidos a pizzería Dann, ¿Cuántos ingredientes llevará su pizza?");
if (!isNaN(numIngredientes)) {
    let ingredientes = window.prompt("Dime los " + numIngredientes + " ingredientes separados por ',' (comas).");
    const arrayIngredientes = ingredientes.split(',');
    console.log(ingredientes);

    if (arrayIngredientes.length === parseInt(numIngredientes)) {
        // Mostramos pedido completo
        let ok = window.prompt("Los ingredientes seleccionados son: " + arrayIngredientes.join(', ') + ". Si es correcto, escriba 'ok' o 'cambio' para cambiar un ingrediente");
        ok = ok.toLowerCase().trim(); // convierte a minúscula y trim elimina espacio en blanco

        if (ok === "ok") {
            document.write("<p>Muchas gracias por su pedido,<br>en unos minutos disfrutará de su pizza con " + arrayIngredientes.join(', ')+"</p>");
    // ZONA CAMBIO INGREDIENTE
        } else if (ok === "cambio") {
            let cambio = window.prompt("Indique el ingrediente que desea cambiar.");
            // cambio ingrediente
            if (arrayIngredientes.toLowerCase().trim().includes(arrayIngredientes)) {
                let nuevoIngrediente = window.prompt("Introduzca el nuevo ingrediente");
            // posicion a cambiar
                let posicionIngrediente = arrayIngredientes.indexOf(cambio.toLowerCase().trim());
            // cambio ingrediente
                arrayIngredientes[posicionIngrediente] = nuevoIngrediente; 
                document.write("<p>Muchas gracias por su pedido,<br>en unos minutos disfrutará de su pizza con " + arrayIngredientes.join(', ')+"</p>");
    // END ZONA CAMBIO INGREDIENTE
            } else {
                window.alert("Ingrediente no encontrado en la lista. Para continuar recargue y vuelva a empezar. Gracias.");
            }
        } else {
            window.alert("Opción no reconocida. Recargue y vuelva a empezar.");
        }
    } else {
        window.alert("No ha introducido todos ingredientes indicados, recargue y vuelva a empezar.");
    }
} else {
    window.alert("Por favor, recargue e introduzca un número entero.");
}
