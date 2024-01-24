// creamos nodos
const parrafo4 = document.createElement('p');
const parrafo5 = document.createElement('p');
const parrafo0 = document.createElement('p');
parrafo0.innerHTML = 'Párrafo 0'; // con innerHTML puede leer etiquetas
parrafo4.innerHTML = 'Párrafo 4';
parrafo5.innerHTML = 'Párrafo 5';

// seleccionamos elemento padre
const elementoPadre = document.querySelector('.padre');
// podemos usar appendChild o append para añadirlo al final
elementoPadre.append(parrafo4,parrafo5);

// seleccionamos hijo de referencia
const parrafo1 = document.querySelector('p');

// añadimos NODO (parrafo0) usando referencia del parrafo que le indiquemos (pr ej.: 4)
elementoPadre.insertBefore(parrafo0, parrafo4); 

/** InsertAdjacentElement tiene y parámetro
 * 1. beforebegin -> Antes del elementoObjetivo
 * 2. afterbegin -> Dentro del elementoObjetivo, antes de su primer hijo.
 * 3. beforeend -> Dentro del elementoObjetivo, después de su último hijo.
 * 4. afterend -> Después del elementoObjetivo.
 * tendremos como referencia al elemento padre.
 */
const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = "Un párrafo más ";

// añadimos el NODO extra
elementoPadre.insertAdjacentElement("afterbegin",parrafoExtra);

// añadimos atributos al nuevo nodo extra -> le colocmaos la clase parrafo:
parrafoExtra.setAttribute('class', 'parrafo');