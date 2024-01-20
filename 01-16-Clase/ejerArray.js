// pag 158 a 160 habla de los arrays
/**1.Crea un array que contenga el nombre de cinco colores escrito como string.
 * 2.Guarda en una variable el tercer elemento del array del ejercicio anterior.
 * Recuerda que se cuenta desde el 0.
 * 3. Accede desde un imprime por pantalla la posición 0 del string de la posición 0
 * del array del ejercicio 1.
 * */

document.writeln("1. Ejer:<br>");
//1.
let color = new Array ('rojo','verde','violeta','amarillo','purpura');
document.write(color);
/* for (let i of color){
    document.write('[',i,'] ');
} */

document.writeln("<br>2. Ejer:<br>");
//2.
let salvaColor = color[2];
document.writeln(salvaColor+"<br>");

document.writeln("<br>3. Ejer:<br>");
// 3. 
//document.writeln(color[0].charAt(0)); 
document.writeln(color[0][0]);  // otra forma - [posicion array] [posicion caracter]