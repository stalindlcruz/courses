let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
console.log(combinados, arr1, arr2);

// let divididos = combinados.slice(1, 3);
// let divididos = combinados.slice(1);
let divididos = combinados.slice(); //Funciona como una copia del array (por referencia)
console.log(divididos);
