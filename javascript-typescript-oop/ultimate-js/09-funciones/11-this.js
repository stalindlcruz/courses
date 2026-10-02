/* 
• Dentro de un objeto this -> hace referencia al objeto donde se usa.
• En una funcion this -> hace referencia al objeto window, global.
• Si se usa new hace referencia al objeto que sera creado.


Las funciones constructoras empiezan con la primera letra del nombre en mayusculas.
*/

/* const user = {
  name: "Nicolas",
  logIn() {
    console.log(this);
  },
};

user.logOut = function logOut() {
  console.log(this);
};

user.logOut(); */

// function log(log) {
//   console.log(this);
// }
// log();

function Log(mensaje) {
  this.mensaje = mensaje;
  console.log(this);
}

/*
Cuando usamos la palabra reservada de new
-----------------------------------------
• Se crea un objeto literal.
• Se vincula este objeto a this.
• Se vincula el prototipo.
• Si no retorna nada, entonces retorna this.
*/

const l = new Log("Hola Mundo");
