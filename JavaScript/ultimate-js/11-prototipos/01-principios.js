/* Programación ESTRUCTURADA */
let nombre = "Hola";
let apellido = "Mundo";

function getNombreCompleto(nombre, apellido) {
  return [nombre, apellido].join(" ");
}

let fullName = getNombreCompleto(nombre, apellido);

/* POO */

// Encapsulación
/* const user = {
  nombre: "Hola",
  apellido: "Mundo",
  getNombreCompleto() {
    return [this.nombre, this.apellido].join(" ");
  },
};

let result = user.getNombreCompleto();

console.log(fullName, result); */

// Abstracción
/* const user = new User();
user.password = "1234567";
user.save(); */

/* 
HERENCIA
--------
En JavaScript para poder heredar métodos y propiedades utilizamos funciones constructoras, y así otras funciones constructoras que vayamos creando pueden utilizar estos métodos y propiedades que nosotros le agregamos a la función constructora padre.

User
Restaurante
Motociclista

Los metodos y propiedades de la función constructora padre (id, name, guardar()) pueden ser usados en nuestas funciones constructoras (User, Restaurante, Motociclista).

-> Función Constructora Padre
id, name, guardar()
*/

// POLIMORFISMO
/*
Esta forma no es necesaria si usamos el polimorfismo

function validarEntidad(entidad) {
  switch (entidad.nombre) {
    case "user":
      entidad.save();
      break;
    case "restaurante":
      entidad.guardar();
      break;
    case "moto":
    // ...
  }
} */

function validarEntidad(entidad) {
  /*
    User
    Restaurante
    Motociclista

    La 'entidad' hace referencia al objeto y se veria representado de la siguiente manera:
    • En el caso de 'Motociclista' deberiamos implementar un metodo que se llame save() y se encargue de llamar a la API.
    • En el caso de 'Restaurante' deberiamos implementar un metodo que se llame save() y este se encargue de ir a guardar a la base de datos.
    • En el caso de 'User' este podría venir de un servicio de autenticaión, entonces lo que hacemos es conectarnos con este servicio de autenticación para poder actualizar el usuario.

    De esta manera podemos realizar acciones completamente distintas, pero aprovechando la lógica de una función que ya hemos creado.
    */

  entidad.save();
}

/* ---------------------------------------------------------------------------------------------- */

/* // Objeto prototipo
const animal = {
  comer: function () {
    console.log("El animal está comiendo.");
  },
};

// Crear un nuevo objeto que hereda de 'animal'
const perro = Object.create(animal);
perro.ladrar = function () {
  console.log("Guau guau!");
};

// 'perro' puede usar el método 'comer' de 'animal'
perro.comer(); // Salida: El animal está comiendo.
perro.ladrar(); // Salida: Guau guau!

console.log(Object.getPrototypeOf(perro) === animal); // Salida: true

// En este ejemplo, perro no tiene su propio método comer, pero lo hereda de animal a través de la cadena de prototipos. */
