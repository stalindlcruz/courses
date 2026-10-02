// const numeros = [1, 2, 3, 4];

// const suma = numeros.reduce((acumulador, elemento) => {
//   return acumulador + elemento;
// }, 0);

// console.log(suma);

// const anidado = [[1, 2], 3, [4, 5]];
// // const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// const otherPlano = anidado.flat(1);
// console.log(otherPlano);

const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];

const indexado = usuarios.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

console.log(indexado);
