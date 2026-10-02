// /* function log(a: string, b: string) {
//   console.log(a, b);
// }

// function logN(a: string, b: number) {
//   console.log(a, b);
// }

// log("dato", "chanchito"); */

// // function log<T>(a: string, b: T) {
// //   console.log(a, b);
// // }

// function log<T, V>(a: T, b: V): V {
//   console.log(a, b);
//   return b;
// }

// /* TypeScript puede inferir en los tipos, sin la necesidad de pasarlos explicitamente. */

// // log<string, number>("Dato", 42);
// // log<string, string>("Dato", "Chanchito");

// log("Dato", 42);
// log("Dato", "Chanchito");

async function fetchData<T>(recurso: string): Promise<T> {
  const response = await fetch(`${recurso}`);
  return response.json();
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = await fetchData<User>("/usuarios");
  user.id;
}

type Computador = {
  encender: () => void;
  apagar: () => void;
};

class Programador<T> {
  computador: T;
  constructor(t: T) {
    this.computador = t;
  }
}

const programador = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
});
const programador1 = new Programador<string>("Hola Mundo");

programador.computador.encender();
programador1.computador.toLowerCase();

// interface KeyValue<T, V> {
//   key: T;
//   value: V;
// }

type KeyValue<T, V> = {
  key: T;
  value: V;
};

interface Product {
  id: string;
}

function fetchProduct(): KeyValue<string, Product> {
  return {
    key: "id de producto",
    value: { id: "id de product too" },
  };
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: "id de producto",
    value: 48,
  };
}

/* constraints = restricciones */
// interface Usuario {
//   id: number;
//   name: string;
// }

class Usuario {
  constructor(public id: number) {}
}

function print<T extends Usuario>(t: T): T {
  console.log(t);
  return t;
}

// print<Usuario>({ id: 20, name: "Felix" });
print({ id: 20, name: "Felix" });

/* Genéricos y Herencia */

class Estado<T> {
  protected data: T[] = [];

  agregar(t: T): void {
    this.data.push(t);
  }

  getEstado(): T[] {
    return this.data;
  }
}

// const estadoUsuarios = new Estado<Usuario>();
// estadoUsuarios.getEstado();

type ObjectId = {
  id: number;
};

// pasar genericos con restricciones
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
  eliminar(id: number) {
    this.data = this.data.filter((x) => x.id !== id);
  }
}

// pasar el generico
const estadoELiminar = new EstadoEliminar<Usuario>();
estadoELiminar.eliminar(2);

// pasar el generico fijo
class EstadoUsuario extends Estado<Usuario> {
  reiniciarContraseñas() {
    // aquí va la lógica...
  }
}

const estadoUsuario = new EstadoUsuario();

type Calendar = {
  id: number;
  fuente: string;
  owner: string;
};

const calendar: Calendar = { id: 1, fuente: "google", owner: "Google" };

function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property];
}

getProp<Calendar>(calendar, "id");
getProp<Calendar>(calendar, "fuente");

/* // No se puede pasar una propiedad que no existe
getProp<Calendar>(calendar, "propiedad que no existe"); */

/* Utility Types */
type Punto = {
  x: number;
  y: number;
  desc?: string;
};

/* type PuntoOpcional = {
  x?: number;
  y?: number;
  desc?: string;
}; */

type PuntoOpcional = Partial<Punto>;
type PuntoRequerido = Required<Punto>;

const KeyVal: Record<string, number> = {
  "soy un string": 42,
};

/* // Record hace esto mismo
type Kv = { [key: string]: number }; */

const p: Omit<Punto, "desc" | "y"> = {
  x: 1,
  // y: 2,
};

const p1: Pick<Punto, "x" | "y"> = {
  x: 1,
  y: 2,
};

const readOnlyP: Readonly<Punto> = {
  x: 4,
  y: 5,
  desc: "soy una descripcion",
};

/* // solo es readonly, no puede ser modificada
readOnlyP.x = 2; */
