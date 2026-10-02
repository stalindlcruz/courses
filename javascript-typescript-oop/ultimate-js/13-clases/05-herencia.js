class Entidad {
  constructor(id) {
    this.id = id;
    this.create_at = new Date();
  }

  save() {}
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }
}

const u = new User("Chanchito Feliz");
