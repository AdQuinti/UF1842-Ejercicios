/** FECHA ACTUAL en footer */
let fechaActual = new Date();  // llamada constructor Date
let fechaElemento = document.getElementById('fecha'); // objetener elemento modificar id->fecha

let formatoFecha = fechaActual.getDate() + '/' + (fechaActual.getMonth() < 10 ? '0' : '' ) + (fechaActual.getMonth() + 1)+'/'+fechaActual.getFullYear();
// contemplado que haya 0 en fecha de un solo digito ->  fechaActual.getMonth() < 10 ? '0' : ''

// escribir elemento 
fechaElemento.innerHTML = 'Fecha: ' + formatoFecha;