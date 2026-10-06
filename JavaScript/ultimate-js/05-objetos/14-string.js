const saludo = 'Hola Mundo!';

const despedida = new String('Bye Mundo!');

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf('Mu'));  // devuelve el indice
console.log(saludo.indexOf('tyu'));
console.log(saludo.includes('do')); // devuelve true or false
let nuevoSaludo = saludo.replace('Mundo', 'Stalin');
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0, 4));

const espacios = '   Hola Mundo!  '

console.log(espacios.trim());
