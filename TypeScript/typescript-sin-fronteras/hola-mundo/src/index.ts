// let mensaje: string = "Hola Mundo";
// // mensaje = 90; -> Da error porque esta variable esta esperando por un string.
// mensaje = "chanchito feliz";

// mensaje = "chao mundo";
// console.log(mensaje);
// console.log(typeof []);

// /*
// Tipos Nativos de JavaScript
// • number
// • string
// • boolean
// • null
// • undefined
// • object
// • function

// Tipos de TypeScript
// • any -> recomendable tratar de no usarlo (porque se puede pasar cualquier tipo de dato y esto elimina el proposito de TypeScript)
// • unknown
// • never
// • arrays
// • tuplas
// • enums

// Tipos inferidos
// -> Cuando inicialicemos una variable, TS sabra que tipo de variable es esta! (si ya le pasamos su valor a inicializarla, de lo contrario debemos especificarle el tipo).
// */

// let extincionDinosaurios = 76_000_000;
// let dinosaurioFavorito = "T-Rex";
// let extintos = true;
// let miVariable;

// function chanchitoFeliz(config: any) {
//   return config;
// }

// let animales: string[] = ["perro", "gato", "elefante"];
// let nums: number[] = [1, 2, 3];
// let checks: boolean[] = [true, false];
// let nums2: Array<number> = [];

// // nums.map((x) => x.) -> el autocompletado sugiere metodos del tipo de dato

// /*
// Una tupla, es una variable que contiene un set de datos que se encuentran ordenados.
// */

// let tupla: [number, string[]] = [1, ["chanchito feliz", "felipe"]];
// // tupla.push(12); -> Esto es un error de TS y de los editores, te deja hacer push de una dato que no tiene tipo o no esta definido en la tupla.

// /*
// Enums, significa tipo enumerado. Es una lista de constantes a las cuales podemos referenciar en un futuro.
// */

// const small = "s";
// const medium = "m";
// const large = "l";
// const xlarge = "xl";

// // PascalCase
// enum Size {
//   small = "s",
//   medium = "m",
//   large = "l",
//   xlarge = "xl",
// }

// let variable1 = Size.medium;
// console.log(variable1);

// /*
// Cuando declaramos los enums como una constante el codigo generado sera mas optimizado, ya que solo va a definir las constantes a medida las vayamos definiendo o asignandoo a otra variable.
// */
// const enum LoadingState {
//   Idle,
//   Loading,
//   Success,
//   Error,
// }

// const estado = LoadingState.Success;

// // const objeto: { id: number; name?: string } = { id: 1, name: "Chanchito" }; -> el signo "?" hace la propiedad opcional.

// type Direccion = {
//   numero: number;
//   calle: string;
//   pais: string;
// };

// type Persona = {
//   readonly id: number;
//   name: string;
//   size: Size;
//   direccion: Direccion;
// };

// const objeto: Persona = {
//   id: 1,
//   name: "Chanchito",
//   size: Size.small,
//   direccion: {
//     numero: 20,
//     calle: "holamundo",
//     pais: "City",
//   },
// };

// objeto.name = "Hola Mundo";

// const arr: Persona[] = [];
// arr.push({
//   id: 20,
//   name: "Stalin",
//   size: Size.large,
//   direccion: { numero: 4, calle: "call5", pais: "USA" },
// });

// // function fn1() {}
// /* const fn: () => number = () => {
//   let x = 2;
//   if (x > 5) {
//     return 7;
//   } else {
//     return 4;
//   }
// }; */

// const fn: (edad: number) => string = (edad: number) => {
//   if (edad > 17) {
//     return "Puedes ingresar";
//   }
//   return "No puedes ingresar";
// };

// const enum Permiso {
//   menor = "No puedes ingrsar",
//   mayor = "Puedes ingresar",
// }

// function validarEdad(edad: number, msg: string = "Chanchito Feliz"): string {
//   if (edad > 17) {
//     return `Puedes ingresar ${msg}`;
//   }
//   return `No puedes ingresar ${msg}`;
// }

// const x = validarEdad(20);
// console.log(x);

// // Aunque se pueda usar o dejar por defecto el tipo "void", el nuevo tipo "never" es recomendable para ser mas explicitos.
// function errorUsuario(): never {
//   throw new Error("Error de usuario");
// }

// // union type
// let puntaje: number | string = 90;
// puntaje = 98;
// puntaje = "Hola Mundo";

// type Animal = {
//   id: number;
//   estado: string;
// };

