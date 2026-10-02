/* let numbers = [15, 10, 30, -3];

// Ordenar de menor a mayor
numbers.sort((a, b) => a - b);
console.log(numbers); // [-3, 10, 15, 30]

// Ordenar de mayor a menor
numbers.sort((a, b) => b - a);
console.log(numbers); // [30, 15, 10, -3] */

// let array = ["cherry", "banana", "apple"];
// array.sort((a, b) => b.localeCompare(a));
// console.log(array);

// let numbers = [15, 10, 30, -3];

// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// let letras = ["z", "a", "d"];
// letras.sort();
// console.log(letras);

/* 
a antes que b => -1
b antes que a => 1
Si son iguales => 0
*/
// let conMayusculas = ["Z", "a", "d"];
// conMayusculas.sort((a, b) => {
//   let aLower = a.toLowerCase();
//   let bLower = b.toLowerCase();

//   if (aLower < bLower) {
//     return -1;
//   }
//   if (bLower > aLower) {
//     return 1;
//   }
//   return 0;
// });
// console.log(conMayusculas);

let usuarios = [
  { edad: 13, nombre: "Felipe" },
  { edad: 15, nombre: "Chanchito" },
  { edad: 25, nombre: "Poli" },
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) {
    return -1;
  }
  if (b.edad > a.edad) return 1;
  return 0;
});

console.log(usuarios);
