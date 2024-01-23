// creamos nodos
const parrafo4 = document.createElement('p');
const parrafo5 = document.createElement('p');
const parrafo0 = document.createElement('p');
parrafo0.innerHTML = 'Párrafo 0';
parrafo4.innerHTML = 'Párrafo 4';
parrafo5.innerHTML = 'Párrafo 5';

// seleccionamos elemento padre
const elementoPadre = document.querySelector('.padre');

elementoPadre.append(parrafo4,parrafo5);

// seleccionamos hijo de referencia
const parrafo1 = document.querySelector('p');
// añadimos nodo parrafo0 usando referencia del parrafo1
elementoPadre.insertBefore(parrafo0, parrafo1);

/** InsertAdjacentElement tiene y parámetro
 * 1. beforebegin
 * 2. afterbegin
 * 3. beforeend
 * 4. afterend
 * tendremos como referencia al elemento padre.
 */
const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = "Un párrafo más ";

// añadimos el nodo extra
//elementoPadre.insertAdjacentElement("beforebegin",parrafoExtra);
elementoPadre.insertAdjacentElement("afterbegin",parrafoExtra);
//elementoPadre.insertAdjacentElement("beforeend",parrafoExtra);
//elementoPadre.insertAdjacentElement("afterend",parrafoExtra);

// añadimos atributos al nuevo nodo extra -> le colocmaos la clase parrafo:
parrafoExtra.setAttribute('class', 'parrafo');