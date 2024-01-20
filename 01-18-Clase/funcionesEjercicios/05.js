/* crear una función que reciba como parametro un array de string y devuelva
todos los elementos del array en un string separados por un espacio */

// Función operación
function sumaString(arr) {
    return arr.join(' '); // JOIN -> une elementos array con caracter indicado
}

// DECLARACIÓN
let pokemon = ['Pikachu','Charmander','Bulbasaur','Squirtle'];

// ZONA MOSTRAR
document.writeln(sumaString(pokemon));