//1. creación NODOS
const parrafo4 = document.createElement('p'); // puedes poner h1 - div
// añadir contenido parrafo
const textParrafo4 = document.createTextNode('Párrafo 4');
//2. añadir nodo - sleccion nodo padre
const elementoPadre = document.querySelector('.padre');
// añadir nodo
elementoPadre.appendChild(parrafo4); // añadimos solo uno
// añadimos texto a su nodo, dos formas posibles:
parrafo4.appendChild(textParrafo4);
//parrafo4.innerHTML = '<h1>Párrafo 4</h1>'

// añadir elemento con append - se añaden varios nodos a la vez
const parrafo5 = document.createElement('p');
const parrafo6 = document.createElement('h5');
elementoPadre.append(parrafo5,parrafo6); // añadimos elementos
parrafo5.innerHTML = 'Párrafo 5';
parrafo6.innerHTML = 'Párrafo 6';
