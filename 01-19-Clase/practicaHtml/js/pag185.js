let color = 0;
function inicio() {
    let inputColor = prompt("Introduzca el nombre del color para el fonde de esta página ");
    // propiedad del color será color indicado por teclado
    compruebaColor (inputColor);
    if (color == 1 ){
        document.body.style.backgroundColor = inputColor; // manda color a body
    } else {
        alert ("nombre color incorrecto, vuelva a recargar la página");
    } 
}

// COMPROBACIÓN COLOR
function compruebaColor (inputColor){
    let colorArray = ["white", "black", "green", "pink", "magenta", "red", "brown", "silver", 
                        "teal", "aqua", "fuchsia", "olive", "lime", "yellow"];
    console.log("creado Array");
    //for (let i = 0; i < colorArray.length; i++){
    for (let i of colorArray){
        //if (inputColor == colorArray[i]){
        if (inputColor.toLowerCase() === i){
            console.log("color correcto introducido");
            color = 1;
        }
    }
}

