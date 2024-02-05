/** Suma un array de 20 elementos dentro de una función, pero las posiciones 4,9,12 */

const arry1 = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];

let sumaArray = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
    //for (let i in arr[i]) {
        if ( i == 4 || i == 9 || i == 12) {
            suma += arr[i];
        }
    }
    return suma;
}

document.write("El array suma: " + sumaArray(arry1));