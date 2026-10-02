let promesa1 = new Promise((resolve, rejectd) => {
  resolve(12);
});

let promesa2 = new Promise((resolve, rejectd) => {
  resolve(15);
});

/* promesa1
  .then((valor) => {
    if (valor > 10) {
      return valor + 18;
    }
    return promesa2;
  })
  .then((varlor2) => {
    console.log("Second promise", varlor2);
  }); */

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((varlor2) => {
    return varlor2;
  });
