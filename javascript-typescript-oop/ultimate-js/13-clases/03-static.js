/* Metodos estáticos */

class Restaurants {
  static cantidad = 12;
  constructor(name) {
    this.name = name;
  }

  // obtener horario
  getTimeTable() {
    console.log("horario restaurante");
  }

  static getRestaurant(id) {
    return new Restaurants("BBQ");
  }
}

const r = Restaurants.getRestaurant();
