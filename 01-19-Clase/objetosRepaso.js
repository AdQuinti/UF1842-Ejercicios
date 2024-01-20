// PRACTICA DE HERENCIA
function Persona(nombre){ // constructor
    this.nombre  = nombre || Persona.prototype.nombre; // nombre dado o el predefinido
    //window.alert("Se ha creado un nuevo objeto.");
}

// definimos propiedades y funciones
Persona.prototype.nombre = "nombre por defecto";

Persona.prototype.saludaPersona = function(){
    window.alert("Hola persona"); // funcion solo saluda
}



function Alumno(nombre){ // constructor
    //Persona.call(this, nombre || Alumno.prototype.nombre;
    this.nombre = nombre || Alumno.prototype.nombre;
    window.alert("Se ha creado un alumno");
}

Alumno.prototype.nombre = "Alumno por defecto";

// HERENCIA
Alumno.prototype = Object.create(Persona.prototype);
// apuntaos al lconstructor de alumno
Alumno.prototype.constructor = Alumno;


// EJECUCION PROGRAMA
let persona1 = new Persona("Juan"); // creación persona y argumento
persona1.saludaPersona();
window.alert(persona1.nombre);

// creamos objeto de alumno
let alumno1 = new Alumno("Expe"); // salida por pantalla 'creado alumno'
// llamada funcion de clase persona con objeto alumno1
alumno1.saludaPersona();
window.alert(alumno1.nombre);
