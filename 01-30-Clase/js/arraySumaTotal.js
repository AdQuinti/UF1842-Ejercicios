/**
 * crear una funcion que tome como parámetro un array de numeros,
 * y retorne todos los elementos del array
 */

const arry1 = [2,3,4,1,6,7,8,9];

//function sumaArray (arry1) {
let sumaArray = (arry1) => {
    let suma = 0;
    for (let i of arry1) {
        suma += i;
        console.log(suma);
    }
    return suma;
}

let resultado = sumaArray(arry1);

document.write("El array suma: " + resultado);


/**                         OTRA FORMA                  */
//function sumaArray2(array) {
let sumaArray2 = (array) => {
    return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

let arry2 = [2,3,4,1,6,7,8,9];
console.log('Suma Total, con "reduce": ',sumaArray2(arry2)); // 45

/**                         +++ METODO REDUCE +++
 *                  array.reduce(callback[, valorInicial])
 * callback es una función que se aplica a cada elemento del array. Esta función debe tomar
 * cuatro argumentos:
 * - acumulador: El valor acumulado hasta ahora.
 * - valorActual: El valor actual que se está procesando en el array.
 * - indiceActual (opcional): El índice del valor actual que se está procesando en el array.
 * - array (opcional): El array sobre el cual se llamó a reduce().
 * - valorInicial (opcional): Un valor que se usa como primer argumento en la primera llamada
 *   a la función de callback. Si no se proporciona, el primer elemento del array se usará.
 */