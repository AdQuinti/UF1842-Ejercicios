/* crear una funcion que reciba como parametro un array de numeros y devuelva
la suma de todos los número pares */

// FUNCION OPERACION
function SumaPar (arr) {
// DECLARACION LOCAL
    let suma = 0;
    console.log("Dentro función"); 
// *** CONTROL ***
    for (let i of arr) { 
// SUMA
        i % 2 === 0 ? suma += i : null ; // condicional y suma cn +=
    } // end for...of
    console.log("retorna suma",suma); 
    return suma;
} // end func

// DECLARACION GLOBAL
let numArray = new Array (2,5,3,4,1); // RESULTADO = 6

// MOSTRAR
document.write(SumaPar(numArray)); 
console.log("Rsultado operacion"); 