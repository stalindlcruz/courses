/* Las fat arrow functions, no tienen un contexto de this. */

const usuario = {
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostarCiudadanias() {
    this.ciudadanias.forEach((ciudadania) => {
      console.log(`${this.nombre} tiene la cidadania de ${ciudadania}`);
    });
  },
};

usuario.mostarCiudadanias();
