/** crear una función que reciba como parámetro
 * un array de números e imprima por pantalla todos
 * los números pares de ese array
 */

const numeros = [1,2,3,4,5,6,7,8];

function sumaArray (arr) {
    // declaración variable
    let suma = 0, impar = 0;
    // recorre array
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        // separa pares e impares
        if(arr[i] % 2 == 0) {
            suma += arr[i];
        } else {
            impar += arr[i];
        }
    }
    return {suma, impar};
}


let resultado = sumaArray(numeros);

document.write("Suma par: " + resultado.suma + "<br>Suma impar: " + resultado.impar);
