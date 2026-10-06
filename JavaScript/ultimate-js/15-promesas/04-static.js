let promesa1 = new Promise((resolve, rejectd) => {
  resolve(2);
});

let promesa2 = new Promise((resolve, rejectd) => {
  resolve(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
    // return Promise.reject("Valor menor que 10");
    return Promise.resolve(valor);
  })
  .then((varlor2) => {
    console.log("Second Promise", varlor2);
    return varlor2;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Acá estamos en finally");
  });
