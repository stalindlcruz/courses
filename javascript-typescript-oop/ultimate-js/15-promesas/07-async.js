let promesa1 = (param1) =>
  new Promise((resolve, reject) => {
    // calcular algo...
    const b = "Hola Mundo!";
    resolve(b);
  });

let promesa2 = (param2) =>
  new Promise((resolve, reject) => {
    // calculamos algo...
    resolve(param2 + "Hola Mundo");
  });

let promesa3 = (param1, param2) =>
  new Promise((resolve, reject) => {
    resolve("Chanchito Feliz");
  });

async function main() {
  try {
    const a = await Promise.resolve("Primer Valor");
    const b = await promesa1(a);
    const _ = await promesa2(b);
    promesa3(a, b);
  } catch (error) {
    console.log({ error });
  }
}

main();
