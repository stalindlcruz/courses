let objeto = {
  id: 1,
  name: "chanchito",
  login: function () {},
  logout: function () {},
};

let propiedad = "names";

function tienePropiedad(obj, propiedad) {
  let props = Object.keys(obj);

  for (let prop of props) {
    if (propiedad == prop) {
      return true;
    }
  }

  return false;
}

let resultado = tienePropiedad(objeto, propiedad);

console.log(resultado);
