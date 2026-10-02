// Getters and Setters
class Restaurants {
  #timeTable;
  constructor(name) {
    this.name = name;
  }

  get timeTable() {
    return this.timeTable;
  }

  set timeTable(value) {
    let date = new Date(value);
    let time = date.getTime();
    if (Number.NaN(time)) {
      throw new Error("Fecha inválida");
    }
    this.#timeTable = date;
  }
}

const r = new Restaurants("BBQ");
