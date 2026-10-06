const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
];

const users = [
  { age: 22, name: "Michael", menbership: "premium" },
  { age: 27, name: "Kevin", menbership: "free" },
  { age: 29, name: "Happy pig", menbership: "free" },
];

// Unificar las estructuras de usuarios y users
// Fusionar los arrays
// Ordenar por edad
// Crear plantilla HTML:
// <li>Nombre: name, Edad: age</li>
// Imprimir la lista en consola

const usersSpanish = users.map((u) => ({
  edad: u.age,
  nombre: u.name,
  plan: u.menbership,
}));

const todos = [...usuarios, ...usersSpanish];

todos.sort((a, b) => {
  if (a.edad < b.edad) {
    return 1;
  }
  if (a.edad > b.edad) {
    return -1;
  }
  return 0;
});

const lista = todos.map((u) => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);
const html = `
<ul>
    ${lista.join(`
    `)}
</ul>`;

console.log(html);
