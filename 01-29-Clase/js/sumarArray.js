/** crear una función que tome com parametro un array y un número,
 * retornar un nuevo array con todos los elementos más el número 
 * agregado al final del array.
 */

const array = [11,22,33,44,55];

function sumaArray(arr, num) {
/*     arr.push(num);
    return arr; */
    return arr.concat(num);
}
// con función flecha
//sumaArray = (arr, num) => { arr.push(num); return arr; }

let newArray = sumaArray(array, 676);

for (let i = 0; i < newArray.length; i++) {
    document.write("<br>" + newArray[i]);
}