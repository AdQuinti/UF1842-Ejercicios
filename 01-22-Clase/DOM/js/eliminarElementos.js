/**AÑADIMOS ELEMENTOS */
//1.Seleccionamos al padre:
const elementoPadre = document.querySelector('.padre');
//2.Creamos el nodo hijo:
const parrafo4 = document.createElement('p');
parrafo4.innerHTML = 'Párrafo 4';
//3.Añadimos el elemento nuevo:
elementoPadre.appendChild(parrafo4);
parrafo4.setAttribute('class','parrafo');
parrafo4.setAttribute('id', 'parrafo4');
/**Tenemos 3 métodos para eliminar nodos:
 * 1.removeChild -> se aplica sobre el padre del nodo a eliminar.
 * 2.remove-> se aplica sobre el nodo a eleminar.
 * 3.replaceChild ->remplaza por otro nodo.se aplica sobre el nodo padre.
 */
//removeChild
//Seleccionamos el nodo que queremos eliminar:
const parrafo1 = document.querySelector('#parrafo1');
//eliminamos:
elementoPadre.removeChild(parrafo1);
//remove
const parrafo2 = document.querySelector('#parrafo2');
parrafo2.remove();
//replaceChild
const parrafo5 = document.createElement('p');
parrafo5.innerHTML = 'Nuevo párrafo';
const parrafo3 = document.querySelector('#parrafo3');

//remplazamos el nodo 3 por el pattafo5 
elementoPadre.replaceChild(parrafo5, parrafo3);