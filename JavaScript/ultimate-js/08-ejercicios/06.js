// tienes que usar reduce
function dividePorTipo(arr) {
  return arr.reduce((acc, elemento) => {
    let llave = typeof elemento;

    acc[llave] = acc[llave] ? acc[llave] : [];

    // if (!acc[llave]) {
    //   acc[llave] = [];
    // }

    acc[llave].push(elemento);
    return acc;
  }, {});
}

const miArray = ["Hola", 12, true, "Mundo", {}, { id: 15 }, ["lala"]];

let arr = dividePorTipo(miArray);
console.log(arr);
