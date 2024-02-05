/**
 * Array que devuelva el primer elemento
 */
const colores = ['azul','rojo','amarillo'];

/* function primerElemento (arr) {
    return arr[0];
}  */
// función flecha
const primerElemento = (arr) => arr[0];

//Sacar por pantalla
document.write(primerElemento(colores),"<br>");

// ver por pantalla array completo
/* for (i=0; i < colores.length; i++) {
    document.write("<br>",colores[i]);
} */
for (const i of colores) {
    document.write("<br>" + i);
    console.log(i);
}

const re = [1,2.3,4];

console.log(primerElemento(re)); // da primer elemento