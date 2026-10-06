let obj1 = { id: 1, name: "chanchito" };

function createCopy(obj) {
  let copia = {};
  for (llave in obj) {
    copia[llave] = obj[llave];
  }
  return copia;
}

let obj2 = createCopy(obj1);

console.log({ obj1, obj2 });
