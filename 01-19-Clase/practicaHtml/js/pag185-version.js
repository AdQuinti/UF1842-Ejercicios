// PONER COLOR DE FONDO EN PAG.WEB

// FUNCION MAIN
function inicio() {
    inputColor = peticion();
    compruebaColor (inputColor);
    color == 1 ? document.body.style.backgroundColor = inputColor : alert ("nombre color incorrecto, vuelva a recargar la página");
}

// PETICION COLOR
function peticion(){
    inputColor1 = prompt("Introduzca el nombre del color para el fonde de esta página ");
    return inputColor1;
}

// COMPROBACIÓN COLOR
function compruebaColor (inputColor){
    // DATOS ARRAY
    colorArray = ["white", "black", "green", "pink", "magenta", "red", "brown", "silver", 
                    "teal", "aqua", "fuchsia", "olive", "lime", "yellow"];
    for (let i of colorArray){ // recorre array
        inputColor.toLowerCase() === i ? color = 1: null; // control color
    }
}

// DECLARACION VARIABLES
let color = 0;
let colorArray= [];
let inputColor = "";
let inputColor1 = "";