let el = document.createElement("p");
let secondElement = document.createElement("a");

let parrafo = document.createElement("p");
parrafo.innerHTML = "lorem ipsum";

el.innerHTML = "Elemento creado";
// secondElement.innerText = "https://www.google.com";
secondElement.href = "https://www.google.com";
secondElement.textContent = "Go to Google";

el.innerHTML = "<ul> <li>Hola Mundo!</li> </ul>";

document.body.append(el, secondElement, parrafo);

parrafo.style = "background-color: lightblue; font-size: 20px; color: white;";

// Settear propiedades personalizadas
parrafo.setAttribute("mipropiedad", "mi propiedad");

// Obtener valor de algun atributo
let get = parrafo.getAttribute("mipropiedad");

// Preguntar si tiene alguna propiedad en especifico
let esp = parrafo.hasAttribute("mipropiedad");
