/* 
Van a exisitir momentos donde nosotros vamos a querer acceder a variables privadas o metodos privados, para poder crear estos dentro de la función constructora 'solo declaras la variable y ya con esto no puedes acceder a ella, a diferencia de cuando asigas una propiedad con this.propierdad'.
*/

/* function User(a) {
  let name = a;
  this.getName = function () {
    return name;
  };
} */

/* Nueva funcionalidad en clases para crear propiedades y metodos privados. */
class User {
  // # -> Esto lo hace un miembro privado.
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  #logger() {}
}

const u = new User("Chanchito Feliz!");

// console.log(u.#name);

/* 
En conclusión
-------------
Si vamos a crear propiedades o metodos privados tenemos que utilizar el símbolo de numeral (#), para poder acceder a estas dentro de la misma clase tenemos que usar el símbolo de numeral para poder refenciarnos a ellas, tanto para las propiedades como para los metodos. No se puede acceder desde la instancia, solo desde la misma clase.
*/
