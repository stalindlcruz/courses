let form = document.createElement("form");
form.id = "mi-formulario";

let input = document.createElement("input");
input.setAttribute("type", "text");

let btn = document.createElement("button");
btn.innerText = "Send";

form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = (event) => {
  console.log("Entra el mouse", event);
};

form.onmouseleave = (event) => {
  console.log("Sale el mouse", event);
};

input.onfocus = (event) => {
  console.log("input seleccionado", event);
};

input.onblur = (event) => {
  console.log("perdio el foco", event);
};

input.onchange = (e) => {
  console.log("valor cambia", e.target.value);
};

/* btn.onclick = (e) => {
  // Este metodo impide que la pagina web se refresque
  e.preventDefault();
  console.log("botón ckickeado");
}; */

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("botón clickeado");
});
