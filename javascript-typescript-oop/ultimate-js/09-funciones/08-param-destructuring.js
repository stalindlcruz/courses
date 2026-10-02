// function webServer(config) {
//   //   const url = config.url;
//   const { url } = config;
//   return url;
// }

// function webServer({ url }) {
//   return url;
// }

// console.log(webServer({ url: "https://holamundo.io" }));

// const config = {
//   url: "https://holamundo.io",
//   direccion: {
//     calle: "Hola Mundo",
//     numero: 80,
//   },
// };

// function webServer({ url, direccion: { calle } }) {
//   console.log(calle);
//   return url;
// }

// console.log(webServer(config));

const config = {
  url: "https://holamundo.io",
  direccion: {
    calle: "Hola Mundo",
    numero: 80,
  },
};

function webServer(config) {
  const { url, ...rest } = config;
  console.log(rest);
  return url;
}

console.log(webServer(config));

// const config = ["https://holamundo.io", 145, 80];

// function webServer([url, ...rest]) {
//   console.log(rest);
//   return url;
// }

// console.log(webServer(config));
