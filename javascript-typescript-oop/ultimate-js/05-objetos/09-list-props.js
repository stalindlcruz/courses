/*
const punto = {
    x: 10,
    y: 15,
    dibujar: function() {
        console.log('Dibujando...');
    }
};
*/

const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando...');
    }
};

// delete punto.dibujar;
// if ('dibujar' in punto) {
//     punto.dibujar();
// }

// let keys = Object.keys(punto);
// console.log(keys);

// let value = Object.values(punto)
// console.log(value);



/* for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
} */


// for (let entry of Object.entries(punto)) {
//     console.log(entry);
// }

// for (let [clave, valor] of Object.entries(punto)) {
//     console.log(clave, valor);
// }


for (let llave in punto) {
    console.log(llave, punto[llave]);
}


// for (const letra of 'HOLA') {
//     console.log(letra);
// }


// for (const letra in {uno: 1, dos: 2}) {
//     console.log(letra);
// }