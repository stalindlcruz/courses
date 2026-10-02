const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

// numbers, strings, object
function dividePorTipo(arr) {
  return {
    numbers: arr.filter((n) => typeof n === "number"),
    strings: arr.filter((n) => typeof n === "string"),
    objects: arr.filter((n) => typeof n === "object"),
  };
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
