/*crea una array que contenga el numero de cinco colores escritos como strings
guarda una variable el tercer elemento de array del ejercicio
Acede desde un imprime por pantallala pocicion 0 del string de la posicion 0 del array del ejercicio1*/
 
var colores = new Array("Amarillo","Verde","Azul","Blanco","Rjo" + "<br>");

var elemento = colores[2];//guardamos en esta variable la posicion pedida

document.writeln(elemento + "<br>");
 
/*con este for asemos que recorra el array y nos de la pocion 0 que a subes
esta en la pocicion 0
for(var i = 0; i < elemento.length; i++){

    document.writeln("<br>" + elemento[0]);
} */

//saca directamente el caracter que deseamos 
document.writeln("<br>" + elemento.charAt(0));
