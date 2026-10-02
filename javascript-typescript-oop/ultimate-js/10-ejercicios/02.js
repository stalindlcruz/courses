const obj = {
  nombre: "Nicolas",
};

function extender(usuario) {
  const metodos = {
    login() {
      console.log("Iniciando sesión"), this.nombre;
    },
    logout() {
      console.log("Cerrando sesión"), this.nombre;
    },
  };

  return Object.assign(usuario, metodos);
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
