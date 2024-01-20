function obtenerNumeroEntreo() {
    while (true) {
        let input = prompt("Ingrese un número entero: ");
        
        if (input === null) {
            // El usuario presionó cancelar
            alert("¡Hasta luego!");
            return;
        } else {
            let numero = parseInt(input);
            
            if (isNaN(numero)) {
                // El usuario ingresó algo que no es un número
                alert("Entrada inválida. Por favor, ingrese un número entero.");
            } else {
                // El usuario ingresó un número entero válido
                document.writeln("El número ingresado es: " + numero);
                return;
            }
        }
    }
} 
obtenerNumeroEntreo();

/*     if (numero % 1 == 0) {
        alert ("Es un numero entero");
    } else {
        alert ("Es un numero decimal");
    } */

