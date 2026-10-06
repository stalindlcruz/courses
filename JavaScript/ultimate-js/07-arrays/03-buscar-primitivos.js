const letras = ["a", "b", 1, "c", "d", 1];

console.log(letras.indexOf("c"));
console.log(letras.indexOf(1));
console.log(letras.lastIndexOf(1));

console.log(letras.indexOf(1) !== -1);
console.log(letras.includes(1));

console.log(letras.includes("p"));

console.log(letras.indexOf(1, 3));
