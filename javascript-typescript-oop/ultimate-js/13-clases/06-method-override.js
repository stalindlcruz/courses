// Override

class Entidad {
  constructor(id) {
    this.id = id;
    this.create_at = new Date();
  }

  save() {
    console.log("Save en Entidad");
  }
}

/* Cuando heredamos un metodo de una clase padre, para sobre-escribirlo solo lo declaramos nuevamente y le pasamos la funcionalidad que queremos que este tenga, y dependiendo de la instancia de donde llamemos ese metodo devolvera lo de la clase padre si no lo hemos sobre-escrito, lo de la propia instancia si ya lo hemos sobre-escrito (override). El primero que se ejecuta es el que está más cerca del objeto. y si en dado caso un metodo ya esta sobre escrito y queremos usar la funcionalidad del metodo en la clase padre, solo usamos la palabra reservada 'super.save()' seguida del metodo que queremos usar de la clase padre.  */

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }

  save() {
    super.save();
    console.log("Save en Usuario");
  }
}

const u = new User("Chanchito Feliz");
