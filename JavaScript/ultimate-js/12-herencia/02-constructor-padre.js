// Existen algunas situaciones donde es preferible llamar al constructor padre o la función constructora padre en JS, para poder reutilizar algunas de las propiedades que esta creando.

function Entidad(entidad) {
  this.id = Math.random().toString("20");
  this.entidad = entidad;
}

function User() {
  Entidad.call(this, "user");
  this.attrs = {
    name: "Chanchito Feliz",
    email: "chanchito@holamundo.io",
  };
}

const user = new User();
console.log(user);
