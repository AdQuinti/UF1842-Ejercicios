document.write('<h1>DOM</h1>');
document.write('<h4>Selección de elementos</h4>');
document.write('<div class="padre">'); // INICIO div
    // CREACIÓN ETIQUETA P - Parrafo
    let txt = 'parrafo';
    for (let i = 1; i < 4; i++){
        document.write('<p class="parrafo" id="parrafo'+i+'" >Párrafo '+i+'</p>');
    }
document.write('</div>'); // CIERRE div