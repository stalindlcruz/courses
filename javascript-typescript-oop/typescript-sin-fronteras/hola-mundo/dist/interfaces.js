"use strict";
class Caballo {
    constructor() {
        this.name = "Roci";
    }
    caminar() {
        console.log("Caminando");
    }
    onomatopeya() {
        return "hin";
    }
}
class Cerdo {
    constructor() {
        this.name = "Chanchito";
    }
    caminar() {
        console.log("Caminando");
    }
    onomatopeya() {
        return "oinc";
    }
}
class Perro {
    constructor() {
        this.name = "Fido";
    }
    caminar() {
        console.log("perro caminando");
    }
    onomatopeya() {
        return "gua";
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios["1a"] = "usuario 1";
diccionarioUsuarios["a1"] = "usuario 2";
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map