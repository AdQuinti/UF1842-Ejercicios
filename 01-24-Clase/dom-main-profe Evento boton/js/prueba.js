
/**GET ELEMENT BY... */
//id 
//seleccionar el nodo
let nodob = document.getElementById('parrafo1');
//cambiarle el contenido
nodob.innerHTML = 'Hola Juan';
//class-> Seleccionar y cambiar el contenido del nodo/elemento2

let nodoc = document.getElementsByClassName('parrafo');//-> [parrafo0,parrafo1,parrafo2]
nodoc[1].innerHTML = 'cambiamos el parrafo2';          // parrafo[0], parrafo[1], parrafo[2]

//etiqueta
let nodox = document.getElementsByTagName('p');
nodox[2].innerHTML = 'hola caracola';
/**QUERY SELECTOR */
//ID
let nodo1 = document.querySelector('#parrafo1');
nodo1.innerHTML = 'manzana';
//clase
let nodo2 = document.querySelectorAll('.parrafo');
nodo2[1].innerHTML = 'pera';

console.log(nodo2);

//etiqueta
let nodo3 = document.querySelectorAll('p');
nodo3[2].innerHTML = 'uva';

/**CREAR NODOS */
/**
 * 1.Creamos nodos->  añadir contenido
 * 2.Añadirlos
 */
//Creamos los nodos
let nodoNuevo = document.createElement('p');
let nodoNuevoTexto = document.createTextNode('este es un nodo nuevo');
//Seleccionamos el padre
//Añadimos el nodo
//nodoPadre.appendChild(nodoNuevo);
//nodoNuevo.appendChild(nodoNuevoTexto);//-->contenido
nodoNuevo.innerHTML = 'un nodo más';

//append
let nodo4 = document.createElement('p');
let nodo5 = document.createElement('p');
let nodo6 = document.createElement('p');
let nodo7 = document.createElement('p');
nodo4.innerHTML = 'nodo 4';
nodo5.innerHTML = 'nodo 5';
nodo6.innerHTML = 'nodo 6';
nodo7.innerHTML = 'nodo 7';
//nodoPadre.append(nodo4, nodo5);
//nodoPadre.append(nodo6, nodo7);

/**INSERT BEFORE */
//Seleccionamos el padre
let nodoPadre = document.querySelector('.padre');
let nodo8 = document.createElement('p');
nodo8.innerHTML = 'nodo8';
nodoPadre.insertBefore(nodo8, nodo1);

/**INSERT ADJACENT */
let nodoExtra = document.createElement('p');
nodoExtra.innerHTML='nodo Extra';

//nodoPadre.insertAdjacentElement('beforebegin', nodoExtra);
//nodoPadre.insertAdjacentElement('afterbegin', nodoExtra);
//nodoPadre.insertAdjacentElement('afterend', nodoExtra);
nodoPadre.insertAdjacentElement('beforeend', nodoExtra);


