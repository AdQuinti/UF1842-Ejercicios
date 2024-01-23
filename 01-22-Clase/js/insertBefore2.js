//creamos nodos:
const parrafo4 = document.createElement("p");
const parrafo5 = document.createElement("p");
const parrafo0 = document.createElement("p");
parrafo0.innerHTML ="parrafo 0";
parrafo4.innerHTML = "parrafo 4";
parrafo5.innerHTML = "parrafo 5";

//selecionamos elemento padre:
const elementoPadre = document.querySelector(".padre");



//añadimos los nodos usando como referencia el nodo padre:
//podemos usar appenChild o append para añadielo al final:
elementoPadre.append(parrafo4,parrafo5);


/**para usar insertBefore necesitamos seleccionar un nodo de referencia */
//selecionasmos hijo de referencia:
const parrafo1 = document.querySelector('p');
//añadimos el nodo parrafo0 usando como referencia el parrafo1
elementoPadre.insertBefore(parrafo0,parrafo1);

/**InsertAdjacentElement tiene 4 parámetros:
 * 1.beforebegin
 * 2.afterbegin
 * 3.beforeend
 * 4.afterend
 * tendremos como referencia al elemento padre.
 */

//creamos un nodo extra
const parrafoExtra = document.createElement("p");
parrafoExtra.innerHTML = "Un parrafo mas"; // innerHTLM 

//añadiimos el nodo extra
//elementoPadre.insertAdjacentElement("beforebegin",parrafoExtra);
//elementoPadre.insertAdjacentElement("afterbegin",parrafoExtra);
//elementoPadre.insertAdjacentElement("beforeend",parrafoExtra);
elementoPadre.insertAdjacentElement("afterend",parrafoExtra);

//añadir atributos al nuevo nodo extra-> le colocamos la clase parrafo:
parrafoExtra.setAttribute("class", "parrafo");
