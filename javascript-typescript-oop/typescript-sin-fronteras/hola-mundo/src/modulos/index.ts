// Importar TODO con wildcard
import * as Utils from "./utils";
/* Los export default se importan sin {} a diferencia de los export regulares. */
import Group, { defaultGroups } from "./Group";
import { Point, Puntito } from "./Point";
import { Animales, Chanchitos, Caballos } from "./Animales/index";

console.log(Animales, Chanchitos, Caballos);

const point = new Point(1, 2);
const group = new Group(1, "chanchito");

console.log(Puntito);
console.log(defaultGroups.users);

// Ahora accedes con la notación de punto:
Utils.sumar(5, 3); // 8
Utils.restar(10, 4); // 6
console.log(Utils.PI); // 3.14159

const usuario: Utils.Usuario = {
  id: "1",
  nombre: "Ana",
};
