/*
Parámetros
----------
Hasta ahora hemos visto como crear funciones y cómo llamarlas. Pero para poder desbloquear todo el potencial de las funciones, necesitamos que puedan recibir parámetros. Esto es, que su comportamiento pueda cambiar según los datos que le pasemos.

Imagina que queremos que nuestra función de saludar, pueda saludar a cualquier persona, no solo a Miguel. Para ello, podemos hacer que la función acepte un parámetro, que será el nombre de la persona a la que queremos saludar.

function saludar(nombre) {
  console.log('Hola ' + nombre)
}
Ahora, cada vez que llamemos a la función, podemos pasarle una cadena de texto:

saludar('Miguel') // -> Hola Miguel
saludar('Itziar') // -> Hola Itziar
saludar('Carmen') // -> Hola Carmen
Ya ves como algo que parece tan sencillo, tiene un poder enorme. Las funciones son la base de la programación y nos permiten crear programas complejos a partir de pequeñas piezas.

Por ejemplo, para crear una calculadora, deberíamos empezar a crear funciones que realicen las operaciones básicas. En este caso necesitaremos parametrizar la función para que acepte los dos números para hacer la operación.

function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}
Y ya podríamos usarlas:

const resultadoSuma = sumar(2, 3)
console.log(resultadoSuma) // -> 5

const resultadoResta = restar(5, 2)
console.log(resultadoResta) // -> 3
Parámetros y argumentos

En el ejemplo anterior, hemos visto que podemos pasarle valores a la función cuando la llamamos. A estos valores se les llama argumentos. Y a los valores que recibe la función, se les llama parámetros.

// la función suma tiene dos parámetros: a y b
function sumar(a, b) {
  return a + b
}

// cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
const resultadoSuma = sumar(2, 3)
Normalmente mucha gente confunde los términos y usa parámetro para referirse a los argumentos. Pero es importante que sepas diferenciarlos, porque son cosas distintas.

Funciones como parámetros

En JavaScript, las funciones son ciudadanos de primera clase (first-class citizens). Esto significa que las funciones se pueden tratar como cualquier otro valor: se pueden asignar a variables, pasar como argumentos a otras funciones, y devolver desde otras funciones.

¿Qué significa "funciones de primera clase"?

Que las funciones son valores como cualquier otro. Al igual que puedes pasar un número o un string como parámetro, también puedes pasar una función:

function saludar(nombre) {
  console.log('¡Hola, ' + nombre + '!')
}

function despedir(nombre) {
  console.log('¡Adiós, ' + nombre + '!')
}

// Función que recibe OTRA FUNCIÓN como parámetro
function procesarUsuario(nombre, accion) {
  accion(nombre) // Ejecutamos la función que nos pasaron
}

// Pasamos diferentes funciones como parámetros
procesarUsuario('Ana', saludar)   // ¡Hola, Ana!
procesarUsuario('Luis', despedir) // ¡Adiós, Luis!
Ejemplo práctico: Calculadora flexible

Un ejemplo muy sencilla es el de una calculadora flexible. Podemos pasar la operación que queremos realizar como parámetro además de los dos números.

function sumar(a, b) {
  return a + b
}

function multiplicar(a, b) {
  return a * b
}

function restar(a, b) {
  return a - b
}

// Función que recibe una operación como parámetro
function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2)
  console.log('El resultado es: ' + resultado)
  return resultado
}

// Usamos diferentes operaciones
calcular(5, 3, sumar)       // El resultado es: 8
calcular(5, 3, multiplicar) // El resultado es: 15
calcular(5, 3, restar)      // El resultado es: 2
Funciones anónimas como parámetros

También puedes pasar funciones que no tienen nombre (funciones anónimas):

// Función anónima pasada directamente
calcular(10, 2, function(a, b) {
  return a / b
})
// El resultado es: 5

// O usando funciones flecha (las veremos más adelante)
calcular(4, 3, (a, b) => a ** b) // El resultado es: 64 (4 elevado a 3)
¿Por qué es útil esto?

Las funciones como parámetros nos permiten crear código más flexible y reutilizable:

function repetirAccion(veces, accion) {
  for (let i = 0; i < veces; i++) {
    accion(i)
  }
}

// Diferentes acciones
repetirAccion(3, function(numero) {
  console.log('Iteración número: ' + numero)
})

repetirAccion(5, function(numero) {
  console.log('⭐'.repeat(numero + 1))
})
Este concepto es fundamental en JavaScript y lo usarás constantemente cuando trabajes con arrays, eventos, y programación asíncrona.

El orden de los parámetros importa

Algo muy importante, y un error muy común al empezar a crear funciones, es olvidar que el orden de los parámetros importa.

Vamos a crear una función que simule un microondas. Le pasaremos el plato, tiempo y potencia. Y nos devolverá el resultado del plato cocinado.

function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === '🐥' && tiempo === 1 && potencia === 5) {
    return '🍗'
  }

  if (plato === '🥚' && tiempo === 2 && potencia === 3) {
    return '🍳'
  }

  return '❌ Plato no soportado'
}
Sí, puedes hacer un return dentro de un condicional. Esto hace que la función se detenga y devuelva el valor indicado en el return.

Si usamos bien los parámetros, la función funciona correctamente:

const resultado = cocinarMicroondas('🐥', 1, 5)
console.log(resultado) // -> 🍗
Pero si cambiamos el orden de los parámetros, la función no funciona:

const resultado = cocinarMicroondas(1, 5, '🐥')
console.log(resultado) // -> '❌ Plato no soportado'
Esto es porque la función espera que el primer parámetro sea el plato, el segundo el tiempo y el tercero la potencia. Si cambiamos el orden, podemos tener comportamientos inesperados o errores.

Más adelante veremos una forma en la que podemos evitar este tipo de errores.
*/
