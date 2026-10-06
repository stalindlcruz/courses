const Entidad = {
  save() {
    console.log("guardado en Entidad");
  },
};

const Actualizar = {
  update() {
    console.log("actualizando en Entidad");
  },
};

class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    console.log("guardando en usuario");
  }
}

const nuevoProto = Object.assign({}, Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);
const u = new User("Chanchito");
u.save();
