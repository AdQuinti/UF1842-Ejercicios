// FORMAS DE DECLARAR ARRAY
let diaSemana = new Array ("Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo");
let numerosSemana = [1,2,3,4,5,6,7,'No hay más días'];
let miArray = new Array(4); // puede ponerse tambien [4]
miArray[0]=55;
miArray[1]='55';
miArray[2]=0;
miArray[3]=true;

for (let valor1 of diaSemana){
    document.writeln(valor1);
}

document.writeln("<br>");

for (let valor2 of numerosSemana){
    document.writeln(valor2);
}

document.writeln("<br>");

for (let valor3 of miArray){
    document.writeln(valor3);
}

document.writeln("<br><br>");
// mostrar x elemento del array que queramos y la letra o caracger de ese que digamos
//document.writeln(diaSemana[0].charAt(0)); 
document.writeln(diaSemana[0][1]);  // otra forma - [posicion array] [posicion caracter]