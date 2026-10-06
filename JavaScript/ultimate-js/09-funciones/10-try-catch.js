/* Solo los arrays pueden usar el metodo de reduce */

function sumaTodo(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("El parametro no es un array!");
  }
  return arr.reduce((acc, el) => {
    if (typeof el !== "number" || Number.isNaN(el)) {
      throw new Error(`Elemento ${el} no es un numero`);
    }
    return acc + el;
  });
}

// console.log(sumaTodo([1, 2, 3, 4]));
try {
  //   console.log(sumaTodo([1, 2, 3, 4, NaN, "Hola Mundo"]));
  console.log(sumaTodo([1, 2, 3, 4]));
} catch (error) {
  console.log(error.message);
}

console.log("Despues del try catch");
