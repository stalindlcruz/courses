function User() {
  this.name = "Hola Mundo";
}

function Product() {
  this.name = "Hola Mundo";
}

function Entidad() {}

Entidad.prototype.save = function () {
  console.log("Guardando...", this.name);
};

Entidad.prototype.validate = function () {
  console.log("Validando...", this.name);
};

// Existen varias formas de empezar a implementar herencia con JavaScript. La primera es que tomemos el prototipo de User y le asignemos el prototipo de Entidad.

// Formas antiguas de poder extender los prototipos.
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// Formas de extender los prototipos después de ECMAScript6.
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);
