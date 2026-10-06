/* Manipulación del DOM */

let el = document.createElement("p");
el.innerText = "Elemento creado";

// El metodo append() puede recibir texto y nodos.
document.body.append(el);

el.remove();
document.body.prepend(el);

let div = document.createElement("div");
div.innerText = "Soy un texto";

el.replaceWith(div);

document.body.replaceChild(el, div);
document.body.removeChild(el);
document.body.appendChild(el);

// document.body.insertBefore(div, el);
document.body.insertAdjacentElement("beforebegin", div);
document.body.insertAdjacentElement("afterbegin", div);
document.body.insertAdjacentElement("beforeend", div);
document.body.insertAdjacentElement("afterend", div);

let section = document.createElement("section");
section.innerText = "Soy un Section";

document.body.insertAdjacentHTML("afterend", section.outerHTML);
document.body.insertAdjacentText("afterend", section.outerText);
