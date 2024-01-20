//1. creamos array
let colores = new Array(10); // let colores = new Array[10];

//2.creamos array
let colores2;
colores2 = new Array(10);
colores2 [0] = 'rojo';
colores2 [5] = 'violeta';
colores2 [9] = 'amarillo';

//3.creamos array
var diasSemana = new Array ("lunes","martes","miercoles");

//4. creamos array
let numeros = [1, 2, 3, 4];
for (let i = 0; i < colores2.length;i++){
    document.writeln("["+colores2[i]+"]<br>");
}

document.writeln("<br><br>For in: ");
// recorre array "colores2"
for (let c in colores2){
    document.writeln(" ["+colores2[c]+"] ");
}

document.writeln("<br><br>For of: ");
// recorre array "colores2"
for (let c of colores2){
    document.writeln(" ["+c+"] ");
}

document.writeln("<br><br>");

// recorre array "disSsemana"
for (let cont in diasSemana){
    document.writeln(" ["+diasSemana[cont]+"] ");
}