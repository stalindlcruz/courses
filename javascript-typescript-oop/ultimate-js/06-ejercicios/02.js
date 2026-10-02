function createUsuario(name) {
  return {
    id: Math.floor(Math.random() * 10),
    // name: name,
    name,
  };
}

let user1 = createUsuario("Stalin");
let user2 = createUsuario("Dahiana");

console.log(user1, user2);
