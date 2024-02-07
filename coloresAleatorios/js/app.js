
const boton = document.querySelector('button');
const textoBoton = document.getElementById('#color');

//console.log(Math.floor(Math.random()*16)); // explicación del random y floor

// genera numeros-hexadecimal que cambia color
function colorAleatorio() {
    let digitos = "013456789ABCDEF";
    let colorHex = '#';
    console.log('Cambio Color');
    for (let i=0; i < 6 ;i++) {
        let indiceAletario = Math.floor(Math.random() * digitos.length); // genera número entre 1 al 16
                            // MATH.FLOOR -> quita el entero
                                        // MATH.RANDOM -> genera numero aleatoriamente entre 0 y 1 (no incluido)
                                                    // digitos.length -> nos devuelve tamaño 16 caracteres
        colorHex += digitos[indiceAletario]; // en string coge caracter de esa posicion
        console.log(indiceAletario, "es posición ",digitos[indiceAletario]);
    }
    console.log(colorHex);
    return colorHex;
}

// escuchamos el evento y lo relacionamos con la función
boton.addEventListener('click', (event) => { /* funcion FLECHA */
    let colorAleatorioHex = colorAleatorio(); // llega el return colorHex
    color.textContent = colorAleatorioHex;// actualizar el texto del color
    document.body.style.background = colorAleatorioHex; //actualiza color aleatorio - dentro del body
});