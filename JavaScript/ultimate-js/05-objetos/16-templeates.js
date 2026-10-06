const nombre = "Stalin";
const apellido = "De La Cruz";
const nombreCompleto = nombre + " " + apellido;

/* function plantilla(params) {
    return `Hola ${nombre} ${apellido}
    Bienvenidos a "Ultimate JavaScript" :)

    Cariños Nico.
    `
} */

function plantilla(nombre) {
  return `Hola ${nombre}!
Bienvenidos a "Ultimate JavaScript" :)
Cariños Nico.`;
}

let result = plantilla("Engels Valdez");

console.log(nombreCompleto);
console.log(result);
