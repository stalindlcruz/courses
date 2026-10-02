let collection = document.getElementsByTagName("p");
let list = document.querySelectorAll("p");
console.log(collection, list);

/* let item1 = collection.namedItem("chanchito");
let item2 = collection.item(3);
let item3 = collection[3]; */

/* // No se puede iterar con forEach porque no es un Array, se parece pero no lo es.
collection.array.forEach((x) => {
  console.log(x);
}); */

/* // iterar elementos
for (let el of collection) console.log(el); */

// Nos Muestra el objeto
// Array.from(collection).forEach((x) => console.log(x));

/* // Nos muestra el elemento mismo
[...collection].forEach((x) => console.log(x)); */

let item1 = list.item(3);
let item2 = list[3];

list.forEach((x) => console.log(x));

// entries, keys and values.

let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach((el) => console.log(el));
