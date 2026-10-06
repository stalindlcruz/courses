function mixin(Ctr, ...args) {
  Object.assign(Ctr.prototype, ...args);
}

let ladra = {
  ladra() {
    console.log("Estoy ladrando!");
  },
};

let vuela = {
  vuela() {
    console.log("Estoy volando!");
  },
};

let atteriza = {
  atteriza() {
    console.log("Estoy aterrizando!");
  },
};

let nada = {
  nada() {
    console.log("Estoy nadando!");
  },
};

let baño = {
  baño() {
    console.log("Estoy yendo al baño!");
  },
};

let camina = {
  camina() {
    console.log("Estoy caminando!");
  },
};

// vuela, nada, camina, va al baño
function Pato() {
  this.name = "patito";
}

mixin(Pato, vuela, nada, camina, baño);
let patito = new Pato();

// camina, nada, va al baño
function Perro() {}
Object.assign(Perro.prototype, nada, baño, camina);

let perrito = new Perro();
perrito.camina();

// nada, va al baño
function Pez() {}
Object.assign(Pez.prototype, nada, baño);

let p = new Pez();

// vuela pero no nada, camina ni va al baño
function Avion() {}

// avion.prototype = vuela;
/* avion.prototype = {
  ...vuela,
  ...nada,
}; */
Object.assign(Avion.prototype, vuela);
Object.assign(Avion.prototype, atteriza);
console.log(Avion.prototype, new Avion());

let perrito_2 = new Perro();
mixin(Perro, ladra);
