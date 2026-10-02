/*
Iteración de Arrays en JavaScript
---------------------------------
Ya hemos visto en clases anteriores cómo podemos crear bucles con for y while. Con estas estructuras de control, y una nueva que veremos en este clase, podemos también recorrer cada uno de los elementos de un array.

Además, veremos como los propios arrays tienen un método .forEach que nos permite ejecutar una función para cada uno de los elementos del array.

Bucle while

El bucle while vimos que permitía ejecutar un bloque de código mientras una condición era verdadera. En el caso de la iteración de arrays, la condición generalmente se basa en el índice del elemento.

Podemos, por ejemplo, crear una variable con let para guardar un puntero al índice del elemento que estamos iterando. En cada iteración, podemos incrementar el valor de la variable en 1, para que en la siguiente iteración se imprima el siguiente elemento.

let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}
Bucle for

El bucle for nos permitía ejecutar un bloque de código un número determinado de veces. En el caso de la iteración de arrays, podemos usarlo para recorrer cada uno de los elementos del array, usando la longitud del array como condición.

let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
También podrías recorrer el array en orden inverso, empezando desde el último elemento hasta el primero, usando i-- en lugar de i++.

let frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

Bucle for...of
--------------
Además de while y for, existe otra estructura de control que nos permite iterar sobre los elementos de un array: for...of. Esta estructura de control es más simple que for, ya que no necesitamos crear una variable para guardar el índice del elemento que estamos iterando.

Es mucho más sencilla y fácil de entender:

let frutas = ['🍎', '🍌', '🍓']

for (let fruta of frutas) {
  console.log(fruta) // imprime el elemento en la posición i
}
Como ves, hay algunas limitaciones en el uso de for...of. Por ejemplo, no podemos usarlo para recorrer un array en orden inverso y tampoco tenemos acceso al índice del elemento que estamos iterando.

El método array.forEach()

Ya hemos visto en la clase anterior que los arrays tienen métodos que nos permiten realizar operaciones sobre ellos, como añadir elementos o eliminarlos. Pero tiene muchos más métodos que iremos viendo que nos ayuda a trabajar con ellos.

Uno de esos métodos es array.forEach(), que nos permite ejecutar una function para cada uno de los elementos del array. Esta función recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array.

let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})
Usando una arrow function e indicando sólo los parámetros que necesitamos de nuestra función podemos simplificarlo aún más:

let frutas = ['🍎', '🍌', '🍓']

frutas.forEach((fruta) => {
  console.log(fruta) // imprime el elemento en la posición i
})
Algo importante es que array.forEach() no devuelve nada, por lo que no podemos asignar el resultado a una variable.

¿Cuál usar? Depende...

MÉTODO	ACCESO AL ÍNDICE	ACCESO AL VALOR	    PUEDE USAR BREAK	    CONTROL MANUAL DEL ÍNDICE
for	        ✅	                ✅	                ✅	                    ✅
while	    ✅	                ✅	                ✅	                    ✅
for...of	❌	                ✅	                ✅	                    ❌
forEach	    ✅	                ✅	                ❌*	                    ❌
Aunque técnicamente no puedes utilizar la sentencia break para salir de forEach, puedes simular esto lanzando una excepción y capturándola en un bloque try/catch externo. Obviamente es una mala práctica que no te recomiendo.
Cada uno de estos métodos tiene sus propios casos de uso. for y while son más generales y te permiten controlar el índice manualmente, lo que es útil si necesitas saltar a índices específicos, cambiar el orden de iteración o salir del bucle antes de que se complete.

for...of es más fácil de usar cuando solo necesitas los valores de un array y no te importa el índice. Es especialmente útil también cuando estás trabajando con iterables que no son arrays, como las cadenas de caracteres o los conjuntos (sets).

Finalmente, forEach es una forma muy eficiente y legible de iterar sobre un array si no necesitas break y si no necesitas controlar manualmente el índice.
*/

let frutas = ["Manzana", "Banana", "Pera"];

/* let i = 0;
while (i < frutas.length) {
  console.log(frutas[i])
  i++
} */

/* for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
} */

/* for (fruta of frutas) {
  console.log(fruta);
} */

/* frutas.forEach(function (el, index) {
  console.log('index: ' + index);
  console.log(el);
}) */

frutas.forEach((el) => {
  console.log(el);
});

/*
Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.

function sumarPares(numeros) {
  let suma = 0
  // tu código aquí
  return suma
}
*/

function sumarPares(numeros) {
  let suma = 0;
  // tu código aquí
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}
