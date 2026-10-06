let punto = {
    x: 10,
    y: 15,
};

// agregar propiedades al objeto
let referencia = Object.assign( punto, { z: 20, x: 1 } );

// pero con el mismo metodo de assign se puede clonar el objeto, solo pasandole el objeto literal vacio como primer argumento.
let clonePunto = Object.assign( {}, punto, { z: 20 } );
// console.log(punto, clonePunto);
// console.log(referencia);

let copiaPunto = Object.assign( {}, punto );
// console.log(copiaPunto, punto);

/* 
Spread Operator { ... }
------------------------

Se usa para copiar, combinar, o clonar objetos y arreglos.

Rest Operator { ... }
Tambien se usa para capturar multiples valores en una variable.
*/

let newCopiaPunto = { ...punto };
let addingToCopia = { ...punto, v: 4 };
// console.log(newCopiaPunto, addingToCopia );


// function sumar(...numeros) {
//     return numeros.reduce((acc, num) => acc + num, 0);
// }

// console.log(sumar(1, 2, 3, 4)); // 10

// const persona = { nombre: "Stalin", edad: 30, ciudad: "Nashua" };
// const { nombre, ...resto } = persona;
// Aquí, ...resto agrupa las propiedades restantes en un nuevo objeto.

// console.log(nombre); // "Stalin"
// console.log(resto); // { edad: 30, ciudad: "Nashua" }


let oldCopia = {};
for (let llave in punto) {
    oldCopia[llave] = punto[llave];
};

console.log(oldCopia);