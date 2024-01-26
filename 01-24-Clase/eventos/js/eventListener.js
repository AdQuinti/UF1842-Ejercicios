/** https://www.w3schools.com/JSref/dom_obj_event.asp */

// CAMBIAMOS parrafo1 - al tocarlo con el raton
const parrafo1 = document.querySelector('#parrafo1'); //creamos click
parrafo1.addEventListener('click', ()=>{ // quedamos a escucha hasta evento 'click'
    parrafo1.innerHTML = 'Hola Caracola'; //mandamos acción modificación
    console.log('Pulsado parrafo');
});

// AL PULSAR BOTON - escribe en consola
buttonDom.addEventListener('click', () =>{
    console.log('Pulsado boton');

})

//  EVENTO CONTEXTMENY - click Boton-derecho
buttonDom.addEventListener('contextmenu', () =>{
    console.log('Pulsado boton-derecho');
});

// RATON PASA ENCIMA BOTON
buttonDom.addEventListener('mouseover', () => {
    console.log('Raton encima boton');
});



/** 
 * HANDLER -> es la función flecha, ejecuta acción que pongaos
 * dentro -> sustituimos por una función 
 * */
function saludo(event) {
    console.log('Añade acción al evento en que relacionamos');
}
// añadimos evento
buttonDom.addEventListener('contextmenu', saludo); // hacemos referencia a funcion, no llamada
// elimina evento - que asigneos, en este caso función saludo
//buttonDom.removeEventListener ('contextmenu', saludo); // quita funcion saludo

// etiqueta dle Input  caja introducir texto
userInput.addEventListener('keypress',(event) => {
    //console.log('Tocamos enter dentro IF'); // funciona con cual tecla
    if (event.key === 'Enter') { // especifica tecla para que se active
        console.log('Tocamos enter dentro IF');
    }
});