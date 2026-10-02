let promesa1 = (user) =>
  new Promise((resolve, reject) => {
    resolve(user);
  });

let promesa2 = (user) =>
  new Promise((resolve, reject) => {
    resolve(user + ", Hola Mundo!");
  });

/* promesa1("Chanchito Feliz")
  .then((user) => console.log(user))
  .catch((error) => {
    console.log("Waiting for string");
  }); */

promesa1("Chanchito Feliz")
  .then((user) => promesa2(user))
  .then((dato) => console.log(dato));
