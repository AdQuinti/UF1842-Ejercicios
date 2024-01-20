let nombre;
let fecha = new Date(); // fecha y hora actual
let hora = fecha.getHours(); // hora en formato 24h
let minutos = fecha.getMinutes();
let saludo;

nombre = window.prompt ("Introduzca su nombre"); // Input en JScript
switch (true){
    //case 12:
    case (hora<12):
        saludo = "Buenos días "+nombre;
        break;
    //case 19:
    case (hora >= 12 && hora < 20):
        saludo = "Buenas tardes "+nombre;
        break;
    case (hora >= 20):
        saludo = "Buenas noches "+nombre;
        break;
    default:
        saludo = "Hola "+nombre;
        break;
}
// agregar hora y minutos a la cadena
saludo += ", son las "+hora+":"+(minutos<10?'0':'')+minutos+" h."; // añade de 0 a 9 un cero, sino nada
document.writeln(saludo);