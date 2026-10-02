let promesa1 = new Promise((resolve, rejectd) => {
  rejectd(12);
});

let promesa2 = new Promise((resolve, rejectd) => {
  resolve(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((varlor2) => {
    console.log("Second Promise");
    return varlor2;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Acá estamos en finally");
  });
