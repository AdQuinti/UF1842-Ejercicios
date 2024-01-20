let miArray;
miArray = new Array (4); // se asista el array
miArray[0] = 'Aloja';
miArray[1] = 54;
miArray[2] = 'h';
miArray[3] = 7;

for (let Valor of miArray) { // no se un contador es el valor del array
    //document.writeln("["+Valor+"] ");
    if (Valor == 'h'){
        document.writeln("<br><br>En IF encuentra valor: ");
        document.writeln(Valor);
        //break;
    }
}
document.writeln("<br><br>");

for (let i in miArray) {
    document.writeln(i+": ["+miArray[i]+"]<br>")
}