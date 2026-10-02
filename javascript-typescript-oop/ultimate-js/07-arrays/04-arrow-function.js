// function hola() {
//   return "Hola Mundo!";
// }

// const hola = () => {
//     return 'Hola Mundo!'
// }

// const hola = () => "Hola Mundo!";

const hola = (mensaje) => "Hola Mundo! " + mensaje;

const hola2 = (mensaje) => {
  return "Hola Mundo! " + mensaje;
};

const resultado = hola("Chanchito Feliz");
const resultado2 = hola2("Chanchito Triste");
console.log(resultado, `\n${resultado2}`);
