let nombre;
let fecha = new Date(); // fecha y hora actual
let hora = fecha.getHours(); // hora en formato 24h
let minutos = fecha.getMinutes(); // obtiene min formato 0 a 59

nombre = window.prompt ("Introduzca su nombre"); // Input en JScript
document.writeln(hora < 12 ? "Buenos días 🌞 "+nombre+" son las "+hora+":"+minutos+" h":" ")+console.log("Control entra primer if");
document.writeln(hora >= 12 && hora <= 20 ? "Buenos tardes 🧭 "+nombre+" son las "+hora+":"+minutos+" h"
:"Buenos noches 🌜 "+nombre+" son las "+hora+":"+minutos+" h")+console.log("Control entra segundo if");



