"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${recurso}`);
        return response.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData("/usuarios");
        user.id;
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({
    encender: () => { },
    apagar: () => { },
});
const programador1 = new Programador("Hola Mundo");
programador.computador.encender();
programador1.computador.toLowerCase();
function fetchProduct() {
    return {
        key: "id de producto",
        value: { id: "id de product too" },
    };
}
function fetchStock() {
    return {
        key: "id de producto",
        value: 48,
    };
}
class Usuario {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 20, name: "Felix" });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter((x) => x.id !== id);
    }
}
const estadoELiminar = new EstadoEliminar();
estadoELiminar.eliminar(2);
class EstadoUsuario extends Estado {
    reiniciarContraseñas() {
    }
}
const estadoUsuario = new EstadoUsuario();
const calendar = { id: 1, fuente: "google", owner: "Google" };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, "id");
getProp(calendar, "fuente");
const KeyVal = {
    "soy un string": 42,
};
const p = {
    x: 1,
};
const p1 = {
    x: 1,
    y: 2,
};
const readOnlyP = {
    x: 4,
    y: 5,
    desc: "soy una descripcion",
};
//# sourceMappingURL=genericos.js.map