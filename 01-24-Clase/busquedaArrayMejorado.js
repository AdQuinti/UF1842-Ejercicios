/** VIDEO EXPLICATIVO
 * 
 */
let users = []; // creación array
console.log('Creado array');

// relleno  id automatico array
for (let i = 9999; i >= 0; i--) {
    users[i] = {
        id: i,
        name: Math.random().toString(),
    }
} // end for id
console.log('Introducido datos array');

// Listado name creado por usuario automaticamente
const lista = [];
for (let i = 0; i < 10000; i++) {
    lista[i] = {
        id: i,
        name: Math.random(),
        created_by: Math.floor(Math.random() * 10000),
    }
} // end for name

/* console.time('Usando find'); // control tiempo tarda metodo antiguo
// Listado con USER - encontrar usuarios
const conUser = lista.map(elemento => { // es una función-simplificada
    return {
        ...elemento, // retorna copia del elemento creado
    // agregamos usuario - forma en desuso
        created_by_user: users.find(u => u.id === elemento.created_by)
    }
})
console.timeEnd('Usando find'); // control tiempo tarda metodo antiguo */

// Listado con USER - encontrar usuarios
const usersIndexado = users.reduce((acc, el) => {
// agregamos propiedades iguales a las q queremos indexar
    acc[el.id] = el;
    /** acumulador - acc - agregamos propiedad igual a usuario[id] -
     * sacado del elemento que iteramos "el." - asginamos usuario
     * mismo "= el" - retornamos acumulador q tiene usuairos*/
    return acc;
},{}) // objeto vacio - segunda llaves

console.lot('Object-usuario [Id] devuelto');
document.write(usersIndexado); // devuelve ID (objeto) tiene usuarios

// FORMA RÁPIDA ENCONTAR USUARIO POR NAME
console.time('Usando index'); // control tiempo
// Listado con USER - encontrar usuarios
const conUser = lista.map(elemento => { //función-simplificada
    return {
        ...elemento, // retorna copia del elemento creado
    // agregamos usuario
        created_by_user: usersIndexado[elemento.created_by]
    }
})
console.timeEnd('Usando index'); // control tiempo