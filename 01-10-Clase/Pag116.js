function Alumno(nombre,edad,dni){ // solo tendra un atributo ..nombre..
    this.nombre=nombre || Alumno.prototype.nombre;/* instanciamos objeto */
    this.edad = edad || Alumno.prototype.edad;
    this.dni = dni || Alumno.prototype.dni;
    alert("Creacion de un objeto de clase Alumno");
}
Alumno.prototype.nombre="Name Alumno" //definimos caracteristica por si no damos nombre al objeto
Alumno.prototype.edad = 9; // definimos caracteristica predeterminada
Alumno.prototype.dni = "123456789A";
Alumno.prototype.saludaAlumno = function() // definimos metodo cm funcion
{
    alert("hola-Alert");
}
//creamos objeto
let alumno1 = new Alumno(); 
let alumno2 = new Alumno("Maria", 28, "245713466F"); 
let alumno3 = new Alumno("Federíco", 52, "425781647X"); /* Al crear segundo alumno muestra mensaje creacion*/
// mostramos el nombre del alumno:
alert('El nombre del alumno es: '+ alumno1.nombre)
alert('La edad del alumno es: '+ alumno1.edad)
alert('El dni del alumno es: '+ alumno1.dni)
saludaAlumno(); // llamamos al metodo de ALERT