// type Usuario = {
//   id: number;
//   name: string;
// };

// let animal: Usuario | Animal = { id: 1, estado: "", name: "" };

// function sumaDos(n: number | string): number {
//   if (typeof n === "number") {
//     return n + 2;
//   }
//   return parseInt(n) + 2;
// }

// sumaDos("2");

// console.log("Suma de dos mas dos: ", "2" + 2);

// // Intersection type
// type Audit = {
//   created_at: string;
//   modified_at: string;
// };

// type Product = {
//   name: string;
// };

// const producto: Audit & Product = {
//   created_at: "",
//   modified_at: "",
//   name: "",
// };

// // literal types
// type Fibo = 0 | 1 | 2 | 3 | 5;
// const nDeFibo: Fibo = 2;

// // nullable types
// function toNumber(s: string | null | undefined) {
//   if (!s) {
//     return 0;
//   }
//   return parseInt(s);
// }

// const n = toNumber(undefined);

// // Optional chaining
// function getUser(id: number) {
//   if (id < 0) {
//     return null;
//   }
//   return { id: 1, name: "Felipe", created_at: new Date() };
// }

// const user = getUser(1);
// console.log("usuario", user?.created_at);

// // nullish coalescing operator
// const difficulty: number | null = 0;
// const user2 = {
//   username: "chanchito",
//   difficulty: difficulty ?? 1,
// };

// console.log(user2);

// /* type asesertion, se usan cuando estamos 100% seguros del tipo de datos que estamos recibiendo. */
// const element: any = null;
// const element2 = element as number;

// const input = document.getElementById("username") as HTMLInputElement;
// // const input = <HTMLInputElement>document.getElementById("username");

// /* type narrowing, es tener mas de un tipo de dato dentro d ela misma variable. */
// function lala(x: string | number) {
//   if (typeof x === "number") {
//     // x.toString(); // Nos devuelve todos los metodos y propiedades de los number.
//   }
//   if (typeof x === "string") {
//     // x.split(); // Nos devuelve todos los metodos y propiedades de los string.
//   }
// }

// /* type unknown */
// /* function procesa(algo: unknown) {
//   if (typeof algo === "string") {
//     return algo.toUpperCase();
//   }
//   if (typeof algo === "number") {
//     return algo.toString();
//   }

//   if (algo instanceof String) {
//   }
//   algo.otraCosas();
//   algo.genkidama();
// } */

// /*
// Programación Orientada a Objetos
// --------------------------------
// Se compone de clases y objetos.

// Una clase es como la estructura o plano de una casa y esta se compone de propiedades (variables) y metodos (funciones) dentro de las clases pasan a llamarse (propiedades, metodos) en vez de variables y funciones. Las clases nos sirven para crear instancias de objetos.

// Un objeto es la clase ya completamente contruída.
// */

class Personaje {
  // readonly id: number;
  // name: string;
  // nivel: number;
  // private _hp: number; // El guíon bajo es para indicar a otros desarrolladores que la propiedad es private (no es obligatorio, ni necesario).
  // profesion?: string;

  // constructor(
  //   id: number,
  //   name: string,
  //   nivel: number,
  //   _hp: number,
  //   profesion?: string
  // ) {
  //   this.id = id;
  //   this.name = name;
  //   this.nivel = nivel;
  //   this._hp = _hp;
  //   this.profesion = profesion;
  // }

  private static equipo: number = 1;

  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number,
    public profesion?: string
  ) {}

  static agregarPersonaje(): void {
    Personaje.equipo++;
  }

  subirNivel(): number {
    this.nivel = this.nivel + 1;
    return this.nivel;
  }

  cambiarHP(cantidad: number): number {
    this._hp = this._hp + cantidad;
    return this._hp;
  }

  /* Getters and Setters */

  // Forma antigua
  /* getHP(): number {
    return this._hp;
  } */

  get hp(): number {
    return this._hp;
  }

  static getEquipo(): number {
    return Personaje.equipo;
  }

  // Los Setter no retornan nungun valor
  set hp(cantidad: number) {
    this._hp = cantidad;
  }
}

const personaje = new Personaje(1, "Nicolas", 1, 100, "Developer");
personaje.subirNivel();
personaje.cambiarHP(-10);
const id = personaje.id;
// personaje.getHP();
personaje.hp = 20;

const personaje1 = new Personaje(2, "Chanchito", 1, 120, "Developer");

// Personaje.equipo = 1;
Personaje.agregarPersonaje();

console.log(Personaje.getEquipo());
