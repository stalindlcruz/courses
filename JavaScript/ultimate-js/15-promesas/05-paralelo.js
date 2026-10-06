const p1 = Promise.reject("Fallo en conexión al servidor");
const p2 = Promise.resolve(42);
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "After a second");
});

/* Promise.all([p1, p2, p3])
  .then((valores) => {
    console.log("All", valores);
  })
  .catch((error) => {
    console.log("Error in all or in some", error);
  }); */

/* Promise.race([p1, p2, p3])
  .then((valor) => {
    console.log("race", valor);
  })
  .catch((error) => {
    console.log("Error in race", error);
  }); */

/* Promise.any([p1, p2, p3])
  .then((valor) => console.log({ valor }))
  .catch((e) => console.log({ e }))
  .finally(() => {
    console.log("Already completed");
  }); */

Promise.allSettled([p1, p2, p3])
  .then((valor) => {
    console.log({ valor });
  })
  .catch((error) => {
    console.log({ error });
  })
  .finally(() => {
    console.log("allSettled already completed");
  });
