/*
Scope (Ámbito)
--------------
¿Qué es el Scope?

El scope (ámbito) es el contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está en el scope actual, entonces no está disponible para su uso.

Los scopes también se pueden superponer en una jerarquía, de modo que los scopes secundarios tengan acceso a los ámbitos primarios, pero no al revés.

Una función sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito, de modo que no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones.

Veamos un ejemplo de scope con variables:

let nombre = 'Ana' // Variable global

function saludar() {
  let apellido = 'García' // Variable local
  console.log(nombre + ' ' + apellido) // Puede acceder a ambas
}

saludar() // "Ana García"
console.log(nombre) // "Ana" ✅
console.log(apellido) // ❌ Error: apellido is not defined

Cadena de ámbitos (Scope Chain)

El ámbito global es el que tenemos en la raíz de nuestro código. A partir de ahí podemos crear un ámbito más localizado. Dentro, podemos crear otro nuevo... y así sucesivamente. Lo importante que debes tener en cuenta es que los ámbitos inferiores pueden acceder a los superiores pero no al revés.

let global = 'Soy global'

function externa() {
  let externa_var = 'Soy de la función externa'
  
  function interna() {
    let interna_var = 'Soy de la función interna'
    
    // Puede acceder a todas:
    console.log(interna_var)  // "Soy de la función interna"
    console.log(externa_var)  // "Soy de la función externa"  
    console.log(global)       // "Soy global"
  }
  
  // Aquí sólo puedes acceder a "externa_var" y "global"
  interna()
  // console.log(interna_var) // ❌ Error: no puede acceder
}

// Aquí sólo puedes acceder a la variable "global"
externa()

Prioridad de los scopes

Cuando tenemos múltiples scopes y variables con el mismo nombre, la prioridad es la siguiente:

Scope local (función actual)
Scope de función padre
Scope global
let name = 'Global'

function external() {
  let name = 'External'
  
  function internal() {
    let name = 'Internal'
    console.log(name) // "Internal" - prioridad local
  }

  internal()
  console.log(name) // "External" - prioridad local
}

external()
console.log(name) // "Global" - scope global
Como ves, no hay ningún problema en volver a crear una variable o función con el mismo nombre que otra variable que ya existe en un scope superior. Pero ten en cuenta que no puedes hacerlo si estás en el mismo scope.

let name = 'Global'
let name = 'Global' // ❌ SyntaxError: Identifier 'name' has already been declared.
Tipos de Scope

1. Scope Global

Variables y funciones declaradas en el nivel más alto del código:

let colorFavorito = 'azul' // Scope global

function mostrarColor() {
  console.log(colorFavorito) // Puede acceder
}

function cambiarColor() {
  colorFavorito = 'rojo' // Puede modificar
}

mostrarColor() // "azul"
cambiarColor()
mostrarColor() // "rojo"
2. Scope de Función

Variables declaradas dentro de una función:

function calcular() {
  let resultado = 10 * 5 // Solo existe dentro de esta función
  return resultado
}

console.log(calcular()) // 50 ✅
// console.log(resultado) // ❌ Error: resultado is not defined
3. Scope de Bloque (con let y const)

Variables declaradas dentro de {} (if, for, while, etc.):

if (true) {
  let dentroDelBloque = 'Solo aquí'
  var fueraDelBloque = 'Disponible fuera'
  
  console.log(dentroDelBloque) // ✅ Funciona
}

// console.log(dentroDelBloque) // ❌ Error
console.log(fueraDelBloque) // ✅ "Disponible fuera"
Importante: var no respeta el scope de bloque, pero let y const sí. Igualmente, a día de hoy, deberías evitar usar var y usar siempre let y const.

Resumiendo el ámbito (scope)

Scope (Ámbito)

Determina dónde puedes acceder a variables y funciones
Jerarquía: Los scopes hijos acceden a los padres, pero no al revés
Tipos: Global, Función, Bloque y Módulo
Cadena de Scope

JavaScript busca variables desde el scope local hacia el global
Prioridad: Local → Padre → Global
Diferencias Importantes

var: Scope de función (ignora bloques)
let/const: Scope de bloque
Ventajas del Scope

✅ Encapsulación de datos
✅ Prevención de conflictos de nombres
✅ Organización del código
✅ Seguridad y privacidad
*/
