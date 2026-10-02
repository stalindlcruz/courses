// function User(name) {
//   this.name = name;
//   this.instancia = function () {};
// }

// User.prototype.login = function () {
//   console.log("Hola Mundo!");
// };

class User {
  constructor(name) {
    this.name = name;
    this.instancia = function () {};
  }

  activo = true;

  /* // De esta forma se pasa a la instancia
  logout = () => {
    console.log("Logout!");
  }; */

  // De esta forma al prototipo
  logout() {
    console.log("Logout!");
  }

  login() {
    console.log(`Hola Mundo ${this.name}`);
  }
}

const u = new User("Chanchito Feliz");
