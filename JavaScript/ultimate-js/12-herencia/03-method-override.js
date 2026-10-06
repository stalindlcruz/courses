function Entidad() {}

Entidad.prototype.save = function () {
  console.log("Guardando desde entidad...");
};

function User() {}

// Primero extiende el prototipo
Object.setPrototypeOf(User.prototype, Entidad.prototype);

// Luego agrega (o sobreescribe) los métodos propios
User.prototype.save = function () {
  console.log("Guardando desde User...");
};

const user = new User();
user.save(); // Guardando desde User...
