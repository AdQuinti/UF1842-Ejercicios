let elementoPadre = document.querySelector('.padre'); // creacion nodo padre

const parrafo1 = document.querySelector('#parrafo1');

// eliminamos
elementoPadre.removeChild(parrafo1);

//remove
const parrafo2 = document.querySelector('#parrafo2');
parrafo2.remove();

//replaceChid
const parrafo5 = document.createElement('p');
parrafo5.innerHTML = 'Nuevo párrafo';
const parrafo3 = document.querySelector('#parrafo3');
//remplazamos el nodo 3 por el parrafo5
elementoPadre.replaceChild(parrafo5, parrafo3);