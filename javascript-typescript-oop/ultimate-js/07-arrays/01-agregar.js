const letras = ["a", "b"];
// letras = "c"; // -> Arroja un error porque declaramos con const.

// Agregar al final del array
letras.push("c", "d");

// Agregar al comienzo del array
letras.unshift("y", "z");

letras.splice(3, 0, 1, 2);

console.log(letras);
