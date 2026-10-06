function Usuario() {
    let id = 1;

    this.name = 'Nicolas';

    let log = function () {
        console.log('logging...');
    }

    this.guardar = function () {
        log();
        console.log('guardando...', this.name, id);
    }
}

const usuario = new Usuario();
usuario.name = 'Stalin';
usuario.id = 2; // no se puede modificar porque es privada (la declaramos como una variable dentro de la funcion constructora al igual que la funcion log).
usuario.guardar()
