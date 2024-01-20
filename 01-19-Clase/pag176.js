// define la clase persona
function Persona () {}

Persona.prototype.numeroAsignaturas = function () {};

Persona.prototype.saludaEstudiante = function () {
    alert ('hola');
};

// define la clase Estudiante
function Estudiante () {
   // llama al constructor primario
    Persona.call(this);
}

// hereda persona
Estudiante.prototype = new Persona();

// corrige el puntero del constructor porque apunta a PErsona
Estudiante.prototype.constructor = Estudiante;

// reemplaza el método saludaEstudiante
Estudiante.prototype.saludaEstudiante = function () {
    alert ('hola, soy estudiante');
}

// agrega el método adiosEstudiante
Estudiante.prototype.adiosEstudiante = function () {
    alert ('adios');
}

var estudiante1 = new Estudiante ();
estudiante1.saludaEstudiante();
estudiante1.adiosEstudiante();

// comprueba la herencia
alert (estudiante1 instanceof Persona); // true
alert (estudiante1 instanceof Estudiante); // true