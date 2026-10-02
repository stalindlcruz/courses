console.log(resta); // Hoisting -> izar o levantar

// Declaración de funciones: Function Declaration
/* ----------------------------------------------- */

// Funcion nombrada: Named function
function sumar() {
  console.log("Sumando...");
}

// Funcion anonima -> Anonymous function
["hola"].map(function () {
  console.log("Funcion anonima");
});

// Expresion de funciones -> Function expresion
// Expresion de funciones anonimas -> Anonymous function expresion
const resta = function () {
  console.log("restando...");
};

// Expresion de funciones nombradas -> Named function expresion
const multiplica = function multi() {
  console.log("restando...");
};

//Anónima
const divide = () => {
  console.log("dividiendo...");
};
