/* Las funciones cuando se encuentran dentro de un objeto se llaman metodos. */

const usuario = {
  nombre: "Chanchito",
  apellido: "Feliz",
  //   nombreCompleto: function () {
  //     return `${usuario.nombre} ${usuario.apellido}`;
  //   },
  //   nombreCompleto: () => {
  //     return `${usuario.nombre} ${usuario.apellido}`;
  //   },
  get nombreCompleto() {
    return `${usuario.nombre} ${usuario.apellido}`;
  },
  set nombreCompleto(valor) {
    const [nombre, apellido] = valor.split(" ");
    this.nombre = nombre;
    this.apellido = apellido;
  },
};

usuario.nombreCompleto = "Stalin DeLaCruz";
console.log(usuario.nombreCompleto);
