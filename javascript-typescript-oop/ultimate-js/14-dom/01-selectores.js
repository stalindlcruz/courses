/*
Selectores
----------
Estos nos permiten seleccionar elementos dentro de nuestro documento HTML.

Diferencias entre HTMLCollection vs NodeList
--------------------------------------------
HTMLCollection -> No importa cuantas veces manipulemos o modifiquemos el DOM, esta siempre va a reflejar los ultimos cambios que tiene el DOM.

NodeList -> Esta no siempre va a sincronizar con los cambios que tengamos en el DOM.
*/

// HTMLDivELement
let htmlElement = document.getElementById("cuerpo");

// HTMLCollection -> se parece a un array pero no lo es.
let elementosRed = document.getElementsByClassName("red");

// NodeList
let elementosChanchito = document.getElementsByName("chanchito");

// HTMLCollection
let parrafos = document.getElementsByTagName("p");

// HTMLElement -> nos devuelve solo un elemento
let el = document.querySelector("#cuerpo");

// NodeList -> buscara mas de un elemento, tantos como logre encontrar.
let els = document.querySelectorAll("p");

let plive = document.getElementsByTagName("p");
let pstatic = document.querySelectorAll("p");
console.log(plive, pstatic);

let nuevoP = document.createElement("p");
document.body.append(nuevoP);
console.log(plive, pstatic);
