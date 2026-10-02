"use strict";
class Personaje {
    constructor(id, name, nivel, _hp, profesion) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
        this.profesion = profesion;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
    set hp(cantidad) {
        this._hp = cantidad;
    }
}
Personaje.equipo = 1;
const personaje = new Personaje(1, "Nicolas", 1, 100, "Developer");
personaje.subirNivel();
personaje.cambiarHP(-10);
const id = personaje.id;
personaje.hp = 20;
const personaje1 = new Personaje(2, "Chanchito", 1, 120, "Developer");
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map