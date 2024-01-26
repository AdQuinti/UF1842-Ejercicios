let empty = () => {}; // devuelve undefined

var simple = a => a > 15 ? 15 : a; // con un solo argumento

let max = (a, b) => a > b ? a : b; // con multiples argumentos

/** funciones flecha son muy útiles cuando trabajas con arraysfunciones
 * flecha son muy útiles cuando trabajas con arrays */
var arr = [5, 6, 13, 0, 1, 18, 23]; // Reducción de arrays
var sum = arr.reduce((a, b) => a + b); // Suma todos los elementos - Filtrado de arrays
var even = arr.filter(v => v % 2 == 0); // Filtra los números pares - Mapeo de arrays
var double = arr.map(v => v * 2); // Duplica todos los elementos

/** simplifica cadenas de promesas */
promise
 .then(a => { /* ... */ })
 .then(b => { /* ... */ });

/** Funciones flecha en setTimeOut: Las funciones flecha son más fáciles
 * de procesar visualmente cuando se utilizan en setTimeOut. */
setTimeout(() => {
    console.log("sucederá antes");
    setTimeout(() => {
       // código más profundo
        console.log("Sucederá más tarde");
    }, 1);
}, 1);

/** Uso de 'this' en funciones flecha
 * 'this' se refiere al ámbito en el que se definió la función flecha, no
 * al ámbito en el que se llama. Esto puede ser útil para evitar problemas
 * comunes con 'this' en JavaScript.
 */
var obj = {
    count: 10,
    doSomethingLater: function () {
        setTimeout(() => {
         // dado que la función flecha se creó dentro del "obj", asume el "this" del objeto
        this.count++;
        console.log(this.count);
        }, 300);
    },
};

obj.doSomethingLater();
