/**
 * Crear una función que tome como parámetro un arry y un número, retorne un nuevo
 * array ocn todos los elementos y el número agregado al final del array.
 */
function numUnion (arr) {
    // declaración local variable
    let numSolo = 21; 
    // Añade el número al final del array 
    arr.push(numSolo);
    // Devuelve el array modificado
        return arr;
}

// declaracion array
let numero = new Array (2,34,98);

 // Llama a la función numUnion con el array y el número como argumentos
document.writeln(numUnion(numero));