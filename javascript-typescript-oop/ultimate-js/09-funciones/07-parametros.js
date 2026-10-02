/* 
{
    url: ...
    bucket: amazon S3
    port: 80
}
*/

/* Forma antigua */
// function configurarAPI(url) {
//   const defaultURL = url || "https://holamundo.io";
//   return `${defaultURL}`;
// }

const config = {
  url: "https://holamundo.io",
};

function configurarAPI(url, bucket = 145, port = 80) {
  return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI("https://holamundo.io"));
