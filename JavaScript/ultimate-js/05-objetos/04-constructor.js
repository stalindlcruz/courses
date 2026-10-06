// { id: 1, recuperarClave: function(){} }
let idCounter = 1
function Usuario(name, edad) {
    this.id = idCounter++;
    this.name = name;
    this.edad = edad;
    this.recuperarClae = function () {
        console.log('recuperando clave...');
    };
};

const usuario_1 = new Usuario('Engels', 29);
const usuario_2 = new Usuario();
console.log(usuario_1, usuario_2);
