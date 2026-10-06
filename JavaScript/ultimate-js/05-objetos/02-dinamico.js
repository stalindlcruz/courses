const user = { id: 1 };

user.id = 2;
user.name = "Nicolas"
user.guardar = function () {
    console.log("Guardando a:", user.name);
}

user.guardar();

delete user.id;
delete user.guardar;
console.log(user);


// const user1 = Object.freeze( { id: 1 } ); // <-- Con el metodo freeze(), no se pueden modificar sus propiedades y valores.
const user1 = Object.seal( { id: 1 } ); // <-- Con el metodo seal(), no se pueden modificar sus propiedades, pero sus valores pueden ser cambiados.

user1.id = 3;
user1.name = "Nico";

console.log(user1);