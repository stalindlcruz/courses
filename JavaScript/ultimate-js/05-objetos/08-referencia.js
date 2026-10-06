/* let a = 1;
let b = a;

b++;
console.log(a, b);
 */

/* let a = {};
let b = a;

b.prop1 = 1;
b.prop2 = 2;
a.prop3 = 3;

console.log(a, b); */

/* let a = 1;

function suma(n) {
    return n++;
}

suma(a);
console.log(a, suma(a));
// Siempre devuelve 1, porque a y n tienen espacios en memoria diferentes. */

let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);

/*
En los objetos se pasan por referencia por eso no sucede lo mismo y devuelve 2.

Primitivos --> Se copian.

Referencia --> Se pasan por referencia: objetos, array y funciones
*/

/* En JavaScript los tipos de datos se dividen en primitivos y de referencia. La diferencia principal entre ellos es como se almacenan y manipulan en la memoria. */

/*
Tipos de datos primitivos
--------------------------

Los primitivos son inmutables y se almacenan directamente en la memoria. Esto significa que cuando asignas un valor primitivo a una variable, esta almacena el valor real, no una referencia a un objeto.

Cuando asignas un valor primitivo a otra variable, este se copia, por lo que cada variable es independiente.
*/

// 1. String -> Cadenas de texto
let nombre = "Stalin";
let otroNombre = nombre;  // Se copia el valor
nombre = "Carlos";  // Se cambia solo `nombre`, no afecta `otroNombre`
console.log(otroNombre); // "Stalin"

// 2. number -> Numeros(enteros y decimales)
let edad = 30;
let otraEdad = edad;  // Se copia el valor
edad = 35;
console.log(otraEdad); // 30

// 3. boolean -> true or false
let esMayor = true;
let otraVariable = esMayor;
esMayor = false;
console.log(otraVariable); // true

// 4. undefined -> Una variable sin valor asignado.
let sinValor;
console.log(sinValor); // undefined

// 5. null -> Representa "ausencia de valor"
let vacio = null;
console.log(vacio); // null

// 6. Symbol (poco usado) -> Crea valores únicos
let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2); // false

// 7. BingInt -> Para numeros muy grandes (más grandes que Number.MAX_SAFE_INTEGER)
let numeroGrande = 12345678901234567890n;
console.log(numeroGrande);


/*
Tipos de Datos por referencia
------------------------------

Los datos por referencia son objetos y estructuras mas complejas. En lugar de almacenar el valor directamente, la variable almacena una referencia a la ubicacion en memoria donde esta el objeto.

Los tipos de datos por referencia son:
• Object
• Array
• Function
• Otros objetos como Date, RegExp, Set, Map, etc.

Diferencia clave:
    Cuando asignas un objeto a otra variable, ambas variables apuntan al mismo lugar en memoria.
    Si modificas el objeto desde una variable, los cambios afectarán a la otra.
*/

// 1. Object -> Estructura que almacena pares clave-valor
let persona = { nombre: "Stalin", edad: 30 };
let otraPersona = persona; // Se copia la referencia, NO el valor

persona.edad = 35;
console.log(otraPersona.edad); // 35 (ambas variables apuntan al mismo objeto)

// 2. Array -> Lista ordenada de valores
let numeros = [1, 2, 3];
let otrosNumeros = numeros;

numeros.push(4);
console.log(otrosNumeros); // [1, 2, 3, 4]

// 3. Function -> Código reutilizable
function saludar() {
    console.log("Hola, Stalin!");
}

let otraFuncion = saludar;
otraFuncion(); // "Hola, Stalin!"