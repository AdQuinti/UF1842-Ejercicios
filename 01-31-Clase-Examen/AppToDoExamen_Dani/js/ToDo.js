// DECLARACION VARIABLES GLOBALES 
let idCounter = 0;


const input = document.querySelector('input[type="text"]'); // o #inputText
// evento a escucha y al escribir se activa
userInput.addEventListener('submit', (event) => { //evento submit
    event.preventDefault(); // Evita la recarga de la página
    console.log('Usuario toco "+" en input'); // SEGUIMIENTO
    addTask();
});

// CAPTURA introducido por teclado - AÑADE tarea
function addTask() {
    idCounter++; // antes q suceda incrementa
// DECLARACIÓN LOCAL
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
    } else {
        window.alert("Para añadir, no puede estar el campo vacio - introducción de lista");
    }
}



// *** EVENTO A LA ESCUCHA ***
list.addEventListener('click', (event) => { // ponemos a la escucha evento click - funcion flecha
    console.log(event.srcElement.nodeName); // para ver que etiquetas html hay en lista-tareas/contenedor

;    if (event.srcElement.nodeName == 'INPUT') {  // si click es en input actualiza tarea
        console.log("llamda función actualizar tarea"); // SEGUIMIENTO
        actualizarStats(); // llamada funcion TAREA PENDIENTE
    } else if (event.srcElement.nodeName == 'IMG') { // si hace click en imagen papelera - elimine
        console.log("llamda función borrar elemento");
    // llamada funcion ELIMINAR TAREA y enviamos posicion id
        deleteTarea(event.srcElement.parentNode.id); 
    }
});




// funcion ACTUALIZAR TAREA PENDIENTE
function actualizarStats () {
// DECLARACIÓN LOCAL
    let listElement = list.querySelectorAll('div'); // --> cogemos todos DIV -
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked'); // Selección TODOS input-con atritubutos checked  
    console.log("Actualiza Lista Tarea"); // SEGUIMIENTO
// Añadimos linea TAREA PENDIENTE
    let tareasPendientes = listElement.length - checkbox.length; // resta tarea Pendiente
    stats.innerHTML = `<p>Tareas pendientes: ${tareasPendientes} Tareas completadas: ${checkbox.length}<p>`
}

//Función ELIMINAR TAREA
function deleteTarea (id) {
    let tareaBorrada = document.getElementById(id); //cogemos elemento "#id" pasado
    console.log("Borrada tarea"); // SEGUIMIENTO
    list.removeChild(tareaBorrada); // mensaje borrada tarea
    actualizarStats(); // llamada funcion ACTUALIZAR TAREA
}