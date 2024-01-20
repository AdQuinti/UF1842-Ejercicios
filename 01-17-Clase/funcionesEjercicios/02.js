/**
 * Hacer un función que tome como parametro un array 
 * y devuelva ultimo elemento
 */


 // UNA FORMA DE HACERLO
/*
let pokemon = ['Pikachu','Charmander','Bulbasaur','Squirtle'];
document.writeln(pokemon.at(-1)); //devuelve ultimo elemento de un array
*/

// OTTRA FORMA
function ultiElemento(arr){
    return arr[arr.length - 1];
} 

 // creacion array
let pokemon = new Array ('Pikachu','Charmander','Bulbasaur','Squirtle');

 // llamada función
document.writeln(ultiElemento(pokemon));

