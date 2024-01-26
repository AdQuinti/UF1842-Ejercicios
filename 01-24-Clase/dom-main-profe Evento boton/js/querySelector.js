//querySelector y querySelectorAll: selección de elementos
//Para seleccionar los elementos por su clase (usaremos .) o por su etiqueta(p) o por su Id (#nombredelid)
//por ID
let elementoPorId = document.querySelector('#parrafo1');
elementoPorId.innerHTML = 'hola mundo';
//por clase
/**Tenemos tres clases y por defecto se seleccionará la primera
 * por lo tanto, usaremos querySelectorAll para tener los tres elementos. 
 * Obtendremos un "nodeList", esto es diferente a un array. Necesitamos un array 
 * para poder usar sus métodos por lo que vamos a convertir al nodeList con [...]
 */
//guardamos el elementos en una variable
let elementoPorClase = document.querySelectorAll('.parrafo');
console.log(elementoPorClase);//si lo miramos por consola veremos el nodeList
const arrayClase = [...elementoPorClase];
console.log(arrayClase);
arrayClase[1].innerHTML = 'olaquease';

//por etiqueta
//también podemos cambiar el valor del contenido con un nodelist, pero no podremos usar métodos de array
let elementoPorTag = document.querySelectorAll('p');
elementoPorTag[2].innerHTML = 'hastamañana'; 




