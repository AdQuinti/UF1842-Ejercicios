// DECLARACION VARIABLES GLOBALES 
let idCounter = 0;

/* cogemos elemeto puesto por usuario en INPUT*/
const input = document.querySelector('input[type="text"]'); // o #inputText
// evento a escucha y al escribir se activa
userInput.addEventListener('submit', (event) => { //evento submit
    //event.preventDefeult(); 
    console.log('Usuario toco "+" en input');
    addTask();
});

// CAPTURA introducido por teclado - AÑADE tarea
function addTask() {
    idCounter++; // antes q suceda incrementa
    // declaración local
    let newvalue = input.value; // captura valor introducido

    if (input.value != '') { // si es disinto a vacio entra
        console.log("Dentro función addTask");
// añadimos contenido en etiqueta DIV del primero q tiene id=list
        list.innerHTML += `
            <div class="task-container" id="${idCounter}">
                <label>
                    <input type="checkbox">
                    ${newvalue}
                </label>
                <img src="./img/cubo-de-basura.png" class="close-btn">
            </div>
        `
        input.value = ""; // reset input q se introduce pr teclado
        actualizarStats(); // llamada funcion actualizar
    }
}


// *** EVENTO A LA ESCUCHA ***
list.addEventListener('click', (event) => { // ponemos a la escucha evento click
    if (event.srcElement.nodeName == 'INPUT') {  // si toca input actualiza tarea
        console.log("llamda función actualizar tarea");
        actualizarStats(); // llamada funcion TAREA PENDIENTE
    } else if (event.srcElement.nodeName == 'IMG') { // si hace click en imagen papelera
        console.log("llamda función borrar elemento");
        deleteTarea(event.srcElement.parentNode.id); // llamada funcion ELIMINAR TAREA y enviamos posicion id
    }
});




// funcion ACTUALIZAR TAREA PENDIENTE
function actualizarStats () {
    let elementList = list.querySelectorAll('div'); // --> cogemos todos DIV - ya especificaremos
    /** variable (elementList) contendrá valor del elemento Stats. 
     * Al genrarse varios párrafos tendremos un nodeList y queremos
     * quedarnos con su longitud, es decir con su cantidad de elementos.*/
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
                    // seleccionamos todos input-con atritubutos checked
    console.log("Actualiza Lista Tarea");
// Añadimos linea TAREA PENDIENTE
    stats.innerHTML = `<p>Tareas pendientes: ${elementList.length} Tareas completadas: ${checkbox.length}<p>`
}

//Función ELIMINAR TAREA
function deleteTarea (id) {
    let tareaBorrada = document.getElementById(id); //cogemos elemento "#id" pasado
    console.log("Borrada tarea");
    list.removeChild(tareaBorrada); // mensaje borrada tarea
    actualizarStats(); // llamada funcion ACTUALIZAR TAREA
}