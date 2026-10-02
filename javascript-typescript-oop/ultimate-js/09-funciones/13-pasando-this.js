/* Las funciones dentro de JavaScript tambien son objetos. */

// function saludar(...rest) {
//   console.log(this, rest);
// }

// saludar.call({ propiedad: "Hola Mundo" }, 1, 5);
// saludar.apply({ propiedad: "Hola Mundo" }, [1, 5]);
// let nuevoSaludar = saludar.bind({ propiedad: "Hola Mundo" });
// nuevoSaludar(1, 5);
// saludar.bind({ propiedad: "Hola Mundo" })(3, 5);

// const usuario = {
//   nombre: "Nicolas",
//   ciudadanias: ["Chile", "Colombia", "New Zealand"],
//   mostarCiudadanias() {
//     this.ciudadanias.forEach(
//       function (ciudadania) {
//         console.log(`${this.nombre} tiene la cidadania de ${ciudadania}`);
//       }.bind(this)
//     );
//   },
// };

// usuario.mostarCiudadanias();

// const usuario = {
//   nombre: "Nicolas",
//   ciudadanias: ["Chile", "Colombia", "New Zealand"],
//   mostarCiudadanias() {
//     let self = this;
//     this.ciudadanias.forEach(function (ciudadania) {
//       console.log(`${self.nombre} tiene la cidadania de ${ciudadania}`);
//     });
//   },
// };

// usuario.mostarCiudadanias();

const usuario = {
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostarCiudadanias() {
    this.ciudadanias.forEach(function (ciudadania) {
      console.log(`${this.nombre} tiene la cidadania de ${ciudadania}`);
    }, this);
  },
};

usuario.mostarCiudadanias();
