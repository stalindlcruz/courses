function Usuario(name) {
  this.id = Math.floor(Math.random() * 10);
  this.name = name;
}

let user1 = new Usuario("Engels");
let user2 = new Usuario("Stalin");

console.log(user1, user2);
