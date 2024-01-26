//EVENT LISTENER
const parrafo1 = document.querySelector('#parrafo1');
parrafo1.addEventListener('click', ()=>{
    parrafo1.innerHTML = 'Hola Caracola';
});
/**En este caso para seleccionar el elemento,
 * escribiremos directamente el id del elemento.
 * Luego, dentro del método debemos colocar dos parámetros:
 * 1.el evento que queremos escuchar.
 * 2.el handler/función que queremos ejecutar 
 * https://www.w3schools.com/jsref/dom_obj_event.asp -> eventos */
/*buttonDom.addEventListener('click', () =>{
    console.log('hola desde función flecha');
});*/
//probamos otro evento-> contextmenu-> click derecho:
/*buttonDom.addEventListener('contextmenu', () =>{
    console.log('hola desde función flecha');
});*/
//probamos otro evento-> mouseover:
/*buttonDom.addEventListener('mouseover', () => {
    console.log('hola caracola desde función flecha');
});*/

//HANDLER-> Función Flecha -> sustituimos por una función
function saludo(event){
    console.log('hola desde la función saludo');
}
//eliminamos el evento
buttonDom.addEventListener('contextmenu', saludo);//no estamos llamando a la función, estamos haciendo referencia a ella
buttonDom.removeEventListener('contextmenu', saludo);