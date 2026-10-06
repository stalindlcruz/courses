/* 
PROMESAS EN JAVASCRIPT
-----------------------
Las promesas en JavaScript representan el estado de una petición.
*/

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola Mundo!");
  }, 1000);
});

promesa.then(
  (valor) => console.log(valor),
  (error) => console.log("error", error)
);
