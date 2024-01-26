/**Podemos seleccionar los elementos de un documentos html de tres formas diferentes: 
 * por su ID
 * por el nombre de la clase
 * por su etiqueta
 */
//Por ID
//creamos una variable para guardar el resultado de la búsqueda
let elementoPorId = document.getElementById('parrafo1');
/** este párrafo tiene el valor párrafo 1 y le vamos a cambiar su valor 
por otra string usando la propiedad innerHTML*/
elementoPorId.innerHTML = '¡Buenos días!';

//Por el nombre de la clase(class)
let elementoPorClase = document.getElementsByClassName('parrafo');
/**Este  método nos da por resultado un array, 
 * en este caso tendrá tres elementos (tenemos 3 class hermanos con el mismo nombres)*/
console.log(elementoPorClase.length);
console.log('hola Juan');
//seleccionamos el segundo elemento del array y cambiamos su contenido/valor con la propiedad innerHTML:
elementoPorClase[1].innerHTML = 'hola';
//Por su etiqueta
let elementoPorTag = document.getElementsByTagName('p');
//cambiamos el valor del contenido:
elementoPorTag[2].innerHTML = 'adios';

//Modificación de estilos del contenido de la etiqueta <p>(párrafo1)
//cambiaremos su backglound:
elementoPorId.style.background = 'pink';
//color de la letra:
elementoPorId.style.color = 'white';
//redondeamos sus bordes:
elementoPorId.style.borderRadius = '8px';
//su longitud(ancho):
elementoPorId.style.width = '100px';
//y centramos el texto:
elementoPorId.style.textAlign = 'center';




