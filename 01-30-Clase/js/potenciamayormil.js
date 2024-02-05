/**
 * Calcular la primera potencia mayor de mil de 2
 */

let num = 2, multi = 1, multi2 = 1;

// con Do While
do {
    multi *= 2;
    console.log(multi);
} while (multi < 1000);

document.write('Mayor que mil ',multi,"<br>");

// con while
while (multi2 < 1000) {
    multi2 *= 2;
    console.log(multi2);
}

document.write('Menor que mil ',multi2/2,"<br>");