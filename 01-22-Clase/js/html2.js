document.write('<!DOCTYPE html>');
document.write('<html lang="es">');
document.write('<head>');
document.write('<meta charset="UTF-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
document.write('<title>getElementBy</title>');
document.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
document.write('</head>')
document.write('<body>');
document.write('<h1>DOM</h1>');
document.write('<h4>Selección de elementos</h4>');
document.write('<div class="padre">'); // INICIO div
    // CREACIÓN ETIQUETA P - Parrafo
    let txt = 'parrafo';
    for (let i = 1; i < 4; i++){
        document.write('<p class="parrafo" id="parrafo'+i+'" >Párrafo '+i+'</p>');
    }
document.write('</div>'); // CIERRE div

document.write('<script src="js/nodos.js"></script>');
document.write('</body>');
document.write('</html>');