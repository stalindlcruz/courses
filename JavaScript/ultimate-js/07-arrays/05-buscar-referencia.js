const usuarios = [
  { id: 1, name: "Chanchito" },
  { id: 1, name: "Feliz" },
];

const resultado = usuarios.find(function (usuario) {
  return usuario.name === "Chanchito";
});
const resultado2 = usuarios.findIndex(
  (usuario) => usuario.name === "Chanchito"
);

console.log(resultado);
console.log(resultado2);
