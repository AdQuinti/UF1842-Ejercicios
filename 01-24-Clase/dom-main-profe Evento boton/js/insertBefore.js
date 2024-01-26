//creamos nodos:
const parrafo4 = document.createElement('p');
const parrafo5 = document.createElement('p');
const parrafo0 = document.createElement('p');
parrafo0.innerHTML = 'Párrafo 0';
parrafo4.innerHTML = 'Párrafo 4';
parrafo5.innerHTML = 'Párrafo 5';

//seccionamos elemento padre:
const elementoPadre = document.querySelector('.padre');

//Añadimos los nodos usando como referencia el nodo padre:
//podemos usar appendChild o append para añadirlo al final:
elementoPadre.append(parrafo4, parrafo5);

/**Para usar  insertBefore necesitamos seleccionar un nodo de referencia*/
//seleccionamos hijo de referencia:
const parrafo= document.querySelector('p');
//añadimos el nodo parrafo0 usando como referencia el parrafo1
elementoPadre.insertBefore(parrafo0, parrafo);

/**InsertAdjacentElement tiene 4 parámetros:
 * 1.beforebegin
 * 2.afterbegin
 * 3.beforeend
 * 4.afterend
 * tendremos como referencia al elemento padre.
 */
//Creamos un nodo extra
const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = 'Un párrafo más';

//añadimos el nodo extra
elementoPadre.insertAdjacentElement("beforebegin", parrafoExtra );
//elementoPadre.insertAdjacentElement("afterbegin", parrafoExtra );
//elementoPadre.insertAdjacentElement("beforeend", parrafoExtra );
//elementoPadre.insertAdjacentElement("afterend", parrafoExtra );

//añadir atributos al nuevo nodo extra-> le colocamos la clase parrafo:
parrafoExtra.setAttribute('class', 'parrafo');




