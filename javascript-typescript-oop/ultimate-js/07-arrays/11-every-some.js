let usuarios = [
  { id: 1, activo: false },
  { id: 2, activo: true },
  { id: 3, activo: false },
];

// let todosActivos = usuarios.every((u) => {
//   console.log("Todos Activos", `ID: ${u.id}`);
//   return u.activo;
// });

let algunoActivo = usuarios.some((u) => {
  console.log("Alguno Activo ID:", u.id);
  return u.activo;
});

console.log(algunoActivo);
