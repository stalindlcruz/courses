/* let user = {
    id: 1,
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    activo: true,
    recuperandoClave: function() {
        console.log('recuperando clave...');
    },
};

let user1 = {
    id: 2,
    email: 'chanchito@holamundo.io',
    name: 'Chanchito',
    activo: false,
    recuperandoClave: function() {
        console.log('recuperando clave...');
    },
}; */

let idCounter = 1;

function crearUsuario(name, email) {
    return {
        id: idCounter++,
        name: name,
        email,
        activo: true,
        recuperarClave: () => {
            console.log('recuperando clave...');
        },
    };
};


/* const crearUsuario = (() => {
    let idCounter = 1;

    return (name, email) => ({
        id: idCounter++,
        name,
        email,
        activo: true,
        recuperarClave: () => {
            console.log('recuperando clave...');
        }
    });
})(); */

const user1 = crearUsuario('Engels', 'engels@mail.com');
const user2 = crearUsuario('Stalin', 'stalin@mail.com');

console.log(user1, user2);
