// Operador ...resr

const suma = (a, b, ...rest) => {
  console.log(rest);
};

// suma(1, 2, 3, 4, 5, 6);

function logMsg(desc, ...msgs) {
  for (let msg of msgs) {
    console.log(desc, msg);
  }
}

// logMsg("Servidor:", "Error 1", "Petició aceptada", "Socket activo");
let mensajes = ["Servidor:", "Error 1", "Petició aceptada", "Socket activo"];
logMsg("Cliente móvil:", ...mensajes, "another error");
