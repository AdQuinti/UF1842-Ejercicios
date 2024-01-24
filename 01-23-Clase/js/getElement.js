/** SELECCION NODO Y CAMBIAR SU CONTENIDO*/
// querySelector -> coge un solo contenido de lo que se le indique
// querySelectorAll -> coge todo contenido indicado
 // NODOLIST -> conjunto elemento parecido estructura a arrya

/** CAMBIAMOS ELEMENTO de ID - html */
let nodoA = document.querySelector('#parrafo1'); // hay que indicar # o . si es id o class
// antes se utilizaba getElementsByID('parrafo1');
nodoA.innerHTML = '¡Buenos días!'; // cambio contenido

/** CAMBIAMOS ELEMENTO de CLASS - html */
let nodoB = document.querySelectorAll('.parrafo'); // hay que indicar # o . si es id o class
// getElementsByClassName ('parrafo');-> apunta a una sola etiqueta class en html
nodoB[1].innerHTML = '<h3>olequease</h3>'; // -> aqui coge posición y cambiamos contenido
/** se puede hacer un array */
//const arrayClass = [...nodoB]; //creamos array para crear posiciones class
//arrayClass[1].innerHTML = 'olaquease'; // aquí apuntamos posición y cambiamos elemento

/** CAMBIAMOS ELEMENTO de ETIQUETA - html */
let nodoC = document.querySelectorAll('p'); // seleccionamos toda etiquetas "p"
// getElementsByTagName('p');
nodoC[2].innerHTML = 'x'; // NODOLIST 
// Para cambiar todas las etiqueta p -> con length cogemos su tamaño max. en que está utilizado
for(let i = 0; i < nodoC.length; i++) {
    nodoC[i].innerHTML = '<h5>hastamañana</h5>'; // PISA TODO LO ANTERIOR
    nodoC[i].style.color = "red";
} 


/** CREAR NODOS */
let nodoNew = document.createElement('p');
// contenido del nodo creado
let nodoNewTxt = document.createTextNode('este es un nodo nuevo'); // lo que se ve en html
// añadimos a pag.web en class q tengamos creada - en este caso en el div
let nodoNewPadre = document.querySelector('.padre'); //donde debe buscar etiqueta P
// relaciona par aañadirlo al html
nodoNewPadre.appendChild(nodoNew); // añadimos a variable nodoNewPadre el nodoNew (la etiqueta p)
nodoNew.appendChild(nodoNewTxt); // añadimos a etiqueta p nodoNew el texto (nodeNewTxt)
nodoNew.innerHTML = 'nuevo comentario'; // pisariamos lo puesto anteriormente

/** si queremos cambiar todas la etiquetas P de html deberemos poner aquí el apartado 
 * donde modificamos la etieuta p con un for, que se vio justo antes de este.
*/

// CREAMOS NODO
let nodo4 = document.createElement('p');
let nodo5 = document.createElement('p');
let nodo6 = document.createElement('br');
let nodo7 = document.createElement('p');
let nodo8 = document.createElement('p');
// INTRODUCIMOS CONTENIDO 
nodo4.innerHTML = 'Nodo4'; 
nodo5.innerHTML = 'Nodo5';
//nodo6.innerHTML = 'contenido Nodo6';// con br no es necesario crearle contenido
nodo7.innerHTML = 'Nodo7';
nodo8.innerHTML = 'Nodo8 - saltando';
//AÑADIMOS EN WEB
// tomamos como refrencia el nodoPadre - creado más arriba
nodoNewPadre.append(nodo4, nodo5, nodo6, nodo7);
// ** insertAdjacentElement **
nodoNewPadre.insertBefore(nodo8, nodo5); // nodo8 lo coloca antes del nodo5

//** INSERT ADJACENT ** vamos a ponerlo con referencia del padre
/** InsertAdjacentElement
 * 1. beforebegin -> Antes del elementoObjetivo
 * 2. afterbegin -> Dentro del elementoObjetivo, antes de su primer hijo.
 * 3. beforeend -> Dentro del elementoObjetivo, después de su último hijo.
 * 4. afterend -> Después del elementoObjetivo.
 */

// podemos crear un nodo o coger uno anterior
let nodoExtra = document.createElement('p');
nodoExtra.innerHTML = 'nodo extra';
nodoNewPadre.append(nodoExtra);

// otro metodo como insertBefore
nodoNewPadre.insertAdjacentElement("afterbegin",nodo4); // (dnd quieres ubicarlo - elemento añadir)
