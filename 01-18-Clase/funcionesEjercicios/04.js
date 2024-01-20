/* crear una función que tome como parámetro un array de número, retornar
la suma de todos los elementos del array */


function sumaArray (arr) {
    
    let suma = 0;
    for (let i in arr){
        suma = suma + arr[i];
        //document.write(numArray[i]);
    }
    return suma;
} 

let numArray = new Array (1,2,3,4,5);


document.write(sumaArray(numArray));